// AI Concerns Dashboard - Ansiedade de Laura
class AIConcernsDashboard {
    constructor() {
        this.portalConfigs = this.getPortalConfigs();
        this.currentPortal = this.detectCurrentPortal();
        this.init();
    }

    detectCurrentPortal() {
        const path = window.location.pathname;
        if (path.includes('patient')) return 'patient';
        if (path.includes('doctor')) return 'doctor';
        if (path.includes('navigator')) return 'navigator';
        if (path.includes('financial')) return 'financial';
        if (path.includes('wellness')) return 'wellness';
        if (path.includes('research')) return 'research';
        if (path.includes('admin-master')) return 'admin-master';
        if (path.includes('admin')) return 'admin';
        return 'dashboard'; // Home page
    }

    getPortalConfigs() {
        return {
            dashboard: {
                title: "Visão Executiva Integrada",
                subtitle: "Monitoramento preditivo de toda a plataforma oncológica",
                alerts: [
                    { id: 'd1', severity: 'high', icon: 'fa-hospital', title: '3 Setores Críticos', desc: 'KPIs abaixo da meta', time: 'Agora', impact: 'Alto' },
                    { id: 'd2', severity: 'medium', icon: 'fa-chart-line', title: 'Glosas Evitadas', desc: 'R$ 2.4M economizados', time: 'Este mês', impact: '+12%' },
                    { id: 'd3', severity: 'low', icon: 'fa-users', title: '847 Pacientes', desc: 'Em navegação ativa', time: 'Atualizado', impact: 'Normal' }
                ],
                metrics: [
                    { icon: 'fa-heartbeat', value: '94%', label: 'Taxa de Sucesso', trend: 'up', prediction: 'Acima da média' },
                    { icon: 'fa-dollar-sign', value: 'R$ 2.4M', label: 'Economia Total', trend: 'up', prediction: '+R$ 150k/mês' },
                    { icon: 'fa-robot', value: '97%', label: 'Acurácia IA', trend: 'stable', prediction: 'Retreino em 3 dias' },
                    { icon: 'fa-users', value: '847', label: 'Pacientes Ativos', trend: 'up', prediction: '1000 até fim do mês' }
                ],
                recommendations: [
                    { id: 'r1', action: 'Revisar KPIs dos 3 setores críticos', reason: 'Prevenir queda de performance', priority: 'high' },
                    { id: 'r2', action: 'Iniciar retreino do modelo de IA', reason: 'Manter acurácia acima de 95%', priority: 'medium' },
                    { id: 'r3', action: 'Expandir capacidade para 1000 pacientes', reason: 'Crescimento projetado', priority: 'low' }
                ]
            },
            patient: {
                title: "Sua Jornada Oncológica",
                subtitle: "Alertas e recomendações personalizadas para seu tratamento",
                alerts: [
                    { id: 'p1', severity: 'high', icon: 'fa-calendar-exclamation', title: 'Consulta em 3 dias', desc: 'Dr. Silva - Oncologia', time: '15/02 14h', impact: 'Importante' },
                    { id: 'p2', severity: 'medium', icon: 'fa-pills', title: 'Medicação', desc: 'Renovar receita', time: '5 dias', impact: 'Médio' },
                    { id: 'p3', severity: 'low', icon: 'fa-heart', title: 'Bem-estar', desc: 'Grupo de apoio quinta', time: 'Opcional', impact: 'Preventivo' }
                ],
                metrics: [
                    { icon: 'fa-user-check', value: '92%', label: 'Adesão', trend: 'stable', prediction: 'Mantendo padrão' },
                    { icon: 'fa-calendar-check', value: '3/5', label: 'Consultas', trend: 'up', prediction: '2 agendamentos' },
                    { icon: 'fa-heart', value: 'Bom', label: 'Estado Geral', trend: 'stable', prediction: 'Estável' },
                    { icon: 'fa-flask', value: '2', label: 'Exames', trend: 'down', prediction: 'Agendar esta semana' }
                ],
                recommendations: [
                    { id: 'r1', action: 'Agendar exame de sangue', reason: 'Controle mensal necessário', priority: 'high' },
                    { id: 'r2', action: 'Renovar medicação', reason: 'Estoque termina em 5 dias', priority: 'medium' },
                    { id: 'r3', action: 'Participar do grupo de apoio', reason: 'Melhoria emocional', priority: 'low' }
                ]
            },
            doctor: {
                title: "Painel Médico Preditivo",
                subtitle: "Alertas e insights clínicos dos seus pacientes",
                alerts: [
                    { id: 'm1', severity: 'high', icon: 'fa-exclamation-triangle', title: 'Paciente Crítico', desc: 'João Silva - Neutropenia', time: 'Urgente', impact: 'Crítico' },
                    { id: 'm2', severity: 'medium', icon: 'fa-user-clock', title: '5 Pacientes', desc: 'Baixa adesão detectada', time: 'Esta semana', impact: 'Alto' },
                    { id: 'm3', severity: 'medium', icon: 'fa-microscope', title: '12 Laudos', desc: 'Aguardando revisão', time: '24h', impact: 'Médio' }
                ],
                metrics: [
                    { icon: 'fa-users', value: '47', label: 'Pacientes', trend: 'up', prediction: '+3 esta semana' },
                    { icon: 'fa-procedures', value: '8', label: 'Internados', trend: 'stable', prediction: '2 altas hoje' },
                    { icon: 'fa-clipboard-check', value: '89%', label: 'Protocolos OK', trend: 'down', prediction: '3 revisões' },
                    { icon: 'fa-chart-line', value: '94%', label: 'Sucesso', trend: 'up', prediction: 'Acima da média' }
                ],
                recommendations: [
                    { id: 'r1', action: 'Revisar caso João Silva urgente', reason: 'Sinais de complicação detectados', priority: 'high' },
                    { id: 'r2', action: 'Reunião multidisciplinar', reason: '3 casos complexos', priority: 'medium' },
                    { id: 'r3', action: 'Atualizar protocolos', reason: 'Novas diretrizes disponíveis', priority: 'low' }
                ]
            },
            navigator: {
                title: "Coordenação de Jornadas",
                subtitle: "Otimização preditiva e gestão de barreiras",
                alerts: [
                    { id: 'n1', severity: 'high', icon: 'fa-route', title: 'Gargalo', desc: 'Fila radiologia - 15 pacientes', time: 'Agora', impact: 'Crítico' },
                    { id: 'n2', severity: 'high', icon: 'fa-user-times', title: 'Risco Abandono', desc: '3 pacientes identificados', time: '48h', impact: 'Alto' },
                    { id: 'n3', severity: 'medium', icon: 'fa-clock', title: 'Atrasos', desc: '8 consultas amanhã', time: 'Previsto', impact: 'Médio' }
                ],
                metrics: [
                    { icon: 'fa-compass', value: '178', label: 'Navegando', trend: 'up', prediction: '+12 hoje' },
                    { icon: 'fa-flag-checkered', value: '23', label: 'Concluídos', trend: 'stable', prediction: 'Meta: 25' },
                    { icon: 'fa-exclamation', value: '7', label: 'Barreiras', trend: 'down', prediction: '3 resolvidas' },
                    { icon: 'fa-star', value: '4.8', label: 'Satisfação', trend: 'up', prediction: 'Excelente' }
                ],
                recommendations: [
                    { id: 'r1', action: 'Realocar 5 pacientes da radiologia', reason: 'Prevenir atrasos em cascata', priority: 'high' },
                    { id: 'r2', action: 'Contatar pacientes em risco', reason: 'Intervenção aumenta adesão 70%', priority: 'high' },
                    { id: 'r3', action: 'Ativar fast-track', reason: 'Liberar agenda complexa', priority: 'medium' }
                ]
            },
            financial: {
                title: "Inteligência Financeira",
                subtitle: "Prevenção de glosas e otimização de receitas",
                alerts: [
                    { id: 'f1', severity: 'high', icon: 'fa-file-invoice-dollar', title: 'Risco Glosa', desc: 'R$ 45k - 12 contas', time: 'Urgente', impact: 'R$ 45k' },
                    { id: 'f2', severity: 'medium', icon: 'fa-chart-line', title: 'Faturamento', desc: '15% abaixo da meta', time: 'Este mês', impact: 'R$ 120k' },
                    { id: 'f3', severity: 'high', icon: 'fa-coins', title: 'Cobrança', desc: 'R$ 230k > 60 dias', time: 'Vencido', impact: 'R$ 230k' }
                ],
                metrics: [
                    { icon: 'fa-dollar-sign', value: 'R$ 2.4M', label: 'Glosas Evitadas', trend: 'up', prediction: '+R$ 150k/mês' },
                    { icon: 'fa-percentage', value: '3.2%', label: 'Taxa Glosa', trend: 'down', prediction: 'Meta < 3%' },
                    { icon: 'fa-receipt', value: '847', label: 'Contas/Mês', trend: 'up', prediction: '+50 previstas' },
                    { icon: 'fa-piggy-bank', value: 'R$ 450k', label: 'Economia', trend: 'up', prediction: 'Novo recorde' }
                ],
                recommendations: [
                    { id: 'r1', action: 'Revisar 12 contas alto risco', reason: 'Prevenir perda R$ 45k', priority: 'high' },
                    { id: 'r2', action: 'Cobrança ativa > 60 dias', reason: 'Recuperar R$ 230k', priority: 'high' },
                    { id: 'r3', action: 'Otimizar codificação', reason: 'Aumentar faturamento 8%', priority: 'medium' }
                ]
            }
        };
    }

