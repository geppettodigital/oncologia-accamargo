import { Hono } from 'hono'
import { html } from 'hono/html'

export const wellnessPage = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bem-Estar e Apoio - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen flex flex-col">
        <!-- Header -->
        <header class="bg-white shadow-sm border-b border-gray-200">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <a href="/" class="flex items-center">
                            <img src="/static/logo.svg" alt="Logo" class="logo-icon">
                            <span class="text-xl font-bold text-gray-800 ml-2">Bem-Estar e Apoio Psicológico</span>
                        </a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <span class="text-sm text-gray-600">Psic. Ana Costa</span>
                        <button class="text-gray-600 hover:text-gray-800">
                            <i class="far fa-bell text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Welcome Message -->
            <div class="bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl p-6 text-white mb-8">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl font-bold mb-2">Centro de Bem-Estar e Suporte Emocional</h1>
                        <p class="opacity-90">"Um corpo doente precisa de uma mente saudável para potencializar sua cura"</p>
                    </div>
                    <img src="/static/logo.svg" alt="Logo" class="w-20 h-20 opacity-50">
                </div>
            </div>

            <!-- Emotional Health Alerts -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                    <div class="flex items-center">
                        <i class="far fa-exclamation-triangle text-emerald-600 text-xl mr-3"></i>
                        <div>
                            <p class="font-semibold text-red-800">Atenção Urgente</p>
                            <p class="text-2xl font-bold text-red-600">3 pacientes</p>
                            <p class="text-xs text-gray-600">Risco alto de crise emocional</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                    <div class="flex items-center">
                        <i class="far fa-exclamation-circle text-lime-600 text-xl mr-3"></i>
                        <div>
                            <p class="font-semibold text-yellow-800">Monitoramento</p>
                            <p class="text-2xl font-bold text-lime-700">12 pacientes</p>
                            <p class="text-xs text-gray-600">Necessitam acompanhamento</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                    <div class="flex items-center">
                        <i class="far fa-check-circle text-green-500 text-xl mr-3"></i>
                        <div>
                            <p class="font-semibold text-green-800">Estáveis</p>
                            <p class="text-2xl font-bold text-green-600">45 pacientes</p>
                            <p class="text-xs text-gray-600">Bem-estar adequado</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Patient Wellness Dashboard -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <!-- High Risk Patients -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-user-friends text-cyan-600 mr-2"></i>
                        Pacientes em Acompanhamento Intensivo
                    </h3>
                    
                    <div class="space-y-3">
                        <div class="border rounded-lg p-3 bg-red-50">
                            <div class="flex items-start justify-between">
                                <div>
                                    <p class="font-semibold">João Silva</p>
                                    <p class="text-sm text-gray-600">Depressão: 8/10 | Ansiedade: 9/10</p>
                                    <div class="mt-2">
                                        <span class="text-xs bg-emerald-100 text-red-700 px-2 py-1 rounded">
                                            <i class="far fa-lightbulb"></i> Ideação suicida
                                        </span>
                                        <span class="text-xs bg-teal-100 text-purple-700 px-2 py-1 rounded ml-1">
                                            <i class="far fa-calendar"></i> Sessão hoje 14h
                                        </span>
                                    </div>
                                </div>
                                <button class="text-emerald-600 hover:text-red-600">
                                    <i class="far fa-phone-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="border rounded-lg p-3 bg-yellow-50">
                            <div class="flex items-start justify-between">
                                <div>
                                    <p class="font-semibold">Maria Santos</p>
                                    <p class="text-sm text-gray-600">Depressão: 6/10 | Ansiedade: 7/10</p>
                                    <div class="mt-2">
                                        <span class="text-xs bg-lime-100 text-yellow-700 px-2 py-1 rounded">
                                            <i class="far fa-moon"></i> Insônia severa
                                        </span>
                                    </div>
                                </div>
                                <button class="text-green-600 hover:text-green-700">
                                    <i class="far fa-comment"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Support Groups -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-users text-teal-600 mr-2"></i>
                        Grupos de Apoio Ativos
                    </h3>
                    
                    <div class="space-y-3">
                        <div class="border rounded-lg p-3 hover:bg-gray-50">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-semibold text-purple-700">Grupo Mama</p>
                                    <p class="text-sm text-gray-600">12 participantes</p>
                                    <p class="text-xs text-gray-500 mt-1">
                                        <i class="far fa-clock"></i> Próximo: Quinta 14h
                                    </p>
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-teal-700">92%</div>
                                    <p class="text-xs text-gray-600">Satisfação</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="border rounded-lg p-3 hover:bg-gray-50">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-semibold text-blue-700">Mindfulness</p>
                                    <p class="text-sm text-gray-600">8 participantes</p>
                                    <p class="text-xs text-gray-500 mt-1">
                                        <i class="far fa-clock"></i> Diário às 10h
                                    </p>
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-green-700">88%</div>
                                    <p class="text-xs text-gray-600">Adesão</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="border rounded-lg p-3 hover:bg-gray-50">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-semibold text-pink-700">Família & Cuidadores</p>
                                    <p class="text-sm text-gray-600">20 participantes</p>
                                    <p class="text-xs text-gray-500 mt-1">
                                        <i class="far fa-clock"></i> Sábado 10h
                                    </p>
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-cyan-700">95%</div>
                                    <p class="text-xs text-gray-600">Satisfação</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Wellness Activities -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
                <h3 class="font-bold text-gray-800 mb-4">
                    <img src="/static/logo.svg" alt="Logo" class="w-6 h-6 inline mr-2">
                    Atividades de Bem-Estar da Semana
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div class="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                        <i class="far fa-spa text-3xl text-teal-600 mb-2"></i>
                        <p class="font-semibold">Yoga</p>
                        <p class="text-xs text-gray-600">Seg/Qua/Sex - 8h</p>
                        <p class="text-xs mt-2">15 inscritos</p>
                    </div>
                    
                    <div class="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                        <i class="far fa-lightbulb text-3xl text-green-600 mb-2"></i>
                        <p class="font-semibold">Meditação</p>
                        <p class="text-xs text-gray-600">Diário - 10h e 16h</p>
                        <p class="text-xs mt-2">22 inscritos</p>
                    </div>
                    
                    <div class="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                        <i class="far fa-palette text-3xl text-green-500 mb-2"></i>
                        <p class="font-semibold">Arte-terapia</p>
                        <p class="text-xs text-gray-600">Terça - 14h</p>
                        <p class="text-xs mt-2">8 inscritos</p>
                    </div>
                    
                    <div class="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                        <i class="far fa-music text-3xl text-lime-600 mb-2"></i>
                        <p class="font-semibold">Musicoterapia</p>
                        <p class="text-xs text-gray-600">Quinta - 15h</p>
                        <p class="text-xs mt-2">10 inscritos</p>
                    </div>
                </div>
            </div>

            <!-- AI Emotional Risk Prediction -->
            <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border border-purple-200">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="far fa-cog text-teal-600 mr-2"></i>
                    Predição de Risco Emocional (IA)
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                            <p class="font-semibold text-gray-700">Próximas 24h</p>
                            <i class="far fa-clock text-emerald-600"></i>
                        </div>
                        <p class="text-3xl font-bold text-red-600">2</p>
                        <p class="text-sm text-gray-600">pacientes em risco</p>
                        <button class="mt-2 text-sm text-green-600 hover:text-green-700">
                            Ver detalhes →
                        </button>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                            <p class="font-semibold text-gray-700">Próxima Semana</p>
                            <i class="far fa-calendar text-lime-600"></i>
                        </div>
                        <p class="text-3xl font-bold text-lime-700">8</p>
                        <p class="text-sm text-gray-600">necessitam intervenção</p>
                        <button class="mt-2 text-sm text-green-600 hover:text-green-700">
                            Agendar sessões →
                        </button>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                            <p class="font-semibold text-gray-700">Melhoria Detectada</p>
                            <i class="far fa-smile text-green-500"></i>
                        </div>
                        <p class="text-3xl font-bold text-green-600">15</p>
                        <p class="text-sm text-gray-600">pacientes melhorando</p>
                        <button class="mt-2 text-sm text-green-600 hover:text-green-700">
                            Celebrar progresso →
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

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    </body>
    </html>
  `)
}