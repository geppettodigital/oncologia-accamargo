// Navigator Portal - Views Estendidas
// Views: Jornada (Wiki Inteligente) e Checklist (Double-Check)

// ==========================================
// VIEW 3: JORNADA - Wiki Inteligente da Jornada Oncológica
// ==========================================
function renderJornadaView(patientId) {
    // Estrutura completa da jornada oncológica
    const jornadaData = {
        fases: [
            {
                id: 'prevencao',
                nome: 'Prevenção',
                status: 'completed',
                pontos: [
                    { nome: 'Rastreamento', status: 'done', alertas: [] },
                    { nome: 'Fatores de Risco', status: 'done', alertas: [] },
                    { nome: 'Educação em Saúde', status: 'done', alertas: [] }
                ]
            },
            {
                id: 'diagnostico',
                nome: 'Diagnóstico',
                status: 'completed',
                pontos: [
                    { nome: 'Sintomas Iniciais', status: 'done', alertas: [] },
                    { nome: 'Exames de Imagem', status: 'done', alertas: [] },
                    { nome: 'Biópsia', status: 'done', alertas: [] },
                    { nome: 'Estadiamento', status: 'done', alertas: ['Aguardando PET-CT'] },
                    { nome: 'Comitê Multidisciplinar', status: 'done', alertas: [] }
                ]
            },
            {
                id: 'tratamento',
                nome: 'Tratamento',
                status: 'active',
                pontos: [
                    { nome: 'Cirurgia', status: 'done', alertas: [] },
                    { nome: 'Quimioterapia', status: 'in-progress', alertas: ['3º ciclo em andamento'] },
                    { nome: 'Radioterapia', status: 'pending', alertas: ['Iniciar após quimio'] },
                    { nome: 'Hormonioterapia', status: 'pending', alertas: [] },
                    { nome: 'Imunoterapia', status: 'not-applicable', alertas: [] }
                ]
            },
            {
                id: 'acompanhamento',
                nome: 'Acompanhamento',
                status: 'pending',
                pontos: [
                    { nome: 'Consultas de Retorno', status: 'pending', alertas: [] },
                    { nome: 'Exames de Controle', status: 'pending', alertas: [] },
                    { nome: 'Reabilitação', status: 'pending', alertas: [] },
                    { nome: 'Suporte Psicológico', status: 'in-progress', alertas: [] }
                ]
            },
            {
                id: 'cuidados-paliativos',
                nome: 'Cuidados Continuados',
                status: 'optional',
                pontos: [
                    { nome: 'Controle de Sintomas', status: 'not-applicable', alertas: [] },
                    { nome: 'Qualidade de Vida', status: 'not-applicable', alertas: [] },
                    { nome: 'Suporte Familiar', status: 'not-applicable', alertas: [] }
                ]
            }
        ],
        
        protocolos: {
            'CA Mama': {
                estadio_II: [
                    'Cirurgia conservadora ou mastectomia',
                    'Quimioterapia adjuvante (4-6 ciclos)',
                    'Radioterapia (se conservadora)',
                    'Hormonioterapia (se receptor positivo)',
                    'Acompanhamento trimestral no 1º ano'
                ]
            },
            'CA Pulmão': {
                estadio_III: [
                    'Quimioterapia neoadjuvante',
                    'Cirurgia (se ressecável)',
                    'Radioterapia concomitante',
                    'Imunoterapia de manutenção',
                    'Acompanhamento mensal'
                ]
            }
        },
        
        orientacoes: [
            {
                fase: 'Diagnóstico',
                titulo: 'Importância do Estadiamento Completo',
                conteudo: 'O estadiamento preciso é fundamental para definir o melhor tratamento...',
                prioridade: 'alta'
            },
            {
                fase: 'Tratamento',
                titulo: 'Adesão ao Protocolo',
                conteudo: 'Seguir o protocolo estabelecido aumenta significativamente as chances de sucesso...',
                prioridade: 'alta'
            },
            {
                fase: 'Acompanhamento',
                titulo: 'Vigilância Ativa',
                conteudo: 'Exames regulares permitem detecção precoce de recidivas...',
                prioridade: 'media'
            }
        ]
    };

    return `
        <div class="jornada-view p-6">
            <!-- Header -->
            <div class="mb-6 flex justify-between items-center">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800">
                        <i class="fas fa-route mr-2 text-green-600"></i>
                        Jornada Oncológica - Wiki Inteligente
                    </h2>
                    <p class="text-gray-600 mt-1">Mapa completo da jornada com orientações e pontos de atenção</p>
                </div>
                <div class="flex gap-2">
                    <div class="relative">
                        <input type="text" 
                               placeholder="Pesquisar na jornada..." 
                               onkeyup="pesquisarJornada(this.value)"
                               class="px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <i class="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                    </div>
                    <button onclick="solicitarOrientacao()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        <i class="fas fa-question-circle mr-2"></i>Orientação
                    </button>
                    <button onclick="exportarJornada()" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        <i class="fas fa-download mr-2"></i>Exportar
                    </button>
                    <button onclick="closeModal()" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        <i class="fas fa-times mr-2"></i>Fechar
                    </button>
                </div>
            </div>

            <!-- Linha do Tempo Visual -->
            <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">
                    <i class="fas fa-timeline mr-2"></i>
                    Linha do Tempo da Jornada
                </h3>
                <div class="relative">
                    <!-- Linha de conexão -->
                    <div class="absolute top-8 left-0 right-0 h-1 bg-gray-200"></div>
                    <div class="absolute top-8 left-0 h-1 bg-green-500" style="width: 45%"></div>
                    
                    <!-- Fases -->
                    <div class="relative flex justify-between">
                        ${jornadaData.fases.map((fase, index) => `
                            <div class="flex flex-col items-center cursor-pointer hover:transform hover:scale-110 transition-transform"
                                 onclick="expandirFase('${fase.id}')">
                                <div class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold
                                    ${fase.status === 'completed' ? 'bg-green-500' : 
                                      fase.status === 'active' ? 'bg-blue-500 animate-pulse' : 
                                      fase.status === 'optional' ? 'bg-gray-400' : 'bg-gray-300'}">
                                    ${fase.status === 'completed' ? '<i class="fas fa-check"></i>' :
                                      fase.status === 'active' ? `${index + 1}` :
                                      fase.status === 'optional' ? '<i class="fas fa-ellipsis-h"></i>' : `${index + 1}`}
                                </div>
                                <p class="mt-2 text-xs font-medium text-center ${fase.status === 'active' ? 'text-blue-600' : 'text-gray-600'}">
                                    ${fase.nome}
                                </p>
                                ${fase.pontos.filter(p => p.alertas.length > 0).length > 0 ? `
                                    <span class="mt-1 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Grid Principal -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Coluna 1: Detalhes da Fase Atual -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Fase Atual Expandida -->
                    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-tasks mr-2"></i>
                            Fase Atual: Tratamento
                        </h3>
                        
                        <!-- Pontos da Fase -->
                        <div class="space-y-3">
                            ${jornadaData.fases.find(f => f.status === 'active').pontos.map(ponto => `
                                <div class="flex items-start gap-3 p-3 bg-white rounded-lg ${ponto.status === 'in-progress' ? 'border-l-4 border-blue-500' : ''}">
                                    <div class="mt-1">
                                        ${ponto.status === 'done' ? 
                                            '<i class="fas fa-check-circle text-green-500 text-lg"></i>' :
                                          ponto.status === 'in-progress' ? 
                                            '<i class="fas fa-spinner fa-spin text-blue-500 text-lg"></i>' :
                                          ponto.status === 'not-applicable' ?
                                            '<i class="fas fa-times-circle text-gray-400 text-lg"></i>' :
                                            '<i class="far fa-circle text-gray-400 text-lg"></i>'}
                                    </div>
                                    <div class="flex-1">
                                        <p class="font-medium text-gray-800">${ponto.nome}</p>
                                        ${ponto.alertas.length > 0 ? `
                                            <div class="mt-2">
                                                ${ponto.alertas.map(alerta => `
                                                    <span class="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                                                        <i class="fas fa-exclamation-triangle"></i>
                                                        ${alerta}
                                                    </span>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                    <button onclick="verDetalhes('${ponto.nome}')" class="text-blue-500 hover:text-blue-700">
                                        <i class="fas fa-info-circle"></i>
                                    </button>
                                </div>
                            `).join('')}
                        </div>

                        <!-- Progresso da Fase -->
                        <div class="mt-4 p-3 bg-white rounded-lg">
                            <div class="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Progresso da Fase</span>
                                <span class="font-medium">40%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style="width: 40%"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Wiki de Protocolos -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-book-medical mr-2"></i>
                            Protocolo Recomendado: CA Mama - Estadio II
                        </h3>
                        <ol class="space-y-2">
                            ${jornadaData.protocolos['CA Mama'].estadio_II.map((item, index) => `
                                <li class="flex items-start gap-3">
                                    <span class="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                                        ${index + 1}
                                    </span>
                                    <span class="text-gray-700">${item}</span>
                                </li>
                            `).join('')}
                        </ol>
                        <div class="mt-4 p-3 bg-blue-50 rounded-lg">
                            <p class="text-sm text-blue-800">
                                <i class="fas fa-info-circle mr-2"></i>
                                Este protocolo segue as diretrizes da NCCN e SBM atualizadas em 2024
                            </p>
                        </div>
                    </div>

                    <!-- Orientações Importantes -->
                    <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-lightbulb mr-2"></i>
                            Orientações e Pontos de Atenção
                        </h3>
                        <div class="space-y-3">
                            ${jornadaData.orientacoes.map(orientacao => `
                                <div class="p-4 bg-white rounded-lg border-l-4 
                                    ${orientacao.prioridade === 'alta' ? 'border-red-500' : 
                                      orientacao.prioridade === 'media' ? 'border-yellow-500' : 'border-green-500'}">
                                    <div class="flex items-start justify-between">
                                        <div>
                                            <h4 class="font-semibold text-gray-800">${orientacao.titulo}</h4>
                                            <p class="text-sm text-gray-600 mt-1">${orientacao.conteudo}</p>
                                            <span class="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                                ${orientacao.fase}
                                            </span>
                                        </div>
                                        <button onclick="expandirOrientacao('${orientacao.titulo}')" class="text-blue-500 hover:text-blue-700">
                                            <i class="fas fa-expand"></i>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Coluna 2: Painel Lateral -->
                <div class="space-y-6">
                    <!-- Assistente de Orientação -->
                    <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-robot mr-2"></i>
                            Assistente de Orientação
                        </h3>
                        <div class="space-y-3">
                            <input type="text" 
                                   placeholder="Digite sua dúvida..." 
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <button onclick="perguntarAssistente()" class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                                <i class="fas fa-paper-plane mr-2"></i>
                                Enviar Pergunta
                            </button>
                        </div>
                        <div class="mt-4 space-y-2">
                            <p class="text-xs font-medium text-gray-600">Perguntas frequentes:</p>
                            <button onclick="perguntaRapida('efeitos')" class="w-full text-left text-xs p-2 bg-white rounded hover:bg-gray-50">
                                • Quais os efeitos colaterais esperados?
                            </button>
                            <button onclick="perguntaRapida('duracao')" class="w-full text-left text-xs p-2 bg-white rounded hover:bg-gray-50">
                                • Quanto tempo dura o tratamento?
                            </button>
                            <button onclick="perguntaRapida('cuidados')" class="w-full text-left text-xs p-2 bg-white rounded hover:bg-gray-50">
                                • Quais cuidados devo ter em casa?
                            </button>
                        </div>
                    </div>

                    <!-- Marcos Importantes -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-flag mr-2"></i>
                            Próximos Marcos
                        </h3>
                        <div class="space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i class="fas fa-vial text-blue-600"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-800">Fim da Quimioterapia</p>
                                    <p class="text-xs text-gray-500">Previsto: 15/02/2025</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <i class="fas fa-radiation text-purple-600"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-800">Início Radioterapia</p>
                                    <p class="text-xs text-gray-500">Previsto: 20/02/2025</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <i class="fas fa-stethoscope text-green-600"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-800">Reavaliação Completa</p>
                                    <p class="text-xs text-gray-500">Previsto: 15/03/2025</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Recursos Educacionais -->
                    <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-graduation-cap mr-2"></i>
                            Recursos Educacionais
                        </h3>
                        <div class="space-y-2">
                            <a href="#" class="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                                <i class="fas fa-file-pdf"></i>
                                Guia do Paciente - Quimioterapia
                            </a>
                            <a href="#" class="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                                <i class="fas fa-video"></i>
                                Vídeo: Cuidados Durante o Tratamento
                            </a>
                            <a href="#" class="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                                <i class="fas fa-book"></i>
                                Manual de Nutrição Oncológica
                            </a>
                            <a href="#" class="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                                <i class="fas fa-link"></i>
                                Links Úteis e Grupos de Apoio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// VIEW 4: CHECKLIST - Double-Check de Elementos Auditáveis
// ==========================================
function renderChecklistView(patientId) {
    // Dados de checklist por paciente e atendimento
    const checklistData = {
        pacientes: [
            {
                id: 'PAC-001',
                nome: 'Maria Silva Santos',
                atendimentos: [
                    {
                        id: 'AT-001',
                        tipo: 'Consulta Oncologia',
                        data: '18/01/2025',
                        medico: 'Dr. Carlos Mendes',
                        status: 'completo',
                        completude: 100,
                        itens: {
                            documentacao: [
                                { item: 'Termo de Consentimento', check1: true, check2: true, obs: '' },
                                { item: 'Prontuário Atualizado', check1: true, check2: true, obs: '' },
                                { item: 'Prescrição Médica', check1: true, check2: true, obs: '' },
                                { item: 'Evolução Clínica', check1: true, check2: true, obs: '' }
                            ],
                            procedimentos: [
                                { item: 'Anamnese Completa', check1: true, check2: true, obs: '' },
                                { item: 'Exame Físico', check1: true, check2: true, obs: '' },
                                { item: 'Revisão de Exames', check1: true, check2: true, obs: '' },
                                { item: 'Plano Terapêutico', check1: true, check2: true, obs: '' }
                            ],
                            compliance: [
                                { item: 'CID Correto', check1: true, check2: true, obs: '' },
                                { item: 'Código TUSS', check1: true, check2: true, obs: '' },
                                { item: 'Autorização Convênio', check1: true, check2: true, obs: '' },
                                { item: 'Glosa Preventiva', check1: true, check2: true, obs: '' }
                            ]
                        }
                    },
                    {
                        id: 'AT-002',
                        tipo: 'Quimioterapia - Ciclo 3',
                        data: '17/01/2025',
                        medico: 'Dra. Marina Santos',
                        status: 'pendente',
                        completude: 75,
                        itens: {
                            documentacao: [
                                { item: 'Protocolo QT Assinado', check1: true, check2: true, obs: '' },
                                { item: 'Exames Pré-QT', check1: true, check2: false, obs: 'Aguardando hemograma' },
                                { item: 'Prescrição QT', check1: true, check2: true, obs: '' },
                                { item: 'Ficha de Infusão', check1: true, check2: true, obs: '' }
                            ],
                            procedimentos: [
                                { item: 'Avaliação Pré-Infusão', check1: true, check2: true, obs: '' },
                                { item: 'Acesso Venoso', check1: true, check2: true, obs: '' },
                                { item: 'Administração Medicamentos', check1: true, check2: false, obs: 'Em andamento' },
                                { item: 'Monitoramento Reações', check1: true, check2: false, obs: 'Em andamento' }
                            ],
                            compliance: [
                                { item: 'APAC Atualizada', check1: true, check2: true, obs: '' },
                                { item: 'Código Oncológico', check1: true, check2: true, obs: '' },
                                { item: 'Rastreabilidade Medicamentos', check1: true, check2: true, obs: '' },
                                { item: 'Nota Fiscal', check1: false, check2: false, obs: 'Pendente farmácia' }
                            ]
                        }
                    }
                ]
            },
            {
                id: 'PAC-002',
                nome: 'João Pedro Silva',
                atendimentos: [
                    {
                        id: 'AT-003',
                        tipo: 'Radioterapia - Sessão 10',
                        data: '18/01/2025',
                        medico: 'Dr. Fernando Costa',
                        status: 'incompleto',
                        completude: 60,
                        itens: {
                            documentacao: [
                                { item: 'Planejamento RT', check1: true, check2: true, obs: '' },
                                { item: 'Dosimetria', check1: true, check2: false, obs: 'Revisar cálculo' },
                                { item: 'Registro de Dose', check1: true, check2: false, obs: '' },
                                { item: 'Evolução RT', check1: false, check2: false, obs: 'Pendente' }
                            ],
                            procedimentos: [
                                { item: 'Posicionamento', check1: true, check2: true, obs: '' },
                                { item: 'Verificação Portal', check1: true, check2: false, obs: '' },
                                { item: 'Aplicação RT', check1: true, check2: false, obs: '' },
                                { item: 'Avaliação Pós', check1: false, check2: false, obs: '' }
                            ],
                            compliance: [
                                { item: 'Código SUS RT', check1: true, check2: true, obs: '' },
                                { item: 'Física Médica', check1: true, check2: false, obs: '' },
                                { item: 'QA Equipamento', check1: true, check2: true, obs: '' },
                                { item: 'Registro CNEN', check1: false, check2: false, obs: 'Atualizar' }
                            ]
                        }
                    }
                ]
            }
        ]
    };

    const selectedPatient = checklistData.pacientes[0]; // Paciente selecionado

    return `
        <div class="checklist-view p-6">
            <!-- Header -->
            <div class="mb-6 flex justify-between items-center">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800">
                        <i class="fas fa-clipboard-check mr-2 text-indigo-600"></i>
                        Checklist de Auditoria - Double-Check
                    </h2>
                    <p class="text-gray-600 mt-1">Sistema de verificação dupla para elementos auditáveis</p>
                </div>
                <div class="flex gap-2">
                    <button onclick="filtrarPendentes()" class="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                        <i class="fas fa-exclamation-triangle mr-2"></i>Pendentes
                    </button>
                    <button onclick="gerarRelatorio()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        <i class="fas fa-file-alt mr-2"></i>Relatório
                    </button>
                    <button onclick="exportarChecklist()" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        <i class="fas fa-download mr-2"></i>Exportar
                    </button>
                    <button onclick="closeModal()" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        <i class="fas fa-times mr-2"></i>Fechar
                    </button>
                </div>
            </div>

            <!-- Grid Principal -->
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <!-- Coluna 1: Lista de Pacientes -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-xl shadow-lg p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">
                            <i class="fas fa-users mr-2"></i>
                            Pacientes
                        </h3>
                        <div class="space-y-2">
                            ${checklistData.pacientes.map(paciente => {
                                const pendentes = paciente.atendimentos.filter(a => a.status !== 'completo').length;
                                return `
                                    <button onclick="selecionarPaciente('${paciente.id}')" 
                                            class="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors
                                                   ${paciente.id === selectedPatient.id ? 'bg-indigo-50 border-2 border-indigo-500' : 'bg-white border border-gray-200'}">
                                        <p class="font-medium text-gray-800">${paciente.nome}</p>
                                        <div class="flex items-center justify-between mt-1">
                                            <span class="text-xs text-gray-500">${paciente.atendimentos.length} atendimentos</span>
                                            ${pendentes > 0 ? `
                                                <span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                                                    ${pendentes} pendente${pendentes > 1 ? 's' : ''}
                                                </span>
                                            ` : `
                                                <span class="text-green-500">
                                                    <i class="fas fa-check-circle"></i>
                                                </span>
                                            `}
                                        </div>
                                    </button>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <!-- Estatísticas Rápidas -->
                    <div class="mt-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-4">
                        <h4 class="text-sm font-semibold text-gray-800 mb-3">Estatísticas</h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Total Checados</span>
                                <span class="font-bold text-green-600">127</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Pendentes</span>
                                <span class="font-bold text-yellow-600">23</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Não Conformidades</span>
                                <span class="font-bold text-red-600">5</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Taxa Conformidade</span>
                                <span class="font-bold text-blue-600">96%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Coluna 2: Checklists do Paciente -->
                <div class="lg:col-span-3">
                    <!-- Informações do Paciente Selecionado -->
                    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-lg p-6 mb-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">${selectedPatient.nome}</h3>
                                <p class="text-gray-600">ID: ${selectedPatient.id}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-sm text-gray-600">Completude Geral</p>
                                <p class="text-2xl font-bold text-indigo-600">
                                    ${Math.round(selectedPatient.atendimentos.reduce((acc, at) => acc + at.completude, 0) / selectedPatient.atendimentos.length)}%
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Atendimentos e Checklists -->
                    <div class="space-y-6">
                        ${selectedPatient.atendimentos.map(atendimento => `
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                                <!-- Header do Atendimento -->
                                <div class="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <h4 class="font-semibold text-gray-800">${atendimento.tipo}</h4>
                                            <div class="flex items-center gap-4 mt-1 text-sm text-gray-600">
                                                <span><i class="fas fa-calendar mr-1"></i>${atendimento.data}</span>
                                                <span><i class="fas fa-user-md mr-1"></i>${atendimento.medico}</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-3">
                                            <div class="text-center">
                                                <div class="relative w-16 h-16">
                                                    <svg class="transform -rotate-90 w-16 h-16">
                                                        <circle cx="32" cy="32" r="28" stroke="#E5E7EB" stroke-width="4" fill="none"/>
                                                        <circle cx="32" cy="32" r="28" 
                                                                stroke="${atendimento.completude === 100 ? '#10B981' : atendimento.completude >= 75 ? '#3B82F6' : '#F59E0B'}" 
                                                                stroke-width="4" fill="none"
                                                                stroke-dasharray="${atendimento.completude * 1.76} 176"
                                                                stroke-linecap="round"/>
                                                    </svg>
                                                    <span class="absolute inset-0 flex items-center justify-center text-sm font-bold">
                                                        ${atendimento.completude}%
                                                    </span>
                                                </div>
                                            </div>
                                            <span class="px-3 py-1 rounded-full text-xs font-medium
                                                ${atendimento.status === 'completo' ? 'bg-green-100 text-green-700' :
                                                  atendimento.status === 'pendente' ? 'bg-yellow-100 text-yellow-700' :
                                                  'bg-red-100 text-red-700'}">
                                                ${atendimento.status === 'completo' ? 'Completo' :
                                                  atendimento.status === 'pendente' ? 'Pendente' : 'Incompleto'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Tabs de Categorias -->
                                <div class="border-b border-gray-200">
                                    <nav class="flex space-x-8 px-6" aria-label="Tabs">
                                        <button onclick="showChecklistTab('${atendimento.id}', 'documentacao')" 
                                                class="checklist-tab active py-3 px-1 border-b-2 border-indigo-500 font-medium text-sm text-indigo-600" 
                                                data-atendimento="${atendimento.id}" data-categoria="documentacao">
                                            <i class="fas fa-file-alt mr-2"></i>Documentação
                                        </button>
                                        <button onclick="showChecklistTab('${atendimento.id}', 'procedimentos')" 
                                                class="checklist-tab py-3 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700" 
                                                data-atendimento="${atendimento.id}" data-categoria="procedimentos">
                                            <i class="fas fa-procedures mr-2"></i>Procedimentos
                                        </button>
                                        <button onclick="showChecklistTab('${atendimento.id}', 'compliance')" 
                                                class="checklist-tab py-3 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700" 
                                                data-atendimento="${atendimento.id}" data-categoria="compliance">
                                            <i class="fas fa-shield-alt mr-2"></i>Compliance
                                        </button>
                                    </nav>
                                </div>

                                <!-- Conteúdo das Tabs -->
                                <div class="p-6">
                                    <!-- Tab Documentação -->
                                    <div id="tab-${atendimento.id}-documentacao" class="checklist-tab-content">
                                        <table class="w-full">
                                            <thead>
                                                <tr class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <th class="pb-3">Item</th>
                                                    <th class="pb-3 text-center">Check 1</th>
                                                    <th class="pb-3 text-center">Check 2</th>
                                                    <th class="pb-3">Observações</th>
                                                    <th class="pb-3 text-center">Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody class="divide-y divide-gray-200">
                                                ${atendimento.itens.documentacao.map((item, index) => `
                                                    <tr class="hover:bg-gray-50">
                                                        <td class="py-3">
                                                            <span class="text-sm text-gray-800">${item.item}</span>
                                                        </td>
                                                        <td class="py-3 text-center">
                                                            <input type="checkbox" 
                                                                   ${item.check1 ? 'checked' : ''} 
                                                                   onchange="atualizarCheck('${atendimento.id}', 'documentacao', ${index}, 'check1')"
                                                                   class="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                                                        </td>
                                                        <td class="py-3 text-center">
                                                            <input type="checkbox" 
                                                                   ${item.check2 ? 'checked' : ''} 
                                                                   onchange="atualizarCheck('${atendimento.id}', 'documentacao', ${index}, 'check2')"
                                                                   class="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500">
                                                        </td>
                                                        <td class="py-3">
                                                            <input type="text" 
                                                                   value="${item.obs}" 
                                                                   onblur="atualizarObs('${atendimento.id}', 'documentacao', ${index}, this.value)"
                                                                   class="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                   placeholder="Adicionar observação...">
                                                        </td>
                                                        <td class="py-3 text-center">
                                                            <button onclick="verHistorico('${item.item}')" class="text-blue-500 hover:text-blue-700">
                                                                <i class="fas fa-history"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- Tab Procedimentos (hidden by default) -->
                                    <div id="tab-${atendimento.id}-procedimentos" class="checklist-tab-content hidden">
                                        <table class="w-full">
                                            <thead>
                                                <tr class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <th class="pb-3">Item</th>
                                                    <th class="pb-3 text-center">Check 1</th>
                                                    <th class="pb-3 text-center">Check 2</th>
                                                    <th class="pb-3">Observações</th>
                                                    <th class="pb-3 text-center">Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody class="divide-y divide-gray-200">
                                                ${atendimento.itens.procedimentos.map((item, index) => `
                                                    <tr class="hover:bg-gray-50">
                                                        <td class="py-3">
                                                            <span class="text-sm text-gray-800">${item.item}</span>
                                                        </td>
                                                        <td class="py-3 text-center">
                                                            <input type="checkbox" 
                                                                   ${item.check1 ? 'checked' : ''} 
                                                                   onchange="atualizarCheck('${atendimento.id}', 'procedimentos', ${index}, 'check1')"
                                                                   class="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                                                        </td>
                                                        <td class="py-3 text-center">
                                                            <input type="checkbox" 
                                                                   ${item.check2 ? 'checked' : ''} 
                                                                   onchange="atualizarCheck('${atendimento.id}', 'procedimentos', ${index}, 'check2')"
                                                                   class="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500">
                                                        </td>
                                                        <td class="py-3">
                                                            <input type="text" 
                                                                   value="${item.obs}" 
                                                                   onblur="atualizarObs('${atendimento.id}', 'procedimentos', ${index}, this.value)"
                                                                   class="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                   placeholder="Adicionar observação...">
                                                        </td>
                                                        <td class="py-3 text-center">
                                                            <button onclick="verHistorico('${item.item}')" class="text-blue-500 hover:text-blue-700">
                                                                <i class="fas fa-history"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- Tab Compliance (hidden by default) -->
                                    <div id="tab-${atendimento.id}-compliance" class="checklist-tab-content hidden">
                                        <table class="w-full">
                                            <thead>
                                                <tr class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <th class="pb-3">Item</th>
                                                    <th class="pb-3 text-center">Check 1</th>
                                                    <th class="pb-3 text-center">Check 2</th>
                                                    <th class="pb-3">Observações</th>
                                                    <th class="pb-3 text-center">Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody class="divide-y divide-gray-200">
                                                ${atendimento.itens.compliance.map((item, index) => `
                                                    <tr class="hover:bg-gray-50">
                                                        <td class="py-3">
                                                            <span class="text-sm text-gray-800">${item.item}</span>
                                                        </td>
                                                        <td class="py-3 text-center">
                                                            <input type="checkbox" 
                                                                   ${item.check1 ? 'checked' : ''} 
                                                                   onchange="atualizarCheck('${atendimento.id}', 'compliance', ${index}, 'check1')"
                                                                   class="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                                                        </td>
                                                        <td class="py-3 text-center">
                                                            <input type="checkbox" 
                                                                   ${item.check2 ? 'checked' : ''} 
                                                                   onchange="atualizarCheck('${atendimento.id}', 'compliance', ${index}, 'check2')"
                                                                   class="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500">
                                                        </td>
                                                        <td class="py-3">
                                                            <input type="text" 
                                                                   value="${item.obs}" 
                                                                   onblur="atualizarObs('${atendimento.id}', 'compliance', ${index}, this.value)"
                                                                   class="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                   placeholder="Adicionar observação...">
                                                        </td>
                                                        <td class="py-3 text-center">
                                                            <button onclick="verHistorico('${item.item}')" class="text-blue-500 hover:text-blue-700">
                                                                <i class="fas fa-history"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <!-- Footer com Ações -->
                                <div class="bg-gray-50 px-6 py-3 border-t border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <div class="text-sm text-gray-600">
                                            <i class="fas fa-info-circle mr-1"></i>
                                            Check 1: Verificação inicial | Check 2: Validação final
                                        </div>
                                        <div class="flex gap-2">
                                            <button onclick="salvarChecklist('${atendimento.id}')" class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                                                <i class="fas fa-save mr-1"></i>Salvar
                                            </button>
                                            <button onclick="finalizarChecklist('${atendimento.id}')" class="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600">
                                                <i class="fas fa-check mr-1"></i>Finalizar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Funções auxiliares para Jornada
function expandirFase(faseId) {
    console.log('Expandindo fase:', faseId);
}

function pesquisarJornada(termo) {
    console.log('Pesquisando:', termo);
}

function solicitarOrientacao() {
    alert('Abrindo assistente de orientação...');
}

function exportarJornada() {
    alert('Exportando jornada do paciente...');
}

function verDetalhes(ponto) {
    console.log('Ver detalhes:', ponto);
}

function expandirOrientacao(titulo) {
    console.log('Expandindo orientação:', titulo);
}

function perguntarAssistente() {
    alert('Enviando pergunta ao assistente...');
}

function perguntaRapida(tipo) {
    console.log('Pergunta rápida:', tipo);
}

// Funções auxiliares para Checklist
function selecionarPaciente(pacienteId) {
    console.log('Selecionando paciente:', pacienteId);
    // Recarregar view com paciente selecionado
}

function showChecklistTab(atendimentoId, categoria) {
    // Esconder todas as tabs do atendimento
    document.querySelectorAll(`#tab-${atendimentoId}-documentacao, #tab-${atendimentoId}-procedimentos, #tab-${atendimentoId}-compliance`).forEach(tab => {
        if (tab) tab.classList.add('hidden');
    });
    
    // Remover classe active de todos os botões do atendimento
    document.querySelectorAll(`[data-atendimento="${atendimentoId}"]`).forEach(btn => {
        btn.classList.remove('active', 'border-indigo-500', 'text-indigo-600');
        btn.classList.add('border-transparent', 'text-gray-500');
    });
    
    // Mostrar tab selecionada
    const selectedTab = document.getElementById(`tab-${atendimentoId}-${categoria}`);
    if (selectedTab) selectedTab.classList.remove('hidden');
    
    // Adicionar classe active ao botão selecionado
    const activeBtn = document.querySelector(`[data-atendimento="${atendimentoId}"][data-categoria="${categoria}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'border-indigo-500', 'text-indigo-600');
        activeBtn.classList.remove('border-transparent', 'text-gray-500');
    }
}

function atualizarCheck(atendimentoId, categoria, index, tipo) {
    console.log('Atualizando check:', atendimentoId, categoria, index, tipo);
}

function atualizarObs(atendimentoId, categoria, index, valor) {
    console.log('Atualizando observação:', atendimentoId, categoria, index, valor);
}

function verHistorico(item) {
    console.log('Ver histórico:', item);
}

function salvarChecklist(atendimentoId) {
    console.log('Salvando checklist:', atendimentoId);
    alert('Checklist salvo com sucesso!');
}

function finalizarChecklist(atendimentoId) {
    if (confirm('Deseja finalizar este checklist? Após finalizado não poderá ser editado.')) {
        console.log('Finalizando checklist:', atendimentoId);
        alert('Checklist finalizado com sucesso!');
    }
}

function filtrarPendentes() {
    console.log('Filtrando pendentes');
}

function gerarRelatorio() {
    console.log('Gerando relatório');
    alert('Relatório gerado com sucesso!');
}

function exportarChecklist() {
    console.log('Exportando checklist');
    alert('Checklist exportado com sucesso!');
}

// Exportar funções para uso global
window.renderJornadaView = renderJornadaView;
window.renderChecklistView = renderChecklistView;
window.expandirFase = expandirFase;
window.pesquisarJornada = pesquisarJornada;
window.solicitarOrientacao = solicitarOrientacao;
window.exportarJornada = exportarJornada;
window.verDetalhes = verDetalhes;
window.expandirOrientacao = expandirOrientacao;
window.perguntarAssistente = perguntarAssistente;
window.perguntaRapida = perguntaRapida;
window.selecionarPaciente = selecionarPaciente;
window.showChecklistTab = showChecklistTab;
window.atualizarCheck = atualizarCheck;
window.atualizarObs = atualizarObs;
window.verHistorico = verHistorico;
window.salvarChecklist = salvarChecklist;
window.finalizarChecklist = finalizarChecklist;
window.filtrarPendentes = filtrarPendentes;
window.gerarRelatorio = gerarRelatorio;
window.exportarChecklist = exportarChecklist;