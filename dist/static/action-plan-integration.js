// Integração corrigida entre AI Concerns e Action Plan System
(function() {
    // Aguarda todos os componentes carregarem
    let retryCount = 0;
    const maxRetries = 20;
    
    function integrateComponents() {
        retryCount++;
        
        // Verifica se os componentes necessários existem
        if (!window.aiConcerns || !window.actionPlan) {
            if (retryCount < maxRetries) {
                console.log('Aguardando componentes carregarem...', retryCount);
                setTimeout(integrateComponents, 500);
            }
            return;
        }
        
        console.log('✅ Integrando AI Concerns com Action Plan System');
        
        // Salva a função original
        const originalShowDetails = window.aiConcerns.showDetails.bind(window.aiConcerns);
        
        // Sobrescreve com a nova funcionalidade
        window.aiConcerns.showDetails = function(alertId) {
            console.log('🎯 Alert clicado:', alertId);
            
            // Chama a função original primeiro (que abre o assistente)
            originalShowDetails(alertId);
            
            // Remove a mensagem padrão antiga e adiciona a nova
            setTimeout(() => {
                // Verifica se o assistente está disponível
                if (window.aiAssistant) {
                    // Remove qualquer mensagem anterior
                    const messages = document.getElementById('ai-messages');
                    if (messages) {
                        const lastMessage = messages.lastElementChild;
                        if (lastMessage && lastMessage.querySelector('.ai-message-ai')) {
                            const messageText = lastMessage.textContent;
                            if (messageText.includes('Detectei uma preocupação importante')) {
                                lastMessage.remove();
                            }
                        }
                    }
                    
                    // Adiciona a nova mensagem
                    window.aiAssistant.addMessage(
                        'Detectei um alerta importante que requer sua atenção. O que deseja fazer? Posso gerar um plano de ação com uma sugestão de demanda e pessoas?',
                        'ai'
                    );
                    
                    // Adiciona os botões de ação
                    setTimeout(() => {
                        addActionButtons(alertId);
                    }, 100);
                }
            }, 600);
        };
        
        console.log('✅ Integração concluída com sucesso!');
    }
    
    function addActionButtons(alertId) {
        const messagesContainer = document.getElementById('ai-messages');
        if (!messagesContainer) {
            console.log('❌ Container de mensagens não encontrado');
            return;
        }
        
        // Remove botões anteriores se existirem
        const existingButtons = messagesContainer.querySelector('.ai-action-buttons');
        if (existingButtons) {
            existingButtons.remove();
        }
        
        // Cria os novos botões
        const actionButtonsDiv = document.createElement('div');
        actionButtonsDiv.className = 'ai-action-buttons';
        actionButtonsDiv.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 12px;
            background: linear-gradient(135deg, #FFF7ED 0%, #FED7AA 10%);
            border-radius: 12px;
            margin: 8px;
            animation: slideInUp 0.3s ease;
        `;
        
        // Define os botões
        const buttons = [
            {
                text: 'Sim, gere o plano',
                icon: 'fa-clipboard-list',
                action: 'generatePlan',
                primary: true
            },
            {
                text: 'Analisar impacto',
                icon: 'fa-chart-line',
                action: 'showAnalysis'
            },
            {
                text: 'Casos similares',
                icon: 'fa-history',
                action: 'showSimilarCases'
            },
            {
                text: 'Delegar tarefa',
                icon: 'fa-user-plus',
                action: 'delegateTask'
            },
            {
                text: 'Agendar revisão',
                icon: 'fa-calendar-plus',
                action: 'scheduleReview'
            }
        ];
        
        // Cria cada botão
        buttons.forEach(btn => {
            const button = document.createElement('button');
            button.className = btn.primary ? 'action-btn-primary' : 'action-btn-secondary';
            button.style.cssText = btn.primary ? `
                padding: 10px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%);
                color: white;
                box-shadow: 0 2px 8px rgba(255, 140, 0, 0.3);
            ` : `
                padding: 8px 14px;
                border-radius: 18px;
                font-size: 13px;
                font-weight: 500;
                border: 1px solid #E5E7EB;
                cursor: pointer;
                transition: all 0.3s ease;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                background: white;
                color: #4B5563;
            `;
            
            button.innerHTML = `<i class="fas ${btn.icon}"></i> ${btn.text}`;
            
            // Adiciona o evento de clique
            button.onclick = function() {
                console.log('🎯 Botão clicado:', btn.action);
                if (window.actionPlan && window.actionPlan[btn.action]) {
                    // Armazena o alerta atual antes de executar a ação
                    window.actionPlan.currentAlert = {
                        id: alertId,
                        title: getAlertTitle(alertId),
                        severity: 'high'
                    };
                    window.actionPlan[btn.action]();
                } else {
                    console.error('Função não encontrada:', btn.action);
                }
            };
            
            // Efeito hover
            button.onmouseover = function() {
                if (btn.primary) {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 4px 12px rgba(255, 140, 0, 0.4)';
                } else {
                    this.style.backgroundColor = '#F9FAFB';
                    this.style.borderColor = '#FF8C00';
                    this.style.color = '#FF8C00';
                }
            };
            
            button.onmouseout = function() {
                if (btn.primary) {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 2px 8px rgba(255, 140, 0, 0.3)';
                } else {
                    this.style.backgroundColor = 'white';
                    this.style.borderColor = '#E5E7EB';
                    this.style.color = '#4B5563';
                }
            };
            
            actionButtonsDiv.appendChild(button);
        });
        
        // Adiciona os botões ao container
        messagesContainer.appendChild(actionButtonsDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        console.log('✅ Botões de ação adicionados com sucesso!');
    }
    
    function getAlertTitle(alertId) {
        // Tenta pegar o título do alerta baseado no contexto
        const alertCard = document.querySelector(`[onclick*="${alertId}"]`);
        if (alertCard) {
            const titleElement = alertCard.querySelector('h4');
            if (titleElement) {
                return titleElement.textContent;
            }
        }
        
        // Títulos padrão baseados no ID
        const titles = {
            'd1': 'Setores Críticos',
            'd2': 'Glosas Evitadas',
            'p1': 'Consulta Próxima',
            'p2': 'Medicação',
            'm1': 'Paciente Crítico',
            'f1': 'Risco de Glosa',
            'n1': 'Gargalo Detectado'
        };
        
        return titles[alertId] || 'Alerta Importante';
    }
    
    // Adiciona animação CSS se não existir
    if (!document.querySelector('#action-plan-animations')) {
        const style = document.createElement('style');
        style.id = 'action-plan-animations';
        style.innerHTML = `
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .ai-action-buttons {
                animation: slideInUp 0.3s ease;
            }
            
            .action-btn-primary:active {
                transform: scale(0.95);
            }
            
            .action-btn-secondary:active {
                transform: scale(0.95);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Inicia a integração
    integrateComponents();
    
    // Também tenta integrar quando a página carregar completamente
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', integrateComponents);
    }
    
    // E também após um delay para garantir
    setTimeout(integrateComponents, 2000);
    
    console.log('🚀 Script de integração carregado');
})();