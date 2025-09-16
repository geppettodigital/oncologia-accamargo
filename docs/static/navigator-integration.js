// Navigator Portal Integration - Integração das novas views com o portal
// Este arquivo conecta as views Contatar, Agendar, Jornada e Checklist ao Portal do Navegador

// Função para abrir modal com conteúdo das views
function openNavigatorModal(viewType, patientId = 'PAC-2025-001') {
    // Criar ou reutilizar modal
    let modal = document.getElementById('navigator-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'navigator-modal';
        modal.className = 'fixed inset-0 z-50 overflow-y-auto';
        modal.style.display = 'none';
        document.body.appendChild(modal);
    }
    
    // Determinar qual view renderizar
    let content = '';
    switch(viewType) {
        case 'contatar':
            content = renderContatarView(patientId);
            break;
        case 'agendar':
            content = renderAgendarView(patientId);
            break;
        case 'jornada':
            content = renderJornadaView(patientId);
            break;
        case 'checklist':
            content = renderChecklistView(patientId);
            break;
        default:
            console.error('View não reconhecida:', viewType);
            return;
    }
    
    // Montar estrutura do modal
    modal.innerHTML = `
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="flex items-center justify-center min-h-screen p-4">
            <div class="relative bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
                ${content}
            </div>
        </div>
    `;
    
    // Mostrar modal sem travar o scroll do body
    modal.style.display = 'block';
    // Não bloquear o scroll do body, apenas do modal
    modal.style.overflow = 'auto';
    
    // Adicionar evento para fechar ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.classList.contains('bg-opacity-75')) {
            closeNavigatorModal();
        }
    });
}

// Função para fechar o modal e restaurar scroll
function closeNavigatorModal() {
    const modal = document.getElementById('navigator-modal');
    if (modal) {
        modal.style.display = 'none';
        // Restaurar scroll da página
        document.body.style.overflow = 'auto';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        // Remover qualquer classe que possa estar travando
        document.body.classList.remove('modal-open');
        document.documentElement.style.overflow = 'auto';
    }
}

// Modificar os handlers dos botões do Kanban para usar as novas views
function setupNavigatorButtons() {
    // Verificar se estamos no Portal do Navegador
    if (!document.querySelector('.navigator-portal')) {
        return;
    }
    
    // Adicionar handlers aos botões de ação dos cartões do Kanban
    document.addEventListener('click', function(e) {
        // Handler para botão Contatar
        if (e.target.closest('.btn-contatar') || e.target.closest('[onclick*="contatarPaciente"]')) {
            e.preventDefault();
            const card = e.target.closest('.kanban-card');
            const patientId = card ? card.dataset.patientId : 'PAC-2025-001';
            openNavigatorModal('contatar', patientId);
        }
        
        // Handler para botão Agendar
        if (e.target.closest('.btn-agendar') || e.target.closest('[onclick*="agendarConsulta"]')) {
            e.preventDefault();
            const card = e.target.closest('.kanban-card');
            const patientId = card ? card.dataset.patientId : 'PAC-2025-001';
            openNavigatorModal('agendar', patientId);
        }
        
        // Handler para botão Jornada
        if (e.target.closest('.btn-jornada') || e.target.closest('[onclick*="verJornada"]')) {
            e.preventDefault();
            const card = e.target.closest('.kanban-card');
            const patientId = card ? card.dataset.patientId : 'PAC-2025-001';
            openNavigatorModal('jornada', patientId);
        }
        
        // Handler para botão Checklist
        if (e.target.closest('.btn-checklist') || e.target.closest('[onclick*="verChecklist"]')) {
            e.preventDefault();
            const card = e.target.closest('.kanban-card');
            const patientId = card ? card.dataset.patientId : 'PAC-2025-001';
            openNavigatorModal('checklist', patientId);
        }
    });
}

