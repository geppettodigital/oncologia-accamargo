// Financial Portal Loader - Garante funcionamento tanto direto quanto via carregamento dinâmico
(function() {
    // Detecta se estamos em modo de carregamento dinâmico ou acesso direto
    const isDynamicLoad = window.loadPortal && typeof window.loadPortal === 'function';
    
    // Função para inicializar o Portal Financeiro
    window.initializeFinancialPortal = function() {
        console.log('Inicializando Portal Financeiro LAURA...');
        
        // Garantir que Chart.js está carregado
        if (typeof Chart === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.onload = function() {
                initFinancialCharts();
            };
            document.head.appendChild(script);
        } else {
            // Chart.js já está carregado, inicializar gráficos
            setTimeout(initFinancialCharts, 100);
        }
        
        // Registrar todas as funções globais necessárias
        registerFinancialFunctions();
    };
    
    // Registra as funções do portal financeiro no escopo global
    function registerFinancialFunctions() {
        // Funções de Modal
        window.showJornadasRisco = function() {
            const modal = document.getElementById('modalJornadasRisco');
            if (modal) {
                modal.classList.remove('hidden');
                console.log('Modal Jornadas em Risco aberta');
            }
        };
        
        window.showOPMEDetail = function(code) {
            const modal = document.getElementById('modalOPMEDetail');
            const codeElement = document.getElementById('opme-code');
            if (codeElement) {
                codeElement.textContent = code;
            }
            if (modal) {
                modal.classList.remove('hidden');
                console.log('Modal OPME Detail aberta para:', code);
            }
        };
        
        window.showExtratoKPI = function(type) {
            const modal = document.getElementById('modalKPIExtrato');
            const header = document.getElementById('modalKPIExtratoHeader');
            const title = document.getElementById('modalKPIExtratoTitle');
            const content = document.getElementById('modalKPIExtratoContent');
            
            if (!modal || !header || !title || !content) {
                console.error('Elementos do modal KPI não encontrados');
                return;
            }
            
            const extratos = {
                'glosas_identificadas': {
                    title: 'Extrato de Glosas Identificadas',
                    color: 'from-red-600 to-red-700',
                    content: generateGlosasIdentificadasContent()
                },
                'glosas_revertidas': {
                    title: 'Extrato de Glosas Revertidas',
                    color: 'from-green-600 to-green-700',
                    content: generateGlosasRevertidasContent()
                },
                'roi_otimizacao': {
                    title: 'ROI de Otimização',
                    color: 'from-blue-600 to-blue-700',
                    content: generateROIContent()
                },
                'tempo_reversao': {
                    title: 'Tempo Médio de Reversão',
                    color: 'from-purple-600 to-purple-700',
                    content: generateTempoReversaoContent()
                },
                'controle_opme': {
                    title: 'Controle OPME',
                    color: 'from-amber-600 to-amber-700',
                    content: generateControleOPMEContent()
                }
            };
            
            const extrato = extratos[type];
            if (extrato) {
                title.textContent = extrato.title;
                header.className = 'bg-gradient-to-r ' + extrato.color + ' p-6 text-white';
                content.innerHTML = extrato.content;
                modal.classList.remove('hidden');
                console.log('Modal KPI Extrato aberta para:', type);
                
                // Re-inicializar gráficos específicos se necessário
                if (type === 'roi_otimizacao' || type === 'tempo_reversao') {
                    setTimeout(() => initKPICharts(type), 100);
                }
            }
        };
        
        window.closeModal = function(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('hidden');
                console.log('Modal fechada:', modalId);
            }
        };
        
        window.filterRisco = function(nivel) {
            const cards = document.querySelectorAll('.patient-risk-card');
            cards.forEach(card => {
                if (nivel === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = card.dataset.risk === nivel ? 'block' : 'none';
                }
            });
            console.log('Filtro de risco aplicado:', nivel);
        };
    }
    
    // Funções de geração de conteúdo
    function generateGlosasIdentificadasContent() {
        return '<div class="space-y-4">' +
            '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">' +
            '<div class="bg-red-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Total Identificado</p><p class="text-2xl font-bold text-red-600">R$ 485.700</p></div>' +
            '<div class="bg-red-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Casos</p><p class="text-2xl font-bold text-red-600">127</p></div>' +
            '<div class="bg-red-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Taxa Crescimento</p><p class="text-2xl font-bold text-red-600">+12.3%</p></div>' +
            '</div>' +
            '<table class="w-full"><thead><tr class="border-b"><th class="text-left py-2">Código</th><th class="text-left py-2">Paciente</th><th class="text-left py-2">Valor</th><th class="text-left py-2">Motivo</th><th class="text-left py-2">Status</th></tr></thead>' +
            '<tbody>' +
            '<tr class="border-b"><td class="py-2">GL-2024-001</td><td class="py-2">Maria Silva</td><td class="py-2 font-semibold">R$ 12.450</td><td class="py-2">Doc. Incompleta</td><td class="py-2"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Pendente</span></td></tr>' +
            '<tr class="border-b"><td class="py-2">GL-2024-002</td><td class="py-2">João Santos</td><td class="py-2 font-semibold">R$ 8.900</td><td class="py-2">Código Incorreto</td><td class="py-2"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Revisão</span></td></tr>' +
            '<tr class="border-b"><td class="py-2">GL-2024-003</td><td class="py-2">Ana Costa</td><td class="py-2 font-semibold">R$ 15.200</td><td class="py-2">Autorização Vencida</td><td class="py-2"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Pendente</span></td></tr>' +
            '<tr class="border-b"><td class="py-2">GL-2024-004</td><td class="py-2">Pedro Lima</td><td class="py-2 font-semibold">R$ 6.780</td><td class="py-2">Duplicidade</td><td class="py-2"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Análise</span></td></tr>' +
            '<tr class="border-b"><td class="py-2">GL-2024-005</td><td class="py-2">Julia Ferreira</td><td class="py-2 font-semibold">R$ 22.100</td><td class="py-2">Falta Laudo</td><td class="py-2"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Pendente</span></td></tr>' +
            '</tbody></table></div>';
    }
    
    function generateGlosasRevertidasContent() {
        return '<div class="space-y-4">' +
            '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">' +
            '<div class="bg-green-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Total Revertido</p><p class="text-2xl font-bold text-green-600">R$ 367.200</p></div>' +
            '<div class="bg-green-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Casos Revertidos</p><p class="text-2xl font-bold text-green-600">96</p></div>' +
            '<div class="bg-green-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Taxa Sucesso</p><p class="text-2xl font-bold text-green-600">75.6%</p></div>' +
            '</div>' +
            '<table class="w-full"><thead><tr class="border-b"><th class="text-left py-2">Código</th><th class="text-left py-2">Paciente</th><th class="text-left py-2">Valor</th><th class="text-left py-2">Data Reversão</th><th class="text-left py-2">Tempo</th></tr></thead>' +
            '<tbody>' +
            '<tr class="border-b"><td class="py-2">RV-2024-001</td><td class="py-2">Ana Costa</td><td class="py-2 font-semibold text-green-600">R$ 15.200</td><td class="py-2">10/01/2025</td><td class="py-2">3 dias</td></tr>' +
            '<tr class="border-b"><td class="py-2">RV-2024-002</td><td class="py-2">Pedro Lima</td><td class="py-2 font-semibold text-green-600">R$ 9.800</td><td class="py-2">12/01/2025</td><td class="py-2">5 dias</td></tr>' +
            '<tr class="border-b"><td class="py-2">RV-2024-003</td><td class="py-2">Carlos Mendes</td><td class="py-2 font-semibold text-green-600">R$ 18.450</td><td class="py-2">13/01/2025</td><td class="py-2">2 dias</td></tr>' +
            '<tr class="border-b"><td class="py-2">RV-2024-004</td><td class="py-2">Patricia Souza</td><td class="py-2 font-semibold text-green-600">R$ 7.320</td><td class="py-2">14/01/2025</td><td class="py-2">4 dias</td></tr>' +
            '<tr class="border-b"><td class="py-2">RV-2024-005</td><td class="py-2">Roberto Alves</td><td class="py-2 font-semibold text-green-600">R$ 25.600</td><td class="py-2">15/01/2025</td><td class="py-2">6 dias</td></tr>' +
            '</tbody></table></div>';
    }
    
    function generateROIContent() {
        return '<div class="space-y-4">' +
            '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">' +
            '<div class="bg-blue-50 p-4 rounded-lg"><p class="text-sm text-gray-600">ROI Total</p><p class="text-2xl font-bold text-blue-600">287%</p></div>' +
            '<div class="bg-blue-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Economia Gerada</p><p class="text-2xl font-bold text-blue-600">R$ 2.4M</p></div>' +
            '<div class="bg-blue-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Investimento</p><p class="text-2xl font-bold text-blue-600">R$ 836K</p></div>' +
            '</div>' +
            '<div class="bg-gray-50 p-4 rounded-lg">' +
            '<h4 class="font-bold text-gray-800 mb-3">Breakdown de Economias</h4>' +
            '<div class="space-y-2">' +
            '<div class="flex justify-between items-center py-2 border-b"><span>Prevenção de Glosas</span><span class="font-bold text-green-600">R$ 1.2M</span></div>' +
            '<div class="flex justify-between items-center py-2 border-b"><span>Otimização OPME</span><span class="font-bold text-green-600">R$ 680K</span></div>' +
            '<div class="flex justify-between items-center py-2 border-b"><span>Redução Retrabalho</span><span class="font-bold text-green-600">R$ 320K</span></div>' +
            '<div class="flex justify-between items-center py-2 border-b"><span>Agilidade Processos</span><span class="font-bold text-green-600">R$ 200K</span></div>' +
            '</div>' +
            '<div class="mt-4"><canvas id="roiChart" width="400" height="200"></canvas></div>' +
            '</div></div>';
    }
    
    function generateTempoReversaoContent() {
        return '<div class="space-y-4">' +
            '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">' +
            '<div class="bg-purple-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Tempo Médio</p><p class="text-2xl font-bold text-purple-600">4.2 dias</p></div>' +
            '<div class="bg-purple-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Melhor Tempo</p><p class="text-2xl font-bold text-purple-600">1 dia</p></div>' +
            '<div class="bg-purple-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Redução</p><p class="text-2xl font-bold text-purple-600">-2.1 dias</p></div>' +
            '</div>' +
            '<div class="bg-gray-50 p-4 rounded-lg">' +
            '<h4 class="font-bold text-gray-800 mb-3">Evolução Temporal</h4>' +
            '<table class="w-full"><thead><tr class="border-b"><th class="text-left py-2">Mês</th><th class="text-left py-2">Tempo Médio</th><th class="text-left py-2">Variação</th></tr></thead>' +
            '<tbody>' +
            '<tr class="border-b"><td class="py-2">Janeiro</td><td class="py-2">6.3 dias</td><td class="py-2 text-red-600">Base</td></tr>' +
            '<tr class="border-b"><td class="py-2">Fevereiro</td><td class="py-2">5.8 dias</td><td class="py-2 text-green-600">-0.5 dias</td></tr>' +
            '<tr class="border-b"><td class="py-2">Março</td><td class="py-2">5.2 dias</td><td class="py-2 text-green-600">-0.6 dias</td></tr>' +
            '<tr class="border-b"><td class="py-2">Abril</td><td class="py-2">4.9 dias</td><td class="py-2 text-green-600">-0.3 dias</td></tr>' +
            '<tr class="border-b"><td class="py-2">Maio</td><td class="py-2">4.5 dias</td><td class="py-2 text-green-600">-0.4 dias</td></tr>' +
            '<tr class="border-b"><td class="py-2">Junho</td><td class="py-2 font-bold">4.2 dias</td><td class="py-2 text-green-600 font-bold">-0.3 dias</td></tr>' +
            '</tbody></table>' +
            '<div class="mt-4"><canvas id="tempoChart" width="400" height="200"></canvas></div>' +
            '</div></div>';
    }
    
    function generateControleOPMEContent() {
        return '<div class="space-y-4">' +
            '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">' +
            '<div class="bg-amber-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Compliance</p><p class="text-2xl font-bold text-amber-600">98.7%</p></div>' +
            '<div class="bg-amber-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Materiais Analisados</p><p class="text-2xl font-bold text-amber-600">1.247</p></div>' +
            '<div class="bg-amber-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Economia</p><p class="text-2xl font-bold text-amber-600">R$ 892K</p></div>' +
            '</div>' +
            '<table class="w-full"><thead><tr class="border-b"><th class="text-left py-2">Fornecedor</th><th class="text-left py-2">Materiais</th><th class="text-left py-2">Valor Total</th><th class="text-left py-2">Compliance</th></tr></thead>' +
            '<tbody>' +
            '<tr class="border-b"><td class="py-2">MedTech Inc</td><td class="py-2">234</td><td class="py-2 font-semibold">R$ 2.8M</td><td class="py-2"><span class="text-green-600 font-bold">99.2%</span></td></tr>' +
            '<tr class="border-b"><td class="py-2">OrthoLife</td><td class="py-2">189</td><td class="py-2 font-semibold">R$ 1.9M</td><td class="py-2"><span class="text-green-600 font-bold">98.4%</span></td></tr>' +
            '<tr class="border-b"><td class="py-2">CardioTech</td><td class="py-2">156</td><td class="py-2 font-semibold">R$ 3.2M</td><td class="py-2"><span class="text-green-600 font-bold">99.5%</span></td></tr>' +
            '<tr class="border-b"><td class="py-2">ValveMed</td><td class="py-2">98</td><td class="py-2 font-semibold">R$ 4.1M</td><td class="py-2"><span class="text-yellow-600 font-bold">97.8%</span></td></tr>' +
            '<tr class="border-b"><td class="py-2">JointPro</td><td class="py-2">145</td><td class="py-2 font-semibold">R$ 1.5M</td><td class="py-2"><span class="text-green-600 font-bold">98.9%</span></td></tr>' +
            '</tbody></table></div>';
    }
    
    // Função para inicializar gráficos KPI específicos
    function initKPICharts(type) {
        if (type === 'roi_otimizacao') {
            const ctx = document.getElementById('roiChart');
            if (ctx && ctx.getContext) {
                new Chart(ctx.getContext('2d'), {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                        datasets: [{
                            label: 'ROI Acumulado (%)',
                            data: [120, 180, 220, 250, 270, 287],
                            borderColor: 'rgb(59, 130, 246)',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: true, position: 'top' }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    callback: function(value) {
                                        return value + '%';
                                    }
                                }
                            }
                        }
                    }
                });
            }
        } else if (type === 'tempo_reversao') {
            const ctx = document.getElementById('tempoChart');
            if (ctx && ctx.getContext) {
                new Chart(ctx.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                        datasets: [{
                            label: 'Tempo Médio (dias)',
                            data: [6.3, 5.8, 5.2, 4.9, 4.5, 4.2],
                            backgroundColor: 'rgba(147, 51, 234, 0.8)',
                            borderColor: 'rgba(147, 51, 234, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: true, position: 'top' }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 8,
                                ticks: {
                                    callback: function(value) {
                                        return value + ' dias';
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }
    }
    
    // Função para inicializar gráficos principais
    window.initFinancialCharts = function() {
        console.log('Inicializando gráficos do Portal Financeiro...');
        
        // Glosas Trend Chart
        const ctx1 = document.getElementById('glosasTrendChart');
        if (ctx1 && ctx1.getContext) {
            new Chart(ctx1.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                    datasets: [{
                        label: 'Glosas Identificadas (R$ mil)',
                        data: [320, 380, 420, 390, 450, 486],
                        borderColor: 'rgb(239, 68, 68)',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: true, position: 'top' },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return 'R$ ' + context.parsed.y + 'K';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return 'R$ ' + value + 'K';
                                }
                            }
                        }
                    }
                }
            });
            console.log('Gráfico de Tendência de Glosas inicializado');
        }
        
        // Reversao Chart
        const ctx2 = document.getElementById('reversaoChart');
        if (ctx2 && ctx2.getContext) {
            new Chart(ctx2.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                    datasets: [{
                        label: 'Taxa de Reversão (%)',
                        data: [65, 70, 72, 68, 74, 76],
                        backgroundColor: 'rgba(34, 197, 94, 0.8)',
                        borderColor: 'rgba(34, 197, 94, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: true, position: 'top' },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.parsed.y + '%';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
            console.log('Gráfico de Taxa de Reversão inicializado');
        }
    };
    
    // Auto-inicializar se estivermos na página do portal financeiro
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (window.location.pathname.includes('/financial')) {
                initializeFinancialPortal();
            }
        });
    } else {
        if (window.location.pathname.includes('/financial')) {
            initializeFinancialPortal();
        }
    }
    
    // Exportar para uso global
    window.FinancialPortalLoader = {
        initialize: initializeFinancialPortal,
        registerFunctions: registerFinancialFunctions,
        initCharts: initFinancialCharts
    };
    
})();