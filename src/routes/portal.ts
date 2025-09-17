import { Hono } from 'hono'
import { aiConcernsHTML } from '../components/ai-concerns-enhanced'
import { financialPortalContent } from './portal-financial-integrated'

const portalRoutes = new Hono()

// Função auxiliar para gerar HTML do portal
function generatePortalHTML(type: string, title: string, content: string): string {
    return `
        <div class="portal-container min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20">
            <!-- Portal Header -->
            <div class="glass-effect shadow-lg border-b border-gray-100 mb-8">
                <div class="container mx-auto px-4 py-6">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <button onclick="goBack()" class="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
                                <i class="fas fa-arrow-left text-gray-600"></i>
                            </button>
                            <div>
                                <h1 class="text-2xl font-bold text-gray-800">${title}</h1>
                                <p class="text-sm text-gray-600">ACCamargo Cancer Center</p>
                            </div>
                        </div>
                        <button onclick="loadHome()" class="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                            <i class="fas fa-home mr-2"></i>Início
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Portal Content -->
            <div class="container mx-auto px-4 pb-8">
                ${content}
            </div>
        </div>
    `;
}

// Portal do Paciente
portalRoutes.get('/patient', async (c) => {
    const content = `
        <!-- Métricas em 3 Colunas -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Coluna 1: Próximos Compromissos -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="far fa-calendar-alt text-green-600 mr-2"></i>
                    Próximos Compromissos
                </h3>
                <div class="space-y-3">
                    <div class="border-l-4 border-green-500 pl-4">
                        <p class="font-semibold text-gray-800">Consulta Oncologia</p>
                        <p class="text-sm text-gray-600">Dr. Roberto Silva</p>
                        <p class="text-sm text-green-600">15/01 às 14:00</p>
                    </div>
                    <div class="border-l-4 border-blue-500 pl-4">
                        <p class="font-semibold text-gray-800">Exame de Sangue</p>
                        <p class="text-sm text-gray-600">Laboratório Central</p>
                        <p class="text-sm text-blue-600">18/01 às 08:00</p>
                    </div>
                </div>
            </div>
            
            <!-- Coluna 2: Status do Tratamento -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-heartbeat text-red-500 mr-2"></i>
                    Status do Tratamento
                </h3>
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-sm font-medium text-gray-700">Progresso Geral</span>
                            <span class="text-sm font-medium text-green-600">65%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                            <div class="bg-green-600 h-2.5 rounded-full" style="width: 65%"></div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="text-center p-3 bg-green-50 rounded-lg">
                            <p class="text-2xl font-bold text-green-600">12</p>
                            <p class="text-xs text-gray-600">Sessões Completas</p>
                        </div>
                        <div class="text-center p-3 bg-blue-50 rounded-lg">
                            <p class="text-2xl font-bold text-blue-600">8</p>
                            <p class="text-xs text-gray-600">Sessões Restantes</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Coluna 3: Rede de Apoio Aprimorada -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-users text-purple-600 mr-2"></i>
                    Rede de Apoio
                </h3>
                <div class="space-y-3">
                    <button onclick="contactSupport('whatsapp')" class="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                        <div class="flex items-center">
                            <i class="fab fa-whatsapp text-green-600 text-xl mr-3"></i>
                            <span class="font-medium text-gray-800">WhatsApp Suporte</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-400"></i>
                    </button>
                    
                    <button onclick="scheduleConsultation()" class="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                        <div class="flex items-center">
                            <i class="fas fa-user-md text-blue-600 text-xl mr-3"></i>
                            <span class="font-medium text-gray-800">Agendar Consulta</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-400"></i>
                    </button>
                    
                    <button onclick="accessCommunity()" class="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                        <div class="flex items-center">
                            <i class="fas fa-hands-helping text-purple-600 text-xl mr-3"></i>
                            <span class="font-medium text-gray-800">Comunidade</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-400"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura -->
        ${aiConcernsHTML('patient')}
        
        <!-- Ações Rápidas -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-pills text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Medicamentos</h4>
                <p class="text-sm text-gray-600 mt-1">Gerenciar prescrições</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-file-medical text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Resultados</h4>
                <p class="text-sm text-gray-600 mt-1">Ver exames</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-comments text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Mensagens</h4>
                <p class="text-sm text-gray-600 mt-1">Falar com equipe</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-question-circle text-3xl text-orange-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Ajuda</h4>
                <p class="text-sm text-gray-600 mt-1">Central de dúvidas</p>
            </button>
        </div>
    `;
    
    return c.json({
        html: generatePortalHTML('patient', 'Portal do Paciente', content),
        scripts: []
    });
});

// Portal Médico
portalRoutes.get('/doctor', async (c) => {
    const content = `
        <!-- Dashboard Médico -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Pacientes do Dia -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-user-injured text-blue-600 mr-2"></i>
                    Pacientes Hoje
                </h3>
                <div class="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Consultas</span>
                        <span class="font-semibold">8</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Retornos</span>
                        <span class="font-semibold">4</span>
                    </div>
                </div>
            </div>
            
            <!-- Alertas Críticos -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                    Alertas Críticos
                </h3>
                <div class="space-y-3">
                    <div class="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <p class="font-semibold text-red-800">Maria Silva</p>
                        <p class="text-sm text-red-600">Exame alterado - Revisão urgente</p>
                    </div>
                    <div class="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                        <p class="font-semibold text-yellow-800">João Santos</p>
                        <p class="text-sm text-yellow-600">Adesão baixa ao tratamento</p>
                    </div>
                </div>
            </div>
            
            <!-- Protocolos Ativos -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-clipboard-list text-green-600 mr-2"></i>
                    Protocolos Ativos
                </h3>
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-700">FOLFOX</span>
                        <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">5 pacientes</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-700">AC-T</span>
                        <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">3 pacientes</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-700">R-CHOP</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">2 pacientes</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Médica -->
        ${aiConcernsHTML('doctor')}
        
        <!-- Ferramentas Clínicas -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-prescription text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Prescrever</h4>
                <p class="text-sm text-gray-600 mt-1">Nova prescrição</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-microscope text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Laudos</h4>
                <p class="text-sm text-gray-600 mt-1">Analisar resultados</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-book-medical text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Protocolos</h4>
                <p class="text-sm text-gray-600 mt-1">Guidelines atualizados</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-brain text-3xl text-orange-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">IA Assistente</h4>
                <p class="text-sm text-gray-600 mt-1">Suporte à decisão</p>
            </button>
        </div>
    `;
    
    return c.json({
        html: generatePortalHTML('doctor', 'Portal Médico', content),
        scripts: []
    });
});

