// Portal Loader System - Carrega portais dinamicamente sem recarregar a página
window.currentPortal = null;
window.portalHistory = [];

// Função principal para carregar portais
async function loadPortal(portalType) {
    try {
        // Caso especial: Portal de Pesquisa redireciona para o novo portal aprimorado
        if (portalType === 'research') {
            window.location.href = '/research-portal';
            return;
        }
        
        // Mostrar loading
        showLoading();
        
        // Salvar no histórico
        if (window.currentPortal && window.currentPortal !== portalType) {
            window.portalHistory.push(window.currentPortal);
        }
        window.currentPortal = portalType;
        
        // Buscar conteúdo do portal
        const response = await fetch(`/api/portal/${portalType}`);
        if (!response.ok) {
            throw new Error(`Erro ao carregar portal: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Renderizar portal
        renderPortal(data);
        
        // Atualizar URL sem recarregar
        history.pushState({ portal: portalType }, '', `#${portalType}`);
        
        // Esconder loading
        hideLoading();
        
        // Inicializar componentes específicos do portal
        initializePortalComponents(portalType);
        
        // Scroll suave para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    } catch (error) {
        console.error('Erro ao carregar portal:', error);
        hideLoading();
        showError('Erro ao carregar o portal. Por favor, tente novamente.');
    }
}

// Renderizar conteúdo do portal
function renderPortal(data) {
    const mainContainer = document.getElementById('main-container');
    if (!mainContainer) {
        // Criar container principal se não existir
        const body = document.querySelector('body');
        const container = document.createElement('div');
        container.id = 'main-container';
        container.className = 'min-h-screen';
        
        // Substituir conteúdo principal mantendo header e footer
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const main = document.querySelector('main');
        
        if (main) {
            main.innerHTML = '';
            main.appendChild(container);
        } else {
            body.innerHTML = '';
            if (header) body.appendChild(header);
            body.appendChild(container);
            if (footer) body.appendChild(footer);
        }
    }
    
    // Atualizar conteúdo
    document.getElementById('main-container').innerHTML = data.html;
    
    // Processar e carregar scripts externos do HTML
    loadExternalScripts();
    
    // Executar scripts inline se houver
    if (data.scripts) {
        data.scripts.forEach(script => {
            const scriptElement = document.createElement('script');
            scriptElement.textContent = script;
            document.body.appendChild(scriptElement);
        });
    }
}

// Função para carregar scripts externos encontrados no HTML
function loadExternalScripts() {
    // Buscar todos os scripts com src no container recém-carregado
    const container = document.getElementById('main-container');
    const scripts = container.querySelectorAll('script[src]');
    
    scripts.forEach(script => {
        const src = script.getAttribute('src');
        
        // Verificar se o script já foi carregado
        if (!document.querySelector(`script[src="${src}"][data-portal-loaded="true"]`)) {
            const newScript = document.createElement('script');
            newScript.src = src;
            newScript.setAttribute('data-portal-loaded', 'true');
            
            // Adicionar callback para garantir que o script foi carregado
            newScript.onload = () => {
                console.log(`Script carregado: ${src}`);
                
                // Se for o patient-view-universal.js, verificar se as funções estão disponíveis
                if (src.includes('patient-view-universal.js')) {
                    if (typeof window.renderPatientUniversalView === 'function') {
                        console.log('✅ View Universal do Paciente carregada com sucesso!');
                    } else {
                        console.error('❌ Erro: Funções da View Universal não encontradas');
                    }
                }
            };
            
            newScript.onerror = () => {
                console.error(`Erro ao carregar script: ${src}`);
            };
            
            document.head.appendChild(newScript);
        }
        
        // Remover o script do container para evitar duplicação
        script.remove();
    });
}

// Voltar ao portal anterior
function goBack() {
    if (window.portalHistory.length > 0) {
        const previousPortal = window.portalHistory.pop();
        loadPortal(previousPortal);
    } else {
        loadHome();
    }
}

// Voltar para a página inicial
function loadHome() {
    window.currentPortal = null;
    window.location.href = '/';
}

// Mostrar loading
function showLoading() {
    // Remover loading existente se houver
    const existingLoader = document.getElementById('portal-loader');
    if (existingLoader) {
        existingLoader.remove();
    }
    
    const loader = document.createElement('div');
    loader.id = 'portal-loader';
    loader.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    loader.innerHTML = `
        <div class="bg-white rounded-lg p-8 shadow-xl">
            <div class="flex items-center space-x-4">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                <span class="text-lg font-semibold text-gray-700">Carregando portal...</span>
            </div>
        </div>
    `;
    document.body.appendChild(loader);
}

// Esconder loading
function hideLoading() {
    const loader = document.getElementById('portal-loader');
    if (loader) {
        loader.remove();
    }
}

// Mostrar erro
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50';
    errorDiv.innerHTML = `
        <strong class="font-bold">Erro!</strong>
        <span class="block sm:inline">${message}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onclick="this.parentElement.remove()">
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Fechar</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
            </svg>
        </span>
    `;
    document.body.appendChild(errorDiv);
    
    // Remover após 5 segundos
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Inicializar componentes específicos do portal
function initializePortalComponents(portalType) {
    console.log(`Inicializando componentes do portal: ${portalType}`);
    
    // Inicializar Portal Financeiro
    if (portalType === 'financial') {
        // Aguardar um momento para garantir que o DOM esteja pronto
        setTimeout(() => {
            if (window.FinancialPortalLoader && typeof window.FinancialPortalLoader.initialize === 'function') {
                window.FinancialPortalLoader.initialize();
                console.log('Portal Financeiro LAURA inicializado via loader');
            } else if (typeof window.initializeFinancialPortal === 'function') {
                window.initializeFinancialPortal();
                console.log('Portal Financeiro LAURA inicializado diretamente');
            } else {
                console.log('Aguardando carregamento do Portal Financeiro...');
                // Tentar novamente após um curto delay
                setTimeout(() => {
                    if (window.FinancialPortalLoader) {
                        window.FinancialPortalLoader.initialize();
                    }
                }, 500);
            }
        }, 100);
    }
    
    // Inicializar Ansiedade de Laura se existir
    if (document.getElementById('ai-concerns-container')) {
        if (typeof initializeAIConcerns === 'function') {
            initializeAIConcerns(portalType);
        }
    }
    
    // Inicializar gráficos gerais se existirem
    if (typeof Chart !== 'undefined' && typeof initializeCharts === 'function') {
        initializeCharts(portalType);
    }
    
    console.log(`Portal ${portalType} carregado com sucesso`);
}

// Gerenciar navegação do browser (botões voltar/avançar)
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.portal) {
        loadPortal(event.state.portal);
    } else {
        loadHome();
    }
});

