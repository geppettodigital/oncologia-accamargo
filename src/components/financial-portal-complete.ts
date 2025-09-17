// Portal Financeiro LAURA - Versão Completa para Integração no Portal Principal
export function generateFinancialPortalHTML(): string {
    return `
        <!-- Portal Financeiro LAURA - Sistema Preditivo de Gestão -->
        <div id="financial-portal-container" class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
            <!-- Professional Header -->
            <div class="glass-premium sticky top-0 z-40 border-b border-gray-200/50 bg-white/95 backdrop-blur-xl">
                <div class="container mx-auto px-4 py-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <button onclick="goBack()" class="p-2 hover:bg-gray-100/80 rounded-xl transition-all">
                                <i class="fas fa-arrow-left text-gray-700"></i>
                            </button>
                            <div>
                                <h1 class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Portal de Gestão Financeira LAURA
                                </h1>
                                <p class="text-sm text-gray-500 font-medium">Sistema Inteligente de Análise Preditiva</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="status-badge-success px-4 py-2 rounded-full text-white text-sm font-semibold animate-pulse">
                                <i class="fas fa-brain mr-2"></i>IA LAURA Ativa
                            </span>
                            <button onclick="exportarRelatorio()" class="bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">
                                <i class="fas fa-download mr-2"></i>Exportar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- KPIs Premium Dashboard -->
            <div class="container mx-auto px-4 py-6">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                    ${generateKPICards()}
                </div>

                <!-- Main Content Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Left Column - 2 cols -->
                    <div class="lg:col-span-2 space-y-6">
                        ${generateDashboardCharts()}
                        ${generateOPMEControl()}
                        ${generateCommercialDossier()}
                    </div>

                    <!-- Right Column - 1 col -->
                    <div class="space-y-6">
                        ${generateJornadasRisco()}
                        ${generateLAURAAlerts()}
                        ${generateCriticalSuppliers()}
                    </div>
                </div>
            </div>

            <!-- Modals -->
            ${generateAllModals()}
        </div>

        <style>
            ${generateCustomStyles()}
        </style>
    `;
}

function generateKPICards(): string {
    const kpis = [
        {
            id: 'glosas_identificadas',
            icon: 'fa-exclamation-triangle',
            color: 'red',
            value: 'R$ 485.7K',
            label: 'Glosas Identificadas',
            trend: '+12.3% vs mês anterior',
            trendIcon: 'fa-arrow-up',
            trendColor: 'red'
        },
        {
            id: 'glosas_revertidas',
            icon: 'fa-check-circle',
            color: 'green',
            value: 'R$ 367.2K',
            label: 'Glosas Revertidas',
            trend: '75.6% taxa reversão',
            trendIcon: 'fa-arrow-up',
            trendColor: 'green'
        },
        {
            id: 'roi_otimizacao',
            icon: 'fa-chart-line',
            color: 'blue',
            value: '287%',
            label: 'ROI Otimização',
            trend: 'Meta superada',
            trendIcon: 'fa-trophy',
            trendColor: 'blue'
        },
        {
            id: 'tempo_reversao',
            icon: 'fa-clock',
            color: 'purple',
            value: '4.2 dias',
            label: 'Tempo Médio Reversão',
            trend: 'Redução de 2.1 dias',
            trendIcon: 'fa-arrow-down',
            trendColor: 'purple'
        },
        {
            id: 'controle_opme',
            icon: 'fa-microscope',
            color: 'amber',
            value: '98.7%',
            label: 'Controle OPME',
            trend: 'Compliance total',
            trendIcon: 'fa-shield-alt',
            trendColor: 'amber'
        }
    ];

    return kpis.map(kpi => `
        <div class="kpi-card-premium rounded-xl p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer" onclick="showExtratoKPI('${kpi.id}')">
            <div class="relative">
                <div class="flex justify-between items-start mb-3">
                    <div class="p-3 bg-gradient-to-br from-${kpi.color}-500 to-${kpi.color}-600 rounded-xl shadow-lg">
                        <i class="fas ${kpi.icon} text-white text-xl"></i>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600" onclick="event.stopPropagation(); showExtratoKPI('${kpi.id}')">
                        <i class="fas fa-file-alt"></i>
                    </button>
                </div>
                <div class="text-3xl font-bold text-gray-800 mb-1">${kpi.value}</div>
                <div class="text-sm text-gray-600 font-medium">${kpi.label}</div>
                <div class="text-xs text-${kpi.trendColor}-600 font-semibold mt-2">
                    <i class="fas ${kpi.trendIcon} mr-1"></i>${kpi.trend}
                </div>
            </div>
        </div>
    `).join('');
}

