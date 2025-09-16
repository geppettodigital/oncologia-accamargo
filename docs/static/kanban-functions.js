// Funções do Trilho de Atendimentos - Kanban

// Abrir visualização Kanban
function openKanbanView() {
    const modal = document.getElementById('kanban-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Carregar dados atualizados
        loadKanbanData();
        
        // Inicializar drag and drop
        initializeDragAndDrop();
    }
}

// Fechar visualização Kanban
function closeKanbanView() {
    const modal = document.getElementById('kanban-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Carregar dados do Kanban
async function loadKanbanData() {
    try {
        // Simular carregamento de dados
        console.log('Carregando dados do Kanban...');
        
        // Aqui você faria uma chamada real à API
        // const response = await fetch('/api/navigator/kanban');
        // const data = await response.json();
        
        // Por enquanto, vamos usar os dados já renderizados
        updateKanbanStats();
        
    } catch (error) {
        console.error('Erro ao carregar dados do Kanban:', error);
    }
}

// Atualizar estatísticas do Kanban
function updateKanbanStats() {
    // Contar cards em cada coluna
    const columns = document.querySelectorAll('.kanban-column');
    let totalCards = 0;
    
    columns.forEach(column => {
        const cards = column.querySelectorAll('.kanban-card').length;
        totalCards += cards;
        
        // Atualizar badge da coluna
        const badge = column.querySelector('.rounded-full');
        if (badge) {
            badge.textContent = cards;
        }
    });
    
    console.log(`Total de pacientes no Kanban: ${totalCards}`);
}

// Inicializar Drag and Drop
function initializeDragAndDrop() {
    const cards = document.querySelectorAll('.kanban-card');
    const columns = document.querySelectorAll('.kanban-column .overflow-y-auto');
    
    // Tornar cards arrastáveis
    cards.forEach(card => {
        card.draggable = true;
        
        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', card.innerHTML);
            card.classList.add('dragging');
        });
        
        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
        });
    });
    
    // Configurar áreas de drop
    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            column.parentElement.classList.add('drag-over');
        });
        
        column.addEventListener('dragleave', () => {
            column.parentElement.classList.remove('drag-over');
        });
        
        column.addEventListener('drop', (e) => {
            e.preventDefault();
            column.parentElement.classList.remove('drag-over');
            
            const draggingCard = document.querySelector('.dragging');
            if (draggingCard) {
                // Adicionar card à nova coluna
                column.appendChild(draggingCard);
                
                // Atualizar estatísticas
                updateKanbanStats();
                
                // Registrar mudança
                logPatientMovement(draggingCard, column);
                
                // Mostrar notificação
                showKanbanNotification('Paciente movido com sucesso!', 'success');
            }
        });
    });
}

// Registrar movimentação de paciente
function logPatientMovement(card, newColumn) {
    const patientName = card.querySelector('.font-semibold').textContent;
    const columnTitle = newColumn.closest('.kanban-column').querySelector('h3').textContent.trim();
    
    console.log(`Paciente ${patientName} movido para: ${columnTitle}`);
    
    // Aqui você faria uma chamada à API para registrar a mudança
    // await fetch('/api/navigator/move-patient', { ... });
}

// Mostrar notificação no Kanban
function showKanbanNotification(message, type = 'info') {
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500'
    };
    
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-60 flex items-center`;
    notification.innerHTML = `
        <i class="fas fa-check-circle mr-2"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animação de entrada
    notification.style.animation = 'slideIn 0.3s ease';
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Filtrar pacientes no Kanban
function filterKanbanPatients(searchTerm) {
    const cards = document.querySelectorAll('.kanban-card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Exportar dados do Kanban
function exportKanbanData() {
    // Coletar dados de todas as colunas
    const kanbanData = [];
    const columns = document.querySelectorAll('.kanban-column');
    
    columns.forEach(column => {
        const columnName = column.querySelector('h3').textContent.trim();
        const cards = column.querySelectorAll('.kanban-card');
        
        cards.forEach(card => {
            const patientName = card.querySelector('.font-semibold').textContent;
            const details = card.querySelector('.text-gray-600').textContent;
            const status = card.querySelector('.rounded').textContent;
            
            kanbanData.push({
                fase: columnName,
                paciente: patientName,
                detalhes: details,
                status: status,
                data: new Date().toLocaleDateString('pt-BR')
            });
        });
    });
    
    // Converter para CSV
    const csv = convertToCSV(kanbanData);
    
    // Download do arquivo
    downloadCSV(csv, 'trilho_atendimentos.csv');
    
    showKanbanNotification('Dados exportados com sucesso!', 'success');
}

// Converter dados para CSV
function convertToCSV(data) {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row => Object.values(row).join(','));
    return headers + '\n' + rows.join('\n');
}

// Download CSV
function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Adicionar novo paciente ao Kanban
function addPatientToKanban(patientData) {
    const triageColumn = document.querySelector('.kanban-column:first-child .overflow-y-auto');
    
    const newCard = document.createElement('div');
    newCard.className = 'kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer';
    newCard.draggable = true;
    newCard.innerHTML = `
        <div class="flex items-start justify-between mb-2">
            <span class="font-semibold text-sm">${patientData.name}</span>
            <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">${patientData.priority}</span>
        </div>
        <p class="text-xs text-gray-600 mb-2">${patientData.diagnosis}</p>
        <div class="flex items-center justify-between text-xs">
            <span class="text-gray-500">Entrada: ${new Date().toLocaleDateString('pt-BR')}</span>
            <button class="text-purple-600 hover:text-purple-700">
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
    
    triageColumn.appendChild(newCard);
    
    // Reinicializar drag and drop para incluir a nova card
    initializeDragAndDrop();
    
    // Atualizar estatísticas
    updateKanbanStats();
    
    showKanbanNotification(`Paciente ${patientData.name} adicionado ao trilho!`, 'success');
}

// Animações CSS adicionais
const kanbanStyles = `
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}
`;

// Adicionar estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.textContent = kanbanStyles;
document.head.appendChild(styleSheet);

// Exportar funções globais
window.openKanbanView = openKanbanView;
window.closeKanbanView = closeKanbanView;
window.filterKanbanPatients = filterKanbanPatients;
window.exportKanbanData = exportKanbanData;
window.addPatientToKanban = addPatientToKanban;