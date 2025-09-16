import { Hono } from 'hono';

const patientViewIntegrated = new Hono();

// Função para gerar dados de risco únicos para cada paciente
function getRiskData(patientId: string) {
    const riskProfiles = {
        'PAC-001': {
            naoAdesao: [45, 44, 42, 41, 38, 37, 35, 35, 35, 34, 33, 32],
            complicacoes: [30, 31, 32, 33, 28, 27, 25, 24, 22, 21, 20, 19],
            toxicidade: [25, 26, 24, 23, 28, 26, 22, 20, 18, 16, 15, 14],
            agregado: [55, 54, 52, 50, 48, 46, 42, 40, 38, 36, 34, 32],
            tendencia: '-28%',
            pontoCritico: 'Jan 14',
            previsao: 'Estável'
        },
        'PAC-002': {
            naoAdesao: [50, 48, 47, 45, 44, 42, 40, 38, 37, 36, 35, 34],
            complicacoes: [35, 36, 37, 38, 35, 33, 31, 29, 27, 25, 24, 23],
            toxicidade: [40, 38, 36, 35, 37, 35, 33, 31, 29, 27, 25, 23],
            agregado: [60, 58, 56, 54, 52, 50, 48, 46, 44, 42, 40, 38],
            tendencia: '-22%',
            pontoCritico: 'Jan 13',
            previsao: 'Melhora Gradual'
        },
        'PAC-003': {
            naoAdesao: [30, 31, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23],
            complicacoes: [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14],
            toxicidade: [35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24],
            agregado: [40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29],
            tendencia: '-27.5%',
            pontoCritico: 'Jan 12',
            previsao: 'Muito Bom'
        },
        'PAC-004': {
            naoAdesao: [55, 53, 51, 49, 47, 45, 43, 41, 39, 37, 35, 33],
            complicacoes: [45, 44, 43, 42, 41, 40, 38, 36, 34, 32, 30, 28],
            toxicidade: [30, 32, 34, 35, 33, 31, 29, 27, 25, 23, 21, 19],
            agregado: [65, 63, 61, 59, 57, 55, 53, 51, 49, 47, 45, 43],
            tendencia: '-34%',
            pontoCritico: 'Jan 15',
            previsao: 'Em Observação'
        },
        'PAC-005': {
            naoAdesao: [20, 21, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13],
            complicacoes: [15, 16, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8],
            toxicidade: [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14],
            agregado: [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19],
            tendencia: '-36.7%',
            pontoCritico: 'Jan 11',
            previsao: 'Excelente'
        },
        'PAC-006': {
            naoAdesao: [60, 58, 56, 54, 52, 50, 48, 46, 44, 42, 40, 38],
            complicacoes: [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39],
            toxicidade: [45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34],
            agregado: [70, 68, 66, 64, 62, 60, 58, 56, 54, 52, 50, 48],
            tendencia: '-31.4%',
            pontoCritico: 'Jan 16',
            previsao: 'Atenção Especial'
        }
    };
    return riskProfiles[patientId] || riskProfiles['PAC-001'];
}

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
        risco: 35,
        foto: 'https://ui-avatars.com/api/?name=Maria+Silva&background=EC4899&color=fff',
        dataInicio: '10/01/2025',
        fase: 'Tratamento Ativo'
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
        risco: 45,
        foto: 'https://ui-avatars.com/api/?name=Ana+Costa&background=F59E0B&color=fff',
        dataInicio: '05/01/2025',
        fase: 'Quimioterapia'
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
        risco: 25,
        foto: 'https://ui-avatars.com/api/?name=Carlos+Mendes&background=3B82F6&color=fff',
        dataInicio: '15/12/2024',
        fase: 'Tratamento Combinado'
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
        risco: 15,
        foto: 'https://ui-avatars.com/api/?name=João+Santos&background=10B981&color=fff',
        dataInicio: '08/01/2025',
        fase: 'Início do Tratamento'
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
        proximaConsulta: 'Acompanhamento Trimestral',
        cicloTratamento: 'Completo',
        risco: 10,
        foto: 'https://ui-avatars.com/api/?name=Pedro+Oliveira&background=8B5CF6&color=fff',
        dataInicio: '01/10/2024',
        fase: 'Remissão - Acompanhamento'
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
        risco: 30,
        foto: 'https://ui-avatars.com/api/?name=Lucia+Ferreira&background=EF4444&color=fff',
        dataInicio: '20/12/2024',
        fase: 'Recuperação Pós-Cirúrgica'
    }
};

