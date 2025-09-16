import { Hono } from 'hono';

const doctorEnhanced = new Hono();

// Portal Médico Principal
doctorEnhanced.get('/doctor-portal', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal do Médico - Dr. Roberto Almeida</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
        .kanban-card {
            transition: all 0.3s ease;
        }
        .kanban-card:hover {
            transform: translateY(-2px);
        }
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6 glass-effect">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">
                        <i class="fas fa-user-md mr-3 text-blue-600"></i>
                        Portal do Médico
                    </h1>
                    <p class="text-gray-600 mt-1">Dr. Roberto Almeida - CRM 123456/SP</p>
                </div>
                <div class="flex items-center gap-4">
                    <div class="text-right">
                        <p class="text-sm text-gray-600">Segunda-feira, 16 de Janeiro</p>
                        <p class="text-lg font-semibold text-blue-600">14:30</p>
                    </div>
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                        RA
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-blue-100">Pacientes Hoje</p>
                        <p class="text-2xl font-bold">18</p>
                    </div>
                    <i class="fas fa-users text-3xl text-blue-200"></i>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-purple-100">Cirurgias</p>
                        <p class="text-2xl font-bold">3</p>
                    </div>
                    <i class="fas fa-procedures text-3xl text-purple-200"></i>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-green-100">Laudos Pendentes</p>
                        <p class="text-2xl font-bold">7</p>
                    </div>
                    <i class="fas fa-file-medical text-3xl text-green-200"></i>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-orange-100">Taxa Sucesso</p>
                        <p class="text-2xl font-bold">92%</p>
                    </div>
                    <i class="fas fa-chart-line text-3xl text-orange-200"></i>
                </div>
            </div>
        </div>

        <!-- Main Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Kanban Board - 2 columns wide -->
            <div class="lg:col-span-2 bg-white rounded-xl shadow-lg glass-effect">
                <div class="p-6 border-b">
                    <h2 class="text-xl font-bold text-gray-800">
                        <i class="fas fa-columns mr-2 text-blue-600"></i>
                        Trilho de Atendimento - Meus Pacientes
                    </h2>
                </div>
                
                <div class="p-6 overflow-x-auto">
                    <div class="flex gap-4 min-w-max">
                        <!-- Coluna: Triagem -->
                        <div class="kanban-column bg-gray-50 rounded-xl p-4 w-64">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="font-bold text-gray-800 text-sm">
                                    <i class="fas fa-clipboard-check text-purple-600 mr-2"></i>
                                    Triagem
                                </h3>
                                <span class="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">3</span>
                            </div>
                            <div class="space-y-3 max-h-64 overflow-y-auto">
                                <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" onclick="window.open('/patient-view-integrated/PAC-001', '_blank')">
                                    <div class="flex items-start justify-between mb-2">
                                        <span class="font-semibold text-sm">Maria Silva</span>
                                        <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Prioridade</span>
                                    </div>
                                    <p class="text-xs text-gray-600 mb-2">CA Mama • Estadio IIA</p>
                                    <div class="flex items-center justify-between text-xs">
                                        <span class="text-gray-500">Entrada: 10/01</span>
                                        <i class="fas fa-arrow-right text-purple-600"></i>
                                    </div>
                                </div>
                                
                                <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" onclick="window.open('/patient-view-integrated/PAC-004', '_blank')">
                                    <div class="flex items-start justify-between mb-2">
                                        <span class="font-semibold text-sm">João Santos</span>
                                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Normal</span>
                                    </div>
                                    <p class="text-xs text-gray-600 mb-2">CA Próstata • Estadio I</p>
                                    <div class="flex items-center justify-between text-xs">
                                        <span class="text-gray-500">Entrada: 11/01</span>
                                        <i class="fas fa-arrow-right text-purple-600"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Coluna: Diagnóstico -->
                        <div class="kanban-column bg-gray-50 rounded-xl p-4 w-64">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="font-bold text-gray-800 text-sm">
                                    <i class="fas fa-microscope text-blue-600 mr-2"></i>
                                    Diagnóstico
                                </h3>
                                <span class="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">5</span>
                            </div>
                            <div class="space-y-3 max-h-64 overflow-y-auto">
                                <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" onclick="window.open('/patient-view-integrated/PAC-002', '_blank')">
                                    <div class="flex items-start justify-between mb-2">
                                        <span class="font-semibold text-sm">Ana Costa</span>
                                        <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Urgente</span>
                                    </div>
                                    <p class="text-xs text-gray-600 mb-2">CA Pulmão • Aguardando PET</p>
                                    <div class="flex items-center justify-between text-xs">
                                        <span class="text-gray-500">3 dias aguardando</span>
                                        <i class="fas fa-info-circle text-blue-600"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Coluna: Tratamento -->
                        <div class="kanban-column bg-gray-50 rounded-xl p-4 w-64">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="font-bold text-gray-800 text-sm">
                                    <i class="fas fa-procedures text-green-600 mr-2"></i>
                                    Tratamento
                                </h3>
                                <span class="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">8</span>
                            </div>
                            <div class="space-y-3 max-h-64 overflow-y-auto">
                                <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" onclick="window.open('/patient-view-integrated/PAC-003', '_blank')">
                                    <div class="flex items-start justify-between mb-2">
                                        <span class="font-semibold text-sm">Carlos Mendes</span>
                                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Em dia</span>
                                    </div>
                                    <p class="text-xs text-gray-600 mb-2">Quimio • Ciclo 3/6</p>
                                    <div class="flex items-center justify-between text-xs">
                                        <span class="text-gray-500">Próxima: 20/01</span>
                                        <i class="fas fa-check-circle text-green-600"></i>
                                    </div>
                                </div>
                                
                                <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" onclick="window.open('/patient-view-integrated/PAC-006', '_blank')">
                                    <div class="flex items-start justify-between mb-2">
                                        <span class="font-semibold text-sm">Lucia Ferreira</span>
                                        <span class="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Atenção</span>
                                    </div>
                                    <p class="text-xs text-gray-600 mb-2">Radio • Sessão 15/30</p>
                                    <div class="flex items-center justify-between text-xs">
                                        <span class="text-gray-500">Hoje: 15:00</span>
                                        <i class="fas fa-radiation text-orange-600"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Coluna: Alta -->
                        <div class="kanban-column bg-gray-50 rounded-xl p-4 w-64">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="font-bold text-gray-800 text-sm">
                                    <i class="fas fa-flag-checkered text-teal-600 mr-2"></i>
                                    Alta
                                </h3>
                                <span class="bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-bold">2</span>
                            </div>
                            <div class="space-y-3 max-h-64 overflow-y-auto">
                                <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer border-l-4 border-green-500" onclick="window.open('/patient-view-integrated/PAC-005', '_blank')">
                                    <div class="flex items-start justify-between mb-2">
                                        <span class="font-semibold text-sm">Pedro Oliveira</span>
                                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Sucesso</span>
                                    </div>
                                    <p class="text-xs text-gray-600 mb-2">Tratamento concluído</p>
                                    <div class="flex items-center justify-between text-xs">
                                        <span class="text-gray-500">Alta: 15/01</span>
                                        <i class="fas fa-file-export text-teal-600"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-6">
                <!-- Alertas Críticos -->
                <div class="bg-white rounded-xl shadow-lg glass-effect">
                    <div class="p-4 border-b bg-gradient-to-r from-red-500 to-orange-500 rounded-t-xl">
                        <h2 class="text-lg font-bold text-white">
                            <i class="fas fa-exclamation-triangle mr-2"></i>
                            Alertas Críticos LAURA
                        </h2>
                    </div>
                    <div class="p-4 space-y-3 max-h-80 overflow-y-auto">
                        <div class="bg-red-50 border-l-4 border-red-500 p-3 rounded cursor-pointer hover:bg-red-100 transition" onclick="window.open('/patient-view-integrated/PAC-002', '_blank')">
                            <div class="flex items-start">
                                <i class="fas fa-exclamation-circle text-red-500 mt-1 mr-3"></i>
                                <div class="flex-1">
                                    <p class="font-semibold text-sm">Ana Costa - PAC-002</p>
                                    <p class="text-xs text-gray-600 mt-1">Risco de neutropenia febril detectado</p>
                                    <p class="text-xs text-red-600 mt-1">Probabilidade: 78% • Ação imediata</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-orange-50 border-l-4 border-orange-500 p-3 rounded cursor-pointer hover:bg-orange-100 transition" onclick="window.open('/patient-view-integrated/PAC-003', '_blank')">
                            <div class="flex items-start">
                                <i class="fas fa-heartbeat text-orange-500 mt-1 mr-3"></i>
                                <div class="flex-1">
                                    <p class="font-semibold text-sm">Carlos Mendes - PAC-003</p>
                                    <p class="text-xs text-gray-600 mt-1">Alteração cardíaca detectada</p>
                                    <p class="text-xs text-orange-600 mt-1">Monitorar ECG nas próximas 24h</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded cursor-pointer hover:bg-yellow-100 transition" onclick="window.open('/patient-view-integrated/PAC-006', '_blank')">
                            <div class="flex items-start">
                                <i class="fas fa-pills text-yellow-600 mt-1 mr-3"></i>
                                <div class="flex-1">
                                    <p class="font-semibold text-sm">Lucia Ferreira - PAC-006</p>
                                    <p class="text-xs text-gray-600 mt-1">Possível interação medicamentosa</p>
                                    <p class="text-xs text-yellow-700 mt-1">Revisar prescrição de antiemético</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-purple-50 border-l-4 border-purple-500 p-3 rounded cursor-pointer hover:bg-purple-100 transition" onclick="window.open('/patient-view-integrated/PAC-001', '_blank')">
                            <div class="flex items-start">
                                <i class="fas fa-brain text-purple-500 mt-1 mr-3"></i>
                                <div class="flex-1">
                                    <p class="font-semibold text-sm">Maria Silva - PAC-001</p>
                                    <p class="text-xs text-gray-600 mt-1">Score ansiedade elevado: 8/10</p>
                                    <p class="text-xs text-purple-600 mt-1">Considerar suporte psicológico</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Ações Rápidas -->
                <div class="bg-white rounded-xl shadow-lg glass-effect p-6">
                    <h2 class="text-lg font-bold text-gray-800 mb-4">
                        <i class="fas fa-bolt mr-2 text-yellow-500"></i>
                        Ações Rápidas
                    </h2>
                    <div class="grid grid-cols-2 gap-3">
                        <button onclick="window.location.href='/doctor/prescribe'" class="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition">
                            <i class="fas fa-prescription text-xl mb-1"></i>
                            <p class="text-xs">Prescrever</p>
                        </button>
                        
                        <button onclick="window.location.href='/doctor/reports'" class="bg-gradient-to-br from-green-500 to-green-600 text-white p-3 rounded-lg hover:from-green-600 hover:to-green-700 transition">
                            <i class="fas fa-file-medical-alt text-xl mb-1"></i>
                            <p class="text-xs">Laudos</p>
                        </button>
                        
                        <button onclick="window.location.href='/doctor/protocols'" class="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-3 rounded-lg hover:from-purple-600 hover:to-purple-700 transition">
                            <i class="fas fa-book-medical text-xl mb-1"></i>
                            <p class="text-xs">Protocolos</p>
                        </button>
                        
                        <button onclick="window.location.href='/doctor/ai-assistant'" class="bg-gradient-to-br from-orange-500 to-pink-500 text-white p-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition">
                            <i class="fas fa-robot text-xl mb-1"></i>
                            <p class="text-xs">IA Assistente</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `);
});

export { doctorEnhanced };