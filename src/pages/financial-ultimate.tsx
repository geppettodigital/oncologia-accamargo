import { html } from 'hono/html'

export const financialUltimatePage = (c: any) => {
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
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
            
            body { font-family: 'Inter', sans-serif; }
            
            .glass-premium {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.6);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.08);
            }
            
            .kpi-card-premium {
                background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
                border: 1px solid rgba(0, 0, 0, 0.04);
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;
            }
            
            .kpi-card-premium::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                transition: left 0.5s;
            }
            
            .kpi-card-premium:hover::before {
                left: 100%;
            }
            
            .kpi-card-premium:hover {
                transform: translateY(-8px) scale(1.02);
                box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.15);
                border-color: rgba(59, 130, 246, 0.3);
            }
            
            .status-badge-success {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
            }
            
            .status-badge-warning {
                background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
            }
            
            .status-badge-danger {
                background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
            }
            
            .status-badge-info {
                background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
            }
            
            .tab-nav-premium {
                background: rgba(243, 244, 246, 0.5);
                backdrop-filter: blur(10px);
                border-radius: 12px;
                padding: 4px;
            }
            
            .tab-button {
                position: relative;
                transition: all 0.3s ease;
                border-radius: 8px;
            }
            
            .tab-button.active {
                background: white;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                color: #1e40af;
                font-weight: 600;
            }
            
            .risk-meter {
                background: conic-gradient(
                    from 180deg,
                    #ef4444 0deg,
                    #f59e0b 90deg,
                    #eab308 180deg,
                    #22c55e 270deg,
                    #ef4444 360deg
                );
                border-radius: 50%;
                position: relative;
            }
            
            .pulse-dot {
                animation: pulse-dot 2s infinite;
            }
            
            @keyframes pulse-dot {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.2); opacity: 0.7; }
            }
            
            .gradient-border {
                background: linear-gradient(white, white) padding-box,
                           linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
                border: 2px solid transparent;
            }
            
            .chart-container {
                background: linear-gradient(135deg, rgba(249, 250, 251, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%);
                border-radius: 16px;
                padding: 24px;
                max-width: 100%;
                overflow: hidden;
            }
            
            .data-table-row:hover {
                background: linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%);
                transition: all 0.3s ease;
            }
            
            .modal-backdrop {
                backdrop-filter: blur(8px);
                background: rgba(0, 0, 0, 0.6);
            }
            
            .modal-content {
                background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
                box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.8);
            }
            
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes fadeInUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            .animate-slide-in { animation: slideInRight 0.5s ease-out; }
            .animate-fade-up { animation: fadeInUp 0.6s ease-out; }
            
            .risk-indicator {
                position: relative;
                display: inline-block;
            }
            
            .risk-indicator::after {
                content: '';
                position: absolute;
                top: -2px;
                right: -2px;
                width: 8px;
                height: 8px;
                background: #ef4444;
                border-radius: 50%;
                animation: pulse-dot 2s infinite;
            }
            
            .commercial-card {
                background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                border-left: 4px solid #0ea5e9;
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 min-h-screen">

        <!-- Professional Header -->
        <div class="glass-premium sticky top-0 z-40 border-b border-gray-200/50">
            <div class="container mx-auto px-4 py-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <button onclick="window.history.back()" class="p-2 hover:bg-gray-100/80 rounded-xl transition-all">
                            <i class="fas fa-arrow-left text-gray-700"></i>
                        </button>
                        <div>
                            <h1 class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Portal de Gestão Financeira
                            </h1>
                            <p class="text-sm text-gray-500 font-medium">Sistema Inteligente de Análise Preditiva</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <select id="dateRange" class="px-4 py-2 border border-gray-200 rounded-xl bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="7d">Últimos 7 dias</option>
                            <option value="30d" selected>Últimos 30 dias</option>
                            <option value="90d">Últimos 90 dias</option>
                            <option value="12m">Últimos 12 meses</option>
                        </select>
                        <button onclick="openDosseComercial()" class="px-5 py-2.5 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold text-sm">
                            <i class="fas fa-briefcase mr-2"></i>Dossiê Comercial
                        </button>
                        <button onclick="openDashboardCompleto()" class="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold text-sm">
                            <i class="fas fa-chart-line mr-2"></i>Dashboard
                        </button>
                        <button class="px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
                            <i class="fas fa-download text-gray-600"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-6">
            
            <!-- LAURA Finance AI Alert - Professional Design -->
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-purple-700 p-6 mb-6 shadow-2xl animate-fade-up">
                <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div class="relative flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="p-4 bg-white/20 backdrop-blur rounded-2xl mr-5">
                            <i class="fas fa-brain text-4xl text-white"></i>
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-white mb-3">LAURA Finance AI - Análise Preditiva</h2>
                            <div class="grid grid-cols-3 gap-8">
                                <div>
                                    <p class="text-4xl font-bold text-white">R$ 245.8K</p>
                                    <p class="text-white/90 text-sm mt-1">Glosas previstas em 7 dias</p>
                                </div>
                                <div class="flex items-center">
                                    <div class="relative w-20 h-20 mr-3">
                                        <svg class="transform -rotate-90" width="80" height="80">
                                            <circle cx="40" cy="40" r="35" stroke="rgba(255,255,255,0.2)" stroke-width="8" fill="none"/>
                                            <circle cx="40" cy="40" r="35" stroke="white" stroke-width="8" fill="none" 
                                                    stroke-dasharray="220" stroke-dashoffset="61.6" stroke-linecap="round"/>
                                        </svg>
                                        <div class="absolute inset-0 flex items-center justify-center">
                                            <span class="text-2xl font-bold text-white">72%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-white/90 text-sm">Risk Score</p>
                                        <p class="text-xs text-white/70">Alto Risco</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-4xl font-bold text-white">31</p>
                                    <p class="text-white/90 text-sm mt-1">Jornadas em risco</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onclick="showJornadasRisco()" class="px-6 py-3 bg-white text-red-700 rounded-xl font-bold hover:shadow-lg transition-all">
                        <i class="fas fa-users-medical mr-2"></i>Ver Jornadas em Risco
                    </button>
                </div>
            </div>

            <!-- 5 KPIs Premium Cards -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <!-- Glosas Identificadas -->
                <div class="kpi-card-premium p-5 rounded-2xl shadow-lg cursor-pointer" onclick="showExtratoKPI('identificadas')">
                    <div class="flex items-start justify-between mb-3">
                        <div class="p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-xl">
                            <i class="fas fa-exclamation-circle text-red-600 text-xl"></i>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-bold text-red-600">↑ 8.3%</span>
                            <i class="fas fa-info-circle text-gray-400 text-xs ml-1"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900">R$ 45.678</h3>
                    <p class="text-xs text-gray-600 mt-1 font-medium">Glosas Identificadas</p>
                    <div class="mt-3">
                        <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full" style="width: 65%"></div>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">142 ocorrências</p>
                    </div>
                </div>

                <!-- Glosas Revertidas -->
                <div class="kpi-card-premium p-5 rounded-2xl shadow-lg cursor-pointer" onclick="showExtratoKPI('revertidas')">
                    <div class="flex items-start justify-between mb-3">
                        <div class="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl">
                            <i class="fas fa-check-double text-green-600 text-xl"></i>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-bold text-green-600">85%</span>
                            <i class="fas fa-info-circle text-gray-400 text-xs ml-1"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900">R$ 285.432</h3>
                    <p class="text-xs text-gray-600 mt-1 font-medium">Glosas Revertidas</p>
                    <div class="mt-3">
                        <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" style="width: 85%"></div>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">Taxa de sucesso</p>
                    </div>
                </div>

                <!-- ROI Otimização -->
                <div class="kpi-card-premium p-5 rounded-2xl shadow-lg cursor-pointer" onclick="showExtratoKPI('roi')">
                    <div class="flex items-start justify-between mb-3">
                        <div class="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl">
                            <i class="fas fa-chart-line text-purple-600 text-xl"></i>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-bold text-purple-600">5.2x</span>
                            <i class="fas fa-info-circle text-gray-400 text-xs ml-1"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900">5.2x</h3>
                    <p class="text-xs text-gray-600 mt-1 font-medium">ROI Otimização</p>
                    <div class="mt-3">
                        <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" style="width: 95%"></div>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">R$ 3.64M economizado</p>
                    </div>
                </div>

                <!-- Tempo Médio -->
                <div class="kpi-card-premium p-5 rounded-2xl shadow-lg cursor-pointer" onclick="showExtratoKPI('tempo')">
                    <div class="flex items-start justify-between mb-3">
                        <div class="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                            <i class="fas fa-clock text-blue-600 text-xl"></i>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-bold text-blue-600">↓ 2d</span>
                            <i class="fas fa-info-circle text-gray-400 text-xs ml-1"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900">3.5 dias</h3>
                    <p class="text-xs text-gray-600 mt-1 font-medium">Tempo Médio Reversão</p>
                    <div class="mt-3">
                        <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style="width: 75%"></div>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">Melhor que média</p>
                    </div>
                </div>

                <!-- Controle OPME -->
                <div class="kpi-card-premium p-5 rounded-2xl shadow-lg cursor-pointer" onclick="showExtratoKPI('opme')">
                    <div class="flex items-start justify-between mb-3">
                        <div class="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl">
                            <i class="fas fa-boxes text-orange-600 text-xl"></i>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-bold text-orange-600">94%</span>
                            <i class="fas fa-info-circle text-gray-400 text-xs ml-1"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900">R$ 567.890</h3>
                    <p class="text-xs text-gray-600 mt-1 font-medium">Controle OPME</p>
                    <div class="mt-3">
                        <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style="width: 94%"></div>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">Conformidade</p>
                    </div>
                </div>
            </div>

            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Left Column -->
                <div class="lg:col-span-2 space-y-6">
                    
                    <!-- Enhanced Análise Detalhada de Glosas -->
                    <div class="glass-premium rounded-2xl p-6 shadow-xl">
                        <div class="flex items-center justify-between mb-5">
                            <h3 class="text-xl font-bold text-gray-900">Análise Detalhada de Glosas</h3>
                            <div class="flex items-center space-x-2">
                                <span class="text-xs text-gray-500">Atualizado há 5 min</span>
                                <div class="w-2 h-2 bg-green-500 rounded-full pulse-dot"></div>
                            </div>
                        </div>
                        
                        <!-- Premium Tabs -->
                        <div class="tab-nav-premium flex space-x-2 mb-6">
                            <button onclick="showGlosaTab('causa')" id="tab-causa" class="tab-button active px-4 py-2 text-sm font-medium">
                                <i class="fas fa-exclamation-triangle mr-2"></i>Por Causa
                            </button>
                            <button onclick="showGlosaTab('convenio')" id="tab-convenio" class="tab-button px-4 py-2 text-sm font-medium text-gray-600">
                                <i class="fas fa-hospital mr-2"></i>Por Convênio
                            </button>
                            <button onclick="showGlosaTab('unidade')" id="tab-unidade" class="tab-button px-4 py-2 text-sm font-medium text-gray-600">
                                <i class="fas fa-building mr-2"></i>Por Unidade
                            </button>
                            <button onclick="showGlosaTab('tendencia')" id="tab-tendencia" class="tab-button px-4 py-2 text-sm font-medium text-gray-600">
                                <i class="fas fa-chart-line mr-2"></i>Tendência
                            </button>
                        </div>

                        <!-- Tab Content with Enhanced Visualizations -->
                        <div id="glosa-content">
                            <!-- Por Causa (Default) -->
                            <div id="content-causa" class="tab-content">
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="chart-container" style="height: 250px;">
                                        <canvas id="causaChart"></canvas>
                                    </div>
                                    <div class="space-y-3">
                                        <div class="bg-gradient-to-r from-red-50 to-transparent p-4 rounded-xl border-l-4 border-red-500">
                                            <div class="flex justify-between items-start">
                                                <div>
                                                    <p class="text-sm font-semibold text-gray-900">Documentação Incompleta</p>
                                                    <p class="text-xs text-gray-500 mt-1">34 casos • 24% do total</p>
                                                </div>
                                                <div class="text-right">
                                                    <p class="text-lg font-bold text-red-600">R$ 142.3K</p>
                                                    <span class="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">↑ 12%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-gradient-to-r from-yellow-50 to-transparent p-4 rounded-xl border-l-4 border-yellow-500">
                                            <div class="flex justify-between items-start">
                                                <div>
                                                    <p class="text-sm font-semibold text-gray-900">Autorização Prévia</p>
                                                    <p class="text-xs text-gray-500 mt-1">28 casos • 20% do total</p>
                                                </div>
                                                <div class="text-right">
                                                    <p class="text-lg font-bold text-yellow-600">R$ 98.7K</p>
                                                    <span class="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">→ 0%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-xl border-l-4 border-blue-500">
                                            <div class="flex justify-between items-start">
                                                <div>
                                                    <p class="text-sm font-semibold text-gray-900">Codificação Incorreta</p>
                                                    <p class="text-xs text-gray-500 mt-1">52 casos • 37% do total</p>
                                                </div>
                                                <div class="text-right">
                                                    <p class="text-lg font-bold text-blue-600">R$ 246.2K</p>
                                                    <span class="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">↓ 5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Hidden tabs content placeholders -->
                            <div id="content-convenio" class="tab-content hidden">
                                <div id="convenioChart" class="chart-container"></div>
                            </div>
                            <div id="content-unidade" class="tab-content hidden">
                                <div id="unidadeChart" class="chart-container"></div>
                            </div>
                            <div id="content-tendencia" class="tab-content hidden">
                                <div id="tendenciaChart" class="chart-container"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Controle OPME Premium Table -->
                    <div class="glass-premium rounded-2xl p-6 shadow-xl">
                        <div class="flex justify-between items-center mb-5">
                            <h3 class="text-xl font-bold text-gray-900">Controle OPME em Tempo Real</h3>
                            <div class="flex space-x-2">
                                <button class="px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all text-sm">
                                    <i class="fas fa-filter mr-1"></i>Filtrar
                                </button>
                                <button class="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all text-sm">
                                    <i class="fas fa-sync mr-1"></i>Atualizar
                                </button>
                            </div>
                        </div>
                        
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b border-gray-200">
                                        <th class="text-left py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Material</th>
                                        <th class="text-center py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Qtd</th>
                                        <th class="text-right py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Custo Unit</th>
                                        <th class="text-right py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
                                        <th class="text-left py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Fornecedor</th>
                                        <th class="text-center py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                        <th class="text-center py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="data-table-row border-b border-gray-100">
                                        <td class="py-4 px-3">
                                            <div>
                                                <p class="font-semibold text-gray-900">Prótese Oncológica T4</p>
                                                <p class="text-xs text-gray-500">PRO-T4-2024</p>
                                            </div>
                                        </td>
                                        <td class="text-center py-4 px-3 font-medium">3</td>
                                        <td class="text-right py-4 px-3 font-medium">R$ 45.000</td>
                                        <td class="text-right py-4 px-3 font-bold text-gray-900">R$ 135.000</td>
                                        <td class="py-4 px-3 text-sm">MedTech Solutions</td>
                                        <td class="text-center py-4 px-3">
                                            <span class="px-3 py-1 text-xs font-semibold text-white rounded-full status-badge-success">
                                                Aprovado
                                            </span>
                                        </td>
                                        <td class="text-center py-4 px-3">
                                            <button onclick="showOPMEDetail('PRO-T4-2024')" class="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-all">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="mt-5 flex justify-between items-center">
                            <p class="text-sm text-gray-600">
                                Total controlado: <span class="font-bold text-gray-900 text-lg">R$ 567.890</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="space-y-6">
                    <!-- ROI Card Premium -->
                    <div class="rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 text-white shadow-2xl">
                        <h3 class="text-lg font-bold mb-4">ROI em Tempo Real</h3>
                        <div class="text-center mb-5">
                            <p class="text-5xl font-bold">5.2x</p>
                            <p class="text-sm opacity-90 mt-1">Retorno sobre Investimento</p>
                        </div>
                        <div class="space-y-3 border-t border-white/20 pt-4">
                            <div class="flex justify-between items-center">
                                <span class="text-sm opacity-90">Glosas Evitadas</span>
                                <span class="font-bold text-lg">R$ 1.8M</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm opacity-90">Otimização OPME</span>
                                <span class="font-bold text-lg">R$ 820K</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm opacity-90">Automação</span>
                                <span class="font-bold text-lg">R$ 640K</span>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Actions Premium -->
                    <div class="glass-premium rounded-2xl p-6 shadow-xl">
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Ações Rápidas</h3>
                        <div class="space-y-2">
                            <button onclick="openDosseComercial()" class="w-full text-left px-4 py-3 bg-gradient-to-r from-sky-50 to-sky-100/50 hover:from-sky-100 hover:to-sky-200/50 rounded-xl transition-all flex items-center justify-between group">
                                <span class="text-sm font-semibold text-sky-700">
                                    <i class="fas fa-briefcase mr-2"></i>
                                    Dossiê Comercial
                                </span>
                                <i class="fas fa-arrow-right text-sky-400 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                            <button onclick="novoRecurso()" class="w-full text-left px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 rounded-xl transition-all flex items-center justify-between group">
                                <span class="text-sm font-semibold text-blue-700">
                                    <i class="fas fa-file-medical mr-2"></i>
                                    Abrir Recurso
                                </span>
                                <i class="fas fa-arrow-right text-blue-400 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal: Dashboard Completo MELHORADO -->
        <div id="dashboardCompleto" class="fixed inset-0 z-50 hidden">
            <div class="modal-backdrop fixed inset-0" onclick="closeDashboardCompleto()"></div>
            <div class="flex items-center justify-center min-h-screen p-4">
                <div class="modal-content relative rounded-2xl max-w-[95vw] w-full max-h-[90vh] overflow-hidden animate-slide-in">
                    <div class="sticky top-0 bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center z-10">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-900">Dashboard Executivo Completo</h2>
                            <p class="text-sm text-gray-500 mt-1">Visão consolidada de performance e riscos</p>
                        </div>
                        <button onclick="closeDashboardCompleto()" class="p-2 hover:bg-gray-100 rounded-xl transition-all">
                            <i class="fas fa-times text-gray-500 text-xl"></i>
                        </button>
                    </div>
                    <div class="p-8 overflow-y-auto" style="max-height: calc(90vh - 100px);">
                        <!-- Executive Summary Cards -->
                        <div class="grid grid-cols-4 gap-5 mb-8">
                            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white">
                                <div class="flex justify-between items-start mb-3">
                                    <div class="p-2 bg-white/20 rounded-lg">
                                        <i class="fas fa-dollar-sign text-xl"></i>
                                    </div>
                                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">↑ 15.3%</span>
                                </div>
                                <p class="text-3xl font-bold">R$ 12.4M</p>
                                <p class="text-sm opacity-90 mt-1">Faturamento Total</p>
                            </div>
                            <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 text-white">
                                <div class="flex justify-between items-start mb-3">
                                    <div class="p-2 bg-white/20 rounded-lg">
                                        <i class="fas fa-shield-alt text-xl"></i>
                                    </div>
                                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">Meta: R$ 4M</span>
                                </div>
                                <p class="text-3xl font-bold">R$ 3.8M</p>
                                <p class="text-sm opacity-90 mt-1">Glosas Evitadas</p>
                            </div>
                            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 text-white">
                                <div class="flex justify-between items-start mb-3">
                                    <div class="p-2 bg-white/20 rounded-lg">
                                        <i class="fas fa-chart-pie text-xl"></i>
                                    </div>
                                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">ROI: 5.2x</span>
                                </div>
                                <p class="text-3xl font-bold">R$ 5.2M</p>
                                <p class="text-sm opacity-90 mt-1">Economia Total</p>
                            </div>
                            <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-5 text-white">
                                <div class="flex justify-between items-start mb-3">
                                    <div class="p-2 bg-white/20 rounded-lg">
                                        <i class="fas fa-users text-xl"></i>
                                    </div>
                                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">31 em risco</span>
                                </div>
                                <p class="text-3xl font-bold">847</p>
                                <p class="text-sm opacity-90 mt-1">Jornadas Ativas</p>
                            </div>
                        </div>

                        <!-- Risk Analysis Section -->
                        <div class="grid grid-cols-3 gap-6 mb-8">
                            <!-- Jornadas de Risco -->
                            <div class="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center">
                                    <i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                                    Jornadas de Risco
                                </h4>
                                <div class="space-y-3">
                                    <div class="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <p class="text-sm font-semibold text-gray-900">Alto Risco</p>
                                                <p class="text-xs text-gray-600">Ação imediata</p>
                                            </div>
                                            <div class="text-right">
                                                <p class="text-2xl font-bold text-red-600">12</p>
                                                <p class="text-xs text-red-500">R$ 145K</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <p class="text-sm font-semibold text-gray-900">Médio Risco</p>
                                                <p class="text-xs text-gray-600">Monitorar</p>
                                            </div>
                                            <div class="text-right">
                                                <p class="text-2xl font-bold text-yellow-600">15</p>
                                                <p class="text-xs text-yellow-500">R$ 87K</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <p class="text-sm font-semibold text-gray-900">Baixo Risco</p>
                                                <p class="text-xs text-gray-600">Acompanhar</p>
                                            </div>
                                            <div class="text-right">
                                                <p class="text-2xl font-bold text-blue-600">4</p>
                                                <p class="text-xs text-blue-500">R$ 13.8K</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Fornecedores Críticos -->
                            <div class="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center">
                                    <i class="fas fa-truck text-orange-500 mr-2"></i>
                                    Fornecedores Críticos
                                </h4>
                                <div class="space-y-3">
                                    <div class="p-3 bg-orange-50 rounded-lg">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <p class="text-sm font-semibold text-gray-900">MedTech Solutions</p>
                                                <p class="text-xs text-gray-600">3 pendências</p>
                                            </div>
                                            <span class="risk-indicator">
                                                <span class="text-xs font-bold text-orange-600">R$ 245K</span>
                                            </span>
                                        </div>
                                        <div class="mt-2">
                                            <div class="h-1.5 bg-gray-200 rounded-full">
                                                <div class="h-1.5 bg-orange-500 rounded-full" style="width: 75%"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-yellow-50 rounded-lg">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <p class="text-sm font-semibold text-gray-900">OncoSupply BR</p>
                                                <p class="text-xs text-gray-600">5 pendências</p>
                                            </div>
                                            <span class="text-xs font-bold text-yellow-600">R$ 178K</span>
                                        </div>
                                        <div class="mt-2">
                                            <div class="h-1.5 bg-gray-200 rounded-full">
                                                <div class="h-1.5 bg-yellow-500 rounded-full" style="width: 60%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Contratos em Risco -->
                            <div class="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center">
                                    <i class="fas fa-file-contract text-purple-500 mr-2"></i>
                                    Contratos em Risco
                                </h4>
                                <div class="space-y-3">
                                    <div class="p-3 bg-purple-50 rounded-lg">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <p class="text-sm font-semibold text-gray-900">Unimed Central</p>
                                                <p class="text-xs text-gray-600">Vence em 15 dias</p>
                                            </div>
                                            <div class="text-right">
                                                <p class="text-sm font-bold text-purple-600">R$ 2.3M</p>
                                                <span class="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                                                    Renovação
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-red-50 rounded-lg">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <p class="text-sm font-semibold text-gray-900">SulAmérica</p>
                                                <p class="text-xs text-gray-600">Negociação crítica</p>
                                            </div>
                                            <div class="text-right">
                                                <p class="text-sm font-bold text-red-600">R$ 1.8M</p>
                                                <span class="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
                                                    Urgente
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Demandas Comerciais Impactadas -->
                        <div class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-8">
                            <h4 class="font-bold text-gray-900 mb-5">Demandas Comerciais Impactadas</h4>
                            <div class="grid grid-cols-4 gap-4">
                                <div class="bg-white rounded-xl p-4 shadow-sm">
                                    <div class="flex items-center justify-between mb-3">
                                        <i class="fas fa-procedures text-blue-600 text-2xl"></i>
                                        <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">↑ 12%</span>
                                    </div>
                                    <p class="text-2xl font-bold text-gray-900">234</p>
                                    <p class="text-xs text-gray-600">Cirurgias Complexas</p>
                                    <p class="text-xs text-blue-600 mt-1">R$ 4.5M impacto</p>
                                </div>
                                <div class="bg-white rounded-xl p-4 shadow-sm">
                                    <div class="flex items-center justify-between mb-3">
                                        <i class="fas fa-pills text-green-600 text-2xl"></i>
                                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">↑ 8%</span>
                                    </div>
                                    <p class="text-2xl font-bold text-gray-900">567</p>
                                    <p class="text-xs text-gray-600">Quimioterapias</p>
                                    <p class="text-xs text-green-600 mt-1">R$ 2.8M impacto</p>
                                </div>
                                <div class="bg-white rounded-xl p-4 shadow-sm">
                                    <div class="flex items-center justify-between mb-3">
                                        <i class="fas fa-radiation text-purple-600 text-2xl"></i>
                                        <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">→ 0%</span>
                                    </div>
                                    <p class="text-2xl font-bold text-gray-900">189</p>
                                    <p class="text-xs text-gray-600">Radioterapias</p>
                                    <p class="text-xs text-purple-600 mt-1">R$ 1.2M impacto</p>
                                </div>
                                <div class="bg-white rounded-xl p-4 shadow-sm">
                                    <div class="flex items-center justify-between mb-3">
                                        <i class="fas fa-microscope text-orange-600 text-2xl"></i>
                                        <span class="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">↓ 5%</span>
                                    </div>
                                    <p class="text-2xl font-bold text-gray-900">412</p>
                                    <p class="text-xs text-gray-600">Exames Especializados</p>
                                    <p class="text-xs text-orange-600 mt-1">R$ 890K impacto</p>
                                </div>
                            </div>
                        </div>

                        <!-- Charts Grid -->
                        <div class="grid grid-cols-2 gap-6">
                            <div class="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 class="font-bold text-gray-900 mb-4">Evolução Financeira - 12 Meses</h4>
                                <div style="height: 250px; position: relative;">
                                    <canvas id="evolucaoFinanceira"></canvas>
                                </div>
                            </div>
                            <div class="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 class="font-bold text-gray-900 mb-4">Distribuição de Custos</h4>
                                <div style="height: 250px; position: relative;">
                                    <canvas id="distribuicaoCustos"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal: Dossiê Comercial -->
        <div id="modalDosseComercial" class="fixed inset-0 z-50 hidden">
            <div class="modal-backdrop fixed inset-0" onclick="closeDosseComercial()"></div>
            <div class="flex items-center justify-center min-h-screen p-4">
                <div class="modal-content relative rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
                    <div class="sticky top-0 bg-gradient-to-r from-sky-50 to-cyan-50 border-b px-8 py-5 flex justify-between items-center">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-900">Dossiê Comercial - Negociação com Operadoras</h2>
                            <p class="text-sm text-gray-600 mt-1">Dados estratégicos para fortalecer negociações</p>
                        </div>
                        <button onclick="closeDosseComercial()" class="p-2 hover:bg-white/50 rounded-xl transition-all">
                            <i class="fas fa-times text-gray-500 text-xl"></i>
                        </button>
                    </div>
                    <div class="p-8 overflow-y-auto bg-gradient-to-br from-white to-sky-50/30" style="max-height: calc(90vh - 100px);">
                        
                        <!-- Success Metrics -->
                        <div class="grid grid-cols-4 gap-4 mb-8">
                            <div class="commercial-card rounded-xl p-5">
                                <div class="flex justify-between items-start mb-3">
                                    <i class="fas fa-trophy text-yellow-500 text-2xl"></i>
                                    <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                                        +23% vs ano
                                    </span>
                                </div>
                                <p class="text-3xl font-bold text-gray-900">94.7%</p>
                                <p class="text-sm text-gray-700 font-medium">Taxa de Sucesso</p>
                                <p class="text-xs text-gray-600 mt-1">Tratamentos bem-sucedidos</p>
                            </div>
                            <div class="commercial-card rounded-xl p-5">
                                <div class="flex justify-between items-start mb-3">
                                    <i class="fas fa-chart-line text-green-500 text-2xl"></i>
                                    <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                                        Top 5 Brasil
                                    </span>
                                </div>
                                <p class="text-3xl font-bold text-gray-900">R$ 487M</p>
                                <p class="text-sm text-gray-700 font-medium">Volume Anual</p>
                                <p class="text-xs text-gray-600 mt-1">Faturamento operadoras</p>
                            </div>
                            <div class="commercial-card rounded-xl p-5">
                                <div class="flex justify-between items-start mb-3">
                                    <i class="fas fa-award text-purple-500 text-2xl"></i>
                                    <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">
                                        Certificado
                                    </span>
                                </div>
                                <p class="text-3xl font-bold text-gray-900">A+</p>
                                <p class="text-sm text-gray-700 font-medium">Rating Qualidade</p>
                                <p class="text-xs text-gray-600 mt-1">Acreditação internacional</p>
                            </div>
                            <div class="commercial-card rounded-xl p-5">
                                <div class="flex justify-between items-start mb-3">
                                    <i class="fas fa-users text-blue-500 text-2xl"></i>
                                    <span class="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-semibold">
                                        NPS 78
                                    </span>
                                </div>
                                <p class="text-3xl font-bold text-gray-900">12.847</p>
                                <p class="text-sm text-gray-700 font-medium">Pacientes Atendidos</p>
                                <p class="text-xs text-gray-600 mt-1">Últimos 12 meses</p>
                            </div>
                        </div>

                        <!-- Cases de Sucesso -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg mb-8">
                            <h3 class="text-xl font-bold text-gray-900 mb-5">Cases de Sucesso - Argumentos de Negociação</h3>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="border-l-4 border-green-500 p-4 bg-green-50 rounded-lg">
                                    <div class="flex justify-between items-start mb-2">
                                        <h4 class="font-semibold text-gray-900">Programa de Oncologia Integrativa</h4>
                                        <span class="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Destaque</span>
                                    </div>
                                    <p class="text-sm text-gray-700 mb-3">
                                        Redução de 34% no tempo de internação através de protocolos integrativos, 
                                        resultando em economia de R$ 2.3M/ano para operadoras parceiras.
                                    </p>
                                    <div class="grid grid-cols-3 gap-2 text-xs">
                                        <div class="bg-white p-2 rounded text-center">
                                            <p class="font-bold text-green-600">-34%</p>
                                            <p class="text-gray-600">Internação</p>
                                        </div>
                                        <div class="bg-white p-2 rounded text-center">
                                            <p class="font-bold text-green-600">R$ 2.3M</p>
                                            <p class="text-gray-600">Economia</p>
                                        </div>
                                        <div class="bg-white p-2 rounded text-center">
                                            <p class="font-bold text-green-600">456</p>
                                            <p class="text-gray-600">Pacientes</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-l-4 border-blue-500 p-4 bg-blue-50 rounded-lg">
                                    <div class="flex justify-between items-start mb-2">
                                        <h4 class="font-semibold text-gray-900">Fast-Track Diagnóstico</h4>
                                        <span class="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Inovação</span>
                                    </div>
                                    <p class="text-sm text-gray-700 mb-3">
                                        Diagnóstico completo em 72h com 98% de precisão. Redução de 45% nos custos 
                                        com exames desnecessários e início precoce do tratamento.
                                    </p>
                                    <div class="grid grid-cols-3 gap-2 text-xs">
                                        <div class="bg-white p-2 rounded text-center">
                                            <p class="font-bold text-blue-600">72h</p>
                                            <p class="text-gray-600">Diagnóstico</p>
                                        </div>
                                        <div class="bg-white p-2 rounded text-center">
                                            <p class="font-bold text-blue-600">98%</p>
                                            <p class="text-gray-600">Precisão</p>
                                        </div>
                                        <div class="bg-white p-2 rounded text-center">
                                            <p class="font-bold text-blue-600">-45%</p>
                                            <p class="text-gray-600">Custos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Comparativo com Mercado -->
                        <div class="grid grid-cols-2 gap-6 mb-8">
                            <div class="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 class="font-bold text-gray-900 mb-4">Vantagens Competitivas</h4>
                                <div class="space-y-3">
                                    <div class="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg">
                                        <div class="flex items-center">
                                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                                            <span class="text-sm font-medium">Menor taxa de reoperação</span>
                                        </div>
                                        <span class="text-sm font-bold text-green-600">2.3% vs 8.7%</span>
                                    </div>
                                    <div class="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                                        <div class="flex items-center">
                                            <i class="fas fa-check-circle text-blue-500 mr-3"></i>
                                            <span class="text-sm font-medium">Tempo médio alta</span>
                                        </div>
                                        <span class="text-sm font-bold text-blue-600">3.5d vs 6.2d</span>
                                    </div>
                                    <div class="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg">
                                        <div class="flex items-center">
                                            <i class="fas fa-check-circle text-purple-500 mr-3"></i>
                                            <span class="text-sm font-medium">Satisfação paciente</span>
                                        </div>
                                        <span class="text-sm font-bold text-purple-600">96% vs 71%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 class="font-bold text-gray-900 mb-4">Economia Gerada para Operadoras</h4>
                                <div class="space-y-3">
                                    <div class="p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-sm font-semibold text-gray-900">Unimed</span>
                                            <span class="text-sm font-bold text-green-600">R$ 4.2M/ano</span>
                                        </div>
                                        <div class="h-2 bg-gray-200 rounded-full">
                                            <div class="h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full" style="width: 85%"></div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-sm font-semibold text-gray-900">SulAmérica</span>
                                            <span class="text-sm font-bold text-blue-600">R$ 3.8M/ano</span>
                                        </div>
                                        <div class="h-2 bg-gray-200 rounded-full">
                                            <div class="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style="width: 78%"></div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-sm font-semibold text-gray-900">Bradesco</span>
                                            <span class="text-sm font-bold text-purple-600">R$ 2.9M/ano</span>
                                        </div>
                                        <div class="h-2 bg-gray-200 rounded-full">
                                            <div class="h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" style="width: 65%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Actions -->
                        <div class="flex justify-between items-center">
                            <div class="flex space-x-3">
                                <button class="px-5 py-2.5 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-all">
                                    <i class="fas fa-download mr-2"></i>Exportar Dossiê PDF
                                </button>
                                <button class="px-5 py-2.5 bg-white border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                                    <i class="fas fa-share mr-2"></i>Compartilhar
                                </button>
                            </div>
                            <p class="text-xs text-gray-500">
                                <i class="fas fa-info-circle mr-1"></i>
                                Dados atualizados em tempo real com base em 12.847 atendimentos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Other Modals remain the same... -->

        <script>
            // Initialize Charts with proper configuration
            Chart.defaults.responsive = true;
            Chart.defaults.maintainAspectRatio = false;

            // Initialize Causa Chart
            const causaCtx = document.getElementById('causaChart');
            if (causaCtx) {
                const causaChart = new Chart(causaCtx.getContext('2d'), {
                    type: 'doughnut',
                    data: {
                        labels: ['Documentação', 'Autorização', 'Codificação', 'Outros'],
                        datasets: [{
                            data: [142300, 98700, 246200, 85000],
                            backgroundColor: [
                                'rgba(239, 68, 68, 0.9)',
                                'rgba(245, 158, 11, 0.9)',
                                'rgba(59, 130, 246, 0.9)',
                                'rgba(139, 92, 246, 0.9)'
                            ],
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    padding: 10,
                                    font: { size: 10 }
                                }
                            }
                        }
                    }
                });
            }

            // Tab Management
            function showGlosaTab(tab) {
                document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
                document.querySelectorAll('.tab-button').forEach(el => {
                    el.classList.remove('active');
                    el.classList.add('text-gray-600');
                });
                
                document.getElementById('content-' + tab).classList.remove('hidden');
                document.getElementById('tab-' + tab).classList.add('active');
                document.getElementById('tab-' + tab).classList.remove('text-gray-600');
                
                // Initialize dynamic charts
                if (tab === 'convenio' && !window.convenioInit) {
                    initConvenioChart();
                } else if (tab === 'unidade' && !window.unidadeInit) {
                    initUnidadeChart();
                } else if (tab === 'tendencia' && !window.tendenciaInit) {
                    initTendenciaChart();
                }
            }

            function initConvenioChart() {
                const container = document.getElementById('convenioChart');
                container.innerHTML = '<canvas id="convenioCanvas"></canvas>';
                const ctx = document.getElementById('convenioCanvas').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Unimed', 'SulAmérica', 'Bradesco', 'Amil', 'Outros'],
                        datasets: [{
                            label: 'Valor Glosas',
                            data: [185000, 142000, 98000, 87000, 60200],
                            backgroundColor: 'rgba(59, 130, 246, 0.8)'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
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
                window.convenioInit = true;
            }

            function initUnidadeChart() {
                const container = document.getElementById('unidadeChart');
                container.innerHTML = '<canvas id="unidadeCanvas"></canvas>';
                const ctx = document.getElementById('unidadeCanvas').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Centro', 'Sul', 'Norte', 'Oeste'],
                        datasets: [{
                            label: 'Glosas por Unidade',
                            data: [245000, 187000, 98000, 42200],
                            backgroundColor: ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        indexAxis: 'y',
                        scales: {
                            x: {
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
                window.unidadeInit = true;
            }

            function initTendenciaChart() {
                const container = document.getElementById('tendenciaChart');
                container.innerHTML = '<canvas id="tendenciaCanvas"></canvas>';
                const ctx = document.getElementById('tendenciaCanvas').getContext('2d');
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
                        maintainAspectRatio: false,
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
                window.tendenciaInit = true;
            }

            // Dashboard Functions
            function openDashboardCompleto() {
                document.getElementById('dashboardCompleto').classList.remove('hidden');
                if (!window.dashboardInit) {
                    setTimeout(initDashboardCharts, 100);
                    window.dashboardInit = true;
                }
            }

            function closeDashboardCompleto() {
                document.getElementById('dashboardCompleto').classList.add('hidden');
            }

            function initDashboardCharts() {
                // Evolution Chart
                const evolCtx = document.getElementById('evolucaoFinanceira');
                if (evolCtx) {
                    new Chart(evolCtx.getContext('2d'), {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                            datasets: [{
                                label: 'Faturamento',
                                data: [10.2, 10.5, 10.8, 11.2, 11.5, 11.8, 11.9, 12.1, 12.2, 12.3, 12.4, 12.4],
                                borderColor: '#3b82f6',
                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                tension: 0.4
                            }, {
                                label: 'Glosas',
                                data: [0.5, 0.48, 0.47, 0.45, 0.44, 0.42, 0.41, 0.40, 0.38, 0.37, 0.35, 0.34],
                                borderColor: '#ef4444',
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
                                    ticks: {
                                        callback: function(value) {
                                            return 'R$ ' + value + 'M';
                                        }
                                    }
                                }
                            }
                        }
                    });
                }

                // Distribution Chart
                const distCtx = document.getElementById('distribuicaoCustos');
                if (distCtx) {
                    new Chart(distCtx.getContext('2d'), {
                        type: 'pie',
                        data: {
                            labels: ['OPME', 'Medicamentos', 'Procedimentos', 'Internação', 'Exames'],
                            datasets: [{
                                data: [35, 25, 20, 15, 5],
                                backgroundColor: [
                                    'rgba(59, 130, 246, 0.9)',
                                    'rgba(16, 185, 129, 0.9)',
                                    'rgba(245, 158, 11, 0.9)',
                                    'rgba(239, 68, 68, 0.9)',
                                    'rgba(139, 92, 246, 0.9)'
                                ]
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { 
                                    position: 'right',
                                    labels: {
                                        padding: 10,
                                        font: { size: 11 }
                                    }
                                }
                            }
                        }
                    });
                }
            }

            // Dossiê Comercial
            function openDosseComercial() {
                document.getElementById('modalDosseComercial').classList.remove('hidden');
            }

            function closeDosseComercial() {
                document.getElementById('modalDosseComercial').classList.add('hidden');
            }

            // Other modal functions
            function showJornadasRisco() {
                alert('Abrindo análise detalhada de 31 jornadas em risco...');
            }

            function showOPMEDetail(code) {
                alert('Abrindo detalhes do OPME: ' + code);
            }

            function showExtratoKPI(type) {
                alert('Abrindo extrato detalhado: ' + type);
            }

            function novoRecurso() {
                alert('Abrindo formulário para novo recurso de glosa...');
            }
        </script>
    </body>
    </html>
  `)
}