// Portal Navegador
portalRoutes.get('/navigator', async (c) => {
    const content = `
        <!-- Dashboard Navegador -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Pacientes em Navegação com Botão Trilho -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-route text-teal-600 mr-2"></i>
                    Em Navegação
                </h3>
                <div class="text-3xl font-bold text-teal-600 mb-2">178</div>
                <div class="space-y-2 mb-4">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Novos hoje</span>
                        <span class="font-semibold text-green-600">+12</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Alta prevista</span>
                        <span class="font-semibold text-blue-600">5</span>
                    </div>
                </div>
                <!-- Botão Trilho de Atendimentos -->
                <button onclick="openKanbanView()" class="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
                    <i class="fas fa-columns mr-2"></i>
                    Trilho de Atendimentos
                </button>
            </div>
            
            <!-- Tarefas Pendentes -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-tasks text-orange-600 mr-2"></i>
                    Tarefas Pendentes
                </h3>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-2 bg-orange-50 rounded">
                        <span class="text-sm text-gray-700">Contatos telefônicos</span>
                        <span class="px-2 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-bold">23</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-blue-50 rounded">
                        <span class="text-sm text-gray-700">Agendamentos</span>
                        <span class="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-bold">15</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span class="text-sm text-gray-700">Documentos</span>
                        <span class="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs font-bold">8</span>
                    </div>
                </div>
            </div>
            
            <!-- Métricas de Performance -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-chart-line text-green-600 mr-2"></i>
                    Performance
                </h3>
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Taxa de Adesão</span>
                            <span class="text-sm font-bold text-green-600">87%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 87%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Satisfação</span>
                            <span class="text-sm font-bold text-blue-600">92%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 92%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Navegador -->
        ${aiConcernsHTML('navigator')}
        
        <!-- Modal Kanban (Trilho de Atendimentos) -->
        <div id="kanban-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 overflow-y-auto">
            <div class="flex items-start justify-center min-h-screen pt-4 px-4 pb-20">
                <div class="bg-white rounded-2xl w-full max-w-7xl shadow-2xl">
                    <!-- Header do Modal -->
                    <div class="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-t-2xl">
                        <div class="flex items-center justify-between">
                            <div>
                                <h2 class="text-2xl font-bold">
                                    <i class="fas fa-columns mr-3"></i>
                                    Trilho de Atendimentos - Visão Kanban
                                </h2>
                                <p class="text-teal-100 mt-1">Acompanhe todos os pacientes em cada fase da jornada</p>
                            </div>
                            <button onclick="closeKanbanView()" class="text-white hover:text-teal-200 transition-colors">
                                <i class="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Estatísticas Rápidas -->
                    <div class="bg-teal-50 px-6 py-4 border-b border-teal-100">
                        <div class="flex justify-around">
                            <div class="text-center">
                                <span class="text-2xl font-bold text-teal-700">178</span>
                                <span class="text-sm text-gray-600 ml-2">Total em Navegação</span>
                            </div>
                            <div class="text-center">
                                <span class="text-2xl font-bold text-orange-600">23</span>
                                <span class="text-sm text-gray-600 ml-2">Atenção Urgente</span>
                            </div>
                            <div class="text-center">
                                <span class="text-2xl font-bold text-green-600">87%</span>
                                <span class="text-sm text-gray-600 ml-2">Taxa de Adesão</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Kanban Board -->
                    <div class="p-6 overflow-x-auto">
                        <div class="flex gap-4 min-w-max">
                            <!-- Coluna: Triagem -->
                            <div class="kanban-column bg-gray-50 rounded-xl p-4 w-72">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-bold text-gray-800">
                                        <i class="fas fa-clipboard-check text-purple-600 mr-2"></i>
                                        Triagem
                                    </h3>
                                    <span class="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">15</span>
                                </div>
                                <div class="space-y-3 max-h-96 overflow-y-auto">
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" data-patient-id="PAC-001" onclick="window.open('/patient-view-integrated/PAC-001', '_blank')">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Maria Silva</span>
                                            <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Prioridade</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">CA Mama • Estadio II</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">Entrada: 10/01</span>
                                            <button class="text-purple-600 hover:text-purple-700">
                                                <i class="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" data-patient-id="PAC-004" onclick="window.open('/patient-view-integrated/PAC-004', '_blank')">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">João Santos</span>
                                            <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Normal</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">CA Próstata • Estadio I</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">Entrada: 11/01</span>
                                            <button class="text-purple-600 hover:text-purple-700">
                                                <i class="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Coluna: Diagnóstico -->
                            <div class="kanban-column bg-gray-50 rounded-xl p-4 w-72">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-bold text-gray-800">
                                        <i class="fas fa-microscope text-blue-600 mr-2"></i>
                                        Diagnóstico
                                    </h3>
                                    <span class="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">28</span>
                                </div>
                                <div class="space-y-3 max-h-96 overflow-y-auto">
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" data-patient-id="PAC-002" onclick="window.open('/patient-view-integrated/PAC-002', '_blank')">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Ana Costa</span>
                                            <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Urgente</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">CA Pulmão • Aguardando PET</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">3 dias aguardando</span>
                                            <button class="text-blue-600 hover:text-blue-700 btn-patient-view" data-patient-id="PAC-002">
                                                <i class="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Coluna: Tratamento -->
                            <div class="kanban-column bg-gray-50 rounded-xl p-4 w-72">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-bold text-gray-800">
                                        <i class="fas fa-procedures text-green-600 mr-2"></i>
                                        Tratamento
                                    </h3>
                                    <span class="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">85</span>
                                </div>
                                <div class="space-y-3 max-h-96 overflow-y-auto">
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" data-patient-id="PAC-003" onclick="window.open('/patient-view-integrated/PAC-003', '_blank')">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Carlos Mendes</span>
                                            <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Em dia</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">Quimio • Ciclo 3/6</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">Próxima: 20/01</span>
                                            <button class="text-green-600 hover:text-green-700">
                                                <i class="fas fa-info-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Coluna: Acompanhamento -->
                            <div class="kanban-column bg-gray-50 rounded-xl p-4 w-72">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-bold text-gray-800">
                                        <i class="fas fa-user-check text-orange-600 mr-2"></i>
                                        Acompanhamento
                                    </h3>
                                    <span class="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">35</span>
                                </div>
                                <div class="space-y-3 max-h-96 overflow-y-auto">
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" data-patient-id="PAC-006" onclick="window.open('/patient-view-integrated/PAC-006', '_blank')">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Lucia Ferreira</span>
                                            <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Controle</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">Pós-cirúrgico • 30 dias</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">Retorno: 25/01</span>
                                            <button class="text-orange-600 hover:text-orange-700">
                                                <i class="fas fa-calendar-check"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Coluna: Alta -->
                            <div class="kanban-column bg-gray-50 rounded-xl p-4 w-72">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-bold text-gray-800">
                                        <i class="fas fa-flag-checkered text-teal-600 mr-2"></i>
                                        Alta/Conclusão
                                    </h3>
                                    <span class="bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-bold">15</span>
                                </div>
                                <div class="space-y-3 max-h-96 overflow-y-auto">
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer border-l-4 border-green-500" onclick="window.open('/patient-view-integrated/PAC-005', '_blank')">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Pedro Oliveira</span>
                                            <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Sucesso</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">Tratamento concluído</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">Alta: 15/01</span>
                                            <button class="text-teal-600 hover:text-teal-700">
                                                <i class="fas fa-file-export"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer do Modal -->
                    <div class="bg-gray-50 px-6 py-4 rounded-b-2xl border-t">
                        <div class="flex items-center justify-between">
                            <div class="flex gap-4">
                                <button class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                                    <i class="fas fa-filter mr-2"></i>Filtrar
                                </button>
                                <button class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                                    <i class="fas fa-download mr-2"></i>Exportar
                                </button>
                            </div>
                            <div class="text-sm text-gray-600">
                                Última atualização: <span class="font-semibold">há 2 minutos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Script INLINE Completo para Kanban e View Universal -->
        <script>
            // Função para abrir o Kanban
            function openKanbanView() {
                document.getElementById('kanban-modal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
            
            // Função para fechar o Kanban
            function closeKanbanView() {
                document.getElementById('kanban-modal').classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
            
            // FUNÇÃO INLINE COMPLETA PARA ABRIR VIEW DO PACIENTE
            window.abrirViewPaciente = function(patientId) {
                console.log('===== FUNÇÃO abrirViewPaciente CHAMADA =====');
                console.log('Patient ID:', patientId);
                console.log('Criando modal...');
                
                // Dados dos pacientes
                const pacientes = {
                    'PAC-001': {
                        nome: 'Maria Silva Santos',
                        idade: 52,
                        diagnostico: 'Carcinoma Ductal Invasivo - Mama',
                        estadiamento: 'IIA (T2N0M0)',
                        medico: 'Dr. Roberto Almeida',
                        navegador: 'Enf. Patricia Lima',
                        telefone: '(11) 98765-4321',
                        email: 'maria.silva@email.com',
                        convenio: 'Unimed Premium'
                    },
                    'PAC-002': {
                        nome: 'Ana Costa',
                        idade: 45,
                        diagnostico: 'Carcinoma Pulmonar',
                        estadiamento: 'IIIA',
                        medico: 'Dr. Carlos Mendes',
                        navegador: 'Enf. Patricia Lima',
                        telefone: '(11) 98765-1234',
                        email: 'ana.costa@email.com',
                        convenio: 'SulAmérica'
                    },
                    'PAC-003': {
                        nome: 'Carlos Mendes',
                        idade: 67,
                        diagnostico: 'Adenocarcinoma Colorretal',
                        estadiamento: 'IIB',
                        medico: 'Dra. Fernanda Santos',
                        navegador: 'Enf. Patricia Lima',
                        telefone: '(11) 98765-5678',
                        email: 'carlos.mendes@email.com',
                        convenio: 'Bradesco Saúde'
                    },
                    'PAC-004': {
                        nome: 'João Santos',
                        idade: 72,
                        diagnostico: 'Carcinoma Prostático',
                        estadiamento: 'I',
                        medico: 'Dr. Paulo Ribeiro',
                        navegador: 'Enf. Patricia Lima',
                        telefone: '(11) 98765-9876',
                        email: 'joao.santos@email.com',
                        convenio: 'Amil'
                    },
                    'PAC-005': {
                        nome: 'Pedro Oliveira',
                        idade: 58,
                        diagnostico: 'Linfoma Não-Hodgkin',
                        estadiamento: 'IIIB',
                        medico: 'Dr. André Costa',
                        navegador: 'Enf. Patricia Lima',
                        telefone: '(11) 98765-4567',
                        email: 'pedro.oliveira@email.com',
                        convenio: 'Porto Seguro'
                    },
                    'PAC-006': {
                        nome: 'Lucia Ferreira',
                        idade: 61,
                        diagnostico: 'Carcinoma de Ovário',
                        estadiamento: 'IC',
                        medico: 'Dra. Paula Lima',
                        navegador: 'Enf. Patricia Lima',
                        telefone: '(11) 98765-7890',
                        email: 'lucia.ferreira@email.com',
                        convenio: 'NotreDame'
                    }
                };
                
                const paciente = pacientes[patientId] || pacientes['PAC-001'];
                
                // Remover modal anterior se existir
                const modalAnterior = document.getElementById('view-paciente-modal');
                if (modalAnterior) {
                    modalAnterior.remove();
                }
                
                // Criar modal
                const modal = document.createElement('div');
                modal.id = 'view-paciente-modal';
                modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999;';
                
                modal.innerHTML = \`
                    <div style="background: white; border-radius: 1rem; max-width: 1200px; width: 90%; max-height: 90vh; overflow: auto; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);">
                        <!-- Header -->
                        <div style="background: linear-gradient(to right, #0891b2, #0e7490); color: white; padding: 1.5rem; border-radius: 1rem 1rem 0 0;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div>
                                    <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">
                                        <i class="fas fa-user-injured" style="margin-right: 0.5rem;"></i>
                                        \${paciente.nome}
                                    </h2>
                                    <div style="display: flex; gap: 1rem; font-size: 0.875rem; opacity: 0.9;">
                                        <span><i class="fas fa-id-card" style="margin-right: 0.25rem;"></i> \${patientId}</span>
                                        <span><i class="fas fa-birthday-cake" style="margin-right: 0.25rem;"></i> \${paciente.idade} anos</span>
                                        <span><i class="fas fa-phone" style="margin-right: 0.25rem;"></i> \${paciente.telefone}</span>
                                    </div>
                                </div>
                                <button onclick="document.getElementById('view-paciente-modal').remove()" style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 0;">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Tabs -->
                        <div style="display: flex; gap: 0; border-bottom: 2px solid #e5e7eb; background: #f9fafb;">
                            <button onclick="mostrarTabPaciente('geral')" id="tab-btn-geral" style="padding: 0.75rem 1.5rem; background: white; color: #0891b2; border: none; border-bottom: 2px solid #0891b2; cursor: pointer; font-weight: 600;">
                                <i class="fas fa-chart-line" style="margin-right: 0.5rem;"></i>Visão Geral
                            </button>
                            <button onclick="mostrarTabPaciente('contatar')" id="tab-btn-contatar" style="padding: 0.75rem 1.5rem; background: transparent; color: #6b7280; border: none; cursor: pointer;">
                                <i class="fas fa-address-book" style="margin-right: 0.5rem;"></i>Contatar
                            </button>
                            <button onclick="mostrarTabPaciente('agendar')" id="tab-btn-agendar" style="padding: 0.75rem 1.5rem; background: transparent; color: #6b7280; border: none; cursor: pointer;">
                                <i class="fas fa-calendar-alt" style="margin-right: 0.5rem;"></i>Agendar
                            </button>
                            <button onclick="mostrarTabPaciente('jornada')" id="tab-btn-jornada" style="padding: 0.75rem 1.5rem; background: transparent; color: #6b7280; border: none; cursor: pointer;">
                                <i class="fas fa-route" style="margin-right: 0.5rem;"></i>Jornada
                            </button>
                            <button onclick="mostrarTabPaciente('checklist')" id="tab-btn-checklist" style="padding: 0.75rem 1.5rem; background: transparent; color: #6b7280; border: none; cursor: pointer;">
                                <i class="fas fa-tasks" style="margin-right: 0.5rem;"></i>Checklist
                            </button>
                            <button onclick="mostrarTabPaciente('ia')" id="tab-btn-ia" style="padding: 0.75rem 1.5rem; background: transparent; color: #6b7280; border: none; cursor: pointer;">
                                <i class="fas fa-brain" style="margin-right: 0.5rem;"></i>IA Laura
                            </button>
                        </div>
                        
                        <!-- Conteúdo das Tabs -->
                        <div style="padding: 1.5rem;">
                            <!-- Tab Visão Geral -->
                            <div id="tab-content-geral" style="display: block;">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                    <div style="background: #dbeafe; padding: 1rem; border-radius: 0.5rem;">
                                        <h3 style="font-weight: bold; margin-bottom: 0.5rem; color: #1e40af;">
                                            <i class="fas fa-notes-medical" style="margin-right: 0.5rem;"></i>Dados Clínicos
                                        </h3>
                                        <p style="margin: 0.25rem 0;"><strong>Diagnóstico:</strong> \${paciente.diagnostico}</p>
                                        <p style="margin: 0.25rem 0;"><strong>Estadiamento:</strong> \${paciente.estadiamento}</p>
                                        <p style="margin: 0.25rem 0;"><strong>Convênio:</strong> \${paciente.convenio}</p>
                                        <p style="margin: 0.25rem 0;"><strong>Protocolo:</strong> NCCN Guidelines 2024</p>
                                    </div>
                                    <div style="background: #d1fae5; padding: 1rem; border-radius: 0.5rem;">
                                        <h3 style="font-weight: bold; margin-bottom: 0.5rem; color: #14532d;">
                                            <i class="fas fa-user-md" style="margin-right: 0.5rem;"></i>Equipe Médica
                                        </h3>
                                        <p style="margin: 0.25rem 0;"><strong>Oncologista:</strong> \${paciente.medico}</p>
                                        <p style="margin: 0.25rem 0;"><strong>Navegador:</strong> \${paciente.navegador}</p>
                                        <p style="margin: 0.25rem 0;"><strong>Nutricionista:</strong> Dra. Ana Paula Santos</p>
                                        <p style="margin: 0.25rem 0;"><strong>Psicóloga:</strong> Dra. Marina Costa</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Tab Contatar -->
                            <div id="tab-content-contatar" style="display: none;">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                    <div>
                                        <h3 style="font-weight: bold; margin-bottom: 1rem;">Contatos do Paciente</h3>
                                        <button style="width: 100%; padding: 0.75rem; background: #10b981; color: white; border: none; border-radius: 0.5rem; margin-bottom: 0.5rem; cursor: pointer;">
                                            <i class="fas fa-phone" style="margin-right: 0.5rem;"></i>\${paciente.telefone}
                                        </button>
                                        <button style="width: 100%; padding: 0.75rem; background: #8b5cf6; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">
                                            <i class="fas fa-envelope" style="margin-right: 0.5rem;"></i>\${paciente.email}
                                        </button>
                                    </div>
                                    <div>
                                        <h3 style="font-weight: bold; margin-bottom: 1rem;">Equipe Médica</h3>
                                        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                                            <p style="font-weight: 600;">\${paciente.medico}</p>
                                            <p style="font-size: 0.875rem; color: #6b7280;">Oncologista</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Tab Agendar -->
                            <div id="tab-content-agendar" style="display: none;">
                                <h3 style="font-weight: bold; margin-bottom: 1rem;">
                                    <i class="fas fa-calendar-plus" style="margin-right: 0.5rem;"></i>Agendar Consulta
                                </h3>
                                <select style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; margin-bottom: 1rem;">
                                    <option>Consulta Médica</option>
                                    <option>Exame de Imagem</option>
                                    <option>Quimioterapia</option>
                                    <option>Radioterapia</option>
                                </select>
                                <input type="date" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; margin-bottom: 1rem;">
                                <button style="width: 100%; padding: 0.75rem; background: #0891b2; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">
                                    <i class="fas fa-check" style="margin-right: 0.5rem;"></i>Confirmar Agendamento
                                </button>
                            </div>
                            
                            <!-- Tab Jornada -->
                            <div id="tab-content-jornada" style="display: none;">
                                <h3 style="font-weight: bold; margin-bottom: 1rem;">
                                    <i class="fas fa-route" style="margin-right: 0.5rem;"></i>Jornada do Paciente
                                </h3>
                                <div style="border-left: 3px solid #0891b2; padding-left: 1rem;">
                                    <div style="margin-bottom: 1rem;">
                                        <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                                            <div style="width: 2rem; height: 2rem; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; margin-right: 1rem;">
                                                <i class="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <strong>Diagnóstico Confirmado</strong>
                                                <p style="font-size: 0.875rem; color: #6b7280;">10/01/2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="margin-bottom: 1rem;">
                                        <div style="display: flex; align-items: center;">
                                            <div style="width: 2rem; height: 2rem; background: #f59e0b; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; margin-right: 1rem;">
                                                <i class="fas fa-clock"></i>
                                            </div>
                                            <div>
                                                <strong>Em Tratamento</strong>
                                                <p style="font-size: 0.875rem; color: #6b7280;">Ciclo 3 de 6</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Tab Checklist -->
                            <div id="tab-content-checklist" style="display: none;">
                                <h3 style="font-weight: bold; margin-bottom: 1rem;">
                                    <i class="fas fa-tasks" style="margin-right: 0.5rem;"></i>Checklist de Acompanhamento
                                </h3>
                                <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                                    <label style="display: flex; align-items: center; margin-bottom: 0.5rem; cursor: pointer;">
                                        <input type="checkbox" checked style="margin-right: 0.5rem;">
                                        <span>Termo de Consentimento assinado</span>
                                    </label>
                                    <label style="display: flex; align-items: center; margin-bottom: 0.5rem; cursor: pointer;">
                                        <input type="checkbox" checked style="margin-right: 0.5rem;">
                                        <span>Exames em dia</span>
                                    </label>
                                    <label style="display: flex; align-items: center; cursor: pointer;">
                                        <input type="checkbox" style="margin-right: 0.5rem;">
                                        <span>Autorização do convênio pendente</span>
                                    </label>
                                </div>
                            </div>
                            
                            <!-- Tab IA -->
                            <div id="tab-content-ia" style="display: none;">
                                <h3 style="font-weight: bold; margin-bottom: 1rem;">
                                    <i class="fas fa-brain" style="margin-right: 0.5rem;"></i>Análise IA Laura
                                </h3>
                                <div style="background: linear-gradient(to bottom right, #f3e8ff, #e9d5ff); padding: 1.5rem; border-radius: 0.5rem; text-align: center;">
                                    <div style="font-size: 3rem; font-weight: bold; color: #7c3aed;">72</div>
                                    <div style="color: #6b7280;">Score de Ansiedade</div>
                                    <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #c084fc;">
                                        <p style="font-weight: 600; margin-bottom: 0.5rem;">Recomendações:</p>
                                        <ul style="text-align: left; font-size: 0.875rem;">
                                            <li>• Intensificar contato telefônico</li>
                                            <li>• Agendar consulta com psico-oncologia</li>
                                            <li>• Incluir familiar nas próximas consultas</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                \`;
                
                document.body.appendChild(modal);
                
                // Tornar a view visível
                modal.style.display = 'flex';
            }
            
            // Garantir que a função está disponível globalmente
            window.abrirViewPaciente = abrirViewPaciente;
            
            // Registrar a função após um pequeno delay para garantir carregamento
            setTimeout(() => {
                window.abrirViewPaciente = abrirViewPaciente;
                console.log('Função abrirViewPaciente registrada no window');
            }, 100);
            
            // Função para alternar tabs
            window.mostrarTabPaciente = function(tab) {
                // Esconder todas as tabs
                const tabs = ['geral', 'contatar', 'agendar', 'jornada', 'checklist', 'ia'];
                tabs.forEach(t => {
                    const content = document.getElementById('tab-content-' + t);
                    const btn = document.getElementById('tab-btn-' + t);
                    if (content) content.style.display = 'none';
                    if (btn) {
                        btn.style.background = 'transparent';
                        btn.style.color = '#6b7280';
                        btn.style.borderBottom = 'none';
                        btn.style.fontWeight = 'normal';
                    }
                });
                
                // Mostrar tab selecionada
                const selectedContent = document.getElementById('tab-content-' + tab);
                const selectedBtn = document.getElementById('tab-btn-' + tab);
                if (selectedContent) selectedContent.style.display = 'block';
                if (selectedBtn) {
                    selectedBtn.style.background = 'white';
                    selectedBtn.style.color = '#0891b2';
                    selectedBtn.style.borderBottom = '2px solid #0891b2';
                    selectedBtn.style.fontWeight = '600';
                }
            }
        </script>
        
        <!-- Ferramentas de Navegação - INTEGRADAS COM AS VIEWS -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button onclick="openNavigatorModal('contatar')" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <i class="fas fa-address-book text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Contatar</h4>
                <p class="text-sm text-gray-600 mt-1">Rede completa de contatos</p>
            </button>
            
            <button onclick="openNavigatorModal('agendar')" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <i class="fas fa-calendar-alt text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Agendar</h4>
                <p class="text-sm text-gray-600 mt-1">Sistema de agendamento</p>
            </button>
            
            <button onclick="openNavigatorModal('jornada')" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <i class="fas fa-route text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Jornada</h4>
                <p class="text-sm text-gray-600 mt-1">Wiki inteligente</p>
            </button>
            
            <button onclick="openNavigatorModal('checklist')" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <i class="fas fa-clipboard-check text-3xl text-indigo-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Checklist</h4>
                <p class="text-sm text-gray-600 mt-1">Double-check auditoria</p>
            </button>
        </div>
    `;
    
    // Adicionar apenas o modal ao content (botões flutuantes removidos)
    const enhancedContent = content + `
        <!-- Modal Container para as Views -->

        <div id="navigator-modal" class="fixed inset-0 z-50 overflow-y-auto" style="display: none; overflow-y: auto !important;">
            <!-- O conteúdo será inserido dinamicamente aqui -->
        </div>
    `;
    
    return c.json({
        html: generatePortalHTML('navigator', 'Navegador de Pacientes', enhancedContent),
        scripts: [
            `
            // ========================================
            // SISTEMA COMPLETO DO PORTAL DO NAVEGADOR
            // ========================================
            
            // Função principal para abrir view do paciente
            function openPatientView(patientId) {
                console.log('Abrindo view do paciente:', patientId);
                
                // Criar ou obter o modal
                let modal = document.getElementById('patient-view-modal');
                if (!modal) {
                    modal = document.createElement('div');
                    modal.id = 'patient-view-modal';
                    modal.className = 'fixed inset-0 z-50 overflow-y-auto';
                    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                    modal.style.display = 'none';
                    document.body.appendChild(modal);
                }
                
                // Dados simulados do paciente
                const patients = {
                    'PAC-001': {
                        nome: 'Maria Silva Santos',
                        idade: 52,
                        diagnostico: 'Carcinoma Ductal Invasivo - Mama',
                        estadiamento: 'IIA (T2N0M0)',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dr. Roberto Almeida',
                        telefone: '(11) 98765-4321',
                        convenio: 'Unimed Premium',
                        email: 'maria.silva@email.com'
                    },
                    'PAC-002': {
                        nome: 'Ana Costa',
                        idade: 45,
                        diagnostico: 'Carcinoma Pulmonar',
                        estadiamento: 'IIIA',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dr. Carlos Mendes',
                        telefone: '(11) 98765-1234',
                        convenio: 'SulAmérica',
                        email: 'ana.costa@email.com'
                    },
                    'PAC-003': {
                        nome: 'Carlos Mendes',
                        idade: 67,
                        diagnostico: 'Adenocarcinoma Colorretal',
                        estadiamento: 'IIB',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dra. Fernanda Santos',
                        telefone: '(11) 98765-5678',
                        convenio: 'Bradesco Saúde',
                        email: 'carlos.mendes@email.com'
                    },
                    'PAC-004': {
                        nome: 'João Santos',
                        idade: 72,
                        diagnostico: 'Carcinoma Prostático',
                        estadiamento: 'I',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dr. Paulo Ribeiro',
                        telefone: '(11) 98765-9876',
                        convenio: 'Amil',
                        email: 'joao.santos@email.com'
                    },
                    'PAC-005': {
                        nome: 'Pedro Oliveira',
                        idade: 58,
                        diagnostico: 'Linfoma Não-Hodgkin',
                        estadiamento: 'IIIB',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dr. André Costa',
                        telefone: '(11) 98765-4567',
                        convenio: 'Porto Seguro',
                        email: 'pedro.oliveira@email.com'
                    },
                    'PAC-006': {
                        nome: 'Lucia Ferreira',
                        idade: 61,
                        diagnostico: 'Carcinoma de Ovário',
                        estadiamento: 'IC',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dra. Paula Lima',
                        telefone: '(11) 98765-7890',
                        convenio: 'NotreDame',
                        email: 'lucia.ferreira@email.com'
                    }
                };
                
                const patient = patients[patientId] || patients['PAC-001'];
                
                // HTML completo da View Universal
                modal.innerHTML = renderPatientViewHTML(patientId, patient);
                
                // Mostrar modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Adicionar eventos ao modal
                setupModalEvents();
            }
            
            // Função para renderizar HTML da view do paciente
            function renderPatientViewHTML(patientId, patient) {
                return \`
                    <div class="flex items-center justify-center min-h-screen p-4">
                        <div class="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
                            <!-- Header -->
                            <div class="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h2 class="text-2xl font-bold mb-2">
                                            <i class="fas fa-user-injured mr-2"></i>
                                            \${patient.nome}
                                        </h2>
                                        <div class="flex gap-4 text-sm">
                                            <span><i class="fas fa-id-card mr-1"></i> \${patientId}</span>
                                            <span><i class="fas fa-birthday-cake mr-1"></i> \${patient.idade} anos</span>
                                            <span><i class="fas fa-phone mr-1"></i> \${patient.telefone}</span>
                                            <span><i class="fas fa-envelope mr-1"></i> \${patient.email}</span>
                                        </div>
                                    </div>
                                    <button onclick="closePatientView()" class="text-white hover:text-teal-200">
                                        <i class="fas fa-times text-2xl"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Tabs -->
                            <div class="border-b border-gray-200 bg-gray-50">
                                <nav class="flex -mb-px overflow-x-auto">
                                    <button onclick="showTab('overview')" class="tab-btn active px-6 py-3 border-b-2 border-teal-600 text-teal-600 font-medium whitespace-nowrap">
                                        <i class="fas fa-chart-line mr-2"></i>Visão Geral
                                    </button>
                                    <button onclick="showTab('contact')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600 whitespace-nowrap">
                                        <i class="fas fa-address-book mr-2"></i>Contatar
                                    </button>
                                    <button onclick="showTab('schedule')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600 whitespace-nowrap">
                                        <i class="fas fa-calendar-alt mr-2"></i>Agendar
                                    </button>
                                    <button onclick="showTab('journey')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600 whitespace-nowrap">
                                        <i class="fas fa-route mr-2"></i>Jornada
                                    </button>
                                    <button onclick="showTab('checklist')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600 whitespace-nowrap">
                                        <i class="fas fa-tasks mr-2"></i>Checklist
                                    </button>
                                    <button onclick="showTab('ai')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600 whitespace-nowrap">
                                        <i class="fas fa-brain mr-2"></i>IA Laura
                                    </button>
                                </nav>
                            </div>
                            
                            <!-- Content Area -->
                            <div class="overflow-y-auto" style="max-height: calc(90vh - 200px);">
                                \${generateTabsContent(patient, patientId)}
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            // Função para gerar conteúdo das tabs
            function generateTabsContent(patient, patientId) {
                return \`
                    <!-- Tab: Visão Geral -->
                    <div id="tab-overview" class="tab-content p-6">
                        \${generateOverviewTab(patient)}
                    </div>
                    
                    <!-- Tab: Contatar -->
                    <div id="tab-contact" class="tab-content hidden p-6">
                        \${generateContactTab(patient)}
                    </div>
                    
                    <!-- Tab: Agendar -->
                    <div id="tab-schedule" class="tab-content hidden p-6">
                        \${generateScheduleTab(patient)}
                    </div>
                    
                    <!-- Tab: Jornada -->
                    <div id="tab-journey" class="tab-content hidden p-6">
                        \${generateJourneyTab(patient)}
                    </div>
                    
                    <!-- Tab: Checklist -->
                    <div id="tab-checklist" class="tab-content hidden p-6">
                        \${generateChecklistTab(patient)}
                    </div>
                    
                    <!-- Tab: IA Laura -->
                    <div id="tab-ai" class="tab-content hidden p-6">
                        \${generateAITab(patient)}
                    </div>
                \`;
            }
            
            // Funções para gerar conteúdo de cada tab
            function generateOverviewTab(patient) {
                return \`
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-blue-50 rounded-lg p-4">
                            <h3 class="font-bold text-blue-900 mb-3">
                                <i class="fas fa-notes-medical mr-2"></i>Dados Clínicos
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Diagnóstico:</strong> \${patient.diagnostico}</p>
                                <p><strong>Estadiamento:</strong> \${patient.estadiamento}</p>
                                <p><strong>Início do Tratamento:</strong> 10/01/2025</p>
                                <p><strong>Protocolo:</strong> NCCN Guidelines 2024</p>
                            </div>
                        </div>
                        
                        <div class="bg-green-50 rounded-lg p-4">
                            <h3 class="font-bold text-green-900 mb-3">
                                <i class="fas fa-user-md mr-2"></i>Equipe Médica
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Oncologista:</strong> \${patient.medico}</p>
                                <p><strong>Navegador:</strong> \${patient.navegador}</p>
                                <p><strong>Nutricionista:</strong> Dra. Ana Paula Santos</p>
                                <p><strong>Psicóloga:</strong> Dra. Marina Costa</p>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateContactTab(patient) {
                return \`
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white border rounded-lg p-4">
                            <h3 class="font-bold text-gray-800 mb-4">
                                <i class="fas fa-user mr-2"></i>Contatos do Paciente
                            </h3>
                            <div class="space-y-3">
                                <button class="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                                    <i class="fas fa-phone mr-2"></i>Ligar: \${patient.telefone}
                                </button>
                                <button class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                    <i class="fab fa-whatsapp mr-2"></i>WhatsApp
                                </button>
                                <button class="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
                                    <i class="fas fa-envelope mr-2"></i>E-mail: \${patient.email}
                                </button>
                            </div>
                        </div>
                        
                        <div class="bg-white border rounded-lg p-4">
                            <h3 class="font-bold text-gray-800 mb-4">
                                <i class="fas fa-hospital-user mr-2"></i>Equipe Médica
                            </h3>
                            <div class="space-y-3">
                                <div class="p-3 bg-blue-50 rounded">
                                    <p class="font-semibold">\${patient.medico}</p>
                                    <button class="mt-2 text-blue-600 hover:text-blue-700 text-sm">
                                        <i class="fas fa-phone mr-1"></i>Contatar
                                    </button>
                                </div>
                                <div class="p-3 bg-green-50 rounded">
                                    <p class="font-semibold">\${patient.navegador}</p>
                                    <button class="mt-2 text-green-600 hover:text-green-700 text-sm">
                                        <i class="fas fa-phone mr-1"></i>Contatar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateScheduleTab(patient) {
                return \`
                    <div class="bg-white rounded-lg">
                        <h3 class="font-bold text-gray-800 mb-4">
                            <i class="fas fa-calendar-plus mr-2"></i>Agendar Consulta/Procedimento
                        </h3>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Agendamento</label>
                            <select class="w-full border rounded-lg px-3 py-2">
                                <option>Consulta Médica</option>
                                <option>Exame de Imagem</option>
                                <option>Coleta de Sangue</option>
                                <option>Quimioterapia</option>
                                <option>Radioterapia</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Data e Horário</label>
                            <input type="datetime-local" class="w-full border rounded-lg px-3 py-2">
                        </div>
                        <button class="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">
                            <i class="fas fa-check mr-2"></i>Confirmar Agendamento
                        </button>
                    </div>
                \`;
            }
            
            function generateJourneyTab(patient) {
                return \`
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="fas fa-route mr-2"></i>Jornada do Paciente
                    </h3>
                    <div class="relative">
                        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="bg-green-500 text-white rounded-full p-2 z-10">
                                    <i class="fas fa-check text-xs"></i>
                                </div>
                                <div class="ml-4 bg-green-50 rounded-lg p-4 flex-1">
                                    <h4 class="font-semibold">Diagnóstico Confirmado</h4>
                                    <p class="text-sm text-gray-600">10/01/2025</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-yellow-500 text-white rounded-full p-2 z-10 animate-pulse">
                                    <i class="fas fa-clock text-xs"></i>
                                </div>
                                <div class="ml-4 bg-yellow-50 rounded-lg p-4 flex-1 border-2 border-yellow-300">
                                    <h4 class="font-semibold">Em Tratamento</h4>
                                    <p class="text-sm text-gray-600">3º Ciclo de Quimioterapia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateChecklistTab(patient) {
                return \`
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="fas fa-tasks mr-2"></i>Checklist de Acompanhamento
                    </h3>
                    <div class="space-y-4">
                        <div class="bg-white border rounded-lg p-4">
                            <h4 class="font-semibold mb-3 text-blue-800">
                                <i class="fas fa-folder-open mr-2"></i>Documentação
                            </h4>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" checked class="mr-2">
                                    <span>Termo de Consentimento assinado</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" checked class="mr-2">
                                    <span>Carteirinha do convênio atualizada</span>
                                </label>
                            </div>
                        </div>
                        <div class="bg-white border rounded-lg p-4">
                            <h4 class="font-semibold mb-3 text-green-800">
                                <i class="fas fa-vial mr-2"></i>Exames
                            </h4>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" checked class="mr-2">
                                    <span>Hemograma completo</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2">
                                    <span>Marcadores tumorais</span>
                                </label>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateAITab(patient) {
                return \`
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="fas fa-brain mr-2"></i>Análise Preditiva - IA Laura
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                            <h4 class="font-semibold text-purple-900 mb-3">Score de Ansiedade</h4>
                            <div class="text-center">
                                <div class="text-4xl font-bold text-purple-700">72</div>
                                <div class="text-sm text-purple-600 mt-1">Moderado-Alto</div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                            <h4 class="font-semibold text-green-900 mb-3">Recomendações</h4>
                            <ul class="text-sm space-y-1 text-green-700">
                                <li>• Intensificar contato telefônico</li>
                                <li>• Agendar consulta psico-oncologia</li>
                                <li>• Incluir familiar nas consultas</li>
                            </ul>
                        </div>
                    </div>
                \`;
            }
            
            // Função para fechar a view do paciente
            function closePatientView() {
                const modal = document.getElementById('patient-view-modal');
                if (modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            }
            
            // Função para mostrar tab
            function showTab(tabName) {
                document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.classList.add('hidden');
                });
                
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('border-teal-600', 'text-teal-600', 'active');
                    btn.classList.add('border-transparent', 'text-gray-600');
                });
                
                const selectedTab = document.getElementById('tab-' + tabName);
                if (selectedTab) {
                    selectedTab.classList.remove('hidden');
                }
                
                if (event && event.target) {
                    event.target.classList.add('border-teal-600', 'text-teal-600', 'active');
                    event.target.classList.remove('border-transparent', 'text-gray-600');
                }
            }
            
            // Função para configurar eventos do modal
            function setupModalEvents() {
                const modal = document.getElementById('patient-view-modal');
                if (modal) {
                    modal.addEventListener('click', function(e) {
                        if (e.target === modal) {
                            closePatientView();
                        }
                    });
                }
            }
            
            // Função para inicializar eventos do Kanban
            function initializeKanbanEvents() {
                console.log('Inicializando eventos do Kanban...');
                
                // Aguardar um momento para garantir que o DOM está pronto
                setTimeout(() => {
                    const kanbanCards = document.querySelectorAll('.kanban-card');
                    console.log('Cards encontrados:', kanbanCards.length);
                    
                    kanbanCards.forEach(card => {
                        card.style.cursor = 'pointer';
                        card.addEventListener('click', function(e) {
                            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                                e.stopPropagation();
                                return;
                            }
                            
                            const patientId = this.dataset.patientId || 'PAC-001';
                            console.log('Card clicado, abrindo paciente:', patientId);
                            openPatientView(patientId);
                        });
                    });
                    
                    // Adicionar eventos aos botões dentro dos cards
                    document.querySelectorAll('.kanban-card button').forEach(btn => {
                        btn.addEventListener('click', function(e) {
                            e.stopPropagation();
                            const card = this.closest('.kanban-card');
                            const patientId = card?.dataset.patientId || 'PAC-001';
                            openPatientView(patientId);
                        });
                    });
                }, 500);
            }
            
            // Marcar portal como navigator para ativar funcionalidades
            document.addEventListener('DOMContentLoaded', function() {
                document.body.classList.add('navigator-portal');
                console.log('Portal Navegador carregado com sistema integrado!');
                
                // Garantir que as funções estejam disponíveis globalmente
                window.openPatientView = openPatientView;
                window.closePatientView = closePatientView;
                window.showTab = showTab;
                
                console.log('Funções registradas no window:', {
                    openPatientView: typeof window.openPatientView,
                    closePatientView: typeof window.closePatientView,
                    showTab: typeof window.showTab
                });
                
                // Adicionar botões de ação nas linhas da tabela de pacientes se existir
                const actionCells = document.querySelectorAll('td.patient-actions');
                actionCells.forEach(cell => {
                    const patientId = cell.dataset.patientId || 'PAC-001';
                    cell.innerHTML = \`
                        <button onclick="openNavigatorModal('contatar', '\${patientId}')" class="text-blue-600 hover:text-blue-700 mr-2" title="Contatar">
                            <i class="fas fa-address-book"></i>
                        </button>
                        <button onclick="openNavigatorModal('agendar', '\${patientId}')" class="text-purple-600 hover:text-purple-700 mr-2" title="Agendar">
                            <i class="fas fa-calendar-alt"></i>
                        </button>
                        <button onclick="openNavigatorModal('jornada', '\${patientId}')" class="text-green-600 hover:text-green-700 mr-2" title="Jornada">
                            <i class="fas fa-route"></i>
                        </button>
                        <button onclick="openNavigatorModal('checklist', '\${patientId}')" class="text-indigo-600 hover:text-indigo-700" title="Checklist">
                            <i class="fas fa-clipboard-check"></i>
                        </button>
                    \`;
                });
            });
            `
        ]
    });
});

