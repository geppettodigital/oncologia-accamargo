import { Hono } from 'hono';

const patientViewStandalone = new Hono();

// Dados completos dos pacientes
const patientsData = {
    'PAC-001': {
        nome: 'Maria Silva Santos',
        idade: 52,
        diagnostico: 'Carcinoma Ductal Invasivo - Mama',
        estadiamento: 'IIA (T2N0M0)',
        medico: 'Dr. Roberto Almeida',
        navegador: 'Enf. Patricia Lima',
        telefone: '(11) 98765-4321',
        email: 'maria.silva@email.com',
        convenio: 'Unimed Premium',
        proximaConsulta: '25/01/2025 - 14:30',
        cicloTratamento: '2/6',
        risco: 35
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
        convenio: 'SulAmérica',
        proximaConsulta: '28/01/2025 - 10:00',
        cicloTratamento: '4/8',
        risco: 45
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
        convenio: 'Bradesco Saúde',
        proximaConsulta: '20/01/2025 - 15:00',
        cicloTratamento: '3/6',
        risco: 25
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
        convenio: 'Amil',
        proximaConsulta: '22/01/2025 - 09:00',
        cicloTratamento: '1/4',
        risco: 15
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
        convenio: 'Porto Seguro',
        proximaConsulta: 'Tratamento Concluído',
        cicloTratamento: 'Completo',
        risco: 10
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
        convenio: 'Unimed',
        proximaConsulta: '25/01/2025 - 11:00',
        cicloTratamento: 'Pós-cirúrgico',
        risco: 30
    }
};

