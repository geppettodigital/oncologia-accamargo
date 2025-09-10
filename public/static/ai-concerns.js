// Sistema de Ansiedade de Laura - Funcionalidades Interativas

// Função para inicializar o componente Ansiedade de Laura
function initializeAIConcerns(portalType) {
    console.log(`Inicializando Ansiedade de Laura para portal: ${portalType}`);
    
    // Adicionar event listeners se o container existir
    const container = document.getElementById('ai-concerns-container');
    if (!container) return;
    
    // Configurar collapse/expand
    setupCollapseExpand();
    
    // Configurar checkboxes
    setupCheckboxes();
    
    // Configurar botão de execução
    setupExecuteButton(portalType);
}

// Configurar funcionalidade de collapse/expand
function setupCollapseExpand() {
    const toggleBtn = document.getElementById('ai-concerns-toggle');
    const content = document.getElementById('ai-concerns-content');
    
    if (!toggleBtn || !content) return;
    
    // Restaurar estado salvo
    const isCollapsed = localStorage.getItem('ai-concerns-collapsed') === 'true';
    if (isCollapsed) {
        content.classList.add('hidden');
        toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }
    
    toggleBtn.addEventListener('click', () => {
        const isHidden = content.classList.contains('hidden');
        
        if (isHidden) {
            content.classList.remove('hidden');
            toggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
            localStorage.setItem('ai-concerns-collapsed', 'false');
            
            // Animação de expansão
            content.style.maxHeight = '0px';
            content.style.overflow = 'hidden';
            content.style.transition = 'max-height 0.3s ease-out';
            setTimeout(() => {
                content.style.maxHeight = content.scrollHeight + 'px';
                setTimeout(() => {
                    content.style.maxHeight = '';
                    content.style.overflow = '';
                }, 300);
            }, 10);
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.overflow = 'hidden';
            content.style.transition = 'max-height 0.3s ease-in';
            setTimeout(() => {
                content.style.maxHeight = '0px';
                setTimeout(() => {
                    content.classList.add('hidden');
                    toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
                    localStorage.setItem('ai-concerns-collapsed', 'true');
                    content.style.maxHeight = '';
                    content.style.overflow = '';
                }, 300);
            }, 10);
        }
    });
}

// Configurar checkboxes
function setupCheckboxes() {
    const checkboxes = document.querySelectorAll('.ai-concern-checkbox');
    const executeBtn = document.getElementById('execute-ai-concerns');
    const selectAllBtn = document.getElementById('select-all-concerns');
    const clearAllBtn = document.getElementById('clear-all-concerns');
    
    if (!checkboxes.length || !executeBtn) return;
    
    // Atualizar estado do botão executar
    const updateExecuteButton = () => {
        const checkedCount = document.querySelectorAll('.ai-concern-checkbox:checked').length;
        executeBtn.disabled = checkedCount === 0;
        
        if (checkedCount > 0) {
            executeBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            executeBtn.classList.add('hover:from-green-700', 'hover:to-green-800');
            executeBtn.innerHTML = `<i class="fas fa-play mr-2"></i>Executar ${checkedCount} Ação(ões)`;
        } else {
            executeBtn.classList.add('opacity-50', 'cursor-not-allowed');
            executeBtn.classList.remove('hover:from-green-700', 'hover:to-green-800');
            executeBtn.innerHTML = '<i class="fas fa-play mr-2"></i>Selecione ações para executar';
        }
    };
    
    // Adicionar listeners aos checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateExecuteButton);
    });
    
    // Selecionar todos
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', () => {
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            updateExecuteButton();
        });
    }
    
    // Limpar todos
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            updateExecuteButton();
        });
    }
    
    // Estado inicial
    updateExecuteButton();
}

// Configurar botão de execução
function setupExecuteButton(portalType) {
    const executeBtn = document.getElementById('execute-ai-concerns');
    if (!executeBtn) return;
    
    executeBtn.addEventListener('click', async () => {
        const checkedBoxes = document.querySelectorAll('.ai-concern-checkbox:checked');
        
        if (checkedBoxes.length === 0) {
            showNotification('Por favor, selecione pelo menos uma ação para executar.', 'warning');
            return;
        }
        
        // Coletar ações selecionadas
        const selectedActions = [];
        checkedBoxes.forEach(checkbox => {
            const concernItem = checkbox.closest('.concern-item');
            if (concernItem) {
                const title = concernItem.querySelector('h4')?.textContent || '';
                const description = concernItem.querySelector('p')?.textContent || '';
                selectedActions.push({
                    id: checkbox.value,
                    title: title.trim(),
                    description: description.trim(),
                    portal: portalType
                });
            }
        });
        
        // Mostrar loading
        executeBtn.disabled = true;
        executeBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processando...';
        
        try {
            // Simular execução das ações
            await executeAIActions(selectedActions);
            
            // Sucesso
            showNotification(`${selectedActions.length} ação(ões) executada(s) com sucesso!`, 'success');
            
            // Limpar checkboxes
            checkedBoxes.forEach(checkbox => {
                checkbox.checked = false;
                
                // Adicionar indicador visual de conclusão
                const concernItem = checkbox.closest('.concern-item');
                if (concernItem) {
                    concernItem.classList.add('bg-green-50', 'border-green-200');
                    setTimeout(() => {
                        concernItem.classList.remove('bg-green-50', 'border-green-200');
                    }, 3000);
                }
            });
            
        } catch (error) {
            console.error('Erro ao executar ações:', error);
            showNotification('Erro ao executar ações. Por favor, tente novamente.', 'error');
            
        } finally {
            // Restaurar botão
            executeBtn.disabled = false;
            executeBtn.innerHTML = '<i class="fas fa-play mr-2"></i>Selecione ações para executar';
            executeBtn.classList.add('opacity-50', 'cursor-not-allowed');
        }
    });
}

// Executar ações de IA
async function executeAIActions(actions) {
    // Simular chamada à API
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Ações executadas:', actions);
            
            // Registrar no histórico
            const history = JSON.parse(localStorage.getItem('ai-actions-history') || '[]');
            history.push({
                timestamp: new Date().toISOString(),
                actions: actions,
                status: 'completed'
            });
            localStorage.setItem('ai-actions-history', JSON.stringify(history));
            
            resolve();
        }, 2000);
    });
}

// Mostrar notificação
function showNotification(message, type = 'info') {
    const colors = {
        success: 'bg-green-100 border-green-400 text-green-700',
        error: 'bg-red-100 border-red-400 text-red-700',
        warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
        info: 'bg-blue-100 border-blue-400 text-blue-700'
    };
    
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 ${colors[type]} px-4 py-3 rounded border z-50 shadow-lg max-w-md`;
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remover após 5 segundos
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Funções auxiliares para ações específicas de cada portal
function contactSupport(type) {
    if (type === 'whatsapp') {
        window.open('https://wa.me/551140040000?text=Olá, preciso de suporte', '_blank');
    } else {
        showNotification('Abrindo canal de suporte...', 'info');
    }
}

function scheduleConsultation() {
    showNotification('Abrindo agendamento de consultas...', 'info');
    // Implementar lógica de agendamento
}

function accessCommunity() {
    showNotification('Acessando comunidade de apoio...', 'info');
    // Implementar acesso à comunidade
}

// Exportar funções globais
window.initializeAIConcerns = initializeAIConcerns;
window.contactSupport = contactSupport;
window.scheduleConsultation = scheduleConsultation;
window.accessCommunity = accessCommunity;
window.showNotification = showNotification;