function generateDashboardCharts(): string {
    return `
        <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-lg font-bold text-gray-800 mb-4">Dashboard de Análise Preditiva</h3>
            <div class="grid grid-cols-2 gap-4">
                <div class="chart-container">
                    <canvas id="glosasTrendChart" width="300" height="200"></canvas>
                </div>
                <div class="chart-container">
                    <canvas id="reversaoChart" width="300" height="200"></canvas>
                </div>
            </div>
        </div>
    `;
}

function generateOPMEControl(): string {
    const items = [
        { material: 'Stent Coronário', fornecedor: 'MedTech Inc', valor: 'R$ 12.450', status: 'Análise', statusColor: 'yellow', code: 'ST-2024-001' },
        { material: 'Prótese de Quadril', fornecedor: 'OrthoLife', valor: 'R$ 28.900', status: 'Aprovado', statusColor: 'green', code: 'PQ-2024-002' },
        { material: 'Marca-passo', fornecedor: 'CardioTech', valor: 'R$ 45.200', status: 'Análise', statusColor: 'yellow', code: 'MP-2024-003' },
        { material: 'Válvula Cardíaca', fornecedor: 'ValveMed', valor: 'R$ 67.800', status: 'Aprovado', statusColor: 'green', code: 'VC-2024-004' },
        { material: 'Prótese de Joelho', fornecedor: 'JointPro', valor: 'R$ 34.500', status: 'Pendente', statusColor: 'red', code: 'PJ-2024-005' }
    ];

    return `
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
                        ${items.map(item => `
                        <tr class="border-b border-gray-100 hover:bg-gray-50 data-table-row">
                            <td class="py-3 text-sm">${item.material}</td>
                            <td class="py-3 text-sm text-gray-600">${item.fornecedor}</td>
                            <td class="py-3 text-sm font-semibold">${item.valor}</td>
                            <td class="py-3">
                                <span class="px-2 py-1 bg-${item.statusColor}-100 text-${item.statusColor}-700 rounded-full text-xs">
                                    ${item.status}
                                </span>
                            </td>
                            <td class="py-3 text-center">
                                <button onclick="showOPMEDetail('${item.code}')" class="text-blue-600 hover:text-blue-800">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function generateCommercialDossier(): string {
    return `
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 commercial-card">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-bold text-gray-800">
                    <i class="fas fa-briefcase mr-2 text-blue-600"></i>
                    Dossiê Comercial - Negociação com Operadoras
                </h3>
                <button onclick="showDossierComercial()" class="text-blue-600 hover:text-blue-800">
                    <i class="fas fa-expand"></i>
                </button>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div class="bg-white/80 backdrop-blur rounded-lg p-3">
                    <p class="text-xs text-gray-600 mb-1">Taxa Aprovação</p>
                    <p class="text-xl font-bold text-blue-700">92.5%</p>
                    <p class="text-xs text-green-600 mt-1">↑ 3.2% este mês</p>
                </div>
                <div class="bg-white/80 backdrop-blur rounded-lg p-3">
                    <p class="text-xs text-gray-600 mb-1">Tempo Médio</p>
                    <p class="text-xl font-bold text-blue-700">3.8 dias</p>
                    <p class="text-xs text-green-600 mt-1">↓ 1.2 dias</p>
                </div>
                <div class="bg-white/80 backdrop-blur rounded-lg p-3">
                    <p class="text-xs text-gray-600 mb-1">Valor Negociado</p>
                    <p class="text-xl font-bold text-blue-700">R$ 2.4M</p>
                    <p class="text-xs text-green-600 mt-1">↑ R$ 450K</p>
                </div>
            </div>
            <div class="mt-4 p-3 bg-white/60 rounded-lg">
                <p class="text-sm font-semibold text-gray-800 mb-2">Principais Operadoras</p>
                <div class="space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-700">Unimed</span>
                        <div class="flex items-center gap-2">
                            <div class="w-24 bg-gray-200 rounded-full h-2">
                                <div class="bg-green-500 h-2 rounded-full" style="width: 95%"></div>
                            </div>
                            <span class="text-xs font-bold text-green-600">95%</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-700">SulAmérica</span>
                        <div class="flex items-center gap-2">
                            <div class="w-24 bg-gray-200 rounded-full h-2">
                                <div class="bg-green-500 h-2 rounded-full" style="width: 88%"></div>
                            </div>
                            <span class="text-xs font-bold text-green-600">88%</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-700">Bradesco Saúde</span>
                        <div class="flex items-center gap-2">
                            <div class="w-24 bg-gray-200 rounded-full h-2">
                                <div class="bg-yellow-500 h-2 rounded-full" style="width: 76%"></div>
                            </div>
                            <span class="text-xs font-bold text-yellow-600">76%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateJornadasRisco(): string {
    return `
        <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-bold text-gray-800">Jornadas em Risco</h3>
                <button onclick="showJornadasRisco()" class="text-blue-600 text-sm hover:underline">Ver Todos</button>
            </div>
            <div class="space-y-3">
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="font-semibold text-gray-800">Maria Silva</p>
                            <p class="text-xs text-gray-600">ID: #45123</p>
                        </div>
                        <span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold risk-indicator">87%</span>
                    </div>
                    <p class="text-sm text-gray-700 mt-1">Alto risco de glosa - Quimioterapia</p>
                </div>
                <div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="font-semibold text-gray-800">João Santos</p>
                            <p class="text-xs text-gray-600">ID: #45124</p>
                        </div>
                        <span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">65%</span>
                    </div>
                    <p class="text-sm text-gray-700 mt-1">Documentação pendente - Cirurgia</p>
                </div>
                <div class="p-3 bg-green-50 border-l-4 border-green-500 rounded-lg">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="font-semibold text-gray-800">Ana Costa</p>
                            <p class="text-xs text-gray-600">ID: #45125</p>
                        </div>
                        <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">35%</span>
                    </div>
                    <p class="text-sm text-gray-700 mt-1">Monitoramento preventivo</p>
                </div>
            </div>
        </div>
    `;
}

function generateLAURAAlerts(): string {
    return `
        <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 pulse-dot">
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
    `;
}

function generateCriticalSuppliers(): string {
    return `
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-bold text-gray-800">
                    <i class="fas fa-exclamation-circle mr-2 text-amber-600"></i>
                    Fornecedores Críticos
                </h3>
                <button onclick="showFornecedoresCriticos()" class="text-amber-600 hover:text-amber-800">
                    <i class="fas fa-expand"></i>
                </button>
            </div>
            <div class="space-y-3">
                <div class="p-3 bg-white/70 backdrop-blur rounded-lg border-l-3 border-amber-500">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="font-semibold text-gray-800">MedTech Inc</p>
                            <p class="text-xs text-gray-600">234 materiais - R$ 2.8M</p>
                        </div>
                        <span class="text-amber-600 font-bold">⚠️</span>
                    </div>
                    <p class="text-xs text-amber-700 mt-1">Atraso médio: 3.2 dias</p>
                </div>
                <div class="p-3 bg-white/70 backdrop-blur rounded-lg">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="font-semibold text-gray-800">CardioTech</p>
                            <p class="text-xs text-gray-600">156 materiais - R$ 3.2M</p>
                        </div>
                        <span class="text-green-600">✓</span>
                    </div>
                    <p class="text-xs text-green-700 mt-1">Performance: 99.5%</p>
                </div>
            </div>
        </div>
    `;
}

function generateAllModals(): string {
    return `
        ${generateModalJornadasRisco()}
        ${generateModalOPMEDetail()}
        ${generateModalKPIExtrato()}
        ${generateModalDossierComercial()}
        ${generateModalFornecedoresCriticos()}
    `;
}

function generateModalJornadasRisco(): string {
    return `
        <div id="modalJornadasRisco" class="fixed inset-0 z-50 hidden modal-backdrop">
            <div class="absolute inset-0" onclick="closeModal('modalJornadasRisco')"></div>
            <div class="absolute inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden modal-content animate-fade-up">
                <div class="h-full flex flex-col">
                    <div class="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                        <div class="flex justify-between items-center">
                            <h2 class="text-2xl font-bold">Jornadas (Pacientes) em Risco - Visão Completa</h2>
                            <button onclick="closeModal('modalJornadasRisco')" class="text-white/80 hover:text-white">
                                <i class="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                        <div class="mt-4 flex gap-2">
                            <button onclick="filterRisco('all')" class="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30">Todos (31)</button>
                            <button onclick="filterRisco('alto')" class="px-4 py-2 bg-red-800/50 rounded-lg hover:bg-red-800/70">Alto Risco (10)</button>
                            <button onclick="filterRisco('medio')" class="px-4 py-2 bg-yellow-600/50 rounded-lg hover:bg-yellow-600/70">Médio Risco (10)</button>
                            <button onclick="filterRisco('baixo')" class="px-4 py-2 bg-green-600/50 rounded-lg hover:bg-green-600/70">Baixo Risco (11)</button>
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
    `;
}

function generatePatientRiskCards(): string {
    const patients = [
        // Alto Risco (10 pacientes)
        { nome: 'Maria Silva', id: '45123', risco: 87, nivel: 'alto', diagnostico: 'CA Mama', tempo: '3 meses' },
        { nome: 'João Santos', id: '45124', risco: 92, nivel: 'alto', diagnostico: 'CA Pulmão', tempo: '4 meses' },
        { nome: 'Ana Costa', id: '45125', risco: 88, nivel: 'alto', diagnostico: 'CA Colorretal', tempo: '2 meses' },
        { nome: 'Pedro Lima', id: '45126', risco: 95, nivel: 'alto', diagnostico: 'CA Próstata', tempo: '5 meses' },
        { nome: 'Julia Ferreira', id: '45127', risco: 90, nivel: 'alto', diagnostico: 'Leucemia', tempo: '6 meses' },
        { nome: 'Carlos Mendes', id: '45128', risco: 86, nivel: 'alto', diagnostico: 'CA Gástrico', tempo: '3 meses' },
        { nome: 'Patricia Souza', id: '45129', risco: 93, nivel: 'alto', diagnostico: 'Linfoma', tempo: '4 meses' },
        { nome: 'Roberto Alves', id: '45130', risco: 89, nivel: 'alto', diagnostico: 'CA Ovário', tempo: '2 meses' },
        { nome: 'Fernanda Cruz', id: '45131', risco: 91, nivel: 'alto', diagnostico: 'CA Pâncreas', tempo: '5 meses' },
        { nome: 'Miguel Torres', id: '45132', risco: 85, nivel: 'alto', diagnostico: 'Mieloma', tempo: '3 meses' },
        // Médio Risco (10 pacientes)
        { nome: 'Lucas Oliveira', id: '45133', risco: 65, nivel: 'medio', diagnostico: 'CA Tireoide', tempo: '2 meses' },
        { nome: 'Beatriz Lima', id: '45134', risco: 72, nivel: 'medio', diagnostico: 'CA Rim', tempo: '3 meses' },
        { nome: 'André Castro', id: '45135', risco: 68, nivel: 'medio', diagnostico: 'CA Bexiga', tempo: '4 meses' },
        { nome: 'Sofia Rocha', id: '45136', risco: 70, nivel: 'medio', diagnostico: 'CA Endométrio', tempo: '2 meses' },
        { nome: 'Gabriel Melo', id: '45137', risco: 73, nivel: 'medio', diagnostico: 'CA Fígado', tempo: '5 meses' },
        { nome: 'Isabella Santos', id: '45138', risco: 67, nivel: 'medio', diagnostico: 'Melanoma', tempo: '3 meses' },
        { nome: 'Thiago Costa', id: '45139', risco: 71, nivel: 'medio', diagnostico: 'CA Esôfago', tempo: '4 meses' },
        { nome: 'Laura Barbosa', id: '45140', risco: 69, nivel: 'medio', diagnostico: 'CA Cérebro', tempo: '2 meses' },
        { nome: 'Rafael Dias', id: '45141', risco: 74, nivel: 'medio', diagnostico: 'Sarcoma', tempo: '3 meses' },
        { nome: 'Camila Nunes', id: '45142', risco: 66, nivel: 'medio', diagnostico: 'CA Testículo', tempo: '2 meses' },
        // Baixo Risco (11 pacientes)
        { nome: 'Diego Martins', id: '45143', risco: 35, nivel: 'baixo', diagnostico: 'CA Pele', tempo: '1 mês' },
        { nome: 'Amanda Vieira', id: '45144', risco: 42, nivel: 'baixo', diagnostico: 'CA in situ', tempo: '2 meses' },
        { nome: 'Felipe Correia', id: '45145', risco: 38, nivel: 'baixo', diagnostico: 'Tumor Benigno', tempo: '1 mês' },
        { nome: 'Mariana Gomes', id: '45146', risco: 40, nivel: 'baixo', diagnostico: 'Pré-cancer', tempo: '3 meses' },
        { nome: 'Bruno Cardoso', id: '45147', risco: 37, nivel: 'baixo', diagnostico: 'Displasia', tempo: '2 meses' },
        { nome: 'Leticia Pinto', id: '45148', risco: 43, nivel: 'baixo', diagnostico: 'Adenoma', tempo: '1 mês' },
        { nome: 'Rodrigo Cunha', id: '45149', risco: 36, nivel: 'baixo', diagnostico: 'Papiloma', tempo: '2 meses' },
        { nome: 'Natalia Freitas', id: '45150', risco: 41, nivel: 'baixo', diagnostico: 'Lipoma', tempo: '1 mês' },
        { nome: 'Eduardo Machado', id: '45151', risco: 39, nivel: 'baixo', diagnostico: 'Fibroma', tempo: '3 meses' },
        { nome: 'Juliana Ramos', id: '45152', risco: 44, nivel: 'baixo', diagnostico: 'Cisto', tempo: '2 meses' },
        { nome: 'Henrique Moreira', id: '45153', risco: 34, nivel: 'baixo', diagnostico: 'Pólipo', tempo: '1 mês' }
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
                    <i class="fas fa-exclamation-circle mr-1"></i>
                    ${p.nivel === 'alto' ? 'Documentação incompleta - Alto risco de glosa' : p.nivel === 'medio' ? 'Autorização pendente - Risco moderado' : 'Monitoramento preventivo - Baixo risco'}
                </p>
            </div>
        </div>
    `).join('');
}

