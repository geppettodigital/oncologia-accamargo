import { Hono } from 'hono'
import { html } from 'hono/html'

export const doctorPage = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portal Médico - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
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
                            <p class="text-sm text-gray-600 font-medium">Portal Médico • ACCamargo Cancer Center</p>
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
            <!-- Stats Overview -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Pacientes Hoje</p>
                            <p class="text-2xl font-bold text-gray-800">12</p>
                        </div>
                        <i class="fas fa-users text-green-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Consultas Realizadas</p>
                            <p class="text-2xl font-bold text-gray-800">8</p>
                        </div>
                        <i class="far fa-check-circle text-green-500 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Pendências</p>
                            <p class="text-2xl font-bold text-gray-800">4</p>
                        </div>
                        <i class="far fa-clock text-lime-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">IA Assistências</p>
                            <p class="text-2xl font-bold text-gray-800">23</p>
                        </div>
                        <i class="fas fa-cogs text-teal-600 text-2xl"></i>
                    </div>
                </div>
            </div>

            <!-- Patient List and AI Assistant -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <!-- Patient List -->
                <div class="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl font-bold text-gray-800">
                            <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                            Pacientes do Dia
                        </h2>
                        <button class="text-green-600 hover:text-green-700">
                            <i class="fas fa-filter mr-1"></i> Filtrar
                        </button>
                    </div>
                    
                    <div class="space-y-3">
                        <!-- Patient Card 1 -->
                        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="showPatient360(1)">
                            <div class="flex items-start justify-between">
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <h3 class="font-semibold text-gray-800">João Silva</h3>
                                        <span class="ml-2 px-2 py-1 text-xs bg-lime-100 text-yellow-800 rounded">Atenção</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-id-card mr-1"></i> MR001 | 55 anos | Masculino
                                    </p>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-disease mr-1"></i> Adenocarcinoma Pulmonar - Estágio IIIA
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        <i class="far fa-capsules mr-1"></i> Carboplatin + Pemetrexed - Ciclo 3
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs text-gray-500">Próxima consulta</p>
                                    <p class="font-semibold text-green-700">14:00</p>
                                </div>
                            </div>
                            <div class="mt-3 flex space-x-2">
                                <span class="text-xs bg-emerald-100 text-red-700 px-2 py-1 rounded">
                                    <i class="far fa-exclamation-triangle mr-1"></i>Neutropenia G2
                                </span>
                                <span class="text-xs bg-green-100 text-blue-700 px-2 py-1 rounded">
                                    <i class="fas fa-flask mr-1"></i>Lab pendente
                                </span>
                            </div>
                        </div>

                        <!-- Patient Card 2 -->
                        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="showPatient360(2)">
                            <div class="flex items-start justify-between">
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <h3 class="font-semibold text-gray-800">Maria Santos</h3>
                                        <span class="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Estável</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-id-card mr-1"></i> MR002 | 42 anos | Feminino
                                    </p>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-disease mr-1"></i> Ca Mama - Estágio IIB
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        <i class="far fa-radiation mr-1"></i> Radioterapia adjuvante
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs text-gray-500">Próxima consulta</p>
                                    <p class="font-semibold text-green-700">15:30</p>
                                </div>
                            </div>
                        </div>

                        <!-- Patient Card 3 -->
                        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="showPatient360(3)">
                            <div class="flex items-start justify-between">
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <h3 class="font-semibold text-gray-800">Pedro Costa</h3>
                                        <span class="ml-2 px-2 py-1 text-xs bg-emerald-100 text-red-800 rounded">Urgente</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-id-card mr-1"></i> MR003 | 67 anos | Masculino
                                    </p>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-disease mr-1"></i> Ca Colorretal - Estágio IV
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        <i class="far fa-capsules mr-1"></i> FOLFOX - Ciclo 6
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs text-gray-500">Próxima consulta</p>
                                    <p class="font-semibold text-red-600">AGORA</p>
                                </div>
                            </div>
                            <div class="mt-3 flex space-x-2">
                                <span class="text-xs bg-emerald-100 text-red-700 px-2 py-1 rounded">
                                    <i class="far fa-exclamation-triangle mr-1"></i>Dor 8/10
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AI Assistant Panel -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 class="text-xl font-bold text-gray-800 mb-4">
                        <i class="fas fa-cogs text-teal-600 mr-2"></i>
                        Assistente IA
                    </h2>
                    
                    <div class="space-y-3 mb-4">
                        <button onclick="askAI('treatment')" class="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all">
                            <i class="fas fa-brain text-teal-600 mr-2"></i>
                            <span class="text-sm font-semibold">Sugestão de Tratamento</span>
                        </button>
                        
                        <button onclick="askAI('interaction')" class="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all">
                            <i class="far fa-capsules text-green-600 mr-2"></i>
                            <span class="text-sm font-semibold">Verificar Interações</span>
                        </button>
                        
                        <button onclick="askAI('guidelines')" class="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all">
                            <i class="far fa-book-medical text-green-500 mr-2"></i>
                            <span class="text-sm font-semibold">Diretrizes NCCN</span>
                        </button>
                    </div>
                    
                    <div class="border-t pt-4">
                        <label class="text-sm font-semibold text-gray-700 block mb-2">Pergunta Personalizada</label>
                        <textarea id="aiQuery" rows="3" class="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" 
                                  placeholder="Digite sua pergunta clínica..."></textarea>
                        <button onclick="askCustomAI()" class="mt-2 w-full bg-gradient-to-r from-teal-600 to-blue-500 text-white py-2 rounded-lg hover:from-teal-700 hover:to-green-700 transition-all">
                            <i class="fas fa-brain mr-2"></i>Consultar IA
                        </button>
                    </div>
                    
                    <div id="aiResponse" class="mt-4 p-3 bg-gray-50 rounded-lg hidden">
                        <p class="text-sm text-gray-700"></p>
                    </div>
                </div>
            </div>

            <!-- Patient 360 View Modal -->
            <div id="patient360Modal" class="hidden bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-8 h-8 inline mr-2">
                        Visão 360° do Paciente
                    </h2>
                    <button onclick="closePatient360()" class="text-gray-500 hover:text-gray-700">
                        <i class="far fa-times-circle text-xl"></i>
                    </button>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Clinical Data -->
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-blue-800 mb-2">
                                <i class="far fa-file-medical mr-2"></i>Dados Clínicos
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Diagnóstico:</strong> Adenocarcinoma Pulmonar</p>
                                <p><strong>Estadiamento:</strong> T4N2M0 (IIIA)</p>
                                <p><strong>Mutações:</strong> EGFR+, ALK-</p>
                                <p><strong>PD-L1:</strong> 15%</p>
                            </div>
                        </div>
                        
                        <div class="bg-green-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-green-800 mb-2">
                                <i class="far fa-heart mr-2"></i>Sinais Vitais
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>PA:</strong> 130/80 mmHg</p>
                                <p><strong>FC:</strong> 78 bpm</p>
                                <p><strong>Temp:</strong> 36.5°C</p>
                                <p><strong>SpO2:</strong> 96%</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Treatment -->
                    <div class="space-y-4">
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-purple-800 mb-2">
                                <i class="far fa-capsules mr-2"></i>Tratamento Atual
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Protocolo:</strong> Carboplatin + Pemetrexed</p>
                                <p><strong>Ciclo:</strong> 3 de 6</p>
                                <p><strong>Resposta:</strong> Parcial (30% redução)</p>
                                <p><strong>Toxicidade:</strong> Náusea G2, Neutropenia G2</p>
                            </div>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-yellow-800 mb-2">
                                <i class="fas fa-flask mr-2"></i>Laboratório
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Hb:</strong> 11.2 g/dL ↓</p>
                                <p><strong>Neutrófilos:</strong> 1.8 K/µL ↓</p>
                                <p><strong>Plaquetas:</strong> 180 K/µL</p>
                                <p><strong>Creatinina:</strong> 1.1 mg/dL</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- AI Insights -->
                    <div class="bg-gradient-to-br from-purple-100 to-blue-100 p-4 rounded-lg">
                        <h3 class="font-semibold text-purple-800 mb-3">
                            <i class="fas fa-brain mr-2"></i>Insights da IA
                        </h3>
                        <div class="space-y-3">
                            <div class="bg-white p-3 rounded">
                                <p class="text-sm font-semibold text-red-600">
                                    <i class="far fa-exclamation-triangle mr-1"></i>Alto Risco
                                </p>
                                <p class="text-xs text-gray-600 mt-1">Neutropenia pode evoluir para G3</p>
                            </div>
                            
                            <div class="bg-white p-3 rounded">
                                <p class="text-sm font-semibold text-lime-700">
                                    <i class="fas fa-brain mr-1"></i>Recomendação
                                </p>
                                <p class="text-xs text-gray-600 mt-1">Considerar G-CSF profilático</p>
                            </div>
                            
                            <div class="bg-white p-3 rounded">
                                <p class="text-sm font-semibold text-green-600">
                                    <i class="far fa-chart-line mr-1"></i>Prognóstico
                                </p>
                                <p class="text-xs text-gray-600 mt-1">Resposta favorável ao tratamento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Clinical Tools -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-all cursor-pointer">
                    <i class="far fa-calculator text-4xl text-green-600 mb-3"></i>
                    <h3 class="font-semibold text-gray-800 mb-2">Calculadoras</h3>
                    <p class="text-sm text-gray-600">BSA, CrCl, Doses</p>
                </div>
                
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-all cursor-pointer">
                    <i class="far fa-book text-4xl text-green-500 mb-3"></i>
                    <h3 class="font-semibold text-gray-800 mb-2">Protocolos</h3>
                    <p class="text-sm text-gray-600">Guidelines atualizadas</p>
                </div>
                
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-all cursor-pointer">
                    <i class="fas fa-chart-line text-4xl text-teal-600 mb-3"></i>
                    <h3 class="font-semibold text-gray-800 mb-2">Relatórios</h3>
                    <p class="text-sm text-gray-600">Análises e métricas</p>
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
        <script>
            function showPatient360(patientId) {
                document.getElementById('patient360Modal').classList.remove('hidden');
                // Load patient data via API
                loadPatientData(patientId);
            }

            function closePatient360() {
                document.getElementById('patient360Modal').classList.add('hidden');
            }

            async function loadPatientData(patientId) {
                try {
                    const response = await axios.get(\`/api/doctor/patient/\${patientId}/360\`);
                    // Update modal with patient data
                    console.log('Patient data:', response.data);
                } catch (error) {
                    console.error('Error loading patient data:', error);
                }
            }

            async function askAI(type) {
                const response = await axios.post('/api/doctor/ai-assistant', {
                    query: type,
                    type: type === 'treatment' ? 'treatment-recommendation' : 
                           type === 'interaction' ? 'drug-interaction' : 'guidelines',
                    patientContext: {}
                });
                
                const responseDiv = document.getElementById('aiResponse');
                responseDiv.classList.remove('hidden');
                responseDiv.querySelector('p').innerHTML = response.data.response;
            }

            async function askCustomAI() {
                const query = document.getElementById('aiQuery').value;
                if (!query) return;

                const response = await axios.post('/api/doctor/ai-assistant', {
                    query: query,
                    type: 'custom',
                    patientContext: {}
                });
                
                const responseDiv = document.getElementById('aiResponse');
                responseDiv.classList.remove('hidden');
                responseDiv.querySelector('p').innerHTML = response.data.response;
            }
        </script>
        <script src="/static/ai-assistant.js"></script>
        <script src="/static/portal-helpers.js"></script>
        <script src="/static/ai-assistant.js"></script>
        <script src="/static/portal-helpers.js"></script>
        <script src="/static/ai-concerns.js"></script>
    <script src="/static/action-plan-system.js"></script>
    </body>
    </html>
  `)
}