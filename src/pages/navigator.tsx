import { Hono } from 'hono'
import { html, raw } from 'hono/html'
import { aiConcernsHTML } from '../components/ai-concerns-enhanced'

export const navigatorPage = (c: any) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Navegador de Pacientes - Plataforma Oncológica</title>
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
                            <p class="text-sm text-gray-600 font-medium">Navegador de Pacientes • ACCamargo Cancer Center</p>
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
            <!-- Kanban Board -->
            <div class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-8 h-8 inline mr-2">
                    Fluxo de Pacientes - Visão Kanban
                </h2>
                
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <!-- Triagem -->
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-semibold text-gray-700">Triagem</h3>
                            <span class="bg-green-600 text-white text-xs px-2 py-1 rounded-full">12</span>
                        </div>
                        <div class="space-y-2">
                            <div class="bg-white p-3 rounded shadow-sm border-l-4 border-green-600">
                                <p class="font-semibold text-sm">Ana Silva</p>
                                <p class="text-xs text-gray-600">Aguardando há 2h</p>
                                <span class="text-xs bg-lime-100 text-yellow-700 px-2 py-1 rounded mt-1 inline-block">
                                    <i class="fas fa-clock"></i> Prioridade
                                </span>
                            </div>
                            <div class="bg-white p-3 rounded shadow-sm">
                                <p class="font-semibold text-sm">Carlos Mendes</p>
                                <p class="text-xs text-gray-600">Aguardando há 30min</p>
                            </div>
                        </div>
                    </div>

                    <!-- Diagnóstico -->
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-semibold text-gray-700">Diagnóstico</h3>
                            <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">8</span>
                        </div>
                        <div class="space-y-2">
                            <div class="bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
                                <p class="font-semibold text-sm">João Pedro</p>
                                <p class="text-xs text-gray-600">Biópsia agendada</p>
                                <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded mt-1 inline-block">
                                    <i class="far fa-check"></i> Em dia
                                </span>
                            </div>
                            <div class="bg-white p-3 rounded shadow-sm border-l-4 border-red-500">
                                <p class="font-semibold text-sm">Maria Costa</p>
                                <p class="text-xs text-gray-600">Exame atrasado</p>
                                <span class="text-xs bg-emerald-100 text-red-700 px-2 py-1 rounded mt-1 inline-block">
                                    <i class="fas fa-exclamation-circle"></i> Urgente
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Tratamento -->
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-semibold text-gray-700">Tratamento</h3>
                            <span class="bg-teal-600 text-white text-xs px-2 py-1 rounded-full">45</span>
                        </div>
                        <div class="space-y-2">
                            <div class="bg-white p-3 rounded shadow-sm">
                                <p class="font-semibold text-sm">Roberto Lima</p>
                                <p class="text-xs text-gray-600">Quimio - Ciclo 3/6</p>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div class="bg-teal-600 h-2 rounded-full" style="width: 50%"></div>
                                </div>
                            </div>
                            <div class="bg-white p-3 rounded shadow-sm">
                                <p class="font-semibold text-sm">Sandra Oliveira</p>
                                <p class="text-xs text-gray-600">Radioterapia - Sessão 10/20</p>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div class="bg-teal-600 h-2 rounded-full" style="width: 50%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Acompanhamento -->
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-semibold text-gray-700">Acompanhamento</h3>
                            <span class="bg-green-700 text-white text-xs px-2 py-1 rounded-full">23</span>
                        </div>
                        <div class="space-y-2">
                            <div class="bg-white p-3 rounded shadow-sm">
                                <p class="font-semibold text-sm">Paulo Santos</p>
                                <p class="text-xs text-gray-600">Controle 3 meses</p>
                            </div>
                            <div class="bg-white p-3 rounded shadow-sm">
                                <p class="font-semibold text-sm">Lucia Ferreira</p>
                                <p class="text-xs text-gray-600">Controle 6 meses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottlenecks Alert -->
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-8">
                <div class="flex items-start">
                    <i class="fas fa-exclamation-circle text-emerald-600 text-xl mr-3 mt-1"></i>
                    <div>
                        <h3 class="font-bold text-red-800 mb-2">Gargalos Identificados</h3>
                        <ul class="space-y-2 text-sm text-red-700">
                            <li>• <strong>Ressonância Magnética:</strong> 15 pacientes aguardando, tempo médio de espera: 7 dias</li>
                            <li>• <strong>Autorização de Convênio:</strong> 8 processos pendentes há mais de 48h</li>
                            <li>• <strong>Consulta Oncologia:</strong> Agenda lotada para próximas 2 semanas</li>
                        </ul>
                        <button class="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
                            <i class="far fa-tools mr-2"></i>Resolver Gargalos
                        </button>
                    </div>
                </div>
            </div>

            <!-- Patient Actions Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <!-- Quick Actions -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-bolt text-lime-600 mr-2"></i>
                        Ações Rápidas
                    </h3>
                    <div class="space-y-3">
                        <button class="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-green-100 transition-all">
                            <i class="far fa-calendar-plus text-green-600 mr-2"></i>
                            Agendar Consulta/Exame
                        </button>
                        <button class="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-all">
                            <i class="fas fa-phone text-green-500 mr-2"></i>
                            Contatar Paciente
                        </button>
                        <button class="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-teal-100 transition-all">
                            <i class="far fa-file-alt text-teal-600 mr-2"></i>
                            Solicitar Autorização
                        </button>
                        <button class="w-full text-left p-3 bg-yellow-50 rounded-lg hover:bg-lime-100 transition-all">
                            <i class="far fa-exchange-alt text-lime-600 mr-2"></i>
                            Transferir Navegador
                        </button>
                    </div>
                </div>

                <!-- Metrics -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-chart-line text-teal-600 mr-2"></i>
                        Métricas de Performance
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span>Taxa de Resolução</span>
                                <span class="font-semibold">87%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-500 h-2 rounded-full" style="width: 87%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span>Tempo Médio de Resposta</span>
                                <span class="font-semibold">2.5h</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-600 h-2 rounded-full" style="width: 65%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span>Satisfação do Paciente</span>
                                <span class="font-semibold">92%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-teal-600 h-2 rounded-full" style="width: 92%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Patient List with Filters -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-bold text-gray-800">
                        <i class="fas fa-users text-green-600 mr-2"></i>
                        Lista de Pacientes Ativos
                    </h3>
                    <div class="flex space-x-2">
                        <select class="px-3 py-1 border rounded-lg text-sm">
                            <option>Todos os Status</option>
                            <option>Triagem</option>
                            <option>Diagnóstico</option>
                            <option>Tratamento</option>
                            <option>Acompanhamento</option>
                        </select>
                        <button class="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                            <i class="fas fa-filter mr-1"></i>Filtrar
                        </button>
                    </div>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-2">Paciente</th>
                                <th class="text-left py-2">Status</th>
                                <th class="text-left py-2">Próxima Ação</th>
                                <th class="text-left py-2">Prioridade</th>
                                <th class="text-left py-2">Navegador</th>
                                <th class="text-left py-2">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3">
                                    <div>
                                        <p class="font-semibold">João Silva</p>
                                        <p class="text-xs text-gray-600">MR001</p>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-green-100 text-blue-700 rounded text-xs">Tratamento</span>
                                </td>
                                <td class="py-3">Quimioterapia - 15/02</td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-lime-100 text-yellow-700 rounded text-xs">Média</span>
                                </td>
                                <td class="py-3">Maria Santos</td>
                                <td class="py-3">
                                    <button onclick="openNavigatorModal('contatar', 'MR001')" class="text-blue-600 hover:text-blue-700 mr-2" title="Contatar">
                                        <i class="fas fa-address-book"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('agendar', 'MR001')" class="text-purple-600 hover:text-purple-700 mr-2" title="Agendar">
                                        <i class="fas fa-calendar-alt"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('jornada', 'MR001')" class="text-green-600 hover:text-green-700 mr-2" title="Jornada">
                                        <i class="fas fa-route"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('checklist', 'MR001')" class="text-indigo-600 hover:text-indigo-700" title="Checklist">
                                        <i class="fas fa-clipboard-check"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3">
                                    <div>
                                        <p class="font-semibold">Maria Costa</p>
                                        <p class="text-xs text-gray-600">MR002</p>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Diagnóstico</span>
                                </td>
                                <td class="py-3">Biópsia - Pendente</td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-emerald-100 text-red-700 rounded text-xs">Alta</span>
                                </td>
                                <td class="py-3">Maria Santos</td>
                                <td class="py-3">
                                    <button onclick="openNavigatorModal('contatar', 'MR001')" class="text-blue-600 hover:text-blue-700 mr-2" title="Contatar">
                                        <i class="fas fa-address-book"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('agendar', 'MR001')" class="text-purple-600 hover:text-purple-700 mr-2" title="Agendar">
                                        <i class="fas fa-calendar-alt"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('jornada', 'MR001')" class="text-green-600 hover:text-green-700 mr-2" title="Jornada">
                                        <i class="fas fa-route"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('checklist', 'MR001')" class="text-indigo-600 hover:text-indigo-700" title="Checklist">
                                        <i class="fas fa-clipboard-check"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- NOVAS FUNCIONALIDADES - BOTÕES DE ACESSO RÁPIDO -->
            <div class="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
                <button onclick="openNavigatorModal('contatar')" 
                        class="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center group relative">
                    <i class="fas fa-address-book text-xl"></i>
                    <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Contatar
                    </span>
                </button>
                <button onclick="openNavigatorModal('agendar')" 
                        class="w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all hover:scale-110 flex items-center justify-center group relative">
                    <i class="fas fa-calendar-alt text-xl"></i>
                    <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Agendar
                    </span>
                </button>
                <button onclick="openNavigatorModal('jornada')" 
                        class="w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center group relative">
                    <i class="fas fa-route text-xl"></i>
                    <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Jornada
                    </span>
                </button>
                <button onclick="openNavigatorModal('checklist')" 
                        class="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all hover:scale-110 flex items-center justify-center group relative">
                    <i class="fas fa-clipboard-check text-xl"></i>
                    <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Checklist
                    </span>
                </button>
            </div>

            <!-- Modal Container para as Views -->
            <div id="navigator-modal" class="fixed inset-0 z-50 overflow-y-auto" style="display: none;">
                <!-- O conteúdo será inserido dinamicamente aqui -->
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
        
        <!-- Scripts das Novas Funcionalidades -->
        <script src="/static/navigator-views.js"></script>
        <script src="/static/navigator-views-extended.js"></script>
        <script src="/static/navigator-integration.js"></script>
        
        <script>
            // Adicionar classe navigator-portal para identificação
            document.addEventListener('DOMContentLoaded', function() {
                document.body.classList.add('navigator-portal');
                console.log('Portal do Navegador carregado com novas funcionalidades!');
            });
        </script>
    </body>
    </html>
  `)
}