patientViewStandalone.get('/patient-view/:id', (c) => {
    const patientId = c.req.param('id');
    const patient = patientsData[patientId as keyof typeof patientsData];
    
    if (!patient) {
        return c.html(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <title>Paciente não encontrado</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body class="bg-gray-100 flex items-center justify-center min-h-screen">
                <div class="bg-white p-8 rounded-lg shadow-lg">
                    <h1 class="text-2xl font-bold text-red-600">Paciente não encontrado</h1>
                    <p class="mt-2">ID: ${patientId}</p>
                    <a href="/" class="mt-4 inline-block text-blue-600 hover:underline">Voltar ao início</a>
                </div>
            </body>
            </html>
        `);
    }
    
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${patient.nome} - View Universal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
        .tab-active {
            background: white;
            color: #0891b2;
            border-bottom: 2px solid #0891b2;
        }
    </style>
</head>
<body class="bg-gradient-to-br from-teal-50 to-blue-50 min-h-screen">
    <div class="container mx-auto p-4 max-w-7xl">
        <!-- Header -->
        <div class="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-t-2xl shadow-xl">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold">
                        <i class="fas fa-user-circle mr-3"></i>
                        View Universal do Paciente
                    </h1>
                    <p class="text-teal-100 mt-2 text-lg">${patient.nome} - ${patientId}</p>
                </div>
                <div class="text-right">
                    <p class="text-teal-100">Navegador: ${patient.navegador}</p>
                    <p class="text-teal-100">Médico: ${patient.medico}</p>
                </div>
            </div>
        </div>
        
        <!-- Tabs Navigation -->
        <div class="bg-white px-6 py-3 shadow-lg flex space-x-1 overflow-x-auto">
            <button onclick="showTab('geral')" id="tab-btn-geral" class="tab-btn px-4 py-2 rounded-t-lg font-medium transition-all tab-active">
                <i class="fas fa-info-circle mr-2"></i>Geral
            </button>
            <button onclick="showTab('contatar')" id="tab-btn-contatar" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-gray-600 hover:text-teal-600 transition-all">
                <i class="fas fa-address-book mr-2"></i>Contatar
            </button>
            <button onclick="showTab('agendar')" id="tab-btn-agendar" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-gray-600 hover:text-teal-600 transition-all">
                <i class="fas fa-calendar-alt mr-2"></i>Agendar
            </button>
            <button onclick="showTab('jornada')" id="tab-btn-jornada" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-gray-600 hover:text-teal-600 transition-all">
                <i class="fas fa-route mr-2"></i>Jornada
            </button>
            <button onclick="showTab('checklist')" id="tab-btn-checklist" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-gray-600 hover:text-teal-600 transition-all">
                <i class="fas fa-clipboard-check mr-2"></i>Checklist
            </button>
            <button onclick="showTab('ia')" id="tab-btn-ia" class="tab-btn px-4 py-2 rounded-t-lg font-medium text-gray-600 hover:text-teal-600 transition-all">
                <i class="fas fa-brain mr-2"></i>IA Laura
            </button>
        </div>
        
        <!-- Content Area -->
        <div class="bg-white p-6 rounded-b-2xl shadow-xl">
            <!-- Tab Geral -->
            <div id="tab-geral" class="tab-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="glass-effect p-6 rounded-xl border border-gray-200">
                        <h3 class="font-bold text-xl text-gray-800 mb-4">
                            <i class="fas fa-user mr-2 text-teal-600"></i>Dados Pessoais
                        </h3>
                        <div class="space-y-3">
                            <p><strong>Nome:</strong> ${patient.nome}</p>
                            <p><strong>Idade:</strong> ${patient.idade} anos</p>
                            <p><strong>Telefone:</strong> ${patient.telefone}</p>
                            <p><strong>Email:</strong> ${patient.email}</p>
                            <p><strong>Convênio:</strong> ${patient.convenio}</p>
                        </div>
                    </div>
                    
                    <div class="glass-effect p-6 rounded-xl border border-gray-200">
                        <h3 class="font-bold text-xl text-gray-800 mb-4">
                            <i class="fas fa-notes-medical mr-2 text-teal-600"></i>Dados Clínicos
                        </h3>
                        <div class="space-y-3">
                            <p><strong>Diagnóstico:</strong> ${patient.diagnostico}</p>
                            <p><strong>Estadiamento:</strong> ${patient.estadiamento}</p>
                            <p><strong>Médico Responsável:</strong> ${patient.medico}</p>
                            <p><strong>Navegador:</strong> ${patient.navegador}</p>
                            <p><strong>Ciclo de Tratamento:</strong> ${patient.cicloTratamento}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Tab Contatar -->
            <div id="tab-contatar" class="tab-content hidden">
                <h3 class="font-bold text-xl text-gray-800 mb-6">
                    <i class="fas fa-users mr-2 text-teal-600"></i>Rede de Apoio e Contatos
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-blue-50 p-6 rounded-xl">
                        <h4 class="font-semibold text-blue-900 mb-3">Equipe Médica</h4>
                        <p class="mb-2"><strong>Oncologista:</strong> ${patient.medico}</p>
                        <p><strong>Navegador:</strong> ${patient.navegador}</p>
                    </div>
                    <div class="bg-green-50 p-6 rounded-xl">
                        <h4 class="font-semibold text-green-900 mb-3">Contato Direto</h4>
                        <button class="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 transition">
                            <i class="fas fa-phone mr-2"></i>Ligar Agora
                        </button>
                        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg w-full mt-2 hover:bg-blue-700 transition">
                            <i class="fas fa-envelope mr-2"></i>Enviar Email
                        </button>
                    </div>
                    <div class="bg-purple-50 p-6 rounded-xl">
                        <h4 class="font-semibold text-purple-900 mb-3">WhatsApp</h4>
                        <button class="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition">
                            <i class="fab fa-whatsapp mr-2"></i>Enviar Mensagem
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Tab Agendar -->
            <div id="tab-agendar" class="tab-content hidden">
                <h3 class="font-bold text-xl text-gray-800 mb-6">
                    <i class="fas fa-calendar mr-2 text-teal-600"></i>Agendamentos
                </h3>
                <div class="bg-purple-50 p-6 rounded-xl">
                    <div class="mb-4">
                        <p class="text-purple-900 font-semibold text-lg">Próxima Consulta:</p>
                        <p class="text-2xl font-bold text-purple-700 mt-2">${patient.proximaConsulta}</p>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <button class="bg-white p-3 rounded-lg text-center hover:shadow-md transition">
                            <i class="fas fa-plus text-purple-600 text-2xl mb-2"></i>
                            <p class="text-sm">Agendar Nova</p>
                        </button>
                        <button class="bg-white p-3 rounded-lg text-center hover:shadow-md transition">
                            <i class="fas fa-calendar-check text-green-600 text-2xl mb-2"></i>
                            <p class="text-sm">Confirmar</p>
                        </button>
                        <button class="bg-white p-3 rounded-lg text-center hover:shadow-md transition">
                            <i class="fas fa-calendar-times text-red-600 text-2xl mb-2"></i>
                            <p class="text-sm">Reagendar</p>
                        </button>
                        <button class="bg-white p-3 rounded-lg text-center hover:shadow-md transition">
                            <i class="fas fa-history text-blue-600 text-2xl mb-2"></i>
                            <p class="text-sm">Histórico</p>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Tab Jornada -->
            <div id="tab-jornada" class="tab-content hidden">
                <h3 class="font-bold text-xl text-gray-800 mb-6">
                    <i class="fas fa-road mr-2 text-teal-600"></i>Jornada do Paciente
                </h3>
                <div class="space-y-4">
                    <div class="border-l-4 border-teal-600 pl-6 relative">
                        <div class="absolute -left-2 top-0 w-4 h-4 bg-teal-600 rounded-full"></div>
                        <p class="font-semibold text-lg">Diagnóstico Inicial</p>
                        <p class="text-gray-600">10/01/2025 - ${patient.diagnostico}</p>
                    </div>
                    <div class="border-l-4 border-blue-600 pl-6 relative">
                        <div class="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                        <p class="font-semibold text-lg">Início do Tratamento</p>
                        <p class="text-gray-600">15/01/2025 - Protocolo definido</p>
                    </div>
                    <div class="border-l-4 border-green-600 pl-6 relative">
                        <div class="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                        <p class="font-semibold text-lg">Em Tratamento</p>
                        <p class="text-gray-600">Ciclo ${patient.cicloTratamento}</p>
                    </div>
                    <div class="border-l-4 border-gray-300 pl-6 relative">
                        <div class="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                        <p class="font-semibold text-lg text-gray-400">Próximas Etapas</p>
                        <p class="text-gray-400">A definir conforme evolução</p>
                    </div>
                </div>
            </div>
            
            <!-- Tab Checklist -->
            <div id="tab-checklist" class="tab-content hidden">
                <h3 class="font-bold text-xl text-gray-800 mb-6">
                    <i class="fas fa-tasks mr-2 text-teal-600"></i>Checklist de Acompanhamento
                </h3>
                <div class="space-y-3">
                    <label class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <input type="checkbox" checked class="mr-3 w-5 h-5 text-teal-600">
                        <span class="flex-1">Exames pré-tratamento realizados</span>
                        <span class="text-sm text-green-600">Concluído</span>
                    </label>
                    <label class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <input type="checkbox" checked class="mr-3 w-5 h-5 text-teal-600">
                        <span class="flex-1">Termo de consentimento assinado</span>
                        <span class="text-sm text-green-600">Concluído</span>
                    </label>
                    <label class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <input type="checkbox" class="mr-3 w-5 h-5 text-teal-600">
                        <span class="flex-1">Consulta psico-oncologia agendada</span>
                        <span class="text-sm text-orange-600">Pendente</span>
                    </label>
                    <label class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <input type="checkbox" class="mr-3 w-5 h-5 text-teal-600">
                        <span class="flex-1">Avaliação nutricional realizada</span>
                        <span class="text-sm text-orange-600">Pendente</span>
                    </label>
                    <label class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <input type="checkbox" checked class="mr-3 w-5 h-5 text-teal-600">
                        <span class="flex-1">Medicações prescritas</span>
                        <span class="text-sm text-green-600">Concluído</span>
                    </label>
                </div>
            </div>
            
            <!-- Tab IA -->
            <div id="tab-ia" class="tab-content hidden">
                <h3 class="font-bold text-xl text-gray-800 mb-6">
                    <i class="fas fa-brain mr-2 text-teal-600"></i>Análise Preditiva - LAURA
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                        <div class="flex items-center justify-between mb-4">
                            <span class="font-semibold text-purple-900">Risco de Não Adesão</span>
                            <span class="text-3xl font-bold text-purple-600">${patient.risco}%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="bg-gradient-to-r from-green-500 to-red-500 h-3 rounded-full" style="width: ${patient.risco}%"></div>
                        </div>
                        <p class="text-sm text-purple-700 mt-2">
                            ${patient.risco < 30 ? 'Baixo risco' : patient.risco < 60 ? 'Risco moderado' : 'Alto risco'}
                        </p>
                    </div>
                    
                    <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                        <h4 class="font-semibold text-green-900 mb-3">Recomendações da IA</h4>
                        <ul class="text-sm space-y-2 text-green-700">
                            <li>• Intensificar contato telefônico</li>
                            <li>• Agendar consulta psico-oncologia</li>
                            <li>• Incluir familiar nas consultas</li>
                            <li>• Monitorar adesão medicamentosa</li>
                        </ul>
                    </div>
                </div>
                
                <div class="mt-6 p-6 bg-blue-50 rounded-xl">
                    <h4 class="font-semibold text-blue-900 mb-3">Alertas Ativos</h4>
                    <div class="space-y-2">
                        <div class="flex items-center text-sm">
                            <i class="fas fa-exclamation-circle text-yellow-500 mr-2"></i>
                            <span>Verificar resultado de exame pendente há 3 dias</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-info-circle text-blue-500 mr-2"></i>
                            <span>Próxima consulta em 5 dias - enviar lembrete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Footer Actions -->
        <div class="bg-white mt-4 p-4 rounded-xl shadow-lg flex justify-between items-center">
            <button onclick="window.print()" class="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
                <i class="fas fa-print mr-2"></i>Imprimir
            </button>
            <div class="flex gap-2">
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    <i class="fas fa-share mr-2"></i>Compartilhar
                </button>
                <button onclick="window.close()" class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
                    <i class="fas fa-times mr-2"></i>Fechar
                </button>
            </div>
        </div>
    </div>
    
    <script>
        function showTab(tabName) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            
            // Remove active class from all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('tab-active', 'text-teal-600');
                btn.classList.add('text-gray-600');
            });
            
            // Show selected tab
            document.getElementById('tab-' + tabName).classList.remove('hidden');
            
            // Add active class to selected button
            const activeBtn = document.getElementById('tab-btn-' + tabName);
            activeBtn.classList.add('tab-active', 'text-teal-600');
            activeBtn.classList.remove('text-gray-600');
        }
    </script>
</body>
</html>
    `);
});

export default patientViewStandalone;