// Interceptar cliques em links internos
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se há hash na URL ao carregar
    if (window.location.hash) {
        const portal = window.location.hash.substring(1);
        if (['patient', 'doctor', 'navigator', 'financial', 'wellness', 'research', 'admin'].includes(portal)) {
            loadPortal(portal);
        }
    }
    
    // Interceptar todos os cliques em links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.href && !link.target) {
            const url = new URL(link.href);
            
            // Se for link interno para portal
            if (url.pathname.startsWith('/portal/') || url.pathname.match(/^\/(patient|doctor|navigator|financial|wellness|research|admin)$/)) {
                e.preventDefault();
                const portalType = url.pathname.split('/').pop();
                loadPortal(portalType);
            }
        }
    });
});

// Funções específicas de cada portal
function initializePatientPortal() {
    console.log('Portal do Paciente inicializado');
    // Adicionar funcionalidades específicas do paciente
}

function initializeDoctorPortal() {
    console.log('Portal Médico inicializado');
    // Adicionar funcionalidades específicas do médico
}

function initializeNavigatorPortal() {
    console.log('Portal do Navegador inicializado');
    
    // Garantir que os scripts essenciais do navegador estão carregados
    const scriptsToLoad = [
        '/static/patient-view-universal.js',
        '/static/navigator-views.js',
        '/static/navigator-views-extended.js'
    ];
    
    let scriptsLoaded = 0;
    const totalScripts = scriptsToLoad.length;
    
    scriptsToLoad.forEach(scriptSrc => {
        // Verificar se já está carregado
        if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.onload = () => {
                scriptsLoaded++;
                console.log(`✅ Script carregado (${scriptsLoaded}/${totalScripts}): ${scriptSrc}`);
                
                // Quando todos os scripts estiverem carregados
                if (scriptsLoaded === totalScripts) {
                    console.log('🎯 Todos os scripts do Portal do Navegador carregados!');
                    
                    // Verificar disponibilidade das funções
                    if (typeof window.openPatientUniversalView === 'function') {
                        console.log('✅ View Universal do Paciente disponível');
                    }
                    if (typeof window.renderContatarView === 'function') {
                        console.log('✅ View Contatar disponível');
                    }
                    if (typeof window.renderAgendarView === 'function') {
                        console.log('✅ View Agendar disponível');
                    }
                    if (typeof window.renderJornadaView === 'function') {
                        console.log('✅ View Jornada disponível');
                    }
                    if (typeof window.renderChecklistView === 'function') {
                        console.log('✅ View Checklist disponível');
                    }
                    
                    // Reinicializar eventos de clique nos cards do Kanban
                    initializeKanbanCardEvents();
                }
            };
            script.onerror = () => {
                console.error(`❌ Erro ao carregar: ${scriptSrc}`);
            };
            document.head.appendChild(script);
        } else {
            scriptsLoaded++;
            if (scriptsLoaded === totalScripts) {
                console.log('🎯 Scripts já carregados, reinicializando eventos...');
                initializeKanbanCardEvents();
            }
        }
    });
}

