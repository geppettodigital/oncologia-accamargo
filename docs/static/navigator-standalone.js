// ==========================================
// SISTEMA STANDALONE DO PORTAL DO NAVEGADOR
// ==========================================

// Garantir que as funções estejam no escopo global
window.openPatientView = function(patientId) {
    console.log('openPatientView chamada para:', patientId);
    
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
    
    // Dados dos pacientes
    const patients = {
        'PAC-001': {
            nome: 'Maria Silva Santos',
            idade: 52,
            diagnostico: 'Carcinoma Ductal Invasivo - Mama',
            estadiamento: 'IIA (T2N0M0)',
            navegador: 'Enf. Patricia Lima',
            medico: 'Dr. Roberto Almeida',
            telefone: '(11) 98765-4321',
            email: 'maria.silva@email.com',
            convenio: 'Unimed Premium'
        },
        'PAC-002': {
            nome: 'Ana Costa',
            idade: 45,
            diagnostico: 'Carcinoma Pulmonar',
            estadiamento: 'IIIA',
            navegador: 'Enf. Patricia Lima',
            medico: 'Dr. Carlos Mendes',
            telefone: '(11) 98765-1234',
            email: 'ana.costa@email.com',
            convenio: 'SulAmérica'
        },
        'PAC-003': {
            nome: 'Carlos Mendes',
            idade: 67,
            diagnostico: 'Adenocarcinoma Colorretal',
            estadiamento: 'IIB',
            navegador: 'Enf. Patricia Lima',
            medico: 'Dra. Fernanda Santos',
            telefone: '(11) 98765-5678',
            email: 'carlos.mendes@email.com',
            convenio: 'Bradesco Saúde'
        },
        'PAC-004': {
            nome: 'João Santos',
            idade: 72,
            diagnostico: 'Carcinoma Prostático',
            estadiamento: 'I',
            navegador: 'Enf. Patricia Lima',
            medico: 'Dr. Paulo Ribeiro',
            telefone: '(11) 98765-9876',
            email: 'joao.santos@email.com',
            convenio: 'Amil'
        },
        'PAC-005': {
            nome: 'Pedro Oliveira',
            idade: 58,
            diagnostico: 'Linfoma Não-Hodgkin',
            estadiamento: 'IIIB',
            navegador: 'Enf. Patricia Lima',
            medico: 'Dr. André Costa',
            telefone: '(11) 98765-4567',
            email: 'pedro.oliveira@email.com',
            convenio: 'Porto Seguro'
        },
        'PAC-006': {
            nome: 'Lucia Ferreira',
            idade: 61,
            diagnostico: 'Carcinoma de Ovário',
            estadiamento: 'IC',
            navegador: 'Enf. Patricia Lima',
            medico: 'Dra. Paula Lima',
            telefone: '(11) 98765-7890',
            email: 'lucia.ferreira@email.com',
            convenio: 'NotreDame'
        }
    };
    
    const patient = patients[patientId] || patients['PAC-001'];
    
    // HTML da View Universal
    modal.innerHTML = `
        <div class="flex items-center justify-center min-h-screen p-4">
            <div class="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
                <!-- Header -->
                <div class="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6">
                    <div class="flex justify-between items-start">
                        <div>
                            <h2 class="text-2xl font-bold mb-2">
                                <i class="fas fa-user-injured mr-2"></i>
                                ${patient.nome}
                            </h2>
                            <div class="flex gap-4 text-sm">
                                <span><i class="fas fa-id-card mr-1"></i> ${patientId}</span>
                                <span><i class="fas fa-birthday-cake mr-1"></i> ${patient.idade} anos</span>
                                <span><i class="fas fa-phone mr-1"></i> ${patient.telefone}</span>
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
                        <button onclick="showPatientTab('overview')" class="tab-btn active px-6 py-3 border-b-2 border-teal-600 text-teal-600 font-medium">
                            <i class="fas fa-chart-line mr-2"></i>Visão Geral
                        </button>
                        <button onclick="showPatientTab('contact')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600">
                            <i class="fas fa-address-book mr-2"></i>Contatar
                        </button>
                        <button onclick="showPatientTab('schedule')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600">
                            <i class="fas fa-calendar-alt mr-2"></i>Agendar
                        </button>
                        <button onclick="showPatientTab('journey')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600">
                            <i class="fas fa-route mr-2"></i>Jornada
                        </button>
                        <button onclick="showPatientTab('checklist')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600">
                            <i class="fas fa-tasks mr-2"></i>Checklist
                        </button>
                        <button onclick="showPatientTab('ai')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600">
                            <i class="fas fa-brain mr-2"></i>IA Laura
                        </button>
                    </nav>
                </div>
                
                <!-- Content -->
                <div class="overflow-y-auto" style="max-height: calc(90vh - 200px);">
                    <!-- Tab: Visão Geral -->
                    <div id="tab-overview" class="tab-content p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-blue-50 rounded-lg p-4">
                                <h3 class="font-bold text-blue-900 mb-3">
                                    <i class="fas fa-notes-medical mr-2"></i>Dados Clínicos
                                </h3>
                                <div class="space-y-2 text-sm">
                                    <p><strong>Diagnóstico:</strong> ${patient.diagnostico}</p>
                                    <p><strong>Estadiamento:</strong> ${patient.estadiamento}</p>
                                    <p><strong>Convênio:</strong> ${patient.convenio}</p>
                                </div>
                            </div>
                            <div class="bg-green-50 rounded-lg p-4">
                                <h3 class="font-bold text-green-900 mb-3">
                                    <i class="fas fa-user-md mr-2"></i>Equipe Médica
                                </h3>
                                <div class="space-y-2 text-sm">
                                    <p><strong>Oncologista:</strong> ${patient.medico}</p>
                                    <p><strong>Navegador:</strong> ${patient.navegador}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Tab: Contatar -->
                    <div id="tab-contact" class="tab-content hidden p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-white border rounded-lg p-4">
                                <h3 class="font-bold text-gray-800 mb-4">Contatos do Paciente</h3>
                                <div class="space-y-3">
                                    <button class="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                                        <i class="fas fa-phone mr-2"></i>${patient.telefone}
                                    </button>
                                    <button class="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
                                        <i class="fas fa-envelope mr-2"></i>${patient.email}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Tab: Agendar -->
                    <div id="tab-schedule" class="tab-content hidden p-6">
                        <h3 class="font-bold text-gray-800 mb-4">
                            <i class="fas fa-calendar-plus mr-2"></i>Agendar Consulta
                        </h3>
                        <div class="mb-4">
                            <select class="w-full border rounded-lg px-3 py-2">
                                <option>Consulta Médica</option>
                                <option>Exame de Imagem</option>
                                <option>Quimioterapia</option>
                            </select>
                        </div>
                        <button class="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">
                            <i class="fas fa-check mr-2"></i>Confirmar Agendamento
                        </button>
                    </div>
                    
                    <!-- Tab: Jornada -->
                    <div id="tab-journey" class="tab-content hidden p-6">
                        <h3 class="font-bold text-gray-800 mb-4">
                            <i class="fas fa-route mr-2"></i>Jornada do Paciente
                        </h3>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div class="bg-green-500 text-white rounded-full p-2">
                                    <i class="fas fa-check text-xs"></i>
                                </div>
                                <div class="ml-4 bg-green-50 rounded-lg p-4 flex-1">
                                    <h4 class="font-semibold">Diagnóstico Confirmado</h4>
                                    <p class="text-sm text-gray-600">10/01/2025</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-yellow-500 text-white rounded-full p-2 animate-pulse">
                                    <i class="fas fa-clock text-xs"></i>
                                </div>
                                <div class="ml-4 bg-yellow-50 rounded-lg p-4 flex-1">
                                    <h4 class="font-semibold">Em Tratamento</h4>
                                    <p class="text-sm text-gray-600">Ciclo 3 de 6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Tab: Checklist -->
                    <div id="tab-checklist" class="tab-content hidden p-6">
                        <h3 class="font-bold text-gray-800 mb-4">
                            <i class="fas fa-tasks mr-2"></i>Checklist
                        </h3>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input type="checkbox" checked class="mr-2">
                                <span>Termo de Consentimento</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" checked class="mr-2">
                                <span>Exames em dia</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="mr-2">
                                <span>Autorização do convênio</span>
                            </label>
                        </div>
                    </div>
                    
                    <!-- Tab: IA -->
                    <div id="tab-ai" class="tab-content hidden p-6">
                        <h3 class="font-bold text-gray-800 mb-4">
                            <i class="fas fa-brain mr-2"></i>Análise IA Laura
                        </h3>
                        <div class="bg-purple-50 rounded-lg p-4">
                            <div class="text-center">
                                <div class="text-4xl font-bold text-purple-700">72</div>
                                <div class="text-sm text-purple-600">Score de Ansiedade</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Adicionar evento para fechar ao clicar fora
    modal.onclick = function(e) {
        if (e.target === modal) {
            closePatientView();
        }
    };
}

// Função para fechar view
window.closePatientView = function() {
    const modal = document.getElementById('patient-view-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Função para mostrar tab
window.showPatientTab = function(tabName) {
    // Esconder todas as tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remover active de todos os botões
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('border-teal-600', 'text-teal-600', 'active');
        btn.classList.add('border-transparent', 'text-gray-600');
    });
    
    // Mostrar tab selecionada
    const selectedTab = document.getElementById('tab-' + tabName);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }
    
    // Ativar botão correspondente
    if (event && event.target) {
        event.target.classList.add('border-teal-600', 'text-teal-600', 'active');
        event.target.classList.remove('border-transparent', 'text-gray-600');
    }
}

// Auto-inicializar quando o script carregar
console.log('Navigator Standalone carregado e pronto!');

// Exportar para o window global
window.navigatorStandalone = {
    openPatientView: window.openPatientView,
    closePatientView: window.closePatientView,
    showPatientTab: window.showPatientTab
};