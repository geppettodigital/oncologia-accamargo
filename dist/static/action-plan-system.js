// Sistema de Planos de Ação - Integrado com Ansiedade de Laura
class ActionPlanSystem {
    constructor() {
        this.currentAlert = null;
        this.planTemplates = this.loadPlanTemplates();
        this.init();
    }

    init() {
        // Adiciona estilos do sistema
        this.injectStyles();
        
        // Sobrescreve a função showDetails do ai-concerns.js
        this.overrideAIConcernsShowDetails();
    }

    overrideAIConcernsShowDetails() {
        // Aguarda o ai-concerns carregar
        setTimeout(() => {
            if (window.aiConcerns) {
                const originalShowDetails = window.aiConcerns.showDetails.bind(window.aiConcerns);
                
                window.aiConcerns.showDetails = (alertId) => {
                    // Chama a função original
                    originalShowDetails(alertId);
                    
                    // Adiciona nova lógica
                    this.handleAlertClick(alertId);
                };
            }
        }, 1000);
    }

    handleAlertClick(alertId) {
        // Armazena o alerta atual
        this.currentAlert = this.getAlertDetails(alertId);
        
        // Abre o assistente IA se não estiver aberto
        if (window.aiAssistant && !window.aiAssistant.isOpen) {
            window.aiAssistant.toggleChat();
        }
        
        // Envia mensagem melhorada com opções
        setTimeout(() => {
            if (window.aiAssistant) {
                window.aiAssistant.addMessage(
                    'Detectei um alerta importante que requer sua atenção. O que deseja fazer? Posso gerar um plano de ação com uma sugestão de demanda e pessoas?',
                    'ai'
                );
                
                // Adiciona botões de ação customizados
                this.addActionButtons();
            }
        }, 500);
    }

