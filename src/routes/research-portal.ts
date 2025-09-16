import { Hono } from 'hono';

const researchPortal = new Hono();

researchPortal.get('/research-portal', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal de Pesquisa Clínica - A.C.Camargo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body class="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6 glass-effect">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">
                        <i class="fas fa-microscope mr-3 text-indigo-600"></i>
                        Portal de Pesquisa Clínica
                    </h1>
                    <p class="text-gray-600 mt-1">Centro de Pesquisa A.C.Camargo Cancer Center</p>
                </div>
                <div class="flex items-center gap-4">
                    <div class="text-right">
                        <p class="text-sm text-gray-600">Segunda-feira, 16 de Janeiro</p>
                        <p class="text-lg font-semibold text-indigo-600">14:45</p>
                    </div>
                    <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                        PC
                    </div>
                </div>
            </div>
        </div>

        <!-- Cards do Topo - Clicáveis -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <!-- Estudos Ativos -->
            <div onclick="window.location.href='/research/studies'" class="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover-lift transition-all">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-flask text-indigo-600 mr-2"></i>
                        Estudos Ativos
                    </h3>
                    <button class="text-indigo-600 hover:text-indigo-700">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div class="text-3xl font-bold text-indigo-600 mb-2">42</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Fase III</span>
                        <span class="font-semibold text-green-600">15</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Recrutando</span>
                        <span class="font-semibold text-blue-600">28</span>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full" style="width: 75%"></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">75% da meta anual</p>
                </div>
            </div>

            <!-- Participantes -->
            <div onclick="window.location.href='/research/participants'" class="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover-lift transition-all">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-users text-green-600 mr-2"></i>
                        Participantes
                    </h3>
                    <button class="text-green-600 hover:text-green-700">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div class="text-3xl font-bold text-green-600 mb-2">523</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Novos este mês</span>
                        <span class="font-semibold text-blue-600">47</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Taxa de retenção</span>
                        <span class="font-semibold text-green-600">87%</span>
                    </div>
                </div>
                <div class="mt-4 flex gap-2">
                    <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">+12% vs mês anterior</span>
                </div>
            </div>

            <!-- Publicações -->
            <div onclick="window.location.href='/research/publications'" class="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover-lift transition-all">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-book-open text-blue-600 mr-2"></i>
                        Publicações
                    </h3>
                    <button class="text-blue-600 hover:text-blue-700">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div class="text-3xl font-bold text-blue-600 mb-2">89</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Impact Factor médio</span>
                        <span class="font-semibold text-purple-600">12.4</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Citações 2024</span>
                        <span class="font-semibold text-orange-600">3.2K</span>
                    </div>
                </div>
                <div class="mt-4 flex gap-2">
                    <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Nature: 3</span>
                    <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">NEJM: 2</span>
                </div>
            </div>
        </div>

        <!-- Dashboard Central -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <!-- Insights da IA -->
            <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-brain text-purple-600 mr-2"></i>
                    Insights LAURA - Análise de Dados
                </h3>
                <div class="space-y-3">
                    <div class="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-l-4 border-purple-500">
                        <div class="flex items-start">
                            <i class="fas fa-lightbulb text-purple-500 mr-3 mt-1"></i>
                            <div>
                                <p class="font-semibold text-gray-800">Correlação Identificada</p>
                                <p class="text-sm text-gray-600 mt-1">Forte correlação entre biomarcador X e resposta à imunoterapia (p<0.001)</p>
                                <p class="text-xs text-purple-600 mt-2">42 pacientes analisados • Confiança: 94%</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border-l-4 border-green-500">
                        <div class="flex items-start">
                            <i class="fas fa-chart-line text-green-500 mr-3 mt-1"></i>
                            <div>
                                <p class="font-semibold text-gray-800">Tendência Positiva</p>
                                <p class="text-sm text-gray-600 mt-1">Taxa de resposta 15% acima da média em protocolo modificado</p>
                                <p class="text-xs text-green-600 mt-2">Sugestão: Expandir coorte</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mini Gráfico -->
                <div class="mt-4">
                    <canvas id="trendsChart" height="100"></canvas>
                </div>
            </div>

            <!-- Status dos Estudos -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-chart-pie text-orange-600 mr-2"></i>
                    Status dos Estudos
                </h3>
                <canvas id="statusChart" height="200"></canvas>
                <div class="mt-4 space-y-2">
                    <div class="flex items-center justify-between text-sm">
                        <span class="flex items-center">
                            <span class="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                            Recrutando
                        </span>
                        <span class="font-semibold">28</span>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="flex items-center">
                            <span class="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                            Em Análise
                        </span>
                        <span class="font-semibold">8</span>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="flex items-center">
                            <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                            Finalizado
                        </span>
                        <span class="font-semibold">6</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Cards do Rodapé - Clicáveis -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Banco de Dados -->
            <div onclick="window.location.href='/research/database'" class="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all hover-lift">
                <i class="fas fa-database text-4xl mb-3 opacity-90"></i>
                <h4 class="text-lg font-bold mb-2">Banco de Dados</h4>
                <p class="text-sm opacity-90 mb-3">REDCap e registros</p>
                <div class="flex justify-between items-center">
                    <span class="text-xs opacity-75">12.5K registros</span>
                    <i class="fas fa-arrow-right opacity-75"></i>
                </div>
            </div>

            <!-- Análises -->
            <div onclick="window.location.href='/research/analysis'" class="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all hover-lift">
                <i class="fas fa-chart-pie text-4xl mb-3 opacity-90"></i>
                <h4 class="text-lg font-bold mb-2">Análises</h4>
                <p class="text-sm opacity-90 mb-3">Estatísticas e IA</p>
                <div class="flex justify-between items-center">
                    <span class="text-xs opacity-75">18 em andamento</span>
                    <i class="fas fa-arrow-right opacity-75"></i>
                </div>
            </div>

            <!-- Protocolos -->
            <div onclick="window.location.href='/research/protocols'" class="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all hover-lift">
                <i class="fas fa-file-contract text-4xl mb-3 opacity-90"></i>
                <h4 class="text-lg font-bold mb-2">Protocolos</h4>
                <p class="text-sm opacity-90 mb-3">CEP/CONEP</p>
                <div class="flex justify-between items-center">
                    <span class="text-xs opacity-75">8 em análise</span>
                    <i class="fas fa-arrow-right opacity-75"></i>
                </div>
            </div>

            <!-- Educação -->
            <div onclick="window.location.href='/research/education'" class="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all hover-lift">
                <i class="fas fa-graduation-cap text-4xl mb-3 opacity-90"></i>
                <h4 class="text-lg font-bold mb-2">Educação</h4>
                <p class="text-sm opacity-90 mb-3">Treinamentos</p>
                <div class="flex justify-between items-center">
                    <span class="text-xs opacity-75">24 cursos ativos</span>
                    <i class="fas fa-arrow-right opacity-75"></i>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Gráfico de Status
        const statusCtx = document.getElementById('statusChart').getContext('2d');
        new Chart(statusCtx, {
            type: 'doughnut',
            data: {
                labels: ['Recrutando', 'Em Análise', 'Finalizado'],
                datasets: [{
                    data: [28, 8, 6],
                    backgroundColor: [
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(245, 158, 11, 0.8)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });

        // Gráfico de Tendências
        const trendsCtx = document.getElementById('trendsChart').getContext('2d');
        new Chart(trendsCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Taxa de Recrutamento',
                    data: [65, 72, 78, 82, 89, 95],
                    borderColor: 'rgb(139, 92, 246)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    </script>
</body>
</html>
    `);
});

export { researchPortal };