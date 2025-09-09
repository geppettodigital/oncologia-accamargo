// Portal Helpers - Tooltips and AI Assistant Integration
class PortalHelpers {
    constructor() {
        this.portalInfo = {
            'patient': {
                title: 'Portal do Paciente',
                description: 'Sistema integrado de autoatendimento que permite aos pacientes gerenciar sua jornada oncológica de forma autônoma.',
                features: [
                    'Auto-triagem inteligente com IA',
                    'Agendamento online de consultas e exames',
                    'Acompanhamento do plano terapêutico',
                    'Acesso a resultados e histórico médico',
                    'Comunicação direta com equipe de cuidados'
                ],
                aiPrompts: [
                    'Como agendar uma consulta?',
                    'Ver meu histórico médico',
                    'Próximos exames agendados',
                    'Falar com meu navegador'
                ]
            },
            'doctor': {
                title: 'Portal Médico',
                description: 'Plataforma avançada de suporte à decisão clínica com inteligência artificial para otimização do cuidado oncológico.',
                features: [
                    'Assistente clínico com IA baseado em evidências',
                    'Protocolos personalizados por tipo de câncer',
                    'Dashboard integrado de pacientes',
                    'Alertas preditivos de complicações',
                    'Biblioteca de evidências científicas atualizadas'
                ],
                aiPrompts: [
                    'Protocolos para câncer de mama',
                    'Pacientes prioritários hoje',
                    'Últimas evidências científicas',
                    'Análise preditiva de riscos'
                ]
            },
            'navigator': {
                title: 'Navegador de Pacientes',
                description: 'Sistema de coordenação e acompanhamento que garante a continuidade e qualidade do cuidado durante toda a jornada.',
                features: [
                    'Visão 360° da jornada do paciente',
                    'Gestão de barreiras e facilitadores',
                    'Otimização automática de rotas de cuidado',
                    'Monitoramento de adesão ao tratamento',
                    'Alertas proativos de intervenção'
                ],
                aiPrompts: [
                    'Pacientes com barreiras identificadas',
                    'Otimizar rotas de hoje',
                    'Taxa de adesão por protocolo',
                    'Alertas de intervenção urgente'
                ]
            },
            'financial': {
                title: 'Gestão Financeira',
                description: 'Plataforma inteligente de gestão financeira hospitalar com foco na prevenção de glosas e otimização de receitas.',
                features: [
                    'Prevenção automática de glosas com IA',
                    'Análise preditiva de faturamento',
                    'Auditoria automática de contas médicas',
                    'Dashboard de indicadores financeiros',
                    'Economia comprovada de R$ 2.4M em glosas'
                ],
                aiPrompts: [
                    'Análise de glosas do mês',
                    'Oportunidades de otimização',
                    'Relatório de economia',
                    'Previsão de faturamento'
                ]
            },
            'wellness': {
                title: 'Bem-Estar Integral',
                description: 'Programa holístico de suporte ao bem-estar físico e emocional durante o tratamento oncológico.',
                features: [
                    'Programas personalizados de nutrição',
                    'Suporte psicológico integrado',
                    'Atividades físicas adaptadas',
                    'Grupos de apoio virtuais',
                    'Monitoramento de qualidade de vida'
                ],
                aiPrompts: [
                    'Programa nutricional personalizado',
                    'Agendar suporte psicológico',
                    'Grupos de apoio disponíveis',
                    'Avaliar qualidade de vida'
                ]
            },
            'research': {
                title: 'Pesquisa Clínica',
                description: 'Plataforma de gestão de pesquisas clínicas e ensaios com recrutamento inteligente de pacientes.',
                features: [
                    'Matching automático paciente-estudo',
                    'Gestão de protocolos de pesquisa',
                    'Acompanhamento de ensaios clínicos',
                    'Análise de dados em tempo real',
                    'Compliance regulatório automatizado'
                ],
                aiPrompts: [
                    'Estudos em recrutamento',
                    'Pacientes elegíveis',
                    'Status dos ensaios ativos',
                    'Relatórios de compliance'
                ]
            },
            'admin': {
                title: 'Administração',
                description: 'Central de controle administrativo para gestão completa da plataforma e recursos hospitalares.',
                features: [
                    'Gestão de usuários e permissões',
                    'Configurações do sistema',
                    'Relatórios gerenciais',
                    'Auditoria de acessos',
                    'Integração com sistemas hospitalares'
                ],
                aiPrompts: [
                    'Relatório de uso do sistema',
                    'Configurar permissões',
                    'Logs de auditoria',
                    'Status das integrações'
                ]
            },
            'ai': {
                title: 'Inteligência Artificial',
                description: 'Central de controle e configuração dos modelos de IA que potencializam toda a plataforma.',
                features: [
                    'Motor de Engenharia de Prompt (MEP)',
                    'Servos de Mecanismos automatizados',
                    'RLHF para melhoria contínua',
                    'Análise preditiva avançada',
                    'Tecnologias proprietárias Laura'
                ],
                aiPrompts: [
                    'Status dos modelos de IA',
                    'Treinar novo modelo',
                    'Métricas de performance',
                    'Configurar servos automáticos'
                ]
            }
        };
        
        this.init();
    }

