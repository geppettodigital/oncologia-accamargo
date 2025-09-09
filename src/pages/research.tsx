import { Hono } from 'hono'
import { html } from 'hono/html'

export const researchPage = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pesquisa Clínica - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </head>
    <body class="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Pesquisa Clínica • ACCamargo Cancer Center</p>
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
            <!-- Research Overview -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Estudos Ativos</p>
                            <p class="text-2xl font-bold text-gray-800">12</p>
                        </div>
                        <i class="fas fa-flask text-green-700 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Pacientes Inscritos</p>
                            <p class="text-2xl font-bold text-gray-800">456</p>
                        </div>
                        <i class="fas fa-users text-teal-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Data Points</p>
                            <p class="text-2xl font-bold text-gray-800">1.25M</p>
                        </div>
                        <i class="far fa-database text-green-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Insights Gerados</p>
                            <p class="text-2xl font-bold text-gray-800">89</p>
                        </div>
                        <i class="fas fa-brain text-green-500 text-2xl"></i>
                    </div>
                </div>
            </div>

            <!-- Active Studies -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
                <h3 class="font-bold text-gray-800 mb-4">
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                    Estudos em Andamento
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="border rounded-lg p-4 hover:shadow-lg transition-all">
                        <div class="flex items-start justify-between mb-2">
                            <h4 class="font-semibold text-indigo-700">Imunoterapia em Ca Pulmão</h4>
                            <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Recrutando</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-2">Fase III - Estudo randomizado duplo-cego</p>
                        <div class="grid grid-cols-2 gap-2 text-xs">
                            <div>
                                <p class="text-gray-500">Inscritos</p>
                                <p class="font-semibold">85/100</p>
                            </div>
                            <div>
                                <p class="text-gray-500">Conclusão</p>
                                <p class="font-semibold">Jun 2025</p>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-700 h-2 rounded-full" style="width: 85%"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border rounded-lg p-4 hover:shadow-lg transition-all">
                        <div class="flex items-start justify-between mb-2">
                            <h4 class="font-semibold text-purple-700">Biomarcadores Preditivos</h4>
                            <span class="px-2 py-1 bg-green-100 text-blue-700 rounded text-xs">Ativo</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-2">Fase II - Estudo observacional</p>
                        <div class="grid grid-cols-2 gap-2 text-xs">
                            <div>
                                <p class="text-gray-500">Inscritos</p>
                                <p class="font-semibold">45/50</p>
                            </div>
                            <div>
                                <p class="text-gray-500">Conclusão</p>
                                <p class="font-semibold">Set 2024</p>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-teal-600 h-2 rounded-full" style="width: 90%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- AI-Generated Insights -->
            <div class="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6 mb-8">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="fas fa-brain text-teal-600 mr-2"></i>
                    Insights Recentes da IA
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-start">
                            <i class="far fa-chart-line text-green-500 text-xl mr-3 mt-1"></i>
                            <div>
                                <h4 class="font-semibold text-gray-800">Correlação Positiva Identificada</h4>
                                <p class="text-sm text-gray-600 mt-1">Níveis elevados de IL-6 correlacionam com melhor resposta à imunoterapia</p>
                                <p class="text-xs text-gray-500 mt-2">
                                    <i class="far fa-check-circle text-green-500"></i> p < 0.001 | n=145 pacientes
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-start">
                            <i class="far fa-exclamation-triangle text-lime-600 text-xl mr-3 mt-1"></i>
                            <div>
                                <h4 class="font-semibold text-gray-800">Padrão de Toxicidade</h4>
                                <p class="text-sm text-gray-600 mt-1">Pacientes >65 anos apresentam maior incidência de neuropatia periférica</p>
                                <p class="text-xs text-gray-500 mt-2">
                                    <i class="far fa-info-circle text-green-600"></i> p = 0.023 | Requer ajuste de dose
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Data Analysis Tools -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <!-- Cohort Analysis -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-chart-bar text-green-600 mr-2"></i>
                        Análise de Coorte
                    </h3>
                    <canvas style="max-width: 100%; height: auto;" id="cohortChart" class="w-full max-w-full" style="max-height: 400px;"></canvas>
                </div>

                <!-- Survival Analysis -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-chart-line text-green-500 mr-2"></i>
                        Análise de Sobrevida
                    </h3>
                    <canvas style="max-width: 100%; height: auto;" id="survivalChart" class="w-full max-w-full" style="max-height: 400px;"></canvas>
                </div>
            </div>

            <!-- Research Opportunities -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="fas fa-flask text-green-700 mr-2"></i>
                    Oportunidades de Pesquisa Identificadas pela IA
                </h3>
                
                <div class="space-y-3">
                    <div class="border-l-4 border-indigo-500 pl-4 py-2">
                        <h4 class="font-semibold text-gray-800">Gap de Dados: Toxicidade Tardia</h4>
                        <p class="text-sm text-gray-600">230 pacientes elegíveis, completude de dados: 45%</p>
                        <button class="mt-2 text-green-700 text-sm hover:text-green-800">
                            <i class="far fa-arrow-right mr-1"></i>Iniciar Coleta
                        </button>
                    </div>
                    
                    <div class="border-l-4 border-teal-600 pl-4 py-2">
                        <h4 class="font-semibold text-gray-800">Padrão Emergente: Resposta Combinada</h4>
                        <p class="text-sm text-gray-600">45 pacientes mostram resposta superior com terapia combinada</p>
                        <button class="mt-2 text-teal-600 text-sm hover:text-teal-700">
                            <i class="far fa-arrow-right mr-1"></i>Propor Estudo
                        </button>
                    </div>
                    
                    <div class="border-l-4 border-green-500 pl-4 py-2">
                        <h4 class="font-semibold text-gray-800">Colaboração Internacional</h4>
                        <p class="text-sm text-gray-600">Harvard Medical School - Imunoterapia avançada</p>
                        <button class="mt-2 text-green-500 text-sm hover:text-green-600">
                            <i class="far fa-arrow-right mr-1"></i>Ver Proposta
                        </button>
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
            // Cohort Analysis Chart
            const cohortCtx = document.getElementById('cohortChart').getContext('2d');
            new Chart(cohortCtx, {
                type: 'bar',
                data: {
                    labels: ['Estágio I', 'Estágio II', 'Estágio III', 'Estágio IV'],
                    datasets: [{
                        label: 'Taxa de Resposta',
                        data: [85, 72, 58, 35],
                        backgroundColor: 'rgba(99, 102, 241, 0.8)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
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

            // Survival Analysis Chart
            const survivalCtx = document.getElementById('survivalChart').getContext('2d');
            new Chart(survivalCtx, {
                type: 'line',
                data: {
                    labels: ['0', '6', '12', '18', '24', '30', '36'],
                    datasets: [{
                        label: 'Grupo Tratamento',
                        data: [100, 92, 85, 78, 72, 68, 65],
                        borderColor: 'rgb(34, 197, 94)',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'Grupo Controle',
                        data: [100, 88, 75, 65, 58, 52, 48],
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
                        x: {
                            title: {
                                display: true,
                                text: 'Meses'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            max: 100,
                            title: {
                                display: true,
                                text: 'Sobrevida (%)'
                            }
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
    </body>
    </html>
  `)
}