import { Hono } from 'hono'
import { html } from 'hono/html'

export const financialPage = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gestão Financeira - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </head>
    <body class="bg-gray-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Gestão Financeira • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <a href="/patient" class="text-gray-600 hover:text-green-600 transition-colors" title="Portal do Paciente">
                            <i class="fas fa-hospital-user text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>


        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- KPIs Dashboard -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Receita Mensal</p>
                            <p class="text-2xl font-bold text-gray-800">R$ 2.5M</p>
                            <p class="text-xs text-green-600 mt-1">
                                <i class="far fa-arrow-up"></i> +12% vs mês anterior
                            </p>
                        </div>
                        <i class="far fa-dollar-sign text-green-500 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Custos Operacionais</p>
                            <p class="text-2xl font-bold text-gray-800">R$ 1.8M</p>
                            <p class="text-xs text-green-700 mt-1">
                                <i class="far fa-arrow-down"></i> -5% otimizado
                            </p>
                        </div>
                        <i class="far fa-receipt text-green-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Taxa de Glosas</p>
                            <p class="text-2xl font-bold text-gray-800">2.5%</p>
                            <p class="text-xs text-lime-700 mt-1">
                                <i class="far fa-shield-check"></i> Abaixo da meta
                            </p>
                        </div>
                        <i class="far fa-exclamation-triangle text-lime-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Glosas Evitadas</p>
                            <p class="text-2xl font-bold text-gray-800">R$ 145K</p>
                            <p class="text-xs text-teal-700 mt-1">
                                <i class="far fa-cog"></i> Via IA
                            </p>
                        </div>
                        <i class="fas fa-brain text-teal-600 text-2xl"></i>
                    </div>
                </div>
            </div>

            <!-- Charts Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <!-- Revenue Chart -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                        Evolução de Receita
                    </h3>
                    <canvas style="max-width: 100%; height: auto;" id="revenueChart" class="w-full max-w-full" style="max-height: 400px;"></canvas>
                </div>

                <!-- Glosas Analysis -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="fas fa-chart-pie text-lime-600 mr-2"></i>
                        Análise de Glosas
                    </h3>
                    <canvas style="max-width: 100%; height: auto;" id="glosasChart" class="w-full max-w-full" style="max-height: 400px;"></canvas>
                </div>
            </div>

            <!-- AI Glosas Prevention -->
            <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8 border border-purple-200">
                <div class="flex items-start justify-between">
                    <div>
                        <h3 class="font-bold text-gray-800 mb-2">
                            <i class="fas fa-brain text-teal-600 mr-2"></i>
                            Prevenção de Glosas com IA
                        </h3>
                        <p class="text-gray-600 mb-4">Sistema preditivo identificou potenciais glosas esta semana</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-white p-3 rounded-lg">
                                <p class="text-sm font-semibold text-red-600">Alto Risco</p>
                                <p class="text-2xl font-bold">12</p>
                                <p class="text-xs text-gray-600">R$ 45.000 em risco</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <p class="text-sm font-semibold text-lime-700">Médio Risco</p>
                                <p class="text-2xl font-bold">28</p>
                                <p class="text-xs text-gray-600">R$ 82.000 em risco</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <p class="text-sm font-semibold text-green-600">Resolvidos</p>
                                <p class="text-2xl font-bold">45</p>
                                <p class="text-xs text-gray-600">R$ 145.000 salvos</p>
                            </div>
                        </div>
                    </div>
                    <button class="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                        <i class="far fa-search mr-2"></i>Analisar
                    </button>
                </div>
            </div>

            <!-- Cost Centers Table -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="far fa-building text-green-600 mr-2"></i>
                    Centros de Custo
                </h3>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-2">Departamento</th>
                                <th class="text-left py-2">Orçamento</th>
                                <th class="text-left py-2">Gasto Atual</th>
                                <th class="text-left py-2">% Utilizado</th>
                                <th class="text-left py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <i class="far fa-capsules text-teal-600 mr-2"></i>
                                        Oncologia
                                    </div>
                                </td>
                                <td class="py-3">R$ 800.000</td>
                                <td class="py-3">R$ 650.000</td>
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <div class="w-20 bg-gray-200 rounded-full h-2 mr-2">
                                            <div class="bg-green-600 h-2 rounded-full" style="width: 81%"></div>
                                        </div>
                                        <span>81%</span>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Normal</span>
                                </td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <i class="far fa-radiation text-lime-600 mr-2"></i>
                                        Radioterapia
                                    </div>
                                </td>
                                <td class="py-3">R$ 500.000</td>
                                <td class="py-3">R$ 420.000</td>
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <div class="w-20 bg-gray-200 rounded-full h-2 mr-2">
                                            <div class="bg-lime-600 h-2 rounded-full" style="width: 84%"></div>
                                        </div>
                                        <span>84%</span>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-lime-100 text-yellow-700 rounded text-xs">Atenção</span>
                                </td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <i class="fas fa-hospital-alt text-emerald-600 mr-2"></i>
                                        Cirurgia
                                    </div>
                                </td>
                                <td class="py-3">R$ 300.000</td>
                                <td class="py-3">R$ 280.000</td>
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <div class="w-20 bg-gray-200 rounded-full h-2 mr-2">
                                            <div class="bg-red-500 h-2 rounded-full" style="width: 93%"></div>
                                        </div>
                                        <span>93%</span>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-emerald-100 text-red-700 rounded text-xs">Crítico</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Optimization Suggestions -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="fas fa-brain text-lime-600 mr-2"></i>
                    Sugestões de Otimização (IA)
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="border rounded-lg p-4 hover:shadow-md transition-all">
                        <div class="flex items-start">
                            <i class="far fa-capsules text-green-500 text-xl mr-3 mt-1"></i>
                            <div>
                                <h4 class="font-semibold text-gray-800">Negociação de Medicamentos</h4>
                                <p class="text-sm text-gray-600 mt-1">Potencial economia de R$ 45.000/mês através de compra em volume</p>
                                <button class="mt-2 text-green-600 text-sm hover:text-green-700">
                                    <i class="far fa-arrow-right mr-1"></i>Implementar
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border rounded-lg p-4 hover:shadow-md transition-all">
                        <div class="flex items-start">
                            <i class="fas fa-hospital-alt text-green-600 text-xl mr-3 mt-1"></i>
                            <div>
                                <h4 class="font-semibold text-gray-800">Gestão de Leitos</h4>
                                <p class="text-sm text-gray-600 mt-1">Redução de 15% no tempo de permanência pode economizar R$ 30.000/mês</p>
                                <button class="mt-2 text-green-600 text-sm hover:text-green-700">
                                    <i class="far fa-arrow-right mr-1"></i>Analisar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer-gradient text-white mt-8">
            <div class="container mx-auto px-4 py-6">
                <div class="text-center">
                    <p class="text-sm opacity-90">
                        © 2024 Laura Technology | ACCamargo Cancer Center
                    </p>
                </div>
            </div>
        </footer>

        <script>
            // Revenue Chart
            const revenueCtx = document.getElementById('revenueChart').getContext('2d');
            new Chart(revenueCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                    datasets: [{
                        label: 'Receita',
                        data: [2.1, 2.2, 2.3, 2.4, 2.5, 2.5],
                        borderColor: 'rgb(34, 197, 94)',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'Custos',
                        data: [1.8, 1.85, 1.9, 1.85, 1.8, 1.8],
                        borderColor: 'rgb(239, 68, 68)',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return 'R$ ' + value + 'M';
                                }
                            }
                        }
                    }
                }
            });

            // Glosas Chart
            const glosasCtx = document.getElementById('glosasChart').getContext('2d');
            new Chart(glosasCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Documentação Incompleta', 'Código Incorreto', 'Autorização Expirada', 'Não Coberto'],
                    datasets: [{
                        data: [45, 30, 20, 10],
                        backgroundColor: [
                            'rgba(239, 68, 68, 0.8)',
                            'rgba(245, 158, 11, 0.8)',
                            'rgba(59, 130, 246, 0.8)',
                            'rgba(139, 92, 246, 0.8)'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'right'
                        }
                    }
                }
            });
        </script>
        <script src="/static/ai-assistant.js"></script>
        <script src="/static/portal-helpers.js"></script>
        <script src="/static/ai-assistant.js"></script>
        <script src="/static/portal-helpers.js"></script>
        <script src="/static/ai-concerns.js"></script>
    <script src="/static/action-plan-system.js"></script>
    <script src="/static/action-plan-integration.js"></script>
    </body>
    </html>
  `)
}