    init() {
        // Aguarda o DOM carregar
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupPortalHelpers());
        } else {
            this.setupPortalHelpers();
        }
    }

    setupPortalHelpers() {
        // Procura por todos os cards de módulos
        const moduleCards = document.querySelectorAll('.module-card');
        
        moduleCards.forEach(card => {
            // Identifica o tipo de portal pelo href
            const link = card.getAttribute('onclick');
            if (!link) return;
            
            const portalType = this.getPortalType(link);
            if (!portalType) return;
            
            // Modifica o card para adicionar os novos botões
            this.enhanceCard(card, portalType);
        });

        // Adiciona estilos
        this.addStyles();
    }

    getPortalType(onclickAttr) {
        const matches = onclickAttr.match(/href='\/([^']+)'/);
        if (!matches) return null;
        
        const route = matches[1];
        
        // Mapeia rotas para tipos de portal
        const routeMap = {
            'patient': 'patient',
            'paciente': 'patient',
            'doctor': 'doctor',
            'medico': 'doctor',
            'navigator': 'navigator',
            'navegador': 'navigator',
            'financial': 'financial',
            'financeiro': 'financial',
            'wellness': 'wellness',
            'bem-estar': 'wellness',
            'research': 'research',
            'pesquisa': 'research',
            'admin': 'admin',
            'ia': 'ai'
        };
        
        return routeMap[route] || null;
    }

    enhanceCard(card, portalType) {
        const info = this.portalInfo[portalType];
        if (!info) return;
        
        // Remove o onclick do card
        card.removeAttribute('onclick');
        card.style.cursor = 'default';
        
        // Encontra o botão atual
        const currentButton = card.querySelector('button');
        if (!currentButton) return;
        
        // Cria container para os botões
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'portal-button-container';
        
        // Cria botão de ajuda
        const helpButton = document.createElement('button');
        helpButton.className = 'portal-help-button';
        helpButton.innerHTML = '<i class="fas fa-question"></i>';
        helpButton.title = 'Saiba mais sobre este portal';
        helpButton.onclick = (e) => {
            e.stopPropagation();
            this.showTooltip(e.target, info);
        };
        
        // Cria botão do assistente IA
        const aiButton = document.createElement('button');
        aiButton.className = 'portal-ai-button';
        aiButton.innerHTML = '<img src="/static/robot-auditor-icon.svg" alt="IA" class="portal-ai-icon">';
        aiButton.title = 'Abrir assistente IA para este portal';
        aiButton.onclick = (e) => {
            e.stopPropagation();
            this.openAIAssistant(portalType, info);
        };
        
        // Atualiza o botão de acessar
        currentButton.onclick = (e) => {
            e.stopPropagation();
            const route = card.querySelector('[onclick]')?.getAttribute('onclick')?.match(/href='([^']+)'/)?.[1] || `/${portalType}`;
            window.location.href = route;
        };
        
        // Adiciona os botões ao container
        buttonContainer.appendChild(currentButton);
        buttonContainer.appendChild(helpButton);
        buttonContainer.appendChild(aiButton);
        
        // Substitui o botão atual pelo container
        currentButton.parentNode.replaceChild(buttonContainer, currentButton);
    }

    showTooltip(target, info) {
        // Remove tooltip existente
        const existingTooltip = document.querySelector('.portal-tooltip');
        if (existingTooltip) {
            existingTooltip.remove();
        }
        
        // Cria novo tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'portal-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-header">
                <h3>${info.title}</h3>
                <button class="tooltip-close" onclick="this.closest('.portal-tooltip').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="tooltip-content">
                <p class="tooltip-description">${info.description}</p>
                <div class="tooltip-features">
                    <h4>Principais Recursos:</h4>
                    <ul>
                        ${info.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        // Posiciona o tooltip
        document.body.appendChild(tooltip);
        
        const rect = target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        // Calcula posição ideal
        let top = rect.top - tooltipRect.height - 10;
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        
        // Ajusta se sair da tela
        if (top < 10) {
            top = rect.bottom + 10;
            tooltip.classList.add('tooltip-bottom');
        }
        
        if (left < 10) {
            left = 10;
        } else if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
        
        // Remove ao clicar fora
        setTimeout(() => {
            document.addEventListener('click', function closeTooltip(e) {
                if (!tooltip.contains(e.target) && e.target !== target) {
                    tooltip.remove();
                    document.removeEventListener('click', closeTooltip);
                }
            });
        }, 100);
    }

    openAIAssistant(portalType, info) {
        // Verifica se o assistente IA existe
        if (!window.aiAssistant) {
            console.error('Assistente IA não encontrado');
            return;
        }
        
        // Abre o chat
        if (!window.aiAssistant.isOpen) {
            window.aiAssistant.toggleChat();
        }
        
        // Envia mensagem inicial sobre o portal
        setTimeout(() => {
            const initialMessage = `Olá! Vejo que você está interessado no ${info.title}. ${info.description}\n\nAqui estão algumas coisas que posso ajudar:`;
            window.aiAssistant.addMessage(initialMessage, 'ai');
            
            // Atualiza sugestões com prompts específicos do portal
            const suggestionsContainer = document.getElementById('ai-suggestions');
            if (suggestionsContainer) {
                suggestionsContainer.innerHTML = info.aiPrompts.map(prompt => 
                    `<div class="ai-suggestion-chip">${prompt}</div>`
                ).join('');
            }
        }, 300);
    }

    addStyles() {
        const styles = document.createElement('style');
        styles.innerHTML = `
            /* Container de botões */
            .portal-button-container {
                display: flex;
                gap: 8px;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }
            
            /* Botão de ajuda */
            .portal-help-button {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: linear-gradient(135deg, #6B7280 0%, #4B5563 100%);
                border: none;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                font-size: 16px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            }
            
            .portal-help-button:hover {
                transform: scale(1.1);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            }
            
            /* Botão do assistente IA */
            .portal-ai-button {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%);
                border: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(255, 140, 0, 0.3);
                padding: 8px;
            }
            
            .portal-ai-button:hover {
                transform: scale(1.1);
                box-shadow: 0 4px 12px rgba(255, 140, 0, 0.4);
            }
            
            .portal-ai-icon {
                width: 24px;
                height: 24px;
                filter: brightness(0) invert(1);
            }
            
            /* Tooltip */
            .portal-tooltip {
                position: fixed;
                background: white;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                max-width: 400px;
                animation: tooltipFadeIn 0.3s ease;
                border: 1px solid rgba(43, 95, 63, 0.2);
            }
            
            @keyframes tooltipFadeIn {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .portal-tooltip::before {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid white;
            }
            
            .portal-tooltip.tooltip-bottom::before {
                bottom: auto;
                top: -8px;
                border-top: none;
                border-bottom: 8px solid white;
            }
            
            .tooltip-header {
                padding: 16px;
                background: linear-gradient(135deg, #2B5F3F 0%, #3a7d52 100%);
                color: white;
                border-radius: 12px 12px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .tooltip-header h3 {
                margin: 0;
                font-size: 18px;
                font-weight: 600;
            }
            
            .tooltip-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 18px;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            
            .tooltip-close:hover {
                opacity: 1;
            }
            
            .tooltip-content {
                padding: 16px;
            }
            
            .tooltip-description {
                margin: 0 0 16px 0;
                color: #4B5563;
                line-height: 1.5;
            }
            
            .tooltip-features h4 {
                margin: 0 0 12px 0;
                color: #2B5F3F;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .tooltip-features ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            
            .tooltip-features li {
                padding: 8px 0;
                color: #6B7280;
                display: flex;
                align-items: flex-start;
                gap: 8px;
                font-size: 14px;
                line-height: 1.4;
            }
            
            .tooltip-features li i {
                color: #10B981;
                margin-top: 2px;
                flex-shrink: 0;
            }
            
            /* Ajuste para mobile */
            @media (max-width: 480px) {
                .portal-tooltip {
                    max-width: calc(100vw - 20px);
                    left: 10px !important;
                    right: 10px;
                }
                
                .portal-button-container {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .portal-button-container > button:first-child {
                    width: 100%;
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
}

// Inicializa os helpers quando o documento carregar
if (typeof window !== 'undefined') {
    window.portalHelpers = new PortalHelpers();
}