// Portal Financeiro
portalRoutes.get('/financial', async (c) => {
    // Retornar o conteúdo do Portal Financeiro para carregamento dinâmico
    const { html, scripts } = financialPortalContent();
    return c.json({
        html: html,
        scripts: scripts
    });
});

// Portal Bem-Estar
portalRoutes.get('/wellness', async (c) => {
    const content = `
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
                    <i class="fas fa-exclamation-triangle text-red-600 text-xl mr-3"></i>
                    <div>
                        <p class="font-semibold text-red-800">Atenção Urgente</p>
                        <p class="text-2xl font-bold text-red-600">3 pacientes</p>
                        <p class="text-xs text-gray-600">Risco alto de crise emocional</p>
                    </div>
                </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                <div class="flex items-center">
                    <i class="fas fa-eye text-yellow-600 text-xl mr-3"></i>
                    <div>
                        <p class="font-semibold text-yellow-800">Monitoramento</p>
                        <p class="text-2xl font-bold text-yellow-700">12 pacientes</p>
                        <p class="text-xs text-gray-600">Necessitam acompanhamento</p>
                    </div>
                </div>
            </div>
            
            <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                <div class="flex items-center">
                    <i class="fas fa-heart text-green-600 text-xl mr-3"></i>
                    <div>
                        <p class="font-semibold text-green-800">Bem-Estar</p>
                        <p class="text-2xl font-bold text-green-600">85%</p>
                        <p class="text-xs text-gray-600">Taxa de satisfação</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- High Risk Patients -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="fas fa-user-friends text-purple-600 mr-2"></i>
                    Pacientes em Acompanhamento Intensivo
                </h3>
                
                <div class="space-y-3">
                    <div class="border rounded-lg p-3 bg-red-50">
                        <div class="flex items-start justify-between">
                            <div>
                                <p class="font-semibold">João Silva</p>
                                <p class="text-sm text-gray-600">Depressão: 8/10 | Ansiedade: 9/10</p>
                                <div class="mt-2">
                                    <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                                        <i class="fas fa-brain"></i> Ideação suicida
                                    </span>
                                    <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded ml-1">
                                        <i class="fas fa-calendar"></i> Sessão hoje 14h
                                    </span>
                                </div>
                            </div>
                            <button class="text-red-600 hover:text-red-700">
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
                                    <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                                        <i class="fas fa-moon"></i> Insônia severa
                                    </span>
                                </div>
                            </div>
                            <button class="text-green-600 hover:text-green-700">
                                <i class="fas fa-comment"></i>
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
                                    <i class="fas fa-clock"></i> Próximo: Quinta 14h
                                </p>
                            </div>
                            <div class="text-right">
                                <div class="text-2xl font-bold text-purple-700">92%</div>
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
                                    <i class="fas fa-clock"></i> Diário às 10h
                                </p>
                            </div>
                            <div class="text-right">
                                <div class="text-2xl font-bold text-blue-700">88%</div>
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
                                    <i class="fas fa-clock"></i> Sábado 10h
                                </p>
                            </div>
                            <div class="text-right">
                                <div class="text-2xl font-bold text-pink-700">95%</div>
                                <p class="text-xs text-gray-600">Satisfação</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Trilho de Atendimentos - Replicado do Portal Navegador -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-stream text-purple-600 mr-2"></i>
                Trilho de Atendimentos
            </h3>
            
            <!-- Kanban Board Completo -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <!-- Coluna Triagem -->
                <div class="bg-gray-100 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="font-semibold text-gray-700">Triagem</h3>
                        <span class="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">12</span>
                    </div>
                    <div class="space-y-2">
                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-purple-600 cursor-pointer hover:shadow-md transition-all">
                            <p class="font-semibold text-sm">Ana Silva</p>
                            <p class="text-xs text-gray-600">Depressão pós-diagnóstico</p>
                            <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded mt-1 inline-block">
                                <i class="fas fa-clock"></i> Prioridade
                            </span>
                        </div>
                        <div class="bg-white p-3 rounded shadow-sm cursor-pointer hover:shadow-md transition-all">
                            <p class="font-semibold text-sm">Carlos Mendes</p>
                            <p class="text-xs text-gray-600">Ansiedade inicial</p>
                        </div>
                    </div>
                </div>

                <!-- Coluna Diagnóstico -->
                <div class="bg-gray-100 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="font-semibold text-gray-700">Diagnóstico</h3>
                        <span class="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">8</span>
                    </div>
                    <div class="space-y-2">
                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-blue-500 cursor-pointer hover:shadow-md transition-all">
                            <p class="font-semibold text-sm">João Pedro</p>
                            <p class="text-xs text-gray-600">Avaliação psicológica</p>
                            <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mt-1 inline-block">
                                <i class="fas fa-brain"></i> Em teste
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Coluna Tratamento -->
                <div class="bg-gray-100 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="font-semibold text-gray-700">Tratamento</h3>
                        <span class="bg-green-600 text-white text-xs px-2 py-1 rounded-full">45</span>
                    </div>
                    <div class="space-y-2">
                        <div class="bg-white p-3 rounded shadow-sm cursor-pointer hover:shadow-md transition-all">
                            <p class="font-semibold text-sm">Roberto Lima</p>
                            <p class="text-xs text-gray-600">Terapia CBT - Sessão 3/12</p>
                            <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div class="bg-green-600 h-2 rounded-full" style="width: 25%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Coluna Acompanhamento -->
                <div class="bg-gray-100 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="font-semibold text-gray-700">Acompanhamento</h3>
                        <span class="bg-yellow-600 text-white text-xs px-2 py-1 rounded-full">23</span>
                    </div>
                    <div class="space-y-2">
                        <div class="bg-white p-3 rounded shadow-sm cursor-pointer hover:shadow-md transition-all">
                            <p class="font-semibold text-sm">Paulo Santos</p>
                            <p class="text-xs text-gray-600">Check-in mensal</p>
                            <span class="text-xs bg-green-100 text-green-700 px-1 py-0.5 rounded">Estável</span>
                        </div>
                    </div>
                </div>

                <!-- Coluna Alta -->
                <div class="bg-gray-100 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="font-semibold text-gray-700">Alta</h3>
                        <span class="bg-green-700 text-white text-xs px-2 py-1 rounded-full">15</span>
                    </div>
                    <div class="space-y-2">
                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-green-600 cursor-pointer hover:shadow-md transition-all">
                            <p class="font-semibold text-sm">Felipe Costa</p>
                            <p class="text-xs text-gray-600">Alta programada</p>
                            <span class="text-xs bg-green-100 text-green-700 px-1 py-0.5 rounded">
                                <i class="fas fa-check"></i> Recuperado
                            </span>
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

        ${aiConcernsHTML('wellness')}
    `;
    
    return c.json({
        html: generatePortalHTML('wellness', 'Bem-Estar e Apoio', content),
        scripts: [`
            // Função para mostrar conteúdo dinâmico dos botões
            window.showWellnessContent = function(type) {
                const contentDiv = document.getElementById('wellnessContent');
                if (!contentDiv) return;
                
                contentDiv.classList.remove('hidden');
                
                const contents = {
                    grupos: '<div class="bg-purple-50 rounded-lg p-6"><h4 class="text-lg font-bold text-purple-800 mb-4"><i class="fas fa-users mr-2"></i>Grupos de Apoio Disponíveis</h4><p>Conteúdo dos grupos...</p></div>',
                    psicologia: '<div class="bg-blue-50 rounded-lg p-6"><h4 class="text-lg font-bold text-blue-800 mb-4"><i class="fas fa-brain mr-2"></i>Serviços de Psicologia</h4><p>Conteúdo de psicologia...</p></div>',
                    terapias: '<div class="bg-green-50 rounded-lg p-6"><h4 class="text-lg font-bold text-green-800 mb-4"><i class="fas fa-spa mr-2"></i>Terapias Integrativas</h4><p>Conteúdo de terapias...</p></div>',
                    diario: '<div class="bg-pink-50 rounded-lg p-6"><h4 class="text-lg font-bold text-pink-800 mb-4"><i class="fas fa-book mr-2"></i>Diário Emocional</h4><p>Conteúdo do diário...</p></div>'
                };
                
                const content = contents[type];
                if (content) {
                    contentDiv.innerHTML = content;
                    contentDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        `]
    });
});portalRoutes.get('/research', async (c) => {
    const content = `
        <!-- Dashboard de Pesquisa -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Estudos Ativos -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-flask text-green-600 mr-2"></i>
                    Estudos Ativos
                </h3>
                <div class="text-3xl font-bold text-green-600 mb-2">24</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Fase III</span>
                        <span class="font-semibold">8</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Fase II</span>
                        <span class="font-semibold">10</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Observacionais</span>
                        <span class="font-semibold">6</span>
                    </div>
                </div>
            </div>
            
            <!-- Pacientes em Pesquisa -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-users text-blue-600 mr-2"></i>
                    Participantes
                </h3>
                <div class="text-3xl font-bold text-blue-600 mb-2">1,847</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Novos este mês</span>
                        <span class="font-semibold text-green-600">+67</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Taxa de retenção</span>
                        <span class="font-semibold">94%</span>
                    </div>
                </div>
            </div>
            
            <!-- Publicações -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-file-medical-alt text-purple-600 mr-2"></i>
                    Publicações 2024
                </h3>
                <div class="text-3xl font-bold text-purple-600 mb-2">42</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Impact Factor >5</span>
                        <span class="font-semibold">15</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Citações</span>
                        <span class="font-semibold">328</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Pesquisa -->
        ${aiConcernsHTML('research')}
        
        <!-- Ferramentas de Pesquisa -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-database text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Banco de Dados</h4>
                <p class="text-sm text-gray-600 mt-1">REDCap & BioBanco</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-chart-bar text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Análises</h4>
                <p class="text-sm text-gray-600 mt-1">Estatísticas e IA</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-clipboard-list text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Protocolos</h4>
                <p class="text-sm text-gray-600 mt-1">Gerenciar estudos</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-graduation-cap text-3xl text-orange-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Educação</h4>
                <p class="text-sm text-gray-600 mt-1">Cursos e treinamentos</p>
            </button>
        </div>
    `;
    
    return c.json({
        html: generatePortalHTML('research', 'Pesquisa Clínica', content),
        scripts: []
    });
});

