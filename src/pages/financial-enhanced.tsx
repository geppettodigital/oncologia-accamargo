import { html } from 'hono/html'

export const financialEnhancedPage = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portal de Gestão Financeira - ACCamargo Cancer Center</title>
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
                border: 1px solid rgba(0,0,0,0.05);
            }
            .kpi-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.15);
            }
            .status-aprovado { background-color: #10b981; }
            .status-analise { background-color: #f59e0b; }
            .status-pendente { background-color: #ef4444; }
            .status-resolvido { background-color: #3b82f6; }
            .status-recurso { background-color: #8b5cf6; }
            .tab-active {
                background: linear-gradient(145deg, #3b82f6, #2563eb);
                color: white;
            }
            .risk-score-ring {
                stroke-dasharray: 440;
                stroke-dashoffset: 123;
                animation: fillRing 2s ease-out forwards;
            }
            @keyframes fillRing {
                to { stroke-dashoffset: 123; }
            }
            .pulse-alert {
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
                70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
                100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-50 via-blue-50/20 to-green-50/20 min-h-screen">
        <!-- Header Aprimorado -->
        <div class="glass-effect sticky top-0 z-40 border-b border-gray-200">
            <div class="container mx-auto px-4 py-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <button onclick="window.history.back()" class="p-2 hover:bg-gray-100 rounded-lg transition">
                            <i class="fas fa-arrow-left text-gray-600"></i>
                        </button>
                        <div>
                            <h1 class="text-2xl font-bold text-gray-900">Portal de Gestão Financeira</h1>
                            <p class="text-sm text-gray-600">Sistema Inteligente de Prevenção de Glosas</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <select id="dateRange" class="px-3 py-2 border rounded-lg bg-white text-sm">
                            <option value="7d">Últimos 7 dias</option>
                            <option value="30d" selected>Últimos 30 dias</option>
                            <option value="90d">Últimos 90 dias</option>
                            <option value="12m">Últimos 12 meses</option>
                        </select>
                        <button onclick="openDashboardCompleto()" class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition font-semibold">
                            <i class="fas fa-chart-line mr-2"></i>Dashboard Completo
                        </button>
                        <button class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition">
                            <i class="fas fa-download text-gray-600"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-6">
            <!-- Sistema Preditivo LAURA Finance AI - Alert Principal -->
            <div class="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-xl p-6 mb-6 text-white pulse-alert">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="p-4 bg-white/20 rounded-xl mr-4">
                            <i class="fas fa-brain text-3xl"></i>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold mb-2">LAURA Finance AI - Alerta Preditivo</h2>
                            <div class="flex items-center space-x-6">
                                <div>
                                    <p class="text-3xl font-bold">R$ 245.8K</p>
                                    <p class="text-sm opacity-90">Glosas previstas próximos 7 dias</p>
                                </div>
                                <div class="h-12 w-px bg-white/30"></div>
                                <div>
                                    <div class="flex items-center">
                                        <svg class="w-12 h-12 mr-3" viewBox="0 0 160 160">
                                            <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.2)" stroke-width="10" fill="none"/>
                                            <circle cx="80" cy="80" r="70" stroke="white" stroke-width="10" fill="none" 
                                                    class="risk-score-ring" transform="rotate(-90 80 80)"/>
                                        </svg>
                                        <div>
                                            <p class="text-2xl font-bold">72%</p>
                                            <p class="text-xs opacity-90">Risk Score</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="h-12 w-px bg-white/30"></div>
                                <div>
                                    <p class="text-2xl font-bold">31 pacientes</p>
                                    <p class="text-sm opacity-90">Ação preventiva imediata</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onclick="showPacientesRisco()" class="px-6 py-3 bg-white text-red-700 rounded-lg font-semibold hover:bg-gray-100 transition">
                        <i class="fas fa-users mr-2"></i>Ver Pacientes em Risco
                    </button>
                </div>
            </div>

            <!-- 5 KPIs Principais -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <!-- Glosas Identificadas -->
                <div class="kpi-card p-5 rounded-xl shadow-lg">
                    <div class="flex items-start justify-between mb-2">
                        <div class="p-2 bg-red-100 rounded-lg">
                            <i class="fas fa-exclamation-circle text-red-600 text-lg"></i>
                        </div>
                        <span class="text-xs text-red-600 font-bold">↑ 8.3%</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">R$ 45.678</h3>
                    <p class="text-xs text-gray-600 mt-1">Glosas Identificadas</p>
                    <div class="mt-2 h-1 bg-gray-200 rounded">
                        <div class="h-1 bg-red-500 rounded" style="width: 65%"></div>
                    </div>
                </div>

                <!-- Glosas Revertidas -->
                <div class="kpi-card p-5 rounded-xl shadow-lg">
                    <div class="flex items-start justify-between mb-2">
                        <div class="p-2 bg-green-100 rounded-lg">
                            <i class="fas fa-check-double text-green-600 text-lg"></i>
                        </div>
                        <span class="text-xs text-green-600 font-bold">85%</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">R$ 285.432</h3>
                    <p class="text-xs text-gray-600 mt-1">Glosas Revertidas</p>
                    <div class="mt-2 h-1 bg-gray-200 rounded">
                        <div class="h-1 bg-green-500 rounded" style="width: 85%"></div>
                    </div>
                </div>

                <!-- ROI Otimização -->
                <div class="kpi-card p-5 rounded-xl shadow-lg">
                    <div class="flex items-start justify-between mb-2">
                        <div class="p-2 bg-purple-100 rounded-lg">
                            <i class="fas fa-chart-line text-purple-600 text-lg"></i>
                        </div>
                        <span class="text-xs text-purple-600 font-bold">5.2x</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">5.2x</h3>
                    <p class="text-xs text-gray-600 mt-1">ROI Otimização</p>
                    <div class="mt-2 h-1 bg-gray-200 rounded">
                        <div class="h-1 bg-purple-500 rounded" style="width: 95%"></div>
                    </div>
                </div>

                <!-- Tempo Médio -->
                <div class="kpi-card p-5 rounded-xl shadow-lg">
                    <div class="flex items-start justify-between mb-2">
                        <div class="p-2 bg-blue-100 rounded-lg">
                            <i class="fas fa-clock text-blue-600 text-lg"></i>
                        </div>
                        <span class="text-xs text-blue-600 font-bold">↓ 2d</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">3.5 dias</h3>
                    <p class="text-xs text-gray-600 mt-1">Tempo Médio Reversão</p>
                    <div class="mt-2 h-1 bg-gray-200 rounded">
                        <div class="h-1 bg-blue-500 rounded" style="width: 75%"></div>
                    </div>
                </div>

                <!-- Controle OPME -->
                <div class="kpi-card p-5 rounded-xl shadow-lg">
                    <div class="flex items-start justify-between mb-2">
                        <div class="p-2 bg-orange-100 rounded-lg">
                            <i class="fas fa-boxes text-orange-600 text-lg"></i>
                        </div>
                        <span class="text-xs text-orange-600 font-bold">94%</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">R$ 567.890</h3>
                    <p class="text-xs text-gray-600 mt-1">Controle OPME</p>
                    <div class="mt-2 h-1 bg-gray-200 rounded">
                        <div class="h-1 bg-orange-500 rounded" style="width: 94%"></div>
                    </div>
                </div>
            </div>

            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Left Column: Análise de Glosas com Abas -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Análise Detalhada de Glosas com Tabs -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Análise Detalhada de Glosas</h3>
                        
                        <!-- Tabs Navigation -->
                        <div class="flex space-x-2 mb-4 border-b">
                            <button onclick="showGlosaTab('causa')" id="tab-causa" class="px-4 py-2 text-sm font-medium rounded-t-lg tab-active">
                                Por Causa
                            </button>
                            <button onclick="showGlosaTab('convenio')" id="tab-convenio" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                                Por Convênio
                            </button>
                            <button onclick="showGlosaTab('unidade')" id="tab-unidade" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                                Por Unidade
                            </button>
                            <button onclick="showGlosaTab('tendencia')" id="tab-tendencia" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                                Tendência
                            </button>
                        </div>

                        <!-- Tab Content -->
                        <div id="glosa-content">
                            <!-- Por Causa (Default) -->
                            <div id="content-causa" class="tab-content">
                                <canvas id="causaChart" height="80"></canvas>
                                <div class="mt-4 space-y-2">
                                    <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <div class="flex items-center">
                                            <div class="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                                            <span class="text-sm font-medium">Documentação Incompleta</span>
                                        </div>
                                        <div class="text-right">
                                            <span class="text-sm font-bold">R$ 142.3K</span>
                                            <span class="text-xs text-gray-500 ml-2">34 casos</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <div class="flex items-center">
                                            <div class="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                                            <span class="text-sm font-medium">Autorização Prévia</span>
                                        </div>
                                        <div class="text-right">
                                            <span class="text-sm font-bold">R$ 98.7K</span>
                                            <span class="text-xs text-gray-500 ml-2">28 casos</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <div class="flex items-center">
                                            <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                            <span class="text-sm font-medium">Codificação Incorreta</span>
                                        </div>
                                        <div class="text-right">
                                            <span class="text-sm font-bold">R$ 246.2K</span>
                                            <span class="text-xs text-gray-500 ml-2">52 casos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Por Convênio (Hidden) -->
                            <div id="content-convenio" class="tab-content hidden">
                                <canvas id="convenioChart" height="80"></canvas>
                            </div>

                            <!-- Por Unidade (Hidden) -->
                            <div id="content-unidade" class="tab-content hidden">
                                <canvas id="unidadeChart" height="80"></canvas>
                            </div>

                            <!-- Tendência (Hidden) -->
                            <div id="content-tendencia" class="tab-content hidden">
                                <canvas id="tendenciaChart" height="80"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- Controle OPME Expandido - 10 itens -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-bold text-gray-900">Controle OPME em Tempo Real</h3>
                            <div class="flex space-x-2">
                                <button class="text-sm px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200">
                                    <i class="fas fa-filter mr-1"></i>Filtrar
                                </button>
                                <button class="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                                    <i class="fas fa-sync mr-1"></i>Atualizar
                                </button>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="border-b bg-gray-50">
                                        <th class="text-left py-3 px-3 font-medium text-gray-700">Material</th>
                                        <th class="text-center py-3 px-2 font-medium text-gray-700">Qtd</th>
                                        <th class="text-right py-3 px-2 font-medium text-gray-700">Custo Unit</th>
                                        <th class="text-right py-3 px-2 font-medium text-gray-700">Total</th>
                                        <th class="text-left py-3 px-2 font-medium text-gray-700">Fornecedor</th>
                                        <th class="text-center py-3 px-2 font-medium text-gray-700">Status</th>
                                        <th class="text-center py-3 px-2 font-medium text-gray-700">Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-3">
                                            <div>
                                                <p class="font-medium text-gray-900">Prótese Oncológica T4</p>
                                                <p class="text-xs text-gray-500">PRO-T4-2024</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2 font-medium">3</td>
                                        <td class="text-right py-3 px-2">R$ 45.000</td>
                                        <td class="text-right py-3 px-2 font-bold">R$ 135.000</td>
                                        <td class="py-3 px-2 text-xs">MedTech Solutions</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">Aprovado</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800 p-1">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-3">
                                            <div>
                                                <p class="font-medium text-gray-900">Kit Quimio Port</p>
                                                <p class="text-xs text-gray-500">KQP-2024-12</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2 font-medium">12</td>
                                        <td class="text-right py-3 px-2">R$ 3.200</td>
                                        <td class="text-right py-3 px-2 font-bold">R$ 38.400</td>
                                        <td class="py-3 px-2 text-xs">OncoSupply BR</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-yellow-500 rounded-full">Análise</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800 p-1">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-3">
                                            <div>
                                                <p class="font-medium text-gray-900">Stent Biliar</p>
                                                <p class="text-xs text-gray-500">STB-2024-05</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2 font-medium">5</td>
                                        <td class="text-right py-3 px-2">R$ 8.500</td>
                                        <td class="text-right py-3 px-2 font-bold">R$ 42.500</td>
                                        <td class="py-3 px-2 text-xs">BioMedical Corp</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">Aprovado</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800 p-1">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-3">
                                            <div>
                                                <p class="font-medium text-gray-900">Cateter Central</p>
                                                <p class="text-xs text-gray-500">CAT-2024-08</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2 font-medium">8</td>
                                        <td class="text-right py-3 px-2">R$ 1.800</td>
                                        <td class="text-right py-3 px-2 font-bold">R$ 14.400</td>
                                        <td class="py-3 px-2 text-xs">CathMed Brasil</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">Aprovado</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800 p-1">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-3">
                                            <div>
                                                <p class="font-medium text-gray-900">Bolsa Coletora</p>
                                                <p class="text-xs text-gray-500">BOL-2024-15</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2 font-medium">25</td>
                                        <td class="text-right py-3 px-2">R$ 450</td>
                                        <td class="text-right py-3 px-2 font-bold">R$ 11.250</td>
                                        <td class="py-3 px-2 text-xs">MedSupply SA</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">Aprovado</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800 p-1">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-3">
                                            <div>
                                                <p class="font-medium text-gray-900">Kit Radiologia</p>
                                                <p class="text-xs text-gray-500">RAD-2024-09</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2 font-medium">4</td>
                                        <td class="text-right py-3 px-2">R$ 22.000</td>
                                        <td class="text-right py-3 px-2 font-bold">R$ 88.000</td>
                                        <td class="py-3 px-2 text-xs">RadTech Global</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full">Pendente</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800 p-1">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-3">
                                            <div>
                                                <p class="font-medium text-gray-900">Agulha Biopsia</p>
                                                <p class="text-xs text-gray-500">AGB-2024-11</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2 font-medium">18</td>
                                        <td class="text-right py-3 px-2">R$ 850</td>
                                        <td class="text-right py-3 px-2 font-bold">R$ 15.300</td>
                                        <td class="py-3 px-2 text-xs">BioPrecision</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">Aprovado</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800 p-1">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-3">
                                            <div>
                                                <p class="font-medium text-gray-900">Marca-passo Temp</p>
                                                <p class="text-xs text-gray-500">MPT-2024-03</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2 font-medium">2</td>
                                        <td class="text-right py-3 px-2">R$ 35.000</td>
                                        <td class="text-right py-3 px-2 font-bold">R$ 70.000</td>
                                        <td class="py-3 px-2 text-xs">CardioTech</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-yellow-500 rounded-full">Análise</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800 p-1">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-3">
                                            <div>
                                                <p class="font-medium text-gray-900">Dreno Torácico</p>
                                                <p class="text-xs text-gray-500">DRT-2024-07</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2 font-medium">9</td>
                                        <td class="text-right py-3 px-2">R$ 2.100</td>
                                        <td class="text-right py-3 px-2 font-bold">R$ 18.900</td>
                                        <td class="py-3 px-2 text-xs">ThoracMed</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">Aprovado</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800 p-1">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-3">
                                            <div>
                                                <p class="font-medium text-gray-900">Filtro Veia Cava</p>
                                                <p class="text-xs text-gray-500">FVC-2024-02</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-3 px-2 font-medium">1</td>
                                        <td class="text-right py-3 px-2">R$ 52.000</td>
                                        <td class="text-right py-3 px-2 font-bold">R$ 52.000</td>
                                        <td class="py-3 px-2 text-xs">VascularTech</td>
                                        <td class="text-center py-3 px-2">
                                            <span class="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full">Pendente</span>
                                        </td>
                                        <td class="text-center py-3 px-2">
                                            <button class="text-blue-600 hover:text-blue-800 p-1">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-4 flex justify-between items-center text-sm">
                            <p class="text-gray-600">Total em controle: <span class="font-bold text-gray-900">R$ 567.890</span></p>
                            <div class="flex space-x-2">
                                <button class="px-3 py-1 border rounded-lg hover:bg-gray-50">← Anterior</button>
                                <button class="px-3 py-1 bg-blue-600 text-white rounded-lg">1</button>
                                <button class="px-3 py-1 border rounded-lg hover:bg-gray-50">2</button>
                                <button class="px-3 py-1 border rounded-lg hover:bg-gray-50">Próximo →</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Insights e Ações -->
                <div class="space-y-6">
                    <!-- ROI Card Melhorado -->
                    <div class="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
                        <h3 class="text-lg font-bold mb-4">ROI em Tempo Real</h3>
                        <div class="text-center mb-4">
                            <p class="text-5xl font-bold">5.2x</p>
                            <p class="text-sm opacity-90">Retorno sobre Investimento</p>
                        </div>
                        <div class="space-y-3 border-t border-white/20 pt-4">
                            <div class="flex justify-between items-center">
                                <span class="text-sm">Glosas Evitadas</span>
                                <span class="font-bold">R$ 1.8M</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm">Otimização OPME</span>
                                <span class="font-bold">R$ 820K</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm">Automação Processos</span>
                                <span class="font-bold">R$ 640K</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm">Redução Tempo</span>
                                <span class="font-bold">R$ 380K</span>
                            </div>
                        </div>
                        <div class="mt-4 pt-4 border-t border-white/20">
                            <p class="text-xs opacity-75">Período: Últimos 12 meses</p>
                            <p class="text-sm font-bold mt-1">Total Economizado: R$ 3.64M</p>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Ações Rápidas</h3>
                        <div class="space-y-2">
                            <button onclick="novoRecurso()" class="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition flex items-center justify-between group">
                                <span class="text-sm font-medium text-blue-700">
                                    <i class="fas fa-file-medical mr-2"></i>
                                    Abrir Recurso de Glosa
                                </span>
                                <i class="fas fa-arrow-right text-blue-400 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                            <button onclick="exportarRelatorio()" class="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition flex items-center justify-between group">
                                <span class="text-sm font-medium text-green-700">
                                    <i class="fas fa-download mr-2"></i>
                                    Exportar Relatório
                                </span>
                                <i class="fas fa-arrow-right text-green-400 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                            <button onclick="analisarTendencias()" class="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition flex items-center justify-between group">
                                <span class="text-sm font-medium text-purple-700">
                                    <i class="fas fa-chart-line mr-2"></i>
                                    Análise de Tendências
                                </span>
                                <i class="fas fa-arrow-right text-purple-400 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                            <button onclick="configurarAlertasIA()" class="w-full text-left px-4 py-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition flex items-center justify-between group">
                                <span class="text-sm font-medium text-orange-700">
                                    <i class="fas fa-bell mr-2"></i>
                                    Configurar Alertas IA
                                </span>
                                <i class="fas fa-arrow-right text-orange-400 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Performance Metrics -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Métricas de Performance</h3>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span class="text-gray-600">Taxa de Reversão</span>
                                    <span class="font-bold">85%</span>
                                </div>
                                <div class="h-2 bg-gray-200 rounded">
                                    <div class="h-2 bg-green-500 rounded" style="width: 85%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span class="text-gray-600">Precisão IA</span>
                                    <span class="font-bold">92%</span>
                                </div>
                                <div class="h-2 bg-gray-200 rounded">
                                    <div class="h-2 bg-blue-500 rounded" style="width: 92%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span class="text-gray-600">Conformidade OPME</span>
                                    <span class="font-bold">94%</span>
                                </div>
                                <div class="h-2 bg-gray-200 rounded">
                                    <div class="h-2 bg-purple-500 rounded" style="width: 94%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span class="text-gray-600">Agilidade Processos</span>
                                    <span class="font-bold">78%</span>
                                </div>
                                <div class="h-2 bg-gray-200 rounded">
                                    <div class="h-2 bg-orange-500 rounded" style="width: 78%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Dashboard Completo -->
        <div id="dashboardCompleto" class="fixed inset-0 z-50 hidden overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen px-4">
                <div class="fixed inset-0 bg-black opacity-50" onclick="closeDashboardCompleto()"></div>
                <div class="relative bg-white rounded-xl shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
                    <div class="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                        <h2 class="text-2xl font-bold text-gray-900">Dashboard Financeiro Completo</h2>
                        <button onclick="closeDashboardCompleto()" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    <div class="p-6">
                        <!-- Visão 360° -->
                        <div class="grid grid-cols-4 gap-4 mb-6">
                            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                                <h4 class="text-sm font-medium text-blue-700 mb-2">Faturamento Total</h4>
                                <p class="text-2xl font-bold text-blue-900">R$ 12.4M</p>
                                <p class="text-xs text-blue-600 mt-1">↑ 15.3% vs mês anterior</p>
                            </div>
                            <div class="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                                <h4 class="text-sm font-medium text-green-700 mb-2">Glosas Evitadas</h4>
                                <p class="text-2xl font-bold text-green-900">R$ 3.8M</p>
                                <p class="text-xs text-green-600 mt-1">Meta: R$ 4M</p>
                            </div>
                            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                                <h4 class="text-sm font-medium text-purple-700 mb-2">Economia Total</h4>
                                <p class="text-2xl font-bold text-purple-900">R$ 5.2M</p>
                                <p class="text-xs text-purple-600 mt-1">ROI: 5.2x</p>
                            </div>
                            <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                                <h4 class="text-sm font-medium text-orange-700 mb-2">Pacientes Impactados</h4>
                                <p class="text-2xl font-bold text-orange-900">847</p>
                                <p class="text-xs text-orange-600 mt-1">31 em risco</p>
                            </div>
                        </div>

                        <!-- Gráficos Consolidados -->
                        <div class="grid grid-cols-2 gap-6 mb-6">
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold text-gray-900 mb-3">Evolução Financeira - 12 Meses</h4>
                                <canvas id="evolucaoFinanceira" height="150"></canvas>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold text-gray-900 mb-3">Distribuição de Custos</h4>
                                <canvas id="distribuicaoCustos" height="150"></canvas>
                            </div>
                        </div>

                        <!-- Integração com Outros Portais -->
                        <div class="border-t pt-6">
                            <h4 class="font-semibold text-gray-900 mb-4">Métricas Integradas dos Portais</h4>
                            <div class="grid grid-cols-3 gap-4">
                                <div class="border rounded-lg p-4">
                                    <h5 class="text-sm font-medium text-gray-700 mb-2">Portal Médico</h5>
                                    <p class="text-xs text-gray-600">Procedimentos: 1.234</p>
                                    <p class="text-xs text-gray-600">Taxa Sucesso: 94%</p>
                                    <p class="text-xs text-gray-600">Custo Médio: R$ 8.5K</p>
                                </div>
                                <div class="border rounded-lg p-4">
                                    <h5 class="text-sm font-medium text-gray-700 mb-2">Portal Paciente</h5>
                                    <p class="text-xs text-gray-600">Ativos: 847</p>
                                    <p class="text-xs text-gray-600">Adesão: 87%</p>
                                    <p class="text-xs text-gray-600">Satisfação: 4.8/5</p>
                                </div>
                                <div class="border rounded-lg p-4">
                                    <h5 class="text-sm font-medium text-gray-700 mb-2">Portal Pesquisa</h5>
                                    <p class="text-xs text-gray-600">Estudos: 23</p>
                                    <p class="text-xs text-gray-600">Participantes: 456</p>
                                    <p class="text-xs text-gray-600">Investimento: R$ 2.3M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script>
            // Initialize Charts
            const causaCtx = document.getElementById('causaChart').getContext('2d');
            new Chart(causaCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Documentação Incompleta', 'Autorização Prévia', 'Codificação Incorreta', 'Outros'],
                    datasets: [{
                        data: [142300, 98700, 246200, 85000],
                        backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        }
                    }
                }
            });

            // Tab switching function
            function showGlosaTab(tab) {
                // Hide all content
                document.querySelectorAll('.tab-content').forEach(el => {
                    el.classList.add('hidden');
                });
                
                // Remove active class from all tabs
                document.querySelectorAll('[id^="tab-"]').forEach(el => {
                    el.classList.remove('tab-active');
                    el.classList.add('text-gray-600');
                });
                
                // Show selected content
                document.getElementById('content-' + tab).classList.remove('hidden');
                
                // Add active class to selected tab
                document.getElementById('tab-' + tab).classList.add('tab-active');
                document.getElementById('tab-' + tab).classList.remove('text-gray-600');
                
                // Initialize chart if needed
                if (tab === 'convenio' && !window.convenioChartInitialized) {
                    initConvenioChart();
                } else if (tab === 'unidade' && !window.unidadeChartInitialized) {
                    initUnidadeChart();
                } else if (tab === 'tendencia' && !window.tendenciaChartInitialized) {
                    initTendenciaChart();
                }
            }

            function initConvenioChart() {
                const ctx = document.getElementById('convenioChart').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Unimed', 'SulAmérica', 'Bradesco', 'Amil', 'Outros'],
                        datasets: [{
                            label: 'Valor das Glosas',
                            data: [185000, 142000, 98000, 87000, 60200],
                            backgroundColor: '#3b82f6'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
                window.convenioChartInitialized = true;
            }

            function initUnidadeChart() {
                const ctx = document.getElementById('unidadeChart').getContext('2d');
                new Chart(ctx, {
                    type: 'horizontalBar',
                    data: {
                        labels: ['Unidade Centro', 'Unidade Sul', 'Unidade Norte', 'Unidade Oeste'],
                        datasets: [{
                            label: 'Glosas por Unidade',
                            data: [245000, 187000, 98000, 42200],
                            backgroundColor: ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
                window.unidadeChartInitialized = true;
            }

            function initTendenciaChart() {
                const ctx = document.getElementById('tendenciaChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                        datasets: [{
                            label: 'Tendência de Glosas',
                            data: [450000, 470000, 460000, 485000, 475000, 487200],
                            borderColor: '#ef4444',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
                window.tendenciaChartInitialized = true;
            }

            // Dashboard Completo Functions
            function openDashboardCompleto() {
                document.getElementById('dashboardCompleto').classList.remove('hidden');
                if (!window.dashboardChartsInitialized) {
                    initDashboardCharts();
                    window.dashboardChartsInitialized = true;
                }
            }

            function closeDashboardCompleto() {
                document.getElementById('dashboardCompleto').classList.add('hidden');
            }

            function initDashboardCharts() {
                // Evolução Financeira
                const evolucaoCtx = document.getElementById('evolucaoFinanceira').getContext('2d');
                new Chart(evolucaoCtx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                        datasets: [{
                            label: 'Faturamento',
                            data: [10.2, 10.5, 10.8, 11.2, 11.5, 11.8, 11.9, 12.1, 12.2, 12.3, 12.4, 12.4],
                            borderColor: '#3b82f6',
                            tension: 0.4
                        }, {
                            label: 'Glosas',
                            data: [0.5, 0.48, 0.47, 0.45, 0.44, 0.42, 0.41, 0.40, 0.38, 0.37, 0.35, 0.34],
                            borderColor: '#ef4444',
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });

                // Distribuição de Custos
                const distribuicaoCtx = document.getElementById('distribuicaoCustos').getContext('2d');
                new Chart(distribuicaoCtx, {
                    type: 'pie',
                    data: {
                        labels: ['OPME', 'Medicamentos', 'Procedimentos', 'Internação', 'Exames'],
                        datasets: [{
                            data: [35, 25, 20, 15, 5],
                            backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }

            // Action Functions
            function showPacientesRisco() {
                alert('Abrindo lista de 31 pacientes em risco para revisão urgente...');
            }

            function novoRecurso() {
                alert('Abrindo formulário para novo recurso de glosa...');
            }

            function exportarRelatorio() {
                alert('Preparando exportação do relatório financeiro...');
            }

            function analisarTendencias() {
                alert('Abrindo análise avançada de tendências...');
            }

            function configurarAlertasIA() {
                alert('Abrindo configurações de alertas da LAURA Finance AI...');
            }
        </script>
    </body>
    </html>
  `)
}