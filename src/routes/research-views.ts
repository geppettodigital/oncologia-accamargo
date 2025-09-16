import { Hono } from 'hono';

const researchViews = new Hono();

// View de Estudos Ativos
researchViews.get('/research/studies', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estudos Clínicos Ativos - A.C.Camargo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-flask mr-3 text-indigo-600"></i>
                    Estudos Clínicos Ativos
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <!-- Estatísticas -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-4 text-white">
                <p class="text-indigo-100">Total de Estudos</p>
                <p class="text-3xl font-bold">42</p>
                <p class="text-xs mt-2">+3 este mês</p>
            </div>
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <p class="text-purple-100">Fase III</p>
                <p class="text-3xl font-bold">15</p>
                <p class="text-xs mt-2">35.7% do total</p>
            </div>
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <p class="text-blue-100">Recrutando</p>
                <p class="text-3xl font-bold">28</p>
                <p class="text-xs mt-2">66.7% ativos</p>
            </div>
            <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
                <p class="text-green-100">Internacional</p>
                <p class="text-3xl font-bold">12</p>
                <p class="text-xs mt-2">Multicêntrico</p>
            </div>
        </div>

        <!-- Filtros -->
        <div class="bg-white rounded-xl shadow-lg p-4 mb-6">
            <div class="flex flex-wrap gap-3">
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todas as Fases</option>
                    <option>Fase I</option>
                    <option>Fase II</option>
                    <option>Fase III</option>
                    <option>Fase IV</option>
                </select>
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todos os Status</option>
                    <option>Recrutando</option>
                    <option>Em Andamento</option>
                    <option>Análise de Dados</option>
                    <option>Concluído</option>
                </select>
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todas as Áreas</option>
                    <option>Oncologia Mama</option>
                    <option>Oncologia Pulmão</option>
                    <option>Hematologia</option>
                    <option>Oncologia GI</option>
                </select>
                <input type="text" placeholder="Buscar estudo..." class="flex-1 px-3 py-2 border border-gray-300 rounded-lg">
                <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    <i class="fas fa-search mr-2"></i>Buscar
                </button>
            </div>
        </div>

        <!-- Lista de Estudos -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Estudo 1 -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-t-xl">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-white font-bold">KEYNOTE-522</h3>
                            <p class="text-indigo-100 text-sm">Pembrolizumabe + Quimio Neoadjuvante</p>
                        </div>
                        <span class="bg-white/20 text-white px-2 py-1 rounded text-xs">Fase III</span>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Recrutando</span>
                        <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Mama</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Internacional</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">CA mama triplo negativo, estádios II-III. Avaliando eficácia de imunoterapia combinada.</p>
                    <div class="grid grid-cols-2 gap-4 mb-3">
                        <div>
                            <p class="text-xs text-gray-500">Meta de Recrutamento</p>
                            <div class="flex items-center">
                                <span class="text-lg font-bold text-gray-800">45/60</span>
                                <span class="text-xs text-gray-500 ml-2">(75%)</span>
                            </div>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500">Investigador Principal</p>
                            <p class="text-sm font-semibold">Dr. Carlos Ferreira</p>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div class="bg-indigo-600 h-2 rounded-full" style="width: 75%"></div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-500">Início: Jan/2023</span>
                        <button class="text-indigo-600 hover:text-indigo-700 text-sm font-semibold">
                            <i class="fas fa-arrow-right mr-1"></i>Detalhes
                        </button>
                    </div>
                </div>
            </div>

            <!-- Estudo 2 -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-t-xl">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-white font-bold">CheckMate-816</h3>
                            <p class="text-green-100 text-sm">Nivolumabe Neoadjuvante NSCLC</p>
                        </div>
                        <span class="bg-white/20 text-white px-2 py-1 rounded text-xs">Fase III</span>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Recrutando</span>
                        <span class="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Pulmão</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Multicêntrico</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">CPNPC ressecável, estádios IB-IIIA. Imunoterapia + quimio vs quimio isolada.</p>
                    <div class="grid grid-cols-2 gap-4 mb-3">
                        <div>
                            <p class="text-xs text-gray-500">Meta de Recrutamento</p>
                            <div class="flex items-center">
                                <span class="text-lg font-bold text-gray-800">32/40</span>
                                <span class="text-xs text-gray-500 ml-2">(80%)</span>
                            </div>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500">Investigador Principal</p>
                            <p class="text-sm font-semibold">Dra. Marina Costa</p>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div class="bg-green-600 h-2 rounded-full" style="width: 80%"></div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-500">Início: Mar/2023</span>
                        <button class="text-green-600 hover:text-green-700 text-sm font-semibold">
                            <i class="fas fa-arrow-right mr-1"></i>Detalhes
                        </button>
                    </div>
                </div>
            </div>

            <!-- Estudo 3 -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-t-xl">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-white font-bold">VISION Trial</h3>
                            <p class="text-blue-100 text-sm">Lu-PSMA-617 CA Próstata</p>
                        </div>
                        <span class="bg-white/20 text-white px-2 py-1 rounded text-xs">Fase II</span>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Análise</span>
                        <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Próstata</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Nacional</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">mCRPC pós-quimioterapia. Radioligante direcionado PSMA.</p>
                    <div class="grid grid-cols-2 gap-4 mb-3">
                        <div>
                            <p class="text-xs text-gray-500">Pacientes Incluídos</p>
                            <div class="flex items-center">
                                <span class="text-lg font-bold text-gray-800">25/25</span>
                                <span class="text-xs text-green-500 ml-2">(Completo)</span>
                            </div>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500">Investigador Principal</p>
                            <p class="text-sm font-semibold">Dr. Paulo Santos</p>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div class="bg-blue-600 h-2 rounded-full" style="width: 100%"></div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-500">Início: Nov/2022</span>
                        <button class="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                            <i class="fas fa-arrow-right mr-1"></i>Detalhes
                        </button>
                    </div>
                </div>
            </div>

            <!-- Estudo 4 -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-t-xl">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-white font-bold">DESTINY-Breast04</h3>
                            <p class="text-orange-100 text-sm">T-DXd HER2-low</p>
                        </div>
                        <span class="bg-white/20 text-white px-2 py-1 rounded text-xs">Fase III</span>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Recrutando</span>
                        <span class="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">Mama</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Global</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">CA mama metastático HER2-low. Trastuzumabe deruxtecana vs QT escolha.</p>
                    <div class="grid grid-cols-2 gap-4 mb-3">
                        <div>
                            <p class="text-xs text-gray-500">Meta de Recrutamento</p>
                            <div class="flex items-center">
                                <span class="text-lg font-bold text-gray-800">18/30</span>
                                <span class="text-xs text-gray-500 ml-2">(60%)</span>
                            </div>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500">Investigador Principal</p>
                            <p class="text-sm font-semibold">Dra. Ana Silva</p>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div class="bg-orange-600 h-2 rounded-full" style="width: 60%"></div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-500">Início: Jun/2023</span>
                        <button class="text-orange-600 hover:text-orange-700 text-sm font-semibold">
                            <i class="fas fa-arrow-right mr-1"></i>Detalhes
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Gráfico de Distribuição -->
        <div class="mt-6 bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-lg font-bold mb-4">Distribuição por Fase</h3>
            <canvas id="phaseChart" height="100"></canvas>
        </div>
    </div>

    <script>
        // Gráfico de Fases
        const ctx = document.getElementById('phaseChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Fase I', 'Fase II', 'Fase III', 'Fase IV', 'Observacional'],
                datasets: [{
                    label: 'Número de Estudos',
                    data: [5, 12, 15, 3, 7],
                    backgroundColor: [
                        'rgba(99, 102, 241, 0.8)',
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    </script>
</body>
</html>
    `);
});

// View de Participantes
researchViews.get('/research/participants', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestão de Participantes - Pesquisa Clínica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gradient-to-br from-green-50 via-white to-teal-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-users mr-3 text-green-600"></i>
                    Gestão de Participantes de Pesquisa
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <!-- Estatísticas -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
                <p class="text-green-100">Total Participantes</p>
                <p class="text-3xl font-bold">523</p>
                <p class="text-xs mt-2">+47 este mês</p>
            </div>
            <div class="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-4 text-white">
                <p class="text-teal-100">Em Triagem</p>
                <p class="text-3xl font-bold">89</p>
                <p class="text-xs mt-2">17% do total</p>
            </div>
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <p class="text-blue-100">Ativos</p>
                <p class="text-3xl font-bold">387</p>
                <p class="text-xs mt-2">74% adesão</p>
            </div>
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <p class="text-purple-100">Seguimento</p>
                <p class="text-3xl font-bold">47</p>
                <p class="text-xs mt-2">Pós-estudo</p>
            </div>
        </div>

        <!-- Filtros e Busca -->
        <div class="bg-white rounded-xl shadow-lg p-4 mb-6">
            <div class="flex flex-wrap gap-3">
                <input type="text" placeholder="Buscar participante..." class="flex-1 px-3 py-2 border border-gray-300 rounded-lg">
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todos os Estudos</option>
                    <option>KEYNOTE-522</option>
                    <option>CheckMate-816</option>
                    <option>VISION Trial</option>
                </select>
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todos os Status</option>
                    <option>Triagem</option>
                    <option>Ativo</option>
                    <option>Descontinuado</option>
                    <option>Completo</option>
                </select>
                <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    <i class="fas fa-user-plus mr-2"></i>Novo Participante
                </button>
            </div>
        </div>

        <!-- Lista de Participantes -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <table class="w-full">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID/Nome</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estudo</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Inclusão</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Próxima Visita</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Adesão</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4">
                            <div>
                                <p class="text-sm font-semibold text-gray-900">PSQ-001</p>
                                <p class="text-xs text-gray-500">Maria Silva</p>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <span class="text-sm text-gray-900">KEYNOTE-522</span>
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Ativo</span>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-900">10/01/2024</td>
                        <td class="px-6 py-4 text-sm text-gray-900">25/01/2025</td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <span class="text-sm text-gray-900 mr-2">95%</span>
                                <div class="w-16 bg-gray-200 rounded-full h-2">
                                    <div class="bg-green-600 h-2 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <button class="text-indigo-600 hover:text-indigo-900 text-sm">
                                <i class="fas fa-eye mr-1"></i>Ver
                            </button>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4">
                            <div>
                                <p class="text-sm font-semibold text-gray-900">PSQ-002</p>
                                <p class="text-xs text-gray-500">João Santos</p>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <span class="text-sm text-gray-900">CheckMate-816</span>
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Triagem</span>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-900">15/01/2024</td>
                        <td class="px-6 py-4 text-sm text-gray-900">22/01/2025</td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <span class="text-sm text-gray-900 mr-2">-</span>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <button class="text-indigo-600 hover:text-indigo-900 text-sm">
                                <i class="fas fa-eye mr-1"></i>Ver
                            </button>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4">
                            <div>
                                <p class="text-sm font-semibold text-gray-900">PSQ-003</p>
                                <p class="text-xs text-gray-500">Ana Costa</p>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <span class="text-sm text-gray-900">VISION Trial</span>
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Ativo</span>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-900">05/12/2023</td>
                        <td class="px-6 py-4 text-sm text-gray-900">30/01/2025</td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <span class="text-sm text-gray-900 mr-2">88%</span>
                                <div class="w-16 bg-gray-200 rounded-full h-2">
                                    <div class="bg-yellow-600 h-2 rounded-full" style="width: 88%"></div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <button class="text-indigo-600 hover:text-indigo-900 text-sm">
                                <i class="fas fa-eye mr-1"></i>Ver
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Gráficos -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4">Recrutamento Mensal</h3>
                <canvas id="recruitmentChart"></canvas>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4">Taxa de Retenção</h3>
                <canvas id="retentionChart"></canvas>
            </div>
        </div>
    </div>

    <script>
        // Gráfico de Recrutamento
        new Chart(document.getElementById('recruitmentChart'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Participantes',
                    data: [12, 19, 23, 25, 32, 47],
                    borderColor: 'rgb(16, 185, 129)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                }
            }
        });

        // Gráfico de Retenção
        new Chart(document.getElementById('retentionChart'), {
            type: 'doughnut',
            data: {
                labels: ['Ativos', 'Descontinuados', 'Completos'],
                datasets: [{
                    data: [387, 89, 47],
                    backgroundColor: [
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(99, 102, 241, 0.8)'
                    ]
                }]
            }
        });
    </script>
</body>
</html>
    `);
});

// View de Publicações
researchViews.get('/research/publications', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Publicações Científicas - A.C.Camargo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-book-open mr-3 text-blue-600"></i>
                    Publicações Científicas
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <!-- Estatísticas -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <p class="text-blue-100">Total Publicações</p>
                <p class="text-3xl font-bold">89</p>
                <p class="text-xs mt-2">2024</p>
            </div>
            <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-4 text-white">
                <p class="text-indigo-100">Impact Factor Médio</p>
                <p class="text-3xl font-bold">12.4</p>
                <p class="text-xs mt-2">+2.1 vs 2023</p>
            </div>
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <p class="text-purple-100">Citações</p>
                <p class="text-3xl font-bold">3.2K</p>
                <p class="text-xs mt-2">Total 2024</p>
            </div>
            <div class="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-4 text-white">
                <p class="text-pink-100">Colaborações</p>
                <p class="text-3xl font-bold">27</p>
                <p class="text-xs mt-2">Instituições</p>
            </div>
        </div>

        <!-- Filtros -->
        <div class="bg-white rounded-xl shadow-lg p-4 mb-6">
            <div class="flex flex-wrap gap-3">
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todos os Anos</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                </select>
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todas as Áreas</option>
                    <option>Oncologia</option>
                    <option>Genômica</option>
                    <option>Imunologia</option>
                </select>
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todos os Journals</option>
                    <option>Nature</option>
                    <option>Science</option>
                    <option>NEJM</option>
                    <option>Lancet</option>
                </select>
                <input type="text" placeholder="Buscar publicação..." class="flex-1 px-3 py-2 border border-gray-300 rounded-lg">
            </div>
        </div>

        <!-- Lista de Publicações -->
        <div class="space-y-4">
            <!-- Publicação 1 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div class="flex justify-between items-start mb-3">
                    <div class="flex-1">
                        <h3 class="text-lg font-bold text-gray-800 mb-2">
                            Comprehensive genomic profiling reveals novel biomarkers in triple-negative breast cancer
                        </h3>
                        <p class="text-sm text-gray-600 mb-2">
                            Silva AC, Costa MR, Ferreira PS, et al.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Nature Medicine</span>
                            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">IF: 82.9</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">2024</span>
                            <span class="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">125 citações</span>
                        </div>
                        <p class="text-sm text-gray-700">
                            Identificação de novos biomarcadores preditivos de resposta à imunoterapia em câncer de mama triplo-negativo através de análise genômica abrangente...
                        </p>
                    </div>
                    <div class="flex flex-col gap-2 ml-4">
                        <button class="text-blue-600 hover:text-blue-700">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="text-green-600 hover:text-green-700">
                            <i class="fas fa-external-link-alt"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Publicação 2 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div class="flex justify-between items-start mb-3">
                    <div class="flex-1">
                        <h3 class="text-lg font-bold text-gray-800 mb-2">
                            Phase III trial of pembrolizumab plus chemotherapy in advanced NSCLC: Brazilian cohort analysis
                        </h3>
                        <p class="text-sm text-gray-600 mb-2">
                            Santos JR, Almeida RC, Lima PL, et al.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Lancet Oncology</span>
                            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">IF: 51.1</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">2024</span>
                            <span class="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">87 citações</span>
                        </div>
                        <p class="text-sm text-gray-700">
                            Análise da coorte brasileira do estudo fase III demonstra benefício significativo de pembrolizumabe combinado com quimioterapia...
                        </p>
                    </div>
                    <div class="flex flex-col gap-2 ml-4">
                        <button class="text-blue-600 hover:text-blue-700">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="text-green-600 hover:text-green-700">
                            <i class="fas fa-external-link-alt"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Publicação 3 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div class="flex justify-between items-start mb-3">
                    <div class="flex-1">
                        <h3 class="text-lg font-bold text-gray-800 mb-2">
                            Artificial intelligence-based risk prediction model for early detection of pancreatic cancer
                        </h3>
                        <p class="text-sm text-gray-600 mb-2">
                            Oliveira MM, Fressatto J, Costa DS, et al.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">JAMA Oncology</span>
                            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">IF: 33.0</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">2024</span>
                            <span class="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">156 citações</span>
                        </div>
                        <p class="text-sm text-gray-700">
                            Desenvolvimento e validação de modelo preditivo baseado em IA para detecção precoce de câncer pancreático utilizando dados multiômicos...
                        </p>
                    </div>
                    <div class="flex flex-col gap-2 ml-4">
                        <button class="text-blue-600 hover:text-blue-700">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="text-green-600 hover:text-green-700">
                            <i class="fas fa-external-link-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `);
});