// Portal Admin Master
portalRoutes.get('/admin', async (c) => {
    const content = `
        <!-- Dashboard Master Admin -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <!-- Métricas Críticas do Sistema -->
            <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-xl">
                <div class="flex items-center justify-between mb-4">
                    <i class="fas fa-users text-3xl opacity-70"></i>
                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">+12%</span>
                </div>
                <div class="text-3xl font-bold">847</div>
                <div class="text-sm opacity-90">Usuários Ativos</div>
                <div class="mt-2 text-xs opacity-70">156 médicos • 523 pacientes</div>
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
            
            <div class="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white shadow-xl">
                <div class="flex items-center justify-between mb-4">
                    <i class="fas fa-server text-3xl opacity-70"></i>
                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">EDGE</span>
                </div>
                <div class="text-3xl font-bold">12ms</div>
                <div class="text-sm opacity-90">Latência Média</div>
                <div class="mt-2 text-xs opacity-70">287 PoPs ativos</div>
            </div>
            
            <div class="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-6 text-white shadow-xl">
                <div class="flex items-center justify-between mb-4">
                    <i class="fas fa-shield-alt text-3xl opacity-70"></i>
                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">LGPD</span>
                </div>
                <div class="text-3xl font-bold">100%</div>
                <div class="text-sm opacity-90">Compliance</div>
                <div class="mt-2 text-xs opacity-70">0 incidentes</div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Admin -->
        ${aiConcernsHTML('admin')}
        
        <!-- Painéis de Controle -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <!-- Gestão de Personas -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-users-cog text-green-600 mr-2"></i>
                        Gestão de Personas
                    </h3>
                    <button class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                </div>
                <div class="space-y-3 mb-4">
                    <div class="flex justify-between p-2 bg-gray-50 rounded">
                        <span class="text-sm text-gray-700">Médicos</span>
                        <span class="font-bold text-green-600">156</span>
                    </div>
                    <div class="flex justify-between p-2 bg-gray-50 rounded">
                        <span class="text-sm text-gray-700">Pacientes</span>
                        <span class="font-bold text-blue-600">523</span>
                    </div>
                    <div class="flex justify-between p-2 bg-gray-50 rounded">
                        <span class="text-sm text-gray-700">Navegadores</span>
                        <span class="font-bold text-purple-600">42</span>
                    </div>
                </div>
                <button class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <i class="fas fa-user-plus mr-2"></i>Adicionar
                </button>
            </div>
            
            <!-- Processos & Workflows -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-cogs text-purple-600 mr-2"></i>
                        Processos & Workflows
                    </h3>
                    <button class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                </div>
                <div class="space-y-3 mb-4">
                    <div class="p-2 bg-gray-50 rounded">
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Triagem Auto</span>
                            <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Ativo</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 87%"></div>
                        </div>
                    </div>
                    <div class="p-2 bg-gray-50 rounded">
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Navegação</span>
                            <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Running</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 92%"></div>
                        </div>
                    </div>
                </div>
                <button class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    <i class="fas fa-plus-circle mr-2"></i>Novo Workflow
                </button>
            </div>
            
            <!-- Configuração IA -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-brain text-pink-600 mr-2"></i>
                        Configuração IA
                    </h3>
                    <button class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                </div>
                <div class="space-y-3 mb-4">
                    <div class="p-2 bg-gray-50 rounded">
                        <div class="flex justify-between">
                            <span class="text-sm text-gray-700">LAURA</span>
                            <div class="flex items-center">
                                <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                <span class="text-xs text-green-600">Online</span>
                            </div>
                        </div>
                        <div class="text-xs text-gray-500 mt-1">Accuracy: 97%</div>
                    </div>
                    <div class="p-2 bg-gray-50 rounded">
                        <div class="flex justify-between">
                            <span class="text-sm text-gray-700">API Calls</span>
                            <span class="font-bold text-pink-600">12,847</span>
                        </div>
                        <div class="text-xs text-gray-500 mt-1">Custo: R$ 127.34</div>
                    </div>
                </div>
                <button class="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
                    <i class="fas fa-sliders-h mr-2"></i>Ajustar
                </button>
            </div>
        </div>
        
        <!-- Ações Rápidas Admin -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-database text-3xl text-yellow-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Database</h4>
                <p class="text-sm text-gray-600 mt-1">D1, KV, R2</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-shield-virus text-3xl text-red-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Segurança</h4>
                <p class="text-sm text-gray-600 mt-1">LGPD & ISO</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-chart-line text-3xl text-cyan-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Analytics</h4>
                <p class="text-sm text-gray-600 mt-1">BI & Reports</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-tools text-3xl text-gray-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Sistema</h4>
                <p class="text-sm text-gray-600 mt-1">Config & Deploy</p>
            </button>
        </div>
    `;
    
    return c.json({
        html: generatePortalHTML('admin', 'Master Administrator', content),
        scripts: []
    });
});

export { portalRoutes }