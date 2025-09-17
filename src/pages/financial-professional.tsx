import { html } from 'hono/html'

export const financialProfessionalPage = (c: any) => {
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
            
            .metric-sparkline {
                stroke: url(#gradient-sparkline);
                fill: url(#gradient-sparkline-fill);
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
        </style>
    </head>
    <body class="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 min-h-screen">
        
        <!-- SVG Gradients Definition -->
        <svg width="0" height="0" class="hidden">
            <defs>
                <linearGradient id="gradient-sparkline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="gradient-sparkline-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.2" />
                    <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.05" />
                </linearGradient>
            </defs>
        </svg>

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
                        <button onclick="openDashboardCompleto()" class="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold text-sm">
                            <i class="fas fa-chart-line mr-2"></i>Dashboard Completo
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

            <!-- 5 KPIs Premium Cards with Click Actions -->
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
                                    <div>
                                        <canvas id="causaChart" height="200"></canvas>
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
                                <div class="mt-4 p-4 bg-gray-50 rounded-xl">
                                    <p class="text-xs text-gray-600">
                                        <i class="fas fa-info-circle mr-1"></i>
                                        Análise baseada em 142 ocorrências dos últimos 30 dias. Recomenda-se ação imediata nos casos de documentação incompleta.
                                    </p>
                                </div>
                            </div>

                            <!-- Hidden tabs content placeholders -->
                            <div id="content-convenio" class="tab-content hidden">
                                <div id="convenioChart"></div>
                            </div>
                            <div id="content-unidade" class="tab-content hidden">
                                <div id="unidadeChart"></div>
                            </div>
                            <div id="content-tendencia" class="tab-content hidden">
                                <div id="tendenciaChart"></div>
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
                                    <!-- Additional OPME rows here... (similar structure) -->
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="mt-5 flex justify-between items-center">
                            <p class="text-sm text-gray-600">
                                Total controlado: <span class="font-bold text-gray-900 text-lg">R$ 567.890</span>
                            </p>
                            <div class="flex space-x-2">
                                <button class="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-sm">
                                    ← Anterior
                                </button>
                                <button class="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm">1</button>
                                <button class="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-sm">2</button>
                                <button class="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-sm">
                                    Próximo →
                                </button>
                            </div>
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
                            <div class="flex justify-between items-center">
                                <span class="text-sm opacity-90">Redução Tempo</span>
                                <span class="font-bold text-lg">R$ 380K</span>
                            </div>
                        </div>
                        <div class="mt-5 pt-4 border-t border-white/20">
                            <div class="flex justify-between items-center">
                                <span class="text-xs opacity-75">Período: 12 meses</span>
                                <span class="text-sm font-bold">Total: R$ 3.64M</span>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Actions Premium -->
                    <div class="glass-premium rounded-2xl p-6 shadow-xl">
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Ações Rápidas</h3>
                        <div class="space-y-2">
                            <button onclick="novoRecurso()" class="w-full text-left px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 rounded-xl transition-all flex items-center justify-between group">
                                <span class="text-sm font-semibold text-blue-700">
                                    <i class="fas fa-file-medical mr-2"></i>
                                    Abrir Recurso de Glosa
                                </span>
                                <i class="fas fa-arrow-right text-blue-400 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                            <button onclick="exportarRelatorio()" class="w-full text-left px-4 py-3 bg-gradient-to-r from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 rounded-xl transition-all flex items-center justify-between group">
                                <span class="text-sm font-semibold text-green-700">
                                    <i class="fas fa-download mr-2"></i>
                                    Exportar Relatório
                                </span>
                                <i class="fas fa-arrow-right text-green-400 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                            <button onclick="analisarTendencias()" class="w-full text-left px-4 py-3 bg-gradient-to-r from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200/50 rounded-xl transition-all flex items-center justify-between group">
                                <span class="text-sm font-semibold text-purple-700">
                                    <i class="fas fa-chart-line mr-2"></i>
                                    Análise de Tendências
                                </span>
                                <i class="fas fa-arrow-right text-purple-400 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal: Dashboard Completo (Professional) -->
        <div id="dashboardCompleto" class="fixed inset-0 z-50 hidden">
            <div class="modal-backdrop fixed inset-0" onclick="closeDashboardCompleto()"></div>
            <div class="flex items-center justify-center min-h-screen p-4">
                <div class="modal-content relative rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden animate-slide-in">
                    <div class="sticky top-0 bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-900">Dashboard Executivo Completo</h2>
                            <p class="text-sm text-gray-500 mt-1">Visão consolidada de performance financeira</p>
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

                        <!-- Advanced Charts Grid -->
                        <div class="grid grid-cols-2 gap-6 mb-8">
                            <div class="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 class="font-bold text-gray-900 mb-4">Evolução Financeira - 12 Meses</h4>
                                <canvas id="evolucaoFinanceira" height="200"></canvas>
                            </div>
                            <div class="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 class="font-bold text-gray-900 mb-4">Distribuição de Custos por Categoria</h4>
                                <canvas id="distribuicaoCustos" height="200"></canvas>
                            </div>
                        </div>

                        <!-- Integrated Portals Metrics -->
                        <div class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                            <h4 class="font-bold text-gray-900 mb-5">Métricas Integradas dos Portais</h4>
                            <div class="grid grid-cols-4 gap-4">
                                <div class="bg-white rounded-xl p-5 shadow-sm">
                                    <div class="flex items-center mb-3">
                                        <div class="p-2 bg-blue-100 rounded-lg mr-3">
                                            <i class="fas fa-stethoscope text-blue-600"></i>
                                        </div>
                                        <h5 class="font-semibold text-gray-800">Portal Médico</h5>
                                    </div>
                                    <div class="space-y-2 text-sm">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Procedimentos:</span>
                                            <span class="font-semibold">1.234</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Taxa Sucesso:</span>
                                            <span class="font-semibold text-green-600">94%</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Custo Médio:</span>
                                            <span class="font-semibold">R$ 8.5K</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white rounded-xl p-5 shadow-sm">
                                    <div class="flex items-center mb-3">
                                        <div class="p-2 bg-green-100 rounded-lg mr-3">
                                            <i class="fas fa-user-injured text-green-600"></i>
                                        </div>
                                        <h5 class="font-semibold text-gray-800">Portal Paciente</h5>
                                    </div>
                                    <div class="space-y-2 text-sm">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Ativos:</span>
                                            <span class="font-semibold">847</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Adesão:</span>
                                            <span class="font-semibold text-green-600">87%</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Satisfação:</span>
                                            <span class="font-semibold">4.8/5</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white rounded-xl p-5 shadow-sm">
                                    <div class="flex items-center mb-3">
                                        <div class="p-2 bg-purple-100 rounded-lg mr-3">
                                            <i class="fas fa-microscope text-purple-600"></i>
                                        </div>
                                        <h5 class="font-semibold text-gray-800">Portal Pesquisa</h5>
                                    </div>
                                    <div class="space-y-2 text-sm">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Estudos:</span>
                                            <span class="font-semibold">23</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Participantes:</span>
                                            <span class="font-semibold">456</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Investimento:</span>
                                            <span class="font-semibold">R$ 2.3M</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white rounded-xl p-5 shadow-sm">
                                    <div class="flex items-center mb-3">
                                        <div class="p-2 bg-orange-100 rounded-lg mr-3">
                                            <i class="fas fa-spa text-orange-600"></i>
                                        </div>
                                        <h5 class="font-semibold text-gray-800">Portal Bem-Estar</h5>
                                    </div>
                                    <div class="space-y-2 text-sm">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Atividades:</span>
                                            <span class="font-semibold">156</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Engajamento:</span>
                                            <span class="font-semibold text-green-600">78%</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Bem-estar:</span>
                                            <span class="font-semibold">8.2/10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal: Jornadas em Risco -->
        <div id="modalJornadasRisco" class="fixed inset-0 z-50 hidden">
            <div class="modal-backdrop fixed inset-0" onclick="closeJornadasRisco()"></div>
            <div class="flex items-center justify-center min-h-screen p-4">
                <div class="modal-content relative rounded-2xl max-w-6xl w-full max-h-[85vh] overflow-hidden">
                    <div class="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                        <div>
                            <h2 class="text-xl font-bold text-gray-900">Jornadas em Risco - Análise Preditiva</h2>
                            <p class="text-sm text-gray-500">31 pacientes identificados com alto risco de glosas</p>
                        </div>
                        <button onclick="closeJornadasRisco()" class="p-2 hover:bg-gray-100 rounded-xl">
                            <i class="fas fa-times text-gray-500"></i>
                        </button>
                    </div>
                    <div class="p-6 overflow-y-auto" style="max-height: calc(85vh - 80px);">
                        <div class="grid grid-cols-1 gap-4">
                            <!-- Patient Risk Card Example -->
                            <div class="bg-white border border-red-200 rounded-xl p-4 hover:shadow-lg transition-all">
                                <div class="flex justify-between items-start">
                                    <div class="flex items-start space-x-4">
                                        <div class="p-3 bg-red-100 rounded-xl">
                                            <i class="fas fa-user-injured text-red-600 text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-gray-900">Maria Silva - ID: #PAC2024001</h4>
                                            <p class="text-sm text-gray-600 mt-1">Oncologia • Dr. Roberto Santos</p>
                                            <div class="mt-2 space-y-1">
                                                <p class="text-xs text-gray-500">
                                                    <i class="fas fa-calendar mr-1"></i>Internação: 15/09/2024 (12 dias)
                                                </p>
                                                <p class="text-xs text-gray-500">
                                                    <i class="fas fa-procedures mr-1"></i>Procedimento: Quimioterapia Ciclo 3
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <div class="mb-2">
                                            <span class="text-2xl font-bold text-red-600">R$ 45.2K</span>
                                            <p class="text-xs text-gray-500">Valor em risco</p>
                                        </div>
                                        <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                                            89% probabilidade
                                        </span>
                                    </div>
                                </div>
                                <div class="mt-4 p-3 bg-red-50 rounded-lg">
                                    <p class="text-xs font-semibold text-red-800 mb-1">Principais riscos identificados:</p>
                                    <ul class="text-xs text-red-700 space-y-0.5">
                                        <li>• Documentação incompleta do procedimento</li>
                                        <li>• Autorização prévia pendente</li>
                                        <li>• OPME sem justificativa técnica</li>
                                    </ul>
                                </div>
                                <div class="mt-3 flex space-x-2">
                                    <button class="px-3 py-1.5 bg-red-600 text-white rounded-lg text-xs font-semibold hover:bg-red-700">
                                        <i class="fas fa-exclamation-triangle mr-1"></i>Ação Imediata
                                    </button>
                                    <button class="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold hover:bg-gray-50">
                                        Ver Detalhes
                                    </button>
                                </div>
                            </div>
                            <!-- More patient cards... -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal: OPME Detail -->
        <div id="modalOPMEDetail" class="fixed inset-0 z-50 hidden">
            <div class="modal-backdrop fixed inset-0" onclick="closeOPMEDetail()"></div>
            <div class="flex items-center justify-center min-h-screen p-4">
                <div class="modal-content relative rounded-2xl max-w-3xl w-full">
                    <div class="bg-white border-b px-6 py-4 flex justify-between items-center">
                        <h2 class="text-xl font-bold text-gray-900">Detalhes do Material OPME</h2>
                        <button onclick="closeOPMEDetail()" class="p-2 hover:bg-gray-100 rounded-xl">
                            <i class="fas fa-times text-gray-500"></i>
                        </button>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <h3 class="font-semibold text-gray-900 mb-3">Informações do Material</h3>
                                <dl class="space-y-2">
                                    <div class="flex justify-between py-2 border-b">
                                        <dt class="text-sm text-gray-600">Código:</dt>
                                        <dd class="text-sm font-semibold">PRO-T4-2024</dd>
                                    </div>
                                    <div class="flex justify-between py-2 border-b">
                                        <dt class="text-sm text-gray-600">Descrição:</dt>
                                        <dd class="text-sm font-semibold">Prótese Oncológica T4</dd>
                                    </div>
                                    <div class="flex justify-between py-2 border-b">
                                        <dt class="text-sm text-gray-600">Fornecedor:</dt>
                                        <dd class="text-sm font-semibold">MedTech Solutions</dd>
                                    </div>
                                    <div class="flex justify-between py-2 border-b">
                                        <dt class="text-sm text-gray-600">Valor Unitário:</dt>
                                        <dd class="text-sm font-semibold">R$ 45.000</dd>
                                    </div>
                                    <div class="flex justify-between py-2 border-b">
                                        <dt class="text-sm text-gray-600">Quantidade:</dt>
                                        <dd class="text-sm font-semibold">3 unidades</dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900 mb-3">Informações Clínicas</h3>
                                <dl class="space-y-2">
                                    <div class="flex justify-between py-2 border-b">
                                        <dt class="text-sm text-gray-600">Paciente:</dt>
                                        <dd class="text-sm font-semibold">João Carlos Silva</dd>
                                    </div>
                                    <div class="flex justify-between py-2 border-b">
                                        <dt class="text-sm text-gray-600">Médico Solicitante:</dt>
                                        <dd class="text-sm font-semibold">Dr. Roberto Mendes</dd>
                                    </div>
                                    <div class="flex justify-between py-2 border-b">
                                        <dt class="text-sm text-gray-600">Data Solicitação:</dt>
                                        <dd class="text-sm font-semibold">15/09/2024</dd>
                                    </div>
                                    <div class="flex justify-between py-2 border-b">
                                        <dt class="text-sm text-gray-600">Procedimento:</dt>
                                        <dd class="text-sm font-semibold">Artroplastia Total</dd>
                                    </div>
                                    <div class="flex justify-between py-2 border-b">
                                        <dt class="text-sm text-gray-600">Status Autorização:</dt>
                                        <dd class="text-sm font-semibold text-green-600">Aprovado</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div class="mt-6 p-4 bg-blue-50 rounded-xl">
                            <h4 class="font-semibold text-blue-900 mb-2">Justificativa Técnica</h4>
                            <p class="text-sm text-blue-800">
                                Paciente com indicação de artroplastia total devido a necrose avascular da cabeça femoral secundária 
                                ao tratamento oncológico. Material específico necessário devido às características anatômicas e 
                                necessidade de preservação óssea para possíveis intervenções futuras.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal: KPI Extrato -->
        <div id="modalKPIExtrato" class="fixed inset-0 z-50 hidden">
            <div class="modal-backdrop fixed inset-0" onclick="closeKPIExtrato()"></div>
            <div class="flex items-center justify-center min-h-screen p-4">
                <div class="modal-content relative rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden">
                    <div class="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                        <div>
                            <h2 id="kpiExtratoTitle" class="text-xl font-bold text-gray-900">Extrato Detalhado</h2>
                            <p id="kpiExtratoSubtitle" class="text-sm text-gray-500">Análise completa do período</p>
                        </div>
                        <button onclick="closeKPIExtrato()" class="p-2 hover:bg-gray-100 rounded-xl">
                            <i class="fas fa-times text-gray-500"></i>
                        </button>
                    </div>
                    <div id="kpiExtratoContent" class="p-6 overflow-y-auto" style="max-height: calc(85vh - 80px);">
                        <!-- Dynamic content based on KPI type -->
                    </div>
                </div>
            </div>
        </div>

        <script>
            // Initialize Premium Charts
            const causaCtx = document.getElementById('causaChart').getContext('2d');
            new Chart(causaCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Documentação Incompleta', 'Autorização Prévia', 'Codificação Incorreta', 'Outros'],
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
                                padding: 15,
                                font: { size: 11 }
                            }
                        }
                    }
                }
            });

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
                const options = {
                    series: [{
                        name: 'Valor Glosas',
                        data: [185000, 142000, 98000, 87000, 60200]
                    }],
                    chart: {
                        type: 'bar',
                        height: 300,
                        toolbar: { show: false }
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            dataLabels: { position: 'top' }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: val => 'R$ ' + (val/1000).toFixed(0) + 'K',
                        offsetY: -20,
                        style: { fontSize: '12px', colors: ["#304758"] }
                    },
                    xaxis: {
                        categories: ['Unimed', 'SulAmérica', 'Bradesco', 'Amil', 'Outros'],
                        position: 'bottom'
                    },
                    colors: ['#3b82f6']
                };
                new ApexCharts(document.getElementById('convenioChart'), options).render();
                window.convenioInit = true;
            }

            function initUnidadeChart() {
                const options = {
                    series: [{
                        data: [245000, 187000, 98000, 42200]
                    }],
                    chart: {
                        type: 'bar',
                        height: 300,
                        toolbar: { show: false }
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            horizontal: true,
                            distributed: true
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: val => 'R$ ' + (val/1000).toFixed(0) + 'K'
                    },
                    colors: ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
                    xaxis: {
                        categories: ['Unidade Centro', 'Unidade Sul', 'Unidade Norte', 'Unidade Oeste']
                    }
                };
                new ApexCharts(document.getElementById('unidadeChart'), options).render();
                window.unidadeInit = true;
            }

            function initTendenciaChart() {
                const options = {
                    series: [{
                        name: 'Glosas',
                        data: [450000, 470000, 460000, 485000, 475000, 487200]
                    }],
                    chart: {
                        type: 'area',
                        height: 300,
                        toolbar: { show: false }
                    },
                    dataLabels: { enabled: false },
                    stroke: { curve: 'smooth', width: 3 },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shadeIntensity: 1,
                            opacityFrom: 0.7,
                            opacityTo: 0.3
                        }
                    },
                    xaxis: {
                        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
                    },
                    colors: ['#ef4444']
                };
                new ApexCharts(document.getElementById('tendenciaChart'), options).render();
                window.tendenciaInit = true;
            }

            // Modal Functions
            function openDashboardCompleto() {
                document.getElementById('dashboardCompleto').classList.remove('hidden');
                if (!window.dashboardInit) {
                    initDashboardCharts();
                    window.dashboardInit = true;
                }
            }

            function closeDashboardCompleto() {
                document.getElementById('dashboardCompleto').classList.add('hidden');
            }

            function initDashboardCharts() {
                // Evolution Chart
                new Chart(document.getElementById('evolucaoFinanceira'), {
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
                        }
                    }
                });

                // Distribution Chart
                new Chart(document.getElementById('distribuicaoCustos'), {
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
                            legend: { position: 'right' }
                        }
                    }
                });
            }

            // Jornadas em Risco Modal
            function showJornadasRisco() {
                document.getElementById('modalJornadasRisco').classList.remove('hidden');
            }

            function closeJornadasRisco() {
                document.getElementById('modalJornadasRisco').classList.add('hidden');
            }

            // OPME Detail Modal
            function showOPMEDetail(code) {
                document.getElementById('modalOPMEDetail').classList.remove('hidden');
            }

            function closeOPMEDetail() {
                document.getElementById('modalOPMEDetail').classList.add('hidden');
            }

            // KPI Extrato Modal
            function showExtratoKPI(type) {
                const modal = document.getElementById('modalKPIExtrato');
                const title = document.getElementById('kpiExtratoTitle');
                const subtitle = document.getElementById('kpiExtratoSubtitle');
                const content = document.getElementById('kpiExtratoContent');
                
                const extratos = {
                    identificadas: {
                        title: 'Extrato de Glosas Identificadas',
                        subtitle: 'R$ 45.678 - 142 ocorrências nos últimos 30 dias',
                        content: \`
                            <div class="space-y-4">
                                <div class="bg-red-50 p-4 rounded-xl">
                                    <h4 class="font-semibold text-red-900 mb-3">Resumo Executivo</h4>
                                    <div class="grid grid-cols-3 gap-4">
                                        <div>
                                            <p class="text-sm text-red-700">Total Identificado</p>
                                            <p class="text-2xl font-bold text-red-900">R$ 45.678</p>
                                        </div>
                                        <div>
                                            <p class="text-sm text-red-700">Ocorrências</p>
                                            <p class="text-2xl font-bold text-red-900">142</p>
                                        </div>
                                        <div>
                                            <p class="text-sm text-red-700">Média por Caso</p>
                                            <p class="text-2xl font-bold text-red-900">R$ 322</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 class="font-semibold mb-3">Detalhamento por Semana</h4>
                                    <div class="space-y-2">
                                        <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                                            <span class="text-sm">Semana 1</span>
                                            <span class="font-semibold">R$ 12.300 (35 casos)</span>
                                        </div>
                                        <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                                            <span class="text-sm">Semana 2</span>
                                            <span class="font-semibold">R$ 11.200 (32 casos)</span>
                                        </div>
                                        <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                                            <span class="text-sm">Semana 3</span>
                                            <span class="font-semibold">R$ 10.878 (38 casos)</span>
                                        </div>
                                        <div class="flex justify-between p-3 bg-gray-50 rounded-lg">
                                            <span class="text-sm">Semana 4</span>
                                            <span class="font-semibold">R$ 11.300 (37 casos)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        \`
                    },
                    revertidas: {
                        title: 'Extrato de Glosas Revertidas',
                        subtitle: 'R$ 285.432 - Taxa de sucesso 85%',
                        content: \`
                            <div class="space-y-4">
                                <div class="bg-green-50 p-4 rounded-xl">
                                    <h4 class="font-semibold text-green-900 mb-3">Performance de Reversão</h4>
                                    <div class="grid grid-cols-3 gap-4">
                                        <div>
                                            <p class="text-sm text-green-700">Total Revertido</p>
                                            <p class="text-2xl font-bold text-green-900">R$ 285.432</p>
                                        </div>
                                        <div>
                                            <p class="text-sm text-green-700">Taxa Sucesso</p>
                                            <p class="text-2xl font-bold text-green-900">85%</p>
                                        </div>
                                        <div>
                                            <p class="text-sm text-green-700">Tempo Médio</p>
                                            <p class="text-2xl font-bold text-green-900">3.5 dias</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        \`
                    },
                    roi: {
                        title: 'Extrato de ROI - Retorno sobre Investimento',
                        subtitle: '5.2x de retorno - R$ 3.64M economizado',
                        content: \`
                            <div class="space-y-4">
                                <div class="bg-purple-50 p-4 rounded-xl">
                                    <h4 class="font-semibold text-purple-900 mb-3">Análise de ROI</h4>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <p class="text-sm text-purple-700">Investimento</p>
                                            <p class="text-2xl font-bold text-purple-900">R$ 700K</p>
                                        </div>
                                        <div>
                                            <p class="text-sm text-purple-700">Retorno</p>
                                            <p class="text-2xl font-bold text-purple-900">R$ 3.64M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        \`
                    }
                };
                
                const data = extratos[type] || extratos.identificadas;
                title.textContent = data.title;
                subtitle.textContent = data.subtitle;
                content.innerHTML = data.content;
                
                modal.classList.remove('hidden');
            }

            function closeKPIExtrato() {
                document.getElementById('modalKPIExtrato').classList.add('hidden');
            }

            // Quick Actions
            function novoRecurso() {
                alert('Abrindo formulário para novo recurso de glosa...');
            }

            function exportarRelatorio() {
                alert('Preparando exportação do relatório financeiro...');
            }

            function analisarTendencias() {
                alert('Abrindo análise avançada de tendências...');
            }
        </script>
    </body>
    </html>
  `)
}