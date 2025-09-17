import { html } from 'hono/html'

export const financialV3Page = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portal Financeiro - ACCamargo Cancer Center</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <style>
            .glass-effect {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
            .kpi-card {
                background: linear-gradient(145deg, #ffffff 0%, #f9fafb 100%);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .kpi-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
            }
            .status-aprovado { background-color: #10b981; }
            .status-analise { background-color: #f59e0b; }
            .status-pendente { background-color: #ef4444; }
            .status-resolvido { background-color: #3b82f6; }
            .status-recurso { background-color: #8b5cf6; }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-50 via-blue-50/20 to-green-50/20 min-h-screen">
        <!-- Header -->
        <div class="glass-effect sticky top-0 z-40 border-b border-gray-200">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <button onclick="window.history.back()" class="p-2 hover:bg-gray-100 rounded-lg transition">
                            <i class="fas fa-arrow-left text-gray-600"></i>
                        </button>
                        <div>
                            <h1 class="text-2xl font-bold text-gray-900">Portal Financeiro</h1>
                            <p class="text-sm text-gray-600">Plataforma Oncológica v3.0</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <select id="dateRange" class="px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="7d">Últimos 7 dias</option>
                            <option value="30d" selected>Últimos 30 dias</option>
                            <option value="90d">Últimos 90 dias</option>
                            <option value="12m">Últimos 12 meses</option>
                        </select>
                        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            <i class="fas fa-download mr-2"></i>Exportar
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-6">
            <!-- KPI Cards Row -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <!-- Glosas Identificadas -->
                <div class="kpi-card p-6 rounded-xl shadow-lg border border-white/50">
                    <div class="flex items-start justify-between mb-3">
                        <div class="p-3 bg-red-100 rounded-lg">
                            <i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>
                        </div>
                        <span class="text-xs text-gray-500 font-medium">↑ 12.3%</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900">R$ 487.2K</h3>
                    <p class="text-sm text-gray-600 mt-1">Glosas Identificadas</p>
                    <p class="text-xs text-gray-500 mt-2">142 ocorrências</p>
                </div>

                <!-- Glosas Revertidas -->
                <div class="kpi-card p-6 rounded-xl shadow-lg border border-white/50">
                    <div class="flex items-start justify-between mb-3">
                        <div class="p-3 bg-green-100 rounded-lg">
                            <i class="fas fa-check-circle text-green-600 text-xl"></i>
                        </div>
                        <span class="text-xs text-green-600 font-medium">80.5%</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900">R$ 392.1K</h3>
                    <p class="text-sm text-gray-600 mt-1">Glosas Revertidas</p>
                    <p class="text-xs text-gray-500 mt-2">Taxa de sucesso</p>
                </div>

                <!-- Tempo Médio -->
                <div class="kpi-card p-6 rounded-xl shadow-lg border border-white/50">
                    <div class="flex items-start justify-between mb-3">
                        <div class="p-3 bg-blue-100 rounded-lg">
                            <i class="fas fa-clock text-blue-600 text-xl"></i>
                        </div>
                        <span class="text-xs text-gray-500 font-medium">↓ 2 dias</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900">4.5 dias</h3>
                    <p class="text-sm text-gray-600 mt-1">Tempo Médio Reversão</p>
                    <p class="text-xs text-gray-500 mt-2">Melhor que média</p>
                </div>

                <!-- ROI -->
                <div class="kpi-card p-6 rounded-xl shadow-lg border border-white/50">
                    <div class="flex items-start justify-between mb-3">
                        <div class="p-3 bg-purple-100 rounded-lg">
                            <i class="fas fa-chart-line text-purple-600 text-xl"></i>
                        </div>
                        <span class="text-xs text-purple-600 font-medium">342%</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900">R$ 2.4M</h3>
                    <p class="text-sm text-gray-600 mt-1">Retorno Total</p>
                    <p class="text-xs text-gray-500 mt-2">Últimos 12 meses</p>
                </div>
            </div>

            <!-- Issue Breakdown Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <!-- Documentação Incompleta -->
                <div class="bg-white rounded-xl shadow-lg p-5 border-l-4 border-orange-500">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <h4 class="font-semibold text-gray-900">Documentação Incompleta</h4>
                            <p class="text-sm text-gray-600 mt-1">34 casos</p>
                        </div>
                        <span class="px-2 py-1 text-xs font-medium text-white bg-purple-600 rounded-full status-recurso">Em recurso</span>
                    </div>
                    <p class="text-2xl font-bold text-gray-900">R$ 142.3K</p>
                    <div class="mt-3 flex space-x-2">
                        <button class="text-xs text-blue-600 hover:text-blue-800">Ver detalhes →</button>
                        <button class="text-xs text-purple-600 hover:text-purple-800">Abrir recurso →</button>
                    </div>
                </div>

                <!-- Autorização Prévia -->
                <div class="bg-white rounded-xl shadow-lg p-5 border-l-4 border-yellow-500">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <h4 class="font-semibold text-gray-900">Autorização Prévia</h4>
                            <p class="text-sm text-gray-600 mt-1">28 casos</p>
                        </div>
                        <span class="px-2 py-1 text-xs font-medium text-white bg-orange-500 rounded-full status-pendente">Pendente</span>
                    </div>
                    <p class="text-2xl font-bold text-gray-900">R$ 98.7K</p>
                    <div class="mt-3 flex space-x-2">
                        <button class="text-xs text-blue-600 hover:text-blue-800">Ver detalhes →</button>
                        <button class="text-xs text-orange-600 hover:text-orange-800">Solicitar autorização →</button>
                    </div>
                </div>

                <!-- Codificação Incorreta -->
                <div class="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <h4 class="font-semibold text-gray-900">Codificação Incorreta</h4>
                            <p class="text-sm text-gray-600 mt-1">52 casos</p>
                        </div>
                        <span class="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-full status-resolvido">Resolvido</span>
                    </div>
                    <p class="text-2xl font-bold text-gray-900">R$ 246.2K</p>
                    <div class="mt-3 flex space-x-2">
                        <button class="text-xs text-blue-600 hover:text-blue-800">Ver detalhes →</button>
                        <button class="text-xs text-green-600 hover:text-green-800">Ver histórico →</button>
                    </div>
                </div>
            </div>

            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Left Column: OPME Table + Charts -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- OPME Control Table -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-bold text-gray-900">Controle de OPME</h3>
                            <button class="text-sm text-blue-600 hover:text-blue-800">
                                <i class="fas fa-filter mr-1"></i>Filtrar
                            </button>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b">
                                        <th class="text-left py-3 px-2 text-sm font-medium text-gray-700">Material</th>
                                        <th class="text-center py-3 px-2 text-sm font-medium text-gray-700">Qtd</th>
                                        <th class="text-right py-3 px-2 text-sm font-medium text-gray-700">Custo Unit</th>
                                        <th class="text-right py-3 px-2 text-sm font-medium text-gray-700">Total</th>
                                        <th class="text-center py-3 px-2 text-sm font-medium text-gray-700">Status</th>
                                        <th class="text-center py-3 px-2 text-sm font-medium text-gray-700">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-2">
                                            <div>
                                                <p class="font-medium text-gray-900">Prótese Oncológica T4</p>
                                                <p class="text-xs text-gray-500">Cod: PRO-T4-2024</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2">3</td>
                                        <td class="text-right py-3 px-2">R$ 45.000</td>
                                        <td class="text-right py-3 px-2 font-semibold">R$ 135.000</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">Aprovado</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-2">
                                            <div>
                                                <p class="font-medium text-gray-900">Kit Quimio Port</p>
                                                <p class="text-xs text-gray-500">Cod: KQP-2024-12</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2">12</td>
                                        <td class="text-right py-3 px-2">R$ 3.200</td>
                                        <td class="text-right py-3 px-2 font-semibold">R$ 38.400</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-orange-500 rounded-full">Análise</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-2">
                                            <div>
                                                <p class="font-medium text-gray-900">Stent Biliar</p>
                                                <p class="text-xs text-gray-500">Cod: STB-2024-05</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2">5</td>
                                        <td class="text-right py-3 px-2">R$ 8.500</td>
                                        <td class="text-right py-3 px-2 font-semibold">R$ 42.500</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">Aprovado</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-2">
                                            <div>
                                                <p class="font-medium text-gray-900">Cateter Central</p>
                                                <p class="text-xs text-gray-500">Cod: CAT-2024-08</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2">8</td>
                                        <td class="text-right py-3 px-2">R$ 1.800</td>
                                        <td class="text-right py-3 px-2 font-semibold">R$ 14.400</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">Aprovado</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-4 flex justify-between items-center">
                            <p class="text-sm text-gray-600">Mostrando 4 de 23 itens</p>
                            <button class="text-sm text-blue-600 hover:text-blue-800">Ver todos →</button>
                        </div>
                    </div>

                    <!-- Glosas Chart -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Evolução de Glosas</h3>
                        <canvas id="glosasChart" height="100"></canvas>
                    </div>
                </div>

                <!-- Right Column: ROI + AI Alert -->
                <div class="space-y-6">
                    <!-- ROI em Tempo Real -->
                    <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
                        <h3 class="text-lg font-bold mb-4">ROI em Tempo Real</h3>
                        <div class="mb-4">
                            <p class="text-4xl font-bold">342%</p>
                            <p class="text-sm opacity-90">Retorno Total</p>
                            <p class="text-xs opacity-75 mt-1">Últimos 12 meses</p>
                        </div>
                        <div class="space-y-3 border-t border-white/20 pt-4">
                            <div class="flex justify-between items-center">
                                <span class="text-sm">Redução Glosas</span>
                                <span class="font-bold">+R$ 1.2M</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm">Otimização OPME</span>
                                <span class="font-bold">+R$ 680K</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm">Automação</span>
                                <span class="font-bold">+R$ 520K</span>
                            </div>
                        </div>
                        <button class="w-full mt-4 bg-white/20 hover:bg-white/30 py-2 rounded-lg transition">
                            Ver Detalhes Completos
                        </button>
                    </div>

                    <!-- Laura Finance AI -->
                    <div class="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
                        <div class="flex items-center mb-4">
                            <div class="p-3 bg-white/20 rounded-lg mr-3">
                                <i class="fas fa-brain text-2xl"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold">Laura Finance AI</h3>
                                <p class="text-xs opacity-90">Análise Preditiva</p>
                            </div>
                        </div>
                        <div class="bg-white/10 rounded-lg p-4 mb-4">
                            <p class="text-sm mb-2">
                                Identifiquei <span class="font-bold text-lg">R$ 127K</span> em potenciais glosas nos próximos 7 dias.
                            </p>
                            <p class="text-xs opacity-90">
                                Recomendo revisão urgente de <span class="font-bold">23 prontuários</span> com alto risco.
                            </p>
                        </div>
                        <button onclick="reviewRecords()" class="w-full bg-white text-purple-700 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Revisar 23 Prontuários
                        </button>
                        <button class="w-full mt-2 bg-white/20 hover:bg-white/30 py-2 rounded-lg transition text-sm">
                            Ver Análise Completa
                        </button>
                    </div>

                    <!-- Ações Rápidas -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Ações Rápidas</h3>
                        <div class="space-y-2">
                            <button class="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex items-center justify-between">
                                <span class="text-sm font-medium text-gray-700">
                                    <i class="fas fa-file-invoice mr-2 text-blue-600"></i>
                                    Novo Recurso de Glosa
                                </span>
                                <i class="fas fa-arrow-right text-gray-400"></i>
                            </button>
                            <button class="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex items-center justify-between">
                                <span class="text-sm font-medium text-gray-700">
                                    <i class="fas fa-chart-bar mr-2 text-green-600"></i>
                                    Relatório Mensal
                                </span>
                                <i class="fas fa-arrow-right text-gray-400"></i>
                            </button>
                            <button class="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex items-center justify-between">
                                <span class="text-sm font-medium text-gray-700">
                                    <i class="fas fa-cog mr-2 text-purple-600"></i>
                                    Configurar Alertas
                                </span>
                                <i class="fas fa-arrow-right text-gray-400"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script>
            // Initialize Chart
            const ctx = document.getElementById('glosasChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                    datasets: [{
                        label: 'Glosas Identificadas',
                        data: [450000, 470000, 460000, 485000, 475000, 487200],
                        borderColor: 'rgb(239, 68, 68)',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'Glosas Revertidas',
                        data: [360000, 375000, 368000, 390000, 380000, 392100],
                        borderColor: 'rgb(34, 197, 94)',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return 'R$ ' + (value/1000).toFixed(0) + 'K';
                                }
                            }
                        }
                    }
                }
            });

            // Functions
            function reviewRecords() {
                alert('Abrindo lista de 23 prontuários para revisão urgente...');
                // Implement navigation to records list
            }

            // Date range change handler
            document.getElementById('dateRange').addEventListener('change', function() {
                console.log('Date range changed to:', this.value);
                // Implement data refresh based on date range
            });
        </script>
    </body>
    </html>
  `)
}