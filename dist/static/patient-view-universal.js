// Patient View Universal - View Padrão Reutilizável para Todos os Portais
// Desenvolvido para ACCamargo Cancer Center - Sistema Oncológico Integrado

// ==========================================
// VIEW UNIVERSAL DO PACIENTE
// ==========================================
function renderPatientUniversalView(patientId, context = 'navigator') {
    // Dados completos do paciente (integração futura com API)
    const patientData = {
        // Dados Cadastrais
        id: patientId || 'PAC-2025-001',
        mrn: 'MRN-547832',
        nome: 'Maria Silva Santos',
        dataNascimento: '15/03/1972',
        idade: 52,
        genero: 'Feminino',
        cpf: '***.***.789-**',
        rg: '**.***.**-*',
        telefone: '(11) 98765-4321',
        telefoneEmergencia: '(11) 98765-1234',
        email: 'maria.silva@email.com',
        endereco: {
            rua: 'Rua das Flores, 123',
            bairro: 'Jardim Paulista',
            cidade: 'São Paulo',
            estado: 'SP',
            cep: '01234-567'
        },
        convenio: 'Unimed Premium',
        numeroCarteira: '****5678',
        validadeCarteira: '12/2026',
        foto: 'https://ui-avatars.com/api/?name=Maria+Silva&background=4F46E5&color=fff&size=200',
        
        // Dados Clínicos
        diagnostico: {
            principal: 'Carcinoma Ductal Invasivo - Mama',
            cid: 'C50.9',
            estadiamento: 'IIA (T2N0M0)',
            dataDiscoverta: '10/10/2024',
            localizacao: 'Mama direita, quadrante superior externo',
            grauHistologico: 'G2 - Moderadamente diferenciado',
            receptores: {
                er: 'Positivo (85%)',
                pr: 'Positivo (70%)',
                her2: 'Negativo',
                ki67: '15%'
            }
        },
        
        comorbidades: [
            'Hipertensão Arterial Sistêmica',
            'Diabetes Mellitus Tipo 2',
            'Dislipidemia'
        ],
        
        alergias: [
            'Dipirona',
            'Penicilina'
        ],
        
        medicacoesAtuais: [
            { nome: 'Losartana 50mg', posologia: '1x ao dia', tipo: 'Contínuo' },
            { nome: 'Metformina 850mg', posologia: '2x ao dia', tipo: 'Contínuo' },
            { nome: 'Tamoxifeno 20mg', posologia: '1x ao dia', tipo: 'Oncológico' }
        ],
        
        // Status do Tratamento
        tratamento: {
            fase: 'Tratamento Ativo',
            protocolo: 'AC-T (Doxorrubicina + Ciclofosfamida → Paclitaxel)',
            inicioTratamento: '15/11/2024',
            previsaoTermino: '15/05/2025',
            ciclosRealizados: 3,
            ciclosTotais: 8,
            proximaSessao: '20/01/2025 às 09:00',
            localTratamento: 'Centro de Quimioterapia - 3º Andar',
            
            timeline: [
                { tipo: 'cirurgia', data: '05/11/2024', descricao: 'Quadrantectomia + Biópsia Sentinela', status: 'realizado' },
                { tipo: 'quimio', data: '15/11/2024', descricao: 'Início Quimioterapia Adjuvante', status: 'realizado' },
                { tipo: 'quimio', data: '06/12/2024', descricao: '2º Ciclo QT', status: 'realizado' },
                { tipo: 'quimio', data: '27/12/2024', descricao: '3º Ciclo QT', status: 'realizado' },
                { tipo: 'quimio', data: '20/01/2025', descricao: '4º Ciclo QT', status: 'agendado' },
                { tipo: 'radio', data: '01/06/2025', descricao: 'Início Radioterapia', status: 'planejado' }
            ]
        },
        
        // Equipe Médica
        equipeMedica: [
            {
                especialidade: 'Oncologia Clínica',
                nome: 'Dr. Carlos Mendes',
                crm: 'CRM-SP 123456',
                telefone: '(11) 3456-7890',
                email: 'dr.carlos@accamargo.org.br',
                papel: 'Oncologista Principal',
                avatar: 'https://ui-avatars.com/api/?name=Dr+Carlos&background=6366F1&color=fff'
            },
            {
                especialidade: 'Cirurgia Oncológica',
                nome: 'Dra. Patricia Lima',
                crm: 'CRM-SP 234567',
                telefone: '(11) 3456-7892',
                email: 'dra.patricia@accamargo.org.br',
                papel: 'Cirurgiã',
                avatar: 'https://ui-avatars.com/api/?name=Dra+Patricia&background=6366F1&color=fff'
            },
            {
                especialidade: 'Radioterapia',
                nome: 'Dr. Fernando Costa',
                crm: 'CRM-SP 345678',
                telefone: '(11) 3456-7894',
                email: 'dr.fernando@accamargo.org.br',
                papel: 'Radioterapeuta',
                avatar: 'https://ui-avatars.com/api/?name=Dr+Fernando&background=6366F1&color=fff'
            }
        ],
        
        // Equipe de Navegação
        equipeNavegacao: {
            navegadorPrincipal: {
                nome: 'Enf. Ana Paula Rodrigues',
                coren: 'COREN-SP 456789',
                telefone: '(11) 98765-5432',
                email: 'ana.navegacao@accamargo.org.br',
                avatar: 'https://ui-avatars.com/api/?name=Ana+Paula&background=10B981&color=fff',
                disponibilidade: 'Seg-Sex 8h-17h'
            },
            apoioMultidisciplinar: [
                { area: 'Nutrição', profissional: 'Dra. Beatriz Alves', contato: '(11) 3456-7896' },
                { area: 'Psicologia', profissional: 'Dr. Rafael Santos', contato: '(11) 3456-7897' },
                { area: 'Serviço Social', profissional: 'Maria José Silva', contato: '(11) 3456-7898' },
                { area: 'Fisioterapia', profissional: 'Dr. Pedro Oliveira', contato: '(11) 3456-7899' }
            ]
        },
        
        // Rede de Apoio
        redeApoio: [
            {
                nome: 'João Silva Santos',
                relacao: 'Esposo',
                telefone: '(11) 98765-1234',
                email: 'joao.silva@email.com',
                cuidadorPrincipal: true,
                autorizadoInfo: true,
                disponibilidade: 'Integral'
            },
            {
                nome: 'Ana Silva',
                relacao: 'Filha',
                telefone: '(11) 98765-5678',
                email: 'ana.silva@email.com',
                cuidadorPrincipal: false,
                autorizadoInfo: true,
                disponibilidade: 'Fins de semana'
            }
        ],
        
        // Preditividade IA - Ansiedade de Laura
        predicoes: {
            riscoDeterioracao: {
                nivel: 'Médio',
                score: 65,
                fatores: [
                    'Idade > 50 anos',
                    'Comorbidades múltiplas',
                    'Toxicidade grau 2 em ciclo anterior'
                ],
                recomendacoes: [
                    'Monitoramento semanal de hemograma',
                    'Atenção a sinais de neutropenia',
                    'Considerar ajuste de dose no próximo ciclo'
                ]
            },
            adesaoTratamento: {
                nivel: 'Alta',
                score: 92,
                historico: 'Paciente compareceu a todas as sessões programadas'
            },
            riscoInternacao: {
                nivel: 'Baixo',
                score: 25,
                proximaAvaliacao: '25/01/2025'
            },
            qualidadeVida: {
                score: 75,
                tendencia: 'estável',
                ultimaAvaliacao: '10/01/2025'
            }
        },
        
        // Histórico de Interações (Timeline)
        historico: [
            {
                data: '13/01/2025 14:30',
                tipo: 'consulta',
                portal: 'medico',
                titulo: 'Consulta de Rotina',
                descricao: 'Avaliação pós 3º ciclo QT. Paciente tolerando bem, náuseas controladas.',
                profissional: 'Dr. Carlos Mendes',
                icon: 'fa-stethoscope',
                cor: 'blue'
            },
            {
                data: '12/01/2025 10:00',
                tipo: 'bem-estar',
                portal: 'wellness',
                titulo: 'Sessão de Psicologia',
                descricao: 'Terapia de apoio. Paciente demonstrando boa adaptação ao tratamento.',
                profissional: 'Dr. Rafael Santos',
                icon: 'fa-brain',
                cor: 'purple'
            },
            {
                data: '10/01/2025 15:45',
                tipo: 'financeiro',
                portal: 'financial',
                titulo: 'Autorização de Procedimento',
                descricao: 'Aprovada autorização para próximos 3 ciclos de quimioterapia.',
                profissional: 'Sistema',
                icon: 'fa-dollar-sign',
                cor: 'green'
            },
            {
                data: '08/01/2025 09:00',
                tipo: 'exame',
                portal: 'medico',
                titulo: 'Exames Laboratoriais',
                descricao: 'Hemograma completo, função hepática e renal. Resultados dentro da normalidade.',
                profissional: 'Laboratório Central',
                icon: 'fa-flask',
                cor: 'teal'
            },
            {
                data: '05/01/2025 11:30',
                tipo: 'pesquisa',
                portal: 'research',
                titulo: 'Inclusão em Estudo Clínico',
                descricao: 'Paciente elegível para estudo de qualidade de vida QOLC-2025.',
                profissional: 'Dra. Mariana Pesquisa',
                icon: 'fa-microscope',
                cor: 'indigo'
            },
            {
                data: '27/12/2024 08:00',
                tipo: 'tratamento',
                portal: 'medico',
                titulo: '3º Ciclo Quimioterapia',
                descricao: 'Administração AC protocolo. Pré-medicação com ondansetrona.',
                profissional: 'Enf. Carla QT',
                icon: 'fa-syringe',
                cor: 'red'
            }
        ],
        
        // Métricas e KPIs
        metricas: {
            diasEmTratamento: 58,
            consultasRealizadas: 12,
            sessoesConcluidas: 3,
            taxaAdesao: 100,
            economiaGlosas: 'R$ 15.420,00',
            satisfacao: 4.8
        }
    };

    // Gerar HTML da View
    return `
        <div class="patient-universal-view bg-gray-50 min-h-screen">
            <!-- Header do Paciente -->
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 shadow-lg">
                <div class="container mx-auto">
                    <div class="flex items-start justify-between">
                        <div class="flex items-center gap-6">
                            <img src="${patientData.foto}" alt="${patientData.nome}" 
                                 class="w-24 h-24 rounded-full border-4 border-white shadow-xl">
                            <div>
                                <h1 class="text-3xl font-bold">${patientData.nome}</h1>
                                <div class="flex items-center gap-4 mt-2 text-blue-100">
                                    <span><i class="fas fa-id-card mr-1"></i>${patientData.mrn}</span>
                                    <span><i class="fas fa-birthday-cake mr-1"></i>${patientData.idade} anos</span>
                                    <span><i class="fas fa-phone mr-1"></i>${patientData.telefone}</span>
                                    <span><i class="fas fa-shield-alt mr-1"></i>${patientData.convenio}</span>
                                </div>
                                <div class="mt-3 flex gap-2">
                                    <span class="px-3 py-1 bg-white/20 rounded-full text-sm">
                                        ${patientData.diagnostico.principal}
                                    </span>
                                    <span class="px-3 py-1 bg-yellow-400/30 rounded-full text-sm">
                                        ${patientData.tratamento.fase}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button onclick="closePatientView()" class="text-white hover:text-blue-200 transition-colors">
                            <i class="fas fa-times text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Tabs de Navegação -->
            <div class="bg-white shadow-sm sticky top-0 z-40">
                <div class="container mx-auto">
                    <div class="flex space-x-1 overflow-x-auto">
                        <button onclick="showPatientTab('clinico')" class="patient-tab-btn active px-6 py-3 font-medium text-sm hover:bg-gray-50 border-b-2 border-blue-600 text-blue-600" data-tab="clinico">
                            <i class="fas fa-notes-medical mr-2"></i>Dados Clínicos
                        </button>
                        <button onclick="showPatientTab('equipe')" class="patient-tab-btn px-6 py-3 font-medium text-sm text-gray-600 hover:bg-gray-50 border-b-2 border-transparent" data-tab="equipe">
                            <i class="fas fa-user-md mr-2"></i>Equipe Médica
                        </button>
                        <button onclick="showPatientTab('navegacao')" class="patient-tab-btn px-6 py-3 font-medium text-sm text-gray-600 hover:bg-gray-50 border-b-2 border-transparent" data-tab="navegacao">
                            <i class="fas fa-route mr-2"></i>Navegação
                        </button>
                        <button onclick="showPatientTab('rede-apoio')" class="patient-tab-btn px-6 py-3 font-medium text-sm text-gray-600 hover:bg-gray-50 border-b-2 border-transparent" data-tab="rede-apoio">
                            <i class="fas fa-users mr-2"></i>Rede de Apoio
                        </button>
                        <button onclick="showPatientTab('ia-predicoes')" class="patient-tab-btn px-6 py-3 font-medium text-sm text-gray-600 hover:bg-gray-50 border-b-2 border-transparent" data-tab="ia-predicoes">
                            <i class="fas fa-brain mr-2"></i>IA Preditiva
                        </button>
                        <button onclick="showPatientTab('historico')" class="patient-tab-btn px-6 py-3 font-medium text-sm text-gray-600 hover:bg-gray-50 border-b-2 border-transparent" data-tab="historico">
                            <i class="fas fa-history mr-2"></i>Histórico
                        </button>
                    </div>
                </div>
            </div>

            <!-- Container Principal -->
            <div class="container mx-auto p-6">
                <!-- Tab: Dados Clínicos -->
                <div id="tab-clinico" class="patient-tab-content">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Coluna 1: Diagnóstico e Tratamento -->
                        <div class="lg:col-span-2 space-y-6">
                            <!-- Card Diagnóstico -->
                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <h3 class="text-lg font-bold text-gray-800 mb-4">
                                    <i class="fas fa-microscope text-blue-600 mr-2"></i>
                                    Diagnóstico Principal
                                </h3>
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <p class="text-sm text-gray-600">Diagnóstico</p>
                                        <p class="font-semibold">${patientData.diagnostico.principal}</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600">CID</p>
                                        <p class="font-semibold">${patientData.diagnostico.cid}</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600">Estadiamento</p>
                                        <p class="font-semibold">${patientData.diagnostico.estadiamento}</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600">Grau Histológico</p>
                                        <p class="font-semibold">${patientData.diagnostico.grauHistologico}</p>
                                    </div>
                                </div>
                                <div class="mt-4 p-3 bg-blue-50 rounded-lg">
                                    <p class="text-sm font-medium text-blue-800 mb-2">Receptores Hormonais:</p>
                                    <div class="grid grid-cols-2 gap-2 text-sm">
                                        <span>ER: ${patientData.diagnostico.receptores.er}</span>
                                        <span>PR: ${patientData.diagnostico.receptores.pr}</span>
                                        <span>HER2: ${patientData.diagnostico.receptores.her2}</span>
                                        <span>Ki67: ${patientData.diagnostico.receptores.ki67}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Card Tratamento Atual -->
                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <h3 class="text-lg font-bold text-gray-800 mb-4">
                                    <i class="fas fa-procedures text-green-600 mr-2"></i>
                                    Tratamento Atual
                                </h3>
                                <div class="space-y-3">
                                    <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                        <div>
                                            <p class="font-semibold text-gray-800">Protocolo</p>
                                            <p class="text-sm text-gray-600">${patientData.tratamento.protocolo}</p>
                                        </div>
                                        <div class="text-right">
                                            <p class="text-2xl font-bold text-green-600">${patientData.tratamento.ciclosRealizados}/${patientData.tratamento.ciclosTotais}</p>
                                            <p class="text-xs text-gray-600">Ciclos</p>
                                        </div>
                                    </div>
                                    
                                    <!-- Timeline do Tratamento -->
                                    <div class="mt-4">
                                        <p class="text-sm font-medium text-gray-700 mb-3">Linha do Tempo:</p>
                                        <div class="space-y-2">
                                            ${patientData.tratamento.timeline.map(item => `
                                                <div class="flex items-center gap-3 p-2 ${item.status === 'agendado' ? 'bg-yellow-50' : item.status === 'realizado' ? 'bg-gray-50' : 'bg-blue-50'} rounded">
                                                    <i class="fas ${item.tipo === 'cirurgia' ? 'fa-cut' : item.tipo === 'quimio' ? 'fa-pills' : 'fa-radiation'} 
                                                       ${item.status === 'realizado' ? 'text-green-500' : item.status === 'agendado' ? 'text-yellow-500' : 'text-blue-500'}"></i>
                                                    <div class="flex-1">
                                                        <p class="text-sm font-medium">${item.descricao}</p>
                                                        <p class="text-xs text-gray-600">${item.data}</p>
                                                    </div>
                                                    <span class="text-xs px-2 py-1 rounded-full
                                                        ${item.status === 'realizado' ? 'bg-green-100 text-green-700' : 
                                                          item.status === 'agendado' ? 'bg-yellow-100 text-yellow-700' : 
                                                          'bg-blue-100 text-blue-700'}">
                                                        ${item.status}
                                                    </span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Coluna 2: Informações Complementares -->
                        <div class="space-y-6">
                            <!-- Comorbidades -->
                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <h4 class="font-semibold text-gray-800 mb-3">
                                    <i class="fas fa-notes-medical text-orange-500 mr-2"></i>
                                    Comorbidades
                                </h4>
                                <div class="space-y-2">
                                    ${patientData.comorbidades.map(c => `
                                        <div class="flex items-center gap-2 p-2 bg-orange-50 rounded">
                                            <i class="fas fa-circle text-orange-400 text-xs"></i>
                                            <span class="text-sm">${c}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Alergias -->
                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <h4 class="font-semibold text-gray-800 mb-3">
                                    <i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                                    Alergias
                                </h4>
                                <div class="space-y-2">
                                    ${patientData.alergias.map(a => `
                                        <div class="flex items-center gap-2 p-2 bg-red-50 rounded">
                                            <i class="fas fa-ban text-red-400"></i>
                                            <span class="text-sm font-medium text-red-700">${a}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Medicações Atuais -->
                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <h4 class="font-semibold text-gray-800 mb-3">
                                    <i class="fas fa-pills text-blue-500 mr-2"></i>
                                    Medicações em Uso
                                </h4>
                                <div class="space-y-2">
                                    ${patientData.medicacoesAtuais.map(m => `
                                        <div class="p-2 bg-blue-50 rounded">
                                            <p class="text-sm font-medium">${m.nome}</p>
                                            <p class="text-xs text-gray-600">${m.posologia} - ${m.tipo}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tab: Equipe Médica -->
                <div id="tab-equipe" class="patient-tab-content hidden">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${patientData.equipeMedica.map(medico => `
                            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div class="flex items-start gap-4">
                                    <img src="${medico.avatar}" alt="${medico.nome}" class="w-16 h-16 rounded-full">
                                    <div class="flex-1">
                                        <h4 class="font-bold text-gray-800">${medico.nome}</h4>
                                        <p class="text-sm text-gray-600">${medico.especialidade}</p>
                                        <p class="text-xs text-blue-600 font-medium mt-1">${medico.papel}</p>
                                    </div>
                                </div>
                                <div class="mt-4 space-y-2 text-sm">
                                    <div class="flex items-center gap-2 text-gray-600">
                                        <i class="fas fa-id-badge text-gray-400"></i>
                                        <span>${medico.crm}</span>
                                    </div>
                                    <div class="flex items-center gap-2 text-gray-600">
                                        <i class="fas fa-phone text-gray-400"></i>
                                        <span>${medico.telefone}</span>
                                    </div>
                                    <div class="flex items-center gap-2 text-gray-600">
                                        <i class="fas fa-envelope text-gray-400"></i>
                                        <span class="truncate">${medico.email}</span>
                                    </div>
                                </div>
                                <div class="mt-4 flex gap-2">
                                    <button class="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600">
                                        <i class="fas fa-phone mr-1"></i>Ligar
                                    </button>
                                    <button class="flex-1 bg-gray-500 text-white py-2 rounded-lg text-sm hover:bg-gray-600">
                                        <i class="fas fa-envelope mr-1"></i>Email
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Tab: Equipe de Navegação -->
                <div id="tab-navegacao" class="patient-tab-content hidden">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Navegador Principal -->
                        <div class="lg:col-span-1">
                            <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6">
                                <h4 class="font-bold text-gray-800 mb-4">
                                    <i class="fas fa-user-nurse text-green-600 mr-2"></i>
                                    Navegador Principal
                                </h4>
                                <div class="text-center">
                                    <img src="${patientData.equipeNavegacao.navegadorPrincipal.avatar}" 
                                         alt="${patientData.equipeNavegacao.navegadorPrincipal.nome}" 
                                         class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg">
                                    <h5 class="font-bold text-gray-800">${patientData.equipeNavegacao.navegadorPrincipal.nome}</h5>
                                    <p class="text-sm text-gray-600">${patientData.equipeNavegacao.navegadorPrincipal.coren}</p>
                                    <div class="mt-4 space-y-2 text-sm">
                                        <p class="text-gray-600">
                                            <i class="fas fa-clock mr-2"></i>${patientData.equipeNavegacao.navegadorPrincipal.disponibilidade}
                                        </p>
                                        <p class="text-gray-600">
                                            <i class="fas fa-phone mr-2"></i>${patientData.equipeNavegacao.navegadorPrincipal.telefone}
                                        </p>
                                    </div>
                                    <button class="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                                        <i class="fas fa-comments mr-2"></i>Entrar em Contato
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Equipe Multidisciplinar -->
                        <div class="lg:col-span-2">
                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <h4 class="font-bold text-gray-800 mb-4">
                                    <i class="fas fa-users-medical text-blue-600 mr-2"></i>
                                    Apoio Multidisciplinar
                                </h4>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    ${patientData.equipeNavegacao.apoioMultidisciplinar.map(prof => `
                                        <div class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div class="flex items-center justify-between">
                                                <div>
                                                    <p class="font-semibold text-gray-800">${prof.area}</p>
                                                    <p class="text-sm text-gray-600">${prof.profissional}</p>
                                                    <p class="text-xs text-gray-500 mt-1">
                                                        <i class="fas fa-phone mr-1"></i>${prof.contato}
                                                    </p>
                                                </div>
                                                <button class="text-blue-500 hover:text-blue-700">
                                                    <i class="fas fa-phone-alt text-xl"></i>
                                                </button>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tab: Rede de Apoio -->
                <div id="tab-rede-apoio" class="patient-tab-content hidden">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${patientData.redeApoio.map(pessoa => `
                            <div class="bg-white rounded-xl shadow-lg p-6 ${pessoa.cuidadorPrincipal ? 'border-2 border-green-500' : ''}">
                                ${pessoa.cuidadorPrincipal ? `
                                    <div class="mb-3">
                                        <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                            <i class="fas fa-star mr-1"></i>Cuidador Principal
                                        </span>
                                    </div>
                                ` : ''}
                                <h4 class="font-bold text-gray-800">${pessoa.nome}</h4>
                                <p class="text-sm text-gray-600">${pessoa.relacao}</p>
                                <div class="mt-4 space-y-2 text-sm">
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-phone text-gray-400"></i>
                                        <span>${pessoa.telefone}</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-envelope text-gray-400"></i>
                                        <span class="truncate">${pessoa.email}</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-clock text-gray-400"></i>
                                        <span>${pessoa.disponibilidade}</span>
                                    </div>
                                </div>
                                <div class="mt-4 flex items-center justify-between">
                                    ${pessoa.autorizadoInfo ? `
                                        <span class="text-green-600 text-sm">
                                            <i class="fas fa-check-circle mr-1"></i>Autorizado
                                        </span>
                                    ` : `
                                        <span class="text-gray-400 text-sm">
                                            <i class="fas fa-times-circle mr-1"></i>Não autorizado
                                        </span>
                                    `}
                                    <button class="text-blue-500 hover:text-blue-700">
                                        <i class="fas fa-phone-alt"></i>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Tab: IA Preditiva - Ansiedade de Laura -->
                <div id="tab-ia-predicoes" class="patient-tab-content hidden">
                    <div class="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                        <h3 class="text-lg font-bold text-gray-800 mb-2">
                            <i class="fas fa-brain text-purple-600 mr-2"></i>
                            Análise Preditiva - Ansiedade de Laura
                        </h3>
                        <p class="text-sm text-gray-600">Sistema de IA analisando padrões e prevendo riscos em tempo real</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- Card Risco de Deterioração -->
                        <div class="bg-white rounded-xl shadow-lg p-6">
                            <h4 class="font-semibold text-gray-800 mb-3">Risco de Deterioração</h4>
                            <div class="relative w-32 h-32 mx-auto">
                                <svg class="transform -rotate-90 w-32 h-32">
                                    <circle cx="64" cy="64" r="56" stroke="#E5E7EB" stroke-width="8" fill="none"/>
                                    <circle cx="64" cy="64" r="56" 
                                            stroke="${patientData.predicoes.riscoDeterioracao.score > 70 ? '#EF4444' : patientData.predicoes.riscoDeterioracao.score > 40 ? '#F59E0B' : '#10B981'}" 
                                            stroke-width="8" fill="none"
                                            stroke-dasharray="${patientData.predicoes.riscoDeterioracao.score * 3.52} 352"
                                            stroke-linecap="round"/>
                                </svg>
                                <div class="absolute inset-0 flex flex-col items-center justify-center">
                                    <span class="text-3xl font-bold">${patientData.predicoes.riscoDeterioracao.score}%</span>
                                    <span class="text-sm text-gray-600">${patientData.predicoes.riscoDeterioracao.nivel}</span>
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="text-xs font-medium text-gray-700 mb-2">Fatores de Risco:</p>
                                <div class="space-y-1">
                                    ${patientData.predicoes.riscoDeterioracao.fatores.map(f => `
                                        <p class="text-xs text-gray-600">• ${f}</p>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <!-- Card Adesão ao Tratamento -->
                        <div class="bg-white rounded-xl shadow-lg p-6">
                            <h4 class="font-semibold text-gray-800 mb-3">Adesão ao Tratamento</h4>
                            <div class="relative w-32 h-32 mx-auto">
                                <svg class="transform -rotate-90 w-32 h-32">
                                    <circle cx="64" cy="64" r="56" stroke="#E5E7EB" stroke-width="8" fill="none"/>
                                    <circle cx="64" cy="64" r="56" 
                                            stroke="#10B981" 
                                            stroke-width="8" fill="none"
                                            stroke-dasharray="${patientData.predicoes.adesaoTratamento.score * 3.52} 352"
                                            stroke-linecap="round"/>
                                </svg>
                                <div class="absolute inset-0 flex flex-col items-center justify-center">
                                    <span class="text-3xl font-bold text-green-600">${patientData.predicoes.adesaoTratamento.score}%</span>
                                    <span class="text-sm text-gray-600">${patientData.predicoes.adesaoTratamento.nivel}</span>
                                </div>
                            </div>
                            <div class="mt-4 p-3 bg-green-50 rounded-lg">
                                <p class="text-xs text-green-700">${patientData.predicoes.adesaoTratamento.historico}</p>
                            </div>
                        </div>

                        <!-- Card Risco de Internação -->
                        <div class="bg-white rounded-xl shadow-lg p-6">
                            <h4 class="font-semibold text-gray-800 mb-3">Risco de Internação</h4>
                            <div class="relative w-32 h-32 mx-auto">
                                <svg class="transform -rotate-90 w-32 h-32">
                                    <circle cx="64" cy="64" r="56" stroke="#E5E7EB" stroke-width="8" fill="none"/>
                                    <circle cx="64" cy="64" r="56" 
                                            stroke="#3B82F6" 
                                            stroke-width="8" fill="none"
                                            stroke-dasharray="${patientData.predicoes.riscoInternacao.score * 3.52} 352"
                                            stroke-linecap="round"/>
                                </svg>
                                <div class="absolute inset-0 flex flex-col items-center justify-center">
                                    <span class="text-3xl font-bold text-blue-600">${patientData.predicoes.riscoInternacao.score}%</span>
                                    <span class="text-sm text-gray-600">${patientData.predicoes.riscoInternacao.nivel}</span>
                                </div>
                            </div>
                            <div class="mt-4 text-center">
                                <p class="text-xs text-gray-600">Próxima avaliação:</p>
                                <p class="text-sm font-medium">${patientData.predicoes.riscoInternacao.proximaAvaliacao}</p>
                            </div>
                        </div>

                        <!-- Card Qualidade de Vida -->
                        <div class="bg-white rounded-xl shadow-lg p-6">
                            <h4 class="font-semibold text-gray-800 mb-3">Qualidade de Vida</h4>
                            <div class="relative w-32 h-32 mx-auto">
                                <svg class="transform -rotate-90 w-32 h-32">
                                    <circle cx="64" cy="64" r="56" stroke="#E5E7EB" stroke-width="8" fill="none"/>
                                    <circle cx="64" cy="64" r="56" 
                                            stroke="#8B5CF6" 
                                            stroke-width="8" fill="none"
                                            stroke-dasharray="${patientData.predicoes.qualidadeVida.score * 3.52} 352"
                                            stroke-linecap="round"/>
                                </svg>
                                <div class="absolute inset-0 flex flex-col items-center justify-center">
                                    <span class="text-3xl font-bold text-purple-600">${patientData.predicoes.qualidadeVida.score}%</span>
                                    <span class="text-sm text-gray-600">QoL Score</span>
                                </div>
                            </div>
                            <div class="mt-4 text-center">
                                <p class="text-xs text-gray-600">Tendência: 
                                    <span class="font-medium ${patientData.predicoes.qualidadeVida.tendencia === 'estável' ? 'text-blue-600' : 'text-green-600'}">
                                        ${patientData.predicoes.qualidadeVida.tendencia}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Recomendações da IA -->
                    <div class="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-lg p-6">
                        <h4 class="font-bold text-gray-800 mb-4">
                            <i class="fas fa-lightbulb text-yellow-600 mr-2"></i>
                            Recomendações da IA
                        </h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${patientData.predicoes.riscoDeterioracao.recomendacoes.map(rec => `
                                <div class="flex items-start gap-3 p-3 bg-white rounded-lg">
                                    <i class="fas fa-check-circle text-yellow-500 mt-1"></i>
                                    <p class="text-sm text-gray-700">${rec}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Tab: Histórico (Timeline) -->
                <div id="tab-historico" class="patient-tab-content hidden">
                    <div class="max-w-4xl mx-auto">
                        <!-- Filtros -->
                        <div class="mb-6 flex flex-wrap gap-2">
                            <button class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                                <i class="fas fa-filter mr-2"></i>Todos
                            </button>
                            <button class="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm hover:bg-gray-50">
                                <i class="fas fa-stethoscope mr-2"></i>Médico
                            </button>
                            <button class="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm hover:bg-gray-50">
                                <i class="fas fa-brain mr-2"></i>Bem-estar
                            </button>
                            <button class="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm hover:bg-gray-50">
                                <i class="fas fa-dollar-sign mr-2"></i>Financeiro
                            </button>
                            <button class="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm hover:bg-gray-50">
                                <i class="fas fa-microscope mr-2"></i>Pesquisa
                            </button>
                        </div>

                        <!-- Timeline -->
                        <div class="relative">
                            <!-- Linha vertical -->
                            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                            
                            <!-- Eventos -->
                            <div class="space-y-6">
                                ${patientData.historico.map((evento, index) => `
                                    <div class="relative flex items-start gap-6">
                                        <!-- Ícone do evento -->
                                        <div class="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-${evento.cor}-500">
                                            <i class="fas ${evento.icon} text-${evento.cor}-500 text-xl"></i>
                                        </div>
                                        
                                        <!-- Conteúdo do evento -->
                                        <div class="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                            <div class="flex items-start justify-between mb-3">
                                                <div>
                                                    <h4 class="font-bold text-gray-800">${evento.titulo}</h4>
                                                    <p class="text-sm text-gray-600 mt-1">${evento.descricao}</p>
                                                </div>
                                                <span class="px-3 py-1 bg-${evento.cor}-100 text-${evento.cor}-700 rounded-full text-xs font-medium">
                                                    ${evento.portal}
                                                </span>
                                            </div>
                                            <div class="flex items-center justify-between text-sm text-gray-500">
                                                <span><i class="fas fa-user mr-1"></i>${evento.profissional}</span>
                                                <span><i class="fas fa-clock mr-1"></i>${evento.data}</span>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Carregar mais -->
                        <div class="mt-8 text-center">
                            <button class="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                <i class="fas fa-arrow-down mr-2"></i>
                                Carregar mais eventos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer com Métricas -->
            <div class="bg-gray-800 text-white p-6 mt-8">
                <div class="container mx-auto">
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                        <div>
                            <p class="text-3xl font-bold">${patientData.metricas.diasEmTratamento}</p>
                            <p class="text-xs text-gray-400">Dias em Tratamento</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold">${patientData.metricas.consultasRealizadas}</p>
                            <p class="text-xs text-gray-400">Consultas</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold">${patientData.metricas.sessoesConcluidas}</p>
                            <p class="text-xs text-gray-400">Sessões QT</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold">${patientData.metricas.taxaAdesao}%</p>
                            <p class="text-xs text-gray-400">Taxa Adesão</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold text-green-400">${patientData.metricas.economiaGlosas}</p>
                            <p class="text-xs text-gray-400">Economia Glosas</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold text-yellow-400">⭐ ${patientData.metricas.satisfacao}</p>
                            <p class="text-xs text-gray-400">Satisfação</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Funções auxiliares para a view
function showPatientTab(tabName) {
    // Esconder todas as tabs
    document.querySelectorAll('.patient-tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remover classe active de todos os botões
    document.querySelectorAll('.patient-tab-btn').forEach(btn => {
        btn.classList.remove('active', 'border-blue-600', 'text-blue-600');
        btn.classList.add('border-transparent', 'text-gray-600');
    });
    
    // Mostrar tab selecionada
    const selectedTab = document.getElementById(`tab-${tabName}`);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }
    
    // Adicionar classe active ao botão selecionado
    const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'border-blue-600', 'text-blue-600');
        activeBtn.classList.remove('border-transparent', 'text-gray-600');
    }
}

function closePatientView() {
    const modal = document.getElementById('patient-universal-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Função para abrir a view do paciente em modal
function openPatientUniversalView(patientId, context = 'navigator') {
    // Criar ou reutilizar modal
    let modal = document.getElementById('patient-universal-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'patient-universal-modal';
        modal.className = 'fixed inset-0 z-50 overflow-y-auto';
        modal.style.display = 'none';
        document.body.appendChild(modal);
    }
    
    // Renderizar conteúdo
    modal.innerHTML = renderPatientUniversalView(patientId, context);
    
    // Mostrar modal
    modal.style.display = 'block';
    modal.style.overflow = 'auto';
    
    // Adicionar evento para fechar ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closePatientView();
        }
    });
}

// Exportar funções para uso global
window.renderPatientUniversalView = renderPatientUniversalView;
window.showPatientTab = showPatientTab;
window.closePatientView = closePatientView;
window.openPatientUniversalView = openPatientUniversalView;