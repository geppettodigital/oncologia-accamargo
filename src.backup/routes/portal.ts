import { Hono } from 'hono'
import { aiConcernsHTML } from '../components/ai-concerns-enhanced'

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
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
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
                                    
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
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
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Ana Costa</span>
                                            <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Urgente</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">CA Pulmão • Aguardando PET</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">3 dias aguardando</span>
                                            <button class="text-blue-600 hover:text-blue-700">
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
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
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
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
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
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer border-l-4 border-green-500">
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
        
        <!-- Script para Kanban -->
        <script>
            function openKanbanView() {
                document.getElementById('kanban-modal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
            
            function closeKanbanView() {
                document.getElementById('kanban-modal').classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
            
            // Fechar modal ao clicar fora
            document.getElementById('kanban-modal')?.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeKanbanView();
                }
            });
        </script>
        
        <!-- Ferramentas de Navegação -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-phone-alt text-3xl text-teal-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Contatar</h4>
                <p class="text-sm text-gray-600 mt-1">Ligar para paciente</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-calendar-plus text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Agendar</h4>
                <p class="text-sm text-gray-600 mt-1">Marcar consultas</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-map-marked-alt text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Jornada</h4>
                <p class="text-sm text-gray-600 mt-1">Ver mapa completo</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-clipboard-check text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Checklist</h4>
                <p class="text-sm text-gray-600 mt-1">Tarefas do dia</p>
            </button>
        </div>
    `;
    
    return c.json({
        html: generatePortalHTML('navigator', 'Navegador de Pacientes', content),
        scripts: []
    });
});

// Portal Financeiro
portalRoutes.get('/financial', async (c) => {
    const content = `
        <!-- Métricas Financeiras -->
        <div class="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-xl p-8 text-white mb-8">
            <h2 class="text-2xl font-bold mb-6">
                <i class="fas fa-shield-alt mr-3"></i>
                Proteção Financeira com IA
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="text-center">
                    <div class="text-4xl font-bold mb-2">R$ 2.4M</div>
                    <div class="text-green-200">Glosas Evitadas</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold mb-2">98.5%</div>
                    <div class="text-green-200">Taxa de Aprovação</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold mb-2">1,247</div>
                    <div class="text-green-200">Auditorias Automáticas</div>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Financeira -->
        ${aiConcernsHTML('financial')}
        
        <!-- Ferramentas Financeiras -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-file-invoice-dollar text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Faturamento</h4>
                <p class="text-sm text-gray-600 mt-1">Gestão de contas</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-search-dollar text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Auditoria</h4>
                <p class="text-sm text-gray-600 mt-1">Análise preventiva</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-chart-pie text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Relatórios</h4>
                <p class="text-sm text-gray-600 mt-1">Dashboards gerenciais</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-robot text-3xl text-orange-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">IA Financeira</h4>
                <p class="text-sm text-gray-600 mt-1">Previsões e alertas</p>
            </button>
        </div>
    `;
    
    return c.json({
        html: generatePortalHTML('financial', 'Gestão Financeira', content),
        scripts: []
    });
});

// Portal Bem-Estar
portalRoutes.get('/wellness', async (c) => {
    const content = `
        <!-- Dashboard de Bem-Estar -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Estado Emocional -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-smile text-cyan-600 mr-2"></i>
                    Estado Emocional Geral
                </h3>
                <div class="text-center py-4">
                    <div class="text-5xl mb-3">😊</div>
                    <p class="text-lg font-semibold text-gray-700">Estável</p>
                    <p class="text-sm text-gray-600 mt-2">Última avaliação: Hoje, 10:30</p>
                </div>
            </div>
            
            <!-- Atividades de Apoio -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-hands-helping text-purple-600 mr-2"></i>
                    Atividades Hoje
                </h3>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-2 bg-purple-50 rounded">
                        <span class="text-sm text-gray-700">Grupo de Apoio</span>
                        <span class="text-xs text-purple-600 font-semibold">14:00</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-cyan-50 rounded">
                        <span class="text-sm text-gray-700">Yoga Terapêutica</span>
                        <span class="text-xs text-cyan-600 font-semibold">16:00</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span class="text-sm text-gray-700">Meditação Guiada</span>
                        <span class="text-xs text-green-600 font-semibold">18:00</span>
                    </div>
                </div>
            </div>
            
            <!-- Recursos Disponíveis -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-book-open text-green-600 mr-2"></i>
                    Recursos de Apoio
                </h3>
                <div class="space-y-3">
                    <button class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                        <i class="fas fa-video text-blue-600 mr-2"></i>
                        <span class="text-sm font-medium">Vídeos Educativos</span>
                    </button>
                    <button class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                        <i class="fas fa-headphones text-purple-600 mr-2"></i>
                        <span class="text-sm font-medium">Áudios Relaxantes</span>
                    </button>
                    <button class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                        <i class="fas fa-file-alt text-green-600 mr-2"></i>
                        <span class="text-sm font-medium">Guias e Artigos</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Bem-Estar -->
        ${aiConcernsHTML('wellness')}
        
        <!-- Ferramentas de Bem-Estar -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-user-friends text-3xl text-cyan-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Grupos</h4>
                <p class="text-sm text-gray-600 mt-1">Participar de grupos</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-brain text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Psicologia</h4>
                <p class="text-sm text-gray-600 mt-1">Agendar sessão</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-spa text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Terapias</h4>
                <p class="text-sm text-gray-600 mt-1">Práticas integrativas</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-journal-whills text-3xl text-orange-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Diário</h4>
                <p class="text-sm text-gray-600 mt-1">Registro emocional</p>
            </button>
        </div>
    `;
    
    return c.json({
        html: generatePortalHTML('wellness', 'Bem-Estar e Apoio', content),
        scripts: []
    });
});

// Portal Pesquisa
portalRoutes.get('/research', async (c) => {
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