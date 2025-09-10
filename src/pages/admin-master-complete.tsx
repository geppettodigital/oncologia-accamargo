import { Hono } from 'hono'
import { html, raw } from 'hono/html'
import { aiConcernsHTML } from '../components/ai-concerns-enhanced'

export const adminMasterCompletePage = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Master Admin - Centro de Controle Total</title>
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
            .gradient-admin {
                background: linear-gradient(135deg, #14532d 0%, #16a34a 100%);
            }
            .admin-card {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: pointer;
            }
            .admin-card:hover {
                transform: translateY(-5px) scale(1.02);
                box-shadow: 0 20px 40px rgba(21, 83, 45, 0.3);
            }
            .sidebar-item {
                transition: all 0.2s ease;
            }
            .sidebar-item:hover {
                background: linear-gradient(90deg, rgba(34, 197, 94, 0.15) 0%, transparent 100%);
                padding-left: 1.5rem;
            }
            .status-online {
                animation: pulse-green 2s infinite;
            }
            @keyframes pulse-green {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
            .terminal-style {
                background: #0a1f0f;
                color: #22c55e;
                font-family: 'Courier New', monospace;
                padding: 1rem;
                border-radius: 0.5rem;
                font-size: 0.875rem;
                border: 1px solid rgba(34, 197, 94, 0.2);
            }
            /* Animações para o comparativo */
            #comparison-expanded {
                transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
            }
            #comparison-collapsed {
                animation: fadeIn 0.3s ease-in;
            }
            #comparison-container.collapsed {
                background: rgba(20, 83, 45, 0.85) !important;
            }
            @keyframes fadeIn {
                from { 
                    opacity: 0; 
                    transform: translateY(-10px); 
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
            }
            /* Hover effect no botão toggle */
            #comparison-toggle-icon {
                transition: transform 0.3s ease;
            }
            button:hover #comparison-toggle-icon {
                transform: scale(1.1);
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-green-950 via-emerald-900 to-green-950 min-h-screen flex">
        <!-- Sidebar Navigation -->
        <aside class="w-64 bg-green-950/95 backdrop-blur-lg border-r border-green-800 h-screen sticky top-0">
            <div class="p-6">
                <div class="flex items-center mb-8">
                    <i class="fas fa-shield-alt text-3xl text-emerald-500 mr-3"></i>
                    <div>
                        <h2 class="text-xl font-bold text-white">Master Control</h2>
                        <p class="text-xs text-emerald-400">v2.0.0 Enterprise</p>
                    </div>
                </div>
                
                <!-- Navigation Menu -->
                <nav class="space-y-2">
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-tachometer-alt mr-3 text-emerald-400"></i>
                        <span>Dashboard</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-users-cog mr-3 text-green-400"></i>
                        <span>Gestão de Personas</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-cogs mr-3 text-purple-400"></i>
                        <span>Processos & Workflows</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-database mr-3 text-yellow-400"></i>
                        <span>Bibliotecas & APIs</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-brain mr-3 text-pink-400"></i>
                        <span>Configuração IA</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-shield-virus mr-3 text-red-400"></i>
                        <span>Segurança & Compliance</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-chart-line mr-3 text-emerald-400"></i>
                        <span>Analytics Avançado</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-plug mr-3 text-orange-400"></i>
                        <span>Integrações</span>
                    </div>
                </nav>
                
                <!-- System Status -->
                <div class="mt-8 p-4 bg-green-900/50 rounded-lg border border-green-700/50">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-400">STATUS GERAL</span>
                        <span class="status-online w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                    <div class="text-2xl font-bold text-green-400">OPERACIONAL</div>
                    <div class="text-xs text-gray-500 mt-1">Uptime: 99.98%</div>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col">
            <!-- Top Header -->
            <header class="bg-green-950/90 backdrop-blur-lg border-b border-green-800 px-8 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <button onclick="window.location.href='/'" class="text-gray-400 hover:text-white mr-4">
                            <i class="fas fa-arrow-left"></i>
                        </button>
                        <h1 class="text-2xl font-bold text-white">
                            Centro de Controle Master Administrator
                        </h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="text-sm text-gray-400">
                            <i class="far fa-clock mr-2"></i>
                            <span id="current-time"></span>
                        </div>
                        <div class="flex items-center bg-green-900/50 px-4 py-2 rounded-full border border-green-700">
                            <i class="fas fa-user-shield text-emerald-400 mr-2"></i>
                            <span class="text-sm font-semibold text-emerald-300">Jac Fressatto</span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Main Dashboard Content -->
            <main class="flex-1 p-8 overflow-y-auto">
                <!-- Critical Metrics -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 text-white shadow-xl">
                        <div class="flex items-center justify-between mb-4">
                            <i class="fas fa-users text-3xl opacity-70"></i>
                            <span class="text-xs bg-white/20 px-2 py-1 rounded-full">+12%</span>
                        </div>
                        <div class="text-3xl font-bold">847</div>
                        <div class="text-sm opacity-90">Usuários Ativos</div>
                        <div class="mt-2 text-xs opacity-70">156 médicos • 523 pacientes • 168 staff</div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white shadow-xl">
                        <div class="flex items-center justify-between mb-4">
                            <i class="fas fa-robot text-3xl opacity-70"></i>
                            <span class="text-xs bg-white/20 px-2 py-1 rounded-full">IA ON</span>
                        </div>
                        <div class="text-3xl font-bold">2,341</div>
                        <div class="text-sm opacity-90">Processos IA/dia</div>
                        <div class="mt-2 text-xs opacity-70">LAURA: 97% accuracy</div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-6 text-white shadow-xl">
                        <div class="flex items-center justify-between mb-4">
                            <i class="fas fa-server text-3xl opacity-70"></i>
                            <span class="text-xs bg-white/20 px-2 py-1 rounded-full">EDGE</span>
                        </div>
                        <div class="text-3xl font-bold">12ms</div>
                        <div class="text-sm opacity-90">Latência Média</div>
                        <div class="mt-2 text-xs opacity-70">Cloudflare: 287 PoPs ativos</div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-lime-600 to-lime-700 rounded-xl p-6 text-white shadow-xl">
                        <div class="flex items-center justify-between mb-4">
                            <i class="fas fa-shield-alt text-3xl opacity-70"></i>
                            <span class="text-xs bg-white/20 px-2 py-1 rounded-full">LGPD</span>
                        </div>
                        <div class="text-3xl font-bold">100%</div>
                        <div class="text-sm opacity-90">Compliance</div>
                        <div class="mt-2 text-xs opacity-70">0 incidentes • ISO 27001</div>
                    </div>
                </div>

                <!-- Control Panels Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <!-- Gestão de Personas -->
                    <div class="admin-card bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700" onclick="openPersonaManager()">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-bold text-white flex items-center">
                                <i class="fas fa-users-cog mr-3 text-green-400"></i>
                                Gestão de Personas
                            </h3>
                            <button class="text-gray-400 hover:text-white">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">Médicos</span>
                                </div>
                                <span class="text-sm font-bold text-green-400">156</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">Pacientes</span>
                                </div>
                                <span class="text-sm font-bold text-blue-400">523</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">Navegadores</span>
                                </div>
                                <span class="text-sm font-bold text-purple-400">42</span>
                            </div>
                        </div>
                        <button class="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                            <i class="fas fa-user-plus mr-2"></i>
                            Adicionar Persona
                        </button>
                    </div>

                    <!-- Processos & Workflows -->
                    <div class="admin-card bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700" onclick="openProcessManager()">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-bold text-white flex items-center">
                                <i class="fas fa-cogs mr-3 text-purple-400"></i>
                                Processos & Workflows
                            </h3>
                            <button class="text-gray-400 hover:text-white">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-300">Triagem Automática</span>
                                    <span class="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded">Ativo</span>
                                </div>
                                <div class="w-full bg-green-800 rounded-full h-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 87%"></div>
                                </div>
                            </div>
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-300">Navegação Pacientes</span>
                                    <span class="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Running</span>
                                </div>
                                <div class="w-full bg-green-800 rounded-full h-2">
                                    <div class="bg-blue-500 h-2 rounded-full" style="width: 92%"></div>
                                </div>
                            </div>
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-300">Análise Glosas</span>
                                    <span class="text-xs bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded">Queue: 23</span>
                                </div>
                                <div class="w-full bg-green-800 rounded-full h-2">
                                    <div class="bg-yellow-500 h-2 rounded-full" style="width: 65%"></div>
                                </div>
                            </div>
                        </div>
                        <button class="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                            <i class="fas fa-plus-circle mr-2"></i>
                            Novo Workflow
                        </button>
                    </div>

                    <!-- Configuração IA -->
                    <div class="admin-card bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700" onclick="openAIConfig()">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-bold text-white flex items-center">
                                <i class="fas fa-brain mr-3 text-pink-400"></i>
                                Configuração IA
                            </h3>
                            <button class="text-gray-400 hover:text-white">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-300">LAURA Assistant</span>
                                    <div class="flex items-center">
                                        <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                        <span class="text-xs text-green-400">Online</span>
                                    </div>
                                </div>
                                <div class="mt-2 text-xs text-gray-500">
                                    Accuracy: 97% • Latency: 234ms
                                </div>
                            </div>
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-300">Modelos Ativos</span>
                                    <span class="text-sm font-bold text-pink-400">8</span>
                                </div>
                                <div class="mt-2 text-xs text-gray-500">
                                    GPT-4 • Claude-3 • Gemini • Local LLMs
                                </div>
                            </div>
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-300">API Calls Hoje</span>
                                    <span class="text-sm font-bold text-emerald-400">12,847</span>
                                </div>
                                <div class="mt-2 text-xs text-gray-500">
                                    Custo: R$ 127.34 • Limite: R$ 500/dia
                                </div>
                            </div>
                        </div>
                        <button class="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition-colors">
                            <i class="fas fa-sliders-h mr-2"></i>
                            Ajustar Parâmetros
                        </button>
                    </div>
                </div>

                <!-- System Monitoring -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <!-- Real-time Logs -->
                    <div class="bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center justify-between">
                            <span>
                                <i class="fas fa-terminal mr-3 text-emerald-400"></i>
                                Logs em Tempo Real
                            </span>
                            <button class="text-xs bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full hover:bg-emerald-600/30">
                                <i class="fas fa-pause mr-1"></i>
                                Pausar
                            </button>
                        </h3>
                        <div class="terminal-style h-64 overflow-y-auto" id="log-container">
                            <div>[2025-01-09 14:23:01] INFO: Novo usuário autenticado - ID: 523</div>
                            <div>[2025-01-09 14:23:02] INFO: LAURA processou consulta - Tempo: 234ms</div>
                            <div>[2025-01-09 14:23:05] WARNING: Alta carga detectada - CPU: 78%</div>
                            <div>[2025-01-09 14:23:08] INFO: Backup automático iniciado</div>
                            <div>[2025-01-09 14:23:12] SUCCESS: Glosa prevenida - Valor: R$ 4,250.00</div>
                            <div>[2025-01-09 14:23:15] INFO: Navegador atribuído - Paciente: #1247</div>
                            <div>[2025-01-09 14:23:18] INFO: Triagem automática completada</div>
                            <div>[2025-01-09 14:23:21] SUCCESS: Deploy em produção - v2.1.3</div>
                        </div>
                    </div>

                    <!-- API & Integrations Status -->
                    <div class="bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center">
                            <i class="fas fa-plug mr-3 text-orange-400"></i>
                            Status de Integrações
                        </h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">Cloudflare Workers</span>
                                </div>
                                <span class="text-xs text-green-400">287 PoPs • 12ms</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">D1 Database</span>
                                </div>
                                <span class="text-xs text-green-400">523 MB • 99.9% uptime</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">OpenAI API</span>
                                </div>
                                <span class="text-xs text-green-400">GPT-4 • 234ms avg</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">HIS/RIS Legacy</span>
                                </div>
                                <span class="text-xs text-yellow-400">Sync delay: 5min</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">WhatsApp Business</span>
                                </div>
                                <span class="text-xs text-green-400">1,247 msgs hoje</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Advanced Controls -->
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
                    <button onclick="openDatabaseManager()" class="admin-card bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 text-white shadow-xl">
                        <i class="fas fa-database text-3xl mb-3"></i>
                        <div class="font-bold">Database Manager</div>
                        <div class="text-xs opacity-80 mt-1">D1 • KV • R2 Storage</div>
                    </button>
                    
                    <button onclick="openSecurityPanel()" class="admin-card bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white shadow-xl">
                        <i class="fas fa-shield-virus text-3xl mb-3"></i>
                        <div class="font-bold">Segurança</div>
                        <div class="text-xs opacity-80 mt-1">LGPD • ISO 27001 • HIPAA</div>
                    </button>
                    
                    <button onclick="openAnalytics()" class="admin-card bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 text-white shadow-xl">
                        <i class="fas fa-chart-line text-3xl mb-3"></i>
                        <div class="font-bold">Analytics</div>
                        <div class="text-xs opacity-80 mt-1">BI • Reports • Insights</div>
                    </button>
                    
                    <button onclick="openSystemConfig()" class="admin-card bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl p-6 text-white shadow-xl">
                        <i class="fas fa-tools text-3xl mb-3"></i>
                        <div class="font-bold">Configurações</div>
                        <div class="text-xs opacity-80 mt-1">Sistema • Deploy • CI/CD</div>
                    </button>
                </div>

                <!-- Ansiedade de Laura - Admin Version -->
                <div class="mb-8">
                    ${raw(aiConcernsHTML('admin'))}
                </div>

                <!-- Gráfico Comparativo Homem x Máquina - Master Admin -->
                <div id="comparison-container" class="bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700 mb-8 transition-all duration-500">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-lg font-bold text-white flex items-center">
                            <i class="fas fa-chart-line mr-3 text-emerald-400"></i>
                            Comparativo de Performance: Homem x Máquina
                        </h3>
                        <div class="flex items-center gap-4">
                            <!-- Indicadores (visível quando expandido) -->
                            <div id="comparison-indicators" class="flex items-center gap-3 text-sm transition-opacity duration-300">
                                <span class="flex items-center gap-2">
                                    <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                                    <span class="text-gray-300">Ações Humanas</span>
                                </span>
                                <span class="flex items-center gap-2">
                                    <span class="w-3 h-3 bg-orange-500 rounded-full"></span>
                                    <span class="text-gray-300">Processos IA</span>
                                </span>
                            </div>
                            <!-- Período -->
                            <select id="comparison-period" class="bg-green-800 text-white text-sm px-3 py-1 rounded-lg border border-green-600 transition-opacity duration-300">
                                <option>Última Semana</option>
                                <option>Último Mês</option>
                                <option>Último Trimestre</option>
                            </select>
                            <!-- Botão de Recolher/Expandir -->
                            <button onclick="toggleComparison()" class="text-gray-400 hover:text-emerald-400 transition-all duration-300 p-2 rounded-lg hover:bg-green-800/50" title="Recolher/Expandir">
                                <i id="comparison-toggle-icon" class="fas fa-compress-alt text-lg"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Conteúdo Expansível -->
                    <div id="comparison-expanded" class="transition-all duration-500">
                        <!-- Grid de Métricas e Gráfico -->
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Métricas Comparativas -->
                        <div class="space-y-4">
                            <!-- Eficiência -->
                            <div class="bg-green-950/50 rounded-lg p-4">
                                <div class="text-xs text-gray-400 mb-2">EFICIÊNCIA OPERACIONAL</div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-green-400">Homem</span>
                                    <span class="text-lg font-bold text-white">87%</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-orange-400">Máquina</span>
                                    <span class="text-lg font-bold text-white">94%</span>
                                </div>
                                <div class="mt-2 text-xs text-emerald-400">
                                    <i class="fas fa-arrow-up"></i> +7% favor IA
                                </div>
                            </div>

                            <!-- Velocidade -->
                            <div class="bg-green-950/50 rounded-lg p-4">
                                <div class="text-xs text-gray-400 mb-2">TEMPO MÉDIO RESPOSTA</div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-green-400">Homem</span>
                                    <span class="text-lg font-bold text-white">4.2min</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-orange-400">Máquina</span>
                                    <span class="text-lg font-bold text-white">0.3s</span>
                                </div>
                                <div class="mt-2 text-xs text-emerald-400">
                                    <i class="fas fa-rocket"></i> 840x mais rápido
                                </div>
                            </div>

                            <!-- Precisão -->
                            <div class="bg-green-950/50 rounded-lg p-4">
                                <div class="text-xs text-gray-400 mb-2">TAXA DE ACERTO</div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-green-400">Homem</span>
                                    <span class="text-lg font-bold text-white">92%</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-orange-400">Máquina</span>
                                    <span class="text-lg font-bold text-white">97%</span>
                                </div>
                                <div class="mt-2 text-xs text-emerald-400">
                                    <i class="fas fa-check-circle"></i> +5% precisão
                                </div>
                            </div>
                        </div>

                        <!-- Gráfico Principal -->
                        <div class="lg:col-span-2 bg-green-950/30 rounded-lg p-4">
                            <canvas id="admin-comparison-chart" class="w-full h-64"></canvas>
                        </div>
                    </div>

                    <!-- Insights e Recomendações -->
                    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-gradient-to-r from-green-950/50 to-emerald-950/50 rounded-lg p-4 border border-green-700/50">
                            <h4 class="text-sm font-semibold text-emerald-400 mb-2 flex items-center">
                                <i class="fas fa-lightbulb mr-2"></i>
                                Insights Detectados
                            </h4>
                            <ul class="space-y-2 text-xs text-gray-300">
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-emerald-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>IA supera humanos em 78% das tarefas repetitivas</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-emerald-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>Decisões complexas ainda requerem supervisão humana</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-emerald-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>Economia de R$ 2.4M em glosas via automação</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-gradient-to-r from-orange-950/50 to-yellow-950/50 rounded-lg p-4 border border-orange-700/50">
                            <h4 class="text-sm font-semibold text-orange-400 mb-2 flex items-center">
                                <i class="fas fa-robot mr-2"></i>
                                Otimizações Sugeridas
                            </h4>
                            <ul class="space-y-2 text-xs text-gray-300">
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-orange-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>Expandir automação para triagem inicial</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-orange-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>Implementar ML para previsão de demanda</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-orange-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>Treinar equipe em ferramentas de IA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div><!-- Fim do comparison-expanded -->

                    <!-- Versão Recolhida (inicialmente oculta) -->
                    <div id="comparison-collapsed" class="hidden">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-6">
                                <!-- Resumo compacto das métricas -->
                                <div class="flex items-center gap-4 text-sm">
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-user text-green-400"></i>
                                        <span class="text-gray-400">Eficiência Humana:</span>
                                        <span class="text-green-400 font-bold">87%</span>
                                    </div>
                                    <div class="text-gray-600">|</div>
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-robot text-orange-400"></i>
                                        <span class="text-gray-400">Eficiência IA:</span>
                                        <span class="text-orange-400 font-bold">94%</span>
                                    </div>
                                    <div class="text-gray-600">|</div>
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-trending-up text-emerald-400"></i>
                                        <span class="text-gray-400">Vantagem IA:</span>
                                        <span class="text-emerald-400 font-bold">+7%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Status resumido -->
                            <div class="flex items-center gap-3">
                                <span class="text-sm text-gray-400">Economia Gerada:</span>
                                <span class="text-lg font-bold text-emerald-400">R$ 2.4M</span>
                                <div class="flex items-center gap-2 ml-4">
                                    <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                    <span class="text-sm text-emerald-400">Otimizado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <!-- Scripts -->
        <script>
            // Initialize Admin Comparison Chart
            document.addEventListener('DOMContentLoaded', function() {
                const ctx = document.getElementById('admin-comparison-chart');
                if (ctx && typeof Chart !== 'undefined') {
                    new Chart(ctx.getContext('2d'), {
                        type: 'line',
                        data: {
                            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
                            datasets: [{
                                label: 'Ações Humanas',
                                data: [145, 162, 178, 195, 203, 189, 176],
                                borderColor: '#10B981',
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                borderWidth: 3,
                                tension: 0.4,
                                pointRadius: 4,
                                pointHoverRadius: 6,
                                pointBackgroundColor: '#10B981',
                                pointBorderColor: '#fff',
                                pointBorderWidth: 2
                            }, {
                                label: 'Processos IA',
                                data: [523, 578, 612, 698, 743, 681, 625],
                                borderColor: '#FF8C00',
                                backgroundColor: 'rgba(255, 140, 0, 0.1)',
                                borderWidth: 3,
                                tension: 0.4,
                                pointRadius: 4,
                                pointHoverRadius: 6,
                                pointBackgroundColor: '#FF8C00',
                                pointBorderColor: '#fff',
                                pointBorderWidth: 2
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            interaction: {
                                mode: 'index',
                                intersect: false,
                            },
                            plugins: {
                                legend: {
                                    display: false
                                },
                                tooltip: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                    titleColor: '#fff',
                                    bodyColor: '#fff',
                                    borderColor: '#22c55e',
                                    borderWidth: 1,
                                    padding: 12,
                                    displayColors: true,
                                    callbacks: {
                                        label: function(context) {
                                            let label = context.dataset.label || '';
                                            if (label) {
                                                label += ': ';
                                            }
                                            label += context.parsed.y + ' operações';
                                            return label;
                                        }
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    grid: {
                                        color: 'rgba(34, 197, 94, 0.1)',
                                        drawBorder: false
                                    },
                                    ticks: {
                                        color: '#9CA3AF',
                                        font: {
                                            size: 11
                                        }
                                    }
                                },
                                x: {
                                    grid: {
                                        display: false
                                    },
                                    ticks: {
                                        color: '#9CA3AF',
                                        font: {
                                            size: 11
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            });

            // Estado do componente comparativo
            let comparisonState = {
                isCollapsed: false
            };

            // Função para recolher/expandir comparativo
            function toggleComparison() {
                const container = document.getElementById('comparison-container');
                const expandedContent = document.getElementById('comparison-expanded');
                const collapsedContent = document.getElementById('comparison-collapsed');
                const toggleIcon = document.getElementById('comparison-toggle-icon');
                const indicators = document.getElementById('comparison-indicators');
                const period = document.getElementById('comparison-period');
                
                comparisonState.isCollapsed = !comparisonState.isCollapsed;
                
                if (comparisonState.isCollapsed) {
                    // Recolher
                    expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
                    expandedContent.offsetHeight; // Force reflow
                    expandedContent.style.maxHeight = '0';
                    expandedContent.style.opacity = '0';
                    expandedContent.style.overflow = 'hidden';
                    
                    // Esconder indicadores e seletor quando recolhido
                    indicators.style.opacity = '0';
                    period.style.opacity = '0';
                    setTimeout(() => {
                        indicators.style.display = 'none';
                        period.style.display = 'none';
                    }, 300);
                    
                    setTimeout(() => {
                        expandedContent.classList.add('hidden');
                        collapsedContent.classList.remove('hidden');
                        collapsedContent.style.animation = 'fadeIn 0.3s ease-in';
                    }, 500);
                    
                    toggleIcon.className = 'fas fa-expand-alt text-lg';
                    container.classList.add('collapsed');
                    container.style.background = 'rgba(20, 83, 45, 0.85)'; // Mais escuro quando recolhido
                } else {
                    // Expandir
                    collapsedContent.classList.add('hidden');
                    expandedContent.classList.remove('hidden');
                    expandedContent.style.maxHeight = '0';
                    expandedContent.style.opacity = '0';
                    
                    // Mostrar indicadores e seletor quando expandido
                    indicators.style.display = 'flex';
                    period.style.display = 'block';
                    setTimeout(() => {
                        indicators.style.opacity = '1';
                        period.style.opacity = '1';
                    }, 100);
                    
                    setTimeout(() => {
                        expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
                        expandedContent.style.opacity = '1';
                        setTimeout(() => {
                            expandedContent.style.maxHeight = 'none';
                            expandedContent.style.overflow = 'visible';
                        }, 500);
                    }, 10);
                    
                    toggleIcon.className = 'fas fa-compress-alt text-lg';
                    container.classList.remove('collapsed');
                    container.style.background = ''; // Volta ao original
                }
            }

            // Update current time
            function updateTime() {
                const now = new Date();
                document.getElementById('current-time').textContent = 
                    now.toLocaleString('pt-BR', { 
                        day: '2-digit', 
                        month: '2-digit', 
                        year: 'numeric',
                        hour: '2-digit', 
                        minute: '2-digit',
                        second: '2-digit'
                    });
            }
            setInterval(updateTime, 1000);
            updateTime();

            // Simulate real-time logs
            const logMessages = [
                'INFO: Novo paciente registrado no sistema',
                'SUCCESS: Triagem automática completada com sucesso',
                'INFO: LAURA Assistant processou consulta',
                'WARNING: Pico de utilização detectado',
                'SUCCESS: Glosa prevenida - Economia registrada',
                'INFO: Backup automático realizado',
                'INFO: Sincronização com HIS completada',
                'SUCCESS: Deploy em produção finalizado',
                'INFO: Navegador atribuído a novo paciente',
                'WARNING: Limite de API próximo do threshold'
            ];

            function addRandomLog() {
                const container = document.getElementById('log-container');
                const timestamp = new Date().toLocaleString('pt-BR');
                const randomMsg = logMessages[Math.floor(Math.random() * logMessages.length)];
                const logEntry = document.createElement('div');
                logEntry.textContent = '[' + timestamp + '] ' + randomMsg;
                container.appendChild(logEntry);
                container.scrollTop = container.scrollHeight;
                
                // Keep only last 20 logs
                while (container.children.length > 20) {
                    container.removeChild(container.firstChild);
                }
            }
            setInterval(addRandomLog, 3000);

            // Control Functions
            function openPersonaManager() {
                alert('Abrindo Gerenciador de Personas...');
            }

            function openProcessManager() {
                alert('Abrindo Gerenciador de Processos...');
            }

            function openAIConfig() {
                alert('Abrindo Configurações de IA...');
            }

            function openDatabaseManager() {
                alert('Abrindo Database Manager...');
            }

            function openSecurityPanel() {
                alert('Abrindo Painel de Segurança...');
            }

            function openAnalytics() {
                alert('Abrindo Analytics Avançado...');
            }

            function openSystemConfig() {
                alert('Abrindo Configurações do Sistema...');
            }
        </script>
    </body>
    </html>
  `)
}