// View de Banco de Dados
researchViews.get('/research/database', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Banco de Dados de Pesquisa - REDCap</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-cyan-50 via-white to-blue-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-database mr-3 text-cyan-600"></i>
                    Banco de Dados REDCap - Pesquisa Clínica
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <!-- Estatísticas do Banco -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-4 text-white">
                <p class="text-cyan-100">Projetos Ativos</p>
                <p class="text-3xl font-bold">42</p>
                <p class="text-xs mt-2">15 multicêntricos</p>
            </div>
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <p class="text-blue-100">Registros</p>
                <p class="text-3xl font-bold">12.5K</p>
                <p class="text-xs mt-2">+1.2K este mês</p>
            </div>
            <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-4 text-white">
                <p class="text-indigo-100">Formulários</p>
                <p class="text-3xl font-bold">387</p>
                <p class="text-xs mt-2">CRFs ativos</p>
            </div>
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <p class="text-purple-100">Usuários</p>
                <p class="text-3xl font-bold">156</p>
                <p class="text-xs mt-2">Pesquisadores</p>
            </div>
        </div>

        <!-- Projetos REDCap -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4">
                    <i class="fas fa-project-diagram mr-2 text-cyan-600"></i>
                    Projetos Principais
                </h3>
                <div class="space-y-3">
                    <div class="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <p class="font-semibold text-sm">KEYNOTE-522 Database</p>
                                <p class="text-xs text-gray-500">ID: REDCap_2024_001</p>
                            </div>
                            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Ativo</span>
                        </div>
                        <div class="grid grid-cols-3 gap-2 text-xs">
                            <div>
                                <span class="text-gray-500">Registros:</span>
                                <span class="font-semibold ml-1">245</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Forms:</span>
                                <span class="font-semibold ml-1">28</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Completude:</span>
                                <span class="font-semibold ml-1">87%</span>
                            </div>
                        </div>
                    </div>

                    <div class="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <p class="font-semibold text-sm">CheckMate-816 Registry</p>
                                <p class="text-xs text-gray-500">ID: REDCap_2024_002</p>
                            </div>
                            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Ativo</span>
                        </div>
                        <div class="grid grid-cols-3 gap-2 text-xs">
                            <div>
                                <span class="text-gray-500">Registros:</span>
                                <span class="font-semibold ml-1">189</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Forms:</span>
                                <span class="font-semibold ml-1">32</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Completude:</span>
                                <span class="font-semibold ml-1">92%</span>
                            </div>
                        </div>
                    </div>

                    <div class="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <p class="font-semibold text-sm">Biobank Oncology</p>
                                <p class="text-xs text-gray-500">ID: REDCap_2023_015</p>
                            </div>
                            <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Coleta</span>
                        </div>
                        <div class="grid grid-cols-3 gap-2 text-xs">
                            <div>
                                <span class="text-gray-500">Amostras:</span>
                                <span class="font-semibold ml-1">3,456</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Tipos:</span>
                                <span class="font-semibold ml-1">12</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Disponível:</span>
                                <span class="font-semibold ml-1">78%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Qualidade dos Dados -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4">
                    <i class="fas fa-chart-line mr-2 text-blue-600"></i>
                    Qualidade dos Dados
                </h3>
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Completude Geral</span>
                            <span class="text-sm font-semibold">89%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 89%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Conformidade</span>
                            <span class="text-sm font-semibold">94%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 94%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Validação</span>
                            <span class="text-sm font-semibold">91%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-indigo-600 h-2 rounded-full" style="width: 91%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Queries Resolvidas</span>
                            <span class="text-sm font-semibold">78%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-yellow-600 h-2 rounded-full" style="width: 78%"></div>
                        </div>
                    </div>
                </div>

                <!-- Ações -->
                <div class="grid grid-cols-2 gap-3 mt-6">
                    <button class="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition text-sm">
                        <i class="fas fa-plus mr-2"></i>Novo Projeto
                    </button>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                        <i class="fas fa-download mr-2"></i>Exportar Dados
                    </button>
                </div>
            </div>
        </div>

        <!-- Ferramentas e Integrações -->
        <div class="mt-6 bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-lg font-bold mb-4">
                <i class="fas fa-tools mr-2 text-gray-600"></i>
                Ferramentas e Integrações
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <i class="fas fa-file-import text-2xl text-cyan-600 mb-2"></i>
                    <p class="text-sm font-semibold">Importar Dados</p>
                </button>
                <button class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <i class="fas fa-check-double text-2xl text-green-600 mb-2"></i>
                    <p class="text-sm font-semibold">Validação</p>
                </button>
                <button class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <i class="fas fa-lock text-2xl text-red-600 mb-2"></i>
                    <p class="text-sm font-semibold">Auditoria</p>
                </button>
                <button class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <i class="fas fa-sync text-2xl text-blue-600 mb-2"></i>
                    <p class="text-sm font-semibold">Sincronizar</p>
                </button>
            </div>
        </div>
    </div>
</body>
</html>
    `);
});

// View de Análises
researchViews.get('/research/analysis', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Análises Estatísticas - Pesquisa Clínica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-chart-pie mr-3 text-purple-600"></i>
                    Centro de Análises Estatísticas
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <!-- Estatísticas -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <p class="text-purple-100">Análises em Andamento</p>
                <p class="text-3xl font-bold">18</p>
                <p class="text-xs mt-2">7 prioritárias</p>
            </div>
            <div class="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-4 text-white">
                <p class="text-pink-100">Relatórios Gerados</p>
                <p class="text-3xl font-bold">234</p>
                <p class="text-xs mt-2">Este ano</p>
            </div>
            <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-4 text-white">
                <p class="text-indigo-100">P-valor Médio</p>
                <p class="text-3xl font-bold">0.032</p>
                <p class="text-xs mt-2">Significativo</p>
            </div>
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <p class="text-blue-100">Power Médio</p>
                <p class="text-3xl font-bold">87%</p>
                <p class="text-xs mt-2">Adequado</p>
            </div>
        </div>

        <!-- Análises Recentes e Ferramentas -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Análises Recentes -->
            <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4">
                    <i class="fas fa-history mr-2 text-purple-600"></i>
                    Análises Recentes
                </h3>
                <div class="space-y-3">
                    <div class="p-4 bg-gray-50 rounded-lg">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <p class="font-semibold">Análise de Sobrevida - KEYNOTE-522</p>
                                <p class="text-xs text-gray-500">Kaplan-Meier + Cox Regression</p>
                            </div>
                            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Concluído</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="text-xs text-gray-600">
                                <span>HR: 0.72 (95% CI: 0.59-0.88)</span>
                                <span class="ml-3">p=0.001</span>
                            </div>
                            <button class="text-purple-600 hover:text-purple-700 text-sm">
                                <i class="fas fa-download mr-1"></i>Relatório
                            </button>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 rounded-lg">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <p class="font-semibold">Análise de Resposta - CheckMate-816</p>
                                <p class="text-xs text-gray-500">RECIST 1.1 + Biomarkers</p>
                            </div>
                            <span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Em Análise</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="text-xs text-gray-600">
                                <span>ORR: 64% vs 37%</span>
                                <span class="ml-3">p<0.001</span>
                            </div>
                            <div class="w-24 bg-gray-200 rounded-full h-2">
                                <div class="bg-yellow-600 h-2 rounded-full" style="width: 75%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 rounded-lg">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <p class="font-semibold">Meta-análise - Imunoterapia Adjuvante</p>
                                <p class="text-xs text-gray-500">Random-effects model</p>
                            </div>
                            <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Revisão</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="text-xs text-gray-600">
                                <span>12 estudos incluídos</span>
                                <span class="ml-3">N=4,567</span>
                            </div>
                            <button class="text-purple-600 hover:text-purple-700 text-sm">
                                <i class="fas fa-eye mr-1"></i>Ver</button>
                        </div>
                    </div>
                </div>

                <!-- Gráfico de Exemplo -->
                <div class="mt-6">
                    <h4 class="font-semibold mb-3">Curva de Sobrevida - Exemplo</h4>
                    <canvas id="survivalChart" height="150"></canvas>
                </div>
            </div>

            <!-- Ferramentas Estatísticas -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4">
                    <i class="fas fa-calculator mr-2 text-indigo-600"></i>
                    Ferramentas
                </h3>
                <div class="space-y-3">
                    <button class="w-full p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition">
                        <i class="fas fa-chart-line mr-2"></i>
                        Análise de Sobrevida
                    </button>
                    <button class="w-full p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition">
                        <i class="fas fa-percentage mr-2"></i>
                        Cálculo de Sample Size
                    </button>
                    <button class="w-full p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition">
                        <i class="fas fa-balance-scale mr-2"></i>
                        Teste de Hipóteses
                    </button>
                    <button class="w-full p-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-pink-700 transition">
                        <i class="fas fa-project-diagram mr-2"></i>
                        Regressão Multivariada
                    </button>
                </div>

                <!-- Software Disponível -->
                <div class="mt-6">
                    <h4 class="font-semibold mb-3">Software Disponível</h4>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="p-2 bg-gray-50 rounded text-center">
                            <i class="fab fa-r-project text-2xl text-blue-600"></i>
                            <p class="text-xs mt-1">R Studio</p>
                        </div>
                        <div class="p-2 bg-gray-50 rounded text-center">
                            <i class="fas fa-square-root-alt text-2xl text-green-600"></i>
                            <p class="text-xs mt-1">SAS</p>
                        </div>
                        <div class="p-2 bg-gray-50 rounded text-center">
                            <i class="fas fa-chart-bar text-2xl text-purple-600"></i>
                            <p class="text-xs mt-1">SPSS</p>
                        </div>
                        <div class="p-2 bg-gray-50 rounded text-center">
                            <i class="fab fa-python text-2xl text-yellow-600"></i>
                            <p class="text-xs mt-1">Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Curva de Sobrevida
        new Chart(document.getElementById('survivalChart'), {
            type: 'line',
            data: {
                labels: [0, 6, 12, 18, 24, 30, 36],
                datasets: [{
                    label: 'Tratamento',
                    data: [100, 92, 85, 78, 72, 68, 65],
                    borderColor: 'rgb(139, 92, 246)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    tension: 0.4
                }, {
                    label: 'Controle',
                    data: [100, 88, 75, 65, 58, 52, 48],
                    borderColor: 'rgb(239, 68, 68)',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Sobrevida (%)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Tempo (meses)'
                        }
                    }
                }
            }
        });
    </script>
</body>
</html>
    `);
});

