import { Hono } from 'hono'
import { html, raw } from 'hono/html'
import { aiConcernsHTML } from '../components/ai-concerns-enhanced'

export const financialPageNew = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gestão Financeira Inteligente - ACCamargo</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <link href="/static/style.css" rel="stylesheet">
        <style>
            .glass-effect {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
            .gradient-text {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .prediction-card {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            .metric-trend-up {
                color: #10b981;
            }
            .metric-trend-down {
                color: #ef4444;
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col">
        <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Gestão Financeira Inteligente</h1>
                            <p class="text-sm text-gray-600 font-medium">Análise Preditiva com LAURA AI • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button onclick="showDashboardCompleto()" class="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all font-semibold">
                            <i class="fas fa-chart-line mr-2"></i>
                            Dashboard Completo
                        </button>
                        <a href="/" class="text-gray-600 hover:text-purple-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-purple-600 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Alerta de Predição IA -->
            <div class="prediction-card rounded-xl p-6 mb-8 shadow-xl">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="relative">
                            <i class="fas fa-brain text-4xl mr-4"></i>
                            <span class="absolute -top-1 -right-1 flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold">Análise Preditiva LAURA - Próximos 7 Dias</h2>
                            <p class="opacity-90">Potencial de glosas identificado: <span class="text-3xl font-bold">R$ 245.8K</span></p>
                            <p class="text-sm opacity-80 mt-1">31 prontuários requerem ação preventiva • Confiança: 94%</p>
                        </div>
                    </div>
                    <button onclick="showAcoesPreditivas()" class="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                        <i class="fas fa-bolt mr-2"></i>
                        Ações Preventivas
                    </button>
                </div>
            </div>

            <!-- KPIs Principais -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                <!-- Glosas Identificadas -->
                <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
                    <div class="flex items-center justify-between mb-2">
                        <i class="fas fa-exclamation-triangle text-red-500 text-2xl"></i>
                        <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                            <i class="fas fa-arrow-up text-xs"></i> 15%
                        </span>
                    </div>
                    <p class="text-sm text-gray-600">Glosas Identificadas</p>
                    <p class="text-2xl font-bold text-gray-800">R$ 487.2K</p>
                    <p class="text-xs text-gray-500 mt-1">142 ocorrências</p>
                </div>

                <!-- Glosas Revertidas -->
                <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                    <div class="flex items-center justify-between mb-2">
                        <i class="fas fa-check-circle text-green-500 text-2xl"></i>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            <i class="fas fa-arrow-up text-xs"></i> 8%
                        </span>
                    </div>
                    <p class="text-sm text-gray-600">Glosas Revertidas</p>
                    <p class="text-2xl font-bold text-gray-800">R$ 392.1K</p>
                    <p class="text-xs text-gray-500 mt-1">Taxa: 80.5%</p>
                </div>

                <!-- ROI -->
                <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                    <div class="flex items-center justify-between mb-2">
                        <i class="fas fa-chart-line text-purple-500 text-2xl"></i>
                        <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                            342%
                        </span>
                    </div>
                    <p class="text-sm text-gray-600">ROI Total</p>
                    <p class="text-2xl font-bold text-gray-800">R$ 2.4M</p>
                    <p class="text-xs text-gray-500 mt-1">Economizado</p>
                </div>

                <!-- Tempo Médio Reversão -->
                <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                    <div class="flex items-center justify-between mb-2">
                        <i class="fas fa-clock text-blue-500 text-2xl"></i>
                        <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            <i class="fas fa-arrow-down text-xs"></i> 12%
                        </span>
                    </div>
                    <p class="text-sm text-gray-600">Tempo Médio</p>
                    <p class="text-2xl font-bold text-gray-800">4.2 dias</p>
                    <p class="text-xs text-gray-500 mt-1">Para reversão</p>
                </div>

                <!-- OPME -->
                <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
                    <div class="flex items-center justify-between mb-2">
                        <i class="fas fa-boxes text-yellow-500 text-2xl"></i>
                        <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                            92%
                        </span>
                    </div>
                    <p class="text-sm text-gray-600">Taxa Aprovação OPME</p>
                    <p class="text-2xl font-bold text-gray-800">R$ 1.8M</p>
                    <p class="text-xs text-gray-500 mt-1">Materiais aprovados</p>
                </div>
            </div>

            <!-- Grid Principal -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <!-- Análise de Glosas -->
                <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-4">
                        <i class="fas fa-analytics text-purple-600 mr-2"></i>
                        Análise de Glosas - Últimos 30 Dias
                    </h3>
                    
                    <!-- Tabs -->
                    <div class="flex space-x-2 mb-4 border-b">
                        <button onclick="showGlosaTab('causas')" class="px-4 py-2 border-b-2 border-purple-600 text-purple-600 font-semibold">
                            Por Causa
                        </button>
                        <button onclick="showGlosaTab('convenio')" class="px-4 py-2 text-gray-600 hover:text-purple-600">
                            Por Convênio
                        </button>
                        <button onclick="showGlosaTab('unidade')" class="px-4 py-2 text-gray-600 hover:text-purple-600">
                            Por Unidade
                        </button>
                        <button onclick="showGlosaTab('tendencia')" class="px-4 py-2 text-gray-600 hover:text-purple-600">
                            Tendência
                        </button>
                    </div>

                    <!-- Conteúdo Tab -->
                    <div id="glosaContent">
                        <!-- Gráfico de Causas -->
                        <div class="mb-4">
                            <canvas id="glosaChart" height="100"></canvas>
                        </div>
                        
                        <!-- Lista de Causas -->
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                <div class="flex items-center">
                                    <span class="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                                    <div>
                                        <p class="font-semibold">Documentação Incompleta</p>
                                        <p class="text-sm text-gray-600">34 casos</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-red-600">R$ 142.3K</p>
                                    <button class="text-xs text-purple-600 hover:text-purple-700">
                                        <i class="fas fa-arrow-right"></i> Detalhes
                                    </button>
                                </div>
                            </div>
                            
                            <div class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                                <div class="flex items-center">
                                    <span class="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                                    <div>
                                        <p class="font-semibold">Autorização Prévia</p>
                                        <p class="text-sm text-gray-600">28 casos</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-yellow-600">R$ 98.7K</p>
                                    <button class="text-xs text-purple-600 hover:text-purple-700">
                                        <i class="fas fa-arrow-right"></i> Detalhes
                                    </button>
                                </div>
                            </div>
                            
                            <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                <div class="flex items-center">
                                    <span class="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                                    <div>
                                        <p class="font-semibold">Codificação Incorreta</p>
                                        <p class="text-sm text-gray-600">52 casos</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-blue-600">R$ 246.2K</p>
                                    <button class="text-xs text-purple-600 hover:text-purple-700">
                                        <i class="fas fa-arrow-right"></i> Detalhes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Painel de IA Preditiva -->
                <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-4">
                        <i class="fas fa-robot text-purple-600 mr-2"></i>
                        LAURA Finance AI
                    </h3>
                    
                    <!-- Score de Risco -->
                    <div class="bg-white rounded-lg p-4 mb-4">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-sm text-gray-600">Score de Risco Geral</span>
                            <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Médio-Alto</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-3 rounded-full" style="width: 72%"></div>
                        </div>
                        <p class="text-xs text-gray-500 mt-2">72% de probabilidade de glosas</p>
                    </div>

                    <!-- Alertas Preditivos -->
                    <div class="space-y-3 mb-4">
                        <div class="bg-white rounded-lg p-3 border-l-4 border-red-500">
                            <div class="flex items-start">
                                <i class="fas fa-exclamation-circle text-red-500 mr-2 mt-1"></i>
                                <div class="flex-1">
                                    <p class="font-semibold text-sm">Alto Risco - Oncologia</p>
                                    <p class="text-xs text-gray-600">15 prontuários sem autorização prévia</p>
                                    <p class="text-xs text-red-600 mt-1">Valor em risco: R$ 89.3K</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg p-3 border-l-4 border-yellow-500">
                            <div class="flex items-start">
                                <i class="fas fa-clock text-yellow-500 mr-2 mt-1"></i>
                                <div class="flex-1">
                                    <p class="font-semibold text-sm">Prazo Crítico</p>
                                    <p class="text-xs text-gray-600">8 recursos vencem em 48h</p>
                                    <p class="text-xs text-yellow-600 mt-1">Valor: R$ 34.2K</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                            <div class="flex items-start">
                                <i class="fas fa-lightbulb text-blue-500 mr-2 mt-1"></i>
                                <div class="flex-1">
                                    <p class="font-semibold text-sm">Oportunidade</p>
                                    <p class="text-xs text-gray-600">Padrão detectado em codificação</p>
                                    <p class="text-xs text-blue-600 mt-1">Economia potencial: R$ 122.5K/mês</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Ações Recomendadas -->
                    <button onclick="showRecomendacoesIA()" class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                        <i class="fas fa-magic mr-2"></i>
                        Ver 23 Recomendações IA
                    </button>
                </div>
            </div>

            <!-- Controle OPME -->
            <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-boxes text-yellow-600 mr-2"></i>
                        Controle de OPME - Materiais Especiais
                    </h3>
                    <div class="flex space-x-2">
                        <select class="px-3 py-1 border rounded-lg text-sm">
                            <option>Todos os Status</option>
                            <option>Aprovado</option>
                            <option>Em Análise</option>
                            <option>Pendente</option>
                            <option>Negado</option>
                        </select>
                        <button class="px-4 py-1 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700">
                            <i class="fas fa-filter mr-1"></i>Filtrar
                        </button>
                    </div>
                </div>

                <!-- Tabela OPME -->
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-4 py-2 text-left">Material</th>
                                <th class="px-4 py-2 text-center">Qtd</th>
                                <th class="px-4 py-2 text-right">Custo Unit.</th>
                                <th class="px-4 py-2 text-right">Total</th>
                                <th class="px-4 py-2 text-center">Status</th>
                                <th class="px-4 py-2 text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-3">
                                    <div>
                                        <p class="font-semibold">Prótese Oncológica Modular</p>
                                        <p class="text-xs text-gray-600">Paciente: João Silva | Dr. Roberto Costa</p>
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-center">1</td>
                                <td class="px-4 py-3 text-right">R$ 45.800</td>
                                <td class="px-4 py-3 text-right font-bold">R$ 45.800</td>
                                <td class="px-4 py-3 text-center">
                                    <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Aprovado</span>
                                </td>
                                <td class="px-4 py-3 text-center">
                                    <button class="text-blue-600 hover:text-blue-700">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-3">
                                    <div>
                                        <p class="font-semibold">Kit Quimioterapia Especial</p>
                                        <p class="text-xs text-gray-600">Paciente: Maria Santos | Dra. Ana Costa</p>
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-center">3</td>
                                <td class="px-4 py-3 text-right">R$ 8.200</td>
                                <td class="px-4 py-3 text-right font-bold">R$ 24.600</td>
                                <td class="px-4 py-3 text-center">
                                    <span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Em Análise</span>
                                </td>
                                <td class="px-4 py-3 text-center">
                                    <button class="text-purple-600 hover:text-purple-700">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-3">
                                    <div>
                                        <p class="font-semibold">Stent Farmacológico</p>
                                        <p class="text-xs text-gray-600">Paciente: Pedro Lima | Dr. Carlos Mendes</p>
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-center">2</td>
                                <td class="px-4 py-3 text-right">R$ 12.500</td>
                                <td class="px-4 py-3 text-right font-bold">R$ 25.000</td>
                                <td class="px-4 py-3 text-center">
                                    <span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Pendente</span>
                                </td>
                                <td class="px-4 py-3 text-center">
                                    <button class="text-red-600 hover:text-red-700">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Resumo OPME -->
                <div class="grid grid-cols-4 gap-4 mt-4 pt-4 border-t">
                    <div class="text-center">
                        <p class="text-xs text-gray-600">Total Aprovado</p>
                        <p class="font-bold text-green-600">R$ 892.3K</p>
                    </div>
                    <div class="text-center">
                        <p class="text-xs text-gray-600">Em Análise</p>
                        <p class="font-bold text-yellow-600">R$ 234.6K</p>
                    </div>
                    <div class="text-center">
                        <p class="text-xs text-gray-600">Pendente</p>
                        <p class="font-bold text-red-600">R$ 125.0K</p>
                    </div>
                    <div class="text-center">
                        <p class="text-xs text-gray-600">Taxa Aprovação</p>
                        <p class="font-bold text-purple-600">92%</p>
                    </div>
                </div>
            </div>

            <!-- ROI e Impacto -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <!-- ROI por Iniciativa -->
                <div class="bg-white rounded-xl shadow-lg p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-4">
                        <i class="fas fa-chart-pie text-green-600 mr-2"></i>
                        ROI por Iniciativa
                    </h3>
                    <canvas id="roiChart" height="150"></canvas>
                    <div class="grid grid-cols-3 gap-2 mt-4">
                        <div class="text-center p-2 bg-blue-50 rounded">
                            <p class="text-xs text-gray-600">Automação</p>
                            <p class="font-bold text-blue-600">R$ 1.2M</p>
                        </div>
                        <div class="text-center p-2 bg-green-50 rounded">
                            <p class="text-xs text-gray-600">IA Preditiva</p>
                            <p class="font-bold text-green-600">R$ 680K</p>
                        </div>
                        <div class="text-center p-2 bg-purple-50 rounded">
                            <p class="text-xs text-gray-600">Otimização</p>
                            <p class="font-bold text-purple-600">R$ 520K</p>
                        </div>
                    </div>
                </div>

                <!-- Tendências e Projeções -->
                <div class="bg-white rounded-xl shadow-lg p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-4">
                        <i class="fas fa-chart-line text-indigo-600 mr-2"></i>
                        Projeção Próximo Trimestre
                    </h3>
                    <canvas id="projectionChart" height="150"></canvas>
                    <div class="mt-4 p-3 bg-indigo-50 rounded-lg">
                        <p class="text-sm font-semibold text-indigo-800">Economia Projetada</p>
                        <p class="text-2xl font-bold text-indigo-600">R$ 3.8M</p>
                        <p class="text-xs text-gray-600 mt-1">Com 95% de confiança baseado em tendências atuais</p>
                    </div>
                </div>
            </div>

            <!-- Ansiedade de Laura - Financeira -->
            ${aiConcernsHTML('financial')}

            <!-- Modal Dashboard Completo (Hidden) -->
            <div id="dashboardCompleto" class="fixed inset-0 z-50 hidden">
                <div class="absolute inset-0 bg-black bg-opacity-50" onclick="closeDashboard()"></div>
                <div class="absolute inset-4 bg-white rounded-2xl shadow-2xl overflow-auto">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-2xl font-bold text-gray-800">
                                <i class="fas fa-chart-line text-purple-600 mr-2"></i>
                                Dashboard Financeiro Completo
                            </h2>
                            <button onclick="closeDashboard()" class="text-gray-500 hover:text-gray-700">
                                <i class="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                        
                        <!-- Conteúdo do Dashboard Completo -->
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <!-- Painel 1: Visão Consolidada -->
                            <div class="bg-gray-50 rounded-xl p-6">
                                <h3 class="font-bold text-lg mb-4">Visão Consolidada</h3>
                                <div class="space-y-3">
                                    <div class="bg-white p-3 rounded-lg">
                                        <p class="text-sm text-gray-600">Faturamento Total</p>
                                        <p class="text-xl font-bold">R$ 45.8M</p>
                                        <p class="text-xs text-green-600">+12% vs mês anterior</p>
                                    </div>
                                    <div class="bg-white p-3 rounded-lg">
                                        <p class="text-sm text-gray-600">Glosas Totais</p>
                                        <p class="text-xl font-bold">R$ 2.3M</p>
                                        <p class="text-xs text-red-600">5.02% do faturamento</p>
                                    </div>
                                    <div class="bg-white p-3 rounded-lg">
                                        <p class="text-sm text-gray-600">Recuperação</p>
                                        <p class="text-xl font-bold">R$ 1.8M</p>
                                        <p class="text-xs text-green-600">78.3% de sucesso</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Painel 2: Análise por Convênio -->
                            <div class="bg-gray-50 rounded-xl p-6">
                                <h3 class="font-bold text-lg mb-4">Top 5 Convênios</h3>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between p-2 bg-white rounded">
                                        <span class="text-sm">Unimed</span>
                                        <div class="text-right">
                                            <p class="font-bold">R$ 12.3M</p>
                                            <p class="text-xs text-gray-600">Glosa: 4.2%</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between p-2 bg-white rounded">
                                        <span class="text-sm">SulAmérica</span>
                                        <div class="text-right">
                                            <p class="font-bold">R$ 8.7M</p>
                                            <p class="text-xs text-gray-600">Glosa: 5.1%</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between p-2 bg-white rounded">
                                        <span class="text-sm">Bradesco</span>
                                        <div class="text-right">
                                            <p class="font-bold">R$ 6.4M</p>
                                            <p class="text-xs text-gray-600">Glosa: 3.8%</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between p-2 bg-white rounded">
                                        <span class="text-sm">Amil</span>
                                        <div class="text-right">
                                            <p class="font-bold">R$ 5.2M</p>
                                            <p class="text-xs text-gray-600">Glosa: 6.2%</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between p-2 bg-white rounded">
                                        <span class="text-sm">Porto Seguro</span>
                                        <div class="text-right">
                                            <p class="font-bold">R$ 3.8M</p>
                                            <p class="text-xs text-gray-600">Glosa: 4.5%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Painel 3: Métricas de Performance -->
                            <div class="bg-gray-50 rounded-xl p-6">
                                <h3 class="font-bold text-lg mb-4">Performance Operacional</h3>
                                <div class="space-y-3">
                                    <div>
                                        <div class="flex justify-between text-sm mb-1">
                                            <span>Taxa de Ocupação</span>
                                            <span class="font-bold">87%</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="bg-green-500 h-2 rounded-full" style="width: 87%"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex justify-between text-sm mb-1">
                                            <span>Ticket Médio</span>
                                            <span class="font-bold">R$ 18.5K</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="bg-blue-500 h-2 rounded-full" style="width: 72%"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex justify-between text-sm mb-1">
                                            <span>Prazo Médio Recebimento</span>
                                            <span class="font-bold">45 dias</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="bg-yellow-500 h-2 rounded-full" style="width: 65%"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex justify-between text-sm mb-1">
                                            <span>Eficiência Operacional</span>
                                            <span class="font-bold">92%</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="bg-purple-500 h-2 rounded-full" style="width: 92%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Gráficos Detalhados -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                            <div class="bg-white rounded-xl p-6 shadow">
                                <h4 class="font-bold mb-4">Evolução Mensal - Faturamento vs Glosas</h4>
                                <canvas id="dashboardChart1" height="200"></canvas>
                            </div>
                            <div class="bg-white rounded-xl p-6 shadow">
                                <h4 class="font-bold mb-4">Distribuição de Custos por Departamento</h4>
                                <canvas id="dashboardChart2" height="200"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <script>
            // Gráfico de Glosas por Causa
            const glosaCtx = document.getElementById('glosaChart').getContext('2d');
            new Chart(glosaCtx, {
                type: 'bar',
                data: {
                    labels: ['Documentação', 'Autorização', 'Codificação', 'Prazo', 'Outros'],
                    datasets: [{
                        label: 'Valor em R$ mil',
                        data: [142.3, 98.7, 246.2, 45.8, 32.1],
                        backgroundColor: [
                            'rgba(239, 68, 68, 0.8)',
                            'rgba(245, 158, 11, 0.8)',
                            'rgba(59, 130, 246, 0.8)',
                            'rgba(139, 92, 246, 0.8)',
                            'rgba(107, 114, 128, 0.8)'
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

            // Gráfico de ROI
            const roiCtx = document.getElementById('roiChart').getContext('2d');
            new Chart(roiCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Automação', 'IA Preditiva', 'Otimização OPME', 'Processos'],
                    datasets: [{
                        data: [1200, 680, 520, 400],
                        backgroundColor: [
                            'rgba(59, 130, 246, 0.8)',
                            'rgba(16, 185, 129, 0.8)',
                            'rgba(139, 92, 246, 0.8)',
                            'rgba(245, 158, 11, 0.8)'
                        ]
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

            // Gráfico de Projeção
            const projectionCtx = document.getElementById('projectionChart').getContext('2d');
            new Chart(projectionCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                    datasets: [{
                        label: 'Realizado',
                        data: [320, 380, 420, 480, 520, null],
                        borderColor: 'rgb(99, 102, 241)',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'Projetado',
                        data: [null, null, null, 480, 620, 780],
                        borderColor: 'rgb(99, 102, 241)',
                        borderDash: [5, 5],
                        backgroundColor: 'rgba(99, 102, 241, 0.05)',
                        tension: 0.4
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

            // Funções de Interface
            function showGlosaTab(tab) {
                console.log('Mostrando tab:', tab);
                // Implementar mudança de tabs
            }

            function showAcoesPreditivas() {
                alert('Abrindo painel de ações preventivas com 31 prontuários priorizados...');
            }

            function showRecomendacoesIA() {
                alert('Carregando 23 recomendações da LAURA AI...');
            }

            function showDashboardCompleto() {
                document.getElementById('dashboardCompleto').classList.remove('hidden');
                
                // Inicializar gráficos do dashboard
                setTimeout(() => {
                    // Gráfico 1 - Evolução Mensal
                    const dash1Ctx = document.getElementById('dashboardChart1');
                    if (dash1Ctx) {
                        new Chart(dash1Ctx.getContext('2d'), {
                            type: 'line',
                            data: {
                                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                                datasets: [{
                                    label: 'Faturamento',
                                    data: [42.3, 44.1, 45.8, 43.2, 44.9, 45.8],
                                    borderColor: 'rgb(16, 185, 129)',
                                    tension: 0.4
                                }, {
                                    label: 'Glosas',
                                    data: [2.1, 2.3, 2.2, 2.5, 2.4, 2.3],
                                    borderColor: 'rgb(239, 68, 68)',
                                    tension: 0.4
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false
                            }
                        });
                    }
                    
                    // Gráfico 2 - Distribuição de Custos
                    const dash2Ctx = document.getElementById('dashboardChart2');
                    if (dash2Ctx) {
                        new Chart(dash2Ctx.getContext('2d'), {
                            type: 'pie',
                            data: {
                                labels: ['Oncologia', 'Cirurgia', 'UTI', 'Diagnóstico', 'Outros'],
                                datasets: [{
                                    data: [35, 25, 20, 12, 8],
                                    backgroundColor: [
                                        'rgba(139, 92, 246, 0.8)',
                                        'rgba(59, 130, 246, 0.8)',
                                        'rgba(16, 185, 129, 0.8)',
                                        'rgba(245, 158, 11, 0.8)',
                                        'rgba(107, 114, 128, 0.8)'
                                    ]
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false
                            }
                        });
                    }
                }, 100);
            }

            function closeDashboard() {
                document.getElementById('dashboardCompleto').classList.add('hidden');
            }
        </script>
    </body>
    </html>
  `)
}