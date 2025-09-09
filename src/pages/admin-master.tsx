import { Hono } from 'hono'
import { html } from 'hono/html'

export const adminMasterPage = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Master Admin - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
        <style>
            .glass-effect {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
            .gradient-text {
                background: linear-gradient(135deg, #2B5F3F 0%, #3a8f5f 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .admin-card {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .admin-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 40px rgba(43, 95, 63, 0.15);
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20 min-h-screen flex flex-col">
        <!-- Header -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Painel Master Administrator</h1>
                            <p class="text-sm text-gray-600 font-medium">Gestão Completa do Sistema • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="far fa-bell text-xl"></i>
                        </button>
                        <div class="flex items-center bg-green-100 px-3 py-1 rounded-full">
                            <i class="fas fa-user-shield text-green-600 mr-2"></i>
                            <span class="text-sm font-semibold text-green-700">Master Admin</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Stats Overview -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="glass-effect rounded-xl p-4 border border-white/50">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-2xl font-bold text-gray-800">156</p>
                            <p class="text-sm text-gray-600">Usuários Ativos</p>
                        </div>
                        <i class="fas fa-users text-3xl text-green-600 opacity-50"></i>
                    </div>
                </div>
                <div class="glass-effect rounded-xl p-4 border border-white/50">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-2xl font-bold text-gray-800">98.7%</p>
                            <p class="text-sm text-gray-600">Uptime Sistema</p>
                        </div>
                        <i class="fas fa-server text-3xl text-emerald-600 opacity-50"></i>
                    </div>
                </div>
                <div class="glass-effect rounded-xl p-4 border border-white/50">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-2xl font-bold text-gray-800">847</p>
                            <p class="text-sm text-gray-600">Processos IA/dia</p>
                        </div>
                        <i class="fas fa-brain text-3xl text-teal-600 opacity-50"></i>
                    </div>
                </div>
                <div class="glass-effect rounded-xl p-4 border border-white/50">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-2xl font-bold text-gray-800">12</p>
                            <p class="text-sm text-gray-600">Módulos Ativos</p>
                        </div>
                        <i class="fas fa-cube text-3xl text-cyan-600 opacity-50"></i>
                    </div>
                </div>
            </div>

            <!-- Main Admin Sections -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <!-- Gerenciamento de Usuários -->
                <div class="admin-card glass-effect rounded-2xl p-6 border border-white/50">
                    <div class="text-center">
                        <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                            <i class="fas fa-users-cog text-2xl text-white"></i>
                        </div>
                        <h3 class="text-lg font-bold mb-2 text-gray-800">Gerenciamento de Usuários</h3>
                        <p class="text-sm text-gray-600 mb-4">Controle de acessos, permissões e perfis</p>
                        <div class="space-y-2">
                            <button class="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                                Gerenciar Usuários
                            </button>
                            <button class="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                                Logs de Acesso
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Configuração do Sistema -->
                <div class="admin-card glass-effect rounded-2xl p-6 border border-white/50">
                    <div class="text-center">
                        <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                            <i class="fas fa-cogs text-2xl text-white"></i>
                        </div>
                        <h3 class="text-lg font-bold mb-2 text-gray-800">Configuração do Sistema</h3>
                        <p class="text-sm text-gray-600 mb-4">Parâmetros, integrações e APIs</p>
                        <div class="space-y-2">
                            <button class="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-semibold">
                                Configurações
                            </button>
                            <button class="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                                Integrações
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Gestão de Interface Tecnológica -->
                <div class="admin-card glass-effect rounded-2xl p-6 border border-white/50">
                    <div class="text-center">
                        <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg">
                            <i class="fas fa-network-wired text-2xl text-white"></i>
                        </div>
                        <h3 class="text-lg font-bold mb-2 text-gray-800">Interface Tecnológica</h3>
                        <p class="text-sm text-gray-600 mb-4">Arquitetura, performance e monitoramento</p>
                        <div class="space-y-2">
                            <button class="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-semibold">
                                Dashboard Tech
                            </button>
                            <button class="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                                Monitoramento
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- AI Training and Process Management -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <!-- Treinar IA -->
                <div class="glass-effect rounded-2xl p-8 border border-white/50 bg-gradient-to-br from-purple-50/50 to-purple-100/30">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h2 class="text-xl font-bold text-gray-800 mb-2">
                                <i class="fas fa-brain text-purple-600 mr-2"></i>
                                Treinar IA
                            </h2>
                            <p class="text-sm text-gray-600">Gestão de modelos e treinamento de algoritmos</p>
                        </div>
                        <div class="text-4xl text-purple-600 opacity-20">
                            <i class="fas fa-robot"></i>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Modelos Ativos</span>
                            <span class="text-sm font-bold text-purple-600">24</span>
                        </div>
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Acurácia Média</span>
                            <span class="text-sm font-bold text-purple-600">94.3%</span>
                        </div>
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Último Treinamento</span>
                            <span class="text-sm font-bold text-purple-600">Há 2h</span>
                        </div>
                    </div>
                    <button onclick="window.location.href='/admin/ai-training'" class="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all font-semibold shadow-lg">
                        <i class="fas fa-graduation-cap mr-2"></i>
                        Acessar Treinamento IA
                    </button>
                </div>

                <!-- Novo Processo -->
                <div class="glass-effect rounded-2xl p-8 border border-white/50 bg-gradient-to-br from-orange-50/50 to-orange-100/30">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h2 class="text-xl font-bold text-gray-800 mb-2">
                                <i class="fas fa-plus-circle text-orange-600 mr-2"></i>
                                Novo Processo
                            </h2>
                            <p class="text-sm text-gray-600">Criar e configurar novos fluxos automatizados</p>
                        </div>
                        <div class="text-4xl text-orange-600 opacity-20">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Processos Ativos</span>
                            <span class="text-sm font-bold text-orange-600">68</span>
                        </div>
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Taxa Automação</span>
                            <span class="text-sm font-bold text-orange-600">87%</span>
                        </div>
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Tempo Médio</span>
                            <span class="text-sm font-bold text-orange-600">3.2min</span>
                        </div>
                    </div>
                    <button onclick="window.location.href='/admin/new-process'" class="w-full mt-6 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all font-semibold shadow-lg">
                        <i class="fas fa-rocket mr-2"></i>
                        Criar Novo Processo
                    </button>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="glass-effect rounded-2xl p-6 border border-white/50">
                <h3 class="text-lg font-bold mb-4 text-gray-800">
                    <i class="fas fa-bolt text-yellow-600 mr-2"></i>
                    Ações Rápidas
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button class="bg-white hover:bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 transition-all">
                        <i class="fas fa-database text-2xl text-gray-600 mb-2"></i>
                        <p class="text-sm font-medium text-gray-700">Backup Sistema</p>
                    </button>
                    <button class="bg-white hover:bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 transition-all">
                        <i class="fas fa-sync-alt text-2xl text-gray-600 mb-2"></i>
                        <p class="text-sm font-medium text-gray-700">Sincronizar</p>
                    </button>
                    <button class="bg-white hover:bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 transition-all">
                        <i class="fas fa-chart-line text-2xl text-gray-600 mb-2"></i>
                        <p class="text-sm font-medium text-gray-700">Relatórios</p>
                    </button>
                    <button class="bg-white hover:bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 transition-all">
                        <i class="fas fa-shield-alt text-2xl text-gray-600 mb-2"></i>
                        <p class="text-sm font-medium text-gray-700">Segurança</p>
                    </button>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-100 border-t border-gray-200 py-4 mt-8">
            <div class="container mx-auto px-4 text-center">
                <p class="text-sm text-gray-600">
                    © 2024 ACCamargo Cancer Center - Painel Master Administrator
                </p>
            </div>
        </footer>

        <script>
            // Add interactivity here if needed
        </script>
    </body>
    </html>
  `)
}