// View de Protocolos de Pesquisa
researchViews.get('/research/protocols', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protocolos de Pesquisa - CEP/CONEP</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-file-contract mr-3 text-green-600"></i>
                    Protocolos de Pesquisa - Comitê de Ética
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <!-- Estatísticas CEP -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
                <p class="text-green-100">Protocolos Ativos</p>
                <p class="text-3xl font-bold">42</p>
                <p class="text-xs mt-2">CEP Aprovados</p>
            </div>
            <div class="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
                <p class="text-yellow-100">Em Análise</p>
                <p class="text-3xl font-bold">8</p>
                <p class="text-xs mt-2">Aguardando parecer</p>
            </div>
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <p class="text-blue-100">Emendas</p>
                <p class="text-3xl font-bold">15</p>
                <p class="text-xs mt-2">Pendentes</p>
            </div>
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <p class="text-purple-100">CONEP</p>
                <p class="text-3xl font-bold">6</p>
                <p class="text-xs mt-2">Aprovados</p>
            </div>
        </div>

        <!-- Lista de Protocolos -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-green-500 to-emerald-500 p-4">
                <h3 class="text-white font-bold text-lg">Protocolos Submetidos ao CEP</h3>
            </div>
            <div class="p-6">
                <div class="space-y-4">
                    <!-- Protocolo 1 -->
                    <div class="border-l-4 border-green-500 pl-4 py-3">
                        <div class="flex justify-between items-start">
                            <div>
                                <h4 class="font-bold text-gray-800">CAAE: 45678901.2.0000.5432</h4>
                                <p class="text-sm text-gray-600 mt-1">KEYNOTE-522: Pembrolizumabe + Quimioterapia Neoadjuvante</p>
                                <p class="text-xs text-gray-500 mt-2">Investigador: Dr. Carlos Ferreira</p>
                                <div class="flex gap-2 mt-2">
                                    <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Aprovado</span>
                                    <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Multicêntrico</span>
                                    <span class="text-xs text-gray-500">Aprovação: 15/01/2024</span>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <button class="text-green-600 hover:text-green-700">
                                    <i class="fas fa-file-pdf"></i>
                                </button>
                                <button class="text-blue-600 hover:text-blue-700">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Protocolo 2 -->
                    <div class="border-l-4 border-yellow-500 pl-4 py-3">
                        <div class="flex justify-between items-start">
                            <div>
                                <h4 class="font-bold text-gray-800">CAAE: 45678902.3.0000.5432</h4>
                                <p class="text-sm text-gray-600 mt-1">Estudo Fase II - Novo Anticorpo Monoclonal</p>
                                <p class="text-xs text-gray-500 mt-2">Investigador: Dra. Marina Costa</p>
                                <div class="flex gap-2 mt-2">
                                    <span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Em Análise</span>
                                    <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">CONEP</span>
                                    <span class="text-xs text-gray-500">Submissão: 10/01/2025</span>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <button class="text-yellow-600 hover:text-yellow-700">
                                    <i class="fas fa-clock"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Protocolo 3 -->
                    <div class="border-l-4 border-red-500 pl-4 py-3">
                        <div class="flex justify-between items-start">
                            <div>
                                <h4 class="font-bold text-gray-800">CAAE: 45678903.4.0000.5432</h4>
                                <p class="text-sm text-gray-600 mt-1">Biobanking - Coleta de Amostras Biológicas</p>
                                <p class="text-xs text-gray-500 mt-2">Investigador: Dr. Paulo Santos</p>
                                <div class="flex gap-2 mt-2">
                                    <span class="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Pendências</span>
                                    <span class="text-xs text-gray-500">Parecer: 08/01/2025</span>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <button class="text-red-600 hover:text-red-700">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Documentos e Templates -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4">
                    <i class="fas fa-folder-open mr-2 text-green-600"></i>
                    Documentos Regulatórios
                </h3>
                <div class="space-y-2">
                    <button class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex justify-between items-center">
                        <span class="text-sm">TCLE - Template Padrão</span>
                        <i class="fas fa-download text-gray-500"></i>
                    </button>
                    <button class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex justify-between items-center">
                        <span class="text-sm">Formulário de Submissão CEP</span>
                        <i class="fas fa-download text-gray-500"></i>
                    </button>
                    <button class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex justify-between items-center">
                        <span class="text-sm">Modelo de Emenda</span>
                        <i class="fas fa-download text-gray-500"></i>
                    </button>
                    <button class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex justify-between items-center">
                        <span class="text-sm">Relatório de Eventos Adversos</span>
                        <i class="fas fa-download text-gray-500"></i>
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4">
                    <i class="fas fa-tasks mr-2 text-blue-600"></i>
                    Ações Rápidas
                </h3>
                <div class="grid grid-cols-2 gap-3">
                    <button class="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                        <i class="fas fa-plus mr-2"></i>
                        Novo Protocolo
                    </button>
                    <button class="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        <i class="fas fa-edit mr-2"></i>
                        Submeter Emenda
                    </button>
                    <button class="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                        <i class="fas fa-file-medical mr-2"></i>
                        Relatório SAE
                    </button>
                    <button class="p-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                        <i class="fas fa-clock mr-2"></i>
                        Renovação
                    </button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `);
});

// View de Educação e Treinamento
researchViews.get('/research/education', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Educação e Treinamento - Pesquisa Clínica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-orange-50 via-white to-yellow-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-graduation-cap mr-3 text-orange-600"></i>
                    Centro de Educação e Treinamento em Pesquisa
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <!-- Estatísticas de Treinamento -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white">
                <p class="text-orange-100">Cursos Ativos</p>
                <p class="text-3xl font-bold">24</p>
                <p class="text-xs mt-2">8 novos este mês</p>
            </div>
            <div class="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
                <p class="text-yellow-100">Pesquisadores Treinados</p>
                <p class="text-3xl font-bold">156</p>
                <p class="text-xs mt-2">95% certificados</p>
            </div>
            <div class="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 text-white">
                <p class="text-red-100">Horas de Treinamento</p>
                <p class="text-3xl font-bold">480</p>
                <p class="text-xs mt-2">Este ano</p>
            </div>
            <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
                <p class="text-green-100">Taxa Aprovação</p>
                <p class="text-3xl font-bold">92%</p>
                <p class="text-xs mt-2">GCP Certification</p>
            </div>
        </div>

        <!-- Cursos e Treinamentos -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Cursos Disponíveis -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4">
                    <i class="fas fa-book mr-2 text-orange-600"></i>
                    Cursos Disponíveis
                </h3>
                <div class="space-y-3">
                    <div class="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h4 class="font-bold text-gray-800">Good Clinical Practice (GCP)</h4>
                                <p class="text-xs text-gray-600 mt-1">Certificação Internacional ICH-GCP</p>
                            </div>
                            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Obrigatório</span>
                        </div>
                        <div class="flex items-center justify-between mt-3">
                            <div class="text-xs text-gray-500">
                                <i class="fas fa-clock mr-1"></i>8 horas
                                <span class="ml-3"><i class="fas fa-users mr-1"></i>45 inscritos</span>
                            </div>
                            <button class="text-orange-600 hover:text-orange-700 text-sm font-semibold">
                                Inscrever-se
                            </button>
                        </div>
                    </div>

                    <div class="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h4 class="font-bold text-gray-800">REDCap Avançado</h4>
                                <p class="text-xs text-gray-600 mt-1">Gestão de dados em pesquisa clínica</p>
                            </div>
                            <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Especialização</span>
                        </div>
                        <div class="flex items-center justify-between mt-3">
                            <div class="text-xs text-gray-500">
                                <i class="fas fa-clock mr-1"></i>12 horas
                                <span class="ml-3"><i class="fas fa-users mr-1"></i>28 inscritos</span>
                            </div>
                            <button class="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                                Inscrever-se
                            </button>
                        </div>
                    </div>

                    <div class="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h4 class="font-bold text-gray-800">Estatística para Pesquisa Clínica</h4>
                                <p class="text-xs text-gray-600 mt-1">R, SAS e interpretação de resultados</p>
                            </div>
                            <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Avançado</span>
                        </div>
                        <div class="flex items-center justify-between mt-3">
                            <div class="text-xs text-gray-500">
                                <i class="fas fa-clock mr-1"></i>20 horas
                                <span class="ml-3"><i class="fas fa-users mr-1"></i>15 inscritos</span>
                            </div>
                            <button class="text-purple-600 hover:text-purple-700 text-sm font-semibold">
                                Inscrever-se
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Calendário de Treinamentos -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4">
                    <i class="fas fa-calendar-alt mr-2 text-yellow-600"></i>
                    Próximos Treinamentos
                </h3>
                <div class="space-y-3">
                    <div class="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div class="text-center mr-4">
                            <div class="text-2xl font-bold text-orange-600">20</div>
                            <div class="text-xs text-gray-500">JAN</div>
                        </div>
                        <div class="flex-1">
                            <p class="font-semibold text-sm">Workshop: Submissão CEP/CONEP</p>
                            <p class="text-xs text-gray-500">14:00 - 17:00 | Auditório Principal</p>
                        </div>
                    </div>

                    <div class="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div class="text-center mr-4">
                            <div class="text-2xl font-bold text-blue-600">22</div>
                            <div class="text-xs text-gray-500">JAN</div>
                        </div>
                        <div class="flex-1">
                            <p class="font-semibold text-sm">GCP Refresher Training</p>
                            <p class="text-xs text-gray-500">09:00 - 12:00 | Online</p>
                        </div>
                    </div>

                    <div class="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div class="text-center mr-4">
                            <div class="text-2xl font-bold text-green-600">25</div>
                            <div class="text-xs text-gray-500">JAN</div>
                        </div>
                        <div class="flex-1">
                            <p class="font-semibold text-sm">Farmacovigilância e Eventos Adversos</p>
                            <p class="text-xs text-gray-500">13:00 - 18:00 | Sala de Treinamento</p>
                        </div>
                    </div>

                    <div class="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div class="text-center mr-4">
                            <div class="text-2xl font-bold text-purple-600">28</div>
                            <div class="text-xs text-gray-500">JAN</div>
                        </div>
                        <div class="flex-1">
                            <p class="font-semibold text-sm">Journal Club: Publicações Q1</p>
                            <p class="text-xs text-gray-500">16:00 - 17:30 | Híbrido</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recursos Educacionais -->
        <div class="mt-6 bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-lg font-bold mb-4">
                <i class="fas fa-book-reader mr-2 text-green-600"></i>
                Recursos Educacionais
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button class="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg hover:shadow-md transition">
                    <i class="fas fa-video text-2xl text-orange-600 mb-2"></i>
                    <p class="text-sm font-semibold">Videoaulas</p>
                    <p class="text-xs text-gray-500">127 vídeos</p>
                </button>
                <button class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:shadow-md transition">
                    <i class="fas fa-file-pdf text-2xl text-blue-600 mb-2"></i>
                    <p class="text-sm font-semibold">E-books</p>
                    <p class="text-xs text-gray-500">45 materiais</p>
                </button>
                <button class="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:shadow-md transition">
                    <i class="fas fa-podcast text-2xl text-purple-600 mb-2"></i>
                    <p class="text-sm font-semibold">Podcasts</p>
                    <p class="text-xs text-gray-500">32 episódios</p>
                </button>
                <button class="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:shadow-md transition">
                    <i class="fas fa-certificate text-2xl text-green-600 mb-2"></i>
                    <p class="text-sm font-semibold">Certificados</p>
                    <p class="text-xs text-gray-500">Seus cursos</p>
                </button>
            </div>
        </div>
    </div>
</body>
</html>
    `);
});

export { researchViews };