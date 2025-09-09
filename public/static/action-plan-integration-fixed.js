// Sistema de Integração Completo - Planos de Ação
(function() {
    console.log('🚀 Iniciando integração do Sistema de Planos de Ação...');
    
    // Aguarda carregamento completo de todos os componentes
    let checkInterval;
    let attempts = 0;
    const maxAttempts = 50;
    
    function waitForComponents() {
        return new Promise((resolve) => {
            checkInterval = setInterval(() => {
                attempts++;
                
                if (window.aiAssistant && window.aiConcerns && window.ActionPlanSystem) {
                    clearInterval(checkInterval);
                    console.log('✅ Todos os componentes carregados!');
                    resolve();
                } else {
                    console.log(`⏳ Aguardando componentes... (tentativa ${attempts}/${maxAttempts})`);
                    if (!window.aiAssistant) console.log('   - aiAssistant não encontrado');
                    if (!window.aiConcerns) console.log('   - aiConcerns não encontrado');
                    if (!window.ActionPlanSystem) console.log('   - ActionPlanSystem não encontrado');
                    
                    if (attempts >= maxAttempts) {
                        clearInterval(checkInterval);
                        console.error('❌ Timeout ao aguardar componentes');
                        resolve(); // Resolve mesmo assim para tentar inicializar
                    }
                }
            }, 100);
        });
    }
    
    async function initializeIntegration() {
        await waitForComponents();
        
        console.log('🔧 Iniciando configuração da integração...');
        
        // Inicializa o sistema de planos se ainda não foi inicializado
        if (!window.actionPlanSystem && window.ActionPlanSystem) {
            window.actionPlanSystem = new ActionPlanSystem();
            console.log('✅ ActionPlanSystem inicializado');
        }
        
        // Sobrescreve o método showDetails do aiConcerns
        if (window.aiConcerns && window.aiConcerns.showDetails) {
            const originalShowDetails = window.aiConcerns.showDetails.bind(window.aiConcerns);
            
            window.aiConcerns.showDetails = function(alertId) {
                console.log('🎯 showDetails interceptado! AlertId:', alertId);
                
                // Chama o método original primeiro
                originalShowDetails(alertId);
                
                // Aguarda um momento para o modal original ser criado
                setTimeout(() => {
                    integrateActionPlanToModal(alertId);
                }, 100);
            };
            
            console.log('✅ Método showDetails sobrescrito com sucesso');
        }
        
        // Modifica o addMessage do assistente para suportar botões de ação
        if (window.aiAssistant && window.aiAssistant.addMessage) {
            const originalAddMessage = window.aiAssistant.addMessage.bind(window.aiAssistant);
            
            window.aiAssistant.addMessage = function(text, sender, options = {}) {
                console.log('📝 addMessage interceptado:', { text, sender, options });
                
                // Chama o método original
                originalAddMessage(text, sender);
                
                // Se tiver botões de ação, adiciona eles
                if (options.actionButtons && sender === 'ai') {
                    setTimeout(() => {
                        addActionButtonsToLastMessage(options.actionButtons);
                    }, 50);
                }
            };
            
            console.log('✅ Método addMessage modificado para suportar botões');
        }
        
        // Adiciona listener global para detectar cliques em alertas
        document.addEventListener('click', function(e) {
            // Detecta clique em cartões de alerta
            const alertCard = e.target.closest('.alert-card');
            if (alertCard) {
                const alertId = alertCard.dataset.alertId || 'alert-' + Date.now();
                console.log('🔔 Clique em alerta detectado:', alertId);
                showActionPlanAssistant(alertId);
            }
            
            // Detecta clique no botão "Ver Detalhes" dentro dos alertas
            if (e.target.textContent === 'Ver Detalhes' || e.target.classList.contains('concern-detail-btn')) {
                console.log('🔍 Botão Ver Detalhes clicado');
                // O showDetails já foi sobrescrito, então a integração ocorrerá automaticamente
            }
        });
        
        console.log('✅ Integração configurada com sucesso!');
    }
    
    function integrateActionPlanToModal(alertId) {
        console.log('🎨 Integrando plano de ação ao modal...');
        
        // Procura o modal de detalhes
        const modal = document.querySelector('.concern-detail-modal, #concern-detail-modal, [class*="modal"]');
        if (!modal) {
            console.log('⚠️ Modal não encontrado, tentando criar conteúdo customizado...');
            createCustomModalContent(alertId);
            return;
        }
        
        // Adiciona seção de plano de ação ao modal
        const existingPlanSection = modal.querySelector('.action-plan-section');
        if (!existingPlanSection) {
            const modalContent = modal.querySelector('.modal-content, .concern-detail-content, [class*="content"]');
            if (modalContent) {
                const planSection = document.createElement('div');
                planSection.className = 'action-plan-section';
                planSection.style.cssText = `
                    margin-top: 20px;
                    padding: 20px;
                    background: linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(255,107,53,0.1) 100%);
                    border-radius: 15px;
                    border: 2px solid #FF8C00;
                `;
                
                planSection.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                        <i class="fas fa-robot" style="color: #FF8C00; font-size: 24px;"></i>
                        <h3 style="color: #FF8C00; margin: 0;">Assistente de IA - Plano de Ação</h3>
                    </div>
                    <p style="color: #333; margin-bottom: 15px;">
                        <strong>⚠️ Detectei um alerta importante que requer sua atenção.</strong><br>
                        O que deseja fazer? Posso gerar um plano de ação com uma sugestão de demanda e pessoas?
                    </p>
                    <div class="action-buttons" style="display: flex; flex-wrap: wrap; gap: 10px;">
                        ${createActionButtons()}
                    </div>
                `;
                
                modalContent.appendChild(planSection);
                
                // Adiciona event listeners aos botões
                attachButtonListeners(planSection, alertId);
                
                console.log('✅ Seção de plano de ação adicionada ao modal');
            }
        }
    }
    
    function createCustomModalContent(alertId) {
        // Abre o assistente diretamente se não encontrar o modal
        showActionPlanAssistant(alertId);
    }
    
    function showActionPlanAssistant(alertId) {
        console.log('💬 Abrindo assistente com mensagem de plano de ação...');
        
        // Abre o chat do assistente
        if (window.aiAssistant && !window.aiAssistant.isOpen) {
            window.aiAssistant.toggleChat();
        }
        
        // Aguarda o chat abrir
        setTimeout(() => {
            // Adiciona mensagem personalizada
            if (window.aiAssistant) {
                const customMessage = `
                    <div style="margin-bottom: 10px;">
                        <strong style="color: #FF8C00;">⚠️ Alerta Detectado - Ação Necessária</strong>
                    </div>
                    <p style="margin-bottom: 10px;">
                        Detectei um alerta importante que requer sua atenção.<br>
                        <strong>O que deseja fazer?</strong> Posso gerar um plano de ação com uma sugestão de demanda e pessoas.
                    </p>
                `;
                
                // Usa o método modificado com opções de botões
                window.aiAssistant.addMessage(customMessage, 'ai', {
                    actionButtons: [
                        { text: 'Sim, gere o plano', action: 'generate', alertId: alertId },
                        { text: 'Analisar impacto', action: 'impact', alertId: alertId },
                        { text: 'Casos similares', action: 'similar', alertId: alertId },
                        { text: 'Delegar tarefa', action: 'delegate', alertId: alertId },
                        { text: 'Agendar revisão', action: 'schedule', alertId: alertId }
                    ]
                });
            }
        }, 300);
    }
    
    function createActionButtons() {
        const buttons = [
            { text: 'Sim, gere o plano', icon: 'fa-check-circle', action: 'generate' },
            { text: 'Analisar impacto', icon: 'fa-chart-line', action: 'impact' },
            { text: 'Casos similares', icon: 'fa-search', action: 'similar' },
            { text: 'Delegar tarefa', icon: 'fa-user-plus', action: 'delegate' },
            { text: 'Agendar revisão', icon: 'fa-calendar', action: 'schedule' }
        ];
        
        return buttons.map(btn => `
            <button class="action-plan-btn" data-action="${btn.action}" style="
                padding: 10px 16px;
                background: white;
                border: 2px solid #FF8C00;
                color: #FF8C00;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s;
            " onmouseover="this.style.background='#FF8C00'; this.style.color='white';" 
               onmouseout="this.style.background='white'; this.style.color='#FF8C00';">
                <i class="fas ${btn.icon}"></i>
                ${btn.text}
            </button>
        `).join('');
    }
    
    function addActionButtonsToLastMessage(buttons) {
        console.log('🔘 Adicionando botões de ação à última mensagem...');
        
        const messages = document.querySelectorAll('.ai-message-ai');
        const lastMessage = messages[messages.length - 1];
        
        if (lastMessage) {
            const content = lastMessage.querySelector('.ai-message-content');
            if (content && !content.querySelector('.message-action-buttons')) {
                const buttonsContainer = document.createElement('div');
                buttonsContainer.className = 'message-action-buttons';
                buttonsContainer.style.cssText = `
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 12px;
                `;
                
                buttons.forEach(btn => {
                    const button = document.createElement('button');
                    button.textContent = btn.text;
                    button.className = 'message-action-btn';
                    button.dataset.action = btn.action;
                    button.dataset.alertId = btn.alertId;
                    button.style.cssText = `
                        padding: 8px 14px;
                        background: white;
                        border: 1.5px solid #FF8C00;
                        color: #FF8C00;
                        border-radius: 6px;
                        cursor: pointer;
                        font-size: 13px;
                        font-weight: 500;
                        transition: all 0.2s;
                    `;
                    
                    button.onmouseover = () => {
                        button.style.background = '#FF8C00';
                        button.style.color = 'white';
                    };
                    
                    button.onmouseout = () => {
                        button.style.background = 'white';
                        button.style.color = '#FF8C00';
                    };
                    
                    button.onclick = () => handleActionButtonClick(btn.action, btn.alertId);
                    
                    buttonsContainer.appendChild(button);
                });
                
                content.appendChild(buttonsContainer);
                console.log('✅ Botões adicionados à mensagem');
            }
        }
    }
    
    function attachButtonListeners(container, alertId) {
        const buttons = container.querySelectorAll('.action-plan-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                const action = this.dataset.action;
                handleActionButtonClick(action, alertId);
            });
        });
    }
    
    function handleActionButtonClick(action, alertId) {
        console.log('🎬 Ação de botão:', action, 'AlertId:', alertId);
        
        // Verifica se os handlers estão disponíveis
        if (!window.actionPlanHandlers) {
            console.log('⏳ Carregando handlers...');
            // Tenta carregar o script se não estiver carregado
            const script = document.createElement('script');
            script.src = '/static/action-plan-handlers.js';
            script.onload = () => {
                console.log('✅ Handlers carregados!');
                handleActionButtonClick(action, alertId); // Rechama após carregar
            };
            document.head.appendChild(script);
            return;
        }
        
        // Usa os novos handlers completos
        switch(action) {
            case 'generate':
                window.actionPlanHandlers.generateActionPlan(alertId);
                break;
                
            case 'impact':
                window.actionPlanHandlers.analyzeFinancialImpact(alertId);
                break;
                
            case 'similar':
                window.actionPlanHandlers.findSimilarCases(alertId);
                break;
                
            case 'delegate':
                window.actionPlanHandlers.delegateTask(alertId);
                break;
                
            case 'schedule':
                window.actionPlanHandlers.scheduleReview(alertId);
                break;
                
            default:
                console.log('⚠️ Ação não reconhecida:', action);
        }
    }
    
    // Inicia a integração
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeIntegration);
    } else {
        initializeIntegration();
    }
    
    // Exporta funções para debug
    window.actionPlanIntegration = {
        showActionPlanAssistant,
        handleActionButtonClick,
        reinitialize: initializeIntegration
    };
    
    console.log('📦 Sistema de integração carregado e exportado para window.actionPlanIntegration');
})();