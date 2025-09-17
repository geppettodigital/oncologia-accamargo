// Portal Financeiro LAURA - Funções Globais
console.log('Carregando funções do Portal Financeiro LAURA...');

// Funções das Modais - DEFINITIVAMENTE GLOBAIS
window.showJornadasRisco = function() {
    console.log('Abrindo modal Jornadas em Risco');
    const modal = document.getElementById('modalJornadasRisco');
    if (modal) {
        modal.classList.remove('hidden');
        console.log('Modal Jornadas em Risco aberta com sucesso');
    } else {
        console.error('Modal Jornadas em Risco não encontrada no DOM');
        // Tentar criar a modal se não existir
        alert('Funcionalidade em carregamento. Por favor, aguarde e tente novamente.');
    }
}

window.closeJornadasRisco = function() {
    const modal = document.getElementById('modalJornadasRisco');
    if (modal) {
        modal.classList.add('hidden');
    }
}

window.showOPMEDetail = function(code) {
    console.log('Abrindo modal OPME Detail para código:', code);
    const modal = document.getElementById('modalOPMEDetail');
    if (modal) {
        modal.classList.remove('hidden');
        // Atualizar código se existir elemento
        const codeElement = document.getElementById('opme-code');
        if (codeElement) {
            codeElement.textContent = code;
        }
        console.log('Modal OPME Detail aberta com sucesso');
    } else {
        console.error('Modal OPME Detail não encontrada no DOM');
        alert('Detalhes do material ' + code + '\n\nFuncionalidade em carregamento.');
    }
}

window.closeOPMEDetail = function() {
    const modal = document.getElementById('modalOPMEDetail');
    if (modal) {
        modal.classList.add('hidden');
    }
}

window.showExtratoKPI = function(type) {
    console.log('Abrindo extrato KPI do tipo:', type);
    const modal = document.getElementById('modalKPIExtrato');
    
    if (!modal) {
        console.error('Modal KPI Extrato não encontrada');
        alert('Extrato de ' + type + '\n\nFuncionalidade em carregamento.');
        return;
    }
    
    const header = document.getElementById('kpiExtratoHeader') || document.getElementById('modalKPIExtratoHeader');
    const title = document.getElementById('kpiExtratoTitle') || document.getElementById('modalKPIExtratoTitle');
    const subtitle = document.getElementById('kpiExtratoSubtitle');
    const content = document.getElementById('kpiExtratoContent') || document.getElementById('modalKPIExtratoContent');
    
    const extratos = {
        'glosas_identificadas': {
            title: 'Extrato: Glosas Identificadas',
            subtitle: 'R$ 485.700 - 127 ocorrências',
            headerClass: 'bg-gradient-to-r from-red-600 to-red-700',
            content: generateGlosasIdentificadasContent()
        },
        'glosas_revertidas': {
            title: 'Extrato: Glosas Revertidas', 
            subtitle: 'R$ 367.200 - 96 casos revertidos',
            headerClass: 'bg-gradient-to-r from-green-600 to-green-700',
            content: generateGlosasRevertidasContent()
        },
        'roi_otimizacao': {
            title: 'ROI de Otimização',
            subtitle: '287% - R$ 2.4M economizados',
            headerClass: 'bg-gradient-to-r from-blue-600 to-blue-700',
            content: generateROIContent()
        },
        'tempo_reversao': {
            title: 'Tempo Médio de Reversão',
            subtitle: '4.2 dias - Redução de 2.1 dias',
            headerClass: 'bg-gradient-to-r from-purple-600 to-purple-700',
            content: generateTempoReversaoContent()
        },
        'controle_opme': {
            title: 'Controle OPME',
            subtitle: '98.7% compliance - 1.247 materiais',
            headerClass: 'bg-gradient-to-r from-amber-600 to-amber-700',
            content: generateControleOPMEContent()
        },
        // Aliases para compatibilidade
        'identificadas': {
            title: 'Extrato: Glosas Identificadas',
            subtitle: 'R$ 485.700 - 127 ocorrências',
            headerClass: 'bg-gradient-to-r from-red-600 to-red-700',
            content: generateGlosasIdentificadasContent()
        },
        'revertidas': {
            title: 'Extrato: Glosas Revertidas',
            subtitle: 'R$ 367.200 - 96 casos revertidos',
            headerClass: 'bg-gradient-to-r from-green-600 to-green-700',
            content: generateGlosasRevertidasContent()
        },
        'roi': {
            title: 'ROI de Otimização',
            subtitle: '287% - R$ 2.4M economizados',
            headerClass: 'bg-gradient-to-r from-blue-600 to-blue-700',
            content: generateROIContent()
        },
        'tempo': {
            title: 'Tempo Médio de Reversão',
            subtitle: '4.2 dias - Redução de 2.1 dias',
            headerClass: 'bg-gradient-to-r from-purple-600 to-purple-700',
            content: generateTempoReversaoContent()
        },
        'opme': {
            title: 'Controle OPME',
            subtitle: '98.7% compliance - 1.247 materiais',
            headerClass: 'bg-gradient-to-r from-amber-600 to-amber-700',
            content: generateControleOPMEContent()
        }
    };
    
    const extrato = extratos[type];
    if (extrato) {
        if (title) title.textContent = extrato.title;
        if (subtitle) subtitle.textContent = extrato.subtitle;
        if (header) {
            header.className = extrato.headerClass + ' p-6 text-white rounded-t-2xl';
        }
        if (content) {
            content.innerHTML = extrato.content;
        }
        modal.classList.remove('hidden');
        console.log('Modal KPI Extrato aberta com sucesso para:', type);
    } else {
        console.error('Tipo de extrato não reconhecido:', type);
    }
}