    init() {
        // Aguarda o DOM carregar
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.render());
        } else {
            // Pequeno delay para garantir que outros elementos carregaram
            setTimeout(() => this.render(), 100);
        }
    }

    render() {
        // Encontra onde inserir o dashboard
        const targetElement = this.findTargetElement();
        if (!targetElement) {
            console.log('Target element for AI Concerns not found, retrying...');
            setTimeout(() => this.render(), 500);
            return;
        }

        // Pega a configuração do portal atual
        const config = this.portalConfigs[this.currentPortal] || this.portalConfigs.dashboard;

        // Cria o HTML do dashboard
        const dashboardHTML = `
            <div class="ai-concerns-dashboard bg-gradient-to-br from-white via-orange-50 to-yellow-50 rounded-2xl p-6 mb-8 shadow-lg border border-orange-200/30">
                <!-- Header -->
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-3">
                        <div class="relative">
                            <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="10" width="80" height="80" rx="20" ry="20" fill="#ff6b35"/>
                                <rect x="25" y="30" width="15" height="15" rx="3" fill="white"/>
                                <rect x="60" y="30" width="15" height="15" rx="3" fill="white"/>
                                <path d="M 30 60 Q 50 70 70 60" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
                            </svg>
                            <span class="absolute -top-1 -right-1 flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                            </span>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-800">Ansiedade de Laura</h3>
                            <p class="text-sm text-gray-600">${config.subtitle}</p>
                        </div>
                    </div>
                    <button onclick="aiConcerns.toggleDetails()" class="text-gray-500 hover:text-orange-500 transition-colors">
                        <i class="fas fa-expand-alt"></i>
                    </button>
                </div>

                <!-- Alertas -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    ${config.alerts.map(alert => this.createAlertCard(alert)).join('')}
                </div>

                <!-- Métricas -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    ${config.metrics.map(metric => this.createMetricCard(metric)).join('')}
                </div>

                <!-- Recomendações -->
                <div class="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4">
                    <h4 class="font-semibold text-sm mb-3 flex items-center gap-2">
                        <i class="fas fa-lightbulb text-yellow-500"></i>
                        Ações Recomendadas pelo Assistente
                    </h4>
                    <div class="space-y-2">
                        ${config.recommendations.map((rec, idx) => this.createRecommendationCard(rec, idx + 1)).join('')}
                    </div>
                </div>
            </div>
        `;

        // Insere o dashboard
        targetElement.insertAdjacentHTML('afterbegin', dashboardHTML);
    }

    findTargetElement() {
        // Tenta diferentes seletores baseado na página
        const selectors = [
            '.container.mx-auto.px-4.py-8 > .glass-effect',  // Home page - antes das estatísticas
            '.container.mx-auto.px-4.py-8',  // Páginas internas
            'main > .container',  // Fallback
            'main'  // Ultimate fallback
        ];

        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element) {
                // Se for a home page, insere antes das estatísticas
                if (window.location.pathname === '/' && selector.includes('glass-effect')) {
                    return element.parentElement;
                }
                return element;
            }
        }

        return null;
    }

    createAlertCard(alert) {
        const severityColors = {
            high: 'bg-red-50 border-red-300 text-red-700',
            medium: 'bg-yellow-50 border-yellow-300 text-yellow-700',
            low: 'bg-blue-50 border-blue-300 text-blue-700'
        };

        return `
            <div class="alert-card ${severityColors[alert.severity]} rounded-xl p-4 border cursor-pointer hover:shadow-md transition-all" onclick="aiConcerns.showDetails('${alert.id}')">
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <i class="fas ${alert.icon} text-lg"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-semibold text-sm">${alert.title}</h4>
                        <p class="text-xs opacity-90 mt-1">${alert.desc}</p>
                        <div class="flex justify-between items-center mt-2">
                            <span class="text-xs font-medium">${alert.time}</span>
                            <span class="text-xs font-bold">${alert.impact}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    createMetricCard(metric) {
        const trendIcons = {
            up: 'fa-arrow-up text-green-500',
            down: 'fa-arrow-down text-red-500',
            stable: 'fa-arrow-right text-gray-500'
        };

        return `
            <div class="metric-card bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all">
                <div class="flex items-center justify-between mb-2">
                    <i class="fas ${metric.icon} text-orange-500"></i>
                    <i class="fas ${trendIcons[metric.trend]} text-xs"></i>
                </div>
                <div class="text-2xl font-bold text-gray-800">${metric.value}</div>
                <div class="text-xs text-gray-600">${metric.label}</div>
                <div class="text-xs text-orange-600 mt-1">
                    <i class="fas fa-info-circle text-xs"></i> ${metric.prediction}
                </div>
            </div>
        `;
    }

    createRecommendationCard(rec, number) {
        const priorityColors = {
            high: 'bg-red-100 text-red-700',
            medium: 'bg-yellow-100 text-yellow-700',
            low: 'bg-blue-100 text-blue-700'
        };

        const priorityLabels = {
            high: 'Urgente',
            medium: 'Importante',
            low: 'Preventivo'
        };

        return `
            <div class="recommendation-card flex items-center gap-3 bg-white/80 rounded-lg p-3 hover:bg-white transition-all cursor-pointer" onclick="aiConcerns.executeRecommendation('${rec.id}')">
                <div class="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                    ${number}
                </div>
                <div class="flex-1">
                    <p class="text-sm text-gray-700">${rec.action}</p>
                    <p class="text-xs text-gray-500">${rec.reason}</p>
                </div>
                <span class="px-2 py-1 rounded text-xs font-medium ${priorityColors[rec.priority]}">
                    ${priorityLabels[rec.priority]}
                </span>
            </div>
        `;
    }

    showDetails(alertId) {
        console.log('Mostrando detalhes:', alertId);
        
        // Integra com o assistente IA se disponível
        if (window.aiAssistant && !window.aiAssistant.isOpen) {
            window.aiAssistant.toggleChat();
            
            setTimeout(() => {
                window.aiAssistant.addMessage(
                    `Detectei um alerta importante que requer sua atenção. Vou analisar os detalhes e sugerir as melhores ações para resolver esta situação.`,
                    'ai'
                );
            }, 500);
        }
    }

    executeRecommendation(recId) {
        console.log('Executando recomendação:', recId);
        
        // Feedback visual
        event.currentTarget.classList.add('bg-green-100');
        event.currentTarget.innerHTML += ' <i class="fas fa-check text-green-600 ml-2"></i>';
        
        setTimeout(() => {
            if (window.aiAssistant) {
                window.aiAssistant.toggleChat();
                window.aiAssistant.addMessage(
                    'Ação iniciada com sucesso! Estou processando sua solicitação e você receberá atualizações em tempo real.',
                    'ai'
                );
            }
        }, 300);
    }

    toggleDetails() {
        const dashboard = document.querySelector('.ai-concerns-dashboard');
        if (dashboard) {
            dashboard.classList.toggle('expanded');
            console.log('Toggle dashboard details');
        }
    }
}

// Inicializa o dashboard
const aiConcerns = new AIConcernsDashboard();