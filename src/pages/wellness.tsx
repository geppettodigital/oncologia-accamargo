import { Hono } from 'hono'
import { html, raw } from 'hono/html'
import { aiConcernsHTML } from '../components/ai-concerns-enhanced'

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
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Bem-Estar e Apoio • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <a href="/patient" class="text-gray-600 hover:text-green-600 transition-colors" title="Portal do Paciente">
                            <i class="fas fa-hospital-user text-xl"></i>
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
            <!-- Welcome Message -->
            <div class="bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl p-6 text-white mb-8">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl font-bold mb-2">Centro de Bem-Estar e Suporte Emocional</h1>
                        <p class="opacity-90">"Um corpo doente precisa de uma mente saudável para potencializar sua cura"</p>
                    </div>
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-20 h-20 opacity-50">
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
                                            <i class="fas fa-brain"></i> Ideação suicida
                                        </span>
                                        <span class="text-xs bg-teal-100 text-purple-700 px-2 py-1 rounded ml-1">
                                            <i class="far fa-calendar"></i> Sessão hoje 14h
                                        </span>
                                    </div>
                                </div>
                                <button class="text-emerald-600 hover:text-red-600">
                                    <i class="fas fa-phone"></i>
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
                        <i class="fas fa-users text-teal-600 mr-2"></i>
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
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
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
                        <i class="fas fa-brain text-3xl text-green-600 mb-2"></i>
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

            <!-- Trilho de Atendimentos - Bem-estar -->
            <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">
                    <i class="fas fa-stream text-purple-600 mr-2"></i>
                    Trilho de Atendimentos - Bem-estar
                </h3>
                
                <!-- Kanban simplificado para bem-estar -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <!-- Coluna Triagem -->
                    <div class="bg-purple-50 rounded-lg p-3">
                        <h4 class="font-semibold text-purple-800 mb-3 flex items-center justify-between">
                            <span>Triagem</span>
                            <span class="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">3</span>
                        </h4>
                        <div class="space-y-2">
                            <div class="bg-white p-2 rounded shadow-sm border-l-4 border-purple-500 cursor-pointer hover:shadow-md">
                                <p class="font-semibold text-sm">Ana Silva</p>
                                <p class="text-xs text-gray-600">Ansiedade pós-diagnóstico</p>
                                <div class="mt-1">
                                    <span class="text-xs bg-red-100 text-red-700 px-1 py-0.5 rounded">Urgente</span>
                                </div>
                            </div>
                            <div class="bg-white p-2 rounded shadow-sm border-l-4 border-purple-400 cursor-pointer hover:shadow-md">
                                <p class="font-semibold text-sm">Carlos Mendes</p>
                                <p class="text-xs text-gray-600">Depressão inicial</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Coluna Avaliação -->
                    <div class="bg-blue-50 rounded-lg p-3">
                        <h4 class="font-semibold text-blue-800 mb-3 flex items-center justify-between">
                            <span>Avaliação</span>
                            <span class="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">5</span>
                        </h4>
                        <div class="space-y-2">
                            <div class="bg-white p-2 rounded shadow-sm border-l-4 border-blue-500 cursor-pointer hover:shadow-md">
                                <p class="font-semibold text-sm">Maria Santos</p>
                                <p class="text-xs text-gray-600">Teste psicológico</p>
                                <div class="mt-1 flex justify-between items-center">
                                    <span class="text-xs bg-yellow-100 text-yellow-700 px-1 py-0.5 rounded">Hoje 14h</span>
                                    <i class="fas fa-brain text-xs text-blue-500"></i>
                                </div>
                            </div>
                            <div class="bg-white p-2 rounded shadow-sm border-l-4 border-blue-400 cursor-pointer hover:shadow-md">
                                <p class="font-semibold text-sm">João Paulo</p>
                                <p class="text-xs text-gray-600">Avaliação familiar</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Coluna Terapia -->
                    <div class="bg-green-50 rounded-lg p-3">
                        <h4 class="font-semibold text-green-800 mb-3 flex items-center justify-between">
                            <span>Em Terapia</span>
                            <span class="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">12</span>
                        </h4>
                        <div class="space-y-2">
                            <div class="bg-white p-2 rounded shadow-sm border-l-4 border-green-500 cursor-pointer hover:shadow-md">
                                <p class="font-semibold text-sm">Grupo Mama</p>
                                <p class="text-xs text-gray-600">12 participantes</p>
                                <div class="mt-1">
                                    <div class="w-full bg-gray-200 rounded-full h-1.5">
                                        <div class="bg-green-500 h-1.5 rounded-full" style="width: 75%"></div>
                                    </div>
                                    <p class="text-xs text-gray-500 mt-1">Sessão 8/10</p>
                                </div>
                            </div>
                            <div class="bg-white p-2 rounded shadow-sm border-l-4 border-green-400 cursor-pointer hover:shadow-md">
                                <p class="font-semibold text-sm">Pedro Costa</p>
                                <p class="text-xs text-gray-600">Terapia individual</p>
                                <span class="text-xs bg-green-100 text-green-700 px-1 py-0.5 rounded">Progresso</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Coluna Acompanhamento -->
                    <div class="bg-pink-50 rounded-lg p-3">
                        <h4 class="font-semibold text-pink-800 mb-3 flex items-center justify-between">
                            <span>Acompanhamento</span>
                            <span class="bg-pink-200 text-pink-800 px-2 py-1 rounded text-xs">8</span>
                        </h4>
                        <div class="space-y-2">
                            <div class="bg-white p-2 rounded shadow-sm border-l-4 border-pink-500 cursor-pointer hover:shadow-md">
                                <p class="font-semibold text-sm">Laura Ferreira</p>
                                <p class="text-xs text-gray-600">Check-in mensal</p>
                                <div class="mt-1 flex items-center">
                                    <i class="fas fa-heart text-xs text-pink-500 mr-1"></i>
                                    <span class="text-xs text-gray-600">Estável</span>
                                </div>
                            </div>
                            <div class="bg-white p-2 rounded shadow-sm border-l-4 border-pink-400 cursor-pointer hover:shadow-md">
                                <p class="font-semibold text-sm">Roberto Lima</p>
                                <p class="text-xs text-gray-600">Alta próxima</p>
                                <span class="text-xs bg-green-100 text-green-700 px-1 py-0.5 rounded">Recuperado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Botões de Ações Rápidas -->
            <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">
                    <i class="fas fa-hand-holding-heart text-pink-600 mr-2"></i>
                    Recursos de Bem-estar
                </h3>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <button onclick="showWellnessContent('grupos')" class="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                        <i class="fas fa-users text-2xl mb-2"></i>
                        <p class="font-semibold">Grupos</p>
                        <p class="text-xs opacity-90">Apoio coletivo</p>
                    </button>
                    
                    <button onclick="showWellnessContent('psicologia')" class="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
                        <i class="fas fa-brain text-2xl mb-2"></i>
                        <p class="font-semibold">Psicologia</p>
                        <p class="text-xs opacity-90">Atendimento individual</p>
                    </button>
                    
                    <button onclick="showWellnessContent('terapias')" class="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all">
                        <i class="fas fa-spa text-2xl mb-2"></i>
                        <p class="font-semibold">Terapias</p>
                        <p class="text-xs opacity-90">Integrativas</p>
                    </button>
                    
                    <button onclick="showWellnessContent('diario')" class="p-4 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all">
                        <i class="fas fa-book text-2xl mb-2"></i>
                        <p class="font-semibold">Diário</p>
                        <p class="text-xs opacity-90">Registro emocional</p>
                    </button>
                </div>
                
                <!-- Área de Conteúdo Dinâmico -->
                <div id="wellnessContent" class="hidden">
                    <!-- O conteúdo será inserido dinamicamente aqui -->
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
        <script src="/static/portal-helpers.js"></script>
        <script src="/static/action-plan-system.js"></script>
        <script src="/static/action-plan-handlers.js"></script>
        
        <script>
            // Função para mostrar conteúdo dinâmico dos botões
            function showWellnessContent(type) {
                const contentDiv = document.getElementById('wellnessContent');
                contentDiv.classList.remove('hidden');
                
                const contents = {
                    grupos: {
                        title: 'Grupos de Apoio',
                        icon: 'fa-users',
                        content: \`
                            <div class="bg-purple-50 rounded-lg p-6">
                                <h4 class="text-lg font-bold text-purple-800 mb-4">
                                    <i class="fas fa-users mr-2"></i>
                                    Grupos de Apoio Disponíveis
                                </h4>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                                        <div class="flex justify-between items-start mb-2">
                                            <div>
                                                <h5 class="font-bold text-purple-700">Grupo Câncer de Mama</h5>
                                                <p class="text-sm text-gray-600 mt-1">Apoio mútuo e troca de experiências</p>
                                            </div>
                                            <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Ativo</span>
                                        </div>
                                        <div class="mt-3 space-y-1 text-sm">
                                            <p><i class="fas fa-calendar-alt text-purple-500 mr-2"></i>Quartas-feiras, 14h</p>
                                            <p><i class="fas fa-user-friends text-purple-500 mr-2"></i>12 participantes</p>
                                            <p><i class="fas fa-user-md text-purple-500 mr-2"></i>Facilitadora: Dra. Ana Costa</p>
                                        </div>
                                        <button class="mt-3 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                                            Participar do Grupo
                                        </button>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                                        <div class="flex justify-between items-start mb-2">
                                            <div>
                                                <h5 class="font-bold text-blue-700">Mindfulness & Meditação</h5>
                                                <p class="text-sm text-gray-600 mt-1">Técnicas de redução de estresse</p>
                                            </div>
                                            <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Vagas</span>
                                        </div>
                                        <div class="mt-3 space-y-1 text-sm">
                                            <p><i class="fas fa-calendar-alt text-blue-500 mr-2"></i>Diário, 10h e 16h</p>
                                            <p><i class="fas fa-user-friends text-blue-500 mr-2"></i>8 participantes</p>
                                            <p><i class="fas fa-user-md text-blue-500 mr-2"></i>Instrutor: João Silva</p>
                                        </div>
                                        <button class="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                                            Inscrever-se
                                        </button>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-4 border-l-4 border-pink-500">
                                        <div class="flex justify-between items-start mb-2">
                                            <div>
                                                <h5 class="font-bold text-pink-700">Familiares & Cuidadores</h5>
                                                <p class="text-sm text-gray-600 mt-1">Suporte para quem cuida</p>
                                            </div>
                                            <span class="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs">Novo</span>
                                        </div>
                                        <div class="mt-3 space-y-1 text-sm">
                                            <p><i class="fas fa-calendar-alt text-pink-500 mr-2"></i>Sábados, 10h</p>
                                            <p><i class="fas fa-user-friends text-pink-500 mr-2"></i>20 participantes</p>
                                            <p><i class="fas fa-user-md text-pink-500 mr-2"></i>Psicóloga: Maria Lima</p>
                                        </div>
                                        <button class="mt-3 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition">
                                            Conhecer Grupo
                                        </button>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-4 border-l-4 border-green-500">
                                        <div class="flex justify-between items-start mb-2">
                                            <div>
                                                <h5 class="font-bold text-green-700">Jovens Adultos</h5>
                                                <p class="text-sm text-gray-600 mt-1">18-35 anos em tratamento</p>
                                            </div>
                                            <span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Lista de espera</span>
                                        </div>
                                        <div class="mt-3 space-y-1 text-sm">
                                            <p><i class="fas fa-calendar-alt text-green-500 mr-2"></i>Quintas, 19h</p>
                                            <p><i class="fas fa-user-friends text-green-500 mr-2"></i>15 participantes</p>
                                            <p><i class="fas fa-user-md text-green-500 mr-2"></i>Facilitador: Pedro Alves</p>
                                        </div>
                                        <button class="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                                            Entrar na Lista
                                        </button>
                                    </div>
                                </div>
                            </div>
                        \`
                    },
                    psicologia: {
                        title: 'Atendimento Psicológico',
                        icon: 'fa-brain',
                        content: \`
                            <div class="bg-blue-50 rounded-lg p-6">
                                <h4 class="text-lg font-bold text-blue-800 mb-4">
                                    <i class="fas fa-brain mr-2"></i>
                                    Serviços de Psicologia
                                </h4>
                                
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div class="bg-white rounded-lg p-4">
                                        <i class="fas fa-user text-3xl text-blue-600 mb-2"></i>
                                        <h5 class="font-bold text-gray-800">Individual</h5>
                                        <p class="text-sm text-gray-600 mt-1">Sessões personalizadas</p>
                                        <div class="mt-3 space-y-1 text-xs">
                                            <p><i class="fas fa-clock text-blue-500 mr-1"></i>50 minutos</p>
                                            <p><i class="fas fa-calendar-check text-blue-500 mr-1"></i>Semanal/Quinzenal</p>
                                        </div>
                                        <button class="mt-3 w-full bg-blue-600 text-white py-1.5 rounded text-sm hover:bg-blue-700">
                                            Agendar
                                        </button>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-4">
                                        <i class="fas fa-users text-3xl text-green-600 mb-2"></i>
                                        <h5 class="font-bold text-gray-800">Familiar</h5>
                                        <p class="text-sm text-gray-600 mt-1">Terapia com familiares</p>
                                        <div class="mt-3 space-y-1 text-xs">
                                            <p><i class="fas fa-clock text-green-500 mr-1"></i>90 minutos</p>
                                            <p><i class="fas fa-calendar-check text-green-500 mr-1"></i>Mensal</p>
                                        </div>
                                        <button class="mt-3 w-full bg-green-600 text-white py-1.5 rounded text-sm hover:bg-green-700">
                                            Solicitar
                                        </button>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-4">
                                        <i class="fas fa-phone-alt text-3xl text-red-600 mb-2"></i>
                                        <h5 class="font-bold text-gray-800">Emergência</h5>
                                        <p class="text-sm text-gray-600 mt-1">Suporte 24/7</p>
                                        <div class="mt-3 space-y-1 text-xs">
                                            <p><i class="fas fa-exclamation-triangle text-red-500 mr-1"></i>Crise emocional</p>
                                            <p><i class="fas fa-headset text-red-500 mr-1"></i>Plantão psicológico</p>
                                        </div>
                                        <button class="mt-3 w-full bg-red-600 text-white py-1.5 rounded text-sm hover:bg-red-700">
                                            Ligar Agora
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="bg-white rounded-lg p-4">
                                    <h5 class="font-bold text-gray-800 mb-3">Profissionais Disponíveis</h5>
                                    <div class="space-y-2">
                                        <div class="flex items-center justify-between p-2 bg-blue-50 rounded">
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">AC</div>
                                                <div class="ml-3">
                                                    <p class="font-semibold text-sm">Dra. Ana Costa</p>
                                                    <p class="text-xs text-gray-600">Psico-oncologia</p>
                                                </div>
                                            </div>
                                            <div class="text-right">
                                                <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Disponível</span>
                                                <p class="text-xs text-gray-500 mt-1">Hoje 15h</p>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-center justify-between p-2 bg-blue-50 rounded">
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">ML</div>
                                                <div class="ml-3">
                                                    <p class="font-semibold text-sm">Dr. Marco Lima</p>
                                                    <p class="text-xs text-gray-600">Terapia Cognitiva</p>
                                                </div>
                                            </div>
                                            <div class="text-right">
                                                <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Agenda cheia</span>
                                                <p class="text-xs text-gray-500 mt-1">Próx: Segunda</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        \`
                    },
                    terapias: {
                        title: 'Terapias Integrativas',
                        icon: 'fa-spa',
                        content: \`
                            <div class="bg-green-50 rounded-lg p-6">
                                <h4 class="text-lg font-bold text-green-800 mb-4">
                                    <i class="fas fa-spa mr-2"></i>
                                    Terapias Complementares
                                </h4>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                                    <div class="bg-white rounded-lg p-3 text-center hover:shadow-lg transition">
                                        <i class="fas fa-praying-hands text-3xl text-purple-600 mb-2"></i>
                                        <h5 class="font-bold text-sm">Yoga</h5>
                                        <p class="text-xs text-gray-600 mt-1">Equilíbrio corpo-mente</p>
                                        <div class="mt-2 text-xs">
                                            <p class="bg-purple-100 text-purple-700 rounded py-1">Seg/Qua/Sex - 8h</p>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-3 text-center hover:shadow-lg transition">
                                        <i class="fas fa-hand-sparkles text-3xl text-blue-600 mb-2"></i>
                                        <h5 class="font-bold text-sm">Reiki</h5>
                                        <p class="text-xs text-gray-600 mt-1">Energia e relaxamento</p>
                                        <div class="mt-2 text-xs">
                                            <p class="bg-blue-100 text-blue-700 rounded py-1">Terças - 14h</p>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-3 text-center hover:shadow-lg transition">
                                        <i class="fas fa-palette text-3xl text-pink-600 mb-2"></i>
                                        <h5 class="font-bold text-sm">Arteterapia</h5>
                                        <p class="text-xs text-gray-600 mt-1">Expressão criativa</p>
                                        <div class="mt-2 text-xs">
                                            <p class="bg-pink-100 text-pink-700 rounded py-1">Quintas - 10h</p>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-3 text-center hover:shadow-lg transition">
                                        <i class="fas fa-music text-3xl text-green-600 mb-2"></i>
                                        <h5 class="font-bold text-sm">Musicoterapia</h5>
                                        <p class="text-xs text-gray-600 mt-1">Harmonia e bem-estar</p>
                                        <div class="mt-2 text-xs">
                                            <p class="bg-green-100 text-green-700 rounded py-1">Sextas - 15h</p>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-3 text-center hover:shadow-lg transition">
                                        <i class="fas fa-seedling text-3xl text-green-500 mb-2"></i>
                                        <h5 class="font-bold text-sm">Jardinagem</h5>
                                        <p class="text-xs text-gray-600 mt-1">Conexão com natureza</p>
                                        <div class="mt-2 text-xs">
                                            <p class="bg-green-100 text-green-700 rounded py-1">Sábados - 9h</p>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-3 text-center hover:shadow-lg transition">
                                        <i class="fas fa-dog text-3xl text-yellow-600 mb-2"></i>
                                        <h5 class="font-bold text-sm">Pet Terapia</h5>
                                        <p class="text-xs text-gray-600 mt-1">Companhia terapêutica</p>
                                        <div class="mt-2 text-xs">
                                            <p class="bg-yellow-100 text-yellow-700 rounded py-1">Quartas - 16h</p>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-3 text-center hover:shadow-lg transition">
                                        <i class="fas fa-hands text-3xl text-indigo-600 mb-2"></i>
                                        <h5 class="font-bold text-sm">Massagem</h5>
                                        <p class="text-xs text-gray-600 mt-1">Alívio e conforto</p>
                                        <div class="mt-2 text-xs">
                                            <p class="bg-indigo-100 text-indigo-700 rounded py-1">Agendamento</p>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-white rounded-lg p-3 text-center hover:shadow-lg transition">
                                        <i class="fas fa-yin-yang text-3xl text-gray-600 mb-2"></i>
                                        <h5 class="font-bold text-sm">Acupuntura</h5>
                                        <p class="text-xs text-gray-600 mt-1">Medicina tradicional</p>
                                        <div class="mt-2 text-xs">
                                            <p class="bg-gray-100 text-gray-700 rounded py-1">Ter/Qui - 11h</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mt-4 bg-white rounded-lg p-4">
                                    <p class="text-sm text-gray-600 mb-3">
                                        <i class="fas fa-info-circle text-green-600 mr-2"></i>
                                        Todas as terapias são complementares ao tratamento médico e realizadas por profissionais certificados.
                                    </p>
                                    <button class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                                        Agendar Avaliação para Terapias
                                    </button>
                                </div>
                            </div>
                        \`
                    },
                    diario: {
                        title: 'Diário Emocional',
                        icon: 'fa-book',
                        content: \`
                            <div class="bg-pink-50 rounded-lg p-6">
                                <h4 class="text-lg font-bold text-pink-800 mb-4">
                                    <i class="fas fa-book mr-2"></i>
                                    Diário de Bem-estar
                                </h4>
                                
                                <div class="bg-white rounded-lg p-4 mb-4">
                                    <h5 class="font-bold text-gray-800 mb-3">Como você está se sentindo hoje?</h5>
                                    <div class="flex justify-around mb-4">
                                        <button class="text-3xl hover:scale-125 transition">😊</button>
                                        <button class="text-3xl hover:scale-125 transition">😌</button>
                                        <button class="text-3xl hover:scale-125 transition">😐</button>
                                        <button class="text-3xl hover:scale-125 transition">😔</button>
                                        <button class="text-3xl hover:scale-125 transition">😢</button>
                                    </div>
                                    
                                    <div class="space-y-3">
                                        <div>
                                            <label class="text-sm font-semibold text-gray-700">Nível de Energia</label>
                                            <input type="range" min="0" max="10" value="5" class="w-full mt-1">
                                            <div class="flex justify-between text-xs text-gray-500">
                                                <span>Baixa</span>
                                                <span>Alta</span>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label class="text-sm font-semibold text-gray-700">Qualidade do Sono</label>
                                            <input type="range" min="0" max="10" value="5" class="w-full mt-1">
                                            <div class="flex justify-between text-xs text-gray-500">
                                                <span>Ruim</span>
                                                <span>Ótima</span>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label class="text-sm font-semibold text-gray-700">Ansiedade</label>
                                            <input type="range" min="0" max="10" value="5" class="w-full mt-1">
                                            <div class="flex justify-between text-xs text-gray-500">
                                                <span>Calmo</span>
                                                <span>Ansioso</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="mt-4">
                                        <label class="text-sm font-semibold text-gray-700">Registre seus pensamentos:</label>
                                        <textarea class="w-full mt-2 p-3 border rounded-lg" rows="4" 
                                                  placeholder="Como foi seu dia? O que você está sentindo?"></textarea>
                                    </div>
                                    
                                    <div class="mt-4">
                                        <label class="text-sm font-semibold text-gray-700">Gratidão do dia:</label>
                                        <input type="text" class="w-full mt-2 p-2 border rounded-lg" 
                                               placeholder="Pelo que você é grato hoje?">
                                    </div>
                                    
                                    <button class="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition">
                                        <i class="fas fa-save mr-2"></i>
                                        Salvar Registro de Hoje
                                    </button>
                                </div>
                                
                                <div class="bg-white rounded-lg p-4">
                                    <h5 class="font-bold text-gray-800 mb-3">Histórico Emocional</h5>
                                    <div class="space-y-2">
                                        <div class="flex items-center justify-between p-2 bg-pink-50 rounded">
                                            <div class="flex items-center">
                                                <span class="text-2xl mr-3">😊</span>
                                                <div>
                                                    <p class="font-semibold text-sm">Ontem</p>
                                                    <p class="text-xs text-gray-600">Energia: 7/10 | Sono: 8/10</p>
                                                </div>
                                            </div>
                                            <button class="text-pink-600 hover:text-pink-700">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </div>
                                        
                                        <div class="flex items-center justify-between p-2 bg-pink-50 rounded">
                                            <div class="flex items-center">
                                                <span class="text-2xl mr-3">😌</span>
                                                <div>
                                                    <p class="font-semibold text-sm">Terça-feira</p>
                                                    <p class="text-xs text-gray-600">Energia: 6/10 | Sono: 7/10</p>
                                                </div>
                                            </div>
                                            <button class="text-pink-600 hover:text-pink-700">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <button class="mt-3 w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition">
                                        Ver Análise Completa
                                    </button>
                                </div>
                            </div>
                        \`
                    }
                };
                
                const content = contents[type];
                if (content) {
                    contentDiv.innerHTML = content.content;
                    
                    // Scroll suave até o conteúdo
                    contentDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        </script>
    </body>
    </html>
  `)
}