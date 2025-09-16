// Navigator Portal - Views Especializadas
// Views: Contatar, Agendar, Jornada, Checklist

// ==========================================
// VIEW 1: CONTATAR - Rede de Contatos do Paciente
// ==========================================
function renderContatarView(patientId) {
    // Dados mock para demonstração - integrar com API real
    const patientData = {
        id: patientId || 'PAC-2025-001',
        nome: 'Maria Silva Santos',
        idade: 52,
        foto: 'https://ui-avatars.com/api/?name=Maria+Silva&background=4F46E5&color=fff',
        diagnostico: 'CA Mama - Estadio II',
        telefone: '(11) 98765-4321',
        email: 'maria.silva@email.com',
        endereco: 'Rua das Flores, 123 - São Paulo/SP',
        dataInicio: '15/12/2024',
        fase: 'Tratamento',
        
        // Rede de Apoio
        redeApoio: [
            {
                tipo: 'Familiar Principal',
                nome: 'João Silva Santos',
                relacao: 'Esposo',
                telefone: '(11) 98765-1234',
                email: 'joao.silva@email.com',
                disponibilidade: 'Integral',
                autorizadoInfo: true,
                avatar: 'https://ui-avatars.com/api/?name=João+Silva&background=10B981&color=fff'
            },
            {
                tipo: 'Familiar',
                nome: 'Ana Silva',
                relacao: 'Filha',
                telefone: '(11) 98765-5678',
                email: 'ana.silva@email.com',
                disponibilidade: 'Fins de semana',
                autorizadoInfo: true,
                avatar: 'https://ui-avatars.com/api/?name=Ana+Silva&background=10B981&color=fff'
            },
            {
                tipo: 'Cuidador',
                nome: 'Márcia Oliveira',
                relacao: 'Cuidadora Profissional',
                telefone: '(11) 98765-9012',
                email: 'marcia.cuidadora@email.com',
                disponibilidade: 'Segunda a Sexta',
                autorizadoInfo: false,
                avatar: 'https://ui-avatars.com/api/?name=Márcia+Oliveira&background=F59E0B&color=fff'
            }
        ],
        
        // Equipe Médica
        equipeMedica: [
            {
                especialidade: 'Oncologia',
                nome: 'Dr. Carlos Mendes',
                crm: 'CRM-SP 123456',
                telefone: '(11) 3456-7890',
                email: 'dr.carlos@accamargo.org.br',
                consultorio: 'Torre A - Sala 302',
                secretaria: 'Juliana - (11) 3456-7891',
                horarioAtendimento: 'Seg, Qua, Sex - 08h às 12h',
                avatar: 'https://ui-avatars.com/api/?name=Dr+Carlos&background=6366F1&color=fff',
                proximaConsulta: '18/01/2025 às 10:00'
            },
            {
                especialidade: 'Cirurgia Oncológica',
                nome: 'Dra. Patricia Lima',
                crm: 'CRM-SP 234567',
                telefone: '(11) 3456-7892',
                email: 'dra.patricia@accamargo.org.br',
                consultorio: 'Torre B - Sala 205',
                secretaria: 'Roberto - (11) 3456-7893',
                horarioAtendimento: 'Ter, Qui - 14h às 18h',
                avatar: 'https://ui-avatars.com/api/?name=Dra+Patricia&background=6366F1&color=fff',
                proximaConsulta: '22/01/2025 às 14:30'
            },
            {
                especialidade: 'Radioterapia',
                nome: 'Dr. Fernando Costa',
                crm: 'CRM-SP 345678',
                telefone: '(11) 3456-7894',
                email: 'dr.fernando@accamargo.org.br',
                consultorio: 'Centro de Radioterapia',
                secretaria: 'Marina - (11) 3456-7895',
                horarioAtendimento: 'Diariamente - 08h às 20h',
                avatar: 'https://ui-avatars.com/api/?name=Dr+Fernando&background=6366F1&color=fff',
                proximaConsulta: 'Sessões diárias até 30/01/2025'
            }
        ],
        
        // Outros Contatos
        outrosContatos: [
            {
                tipo: 'Nutrição',
                nome: 'Dra. Beatriz Alves',
                telefone: '(11) 3456-7896',
                email: 'nutricao@accamargo.org.br'
            },
            {
                tipo: 'Psicologia',
                nome: 'Dr. Rafael Santos',
                telefone: '(11) 3456-7897',
                email: 'psicologia@accamargo.org.br'
            },
            {
                tipo: 'Serviço Social',
                nome: 'Maria José Silva',
                telefone: '(11) 3456-7898',
                email: 'social@accamargo.org.br'
            },
            {
                tipo: 'Farmácia',
                nome: 'Central de Medicamentos',
                telefone: '(11) 3456-7899',
                email: 'farmacia@accamargo.org.br'
            }
        ]
    };

    return `
        <div class="contatar-view p-6">
            <!-- Header da View -->
            <div class="mb-6 flex justify-between items-center">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800">
                        <i class="fas fa-address-book mr-2 text-blue-600"></i>
                        Contatos do Paciente
                    </h2>
                    <p class="text-gray-600 mt-1">Rede completa de contatos e apoio</p>
                </div>
                <div class="flex gap-2">
                    <button onclick="exportarContatos('${patientId}')" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        <i class="fas fa-download mr-2"></i>Exportar
                    </button>
                    <button onclick="imprimirContatos('${patientId}')" class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                        <i class="fas fa-print mr-2"></i>Imprimir
                    </button>
                    <button onclick="closeModal()" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        <i class="fas fa-times mr-2"></i>Fechar
                    </button>
                </div>
            </div>

            <!-- Dados do Paciente -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 shadow-lg">
                <div class="flex items-start gap-6">
                    <img src="${patientData.foto}" alt="${patientData.nome}" class="w-24 h-24 rounded-full border-4 border-white shadow-lg">
                    <div class="flex-1">
                        <h3 class="text-xl font-bold text-gray-800">${patientData.nome}</h3>
                        <p class="text-gray-600">${patientData.idade} anos | ${patientData.diagnostico}</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-phone text-blue-500"></i>
                                <span class="text-sm">${patientData.telefone}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <i class="fas fa-envelope text-blue-500"></i>
                                <span class="text-sm">${patientData.email}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <i class="fas fa-map-marker-alt text-blue-500"></i>
                                <span class="text-sm">${patientData.endereco}</span>
                            </div>
                        </div>
                        <div class="flex gap-2 mt-4">
                            <button onclick="iniciarChamada('${patientData.telefone}')" class="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600">
                                <i class="fas fa-phone mr-1"></i>Ligar
                            </button>
                            <button onclick="enviarWhatsApp('${patientData.telefone}')" class="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700">
                                <i class="fab fa-whatsapp mr-1"></i>WhatsApp
                            </button>
                            <button onclick="enviarEmail('${patientData.email}')" class="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600">
                                <i class="fas fa-envelope mr-1"></i>E-mail
                            </button>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                            ${patientData.fase}
                        </span>
                        <p class="text-xs text-gray-500 mt-2">Início: ${patientData.dataInicio}</p>
                    </div>
                </div>
            </div>

            <!-- Tabs de Contatos -->
            <div class="bg-white rounded-xl shadow-lg">
                <div class="border-b border-gray-200">
                    <nav class="flex space-x-8 px-6" aria-label="Tabs">
                        <button onclick="showContactTab('rede-apoio')" class="contact-tab active py-4 px-1 border-b-2 border-blue-500 font-medium text-sm text-blue-600" data-tab="rede-apoio">
                            <i class="fas fa-users mr-2"></i>Rede de Apoio
                            <span class="ml-2 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">${patientData.redeApoio.length}</span>
                        </button>
                        <button onclick="showContactTab('equipe-medica')" class="contact-tab py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="equipe-medica">
                            <i class="fas fa-user-md mr-2"></i>Equipe Médica
                            <span class="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">${patientData.equipeMedica.length}</span>
                        </button>
                        <button onclick="showContactTab('outros-contatos')" class="contact-tab py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="outros-contatos">
                            <i class="fas fa-address-card mr-2"></i>Outros Contatos
                            <span class="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">${patientData.outrosContatos.length}</span>
                        </button>
                    </nav>
                </div>

                <!-- Tab Content -->
                <div class="p-6">
                    <!-- Rede de Apoio Tab -->
                    <div id="tab-rede-apoio" class="contact-tab-content">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            ${patientData.redeApoio.map(contato => `
                                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200 hover:shadow-lg transition-shadow">
                                    <div class="flex items-start gap-3">
                                        <img src="${contato.avatar}" alt="${contato.nome}" class="w-12 h-12 rounded-full">
                                        <div class="flex-1">
                                            <h4 class="font-semibold text-gray-800">${contato.nome}</h4>
                                            <p class="text-sm text-gray-600">${contato.relacao}</p>
                                            <span class="inline-block mt-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                                ${contato.tipo}
                                            </span>
                                        </div>
                                        ${contato.autorizadoInfo ? `
                                            <span class="text-green-500" title="Autorizado a receber informações">
                                                <i class="fas fa-check-circle"></i>
                                            </span>
                                        ` : ''}
                                    </div>
                                    <div class="mt-3 space-y-1 text-sm">
                                        <div class="flex items-center gap-2 text-gray-600">
                                            <i class="fas fa-phone text-green-500"></i>
                                            <span>${contato.telefone}</span>
                                        </div>
                                        <div class="flex items-center gap-2 text-gray-600">
                                            <i class="fas fa-envelope text-green-500"></i>
                                            <span class="truncate">${contato.email}</span>
                                        </div>
                                        <div class="flex items-center gap-2 text-gray-600">
                                            <i class="fas fa-clock text-green-500"></i>
                                            <span>${contato.disponibilidade}</span>
                                        </div>
                                    </div>
                                    <div class="flex gap-2 mt-3">
                                        <button onclick="iniciarChamada('${contato.telefone}')" class="flex-1 bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600">
                                            <i class="fas fa-phone mr-1"></i>Ligar
                                        </button>
                                        <button onclick="enviarWhatsApp('${contato.telefone}')" class="flex-1 bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700">
                                            <i class="fab fa-whatsapp mr-1"></i>WhatsApp
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Equipe Médica Tab -->
                    <div id="tab-equipe-medica" class="contact-tab-content hidden">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            ${patientData.equipeMedica.map(medico => `
                                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200 hover:shadow-lg transition-shadow">
                                    <div class="flex items-start gap-4">
                                        <img src="${medico.avatar}" alt="${medico.nome}" class="w-16 h-16 rounded-full border-2 border-white shadow">
                                        <div class="flex-1">
                                            <h4 class="font-bold text-gray-800">${medico.nome}</h4>
                                            <p class="text-sm text-gray-600">${medico.especialidade}</p>
                                            <p class="text-xs text-gray-500">${medico.crm}</p>
                                            ${medico.proximaConsulta ? `
                                                <div class="mt-2 p-2 bg-yellow-100 rounded-lg">
                                                    <p class="text-xs font-semibold text-yellow-800">
                                                        <i class="fas fa-calendar-alt mr-1"></i>
                                                        Próxima consulta: ${medico.proximaConsulta}
                                                    </p>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                    <div class="mt-4 space-y-2 text-sm">
                                        <div class="flex items-center gap-2 text-gray-600">
                                            <i class="fas fa-phone text-blue-500"></i>
                                            <span>${medico.telefone}</span>
                                        </div>
                                        <div class="flex items-center gap-2 text-gray-600">
                                            <i class="fas fa-envelope text-blue-500"></i>
                                            <span class="truncate">${medico.email}</span>
                                        </div>
                                        <div class="flex items-center gap-2 text-gray-600">
                                            <i class="fas fa-hospital text-blue-500"></i>
                                            <span>${medico.consultorio}</span>
                                        </div>
                                        <div class="flex items-center gap-2 text-gray-600">
                                            <i class="fas fa-user-tie text-blue-500"></i>
                                            <span>Secretária: ${medico.secretaria}</span>
                                        </div>
                                        <div class="flex items-center gap-2 text-gray-600">
                                            <i class="fas fa-clock text-blue-500"></i>
                                            <span>${medico.horarioAtendimento}</span>
                                        </div>
                                    </div>
                                    <div class="flex gap-2 mt-4">
                                        <button onclick="ligarConsultorio('${medico.telefone}')" class="flex-1 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                                            <i class="fas fa-phone mr-1"></i>Consultório
                                        </button>
                                        <button onclick="enviarEmailMedico('${medico.email}')" class="flex-1 bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-600">
                                            <i class="fas fa-envelope mr-1"></i>E-mail
                                        </button>
                                        <button onclick="agendarConsulta('${medico.nome}')" class="flex-1 bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                                            <i class="fas fa-calendar-plus mr-1"></i>Agendar
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Outros Contatos Tab -->
                    <div id="tab-outros-contatos" class="contact-tab-content hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            ${patientData.outrosContatos.map(contato => `
                                <div class="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                    <div class="text-center">
                                        <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <i class="fas fa-user-circle text-gray-600 text-xl"></i>
                                        </div>
                                        <h5 class="font-semibold text-gray-800">${contato.tipo}</h5>
                                        <p class="text-sm text-gray-600 mt-1">${contato.nome}</p>
                                        <div class="mt-3 space-y-1">
                                            <a href="tel:${contato.telefone}" class="block text-xs text-blue-600 hover:text-blue-700">
                                                <i class="fas fa-phone mr-1"></i>${contato.telefone}
                                            </a>
                                            <a href="mailto:${contato.email}" class="block text-xs text-blue-600 hover:text-blue-700">
                                                <i class="fas fa-envelope mr-1"></i>E-mail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Registro de Contatos Recentes -->
            <div class="mt-6 bg-gray-50 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">
                    <i class="fas fa-history mr-2 text-gray-600"></i>
                    Histórico de Contatos Recentes
                </h3>
                <div class="space-y-2">
                    <div class="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div class="flex items-center gap-3">
                            <i class="fas fa-phone-alt text-green-500"></i>
                            <div>
                                <p class="text-sm font-medium">Ligação para João Silva (Esposo)</p>
                                <p class="text-xs text-gray-500">Hoje, 14:30 - Duração: 5 min</p>
                            </div>
                        </div>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Concluído</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div class="flex items-center gap-3">
                            <i class="fab fa-whatsapp text-green-600"></i>
                            <div>
                                <p class="text-sm font-medium">WhatsApp para Dra. Patricia Lima</p>
                                <p class="text-xs text-gray-500">Ontem, 10:15 - Confirmação de consulta</p>
                            </div>
                        </div>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Enviado</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div class="flex items-center gap-3">
                            <i class="fas fa-envelope text-blue-500"></i>
                            <div>
                                <p class="text-sm font-medium">E-mail para Nutrição</p>
                                <p class="text-xs text-gray-500">15/01/2025 - Solicitação de dieta especial</p>
                            </div>
                        </div>
                        <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Respondido</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// VIEW 2: AGENDAR - Sistema de Agendamento
// ==========================================
function renderAgendarView(patientId) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    // Dados mock da agenda
    const agendaData = {
        setores: [
            { id: 'onco', nome: 'Oncologia', cor: 'blue' },
            { id: 'radio', nome: 'Radioterapia', cor: 'purple' },
            { id: 'quimio', nome: 'Quimioterapia', cor: 'green' },
            { id: 'cirurgia', nome: 'Cirurgia', cor: 'red' },
            { id: 'exames', nome: 'Exames', cor: 'yellow' },
            { id: 'apoio', nome: 'Apoio', cor: 'gray' }
        ],
        
        medicos: [
            { id: 'med1', nome: 'Dr. Carlos Mendes', especialidade: 'Oncologia', setor: 'onco' },
            { id: 'med2', nome: 'Dra. Patricia Lima', especialidade: 'Cirurgia Oncológica', setor: 'cirurgia' },
            { id: 'med3', nome: 'Dr. Fernando Costa', especialidade: 'Radioterapia', setor: 'radio' },
            { id: 'med4', nome: 'Dra. Marina Santos', especialidade: 'Quimioterapia', setor: 'quimio' }
        ],
        
        comites: [
            { id: 'com1', nome: 'Comitê Multidisciplinar', dia: 'Segunda', hora: '08:00' },
            { id: 'com2', nome: 'Comitê de Tumores', dia: 'Quarta', hora: '14:00' },
            { id: 'com3', nome: 'Comitê de Casos Complexos', dia: 'Sexta', hora: '10:00' }
        ],
        
        horariosDisponiveis: [
            { hora: '08:00', slots: ['med1', 'med3'] },
            { hora: '09:00', slots: ['med2', 'med4'] },
            { hora: '10:00', slots: ['med1'] },
            { hora: '11:00', slots: ['med3', 'med4'] },
            { hora: '14:00', slots: ['med1', 'med2'] },
            { hora: '15:00', slots: ['med3'] },
            { hora: '16:00', slots: ['med2', 'med4'] },
            { hora: '17:00', slots: ['med1'] }
        ],
        
        agendamentos: [
            {
                paciente: 'Maria Silva',
                medico: 'Dr. Carlos Mendes',
                data: '18/01/2025',
                hora: '10:00',
                tipo: 'Consulta',
                setor: 'Oncologia',
                status: 'confirmado'
            },
            {
                paciente: 'João Santos',
                medico: 'Dra. Patricia Lima',
                data: '18/01/2025',
                hora: '14:00',
                tipo: 'Retorno',
                setor: 'Cirurgia',
                status: 'aguardando'
            },
            {
                paciente: 'Ana Costa',
                medico: 'Dr. Fernando Costa',
                data: '19/01/2025',
                hora: '08:00',
                tipo: 'Radioterapia',
                setor: 'Radioterapia',
                status: 'confirmado'
            }
        ]
    };

    return `
        <div class="agendar-view p-6">
            <!-- Header -->
            <div class="mb-6 flex justify-between items-center">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800">
                        <i class="fas fa-calendar-alt mr-2 text-purple-600"></i>
                        Sistema de Agendamento
                    </h2>
                    <p class="text-gray-600 mt-1">${formattedDate}</p>
                </div>
                <div class="flex gap-2">
                    <button onclick="sincronizarAgenda()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        <i class="fas fa-sync mr-2"></i>Sincronizar
                    </button>
                    <button onclick="exportarAgenda()" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        <i class="fas fa-download mr-2"></i>Exportar
                    </button>
                    <button onclick="closeModal()" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        <i class="fas fa-times mr-2"></i>Fechar
                    </button>
                </div>
            </div>

            <!-- Filtros Rápidos -->
            <div class="bg-white rounded-xl shadow-lg p-4 mb-6">
                <div class="flex flex-wrap gap-3 items-center">
                    <div class="flex items-center gap-2">
                        <label class="text-sm font-medium text-gray-700">Setor:</label>
                        <select onchange="filtrarAgendaPorSetor(this.value)" class="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="">Todos</option>
                            ${agendaData.setores.map(s => `
                                <option value="${s.id}">${s.nome}</option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="text-sm font-medium text-gray-700">Médico:</label>
                        <select onchange="filtrarAgendaPorMedico(this.value)" class="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="">Todos</option>
                            ${agendaData.medicos.map(m => `
                                <option value="${m.id}">${m.nome}</option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="text-sm font-medium text-gray-700">Data:</label>
                        <input type="date" onchange="filtrarAgendaPorData(this.value)" class="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    </div>
                    <button onclick="limparFiltros()" class="ml-auto text-sm text-gray-600 hover:text-gray-800">
                        <i class="fas fa-times-circle mr-1"></i>Limpar filtros
                    </button>
                </div>
            </div>

            <!-- Grid Principal -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Coluna 1: Calendário e Horários -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Calendário Visual -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-calendar-week mr-2"></i>
                            Visão Semanal
                        </h3>
                        <div class="grid grid-cols-8 gap-2">
                            <!-- Header com horários -->
                            <div class="text-xs font-medium text-gray-500">Horário</div>
                            ${['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map(dia => `
                                <div class="text-center text-xs font-medium text-gray-700 p-2 bg-gray-50 rounded">${dia}</div>
                            `).join('')}
                            
                            <!-- Grid de horários -->
                            ${['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map(hora => `
                                <div class="contents">
                                    <div class="text-xs text-gray-600 py-3 font-medium">${hora}</div>
                                    ${[1,2,3,4,5,6,7].map(dia => `
                                        <div class="border border-gray-200 rounded p-1 min-h-[50px] hover:bg-purple-50 cursor-pointer" onclick="abrirModalAgendamento('${hora}', ${dia})">
                                            ${Math.random() > 0.6 ? `
                                                <div class="text-xs p-1 bg-${['blue', 'green', 'purple', 'red'][Math.floor(Math.random() * 4)]}-100 rounded">
                                                    <p class="font-medium truncate">Paciente ${Math.floor(Math.random() * 100)}</p>
                                                </div>
                                            ` : '<div class="text-xs text-gray-400 text-center">Livre</div>'}
                                        </div>
                                    `).join('')}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Agenda do Dia -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-clock mr-2"></i>
                            Agendamentos de Hoje
                        </h3>
                        <div class="space-y-3">
                            ${agendaData.agendamentos.map(ag => `
                                <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-shadow">
                                    <div class="flex items-center gap-4">
                                        <div class="text-center">
                                            <p class="text-2xl font-bold text-purple-600">${ag.hora.split(':')[0]}</p>
                                            <p class="text-xs text-gray-500">${ag.hora.split(':')[1]}</p>
                                        </div>
                                        <div>
                                            <p class="font-semibold text-gray-800">${ag.paciente}</p>
                                            <p class="text-sm text-gray-600">${ag.medico} - ${ag.setor}</p>
                                            <span class="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                                                ${ag.tipo}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        ${ag.status === 'confirmado' ? `
                                            <span class="text-green-500" title="Confirmado">
                                                <i class="fas fa-check-circle text-xl"></i>
                                            </span>
                                        ` : `
                                            <span class="text-yellow-500" title="Aguardando confirmação">
                                                <i class="fas fa-clock text-xl"></i>
                                            </span>
                                        `}
                                        <button onclick="editarAgendamento('${ag.paciente}')" class="text-blue-500 hover:text-blue-700">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button onclick="cancelarAgendamento('${ag.paciente}')" class="text-red-500 hover:text-red-700">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Coluna 2: Painel Lateral -->
                <div class="space-y-6">
                    <!-- Novo Agendamento Rápido -->
                    <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-plus-circle mr-2"></i>
                            Novo Agendamento
                        </h3>
                        <form onsubmit="criarAgendamento(event); return false;">
                            <div class="space-y-3">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Paciente</label>
                                    <input type="text" value="Maria Silva Santos" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                                    <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                        <option>Consulta</option>
                                        <option>Retorno</option>
                                        <option>Exame</option>
                                        <option>Procedimento</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Setor</label>
                                    <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                        ${agendaData.setores.map(s => `
                                            <option value="${s.id}">${s.nome}</option>
                                        `).join('')}
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Médico</label>
                                    <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                        ${agendaData.medicos.map(m => `
                                            <option value="${m.id}">${m.nome}</option>
                                        `).join('')}
                                    </select>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Data</label>
                                        <input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Hora</label>
                                        <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                            ${agendaData.horariosDisponiveis.map(h => `
                                                <option value="${h.hora}">${h.hora}</option>
                                            `).join('')}
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                                    <i class="fas fa-calendar-plus mr-2"></i>
                                    Agendar
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- Comitês -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-users mr-2"></i>
                            Comitês Multidisciplinares
                        </h3>
                        <div class="space-y-3">
                            ${agendaData.comites.map(comite => `
                                <div class="p-3 bg-gray-50 rounded-lg">
                                    <p class="font-medium text-gray-800">${comite.nome}</p>
                                    <div class="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                        <span><i class="fas fa-calendar mr-1"></i>${comite.dia}</span>
                                        <span><i class="fas fa-clock mr-1"></i>${comite.hora}</span>
                                    </div>
                                    <button onclick="agendarComite('${comite.id}')" class="mt-2 text-xs text-purple-600 hover:text-purple-700">
                                        <i class="fas fa-plus-circle mr-1"></i>Incluir paciente
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Estatísticas -->
                    <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-chart-bar mr-2"></i>
                            Estatísticas do Dia
                        </h3>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-600">Total Agendados</span>
                                <span class="font-bold text-gray-800">42</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-600">Confirmados</span>
                                <span class="font-bold text-green-600">38</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-600">Aguardando</span>
                                <span class="font-bold text-yellow-600">4</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-600">Horários Livres</span>
                                <span class="font-bold text-blue-600">12</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2 mt-3">
                                <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style="width: 78%"></div>
                            </div>
                            <p class="text-xs text-center text-gray-500">78% de ocupação</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Funções auxiliares para as views
function showContactTab(tabName) {
    // Esconder todas as tabs
    document.querySelectorAll('.contact-tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remover classe active de todos os botões
    document.querySelectorAll('.contact-tab').forEach(btn => {
        btn.classList.remove('active', 'border-blue-500', 'text-blue-600');
        btn.classList.add('border-transparent', 'text-gray-500');
    });
    
    // Mostrar tab selecionada
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    
    // Adicionar classe active ao botão selecionado
    const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
    activeBtn.classList.add('active', 'border-blue-500', 'text-blue-600');
    activeBtn.classList.remove('border-transparent', 'text-gray-500');
}

function iniciarChamada(telefone) {
    console.log('Iniciando chamada para:', telefone);
    alert(`Iniciando chamada para ${telefone}`);
}

function enviarWhatsApp(telefone) {
    const numero = telefone.replace(/\D/g, '');
    window.open(`https://wa.me/55${numero}`, '_blank');
}

function enviarEmail(email) {
    window.location.href = `mailto:${email}`;
}

function exportarContatos(patientId) {
    console.log('Exportando contatos do paciente:', patientId);
    alert('Contatos exportados com sucesso!');
}

function imprimirContatos(patientId) {
    window.print();
}

function ligarConsultorio(telefone) {
    console.log('Ligando para consultório:', telefone);
    alert(`Ligando para consultório: ${telefone}`);
}

function enviarEmailMedico(email) {
    window.location.href = `mailto:${email}?subject=Consulta%20Médica`;
}

function agendarConsulta(medico) {
    console.log('Abrindo agendamento para:', medico);
    // Abrir view de agendamento com médico pré-selecionado
    renderAgendarView();
}

function filtrarAgendaPorSetor(setor) {
    console.log('Filtrando por setor:', setor);
}

function filtrarAgendaPorMedico(medico) {
    console.log('Filtrando por médico:', medico);
}

function filtrarAgendaPorData(data) {
    console.log('Filtrando por data:', data);
}

function limparFiltros() {
    console.log('Limpando filtros');
    // Resetar todos os selects e inputs
}

function sincronizarAgenda() {
    console.log('Sincronizando agenda...');
    alert('Agenda sincronizada com sucesso!');
}

function exportarAgenda() {
    console.log('Exportando agenda...');
    alert('Agenda exportada com sucesso!');
}

function abrirModalAgendamento(hora, dia) {
    console.log('Abrindo modal de agendamento:', hora, dia);
}

function criarAgendamento(event) {
    event.preventDefault();
    console.log('Criando novo agendamento');
    alert('Agendamento criado com sucesso!');
}

function editarAgendamento(paciente) {
    console.log('Editando agendamento:', paciente);
}

function cancelarAgendamento(paciente) {
    if (confirm(`Deseja cancelar o agendamento de ${paciente}?`)) {
        console.log('Cancelando agendamento:', paciente);
        alert('Agendamento cancelado!');
    }
}

function agendarComite(comiteId) {
    console.log('Agendando paciente no comitê:', comiteId);
}

// Função para fechar modais
function closeModal() {
    const modal = document.getElementById('navigator-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Exportar funções para uso global
window.renderContatarView = renderContatarView;
window.renderAgendarView = renderAgendarView;
window.showContactTab = showContactTab;
window.iniciarChamada = iniciarChamada;
window.enviarWhatsApp = enviarWhatsApp;
window.enviarEmail = enviarEmail;
window.exportarContatos = exportarContatos;
window.imprimirContatos = imprimirContatos;
window.ligarConsultorio = ligarConsultorio;
window.enviarEmailMedico = enviarEmailMedico;
window.agendarConsulta = agendarConsulta;
window.filtrarAgendaPorSetor = filtrarAgendaPorSetor;
window.filtrarAgendaPorMedico = filtrarAgendaPorMedico;
window.filtrarAgendaPorData = filtrarAgendaPorData;
window.limparFiltros = limparFiltros;
window.sincronizarAgenda = sincronizarAgenda;
window.exportarAgenda = exportarAgenda;
window.abrirModalAgendamento = abrirModalAgendamento;
window.criarAgendamento = criarAgendamento;
window.editarAgendamento = editarAgendamento;
window.cancelarAgendamento = cancelarAgendamento;
window.agendarComite = agendarComite;
window.closeModal = closeModal;