// Função para inicializar eventos de clique nos cards do Kanban
function initializeKanbanCardEvents() {
    // Aguardar um momento para garantir que o DOM está pronto
    setTimeout(() => {
        const kanbanCards = document.querySelectorAll('.kanban-card');
        console.log(`Encontrados ${kanbanCards.length} cards no Kanban`);
        
        kanbanCards.forEach(card => {
            // Remover onclick antigo se existir
            card.removeAttribute('onclick');
            
            // Adicionar novo event listener
            card.style.cursor = 'pointer';
            card.addEventListener('click', function(e) {
                // Evitar propagação se clicar em botões internos
                if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                    return;
                }
                
                // Extrair ID do paciente (pode vir de data-patient-id ou do conteúdo)
                const patientId = this.dataset.patientId || 
                                 this.querySelector('[data-patient-id]')?.dataset.patientId || 
                                 'PAC-001';
                
                console.log(`Abrindo View Universal para paciente: ${patientId}`);
                
                // Chamar função para abrir a view
                if (typeof window.openPatientUniversalView === 'function') {
                    window.openPatientUniversalView(patientId, 'navigator');
                } else {
                    console.error('Função openPatientUniversalView não encontrada!');
                }
            });
        });
        
        // Também adicionar eventos aos botões de ação dentro dos cards
        document.querySelectorAll('.btn-patient-view').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const patientId = this.dataset.patientId || 'PAC-001';
                if (typeof window.openPatientUniversalView === 'function') {
                    window.openPatientUniversalView(patientId, 'navigator');
                }
            });
        });
    }, 500);
}

function initializeFinancialPortal() {
    console.log('Portal Financeiro inicializado');
    // Adicionar funcionalidades específicas financeiras
}

function initializeWellnessPortal() {
    console.log('Portal de Bem-Estar inicializado');
    // Adicionar funcionalidades específicas de bem-estar
}

function initializeResearchPortal() {
    console.log('Portal de Pesquisa inicializado');
    // Redirecionar para o novo portal de pesquisa aprimorado
    window.location.href = '/research-portal';
}

function initializeAdminPortal() {
    console.log('Portal Administrativo inicializado');
    // Adicionar funcionalidades específicas administrativas
}

// Exportar funções globais
window.loadPortal = loadPortal;
window.goBack = goBack;
window.loadHome = loadHome;