// Adicionar botões flutuantes para acesso rápido às views
function addNavigatorQuickAccess() {
    // Verificar se estamos no Portal do Navegador
    if (!document.querySelector('.navigator-portal')) {
        return;
    }
    
    // Criar container de botões flutuantes
    const quickAccess = document.createElement('div');
    quickAccess.className = 'fixed bottom-6 right-6 flex flex-col gap-3 z-40';
    quickAccess.innerHTML = `
        <button onclick="openNavigatorModal('contatar')" 
                class="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center group relative">
            <i class="fas fa-address-book text-xl"></i>
            <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Contatar
            </span>
        </button>
        <button onclick="openNavigatorModal('agendar')" 
                class="w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all hover:scale-110 flex items-center justify-center group relative">
            <i class="fas fa-calendar-alt text-xl"></i>
            <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Agendar
            </span>
        </button>
        <button onclick="openNavigatorModal('jornada')" 
                class="w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center group relative">
            <i class="fas fa-route text-xl"></i>
            <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Jornada
            </span>
        </button>
        <button onclick="openNavigatorModal('checklist')" 
                class="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all hover:scale-110 flex items-center justify-center group relative">
            <i class="fas fa-clipboard-check text-xl"></i>
            <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Checklist
            </span>
        </button>
    `;
    
    document.body.appendChild(quickAccess);
}

// Modificar os botões do Kanban para incluir as novas funcionalidades
function enhanceKanbanCards() {
    // Aguardar carregamento do Kanban
    setTimeout(() => {
        const kanbanCards = document.querySelectorAll('.kanban-card');
        
        kanbanCards.forEach(card => {
            // Verificar se já foi processado
            if (card.dataset.enhanced === 'true') return;
            
            // Adicionar botões de ação se não existirem
            let actionsContainer = card.querySelector('.card-actions');
            if (!actionsContainer) {
                actionsContainer = document.createElement('div');
                actionsContainer.className = 'card-actions flex gap-1 mt-2';
                card.appendChild(actionsContainer);
            }
            
            // Adicionar novos botões
            const newButtons = `
                <button class="btn-contatar p-1 text-blue-500 hover:bg-blue-50 rounded" title="Contatar">
                    <i class="fas fa-phone text-xs"></i>
                </button>
                <button class="btn-agendar p-1 text-purple-500 hover:bg-purple-50 rounded" title="Agendar">
                    <i class="fas fa-calendar text-xs"></i>
                </button>
                <button class="btn-jornada p-1 text-green-500 hover:bg-green-50 rounded" title="Jornada">
                    <i class="fas fa-route text-xs"></i>
                </button>
                <button class="btn-checklist p-1 text-indigo-500 hover:bg-indigo-50 rounded" title="Checklist">
                    <i class="fas fa-clipboard-check text-xs"></i>
                </button>
            `;
            
            actionsContainer.insertAdjacentHTML('beforeend', newButtons);
            card.dataset.enhanced = 'true';
        });
    }, 1000);
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    setupNavigatorButtons();
    
    // Observar mudanças no DOM para detectar quando o Portal Navegador for carregado
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // Verificar se o Portal Navegador foi carregado
                if (document.querySelector('.navigator-portal')) {
                    addNavigatorQuickAccess();
                    enhanceKanbanCards();
                    observer.disconnect(); // Parar de observar após adicionar
                }
            }
        });
    });
    
    // Configurar e iniciar o observer
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Funções para os handlers específicos dos cartões do Kanban
window.contatarPaciente = function(patientId) {
    openNavigatorModal('contatar', patientId);
};

window.agendarConsulta = function(patientId) {
    openNavigatorModal('agendar', patientId);
};

window.verJornada = function(patientId) {
    openNavigatorModal('jornada', patientId);
};

window.verChecklist = function(patientId) {
    openNavigatorModal('checklist', patientId);
};

// Exportar funções para uso global
window.openNavigatorModal = openNavigatorModal;
window.closeNavigatorModal = closeNavigatorModal;
window.setupNavigatorButtons = setupNavigatorButtons;
window.addNavigatorQuickAccess = addNavigatorQuickAccess;
window.enhanceKanbanCards = enhanceKanbanCards;