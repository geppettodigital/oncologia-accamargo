// Portal Loader System - Carrega portais dinamicamente sem recarregar a página
window.currentPortal = null;
window.portalHistory = [];

// Função principal para carregar portais
async function loadPortal(portalType) {
    try {
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
    
    // Executar scripts inline se houver
    if (data.scripts) {
        data.scripts.forEach(script => {
            const scriptElement = document.createElement('script');
            scriptElement.textContent = script;
            document.body.appendChild(scriptElement);
        });
    }
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
    // Inicializar Ansiedade de Laura se existir
    if (document.getElementById('ai-concerns-container')) {
        initializeAIConcerns(portalType);
    }
    
    // Inicializar gráficos se existirem
    if (typeof Chart !== 'undefined') {
        initializeCharts(portalType);
    }
    
    // Inicializar outras funcionalidades específicas
    switch(portalType) {
        case 'patient':
            initializePatientPortal();
            break;
        case 'doctor':
            initializeDoctorPortal();
            break;
        case 'navigator':
            initializeNavigatorPortal();
            break;
        case 'financial':
            initializeFinancialPortal();
            break;
        case 'wellness':
            initializeWellnessPortal();
            break;
        case 'research':
            initializeResearchPortal();
            break;
        case 'admin':
            initializeAdminPortal();
            break;
    }
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
    // Adicionar funcionalidades específicas do navegador
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
    // Adicionar funcionalidades específicas de pesquisa
}

function initializeAdminPortal() {
    console.log('Portal Administrativo inicializado');
    // Adicionar funcionalidades específicas administrativas
}

// Exportar funções globais
window.loadPortal = loadPortal;
window.goBack = goBack;
window.loadHome = loadHome;