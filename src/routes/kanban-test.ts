import { Hono } from 'hono';

const kanbanTestRoutes = new Hono();

kanbanTestRoutes.get('/kanban-test', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste Kanban com View Universal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        .kanban-card {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .kanban-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold text-teal-700 mb-8">
            <i class="fas fa-columns mr-3"></i>
            Teste do Kanban com View Universal
        </h1>
        
        <!-- Cards do Kanban -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Card 1 -->
            <div class="kanban-card bg-white p-4 rounded-lg shadow" onclick="abrirViewPaciente('PAC-001')">
                <div class="flex items-start justify-between mb-2">
                    <span class="font-bold text-lg">Maria Silva Santos</span>
                    <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Prioridade</span>
                </div>
                <p class="text-sm text-gray-600 mb-2">CA Mama • Estadio II</p>
                <button class="text-blue-600 hover:text-blue-700 text-sm">
                    <i class="fas fa-eye mr-1"></i>Clique para abrir View Universal
                </button>
            </div>
            
            <!-- Card 2 -->
            <div class="kanban-card bg-white p-4 rounded-lg shadow" onclick="abrirViewPaciente('PAC-002')">
                <div class="flex items-start justify-between mb-2">
                    <span class="font-bold text-lg">Ana Costa</span>
                    <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Urgente</span>
                </div>
                <p class="text-sm text-gray-600 mb-2">CA Pulmão • Estadio III</p>
                <button class="text-blue-600 hover:text-blue-700 text-sm">
                    <i class="fas fa-eye mr-1"></i>Clique para abrir View Universal
                </button>
            </div>
            
            <!-- Card 3 -->
            <div class="kanban-card bg-white p-4 rounded-lg shadow" onclick="abrirViewPaciente('PAC-003')">
                <div class="flex items-start justify-between mb-2">
                    <span class="font-bold text-lg">Carlos Mendes</span>
                    <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Em dia</span>
                </div>
                <p class="text-sm text-gray-600 mb-2">Quimio • Ciclo 3/6</p>
                <button class="text-blue-600 hover:text-blue-700 text-sm">
                    <i class="fas fa-eye mr-1"></i>Clique para abrir View Universal
                </button>
            </div>
        </div>
        
        <!-- Mais Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Card 4 -->
            <div class="kanban-card bg-white p-4 rounded-lg shadow" onclick="abrirViewPaciente('PAC-004')">
                <div class="flex items-start justify-between mb-2">
                    <span class="font-bold text-lg">João Santos</span>
                    <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Normal</span>
                </div>
                <p class="text-sm text-gray-600 mb-2">CA Próstata • Estadio I</p>
                <button class="text-blue-600 hover:text-blue-700 text-sm">
                    <i class="fas fa-eye mr-1"></i>Clique para abrir View Universal
                </button>
            </div>
            
            <!-- Card 5 -->
            <div class="kanban-card bg-white p-4 rounded-lg shadow" onclick="abrirViewPaciente('PAC-005')">
                <div class="flex items-start justify-between mb-2">
                    <span class="font-bold text-lg">Pedro Oliveira</span>
                    <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Sucesso</span>
                </div>
                <p class="text-sm text-gray-600 mb-2">Tratamento concluído</p>
                <button class="text-blue-600 hover:text-blue-700 text-sm">
                    <i class="fas fa-eye mr-1"></i>Clique para abrir View Universal
                </button>
            </div>
            
            <!-- Card 6 -->
            <div class="kanban-card bg-white p-4 rounded-lg shadow" onclick="abrirViewPaciente('PAC-006')">
                <div class="flex items-start justify-between mb-2">
                    <span class="font-bold text-lg">Lucia Ferreira</span>
                    <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Controle</span>
                </div>
                <p class="text-sm text-gray-600 mb-2">Pós-cirúrgico • 30 dias</p>
                <button class="text-blue-600 hover:text-blue-700 text-sm">
                    <i class="fas fa-eye mr-1"></i>Clique para abrir View Universal
                </button>
            </div>
        </div>
    </div>

    <script>
        // FUNÇÃO COMPLETA PARA ABRIR VIEW UNIVERSAL DO PACIENTE
        function abrirViewPaciente(patientId) {
            console.log('Abrindo view do paciente:', patientId);
            
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
                    medico: 'Dr. Carlos Santos',
                    navegador: 'Enf. Patricia Lima',
                    telefone: '(11) 98765-4322',
                    email: 'ana.costa@email.com',
                    convenio: 'SulAmérica'
                },
                'PAC-003': {
                    nome: 'Carlos Mendes',
                    idade: 58,
                    diagnostico: 'Linfoma de Hodgkin',
                    estadiamento: 'IIB',
                    medico: 'Dra. Marina Costa',
                    navegador: 'Enf. João Silva',
                    telefone: '(11) 98765-4323',
                    email: 'carlos.mendes@email.com',
                    convenio: 'Bradesco Saúde'
                },
                'PAC-004': {
                    nome: 'João Santos',
                    idade: 67,
                    diagnostico: 'Carcinoma de Próstata',
                    estadiamento: 'I',
                    medico: 'Dr. Paulo Ferreira',
                    navegador: 'Enf. Ana Rodrigues',
                    telefone: '(11) 98765-4324',
                    email: 'joao.santos@email.com',
                    convenio: 'Amil'
                },
                'PAC-005': {
                    nome: 'Pedro Oliveira',
                    idade: 49,
                    diagnostico: 'Melanoma',
                    estadiamento: 'IIA',
                    medico: 'Dra. Lucia Martins',
                    navegador: 'Enf. Patricia Lima',
                    telefone: '(11) 98765-4325',
                    email: 'pedro.oliveira@email.com',
                    convenio: 'Porto Seguro'
                },
                'PAC-006': {
                    nome: 'Lucia Ferreira',
                    idade: 55,
                    diagnostico: 'Carcinoma Colorretal',
                    estadiamento: 'IIIC',
                    medico: 'Dr. Roberto Almeida',
                    navegador: 'Enf. João Silva',
                    telefone: '(11) 98765-4326',
                    email: 'lucia.ferreira@email.com',
                    convenio: 'Unimed'
                }
            };
            
            const paciente = pacientes[patientId];
            if (!paciente) {
                console.error('Paciente não encontrado:', patientId);
                return;
            }
            
            // Remover modal anterior se existir
            const existingModal = document.getElementById('patient-view-modal');
            if (existingModal) {
                existingModal.remove();
            }
            
            // Criar modal
            const modal = document.createElement('div');
            modal.id = 'patient-view-modal';
            modal.className = 'fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4';
            
            modal.innerHTML = \`
                <div class="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                    <!-- Header -->
                    <div class="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <h2 class="text-2xl font-bold">
                                    <i class="fas fa-user-circle mr-3"></i>
                                    View Universal do Paciente
                                </h2>
                                <p class="text-teal-100 mt-1">\${paciente.nome} - \${patientId}</p>
                            </div>
                            <button onclick="fecharViewPaciente()" class="text-white hover:text-teal-200">
                                <i class="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Tabs -->
                    <div class="bg-teal-50 px-6 py-3 border-b flex space-x-1 overflow-x-auto">
                        <button onclick="mostrarTab('geral')" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-teal-600 bg-white border-b-2 border-teal-600">
                            <i class="fas fa-info-circle mr-2"></i>Geral
                        </button>
                        <button onclick="mostrarTab('contatar')" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-gray-600 hover:text-teal-600">
                            <i class="fas fa-address-book mr-2"></i>Contatar
                        </button>
                        <button onclick="mostrarTab('agendar')" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-gray-600 hover:text-teal-600">
                            <i class="fas fa-calendar-alt mr-2"></i>Agendar
                        </button>
                        <button onclick="mostrarTab('jornada')" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-gray-600 hover:text-teal-600">
                            <i class="fas fa-route mr-2"></i>Jornada
                        </button>
                        <button onclick="mostrarTab('checklist')" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-gray-600 hover:text-teal-600">
                            <i class="fas fa-clipboard-check mr-2"></i>Checklist
                        </button>
                        <button onclick="mostrarTab('ia')" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-gray-600 hover:text-teal-600">
                            <i class="fas fa-brain mr-2"></i>IA Laura
                        </button>
                    </div>
                    
                    <!-- Content -->
                    <div class="p-6 overflow-y-auto" style="max-height: calc(90vh - 200px);">
                        <!-- Tab Geral -->
                        <div id="tab-geral" class="tab-content">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <h3 class="font-bold text-gray-800 mb-3">
                                        <i class="fas fa-user mr-2"></i>Dados Pessoais
                                    </h3>
                                    <div class="space-y-2 text-sm">
                                        <p><strong>Nome:</strong> \${paciente.nome}</p>
                                        <p><strong>Idade:</strong> \${paciente.idade} anos</p>
                                        <p><strong>Telefone:</strong> \${paciente.telefone}</p>
                                        <p><strong>Email:</strong> \${paciente.email}</p>
                                        <p><strong>Convênio:</strong> \${paciente.convenio}</p>
                                    </div>
                                </div>
                                
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <h3 class="font-bold text-gray-800 mb-3">
                                        <i class="fas fa-notes-medical mr-2"></i>Dados Clínicos
                                    </h3>
                                    <div class="space-y-2 text-sm">
                                        <p><strong>Diagnóstico:</strong> \${paciente.diagnostico}</p>
                                        <p><strong>Estadiamento:</strong> \${paciente.estadiamento}</p>
                                        <p><strong>Médico:</strong> \${paciente.medico}</p>
                                        <p><strong>Navegador:</strong> \${paciente.navegador}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Tab Contatar -->
                        <div id="tab-contatar" class="tab-content hidden">
                            <h3 class="font-bold text-gray-800 mb-4">
                                <i class="fas fa-users mr-2"></i>Rede de Apoio e Contatos
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="bg-blue-50 p-4 rounded-lg">
                                    <h4 class="font-semibold text-blue-900 mb-2">Equipe Médica</h4>
                                    <p class="text-sm"><strong>Oncologista:</strong> \${paciente.medico}</p>
                                    <p class="text-sm"><strong>Navegador:</strong> \${paciente.navegador}</p>
                                </div>
                                <div class="bg-green-50 p-4 rounded-lg">
                                    <h4 class="font-semibold text-green-900 mb-2">Contato Rápido</h4>
                                    <button class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
                                        <i class="fas fa-phone mr-2"></i>Ligar Agora
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Tab Agendar -->
                        <div id="tab-agendar" class="tab-content hidden">
                            <h3 class="font-bold text-gray-800 mb-4">
                                <i class="fas fa-calendar mr-2"></i>Próximos Agendamentos
                            </h3>
                            <div class="bg-purple-50 p-4 rounded-lg">
                                <p class="text-purple-900 font-semibold">Próxima Consulta:</p>
                                <p class="text-sm mt-1">25/01/2025 - 14:30</p>
                                <p class="text-sm text-gray-600">Dr. \${paciente.medico.split(' ').slice(1).join(' ')}</p>
                            </div>
                        </div>
                        
                        <!-- Tab Jornada -->
                        <div id="tab-jornada" class="tab-content hidden">
                            <h3 class="font-bold text-gray-800 mb-4">
                                <i class="fas fa-timeline mr-2"></i>Histórico da Jornada
                            </h3>
                            <div class="space-y-3">
                                <div class="border-l-4 border-teal-600 pl-4">
                                    <p class="font-semibold">Diagnóstico Inicial</p>
                                    <p class="text-sm text-gray-600">10/01/2025</p>
                                </div>
                                <div class="border-l-4 border-blue-600 pl-4">
                                    <p class="font-semibold">Início do Tratamento</p>
                                    <p class="text-sm text-gray-600">15/01/2025</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Tab Checklist -->
                        <div id="tab-checklist" class="tab-content hidden">
                            <h3 class="font-bold text-gray-800 mb-4">
                                <i class="fas fa-tasks mr-2"></i>Checklist de Acompanhamento
                            </h3>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" checked class="mr-2">
                                    <span>Exames pré-tratamento realizados</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" checked class="mr-2">
                                    <span>Termo de consentimento assinado</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2">
                                    <span>Consulta psico-oncologia agendada</span>
                                </label>
                            </div>
                        </div>
                        
                        <!-- Tab IA -->
                        <div id="tab-ia" class="tab-content hidden">
                            <h3 class="font-bold text-gray-800 mb-4">
                                <i class="fas fa-brain mr-2"></i>Análise Preditiva - LAURA
                            </h3>
                            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                                <div class="flex items-center justify-between mb-3">
                                    <span class="font-semibold text-purple-900">Risco de Não Adesão</span>
                                    <span class="text-2xl font-bold text-purple-600">35%</span>
                                </div>
                                <div class="bg-white p-3 rounded">
                                    <p class="text-sm font-semibold mb-2">Recomendações:</p>
                                    <ul class="text-sm text-gray-700 space-y-1">
                                        <li>• Intensificar contato telefônico</li>
                                        <li>• Agendar consulta psico-oncologia</li>
                                        <li>• Incluir familiar nas consultas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            \`;
            
            document.body.appendChild(modal);
        }
        
        // Função para fechar o modal
        function fecharViewPaciente() {
            const modal = document.getElementById('patient-view-modal');
            if (modal) {
                modal.remove();
            }
        }
        
        // Função para mostrar tab
        function mostrarTab(tabName) {
            // Esconder todas as tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            
            // Remover classe ativa de todos os botões
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'border-b-2', 'border-teal-600', 'text-teal-600');
                btn.classList.add('text-gray-600');
            });
            
            // Mostrar tab selecionada
            document.getElementById('tab-' + tabName).classList.remove('hidden');
            
            // Adicionar classe ativa ao botão clicado
            event.target.classList.add('bg-white', 'border-b-2', 'border-teal-600', 'text-teal-600');
            event.target.classList.remove('text-gray-600');
        }
        
        // Log para confirmar que o script carregou
        console.log('Script de View Universal carregado com sucesso!');
        console.log('Funções disponíveis:', {
            abrirViewPaciente: typeof abrirViewPaciente,
            fecharViewPaciente: typeof fecharViewPaciente,
            mostrarTab: typeof mostrarTab
        });
    </script>
</body>
</html>
    `);
});

export default kanbanTestRoutes;