    addActionButtons() {
        const messagesContainer = document.getElementById('ai-messages');
        if (!messagesContainer) return;
        
        const actionButtonsHTML = `
            <div class="ai-action-buttons flex flex-wrap gap-2 mt-3 p-3">
                <button onclick="actionPlan.generatePlan()" class="action-btn primary">
                    <i class="fas fa-clipboard-list mr-2"></i>
                    Sim, gere o plano
                </button>
                <button onclick="actionPlan.showAnalysis()" class="action-btn secondary">
                    <i class="fas fa-chart-line mr-2"></i>
                    Analisar impacto
                </button>
                <button onclick="actionPlan.showSimilarCases()" class="action-btn secondary">
                    <i class="fas fa-history mr-2"></i>
                    Casos similares
                </button>
                <button onclick="actionPlan.delegateTask()" class="action-btn secondary">
                    <i class="fas fa-user-plus mr-2"></i>
                    Delegar tarefa
                </button>
                <button onclick="actionPlan.scheduleReview()" class="action-btn secondary">
                    <i class="fas fa-calendar-plus mr-2"></i>
                    Agendar revisão
                </button>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', actionButtonsHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    generatePlan() {
        // Remove botões de ação
        const buttons = document.querySelector('.ai-action-buttons');
        if (buttons) buttons.remove();
        
        // Feedback no chat
        if (window.aiAssistant) {
            window.aiAssistant.addMessage('Gerando plano de ação estruturado...', 'ai');
        }
        
        // Gera o plano baseado no alerta atual
        const plan = this.createActionPlan(this.currentAlert);
        
        // Abre o popup do plano
        setTimeout(() => {
            this.showPlanPopup(plan);
        }, 1000);
    }

    createActionPlan(alert) {
        // Mapeia planos por tipo de alerta
        const planTemplates = {
            'Paciente Crítico': {
                title: 'Plano de Ação - Paciente em Situação Crítica',
                severity: 'critical',
                objective: 'Estabilizar condição do paciente e prevenir complicações',
                reasons: [
                    'Sinais vitais indicando deterioração',
                    'Exames laboratoriais com valores críticos',
                    'Histórico de complicações similares'
                ],
                stakeholders: [
                    { name: 'Dr. Carlos Silva', role: 'Oncologista Responsável', impact: 'Alto', action: 'Liderar intervenção' },
                    { name: 'Enf. Maria Santos', role: 'Enfermeira Chefe', impact: 'Alto', action: 'Coordenar cuidados' },
                    { name: 'Farm. João Costa', role: 'Farmacêutico', impact: 'Médio', action: 'Ajustar medicação' },
                    { name: 'Psic. Ana Lima', role: 'Psicóloga', impact: 'Médio', action: 'Suporte emocional' }
                ],
                timeline: [
                    { time: 'Imediato (0-2h)', action: 'Avaliação médica completa e estabilização', responsible: 'Dr. Silva' },
                    { time: '2-6 horas', action: 'Ajuste de protocolo e medicação', responsible: 'Equipe médica' },
                    { time: '6-24 horas', action: 'Monitoramento intensivo', responsible: 'Enfermagem' },
                    { time: '24-48 horas', action: 'Reavaliação e ajustes', responsible: 'Equipe multidisciplinar' },
                    { time: '48-72 horas', action: 'Transição para cuidados regulares', responsible: 'Todos' }
                ],
                metrics: [
                    'Estabilização de sinais vitais em 6 horas',
                    'Normalização de exames em 24 horas',
                    'Redução de sintomas em 48 horas',
                    'Alta da UTI em 72 horas'
                ]
            },
            'Risco Glosa': {
                title: 'Plano de Ação - Prevenção de Glosas',
                severity: 'high',
                objective: 'Prevenir perdas financeiras e garantir faturamento correto',
                reasons: [
                    'Documentação incompleta identificada',
                    'Codificação incorreta de procedimentos',
                    'Falta de autorização prévia'
                ],
                stakeholders: [
                    { name: 'Ana Costa', role: 'Gerente Financeiro', impact: 'Alto', action: 'Supervisionar correções' },
                    { name: 'Carlos Dias', role: 'Auditor Médico', impact: 'Alto', action: 'Revisar documentação' },
                    { name: 'Maria Silva', role: 'Faturista', impact: 'Alto', action: 'Corrigir codificação' },
                    { name: 'João Santos', role: 'Atendimento', impact: 'Médio', action: 'Obter autorizações' }
                ],
                timeline: [
                    { time: 'Hoje', action: 'Identificar e listar todas as contas em risco', responsible: 'Faturamento' },
                    { time: 'Até amanhã', action: 'Revisar e corrigir documentação', responsible: 'Auditoria' },
                    { time: '2 dias', action: 'Recodificar procedimentos', responsible: 'Codificação' },
                    { time: '3 dias', action: 'Obter autorizações pendentes', responsible: 'Atendimento' },
                    { time: '5 dias', action: 'Reenviar contas corrigidas', responsible: 'Faturamento' }
                ],
                metrics: [
                    'R$ 45.000 em glosas prevenidas',
                    '100% das contas revisadas',
                    'Taxa de glosa < 3%',
                    'Tempo médio de correção: 48h'
                ]
            },
            'Gargalo': {
                title: 'Plano de Ação - Otimização de Fluxo',
                severity: 'medium',
                objective: 'Eliminar gargalos e otimizar tempo de espera',
                reasons: [
                    'Capacidade insuficiente no setor',
                    'Agendamento não otimizado',
                    'Falta de recursos temporária'
                ],
                stakeholders: [
                    { name: 'Pedro Lima', role: 'Coordenador Navegação', impact: 'Alto', action: 'Reorganizar fluxo' },
                    { name: 'Carla Souza', role: 'Chefe Radiologia', impact: 'Alto', action: 'Ampliar capacidade' },
                    { name: 'Roberto Alves', role: 'Agendamento', impact: 'Alto', action: 'Otimizar agenda' },
                    { name: 'Lucia Matos', role: 'Atendimento', impact: 'Médio', action: 'Comunicar pacientes' }
                ],
                timeline: [
                    { time: 'Próxima hora', action: 'Realocar pacientes não urgentes', responsible: 'Navegação' },
                    { time: '2 horas', action: 'Abrir slot adicional de atendimento', responsible: 'Radiologia' },
                    { time: '4 horas', action: 'Reorganizar agenda do dia', responsible: 'Agendamento' },
                    { time: 'Hoje', action: 'Comunicar mudanças aos pacientes', responsible: 'Atendimento' },
                    { time: 'Amanhã', action: 'Implementar novo fluxo otimizado', responsible: 'Todos' }
                ],
                metrics: [
                    'Redução de 50% no tempo de espera',
                    '15 pacientes atendidos adicionalmente',
                    'Satisfação mantida acima de 4.5',
                    'Zero cancelamentos por atraso'
                ]
            }
        };
        
        // Retorna o plano apropriado ou um genérico
        const alertType = this.detectAlertType(alert);
        return planTemplates[alertType] || this.createGenericPlan(alert);
    }

    detectAlertType(alert) {
        // Lógica para detectar tipo de alerta baseado no contexto
        if (!alert) return 'Generic';
        
        const title = alert.title || '';
        if (title.includes('Paciente') && title.includes('Crítico')) return 'Paciente Crítico';
        if (title.includes('Glosa') || title.includes('Risco')) return 'Risco Glosa';
        if (title.includes('Gargalo') || title.includes('Fila')) return 'Gargalo';
        
        return 'Generic';
    }

    createGenericPlan(alert) {
        return {
            title: 'Plano de Ação - ' + (alert?.title || 'Situação Identificada'),
            severity: alert?.severity || 'medium',
            objective: 'Resolver situação identificada e prevenir recorrências',
            reasons: [
                'Situação requer atenção imediata',
                'Impacto potencial identificado',
                'Oportunidade de melhoria detectada'
            ],
            stakeholders: [
                { name: 'Gestor Responsável', role: 'Coordenador', impact: 'Alto', action: 'Liderar ação' },
                { name: 'Equipe Técnica', role: 'Execução', impact: 'Alto', action: 'Implementar solução' },
                { name: 'Stakeholders', role: 'Apoio', impact: 'Médio', action: 'Suportar processo' }
            ],
            timeline: [
                { time: 'Imediato', action: 'Avaliar situação', responsible: 'Gestor' },
                { time: '2 horas', action: 'Definir estratégia', responsible: 'Equipe' },
                { time: '1 dia', action: 'Implementar solução', responsible: 'Todos' },
                { time: '2 dias', action: 'Monitorar resultados', responsible: 'Gestor' }
            ],
            metrics: [
                'Resolução em 48 horas',
                'Zero recorrências',
                'Satisfação mantida',
                'Custo controlado'
            ]
        };
    }

    showPlanPopup(plan) {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('action-plan-popup');
        if (existingPopup) existingPopup.remove();
        
        const popupHTML = `
            <div id="action-plan-popup" class="action-plan-overlay">
                <div class="action-plan-container">
                    <!-- Header -->
                    <div class="plan-header ${plan.severity}">
                        <div class="plan-header-content">
                            <h2 class="plan-title">
                                <i class="fas fa-clipboard-list mr-2"></i>
                                ${plan.title}
                            </h2>
                            <p class="plan-objective">
                                <i class="fas fa-bullseye mr-2"></i>
                                <strong>Objetivo:</strong> ${plan.objective}
                            </p>
                        </div>
                        <button onclick="actionPlan.closePlanPopup()" class="plan-close-btn">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <!-- Content -->
                    <div class="plan-content">
                        <!-- Motivos -->
                        <div class="plan-section">
                            <h3 class="section-title">
                                <i class="fas fa-exclamation-circle text-orange-500 mr-2"></i>
                                Motivos e Detalhes
                            </h3>
                            <ul class="reasons-list">
                                ${plan.reasons.map(reason => `
                                    <li>
                                        <i class="fas fa-chevron-right text-orange-400 mr-2"></i>
                                        ${reason}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        <!-- Stakeholders -->
                        <div class="plan-section">
                            <h3 class="section-title">
                                <i class="fas fa-users text-blue-500 mr-2"></i>
                                Áreas e Pessoas Impactadas
                            </h3>
                            <div class="stakeholders-grid">
                                ${plan.stakeholders.map(person => `
                                    <div class="stakeholder-card">
                                        <div class="stakeholder-avatar">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        <div class="stakeholder-info">
                                            <div class="stakeholder-name">${person.name}</div>
                                            <div class="stakeholder-role">${person.role}</div>
                                            <div class="stakeholder-action">${person.action}</div>
                                            <span class="impact-badge impact-${person.impact.toLowerCase()}">
                                                Impacto: ${person.impact}
                                            </span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Cronograma -->
                        <div class="plan-section">
                            <h3 class="section-title">
                                <i class="fas fa-clock text-green-500 mr-2"></i>
                                Cronograma Sugerido
                            </h3>
                            <div class="timeline">
                                ${plan.timeline.map((item, idx) => `
                                    <div class="timeline-item">
                                        <div class="timeline-marker">${idx + 1}</div>
                                        <div class="timeline-content">
                                            <div class="timeline-time">${item.time}</div>
                                            <div class="timeline-action">${item.action}</div>
                                            <div class="timeline-responsible">
                                                <i class="fas fa-user-tag mr-1"></i>
                                                ${item.responsible}
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Métricas de Sucesso -->
                        <div class="plan-section">
                            <h3 class="section-title">
                                <i class="fas fa-chart-line text-purple-500 mr-2"></i>
                                Métricas de Sucesso
                            </h3>
                            <div class="metrics-grid">
                                ${plan.metrics.map(metric => `
                                    <div class="metric-item">
                                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                        ${metric}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Catálogo de Planos -->
                        <div class="plan-section">
                            <h3 class="section-title">
                                <i class="fas fa-folder-open text-indigo-500 mr-2"></i>
                                Catálogo de Planos Similares
                            </h3>
                            <div class="catalog-grid">
                                ${this.planTemplates.map(template => `
                                    <div class="catalog-item" onclick="actionPlan.loadTemplate('${template.id}')">
                                        <i class="fas ${template.icon} catalog-icon"></i>
                                        <div class="catalog-name">${template.name}</div>
                                        <div class="catalog-desc">${template.description}</div>
                                        <div class="catalog-stats">
                                            <span><i class="fas fa-check"></i> ${template.successRate}% sucesso</span>
                                            <span><i class="fas fa-clock"></i> ${template.avgTime}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer Actions -->
                    <div class="plan-footer">
                        <button onclick="actionPlan.executePlan()" class="plan-btn primary">
                            <i class="fas fa-play mr-2"></i>
                            Executar Plano
                        </button>
                        <button onclick="actionPlan.openCollaboration()" class="plan-btn secondary">
                            <i class="fas fa-comments mr-2"></i>
                            Convocar Alinhamento
                        </button>
                        <button onclick="actionPlan.editPlan()" class="plan-btn tertiary">
                            <i class="fas fa-edit mr-2"></i>
                            Editar Plano
                        </button>
                        <button onclick="actionPlan.savePlan()" class="plan-btn tertiary">
                            <i class="fas fa-save mr-2"></i>
                            Salvar Modelo
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        
        // Anima entrada
        setTimeout(() => {
            document.getElementById('action-plan-popup').classList.add('show');
        }, 10);
    }

    loadPlanTemplates() {
        return [
            {
                id: 'template1',
                name: 'Protocolo Emergência Médica',
                description: 'Ação rápida para situações críticas',
                icon: 'fa-ambulance',
                successRate: 95,
                avgTime: '2h'
            },
            {
                id: 'template2',
                name: 'Prevenção de Glosas',
                description: 'Correção proativa de documentação',
                icon: 'fa-file-invoice-dollar',
                successRate: 92,
                avgTime: '48h'
            },
            {
                id: 'template3',
                name: 'Otimização de Fluxo',
                description: 'Eliminação de gargalos operacionais',
                icon: 'fa-stream',
                successRate: 88,
                avgTime: '24h'
            },
            {
                id: 'template4',
                name: 'Gestão de Crise',
                description: 'Resposta coordenada a eventos adversos',
                icon: 'fa-shield-alt',
                successRate: 90,
                avgTime: '4h'
            }
        ];
    }

    openCollaboration() {
        // Fecha o popup do plano
        this.closePlanPopup();
        
        // Abre interface de colaboração
        this.showCollaborationInterface();
    }

    showCollaborationInterface() {
        const collaborationHTML = `
            <div id="collaboration-popup" class="collaboration-overlay">
                <div class="collaboration-container">
                    <!-- Header -->
                    <div class="collab-header">
                        <h2>
                            <i class="fas fa-comments mr-2"></i>
                            Alinhamento Colaborativo
                        </h2>
                        <button onclick="actionPlan.closeCollaboration()" class="collab-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <!-- Participants -->
                    <div class="collab-participants">
                        <div class="participant online">
                            <img src="/static/robot-auditor-icon.svg" alt="IA" class="participant-avatar">
                            <span class="participant-name">Assistente IA</span>
                            <span class="status-indicator online"></span>
                        </div>
                        <div class="participant online">
                            <div class="participant-avatar">CS</div>
                            <span class="participant-name">Dr. Carlos Silva</span>
                            <span class="status-indicator online"></span>
                        </div>
                        <div class="participant away">
                            <div class="participant-avatar">MS</div>
                            <span class="participant-name">Enf. Maria Santos</span>
                            <span class="status-indicator away"></span>
                        </div>
                        <div class="participant offline">
                            <div class="participant-avatar">JC</div>
                            <span class="participant-name">João Costa</span>
                            <span class="status-indicator offline"></span>
                        </div>
                        <button class="add-participant">
                            <i class="fas fa-user-plus"></i>
                        </button>
                    </div>
                    
                    <!-- Chat Area -->
                    <div class="collab-chat">
                        <div class="chat-message ai">
                            <img src="/static/robot-auditor-icon.svg" alt="IA" class="msg-avatar">
                            <div class="msg-content">
                                <div class="msg-header">
                                    <span class="msg-name">Assistente IA</span>
                                    <span class="msg-time">Agora</span>
                                </div>
                                <div class="msg-text">
                                    Convoquei todos os envolvidos no plano de ação. Vamos alinhar as responsabilidades e cronograma. 
                                    O objetivo é garantir execução coordenada e eficiente.
                                </div>
                            </div>
                        </div>
                        
                        <div class="chat-message user">
                            <div class="msg-avatar">CS</div>
                            <div class="msg-content">
                                <div class="msg-header">
                                    <span class="msg-name">Dr. Carlos Silva</span>
                                    <span class="msg-time">Agora</span>
                                </div>
                                <div class="msg-text">
                                    Estou ciente da situação. Posso iniciar a avaliação imediatamente.
                                </div>
                            </div>
                        </div>
                        
                        <div class="chat-typing">
                            <div class="msg-avatar">MS</div>
                            <div class="typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Input Area -->
                    <div class="collab-input">
                        <input type="text" placeholder="Digite sua mensagem..." class="chat-input">
                        <button class="send-btn">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    
                    <!-- Quick Actions -->
                    <div class="collab-actions">
                        <button class="action-chip">
                            <i class="fas fa-tasks mr-1"></i>
                            Distribuir Tarefas
                        </button>
                        <button class="action-chip">
                            <i class="fas fa-calendar mr-1"></i>
                            Agendar Reunião
                        </button>
                        <button class="action-chip">
                            <i class="fas fa-file-alt mr-1"></i>
                            Compartilhar Plano
                        </button>
                        <button class="action-chip">
                            <i class="fas fa-poll mr-1"></i>
                            Criar Votação
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', collaborationHTML);
        
        // Anima entrada
        setTimeout(() => {
            document.getElementById('collaboration-popup').classList.add('show');
        }, 10);
    }

    executePlan() {
        alert('Plano de ação iniciado! Todos os envolvidos foram notificados e as tarefas foram distribuídas.');
        this.closePlanPopup();
    }

    editPlan() {
        alert('Modo de edição ativado. Você pode ajustar todos os elementos do plano.');
    }

    savePlan() {
        alert('Plano salvo como modelo para uso futuro!');
    }

    loadTemplate(templateId) {
        alert(`Carregando template: ${templateId}`);
    }

    closePlanPopup() {
        const popup = document.getElementById('action-plan-popup');
        if (popup) {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        }
    }

    closeCollaboration() {
        const popup = document.getElementById('collaboration-popup');
        if (popup) {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        }
    }

    showAnalysis() {
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(
                'Analisando impacto do alerta... Identifico 3 áreas críticas afetadas, com potencial cascata em 5 processos. Deseja ver o mapa de impacto detalhado?',
                'ai'
            );
        }
    }

    showSimilarCases() {
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(
                'Encontrei 7 casos similares nos últimos 30 dias. Taxa de resolução: 86%. Tempo médio: 48h. Deseja ver as estratégias que funcionaram?',
                'ai'
            );
        }
    }

    delegateTask() {
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(
                'Posso delegar esta tarefa para a equipe apropriada. Sugiro Dr. Silva (disponível) ou Enf. Maria (ocupada até 14h). Qual preferência?',
                'ai'
            );
        }
    }

    scheduleReview() {
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(
                'Agendando revisão do caso. Sugiro reunião amanhã às 10h com equipe multidisciplinar. Confirma este horário?',
                'ai'
            );
        }
    }

    getAlertDetails(alertId) {
        // Simula detalhes do alerta baseado no ID
        return {
            id: alertId,
            title: 'Paciente Crítico - Neutropenia',
            severity: 'high',
            description: 'Paciente João Silva apresentando sinais de neutropenia severa',
            impact: 'Crítico',
            timeframe: 'Imediato'
        };
    }

    injectStyles() {
        const styles = `
            <style>
                /* Action Buttons in Chat */
                .ai-action-buttons {
                    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                    border-radius: 12px;
                    margin: 8px;
                }
                
                .action-btn {
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 500;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                }
                
                .action-btn.primary {
                    background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%);
                    color: white;
                }
                
                .action-btn.primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
                }
                
                .action-btn.secondary {
                    background: white;
                    color: #4B5563;
                    border: 1px solid #E5E7EB;
                }
                
                .action-btn.secondary:hover {
                    background: #F9FAFB;
                    border-color: #FF8C00;
                    color: #FF8C00;
                }
                
                /* Action Plan Popup */
                .action-plan-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 100000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .action-plan-overlay.show {
                    opacity: 1;
                }
                
                .action-plan-container {
                    background: white;
                    border-radius: 20px;
                    max-width: 900px;
                    width: 90%;
                    max-height: 90vh;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transform: scale(0.9);
                    transition: transform 0.3s ease;
                }
                
                .action-plan-overlay.show .action-plan-container {
                    transform: scale(1);
                }
                
                /* Plan Header */
                .plan-header {
                    padding: 24px;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: start;
                }
                
                .plan-header.critical {
                    background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
                }
                
                .plan-header.high {
                    background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
                }
                
                .plan-header.medium {
                    background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
                }
                
                .plan-title {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
                
                .plan-objective {
                    font-size: 14px;
                    opacity: 0.95;
                }
                
                .plan-close-btn {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }
                
                .plan-close-btn:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                
                /* Plan Content */
                .plan-content {
                    flex: 1;
                    overflow-y: auto;
                    padding: 24px;
                }
                
                .plan-section {
                    margin-bottom: 32px;
                }
                
                .section-title {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                    color: #1F2937;
                }
                
                /* Reasons List */
                .reasons-list {
                    list-style: none;
                    padding: 0;
                }
                
                .reasons-list li {
                    padding: 8px 0;
                    display: flex;
                    align-items: center;
                    color: #4B5563;
                }
                
                /* Stakeholders Grid */
                .stakeholders-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 16px;
                }
                
                .stakeholder-card {
                    background: #F9FAFB;
                    border-radius: 12px;
                    padding: 16px;
                    display: flex;
                    gap: 12px;
                }
                
                .stakeholder-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                }
                
                .stakeholder-info {
                    flex: 1;
                }
                
                .stakeholder-name {
                    font-weight: 600;
                    color: #1F2937;
                    margin-bottom: 2px;
                }
                
                .stakeholder-role {
                    font-size: 12px;
                    color: #6B7280;
                    margin-bottom: 4px;
                }
                
                .stakeholder-action {
                    font-size: 12px;
                    color: #3B82F6;
                    margin-bottom: 8px;
                }
                
                .impact-badge {
                    font-size: 11px;
                    padding: 2px 8px;
                    border-radius: 12px;
                    font-weight: 600;
                }
                
                .impact-badge.impact-alto {
                    background: #FEE2E2;
                    color: #991B1B;
                }
                
                .impact-badge.impact-médio {
                    background: #FEF3C7;
                    color: #92400E;
                }
                
                .impact-badge.impact-baixo {
                    background: #DBEAFE;
                    color: #1E40AF;
                }
                
                /* Timeline */
                .timeline {
                    position: relative;
                    padding-left: 40px;
                }
                
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 15px;
                    top: 20px;
                    bottom: 20px;
                    width: 2px;
                    background: #E5E7EB;
                }
                
                .timeline-item {
                    position: relative;
                    margin-bottom: 24px;
                    display: flex;
                    align-items: start;
                }
                
                .timeline-marker {
                    position: absolute;
                    left: -30px;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #10B981 0%, #059669 100%);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 14px;
                }
                
                .timeline-content {
                    flex: 1;
                    background: #F9FAFB;
                    border-radius: 12px;
                    padding: 12px 16px;
                }
                
                .timeline-time {
                    font-weight: 600;
                    color: #059669;
                    font-size: 14px;
                    margin-bottom: 4px;
                }
                
                .timeline-action {
                    color: #1F2937;
                    margin-bottom: 4px;
                }
                
                .timeline-responsible {
                    font-size: 12px;
                    color: #6B7280;
                }
                
                /* Metrics Grid */
                .metrics-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 12px;
                }
                
                .metric-item {
                    background: #F0FDF4;
                    border-left: 3px solid #10B981;
                    padding: 12px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color: #1F2937;
                }
                
                /* Catalog Grid */
                .catalog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 16px;
                }
                
                .catalog-item {
                    background: white;
                    border: 2px solid #E5E7EB;
                    border-radius: 12px;
                    padding: 16px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                }
                
                .catalog-item:hover {
                    border-color: #FF8C00;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
                
                .catalog-icon {
                    font-size: 32px;
                    color: #FF8C00;
                    margin-bottom: 8px;
                }
                
                .catalog-name {
                    font-weight: 600;
                    color: #1F2937;
                    margin-bottom: 4px;
                }
                
                .catalog-desc {
                    font-size: 12px;
                    color: #6B7280;
                    margin-bottom: 8px;
                }
                
                .catalog-stats {
                    display: flex;
                    justify-content: space-around;
                    font-size: 11px;
                    color: #6B7280;
                }
                
                .catalog-stats span {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                
                /* Plan Footer */
                .plan-footer {
                    padding: 20px 24px;
                    background: #F9FAFB;
                    border-top: 1px solid #E5E7EB;
                    display: flex;
                    gap: 12px;
                    justify-content: flex-end;
                }
                
                .plan-btn {
                    padding: 10px 20px;
                    border-radius: 10px;
                    font-size: 14px;
                    font-weight: 600;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                }
                
                .plan-btn.primary {
                    background: linear-gradient(135deg, #10B981 0%, #059669 100%);
                    color: white;
                }
                
                .plan-btn.primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
                }
                
                .plan-btn.secondary {
                    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                    color: white;
                }
                
                .plan-btn.secondary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                }
                
                .plan-btn.tertiary {
                    background: white;
                    color: #4B5563;
                    border: 1px solid #E5E7EB;
                }
                
                .plan-btn.tertiary:hover {
                    background: #F9FAFB;
                    border-color: #9CA3AF;
                }
                
                /* Collaboration Interface */
                .collaboration-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 100000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .collaboration-overlay.show {
                    opacity: 1;
                }
                
                .collaboration-container {
                    background: white;
                    border-radius: 20px;
                    width: 600px;
                    max-width: 90%;
                    height: 70vh;
                    display: flex;
                    flex-direction: column;
                    transform: scale(0.9);
                    transition: transform 0.3s ease;
                }
                
                .collaboration-overlay.show .collaboration-container {
                    transform: scale(1);
                }
                
                .collab-header {
                    padding: 20px;
                    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                    color: white;
                    border-radius: 20px 20px 0 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .collab-header h2 {
                    font-size: 20px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                }
                
                .collab-close {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .collab-participants {
                    padding: 16px;
                    background: #F9FAFB;
                    border-bottom: 1px solid #E5E7EB;
                    display: flex;
                    gap: 12px;
                    overflow-x: auto;
                }
                
                .participant {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    position: relative;
                }
                
                .participant-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #6B7280 0%, #4B5563 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 600;
                    font-size: 14px;
                }
                
                .participant-avatar img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
                
                .participant-name {
                    font-size: 11px;
                    color: #4B5563;
                    text-align: center;
                    max-width: 60px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                
                .status-indicator {
                    position: absolute;
                    bottom: 20px;
                    right: 0;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    border: 2px solid white;
                }
                
                .status-indicator.online {
                    background: #10B981;
                }
                
                .status-indicator.away {
                    background: #F59E0B;
                }
                
                .status-indicator.offline {
                    background: #6B7280;
                }
                
                .add-participant {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 2px dashed #D1D5DB;
                    background: white;
                    color: #6B7280;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .add-participant:hover {
                    border-color: #3B82F6;
                    color: #3B82F6;
                }
                
                .collab-chat {
                    flex: 1;
                    overflow-y: auto;
                    padding: 20px;
                    background: white;
                }
                
                .chat-message {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 16px;
                }
                
                .msg-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #6B7280 0%, #4B5563 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 600;
                    font-size: 12px;
                    flex-shrink: 0;
                }
                
                .msg-avatar img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
                
                .msg-content {
                    flex: 1;
                }
                
                .msg-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 4px;
                }
                
                .msg-name {
                    font-weight: 600;
                    color: #1F2937;
                    font-size: 14px;
                }
                
                .msg-time {
                    font-size: 12px;
                    color: #9CA3AF;
                }
                
                .msg-text {
                    background: #F3F4F6;
                    padding: 10px 14px;
                    border-radius: 12px;
                    font-size: 14px;
                    color: #374151;
                    line-height: 1.5;
                }
                
                .chat-message.ai .msg-text {
                    background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
                }
                
                .chat-typing {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
                
                .typing-indicator {
                    display: flex;
                    gap: 4px;
                    padding: 12px 16px;
                    background: #F3F4F6;
                    border-radius: 12px;
                }
                
                .typing-indicator span {
                    width: 8px;
                    height: 8px;
                    background: #9CA3AF;
                    border-radius: 50%;
                    animation: typing 1.4s infinite;
                }
                
                .typing-indicator span:nth-child(2) {
                    animation-delay: 0.2s;
                }
                
                .typing-indicator span:nth-child(3) {
                    animation-delay: 0.4s;
                }
                
                @keyframes typing {
                    0%, 60%, 100% {
                        transform: translateY(0);
                    }
                    30% {
                        transform: translateY(-10px);
                    }
                }
                
                .collab-input {
                    padding: 16px;
                    background: #F9FAFB;
                    border-top: 1px solid #E5E7EB;
                    display: flex;
                    gap: 12px;
                }
                
                .chat-input {
                    flex: 1;
                    padding: 10px 16px;
                    border: 1px solid #E5E7EB;
                    border-radius: 24px;
                    outline: none;
                    font-size: 14px;
                }
                
                .chat-input:focus {
                    border-color: #3B82F6;
                }
                
                .send-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                    border: none;
                    color: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }
                
                .send-btn:hover {
                    transform: scale(1.1);
                }
                
                .collab-actions {
                    padding: 12px 16px;
                    background: white;
                    border-top: 1px solid #E5E7EB;
                    display: flex;
                    gap: 8px;
                    overflow-x: auto;
                }
                
                .action-chip {
                    padding: 6px 12px;
                    background: white;
                    border: 1px solid #E5E7EB;
                    border-radius: 16px;
                    font-size: 12px;
                    color: #4B5563;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                }
                
                .action-chip:hover {
                    background: #F3F4F6;
                    border-color: #3B82F6;
                    color: #3B82F6;
                }
                
                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .action-plan-container {
                        width: 95%;
                        max-height: 95vh;
                    }
                    
                    .stakeholders-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .plan-footer {
                        flex-wrap: wrap;
                    }
                    
                    .collaboration-container {
                        width: 95%;
                        height: 90vh;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

// Inicializa o sistema
const actionPlan = new ActionPlanSystem();