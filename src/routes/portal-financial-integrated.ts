// Portal Financeiro Integrado - Conteúdo para carregamento dinâmico
export const financialPortalContent = () => {
    const html = `
        <!-- Portal Financeiro LAURA - Sistema Preditivo de Gestão -->
        <div class="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen">
            <!-- Header Premium -->
            <div class="glass-premium p-6 mb-8 border-b border-gray-100">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-4">
                        <button onclick="goBack()" class="text-gray-600 hover:text-gray-800 transition-colors">
                            <i class="fas fa-arrow-left text-xl"></i>
                        </button>
                        <div>
                            <h1 class="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Portal de Gestão Financeira LAURA
                            </h1>
                            <p class="text-gray-600 mt-1">Sistema Preditivo de Análise de Riscos Financeiros</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm font-semibold shadow-lg">
                            <i class="fas fa-shield-check mr-2"></i>IA Ativa
                        </span>
                        <button class="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                            <i class="fas fa-download mr-2"></i>Exportar
                        </button>
                    </div>
                </div>
            </div>

            <!-- KPIs Premium Row -->
            <div class="px-6 mb-8">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <!-- Glosas Identificadas -->
                    <div class="kpi-card-premium rounded-xl p-6 relative overflow-hidden cursor-pointer" onclick="showExtratoKPI('glosas_identificadas')">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                        <div class="relative">
                            <div class="flex justify-between items-start mb-3">
                                <div class="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                                    <i class="fas fa-exclamation-triangle text-white text-xl"></i>
                                </div>
                                <button class="text-gray-400 hover:text-gray-600" onclick="event.stopPropagation(); showExtratoKPI('glosas_identificadas')">
                                    <i class="fas fa-file-alt"></i>
                                </button>
                            </div>
                            <div class="text-3xl font-bold text-gray-800 mb-1">R$ 485.7K</div>
                            <div class="text-sm text-gray-600 font-medium">Glosas Identificadas</div>
                            <div class="text-xs text-red-600 font-semibold mt-2">
                                <i class="fas fa-arrow-up mr-1"></i>12.3% vs mês anterior
                            </div>
                        </div>
                    </div>

                    <!-- Glosas Revertidas -->
                    <div class="kpi-card-premium rounded-xl p-6 relative overflow-hidden cursor-pointer" onclick="showExtratoKPI('glosas_revertidas')">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                        <div class="relative">
                            <div class="flex justify-between items-start mb-3">
                                <div class="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg">
                                    <i class="fas fa-check-circle text-white text-xl"></i>
                                </div>
                                <button class="text-gray-400 hover:text-gray-600" onclick="event.stopPropagation(); showExtratoKPI('glosas_revertidas')">
                                    <i class="fas fa-file-alt"></i>
                                </button>
                            </div>
                            <div class="text-3xl font-bold text-gray-800 mb-1">R$ 367.2K</div>
                            <div class="text-sm text-gray-600 font-medium">Glosas Revertidas</div>
                            <div class="text-xs text-green-600 font-semibold mt-2">
                                <i class="fas fa-arrow-up mr-1"></i>75.6% taxa reversão
                            </div>
                        </div>
                    </div>

                    <!-- ROI Otimização -->
                    <div class="kpi-card-premium rounded-xl p-6 relative overflow-hidden cursor-pointer" onclick="showExtratoKPI('roi_otimizacao')">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                        <div class="relative">
                            <div class="flex justify-between items-start mb-3">
                                <div class="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                                    <i class="fas fa-chart-line text-white text-xl"></i>
                                </div>
                                <button class="text-gray-400 hover:text-gray-600" onclick="event.stopPropagation(); showExtratoKPI('roi_otimizacao')">
                                    <i class="fas fa-file-alt"></i>
                                </button>
                            </div>
                            <div class="text-3xl font-bold text-gray-800 mb-1">287%</div>
                            <div class="text-sm text-gray-600 font-medium">ROI Otimização</div>
                            <div class="text-xs text-blue-600 font-semibold mt-2">
                                <i class="fas fa-trophy mr-1"></i>Meta superada
                            </div>
                        </div>
                    </div>

                    <!-- Tempo Médio Reversão -->
                    <div class="kpi-card-premium rounded-xl p-6 relative overflow-hidden cursor-pointer" onclick="showExtratoKPI('tempo_reversao')">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                        <div class="relative">
                            <div class="flex justify-between items-start mb-3">
                                <div class="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg">
                                    <i class="fas fa-clock text-white text-xl"></i>
                                </div>
                                <button class="text-gray-400 hover:text-gray-600" onclick="event.stopPropagation(); showExtratoKPI('tempo_reversao')">
                                    <i class="fas fa-file-alt"></i>
                                </button>
                            </div>
                            <div class="text-3xl font-bold text-gray-800 mb-1">4.2 dias</div>
                            <div class="text-sm text-gray-600 font-medium">Tempo Médio Reversão</div>
                            <div class="text-xs text-purple-600 font-semibold mt-2">
                                <i class="fas fa-arrow-down mr-1"></i>Redução de 2.1 dias
                            </div>
                        </div>
                    </div>

                    <!-- Controle OPME -->
                    <div class="kpi-card-premium rounded-xl p-6 relative overflow-hidden cursor-pointer" onclick="showExtratoKPI('controle_opme')">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                        <div class="relative">
                            <div class="flex justify-between items-start mb-3">
                                <div class="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg">
                                    <i class="fas fa-microscope text-white text-xl"></i>
                                </div>
                                <button class="text-gray-400 hover:text-gray-600" onclick="event.stopPropagation(); showExtratoKPI('controle_opme')">
                                    <i class="fas fa-file-alt"></i>
                                </button>
                            </div>
                            <div class="text-3xl font-bold text-gray-800 mb-1">98.7%</div>
                            <div class="text-sm text-gray-600 font-medium">Controle OPME</div>
                            <div class="text-xs text-amber-600 font-semibold mt-2">
                                <i class="fas fa-shield-alt mr-1"></i>Compliance total
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content Grid -->
            <div class="px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Left Column -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Dashboard Analytics -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-bold text-gray-800 mb-4">Dashboard de Análise Preditiva</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                                <canvas id="glosasTrendChart" width="200" height="150"></canvas>
                            </div>
                            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                                <canvas id="reversaoChart" width="200" height="150"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- Controle OPME em Tempo Real -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-bold text-gray-800">Controle OPME em Tempo Real</h3>
                            <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                <i class="fas fa-circle text-green-500 mr-1" style="font-size: 8px;"></i>
                                Monitorando
                            </span>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b border-gray-200">
                                        <th class="text-left py-3 text-sm font-semibold text-gray-700">Material</th>
                                        <th class="text-left py-3 text-sm font-semibold text-gray-700">Fornecedor</th>
                                        <th class="text-left py-3 text-sm font-semibold text-gray-700">Valor</th>
                                        <th class="text-left py-3 text-sm font-semibold text-gray-700">Status</th>
                                        <th class="text-center py-3 text-sm font-semibold text-gray-700">Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${['Stent Coronário', 'Prótese de Quadril', 'Marca-passo', 'Válvula Cardíaca', 'Prótese de Joelho'].map((material, i) => `
                                    <tr class="border-b border-gray-100 hover:bg-gray-50">
                                        <td class="py-3 text-sm">${material}</td>
                                        <td class="py-3 text-sm text-gray-600">${['MedTech Inc', 'OrthoLife', 'CardioTech', 'ValveMed', 'JointPro'][i]}</td>
                                        <td class="py-3 text-sm font-semibold">R$ ${[12.45, 28.9, 45.2, 67.8, 34.5][i].toFixed(2)}0</td>
                                        <td class="py-3">
                                            <span class="px-2 py-1 ${i % 3 === 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'} rounded-full text-xs">
                                                ${i % 3 === 0 ? 'Análise' : 'Aprovado'}
                                            </span>
                                        </td>
                                        <td class="py-3 text-center">
                                            <button onclick="showOPMEDetail('${['ST', 'PQ', 'MP', 'VC', 'PJ'][i]}-2024-00${i + 1}')" class="text-blue-600 hover:text-blue-800">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="space-y-6">
                    <!-- Jornadas em Risco -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-bold text-gray-800">Jornadas em Risco</h3>
                            <button onclick="showJornadasRisco()" class="text-blue-600 text-sm hover:underline">Ver Todos</button>
                        </div>
                        <div class="space-y-3">
                            ${[
                                { nome: 'Maria Silva', id: '45123', risco: 87, nivel: 'alto', cor: 'red' },
                                { nome: 'João Santos', id: '45124', risco: 65, nivel: 'medio', cor: 'yellow' },
                                { nome: 'Ana Costa', id: '45125', risco: 45, nivel: 'baixo', cor: 'green' }
                            ].map(p => `
                            <div class="p-3 bg-${p.cor}-50 border-l-4 border-${p.cor}-500 rounded-lg">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <p class="font-semibold text-gray-800">${p.nome}</p>
                                        <p class="text-xs text-gray-600">ID: #${p.id}</p>
                                    </div>
                                    <span class="px-2 py-1 bg-${p.cor}-100 text-${p.cor}-700 rounded-full text-xs font-bold">${p.risco}%</span>
                                </div>
                                <p class="text-sm text-gray-700 mt-1">${p.nivel === 'alto' ? 'Alto risco de glosa' : p.nivel === 'medio' ? 'Documentação pendente' : 'Monitoramento preventivo'}</p>
                            </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Alertas LAURA -->
                    <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                <i class="fas fa-brain text-2xl"></i>
                            </div>
                            <h3 class="text-lg font-bold">Alertas LAURA Finance AI</h3>
                        </div>
                        <div class="space-y-3">
                            <div class="p-3 bg-white/10 rounded-lg backdrop-blur">
                                <p class="text-sm font-semibold mb-1">⚠️ Padrão Detectado</p>
                                <p class="text-xs opacity-90">15 casos com alta probabilidade de glosa por documentação incompleta</p>
                            </div>
                            <div class="p-3 bg-white/10 rounded-lg backdrop-blur">
                                <p class="text-sm font-semibold mb-1">💡 Oportunidade</p>
                                <p class="text-xs opacity-90">Potencial economia de R$ 127.5K com revisão preventiva</p>
                            </div>
                            <div class="p-3 bg-white/10 rounded-lg backdrop-blur">
                                <p class="text-sm font-semibold mb-1">📈 Tendência</p>
                                <p class="text-xs opacity-90">Aumento de 8% na taxa de reversão com novo protocolo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modals -->
        ${generateModalsHTML()}

        <style>
            ${generateStyles()}
        </style>
    `;

    const scripts = [generateScripts()];

    return { html, scripts };
};

function generateModalsHTML() {
    return `
        <!-- Modal: Jornadas em Risco -->
        <div id="modalJornadasRisco" class="fixed inset-0 z-50 hidden">
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeModal('modalJornadasRisco')"></div>
            <div class="absolute inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div class="h-full flex flex-col">
                    <div class="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                        <div class="flex justify-between items-center">
                            <h2 class="text-2xl font-bold">Jornadas (Pacientes) em Risco - Visão Completa</h2>
                            <button onclick="closeModal('modalJornadasRisco')" class="text-white/80 hover:text-white">
                                <i class="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                        <div class="mt-4 flex gap-2">
                            <button onclick="filterRisco('all')" class="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30">Todos</button>
                            <button onclick="filterRisco('alto')" class="px-4 py-2 bg-red-800/50 rounded-lg hover:bg-red-800/70">Alto Risco</button>
                            <button onclick="filterRisco('medio')" class="px-4 py-2 bg-yellow-600/50 rounded-lg hover:bg-yellow-600/70">Médio Risco</button>
                            <button onclick="filterRisco('baixo')" class="px-4 py-2 bg-green-600/50 rounded-lg hover:bg-green-600/70">Baixo Risco</button>
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            ${generatePatientRiskCards()}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal: OPME Detail -->
        <div id="modalOPMEDetail" class="fixed inset-0 z-50 hidden">
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeModal('modalOPMEDetail')"></div>
            <div class="absolute inset-8 md:inset-16 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
                <div class="h-full flex flex-col">
                    <div class="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white">
                        <div class="flex justify-between items-center">
                            <h2 class="text-2xl font-bold">Detalhes OPME - Visão Completa</h2>
                            <button onclick="closeModal('modalOPMEDetail')" class="text-white/80 hover:text-white">
                                <i class="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto p-6">
                        ${generateOPMEDetailContent()}
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal: KPI Extratos -->
        <div id="modalKPIExtrato" class="fixed inset-0 z-50 hidden">
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeModal('modalKPIExtrato')"></div>
            <div class="absolute inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div class="h-full flex flex-col">
                    <div id="modalKPIExtratoHeader" class="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                        <div class="flex justify-between items-center">
                            <h2 id="modalKPIExtratoTitle" class="text-2xl font-bold">Extrato Detalhado</h2>
                            <button onclick="closeModal('modalKPIExtrato')" class="text-white/80 hover:text-white">
                                <i class="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                    </div>
                    <div id="modalKPIExtratoContent" class="flex-1 overflow-y-auto p-6">
                        <!-- Content will be dynamically inserted here -->
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generatePatientRiskCards() {
    const patients = [
        // Alto Risco (10 pacientes)
        ...Array.from({length: 10}, (_, i) => ({
            nome: ['Maria Silva', 'João Santos', 'Ana Costa', 'Pedro Lima', 'Julia Ferreira', 'Carlos Mendes', 'Patricia Souza', 'Roberto Alves', 'Fernanda Cruz', 'Miguel Torres'][i],
            id: `4512${i}`,
            risco: 85 + Math.floor(Math.random() * 15),
            nivel: 'alto',
            diagnostico: ['CA Mama', 'CA Pulmão', 'CA Colorretal', 'CA Próstata', 'Leucemia', 'CA Gástrico', 'Linfoma', 'CA Ovário', 'CA Pâncreas', 'Mieloma'][i],
            tempo: `${3 + i} meses`,
            alerta: 'Documentação incompleta - Alto risco de glosa'
        })),
        // Médio Risco (10 pacientes)
        ...Array.from({length: 10}, (_, i) => ({
            nome: ['Lucas Oliveira', 'Beatriz Lima', 'André Castro', 'Sofia Rocha', 'Gabriel Melo', 'Isabella Santos', 'Thiago Costa', 'Laura Barbosa', 'Rafael Dias', 'Camila Nunes'][i],
            id: `4513${i}`,
            risco: 60 + Math.floor(Math.random() * 15),
            nivel: 'medio',
            diagnostico: ['CA Tireoide', 'CA Rim', 'CA Bexiga', 'CA Endométrio', 'CA Fígado', 'Melanoma', 'CA Esôfago', 'CA Cérebro', 'Sarcoma', 'CA Testículo'][i],
            tempo: `${2 + i} meses`,
            alerta: 'Autorização pendente - Risco moderado'
        })),
        // Baixo Risco (11 pacientes)
        ...Array.from({length: 11}, (_, i) => ({
            nome: ['Diego Martins', 'Amanda Vieira', 'Felipe Correia', 'Mariana Gomes', 'Bruno Cardoso', 'Leticia Pinto', 'Rodrigo Cunha', 'Natalia Freitas', 'Eduardo Machado', 'Juliana Ramos', 'Henrique Moreira'][i],
            id: `4514${i}`,
            risco: 30 + Math.floor(Math.random() * 15),
            nivel: 'baixo',
            diagnostico: ['CA Pele', 'CA in situ', 'Tumor Benigno', 'Pré-cancer', 'Displasia', 'Adenoma', 'Papiloma', 'Lipoma', 'Fibroma', 'Cisto', 'Pólipo'][i],
            tempo: `${1 + Math.floor(i/2)} meses`,
            alerta: 'Monitoramento preventivo - Baixo risco'
        }))
    ];

    return patients.map(p => `
        <div class="p-4 ${p.nivel === 'alto' ? 'bg-red-50 border-l-4 border-red-500' : p.nivel === 'medio' ? 'bg-yellow-50 border-l-4 border-yellow-500' : 'bg-green-50 border-l-4 border-green-500'} rounded-lg hover:shadow-lg transition-all patient-risk-card" data-risk="${p.nivel}">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <p class="font-bold text-gray-800">${p.nome}</p>
                    <p class="text-xs text-gray-600">ID: #${p.id}</p>
                </div>
                <span class="px-2 py-1 ${p.nivel === 'alto' ? 'bg-red-100 text-red-700' : p.nivel === 'medio' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'} rounded-full text-xs font-bold">
                    ${p.risco}%
                </span>
            </div>
            <p class="text-sm text-gray-700 font-semibold">${p.diagnostico}</p>
            <p class="text-xs text-gray-600 mt-1">Em tratamento: ${p.tempo}</p>
            <div class="mt-2 pt-2 border-t ${p.nivel === 'alto' ? 'border-red-200' : p.nivel === 'medio' ? 'border-yellow-200' : 'border-green-200'}">
                <p class="text-xs ${p.nivel === 'alto' ? 'text-red-700' : p.nivel === 'medio' ? 'text-yellow-700' : 'text-green-700'} font-medium">
                    <i class="fas fa-exclamation-circle mr-1"></i>${p.alerta}
                </p>
            </div>
        </div>
    `).join('');
}

function generateOPMEDetailContent() {
    return `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 class="font-bold text-gray-800 mb-3">Informações do Material</h3>
                <div class="space-y-2 bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm"><span class="font-semibold">Código:</span> <span id="opme-code">ST-2024-001</span></p>
                    <p class="text-sm"><span class="font-semibold">Material:</span> Stent Coronário Drug-Eluting</p>
                    <p class="text-sm"><span class="font-semibold">Fabricante:</span> MedTech Inc</p>
                    <p class="text-sm"><span class="font-semibold">Modelo:</span> XR-500 Premium</p>
                    <p class="text-sm"><span class="font-semibold">Registro ANVISA:</span> 10235.2024.001</p>
                    <p class="text-sm"><span class="font-semibold">Valor Unitário:</span> R$ 12.450,00</p>
                    <p class="text-sm"><span class="font-semibold">Quantidade:</span> 1 unidade</p>
                </div>
            </div>
            <div>
                <h3 class="font-bold text-gray-800 mb-3">Dados Clínicos</h3>
                <div class="space-y-2 bg-blue-50 p-4 rounded-lg">
                    <p class="text-sm"><span class="font-semibold">Paciente:</span> João da Silva Santos</p>
                    <p class="text-sm"><span class="font-semibold">CPF:</span> ***.***.789-**</p>
                    <p class="text-sm"><span class="font-semibold">Idade:</span> 62 anos</p>
                    <p class="text-sm"><span class="font-semibold">Procedimento:</span> Angioplastia Coronariana</p>
                    <p class="text-sm"><span class="font-semibold">CID:</span> I25.1 - Doença aterosclerótica do coração</p>
                    <p class="text-sm"><span class="font-semibold">Médico Solicitante:</span> Dr. Carlos Eduardo Santos - CRM 12345</p>
                    <p class="text-sm"><span class="font-semibold">Data Prevista:</span> 20/01/2025</p>
                </div>
            </div>
        </div>
        
        <div class="mt-6">
            <h3 class="font-bold text-gray-800 mb-3">Justificativa Técnica Detalhada</h3>
            <div class="p-4 bg-amber-50 rounded-lg">
                <p class="text-sm text-gray-700 leading-relaxed">
                    Paciente masculino, 62 anos, portador de doença arterial coronariana com lesão crítica de 90% em artéria descendente anterior (ADA) proximal, 
                    documentada por cateterismo cardíaco realizado em 10/01/2025. Apresenta angina instável classe III (CCS), com episódios diários de dor precordial 
                    aos mínimos esforços, refratária ao tratamento medicamentoso otimizado. 
                </p>
                <p class="text-sm text-gray-700 leading-relaxed mt-2">
                    O stent farmacológico é indicado devido ao alto risco de reestenose considerando: diabetes mellitus tipo 2, lesão longa (>20mm), 
                    vaso de fino calibre (<3mm) e localização proximal da ADA. Estudos demonstram redução de 70% na taxa de reestenose com stents 
                    farmacológicos versus convencionais neste perfil de paciente.
                </p>
            </div>
        </div>

        <div class="mt-6">
            <h3 class="font-bold text-gray-800 mb-3">Documentação Anexada</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <i class="fas fa-file-pdf text-red-600 text-2xl mb-1"></i>
                    <p class="text-xs">Laudo Cateterismo</p>
                </button>
                <button class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <i class="fas fa-file-medical text-blue-600 text-2xl mb-1"></i>
                    <p class="text-xs">Relatório Médico</p>
                </button>
                <button class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <i class="fas fa-file-invoice text-green-600 text-2xl mb-1"></i>
                    <p class="text-xs">Orçamento</p>
                </button>
                <button class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <i class="fas fa-file-signature text-purple-600 text-2xl mb-1"></i>
                    <p class="text-xs">Termo Consentimento</p>
                </button>
            </div>
        </div>

        <div class="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 class="font-bold text-gray-800 mb-2">Análise LAURA AI</h3>
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-check text-white"></i>
                </div>
                <div>
                    <p class="text-sm text-gray-700">
                        <span class="font-semibold text-green-700">Aprovação Recomendada:</span> 
                        Documentação completa, justificativa técnica adequada, material compatível com protocolo institucional. 
                        Probabilidade de glosa: <span class="font-bold text-green-600">2.3%</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-6 flex justify-end gap-3">
            <button onclick="closeModal('modalOPMEDetail')" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Fechar
            </button>
            <button class="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                <i class="fas fa-clock mr-2"></i>Solicitar Revisão
            </button>
            <button class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <i class="fas fa-check mr-2"></i>Aprovar Material
            </button>
        </div>
    `;
}

function generateStyles() {
    return `
        .glass-premium {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        
        .kpi-card-premium {
            background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
            border: 1px solid rgba(0, 0, 0, 0.04);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        
        .kpi-card-premium::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s;
        }
        
        .kpi-card-premium:hover::before {
            left: 100%;
        }
        
        .kpi-card-premium:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.15);
        }
    `;
}

function generateScripts() {
    return `
        // Initialize Charts
        function initFinancialCharts() {
            // Glosas Trend Chart
            const ctx1 = document.getElementById('glosasTrendChart')?.getContext('2d');
            if (ctx1) {
                new Chart(ctx1, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                        datasets: [{
                            label: 'Glosas Identificadas',
                            data: [320, 380, 420, 390, 450, 486],
                            borderColor: 'rgb(239, 68, 68)',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    callback: function(value) {
                                        return 'R$ ' + value + 'K';
                                    }
                                }
                            }
                        }
                    }
                });
            }

            // Reversao Chart
            const ctx2 = document.getElementById('reversaoChart')?.getContext('2d');
            if (ctx2) {
                new Chart(ctx2, {
                    type: 'bar',
                    data: {
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                        datasets: [{
                            label: 'Taxa de Reversão',
                            data: [65, 70, 72, 68, 74, 76],
                            backgroundColor: 'rgba(34, 197, 94, 0.8)'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    callback: function(value) {
                                        return value + '%';
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // Modal Functions
        window.showJornadasRisco = function() {
            document.getElementById('modalJornadasRisco').classList.remove('hidden');
        }

        window.showOPMEDetail = function(code) {
            const codeElement = document.getElementById('opme-code');
            if (codeElement) {
                codeElement.textContent = code;
            }
            document.getElementById('modalOPMEDetail').classList.remove('hidden');
        }

        window.showExtratoKPI = function(type) {
            const modal = document.getElementById('modalKPIExtrato');
            const header = document.getElementById('modalKPIExtratoHeader');
            const title = document.getElementById('modalKPIExtratoTitle');
            const content = document.getElementById('modalKPIExtratoContent');
            
            const extratos = {
                'glosas_identificadas': {
                    title: 'Extrato de Glosas Identificadas',
                    color: 'from-red-600 to-red-700',
                    content: generateGlosasIdentificadasContent()
                },
                'glosas_revertidas': {
                    title: 'Extrato de Glosas Revertidas',
                    color: 'from-green-600 to-green-700',
                    content: generateGlosasRevertidasContent()
                },
                'roi_otimizacao': {
                    title: 'ROI de Otimização',
                    color: 'from-blue-600 to-blue-700',
                    content: generateROIContent()
                },
                'tempo_reversao': {
                    title: 'Tempo Médio de Reversão',
                    color: 'from-purple-600 to-purple-700',
                    content: generateTempoReversaoContent()
                },
                'controle_opme': {
                    title: 'Controle OPME',
                    color: 'from-amber-600 to-amber-700',
                    content: generateControleOPMEContent()
                }
            };
            
            const extrato = extratos[type];
            if (extrato) {
                title.textContent = extrato.title;
                header.className = 'bg-gradient-to-r ' + extrato.color + ' p-6 text-white';
                content.innerHTML = extrato.content;
                modal.classList.remove('hidden');
            }
        }

        function generateGlosasIdentificadasContent() {
            return '<div class="space-y-4">' +
                '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">' +
                '<div class="bg-red-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Total Identificado</p><p class="text-2xl font-bold text-red-600">R$ 485.700</p></div>' +
                '<div class="bg-red-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Casos</p><p class="text-2xl font-bold text-red-600">127</p></div>' +
                '<div class="bg-red-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Taxa Crescimento</p><p class="text-2xl font-bold text-red-600">+12.3%</p></div>' +
                '</div>' +
                '<table class="w-full"><thead><tr class="border-b"><th class="text-left py-2">Código</th><th class="text-left py-2">Paciente</th><th class="text-left py-2">Valor</th><th class="text-left py-2">Motivo</th><th class="text-left py-2">Status</th></tr></thead>' +
                '<tbody>' +
                '<tr class="border-b"><td class="py-2">GL-2024-001</td><td class="py-2">Maria Silva</td><td class="py-2 font-semibold">R$ 12.450</td><td class="py-2">Doc. Incompleta</td><td class="py-2"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Pendente</span></td></tr>' +
                '<tr class="border-b"><td class="py-2">GL-2024-002</td><td class="py-2">João Santos</td><td class="py-2 font-semibold">R$ 8.900</td><td class="py-2">Código Incorreto</td><td class="py-2"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Revisão</span></td></tr>' +
                '<tr class="border-b"><td class="py-2">GL-2024-003</td><td class="py-2">Ana Costa</td><td class="py-2 font-semibold">R$ 15.200</td><td class="py-2">Autorização Vencida</td><td class="py-2"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Pendente</span></td></tr>' +
                '<tr class="border-b"><td class="py-2">GL-2024-004</td><td class="py-2">Pedro Lima</td><td class="py-2 font-semibold">R$ 6.780</td><td class="py-2">Duplicidade</td><td class="py-2"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Análise</span></td></tr>' +
                '<tr class="border-b"><td class="py-2">GL-2024-005</td><td class="py-2">Julia Ferreira</td><td class="py-2 font-semibold">R$ 22.100</td><td class="py-2">Falta Laudo</td><td class="py-2"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Pendente</span></td></tr>' +
                '</tbody></table></div>';
        }

        function generateGlosasRevertidasContent() {
            return '<div class="space-y-4">' +
                '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">' +
                '<div class="bg-green-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Total Revertido</p><p class="text-2xl font-bold text-green-600">R$ 367.200</p></div>' +
                '<div class="bg-green-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Casos Revertidos</p><p class="text-2xl font-bold text-green-600">96</p></div>' +
                '<div class="bg-green-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Taxa Sucesso</p><p class="text-2xl font-bold text-green-600">75.6%</p></div>' +
                '</div>' +
                '<table class="w-full"><thead><tr class="border-b"><th class="text-left py-2">Código</th><th class="text-left py-2">Paciente</th><th class="text-left py-2">Valor</th><th class="text-left py-2">Data Reversão</th><th class="text-left py-2">Tempo</th></tr></thead>' +
                '<tbody>' +
                '<tr class="border-b"><td class="py-2">RV-2024-001</td><td class="py-2">Ana Costa</td><td class="py-2 font-semibold text-green-600">R$ 15.200</td><td class="py-2">10/01/2025</td><td class="py-2">3 dias</td></tr>' +
                '<tr class="border-b"><td class="py-2">RV-2024-002</td><td class="py-2">Pedro Lima</td><td class="py-2 font-semibold text-green-600">R$ 9.800</td><td class="py-2">12/01/2025</td><td class="py-2">5 dias</td></tr>' +
                '<tr class="border-b"><td class="py-2">RV-2024-003</td><td class="py-2">Carlos Mendes</td><td class="py-2 font-semibold text-green-600">R$ 18.450</td><td class="py-2">13/01/2025</td><td class="py-2">2 dias</td></tr>' +
                '<tr class="border-b"><td class="py-2">RV-2024-004</td><td class="py-2">Patricia Souza</td><td class="py-2 font-semibold text-green-600">R$ 7.320</td><td class="py-2">14/01/2025</td><td class="py-2">4 dias</td></tr>' +
                '<tr class="border-b"><td class="py-2">RV-2024-005</td><td class="py-2">Roberto Alves</td><td class="py-2 font-semibold text-green-600">R$ 25.600</td><td class="py-2">15/01/2025</td><td class="py-2">6 dias</td></tr>' +
                '</tbody></table></div>';
        }

        function generateROIContent() {
            return '<div class="space-y-4">' +
                '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">' +
                '<div class="bg-blue-50 p-4 rounded-lg"><p class="text-sm text-gray-600">ROI Total</p><p class="text-2xl font-bold text-blue-600">287%</p></div>' +
                '<div class="bg-blue-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Economia Gerada</p><p class="text-2xl font-bold text-blue-600">R$ 2.4M</p></div>' +
                '<div class="bg-blue-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Investimento</p><p class="text-2xl font-bold text-blue-600">R$ 836K</p></div>' +
                '</div>' +
                '<div class="bg-gray-50 p-4 rounded-lg">' +
                '<h4 class="font-bold text-gray-800 mb-3">Breakdown de Economias</h4>' +
                '<div class="space-y-2">' +
                '<div class="flex justify-between items-center py-2 border-b"><span>Prevenção de Glosas</span><span class="font-bold text-green-600">R$ 1.2M</span></div>' +
                '<div class="flex justify-between items-center py-2 border-b"><span>Otimização OPME</span><span class="font-bold text-green-600">R$ 680K</span></div>' +
                '<div class="flex justify-between items-center py-2 border-b"><span>Redução Retrabalho</span><span class="font-bold text-green-600">R$ 320K</span></div>' +
                '<div class="flex justify-between items-center py-2 border-b"><span>Agilidade Processos</span><span class="font-bold text-green-600">R$ 200K</span></div>' +
                '</div></div></div>';
        }

        function generateTempoReversaoContent() {
            return '<div class="space-y-4">' +
                '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">' +
                '<div class="bg-purple-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Tempo Médio</p><p class="text-2xl font-bold text-purple-600">4.2 dias</p></div>' +
                '<div class="bg-purple-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Melhor Tempo</p><p class="text-2xl font-bold text-purple-600">1 dia</p></div>' +
                '<div class="bg-purple-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Redução</p><p class="text-2xl font-bold text-purple-600">-2.1 dias</p></div>' +
                '</div>' +
                '<div class="bg-gray-50 p-4 rounded-lg">' +
                '<h4 class="font-bold text-gray-800 mb-3">Evolução Temporal</h4>' +
                '<table class="w-full"><thead><tr class="border-b"><th class="text-left py-2">Mês</th><th class="text-left py-2">Tempo Médio</th><th class="text-left py-2">Variação</th></tr></thead>' +
                '<tbody>' +
                '<tr class="border-b"><td class="py-2">Janeiro</td><td class="py-2">6.3 dias</td><td class="py-2 text-red-600">Base</td></tr>' +
                '<tr class="border-b"><td class="py-2">Fevereiro</td><td class="py-2">5.8 dias</td><td class="py-2 text-green-600">-0.5 dias</td></tr>' +
                '<tr class="border-b"><td class="py-2">Março</td><td class="py-2">5.2 dias</td><td class="py-2 text-green-600">-0.6 dias</td></tr>' +
                '<tr class="border-b"><td class="py-2">Abril</td><td class="py-2">4.9 dias</td><td class="py-2 text-green-600">-0.3 dias</td></tr>' +
                '<tr class="border-b"><td class="py-2">Maio</td><td class="py-2">4.5 dias</td><td class="py-2 text-green-600">-0.4 dias</td></tr>' +
                '<tr class="border-b"><td class="py-2">Junho</td><td class="py-2 font-bold">4.2 dias</td><td class="py-2 text-green-600 font-bold">-0.3 dias</td></tr>' +
                '</tbody></table></div></div>';
        }

        function generateControleOPMEContent() {
            return '<div class="space-y-4">' +
                '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">' +
                '<div class="bg-amber-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Compliance</p><p class="text-2xl font-bold text-amber-600">98.7%</p></div>' +
                '<div class="bg-amber-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Materiais Analisados</p><p class="text-2xl font-bold text-amber-600">1.247</p></div>' +
                '<div class="bg-amber-50 p-4 rounded-lg"><p class="text-sm text-gray-600">Economia</p><p class="text-2xl font-bold text-amber-600">R$ 892K</p></div>' +
                '</div>' +
                '<table class="w-full"><thead><tr class="border-b"><th class="text-left py-2">Fornecedor</th><th class="text-left py-2">Materiais</th><th class="text-left py-2">Valor Total</th><th class="text-left py-2">Compliance</th></tr></thead>' +
                '<tbody>' +
                '<tr class="border-b"><td class="py-2">MedTech Inc</td><td class="py-2">234</td><td class="py-2 font-semibold">R$ 2.8M</td><td class="py-2"><span class="text-green-600 font-bold">99.2%</span></td></tr>' +
                '<tr class="border-b"><td class="py-2">OrthoLife</td><td class="py-2">189</td><td class="py-2 font-semibold">R$ 1.9M</td><td class="py-2"><span class="text-green-600 font-bold">98.4%</span></td></tr>' +
                '<tr class="border-b"><td class="py-2">CardioTech</td><td class="py-2">156</td><td class="py-2 font-semibold">R$ 3.2M</td><td class="py-2"><span class="text-green-600 font-bold">99.5%</span></td></tr>' +
                '<tr class="border-b"><td class="py-2">ValveMed</td><td class="py-2">98</td><td class="py-2 font-semibold">R$ 4.1M</td><td class="py-2"><span class="text-yellow-600 font-bold">97.8%</span></td></tr>' +
                '<tr class="border-b"><td class="py-2">JointPro</td><td class="py-2">145</td><td class="py-2 font-semibold">R$ 1.5M</td><td class="py-2"><span class="text-green-600 font-bold">98.9%</span></td></tr>' +
                '</tbody></table></div>';
        }

        window.closeModal = function(modalId) {
            document.getElementById(modalId).classList.add('hidden');
        }

        window.filterRisco = function(nivel) {
            const cards = document.querySelectorAll('.patient-risk-card');
            cards.forEach(card => {
                if (nivel === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = card.dataset.risk === nivel ? 'block' : 'none';
                }
            });
        }

        // Initialize charts on load
        setTimeout(initFinancialCharts, 100);
    `;
}