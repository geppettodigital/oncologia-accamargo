import { Hono } from 'hono'
import { html, raw } from 'hono/html'
import { aiConcernsHTML } from '../components/ai-concerns-enhanced'

export const patientPage = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portal do Paciente - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Portal do Paciente • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
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
            <!-- Welcome Section -->
            <div class="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white mb-8">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl font-bold mb-2">Bem-vindo ao seu Portal de Saúde</h1>
                        <p class="opacity-90">Acompanhe sua jornada de tratamento e mantenha-se informado</p>
                    </div>
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-20 h-20 opacity-50">
                </div>
            </div>

            ${raw(aiConcernsHTML('patient'))}

            <!-- Quick Actions -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <button onclick="openTriageChat()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-user-md text-green-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Auto-Triagem</p>
                    <p class="text-xs text-gray-600">Avalie seus sintomas</p>
                </button>
                
                <button onclick="showAppointments()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-calendar-check text-green-500 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Consultas</p>
                    <p class="text-xs text-gray-600">Próxima: 15/02</p>
                </button>
                
                <button onclick="reportSymptoms()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-file-medical-alt text-teal-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Relatar Sintomas</p>
                    <p class="text-xs text-gray-600">Registre como se sente</p>
                </button>
                
                <button onclick="viewSupport()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-hand-holding-medical text-cyan-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Rede de Apoio</p>
                    <p class="text-xs text-gray-600">Conecte-se</p>
                </button>
            </div>

            <!-- Three Column Layout: Journey, Symptoms, Wellness -->
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                <!-- Journey Timeline - Compact Version -->
                <div class="bg-gradient-to-br from-white to-green-50/30 rounded-xl shadow-lg p-6 border border-green-100/50 hover:shadow-xl transition-shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-800 flex items-center">
                            <div class="bg-green-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-route text-green-600 text-lg"></i>
                            </div>
                            Sua Jornada
                        </h3>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            Fase 3/4
                        </span>
                    </div>
                    
                    <div class="relative" style="min-height: 250px;">
                        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-gray-300"></div>
                        
                        <div class="relative flex items-start mb-4">
                            <div class="bg-green-500 rounded-full w-3 h-3 mt-1 z-10 relative"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-800">Diagnóstico</p>
                                <p class="text-xs text-gray-600">01/01 ✓</p>
                            </div>
                        </div>
                        
                        <div class="relative flex items-start mb-4">
                            <div class="bg-green-500 rounded-full w-3 h-3 mt-1 z-10 relative"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-800">Início Tratamento</p>
                                <p class="text-xs text-gray-600">15/01 ✓</p>
                            </div>
                        </div>
                        
                        <div class="relative flex items-start mb-4">
                            <div class="bg-green-600 rounded-full w-3 h-3 mt-1 z-10 relative animate-pulse"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-800">Quimio - Ciclo 1</p>
                                <p class="text-xs text-gray-600">Em andamento</p>
                                <div class="mt-1 bg-blue-50 px-2 py-1 rounded">
                                    <p class="text-xs text-blue-800">3/6 sessões</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="relative flex items-start">
                            <div class="bg-gray-300 rounded-full w-3 h-3 mt-1 z-10 relative"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-400">Avaliação</p>
                                <p class="text-xs text-gray-400">01/03 - Agendado</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="mt-4">
                        <div class="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Progresso Total</span>
                            <span class="font-bold">75%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-2">
                            <div class="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style="width: 75%"></div>
                        </div>
                    </div>
                </div>
                <!-- Symptoms Tracking - Compact -->
                <div class="bg-gradient-to-br from-white to-teal-50/30 rounded-xl shadow-lg p-6 border border-teal-100/50 hover:shadow-xl transition-shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-800 flex items-center">
                            <div class="bg-teal-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-chart-line text-teal-600 text-lg"></i>
                            </div>
                            Monitoramento de Sintomas
                        </h3>
                        <div class="flex gap-2">
                            <button onclick="toggleChartView('symptoms', 'week')" class="chart-toggle-btn active px-3 py-1 text-xs bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors">
                                Semana
                            </button>
                            <button onclick="toggleChartView('symptoms', 'month')" class="chart-toggle-btn px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                                Mês
                            </button>
                        </div>
                    </div>
                    
                    <!-- Chart Container -->
                    <div class="relative" style="height: 200px;">
                        <canvas id="symptomsChart"></canvas>
                    </div>
                    
                    <!-- Legend with interactive elements -->
                    <div class="mt-4 grid grid-cols-2 gap-3">
                        <div class="flex items-center justify-between bg-white/70 rounded-lg px-3 py-2">
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                                <span class="text-sm text-gray-700">Náusea</span>
                            </div>
                            <span class="text-sm font-bold text-purple-600">↓ 25%</span>
                        </div>
                        <div class="flex items-center justify-between bg-white/70 rounded-lg px-3 py-2">
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                                <span class="text-sm text-gray-700">Fadiga</span>
                            </div>
                            <span class="text-sm font-bold text-pink-600">↓ 40%</span>
                        </div>
                    </div>
                </div>

                <!-- Wellness Score - Compact -->
                <div class="bg-gradient-to-br from-white to-cyan-50/30 rounded-xl shadow-lg p-6 border border-cyan-100/50 hover:shadow-xl transition-shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-800 flex items-center">
                            <div class="bg-cyan-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-heart text-cyan-600 text-lg"></i>
                            </div>
                            Score de Bem-Estar
                        </h3>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            <i class="fas fa-arrow-up text-xs mr-1"></i>
                            +5 pts
                        </span>
                    </div>
                    
                    <!-- Circular Progress - Smaller -->
                    <div class="flex justify-center mb-3">
                        <div class="relative">
                            <svg class="w-32 h-32 transform -rotate-90">
                                <!-- Background circle -->
                                <circle cx="80" cy="80" r="70" 
                                        stroke="#e5e7eb" 
                                        stroke-width="12" 
                                        fill="none"></circle>
                                <!-- Progress circle -->
                                <circle cx="80" cy="80" r="70" 
                                        stroke="url(#wellness-gradient)" 
                                        stroke-width="12" 
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-dasharray="440"
                                        stroke-dashoffset="110"
                                        class="transition-all duration-1000 ease-out"></circle>
                                <!-- Gradient definition -->
                                <defs>
                                    <linearGradient id="wellness-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#06b6d4" />
                                        <stop offset="100%" stop-color="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                <span class="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">75%</span>
                                <span class="text-xs text-gray-500 mt-1">Ótimo</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Wellness Categories -->
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600 flex items-center">
                                <i class="fas fa-bed text-blue-500 w-4 mr-2"></i>
                                Sono
                            </span>
                            <div class="flex items-center">
                                <div class="bg-gray-200 rounded-full h-2 w-16 mr-2">
                                    <div class="bg-blue-500 h-2 rounded-full" style="width: 80%"></div>
                                </div>
                                <span class="text-xs font-medium text-gray-700">80%</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600 flex items-center">
                                <i class="fas fa-apple-alt text-green-500 w-4 mr-2"></i>
                                Nutrição
                            </span>
                            <div class="flex items-center">
                                <div class="bg-gray-200 rounded-full h-2 w-16 mr-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 70%"></div>
                                </div>
                                <span class="text-xs font-medium text-gray-700">70%</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600 flex items-center">
                                <i class="fas fa-smile text-yellow-500 w-4 mr-2"></i>
                                Humor
                            </span>
                            <div class="flex items-center">
                                <div class="bg-gray-200 rounded-full h-2 w-16 mr-2">
                                    <div class="bg-yellow-500 h-2 rounded-full" style="width: 75%"></div>
                                </div>
                                <span class="text-xs font-medium text-gray-700">75%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4 text-center">
                        <p class="text-sm text-gray-600 bg-cyan-50 rounded-lg py-2">
                            <i class="fas fa-trophy text-cyan-600 mr-1"></i>
                            Você está indo muito bem! Continue assim!
                        </p>
                    </div>
                </div>
            </div>

            <!-- Support Network - Enhanced with Actions -->
            <div class="bg-gradient-to-br from-white to-green-50/20 rounded-xl shadow-lg p-6 border border-green-100/50 hover:shadow-xl transition-shadow">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="font-bold text-gray-800 flex items-center">
                        <div class="bg-green-100 p-2 rounded-lg mr-3">
                            <i class="fas fa-users text-green-600 text-lg"></i>
                        </div>
                        Sua Rede de Apoio
                    </h3>
                    <span class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                        <i class="fas fa-circle text-green-500 text-xs mr-1 animate-pulse"></i>
                        4 disponíveis agora
                    </span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <!-- Dr. João Silva - Oncologista -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-green-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-user-md text-3xl text-green-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Dr. João Silva</p>
                            <p class="text-xs text-gray-600 mb-3">Oncologista</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Dr. João Silva', 'oncologista')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Dr. João Silva', 'oncologista')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Maria Santos - Navegadora -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-green-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-green-100 to-emerald-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-compass text-3xl text-green-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Maria Santos</p>
                            <p class="text-xs text-gray-600 mb-3">Navegadora</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Maria Santos', 'navegadora')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Maria Santos', 'navegadora')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Ana Costa - Psicóloga -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-teal-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-teal-100 to-teal-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-brain text-3xl text-teal-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Ana Costa</p>
                            <p class="text-xs text-gray-600 mb-3">Psicóloga</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Ana Costa', 'psicóloga')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Ana Costa', 'psicóloga')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Família -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-cyan-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-heart text-3xl text-cyan-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Família</p>
                            <p class="text-xs text-gray-600 mb-3">3 membros</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Família', 'grupo familiar')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Família', 'grupo familiar')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Status Bar -->
                <div class="mt-6 bg-green-50 rounded-lg p-3 border border-green-200">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-info-circle text-green-600"></i>
                            <span class="text-sm text-gray-700">Sua equipe está pronta para ajudar</span>
                        </div>
                        <button onclick="viewAllContacts()" class="text-sm text-green-600 hover:text-green-700 font-medium">
                            Ver todos os contatos →
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Triage Chat Modal -->
        <div id="triageModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-xl max-w-md w-full max-h-[80vh] flex flex-col">
                <div class="p-4 border-b flex items-center justify-between">
                    <h3 class="font-bold text-gray-800">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                        Assistente de Triagem
                    </h3>
                    <button onclick="closeTriageChat()" class="text-gray-500 hover:text-gray-700">
                        <i class="far fa-times-circle"></i>
                    </button>
                </div>
                <div class="flex-grow p-4 overflow-y-auto" id="chatMessages">
                    <div class="bg-green-100 p-3 rounded-lg mb-3">
                        <p class="text-sm">Olá! Sou seu assistente virtual. Como posso ajudar você hoje?</p>
                    </div>
                </div>
                <div class="p-4 border-t">
                    <div class="flex space-x-2">
                        <input type="text" id="chatInput" placeholder="Digite sua mensagem..." 
                               class="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <button onclick="sendMessage()" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                            <i class="far fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

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
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
            // Enhanced Chart initialization with better styling
            const ctx = document.getElementById('symptomsChart').getContext('2d');
            const symptomsChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                    datasets: [{
                        label: 'Náusea',
                        data: [3, 4, 3, 2, 3, 4, 3],
                        borderColor: 'rgb(139, 92, 246)',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        pointBackgroundColor: 'white',
                        pointBorderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }, {
                        label: 'Fadiga',
                        data: [5, 5, 4, 4, 3, 4, 3],
                        borderColor: 'rgb(236, 72, 153)',
                        backgroundColor: 'rgba(236, 72, 153, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        pointBackgroundColor: 'white',
                        pointBorderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'index',
                        intersect: false
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: 12,
                            titleColor: 'white',
                            bodyColor: 'white',
                            borderColor: 'white',
                            borderWidth: 1,
                            displayColors: true,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.parsed.y + '/10';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10,
                            ticks: {
                                stepSize: 2,
                                color: '#6b7280',
                                font: {
                                    size: 11
                                }
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)',
                                drawBorder: false
                            }
                        },
                        x: {
                            ticks: {
                                color: '#6b7280',
                                font: {
                                    size: 11
                                }
                            },
                            grid: {
                                display: false,
                                drawBorder: false
                            }
                        }
                    }
                }
            });
            
            // Toggle chart view function
            function toggleChartView(chart, period) {
                const buttons = document.querySelectorAll('.chart-toggle-btn');
                buttons.forEach(btn => {
                    btn.classList.remove('active', 'bg-teal-100', 'text-teal-700');
                    btn.classList.add('bg-gray-100', 'text-gray-600');
                });
                
                event.target.classList.remove('bg-gray-100', 'text-gray-600');
                event.target.classList.add('active', 'bg-teal-100', 'text-teal-700');
                
                if (period === 'month') {
                    symptomsChart.data.labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
                    symptomsChart.data.datasets[0].data = [4, 3, 3, 2];
                    symptomsChart.data.datasets[1].data = [5, 4, 3, 3];
                } else {
                    symptomsChart.data.labels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
                    symptomsChart.data.datasets[0].data = [3, 4, 3, 2, 3, 4, 3];
                    symptomsChart.data.datasets[1].data = [5, 5, 4, 4, 3, 4, 3];
                }
                symptomsChart.update();
            }

            // Chat functions
            function openTriageChat() {
                document.getElementById('triageModal').classList.remove('hidden');
            }

            function closeTriageChat() {
                document.getElementById('triageModal').classList.add('hidden');
            }

            async function sendMessage() {
                const input = document.getElementById('chatInput');
                const message = input.value.trim();
                if (!message) return;

                // Add user message
                const messagesDiv = document.getElementById('chatMessages');
                messagesDiv.innerHTML += \`
                    <div class="bg-gray-100 p-3 rounded-lg mb-3 ml-12">
                        <p class="text-sm">\${message}</p>
                    </div>
                \`;

                input.value = '';

                // Call API
                try {
                    const response = await axios.post('/api/ai/auto-triage', {
                        message: message,
                        sessionId: 'session_' + Date.now(),
                        patientInfo: {}
                    });

                    // Add bot response
                    messagesDiv.innerHTML += \`
                        <div class="bg-green-100 p-3 rounded-lg mb-3">
                            <p class="text-sm">\${response.data.response.message}</p>
                            <p class="text-xs text-gray-600 mt-2">Urgência: \${response.data.response.urgency}</p>
                        </div>
                    \`;
                } catch (error) {
                    messagesDiv.innerHTML += \`
                        <div class="bg-emerald-100 p-3 rounded-lg mb-3">
                            <p class="text-sm">Desculpe, ocorreu um erro. Tente novamente.</p>
                        </div>
                    \`;
                }

                messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }

            function showAppointments() {
                alert('Suas consultas serão exibidas aqui');
            }

            function reportSymptoms() {
                alert('Formulário de sintomas será aberto');
            }

            function viewSupport() {
                alert('Rede de apoio será exibida');
            }
            
            // Support Network Functions - Simplified
            function startChat(personName, role) {
                alert('Iniciando conversa com ' + personName + ' (' + role + ')\\n\\nEm breve este chat estará disponível!');
            }
            
            function requestHelp(personName, role) {
                const helpType = prompt('Que tipo de ajuda você precisa de ' + personName + '?\\n\\n1. Urgente\\n2. Agendamento\\n3. Informações\\n4. Outro');
                if (helpType) {
                    alert('Solicitação enviada para ' + personName + '\\n\\nTipo de ajuda: ' + helpType + '\\n\\nVocê receberá uma resposta em breve!');
                }
            }
            
            function sendHelpRequest(personName, helpType) {
                alert('✅ Solicitação enviada com sucesso!\\n\\n' + personName + ' foi notificado(a)\\nAssunto: ' + helpType + '\\n\\nVocê receberá uma resposta em breve.');
            }
            
            function viewAllContacts() {
                alert('📋 Lista completa de contatos:\\n\\n• Dr. João Silva - Oncologista\\n• Maria Santos - Navegadora\\n• Ana Costa - Psicóloga\\n• Família - 3 membros\\n\\nTodos disponíveis para ajudar!');
            }
            

                    <div class="bg-white rounded-xl max-w-md w-full max-h-[80vh] flex flex-col">
                        <div class="p-4 border-b flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100">
                            <h3 class="font-bold text-gray-800 flex items-center">
                                <i class="fas fa-comments text-green-600 mr-2"></i>
                                Conversa com \${personName}
                            </h3>
                            <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                            <p class="font-bold">Solicitação enviada!</p>
                            <p class="text-sm">' + personName + ' foi notificado(a) sobre: "' + helpType + '"</p>
                            <p class="text-xs mt-1">Você receberá uma resposta em breve.</p>
                        </div>
                    </div>
                \`;
                document.body.appendChild(notification);
                
                // Remover notificação após 5 segundos
                setTimeout(() => notification.remove(), 5000);
            }


            // Enter key to send message
            document.getElementById('chatInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        </script>
        <script src="/static/portal-helpers.js"></script>
        <script src="/static/portal-helpers.js"></script>
        <script src="/static/action-plan-system.js"></script>
        <script src="/static/action-plan-handlers.js"></script>
    </body>
    </html>
  `)
}