function generateModalOPMEDetail(): string {
    return `
        <div id="modalOPMEDetail" class="fixed inset-0 z-50 hidden modal-backdrop">
            <div class="absolute inset-0" onclick="closeModal('modalOPMEDetail')"></div>
            <div class="absolute inset-8 md:inset-16 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto modal-content animate-slide-in">
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
    `;
}

function generateOPMEDetailContent(): string {
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
                    <p class="text-sm"><span class="font-semibold">Médico:</span> Dr. Carlos Eduardo Santos - CRM 12345</p>
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

function generateModalKPIExtrato(): string {
    return `
        <div id="modalKPIExtrato" class="fixed inset-0 z-50 hidden modal-backdrop">
            <div class="absolute inset-0" onclick="closeModal('modalKPIExtrato')"></div>
            <div class="absolute inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden modal-content">
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

function generateModalDossierComercial(): string {
    return `
        <div id="modalDossierComercial" class="fixed inset-0 z-50 hidden modal-backdrop">
            <div class="absolute inset-0" onclick="closeModal('modalDossierComercial')"></div>
            <div class="absolute inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden modal-content">
                <div class="h-full flex flex-col">
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                        <div class="flex justify-between items-center">
                            <h2 class="text-2xl font-bold">Dossiê Comercial - Análise Completa</h2>
                            <button onclick="closeModal('modalDossierComercial')" class="text-white/80 hover:text-white">
                                <i class="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto p-6">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div class="lg:col-span-2">
                                <h3 class="font-bold text-gray-800 mb-4">Análise de Performance por Operadora</h3>
                                <div class="space-y-4">
                                    ${['Unimed', 'SulAmérica', 'Bradesco Saúde', 'Amil', 'Porto Seguro'].map((op, i) => {
                                        const perf = [95, 88, 76, 82, 91][i];
                                        const valor = [1.2, 0.9, 0.7, 0.8, 0.6][i];
                                        return `
                                        <div class="p-4 bg-gray-50 rounded-lg">
                                            <div class="flex justify-between items-start mb-2">
                                                <h4 class="font-semibold text-gray-800">${op}</h4>
                                                <span class="px-2 py-1 ${perf >= 90 ? 'bg-green-100 text-green-700' : perf >= 80 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'} rounded-full text-xs font-bold">
                                                    ${perf}% aprovação
                                                </span>
                                            </div>
                                            <div class="grid grid-cols-3 gap-3 text-sm">
                                                <div>
                                                    <p class="text-gray-600">Volume Negociado</p>
                                                    <p class="font-bold">R$ ${valor}M</p>
                                                </div>
                                                <div>
                                                    <p class="text-gray-600">Tempo Médio</p>
                                                    <p class="font-bold">${(5 - i * 0.5).toFixed(1)} dias</p>
                                                </div>
                                                <div>
                                                    <p class="text-gray-600">Glosas</p>
                                                    <p class="font-bold text-red-600">${(100 - perf).toFixed(1)}%</p>
                                                </div>
                                            </div>
                                        </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-800 mb-4">Métricas de Negociação</h3>
                                <div class="space-y-3">
                                    <div class="p-4 bg-blue-50 rounded-lg">
                                        <p class="text-sm text-gray-600">Taxa Média de Aprovação</p>
                                        <p class="text-2xl font-bold text-blue-700">86.4%</p>
                                        <p class="text-xs text-green-600 mt-1">↑ 3.2% este mês</p>
                                    </div>
                                    <div class="p-4 bg-green-50 rounded-lg">
                                        <p class="text-sm text-gray-600">Economia Gerada</p>
                                        <p class="text-2xl font-bold text-green-700">R$ 2.4M</p>
                                        <p class="text-xs text-green-600 mt-1">↑ R$ 450K vs anterior</p>
                                    </div>
                                    <div class="p-4 bg-purple-50 rounded-lg">
                                        <p class="text-sm text-gray-600">Tempo Médio Resposta</p>
                                        <p class="text-2xl font-bold text-purple-700">3.8 dias</p>
                                        <p class="text-xs text-green-600 mt-1">↓ 1.2 dias</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateModalFornecedoresCriticos(): string {
    return `
        <div id="modalFornecedoresCriticos" class="fixed inset-0 z-50 hidden modal-backdrop">
            <div class="absolute inset-0" onclick="closeModal('modalFornecedoresCriticos')"></div>
            <div class="absolute inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden modal-content">
                <div class="h-full flex flex-col">
                    <div class="bg-gradient-to-r from-amber-600 to-orange-600 p-6 text-white">
                        <div class="flex justify-between items-center">
                            <h2 class="text-2xl font-bold">Fornecedores Críticos - Análise Detalhada</h2>
                            <button onclick="closeModal('modalFornecedoresCriticos')" class="text-white/80 hover:text-white">
                                <i class="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${['MedTech Inc', 'OrthoLife', 'CardioTech', 'ValveMed', 'JointPro'].map((forn, i) => {
                                const status = i < 2 ? 'critico' : 'normal';
                                return `
                                <div class="p-4 ${status === 'critico' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-gray-50'} rounded-lg">
                                    <div class="flex justify-between items-start mb-3">
                                        <h3 class="font-bold text-gray-800">${forn}</h3>
                                        ${status === 'critico' ? '<span class="text-red-600 text-xl">⚠️</span>' : '<span class="text-green-600">✓</span>'}
                                    </div>
                                    <div class="grid grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <p class="text-gray-600">Volume Total</p>
                                            <p class="font-bold">R$ ${(2.8 - i * 0.3).toFixed(1)}M</p>
                                        </div>
                                        <div>
                                            <p class="text-gray-600">Materiais</p>
                                            <p class="font-bold">${234 - i * 20}</p>
                                        </div>
                                        <div>
                                            <p class="text-gray-600">Compliance</p>
                                            <p class="font-bold ${status === 'critico' ? 'text-red-600' : 'text-green-600'}">${99 - i * 0.5}%</p>
                                        </div>
                                        <div>
                                            <p class="text-gray-600">Atraso Médio</p>
                                            <p class="font-bold ${status === 'critico' ? 'text-red-600' : ''}">${status === 'critico' ? `${3.2 - i * 0.5} dias` : 'Em dia'}</p>
                                        </div>
                                    </div>
                                    ${status === 'critico' ? `
                                    <div class="mt-3 pt-3 border-t border-red-200">
                                        <p class="text-xs text-red-700">
                                            <i class="fas fa-exclamation-triangle mr-1"></i>
                                            Ação necessária: Reunião de alinhamento agendada
                                        </p>
                                    </div>
                                    ` : ''}
                                </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateCustomStyles(): string {
    return `
        .glass-premium {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.08);
        }
        
        .kpi-card-premium {
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
        
        .status-badge-success {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }
        
        .modal-backdrop {
            backdrop-filter: blur(8px);
        }
        
        .modal-content {
            background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
            box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.3);
        }
        
        @keyframes fadeInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-fade-up { animation: fadeInUp 0.6s ease-out; }
        .animate-slide-in { animation: slideInRight 0.5s ease-out; }
        
        .pulse-dot {
            animation: pulse-dot 2s infinite;
        }
        
        @keyframes pulse-dot {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
        }
        
        .risk-indicator::after {
            content: '';
            position: absolute;
            top: -2px;
            right: -2px;
            width: 8px;
            height: 8px;
            background: #ef4444;
            border-radius: 50%;
            animation: pulse-dot 2s infinite;
        }
        
        .chart-container {
            background: linear-gradient(135deg, rgba(249, 250, 251, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%);
            border-radius: 16px;
            padding: 24px;
        }
        
        .data-table-row:hover {
            background: linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%);
        }
        
        .commercial-card {
            border-left: 4px solid #0ea5e9;
        }
    `;
}

export function generateFinancialPortalScripts(): string {
    return `
        // Portal Financeiro LAURA - Scripts
        console.log('Inicializando Portal Financeiro LAURA...');

        // Carregar script externo com funções globais
        (function() {
            const script = document.createElement('script');
            script.src = '/static/financial-portal-functions.js';
            script.onload = function() {
                console.log('Funções do Portal Financeiro carregadas com sucesso!');
                // Verificar se as funções foram carregadas
                if (window.showJornadasRisco && window.showOPMEDetail && window.showExtratoKPI) {
                    console.log('✅ Todas as funções de modal estão disponíveis');
                } else {
                    console.error('❌ Algumas funções de modal não foram carregadas');
                }
            };
            script.onerror = function() {
                console.error('Erro ao carregar script de funções do Portal Financeiro');
                // Fallback: definir funções inline caso o script externo falhe
                defineModalFunctions();
            };
            document.head.appendChild(script);
        })();

        // Função de fallback para definir as funções caso o script externo falhe
        function defineModalFunctions() {
            console.log('Definindo funções de modal como fallback...');
            
            window.showJornadasRisco = function() {
                console.log('Abrindo modal Jornadas em Risco (fallback)');
                const modal = document.getElementById('modalJornadasRisco');
                if (modal) {
                    modal.classList.remove('hidden');
                } else {
                    alert('Modal Jornadas em Risco não encontrado');
                }
            }

            window.showOPMEDetail = function(code) {
                console.log('Abrindo modal OPME Detail para código:', code, '(fallback)');
                const codeElement = document.getElementById('opme-code');
                if (codeElement) {
                    codeElement.textContent = code;
                }
                const modal = document.getElementById('modalOPMEDetail');
                if (modal) {
                    modal.classList.remove('hidden');
                } else {
                    alert('Modal OPME Detail não encontrado');
                }
            }

            window.showDossierComercial = function() {
                const modal = document.getElementById('modalDossierComercial');
                if (modal) modal.classList.remove('hidden');
            }

            window.showFornecedoresCriticos = function() {
                const modal = document.getElementById('modalFornecedoresCriticos');
                if (modal) modal.classList.remove('hidden');
            }

            window.showExtratoKPI = function(type) {
                console.log('Abrindo extrato KPI:', type, '(fallback)');
                const modal = document.getElementById('modalKPIExtrato');
                const header = document.getElementById('modalKPIExtratoHeader');
                const title = document.getElementById('modalKPIExtratoTitle');
                const content = document.getElementById('modalKPIExtratoContent');
                
                const extratos = {
                    'glosas_identificadas': {
                        title: 'Extrato de Glosas Identificadas',
                        color: 'from-red-600 to-red-700',
                        content: '<div>Carregando extrato de glosas identificadas...</div>'
                    },
                    'glosas_revertidas': {
                        title: 'Extrato de Glosas Revertidas',
                        color: 'from-green-600 to-green-700',
                        content: '<div>Carregando extrato de glosas revertidas...</div>'
                    },
                    'roi_otimizacao': {
                        title: 'ROI de Otimização',
                        color: 'from-blue-600 to-blue-700',
                        content: '<div>Carregando extrato de ROI...</div>'
                    },
                    'tempo_reversao': {
                        title: 'Tempo Médio de Reversão',
                        color: 'from-purple-600 to-purple-700',
                        content: '<div>Carregando extrato de tempo de reversão...</div>'
                    },
                    'controle_opme': {
                        title: 'Controle OPME',
                        color: 'from-amber-600 to-amber-700',
                        content: '<div>Carregando extrato de controle OPME...</div>'
                    }
                };
                
                const extrato = extratos[type];
                if (extrato && modal && header && title && content) {
                    title.textContent = extrato.title;
                    header.className = 'bg-gradient-to-r ' + extrato.color + ' p-6 text-white';
                    content.innerHTML = extrato.content;
                    modal.classList.remove('hidden');
                    
                    // Chamar função do script externo para gerar conteúdo real
                    if (window.generateKPIExtratoContent) {
                        content.innerHTML = window.generateKPIExtratoContent(type);
                    }
                } else {
                    alert('Modal de extrato KPI não encontrado para tipo: ' + type);
                }
            }

            window.closeModal = function(modalId) {
                const modal = document.getElementById(modalId);
                if (modal) modal.classList.add('hidden');
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

            window.exportarRelatorio = function() {
                alert('Gerando relatório completo do Portal Financeiro LAURA...');
            }
        }

        // As funções de geração de conteúdo dos extratos KPI foram movidas para o script externo
        // /static/financial-portal-functions.js para garantir escopo global

        // Adicionar listener para verificar se os botões estão funcionando
        document.addEventListener('click', function(e) {
            // Log para debug de cliques em botões
            if (e.target && e.target.onclick) {
                console.log('Botão clicado:', e.target.textContent, 'Função:', e.target.onclick.toString().substring(0, 50));
            }
        });

        // Initialize Charts
        function initFinancialCharts() {
            // Glosas Trend Chart
            const ctx1 = document.getElementById('glosasTrendChart');
            if (ctx1 && ctx1.getContext && typeof Chart !== 'undefined') {
                new Chart(ctx1.getContext('2d'), {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                        datasets: [{
                            label: 'Glosas Identificadas (R$ mil)',
                            data: [320, 380, 420, 390, 450, 486],
                            borderColor: 'rgb(239, 68, 68)',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: true }
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
            const ctx2 = document.getElementById('reversaoChart');
            if (ctx2 && ctx2.getContext && typeof Chart !== 'undefined') {
                new Chart(ctx2.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                        datasets: [{
                            label: 'Taxa de Reversão (%)',
                            data: [65, 70, 72, 68, 74, 76],
                            backgroundColor: 'rgba(34, 197, 94, 0.8)'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: true }
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

        // Initialize on load
        if (typeof Chart !== 'undefined') {
            setTimeout(initFinancialCharts, 100);
        } else {
            // Load Chart.js if not available
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.onload = function() {
                setTimeout(initFinancialCharts, 100);
            };
            document.head.appendChild(script);
        }

        console.log('Portal Financeiro LAURA carregado com sucesso!');
    `;
}