window.closeExtratoKPI = function() {
    const modal = document.getElementById('modalKPIExtrato');
    if (modal) {
        modal.classList.add('hidden');
    }
}

window.openDosseComercial = function() {
    console.log('Abrindo Dossiê Comercial');
    const modal = document.getElementById('modalDosseComercial');
    if (modal) {
        modal.classList.remove('hidden');
    } else {
        alert('Dossiê Comercial\n\nFuncionalidade em desenvolvimento.');
    }
}

window.closeDosseComercial = function() {
    const modal = document.getElementById('modalDosseComercial');
    if (modal) {
        modal.classList.add('hidden');
    }
}

window.filterRisco = function(nivel) {
    console.log('Filtrando pacientes por risco:', nivel);
    const cards = document.querySelectorAll('.patient-risk-card');
    cards.forEach(card => {
        if (nivel === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = card.dataset.risk === nivel ? 'block' : 'none';
        }
    });
}

// Funções auxiliares para gerar conteúdo dos extratos
function generateGlosasIdentificadasContent() {
    return `
        <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-red-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Total Identificado</p>
                    <p class="text-2xl font-bold text-red-600">R$ 485.700</p>
                </div>
                <div class="bg-red-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Casos</p>
                    <p class="text-2xl font-bold text-red-600">127</p>
                </div>
                <div class="bg-red-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Taxa Crescimento</p>
                    <p class="text-2xl font-bold text-red-600">+12.3%</p>
                </div>
            </div>
            <h4 class="font-bold text-gray-800">Detalhamento</h4>
            <table class="w-full">
                <thead>
                    <tr class="border-b">
                        <th class="text-left py-2">Código</th>
                        <th class="text-left py-2">Paciente</th>
                        <th class="text-left py-2">Valor</th>
                        <th class="text-left py-2">Motivo</th>
                        <th class="text-left py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b">
                        <td class="py-2">GL-2024-001</td>
                        <td class="py-2">Maria Silva</td>
                        <td class="py-2 font-semibold">R$ 12.450</td>
                        <td class="py-2">Doc. Incompleta</td>
                        <td class="py-2"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Pendente</span></td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-2">GL-2024-002</td>
                        <td class="py-2">João Santos</td>
                        <td class="py-2 font-semibold">R$ 8.900</td>
                        <td class="py-2">Código Incorreto</td>
                        <td class="py-2"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Revisão</span></td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-2">GL-2024-003</td>
                        <td class="py-2">Ana Costa</td>
                        <td class="py-2 font-semibold">R$ 15.200</td>
                        <td class="py-2">Autorização Vencida</td>
                        <td class="py-2"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Pendente</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function generateGlosasRevertidasContent() {
    return `
        <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-green-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Total Revertido</p>
                    <p class="text-2xl font-bold text-green-600">R$ 367.200</p>
                </div>
                <div class="bg-green-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Casos Revertidos</p>
                    <p class="text-2xl font-bold text-green-600">96</p>
                </div>
                <div class="bg-green-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Taxa Sucesso</p>
                    <p class="text-2xl font-bold text-green-600">75.6%</p>
                </div>
            </div>
            <h4 class="font-bold text-gray-800">Histórico de Reversões</h4>
            <table class="w-full">
                <thead>
                    <tr class="border-b">
                        <th class="text-left py-2">Código</th>
                        <th class="text-left py-2">Paciente</th>
                        <th class="text-left py-2">Valor</th>
                        <th class="text-left py-2">Data</th>
                        <th class="text-left py-2">Tempo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b">
                        <td class="py-2">RV-2024-001</td>
                        <td class="py-2">Ana Costa</td>
                        <td class="py-2 font-semibold text-green-600">R$ 15.200</td>
                        <td class="py-2">10/01/2025</td>
                        <td class="py-2">3 dias</td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-2">RV-2024-002</td>
                        <td class="py-2">Pedro Lima</td>
                        <td class="py-2 font-semibold text-green-600">R$ 9.800</td>
                        <td class="py-2">12/01/2025</td>
                        <td class="py-2">5 dias</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function generateROIContent() {
    return `
        <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-blue-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">ROI Total</p>
                    <p class="text-2xl font-bold text-blue-600">287%</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Economia Gerada</p>
                    <p class="text-2xl font-bold text-blue-600">R$ 2.4M</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Investimento</p>
                    <p class="text-2xl font-bold text-blue-600">R$ 836K</p>
                </div>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold text-gray-800 mb-3">Breakdown de Economias</h4>
                <div class="space-y-2">
                    <div class="flex justify-between items-center py-2 border-b">
                        <span>Prevenção de Glosas</span>
                        <span class="font-bold text-green-600">R$ 1.2M</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b">
                        <span>Otimização OPME</span>
                        <span class="font-bold text-green-600">R$ 680K</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b">
                        <span>Redução Retrabalho</span>
                        <span class="font-bold text-green-600">R$ 320K</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b">
                        <span>Agilidade Processos</span>
                        <span class="font-bold text-green-600">R$ 200K</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateTempoReversaoContent() {
    return `
        <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-purple-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Tempo Médio</p>
                    <p class="text-2xl font-bold text-purple-600">4.2 dias</p>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Melhor Tempo</p>
                    <p class="text-2xl font-bold text-purple-600">1 dia</p>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Redução</p>
                    <p class="text-2xl font-bold text-purple-600">-2.1 dias</p>
                </div>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold text-gray-800 mb-3">Evolução Temporal</h4>
                <table class="w-full">
                    <thead>
                        <tr class="border-b">
                            <th class="text-left py-2">Mês</th>
                            <th class="text-left py-2">Tempo Médio</th>
                            <th class="text-left py-2">Variação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="py-2">Janeiro</td>
                            <td class="py-2">6.3 dias</td>
                            <td class="py-2 text-red-600">Base</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-2">Fevereiro</td>
                            <td class="py-2">5.8 dias</td>
                            <td class="py-2 text-green-600">-0.5 dias</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-2">Março</td>
                            <td class="py-2">5.2 dias</td>
                            <td class="py-2 text-green-600">-0.6 dias</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-2">Abril</td>
                            <td class="py-2">4.9 dias</td>
                            <td class="py-2 text-green-600">-0.3 dias</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-2">Maio</td>
                            <td class="py-2">4.5 dias</td>
                            <td class="py-2 text-green-600">-0.4 dias</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-2">Junho</td>
                            <td class="py-2 font-bold">4.2 dias</td>
                            <td class="py-2 text-green-600 font-bold">-0.3 dias</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function generateControleOPMEContent() {
    return `
        <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-amber-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Compliance</p>
                    <p class="text-2xl font-bold text-amber-600">98.7%</p>
                </div>
                <div class="bg-amber-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Materiais Analisados</p>
                    <p class="text-2xl font-bold text-amber-600">1.247</p>
                </div>
                <div class="bg-amber-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600">Economia</p>
                    <p class="text-2xl font-bold text-amber-600">R$ 892K</p>
                </div>
            </div>
            <h4 class="font-bold text-gray-800">Análise por Fornecedor</h4>
            <table class="w-full">
                <thead>
                    <tr class="border-b">
                        <th class="text-left py-2">Fornecedor</th>
                        <th class="text-left py-2">Materiais</th>
                        <th class="text-left py-2">Valor Total</th>
                        <th class="text-left py-2">Compliance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b">
                        <td class="py-2">MedTech Inc</td>
                        <td class="py-2">234</td>
                        <td class="py-2 font-semibold">R$ 2.8M</td>
                        <td class="py-2"><span class="text-green-600 font-bold">99.2%</span></td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-2">OrthoLife</td>
                        <td class="py-2">189</td>
                        <td class="py-2 font-semibold">R$ 1.9M</td>
                        <td class="py-2"><span class="text-green-600 font-bold">98.4%</span></td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-2">CardioTech</td>
                        <td class="py-2">156</td>
                        <td class="py-2 font-semibold">R$ 3.2M</td>
                        <td class="py-2"><span class="text-green-600 font-bold">99.5%</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// Verificar se as funções foram carregadas
console.log('✅ Funções do Portal Financeiro LAURA carregadas com sucesso!');
console.log('Funções disponíveis:', {
    showJornadasRisco: typeof window.showJornadasRisco,
    showOPMEDetail: typeof window.showOPMEDetail,
    showExtratoKPI: typeof window.showExtratoKPI,
    openDosseComercial: typeof window.openDosseComercial,
    filterRisco: typeof window.filterRisco
});

// Auto-inicializar se estivermos na página do portal financeiro
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('/financial')) {
        console.log('Portal Financeiro detectado - funções prontas para uso');
    }
});