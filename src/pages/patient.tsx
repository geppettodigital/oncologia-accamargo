import { Hono } from 'hono'
import { html } from 'hono/html'

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
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50 min-h-screen flex flex-col">
        <!-- Header -->
        <header class="bg-white shadow-sm border-b border-gray-200">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <a href="/" class="flex items-center">
                            <img src="/static/accamargo-logo.svg" alt="ACCamargo Logo" class="logo-icon">
                            <span class="text-xl font-bold text-gray-800 ml-2">Portal do Paciente - ACCamargo</span>
                        </a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <span class="text-sm text-gray-600">Olá, João Silva</span>
                        <button class="text-gray-600 hover:text-gray-800">
                            <i class="far fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-gray-800">
                            <i class="far fa-user-circle text-xl"></i>
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
                    <img src="/static/accamargo-logo.svg" alt="ACCamargo Logo" class="w-20 h-20 opacity-50">
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <button onclick="openTriageChat()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="far fa-comments text-green-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Auto-Triagem</p>
                    <p class="text-xs text-gray-600">Avalie seus sintomas</p>
                </button>
                
                <button onclick="showAppointments()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="far fa-calendar-check text-green-500 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Consultas</p>
                    <p class="text-xs text-gray-600">Próxima: 15/02</p>
                </button>
                
                <button onclick="reportSymptoms()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="far fa-file-medical text-teal-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Relatar Sintomas</p>
                    <p class="text-xs text-gray-600">Registre como se sente</p>
                </button>
                
                <button onclick="viewSupport()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="far fa-hand-holding-heart text-cyan-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Rede de Apoio</p>
                    <p class="text-xs text-gray-600">Conecte-se</p>
                </button>
            </div>

            <!-- Journey Timeline -->
            <div class="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
                <div class="flex items-center mb-4">
                    <img src="/static/accamargo-logo.svg" alt="ACCamargo Logo" class="w-8 h-8 mr-3">
                    <h2 class="text-xl font-bold text-gray-800">Sua Jornada de Tratamento</h2>
                </div>
                <div class="relative">
                    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                    
                    <div class="relative flex items-start mb-6">
                        <div class="bg-green-500 rounded-full w-4 h-4 mt-1 z-10 relative"></div>
                        <div class="ml-6">
                            <p class="font-semibold text-gray-800">Diagnóstico Inicial</p>
                            <p class="text-sm text-gray-600">01/01/2024 - Concluído</p>
                        </div>
                    </div>
                    
                    <div class="relative flex items-start mb-6">
                        <div class="bg-green-500 rounded-full w-4 h-4 mt-1 z-10 relative"></div>
                        <div class="ml-6">
                            <p class="font-semibold text-gray-800">Início do Tratamento</p>
                            <p class="text-sm text-gray-600">15/01/2024 - Concluído</p>
                        </div>
                    </div>
                    
                    <div class="relative flex items-start mb-6">
                        <div class="bg-green-600 rounded-full w-4 h-4 mt-1 z-10 relative animate-pulse"></div>
                        <div class="ml-6">
                            <p class="font-semibold text-gray-800">Quimioterapia - Ciclo 1</p>
                            <p class="text-sm text-gray-600">01/02/2024 - Em andamento</p>
                            <div class="mt-2 bg-blue-50 p-2 rounded">
                                <p class="text-xs text-blue-800">3 de 6 sessões completadas</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative flex items-start">
                        <div class="bg-gray-300 rounded-full w-4 h-4 mt-1 z-10 relative"></div>
                        <div class="ml-6">
                            <p class="font-semibold text-gray-400">Avaliação de Resposta</p>
                            <p class="text-sm text-gray-400">01/03/2024 - Agendado</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Health Metrics -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <!-- Symptoms Tracking -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-chart-line text-teal-600 mr-2"></i>
                        Monitoramento de Sintomas
                    </h3>
                    <canvas id="symptomsChart" height="200"></canvas>
                </div>

                <!-- Wellness Score -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-heart text-cyan-600 mr-2"></i>
                        Score de Bem-Estar
                    </h3>
                    <div class="text-center">
                        <div class="relative inline-block">
                            <svg class="w-32 h-32">
                                <circle cx="64" cy="64" r="60" stroke="#e5e7eb" stroke-width="8" fill="none"></circle>
                                <circle cx="64" cy="64" r="60" stroke="#8b5cf6" stroke-width="8" fill="none"
                                        stroke-dasharray="377" stroke-dashoffset="94" 
                                        transform="rotate(-90 64 64)"></circle>
                            </svg>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <span class="text-3xl font-bold text-teal-700">75%</span>
                            </div>
                        </div>
                        <p class="mt-4 text-sm text-gray-600">Seu bem-estar está melhorando!</p>
                    </div>
                </div>
            </div>

            <!-- Support Network -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="far fa-users text-green-600 mr-2"></i>
                    Sua Rede de Apoio
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="text-center">
                        <div class="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                            <i class="far fa-user-md text-2xl text-green-500"></i>
                        </div>
                        <p class="text-sm font-semibold">Dr. João Silva</p>
                        <p class="text-xs text-gray-600">Oncologista</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                            <i class="far fa-user text-2xl text-green-600"></i>
                        </div>
                        <p class="text-sm font-semibold">Maria Santos</p>
                        <p class="text-xs text-gray-600">Navegadora</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                            <i class="far fa-lightbulb text-2xl text-teal-600"></i>
                        </div>
                        <p class="text-sm font-semibold">Ana Costa</p>
                        <p class="text-xs text-gray-600">Psicóloga</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                            <i class="far fa-heart text-2xl text-cyan-600"></i>
                        </div>
                        <p class="text-sm font-semibold">Família</p>
                        <p class="text-xs text-gray-600">3 membros</p>
                    </div>
                </div>
            </div>
        </main>

        <!-- Triage Chat Modal -->
        <div id="triageModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-xl max-w-md w-full max-h-[80vh] flex flex-col">
                <div class="p-4 border-b flex items-center justify-between">
                    <h3 class="font-bold text-gray-800">
                        <img src="/static/accamargo-logo.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                        Assistente de Triagem
                    </h3>
                    <button onclick="closeTriageChat()" class="text-gray-500 hover:text-gray-700">
                        <i class="far fa-times"></i>
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
            // Chart initialization
            const ctx = document.getElementById('symptomsChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                    datasets: [{
                        label: 'Náusea',
                        data: [3, 4, 3, 2, 3, 4, 3],
                        borderColor: 'rgb(139, 92, 246)',
                        tension: 0.1
                    }, {
                        label: 'Fadiga',
                        data: [5, 5, 4, 4, 3, 4, 3],
                        borderColor: 'rgb(236, 72, 153)',
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10
                        }
                    }
                }
            });

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

            // Enter key to send message
            document.getElementById('chatInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        </script>
    </body>
    </html>
  `)
}