patientViewIntegrated.get('/patient-view-integrated/:id', (c) => {
    const patientId = c.req.param('id');
    const patient = patientsData[patientId as keyof typeof patientsData];
    const riskData = getRiskData(patientId);
    
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
    <title>${patient.nome} - View Integrada</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
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
        .contact-card {
            transition: all 0.3s ease;
        }
        .contact-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .timeline-dot {
            position: absolute;
            left: -8px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: white;
            border: 3px solid;
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
                        <i class="fas fa-hospital-user mr-3"></i>
                        View Integrada do Paciente
                    </h1>
                    <p class="text-teal-100 mt-2 text-lg">${patient.nome} - ${patientId}</p>
                </div>
                <div class="text-right">
                    <p class="text-teal-100">Navegador: ${patient.navegador}</p>
                    <p class="text-teal-100">Médico: ${patient.medico}</p>
                    <p class="text-xs text-teal-200 mt-1">Fase: ${patient.fase}</p>
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
                <i class="fas fa-brain mr-2"></i>IA LAURA
            </button>
        </div>
        
        <!-- Content Area -->
        <div class="bg-white p-6 rounded-b-2xl shadow-xl">
            <!-- Tab Geral -->
            <div id="tab-geral" class="tab-content">
                <div class="flex items-start gap-6 mb-6">
                    <img src="${patient.foto}" alt="${patient.nome}" class="w-24 h-24 rounded-full shadow-lg">
                    <div class="flex-1">
                        <h2 class="text-2xl font-bold text-gray-800">${patient.nome}</h2>
                        <p class="text-gray-600">${patient.idade} anos • ${patient.convenio}</p>
                        <p class="text-sm text-teal-600 mt-1">Início do Tratamento: ${patient.dataInicio}</p>
                    </div>
                </div>
                
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
            
            <!-- Tab Contatar - Estilo do Portal Navegador -->
            <div id="tab-contatar" class="tab-content hidden">
                <div class="mb-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">
                        <i class="fas fa-users mr-3 text-teal-600"></i>
                        Rede Completa de Contatos
                    </h3>
                    <p class="text-gray-600">Gestão integrada de toda a rede de apoio do paciente</p>
                </div>
                
                <!-- Rede de Apoio -->
                <div class="mb-8">
                    <h4 class="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                        <i class="fas fa-heart mr-2 text-red-500"></i>
                        Rede de Apoio Familiar
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="contact-card bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                            <div class="flex items-start gap-3">
                                <img src="https://ui-avatars.com/api/?name=João+Silva&background=10B981&color=fff" 
                                     class="w-12 h-12 rounded-full">
                                <div class="flex-1">
                                    <h5 class="font-semibold text-gray-800">João Silva Santos</h5>
                                    <p class="text-sm text-gray-600">Esposo</p>
                                    <p class="text-xs text-green-600 mt-1">Disponibilidade: Integral</p>
                                    <div class="flex gap-2 mt-2">
                                        <button class="text-green-600 hover:text-green-700">
                                            <i class="fas fa-phone"></i>
                                        </button>
                                        <button class="text-blue-600 hover:text-blue-700">
                                            <i class="fas fa-envelope"></i>
                                        </button>
                                        <button class="text-green-600 hover:text-green-700">
                                            <i class="fab fa-whatsapp"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-card bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                            <div class="flex items-start gap-3">
                                <img src="https://ui-avatars.com/api/?name=Ana+Silva&background=3B82F6&color=fff" 
                                     class="w-12 h-12 rounded-full">
                                <div class="flex-1">
                                    <h5 class="font-semibold text-gray-800">Ana Silva</h5>
                                    <p class="text-sm text-gray-600">Filha</p>
                                    <p class="text-xs text-blue-600 mt-1">Disponibilidade: Fins de semana</p>
                                    <div class="flex gap-2 mt-2">
                                        <button class="text-green-600 hover:text-green-700">
                                            <i class="fas fa-phone"></i>
                                        </button>
                                        <button class="text-blue-600 hover:text-blue-700">
                                            <i class="fas fa-envelope"></i>
                                        </button>
                                        <button class="text-green-600 hover:text-green-700">
                                            <i class="fab fa-whatsapp"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-card bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                            <div class="flex items-start gap-3">
                                <img src="https://ui-avatars.com/api/?name=Marcia+Oliveira&background=F59E0B&color=fff" 
                                     class="w-12 h-12 rounded-full">
                                <div class="flex-1">
                                    <h5 class="font-semibold text-gray-800">Márcia Oliveira</h5>
                                    <p class="text-sm text-gray-600">Cuidadora Profissional</p>
                                    <p class="text-xs text-orange-600 mt-1">Disponibilidade: Seg-Sex</p>
                                    <div class="flex gap-2 mt-2">
                                        <button class="text-green-600 hover:text-green-700">
                                            <i class="fas fa-phone"></i>
                                        </button>
                                        <button class="text-blue-600 hover:text-blue-700">
                                            <i class="fas fa-envelope"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Equipe Médica -->
                <div>
                    <h4 class="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                        <i class="fas fa-user-md mr-2 text-blue-500"></i>
                        Equipe Médica Multidisciplinar
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-xl border border-indigo-200">
                            <div class="flex items-start gap-4">
                                <img src="https://ui-avatars.com/api/?name=Dr+Roberto&background=6366F1&color=fff" 
                                     class="w-14 h-14 rounded-full">
                                <div class="flex-1">
                                    <h5 class="font-semibold text-lg text-gray-800">${patient.medico}</h5>
                                    <p class="text-sm text-gray-600">Oncologia • CRM-SP 123456</p>
                                    <p class="text-xs text-indigo-600 mt-1">Torre A - Sala 302</p>
                                    <p class="text-xs text-gray-500">Seg, Qua, Sex - 08h às 12h</p>
                                    <div class="mt-3 flex gap-3">
                                        <button class="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-indigo-700">
                                            <i class="fas fa-phone mr-1"></i>Ligar
                                        </button>
                                        <button class="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-700">
                                            <i class="fas fa-envelope mr-1"></i>Email
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-5 rounded-xl border border-pink-200">
                            <div class="flex items-start gap-4">
                                <img src="https://ui-avatars.com/api/?name=Enf+Patricia&background=EC4899&color=fff" 
                                     class="w-14 h-14 rounded-full">
                                <div class="flex-1">
                                    <h5 class="font-semibold text-lg text-gray-800">${patient.navegador}</h5>
                                    <p class="text-sm text-gray-600">Navegação de Pacientes</p>
                                    <p class="text-xs text-pink-600 mt-1">Central de Navegação</p>
                                    <p class="text-xs text-gray-500">Seg-Sex - 08h às 17h</p>
                                    <div class="mt-3 flex gap-3">
                                        <button class="bg-pink-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-pink-700">
                                            <i class="fas fa-phone mr-1"></i>Ligar
                                        </button>
                                        <button class="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700">
                                            <i class="fab fa-whatsapp mr-1"></i>WhatsApp
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Tab Agendar - Estilo do Portal Navegador -->
            <div id="tab-agendar" class="tab-content hidden">
                <div class="mb-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">
                        <i class="fas fa-calendar-alt mr-3 text-purple-600"></i>
                        Sistema Inteligente de Agendamentos
                    </h3>
                    <p class="text-gray-600">Gestão completa de consultas, exames e procedimentos</p>
                </div>
                
                <!-- Próximos Agendamentos -->
                <div class="mb-8">
                    <h4 class="text-lg font-semibold text-gray-700 mb-4">Próximos Compromissos</h4>
                    <div class="space-y-3">
                        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl border-l-4 border-purple-500">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-semibold text-lg text-gray-800">Consulta de Retorno</p>
                                    <p class="text-sm text-gray-600">${patient.medico}</p>
                                    <p class="text-sm text-purple-600 mt-1">
                                        <i class="far fa-calendar mr-1"></i>${patient.proximaConsulta}
                                    </p>
                                </div>
                                <div class="flex gap-2">
                                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                                        <i class="fas fa-bell"></i> Lembrete
                                    </button>
                                    <button class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                                        <i class="fas fa-sync"></i> Reagendar
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-blue-500">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-semibold text-lg text-gray-800">Exame de Imagem</p>
                                    <p class="text-sm text-gray-600">Tomografia Computadorizada</p>
                                    <p class="text-sm text-blue-600 mt-1">
                                        <i class="far fa-calendar mr-1"></i>30/01/2025 - 08:00
                                    </p>
                                </div>
                                <div class="flex gap-2">
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                        <i class="fas fa-map-marker-alt"></i> Local
                                    </button>
                                    <button class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                                        <i class="fas fa-file-alt"></i> Preparação
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Calendário Visual -->
                <div class="bg-gray-50 p-6 rounded-xl">
                    <h4 class="text-lg font-semibold text-gray-700 mb-4">Visão do Mês</h4>
                    <div class="grid grid-cols-7 gap-1">
                        <div class="text-center text-sm font-semibold text-gray-600 p-2">Dom</div>
                        <div class="text-center text-sm font-semibold text-gray-600 p-2">Seg</div>
                        <div class="text-center text-sm font-semibold text-gray-600 p-2">Ter</div>
                        <div class="text-center text-sm font-semibold text-gray-600 p-2">Qua</div>
                        <div class="text-center text-sm font-semibold text-gray-600 p-2">Qui</div>
                        <div class="text-center text-sm font-semibold text-gray-600 p-2">Sex</div>
                        <div class="text-center text-sm font-semibold text-gray-600 p-2">Sáb</div>
                        
                        <!-- Dias do mês (simplificado) -->
                        ${Array.from({length: 31}, (_, i) => {
                            const day = i + 1;
                            const hasAppointment = day === 25 || day === 28 || day === 30;
                            return `
                                <div class="text-center p-2 ${hasAppointment ? 'bg-purple-100 rounded-lg' : 'hover:bg-gray-100'} cursor-pointer">
                                    <span class="${hasAppointment ? 'font-bold text-purple-600' : 'text-gray-700'}">${day}</span>
                                    ${hasAppointment ? '<div class="w-1 h-1 bg-purple-600 rounded-full mx-auto mt-1"></div>' : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
            
            <!-- Tab Jornada - Estilo do Portal Navegador -->
            <div id="tab-jornada" class="tab-content hidden">
                <div class="mb-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">
                        <i class="fas fa-route mr-3 text-green-600"></i>
                        Jornada Completa do Paciente
                    </h3>
                    <p class="text-gray-600">Wiki inteligente com histórico detalhado do tratamento</p>
                </div>
                
                <!-- Timeline -->
                <div class="relative">
                    <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                    
                    <div class="space-y-6">
                        <!-- Evento 1 -->
                        <div class="relative flex items-start ml-10">
                            <div class="timeline-dot border-teal-600 bg-teal-600"></div>
                            <div class="flex-1 bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl ml-6">
                                <div class="flex items-center justify-between mb-2">
                                    <h4 class="font-semibold text-lg text-gray-800">Diagnóstico Inicial</h4>
                                    <span class="text-sm text-teal-600">${patient.dataInicio}</span>
                                </div>
                                <p class="text-gray-600">${patient.diagnostico} - ${patient.estadiamento}</p>
                                <div class="mt-3 flex gap-2">
                                    <span class="bg-teal-100 text-teal-700 px-2 py-1 rounded-lg text-xs">Biópsia</span>
                                    <span class="bg-teal-100 text-teal-700 px-2 py-1 rounded-lg text-xs">Estadiamento</span>
                                    <span class="bg-teal-100 text-teal-700 px-2 py-1 rounded-lg text-xs">MDT</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Evento 2 -->
                        <div class="relative flex items-start ml-10">
                            <div class="timeline-dot border-blue-600 bg-blue-600"></div>
                            <div class="flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl ml-6">
                                <div class="flex items-center justify-between mb-2">
                                    <h4 class="font-semibold text-lg text-gray-800">Início do Tratamento</h4>
                                    <span class="text-sm text-blue-600">15/01/2025</span>
                                </div>
                                <p class="text-gray-600">Protocolo ${patient.cicloTratamento}</p>
                                <div class="mt-3">
                                    <div class="w-full bg-gray-200 rounded-full h-2">
                                        <div class="bg-blue-600 h-2 rounded-full" style="width: 33%"></div>
                                    </div>
                                    <p class="text-xs text-gray-500 mt-1">Progresso do tratamento</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Evento 3 -->
                        <div class="relative flex items-start ml-10">
                            <div class="timeline-dot border-green-600 bg-green-600"></div>
                            <div class="flex-1 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl ml-6">
                                <div class="flex items-center justify-between mb-2">
                                    <h4 class="font-semibold text-lg text-gray-800">Avaliação Intermediária</h4>
                                    <span class="text-sm text-green-600">Agendada</span>
                                </div>
                                <p class="text-gray-600">Resposta parcial ao tratamento</p>
                                <div class="mt-3 flex gap-3">
                                    <button class="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700">
                                        <i class="fas fa-file-medical mr-1"></i>Ver Relatório
                                    </button>
                                    <button class="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700">
                                        <i class="fas fa-images mr-1"></i>Exames
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Próximos Passos -->
                        <div class="relative flex items-start ml-10">
                            <div class="timeline-dot border-gray-400 bg-white"></div>
                            <div class="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl ml-6 opacity-75">
                                <h4 class="font-semibold text-lg text-gray-600">Próximos Marcos</h4>
                                <ul class="text-sm text-gray-500 mt-2 space-y-1">
                                    <li>• Conclusão do ciclo atual</li>
                                    <li>• Reavaliação com imagem</li>
                                    <li>• Decisão terapêutica MDT</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Tab Checklist - Estilo do Portal Navegador -->
            <div id="tab-checklist" class="tab-content hidden">
                <div class="mb-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">
                        <i class="fas fa-clipboard-check mr-3 text-indigo-600"></i>
                        Sistema de Checklist e Auditoria
                    </h3>
                    <p class="text-gray-600">Double-check para garantia de qualidade e conformidade</p>
                </div>
                
                <!-- Categorias de Checklist -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Documentação -->
                    <div class="bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-xl">
                        <h4 class="font-semibold text-lg text-indigo-800 mb-4">
                            <i class="fas fa-file-alt mr-2"></i>Documentação
                        </h4>
                        <div class="space-y-3">
                            <label class="flex items-center p-3 bg-white rounded-lg hover:bg-indigo-50 cursor-pointer">
                                <input type="checkbox" checked class="mr-3 w-5 h-5 text-indigo-600">
                                <span class="flex-1">Termo de Consentimento</span>
                                <span class="text-sm text-green-600">✓ Assinado</span>
                            </label>
                            <label class="flex items-center p-3 bg-white rounded-lg hover:bg-indigo-50 cursor-pointer">
                                <input type="checkbox" checked class="mr-3 w-5 h-5 text-indigo-600">
                                <span class="flex-1">Autorização do Convênio</span>
                                <span class="text-sm text-green-600">✓ Aprovado</span>
                            </label>
                            <label class="flex items-center p-3 bg-white rounded-lg hover:bg-indigo-50 cursor-pointer">
                                <input type="checkbox" class="mr-3 w-5 h-5 text-indigo-600">
                                <span class="flex-1">Relatório Médico Atualizado</span>
                                <span class="text-sm text-orange-600">Pendente</span>
                            </label>
                        </div>
                    </div>
                    
                    <!-- Procedimentos -->
                    <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl">
                        <h4 class="font-semibold text-lg text-green-800 mb-4">
                            <i class="fas fa-procedures mr-2"></i>Procedimentos
                        </h4>
                        <div class="space-y-3">
                            <label class="flex items-center p-3 bg-white rounded-lg hover:bg-green-50 cursor-pointer">
                                <input type="checkbox" checked class="mr-3 w-5 h-5 text-green-600">
                                <span class="flex-1">Jejum Confirmado</span>
                                <span class="text-sm text-green-600">✓ OK</span>
                            </label>
                            <label class="flex items-center p-3 bg-white rounded-lg hover:bg-green-50 cursor-pointer">
                                <input type="checkbox" checked class="mr-3 w-5 h-5 text-green-600">
                                <span class="flex-1">Medicação Pré-Procedimento</span>
                                <span class="text-sm text-green-600">✓ Administrada</span>
                            </label>
                            <label class="flex items-center p-3 bg-white rounded-lg hover:bg-green-50 cursor-pointer">
                                <input type="checkbox" class="mr-3 w-5 h-5 text-green-600">
                                <span class="flex-1">Acompanhante Presente</span>
                                <span class="text-sm text-orange-600">Confirmar</span>
                            </label>
                        </div>
                    </div>
                </div>
                
                <!-- Métricas de Conformidade -->
                <div class="mt-6 bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl">
                    <div class="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p class="text-3xl font-bold text-purple-700">85%</p>
                            <p class="text-sm text-gray-600">Conformidade Geral</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold text-green-700">12/15</p>
                            <p class="text-sm text-gray-600">Itens Completos</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold text-blue-700">A+</p>
                            <p class="text-sm text-gray-600">Score de Qualidade</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Tab IA LAURA - Melhorada com mais funcionalidades -->
            <div id="tab-ia" class="tab-content hidden">
                <div class="mb-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">
                        <i class="fas fa-brain mr-3 text-purple-600"></i>
                        Inteligência Artificial LAURA - Análise Preditiva Avançada
                    </h3>
                    <p class="text-gray-600">Sistema cognitivo de predição e suporte à decisão clínica</p>
                </div>
                
                <!-- Painel Principal de Risco -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div class="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
                        <h4 class="font-semibold text-purple-900 mb-3">Risco de Não Adesão</h4>
                        <div class="relative">
                            <svg class="w-32 h-32 mx-auto">
                                <circle cx="64" cy="64" r="60" stroke="#e5e7eb" stroke-width="8" fill="none"/>
                                <circle cx="64" cy="64" r="60" stroke="#8b5cf6" stroke-width="8" fill="none"
                                        stroke-dasharray="${patient.risco * 3.77} 377"
                                        stroke-dashoffset="0"
                                        transform="rotate(-90 64 64)"/>
                            </svg>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <span class="text-3xl font-bold text-purple-700">${patient.risco}%</span>
                            </div>
                        </div>
                        <p class="text-center text-sm text-purple-700 mt-2">
                            ${patient.risco < 30 ? 'Baixo Risco' : patient.risco < 60 ? 'Risco Moderado' : 'Alto Risco'}
                        </p>
                    </div>
                    
                    <div class="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-xl">
                        <h4 class="font-semibold text-blue-900 mb-3">Probabilidade de Complicações</h4>
                        <div class="space-y-2">
                            <div>
                                <div class="flex justify-between text-sm">
                                    <span>Neutropenia</span>
                                    <span class="font-bold">18%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 18%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm">
                                    <span>Náusea/Vômito</span>
                                    <span class="font-bold">42%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-yellow-600 h-2 rounded-full" style="width: 42%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm">
                                    <span>Fadiga Severa</span>
                                    <span class="font-bold">65%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-orange-600 h-2 rounded-full" style="width: 65%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl">
                        <h4 class="font-semibold text-green-900 mb-3">Resposta ao Tratamento</h4>
                        <canvas id="responseChart" width="200" height="150"></canvas>
                        <p class="text-center text-sm text-green-700 mt-2">Tendência Positiva</p>
                    </div>
                </div>
                
                <!-- Alertas Preditivos -->
                <div class="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl mb-6">
                    <h4 class="font-semibold text-red-800 mb-4">
                        <i class="fas fa-exclamation-triangle mr-2"></i>Alertas Preditivos LAURA
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white p-4 rounded-lg border-l-4 border-red-500">
                            <div class="flex items-start">
                                <i class="fas fa-heartbeat text-red-500 mr-3 mt-1"></i>
                                <div>
                                    <p class="font-semibold text-gray-800">Risco Cardiovascular Elevado</p>
                                    <p class="text-sm text-gray-600 mt-1">Monitorar PA e FC durante quimioterapia</p>
                                    <p class="text-xs text-red-600 mt-2">Probabilidade: 72% • Janela: 48-72h</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                            <div class="flex items-start">
                                <i class="fas fa-calendar-times text-orange-500 mr-3 mt-1"></i>
                                <div>
                                    <p class="font-semibold text-gray-800">Possível Falta na Próxima Consulta</p>
                                    <p class="text-sm text-gray-600 mt-1">Reforçar contato 24h antes</p>
                                    <p class="text-xs text-orange-600 mt-2">Probabilidade: 45% • Ação: Preventiva</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Recomendações da IA -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                        <h4 class="font-semibold text-indigo-800 mb-4">
                            <i class="fas fa-robot mr-2"></i>Recomendações Personalizadas
                        </h4>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                                <div>
                                    <p class="font-medium">Intensificar Suporte Psicológico</p>
                                    <p class="text-sm text-gray-600">Score de ansiedade: 7/10</p>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                                <div>
                                    <p class="font-medium">Ajustar Antiemético Profilático</p>
                                    <p class="text-sm text-gray-600">Base: Histórico de náusea</p>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                                <div>
                                    <p class="font-medium">Incluir Familiar nas Consultas</p>
                                    <p class="text-sm text-gray-600">Melhora adesão em 35%</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl">
                        <h4 class="font-semibold text-teal-800 mb-4">
                            <i class="fas fa-chart-line mr-2"></i>Métricas de Performance
                        </h4>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <span class="text-sm">Acurácia Preditiva</span>
                                <span class="font-bold text-teal-700">94.3%</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm">Eventos Prevenidos</span>
                                <span class="font-bold text-green-700">12</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm">Tempo Médio de Alerta</span>
                                <span class="font-bold text-blue-700">8.5h antes</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm">Score de Confiança</span>
                                <span class="font-bold text-purple-700">92%</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Análise Temporal Avançada -->
                <div class="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                    <h4 class="font-semibold text-gray-800 mb-4">
                        <i class="fas fa-history mr-2"></i>Evolução Temporal do Risco - Análise Multidimensional
                    </h4>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                        <div class="bg-white p-3 rounded-lg">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm font-medium text-gray-600">Tendência Geral</span>
                                <span class="text-green-600 font-bold flex items-center">
                                    <i class="fas fa-arrow-down mr-1"></i>${riskData.tendencia}
                                </span>
                            </div>
                            <div class="text-xs text-gray-500">Redução no risco agregado</div>
                        </div>
                        <div class="bg-white p-3 rounded-lg">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm font-medium text-gray-600">Ponto Crítico</span>
                                <span class="text-orange-600 font-bold">${riskData.pontoCritico}</span>
                            </div>
                            <div class="text-xs text-gray-500">Pico de risco identificado</div>
                        </div>
                        <div class="bg-white p-3 rounded-lg">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm font-medium text-gray-600">Previsão 7 dias</span>
                                <span class="text-blue-600 font-bold">${riskData.previsao}</span>
                            </div>
                            <div class="text-xs text-gray-500">Mantendo tendência positiva</div>
                        </div>
                    </div>
                    <canvas id="timelineChart" width="800" height="300"></canvas>
                    <div class="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                            <span class="text-xs text-gray-600">Risco Não Adesão</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <span class="text-xs text-gray-600">Risco Complicações</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            <span class="text-xs text-gray-600">Risco Toxicidade</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                            <span class="text-xs text-gray-600">Score Agregado</span>
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
            
            // Initialize charts if IA tab
            if (tabName === 'ia') {
                setTimeout(initCharts, 100);
            }
        }
        
        function initCharts() {
            // Response Chart
            const responseCtx = document.getElementById('responseChart');
            if (responseCtx && !responseCtx.chartInstance) {
                responseCtx.chartInstance = new Chart(responseCtx, {
                    type: 'line',
                    data: {
                        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'],
                        datasets: [{
                            label: 'Resposta',
                            data: [20, 35, 45, 60, 72, 85],
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100
                            }
                        }
                    }
                });
            }
            
            // Enhanced Timeline Chart with Multiple Risk Dimensions
            const timelineCtx = document.getElementById('timelineChart');
            if (timelineCtx && !timelineCtx.chartInstance) {
                timelineCtx.chartInstance = new Chart(timelineCtx, {
                    type: 'line',
                    data: {
                        labels: ['Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15', 'Jan 16', 'Jan 17', 'Jan 18', 'Jan 19', 'Jan 20', 'Jan 21'],
                        datasets: [
                            {
                                label: 'Risco Não Adesão',
                                data: [${riskData.naoAdesao.join(', ')}],
                                borderColor: '#8b5cf6',
                                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                                tension: 0.3,
                                borderWidth: 2,
                                pointRadius: 3,
                                pointHoverRadius: 5
                            },
                            {
                                label: 'Risco Complicações',
                                data: [${riskData.complicacoes.join(', ')}],
                                borderColor: '#ef4444',
                                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                tension: 0.3,
                                borderWidth: 2,
                                pointRadius: 3,
                                pointHoverRadius: 5
                            },
                            {
                                label: 'Risco Toxicidade',
                                data: [${riskData.toxicidade.join(', ')}],
                                borderColor: '#eab308',
                                backgroundColor: 'rgba(234, 179, 8, 0.1)',
                                tension: 0.3,
                                borderWidth: 2,
                                pointRadius: 3,
                                pointHoverRadius: 5
                            },
                            {
                                label: 'Score Agregado LAURA',
                                data: [${riskData.agregado.join(', ')}],
                                borderColor: '#3b82f6',
                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                tension: 0.3,
                                borderWidth: 3,
                                pointRadius: 4,
                                pointHoverRadius: 6,
                                borderDash: [5, 5]
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        plugins: {
                            legend: { 
                                display: false // Usando legenda customizada
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return context.dataset.label + ': ' + context.parsed.y + '%';
                                    },
                                    afterLabel: function(context) {
                                        if (context.dataIndex === 4) {
                                            return '⚠️ Ponto crítico detectado';
                                        }
                                        return '';
                                    }
                                },
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                padding: 12,
                                titleFont: {
                                    size: 14
                                },
                                bodyFont: {
                                    size: 13
                                }
                            },
                            annotation: {
                                annotations: {
                                    line1: {
                                        type: 'line',
                                        yMin: 50,
                                        yMax: 50,
                                        borderColor: 'rgba(255, 99, 132, 0.5)',
                                        borderWidth: 2,
                                        borderDash: [6, 6],
                                        label: {
                                            display: true,
                                            content: 'Limiar de Alerta',
                                            position: 'start'
                                        }
                                    },
                                    point1: {
                                        type: 'point',
                                        xValue: 'Jan 14',
                                        yValue: 48,
                                        backgroundColor: 'rgba(255, 99, 132, 0.25)',
                                        radius: 8,
                                        borderColor: 'rgb(255, 99, 132)',
                                        borderWidth: 2
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    stepSize: 20,
                                    callback: function(value) {
                                        return value + '%';
                                    }
                                },
                                grid: {
                                    color: 'rgba(0, 0, 0, 0.05)'
                                },
                                title: {
                                    display: true,
                                    text: 'Nível de Risco',
                                    font: {
                                        size: 12
                                    }
                                }
                            },
                            x: {
                                grid: {
                                    display: false
                                },
                                title: {
                                    display: true,
                                    text: 'Timeline (Janeiro 2025)',
                                    font: {
                                        size: 12
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }
    </script>
</body>
</html>
    `);
});

export default patientViewIntegrated;