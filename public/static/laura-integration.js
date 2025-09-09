// LAURA Integration - Integração completa com LAURA Assistant
// Conecta todas as ações da plataforma com o assistente LAURA

(function() {
    console.log('🤖 LAURA Integration: Inicializando integração com assistente LAURA...');
    
    // Aguarda carregamento do LAURA Assistant
    function waitForLaura() {
        return new Promise((resolve) => {
            const checkInterval = setInterval(() => {
                if (window.lauraAssistant && window.actionPlanHandlers) {
                    clearInterval(checkInterval);
                    console.log('✅ LAURA Assistant e handlers carregados!');
                    resolve();
                }
            }, 100);
        });
    }
    
    async function initializeLauraIntegration() {
        await waitForLaura();
        
        // Sobrescreve métodos de popup para abrir dentro do LAURA
        overridePopupMethods();
        
        // Adiciona métodos customizados ao LAURA
        enhanceLauraMethods();
        
        // Integra sistema de Ansiedade de Laura
        integrateAnxietySystem();
        
        console.log('✅ Integração com LAURA Assistant configurada com sucesso!');
    }
    
    function overridePopupMethods() {
        if (!window.actionPlanHandlers || !window.lauraAssistant) return;
        
        const handlers = window.actionPlanHandlers;
        const laura = window.lauraAssistant;
        
        // Sobrescreve showActionPlanPopup para abrir no LAURA
        handlers.showActionPlanPopup = function(plan) {
            console.log('📋 Abrindo plano de ação no LAURA Assistant...');
            laura.showContent('action', {
                type: 'action-plan',
                title: 'Plano de Ação Gerado',
                content: plan
            });
        };
        
        // Sobrescreve showFinancialImpactPopup
        handlers.showFinancialImpactPopup = function(impact) {
            console.log('📊 Abrindo análise financeira no LAURA Assistant...');
            laura.showContent('action', {
                type: 'financial-analysis',
                title: 'Análise de Impacto Financeiro',
                content: impact
            });
        };
        
        // Sobrescreve showSimilarCasesPopup
        handlers.showSimilarCasesPopup = function(cases) {
            console.log('🔍 Abrindo casos similares no LAURA Assistant...');
            laura.showContent('360', {
                type: 'similar-cases',
                title: 'Casos Similares Encontrados',
                content: cases
            });
        };
        
        // Sobrescreve showTaskDelegationPopup
        handlers.showTaskDelegationPopup = function(delegation) {
            console.log('👥 Abrindo delegação no LAURA Assistant...');
            laura.showContent('action', {
                type: 'task-delegation',
                title: 'Tarefas Delegadas',
                content: delegation
            });
        };
        
        // Sobrescreve showReviewSchedulePopup
        handlers.showReviewSchedulePopup = function(schedule) {
            console.log('📅 Abrindo agenda no LAURA Assistant...');
            laura.showContent('action', {
                type: 'review-schedule',
                title: 'Revisão Agendada',
                content: schedule
            });
        };
    }
    
    function enhanceLauraMethods() {
        if (!window.lauraAssistant) return;
        
        const laura = window.lauraAssistant;
        
        // Adiciona método para mostrar conteúdo customizado
        laura.showContent = function(view, data) {
            // Muda para a view apropriada
            laura.changeView(view);
            
            // Aguarda um momento para a view carregar
            setTimeout(() => {
                const contentArea = document.querySelector('.assistant-content');
                if (!contentArea) return;
                
                // Renderiza o conteúdo baseado no tipo
                let htmlContent = '';
                
                switch(data.type) {
                    case 'action-plan':
                        htmlContent = renderActionPlan(data.content);
                        break;
                    case 'financial-analysis':
                        htmlContent = renderFinancialAnalysis(data.content);
                        break;
                    case 'similar-cases':
                        htmlContent = renderSimilarCases(data.content);
                        break;
                    case 'task-delegation':
                        htmlContent = renderTaskDelegation(data.content);
                        break;
                    case 'review-schedule':
                        htmlContent = renderReviewSchedule(data.content);
                        break;
                    default:
                        htmlContent = `<div class="p-4">${data.content}</div>`;
                }
                
                // Insere o conteúdo na área apropriada
                if (view === 'action') {
                    const actionContent = contentArea.querySelector('.action-content');
                    if (actionContent) {
                        actionContent.innerHTML = htmlContent;
                    }
                } else if (view === '360') {
                    const view360Content = contentArea.querySelector('.view-360-content');
                    if (view360Content) {
                        view360Content.innerHTML = htmlContent;
                    }
                } else {
                    contentArea.insertAdjacentHTML('beforeend', htmlContent);
                }
            }, 100);
        };
        
        // Adiciona método para notificações do sistema
        laura.notify = function(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `laura-notification ${type}`;
            notification.innerHTML = `
                <div class="flex items-center gap-2 p-3 rounded-lg bg-orange-100 border-l-4 border-orange-500">
                    <span class="text-orange-600">🤖</span>
                    <span class="text-sm">${message}</span>
                </div>
            `;
            
            const container = document.querySelector('.assistant-messages');
            if (container) {
                container.appendChild(notification);
                setTimeout(() => notification.remove(), 5000);
            }
        };
    }
    
    function integrateAnxietySystem() {
        if (!window.lauraAssistant) return;
        
        const laura = window.lauraAssistant;
        
        // Monitora eventos críticos da plataforma
        document.addEventListener('critical-alert', (event) => {
            laura.addAnxietyAlert({
                type: event.detail.type,
                severity: event.detail.severity,
                message: event.detail.message,
                patient: event.detail.patient,
                timestamp: new Date()
            });
            
            // Se for crítico, muda automaticamente para view de Ansiedade
            if (event.detail.severity === 'critical') {
                laura.changeView('anxiety');
                laura.notify(`⚠️ Alerta Crítico: ${event.detail.message}`, 'warning');
            }
        });
        
        // Monitora cliques em botões de ação rápida
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-laura-action]')) {
                e.preventDefault();
                const action = e.target.dataset.lauraAction;
                const data = e.target.dataset.lauraData;
                
                laura.handleAction(action, data ? JSON.parse(data) : {});
            }
        });
    }
    
    // Funções de renderização para diferentes tipos de conteúdo
    function renderActionPlan(plan) {
        return `
            <div class="action-plan-content p-4">
                <h3 class="text-lg font-bold text-orange-600 mb-3">
                    <i class="fas fa-clipboard-list mr-2"></i>Plano de Ação
                </h3>
                <div class="space-y-3">
                    ${plan.steps ? plan.steps.map(step => `
                        <div class="step-item flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <span class="step-number bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">${step.number}</span>
                            <div class="flex-1">
                                <p class="font-medium">${step.title}</p>
                                <p class="text-sm text-gray-600 mt-1">${step.description}</p>
                            </div>
                        </div>
                    `).join('') : `<p>${plan}</p>`}
                </div>
            </div>
        `;
    }
    
    function renderFinancialAnalysis(impact) {
        return `
            <div class="financial-analysis-content p-4">
                <h3 class="text-lg font-bold text-orange-600 mb-3">
                    <i class="fas fa-chart-line mr-2"></i>Análise Financeira
                </h3>
                <div class="grid grid-cols-2 gap-4">
                    <div class="metric-card p-3 bg-green-50 rounded-lg">
                        <p class="text-sm text-gray-600">Economia Potencial</p>
                        <p class="text-xl font-bold text-green-600">R$ ${impact.savings || '0'}</p>
                    </div>
                    <div class="metric-card p-3 bg-blue-50 rounded-lg">
                        <p class="text-sm text-gray-600">ROI Estimado</p>
                        <p class="text-xl font-bold text-blue-600">${impact.roi || '0%'}</p>
                    </div>
                </div>
                <div class="mt-4">
                    <p class="text-sm text-gray-600">${impact.details || impact}</p>
                </div>
            </div>
        `;
    }
    
    function renderSimilarCases(cases) {
        return `
            <div class="similar-cases-content p-4">
                <h3 class="text-lg font-bold text-orange-600 mb-3">
                    <i class="fas fa-users mr-2"></i>Casos Similares
                </h3>
                <div class="space-y-3">
                    ${cases.list ? cases.list.map(c => `
                        <div class="case-card p-3 bg-gray-50 rounded-lg">
                            <p class="font-medium">${c.patient}</p>
                            <p class="text-sm text-gray-600">${c.similarity}% similar</p>
                            <p class="text-xs text-gray-500 mt-1">${c.outcome}</p>
                        </div>
                    `).join('') : `<p>${cases}</p>`}
                </div>
            </div>
        `;
    }
    
    function renderTaskDelegation(delegation) {
        return `
            <div class="task-delegation-content p-4">
                <h3 class="text-lg font-bold text-orange-600 mb-3">
                    <i class="fas fa-tasks mr-2"></i>Tarefas Delegadas
                </h3>
                <div class="space-y-3">
                    ${delegation.tasks ? delegation.tasks.map(task => `
                        <div class="task-card p-3 bg-gray-50 rounded-lg">
                            <div class="flex justify-between items-start">
                                <div>
                                    <p class="font-medium">${task.title}</p>
                                    <p class="text-sm text-gray-600">Responsável: ${task.assignee}</p>
                                </div>
                                <span class="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                                    ${task.priority || 'Normal'}
                                </span>
                            </div>
                        </div>
                    `).join('') : `<p>${delegation}</p>`}
                </div>
            </div>
        `;
    }
    
    function renderReviewSchedule(schedule) {
        return `
            <div class="review-schedule-content p-4">
                <h3 class="text-lg font-bold text-orange-600 mb-3">
                    <i class="fas fa-calendar-check mr-2"></i>Revisão Agendada
                </h3>
                <div class="schedule-info p-3 bg-gray-50 rounded-lg">
                    <p class="font-medium">${schedule.date || 'Data a definir'}</p>
                    <p class="text-sm text-gray-600 mt-1">${schedule.description || schedule}</p>
                    ${schedule.participants ? `
                        <div class="mt-2">
                            <p class="text-xs text-gray-500">Participantes:</p>
                            <p class="text-sm">${schedule.participants.join(', ')}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
    
    // Inicializa quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeLauraIntegration);
    } else {
        initializeLauraIntegration();
    }
    
    console.log('🤖 LAURA Integration: Script carregado e pronto!');
})();