// Portal Functions - Helper functions for portal cards
const portalDescriptions = {
    'patient': {
        title: 'Portal do Paciente',
        description: 'Sistema completo de autoatendimento para pacientes oncológicos',
        features: [
            '🤖 Auto-triagem inteligente com IA',
            '📅 Agendamento online de consultas',
            '📊 Acompanhamento do tratamento',
            '💊 Gestão de medicamentos',
            '📱 Comunicação com equipe médica'
        ],
        aiContext: 'Portal do Paciente - Aqui os pacientes podem gerenciar toda sua jornada oncológica, desde agendamentos até acompanhamento de tratamentos.'
    },
    'doctor': {
        title: 'Portal Médico',
        description: 'Plataforma avançada para suporte à decisão clínica',
        features: [
            '🧠 Assistente clínico com IA',
            '📋 Protocolos personalizados',
            '👥 Dashboard de pacientes',
            '⚠️ Alertas preditivos',
            '📚 Biblioteca científica atualizada'
        ],
        aiContext: 'Portal Médico - Ferramenta completa para médicos com IA assistiva, protocolos baseados em evidências e gestão integrada de pacientes.'
    },
    'navigator': {
        title: 'Navegador de Pacientes',
        description: 'Sistema de coordenação da jornada do paciente',
        features: [
            '🗺️ Visão 360° da jornada',
            '🚧 Gestão de barreiras',
            '🛤️ Otimização de rotas',
            '📈 Monitoramento de adesão',
            '🔔 Alertas de intervenção'
        ],
        aiContext: 'Navegador de Pacientes - Coordenação completa da jornada oncológica com otimização de rotas e gestão proativa de barreiras.'
    },
    'financial': {
        title: 'Gestão Financeira',
        description: 'Inteligência financeira para prevenção de glosas',
        features: [
            '💰 R$ 2.4M em glosas evitadas',
            '🤖 Prevenção automática com IA',
            '📊 Análise preditiva',
            '✅ Auditoria automática',
            '📈 Dashboard financeiro'
        ],
        aiContext: 'Gestão Financeira - Sistema inteligente que já economizou R$ 2.4M em glosas através de IA preditiva e auditoria automatizada.'
    },
    'wellness': {
        title: 'Bem-Estar Integral',
        description: 'Programa holístico de suporte ao paciente',
        features: [
            '🥗 Nutrição personalizada',
            '🧘 Suporte psicológico',
            '🏃 Atividades físicas',
            '👥 Grupos de apoio',
            '📊 Qualidade de vida'
        ],
        aiContext: 'Bem-Estar Integral - Programa completo de suporte físico e emocional durante o tratamento oncológico.'
    },
    'research': {
        title: 'Pesquisa Clínica',
        description: 'Gestão inteligente de pesquisas e ensaios clínicos',
        features: [
            '🔬 Matching paciente-estudo',
            '📋 Gestão de protocolos',
            '📊 Análise em tempo real',
            '✅ Compliance automático',
            '🎯 Recrutamento inteligente'
        ],
        aiContext: 'Pesquisa Clínica - Plataforma de gestão de ensaios clínicos com matching automático e compliance regulatório.'
    }
};

// Função para mostrar ajuda do portal
function showPortalHelp(portalType) {
    const info = portalDescriptions[portalType];
    if (!info) return;
    
    // Remover tooltip existente
    const existingTooltip = document.querySelector('.portal-tooltip-overlay');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    // Criar overlay
    const overlay = document.createElement('div');
    overlay.className = 'portal-tooltip-overlay';
    overlay.innerHTML = `
        <div class="portal-tooltip-content">
            <div class="portal-tooltip-header">
                <h3>${info.title}</h3>
                <button onclick="this.closest('.portal-tooltip-overlay').remove()" class="portal-tooltip-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="portal-tooltip-body">
                <p class="portal-tooltip-description">${info.description}</p>
                <div class="portal-tooltip-features">
                    <h4>Principais Recursos:</h4>
                    <ul>
                        ${info.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                <div class="portal-tooltip-footer">
                    <button onclick="window.location.href='/${portalType}'" class="portal-tooltip-access">
                        <i class="fas fa-arrow-right mr-2"></i>
                        Acessar Portal
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Fechar ao clicar no overlay
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// Função para abrir assistente IA com contexto do portal
function openAIForPortal(portalType) {
    const info = portalDescriptions[portalType];
    if (!info) return;
    
    // Verificar se o assistente existe
    if (!window.aiAssistant) {
        console.error('Assistente IA não encontrado');
        // Tentar inicializar
        if (window.AIAssistant) {
            window.aiAssistant = new AIAssistant();
        } else {
            alert('Assistente IA está sendo carregado. Tente novamente em alguns segundos.');
            return;
        }
    }
    
    // Abrir o chat se estiver fechado
    if (!window.aiAssistant.isOpen) {
        window.aiAssistant.toggleChat();
    }
    
    // Aguardar um momento e enviar mensagem contextual
    setTimeout(() => {
        const message = `Olá! Vejo que você está interessado no ${info.title}. ${info.aiContext}\n\nComo Master Admin, você pode:\n• Configurar permissões de acesso\n• Visualizar métricas e relatórios\n• Gerenciar integrações\n• Treinar modelos de IA específicos\n\nComo posso ajudá-lo com este portal?`;
        
        window.aiAssistant.addMessage(message, 'ai');
        
        // Atualizar sugestões
        const suggestions = [
            `Configurar ${info.title}`,
            'Ver métricas deste portal',
            'Gerenciar usuários',
            'Relatório de uso'
        ];
        
        const suggestionsContainer = document.getElementById('ai-suggestions');
        if (suggestionsContainer) {
            suggestionsContainer.innerHTML = suggestions.map(s => 
                `<div class="ai-suggestion-chip">${s}</div>`
            ).join('');
        }
    }, 500);
}

// Adicionar estilos CSS
const styles = document.createElement('style');
styles.innerHTML = `
    /* Overlay do tooltip */
    .portal-tooltip-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    /* Conteúdo do tooltip */
    .portal-tooltip-content {
        background: white;
        border-radius: 20px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
    }
    
    @keyframes slideUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    /* Header do tooltip */
    .portal-tooltip-header {
        background: linear-gradient(135deg, #2B5F3F 0%, #3a7d52 100%);
        color: white;
        padding: 20px;
        border-radius: 20px 20px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .portal-tooltip-header h3 {
        margin: 0;
        font-size: 24px;
        font-weight: 600;
    }
    
    .portal-tooltip-close {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
    }
    
    .portal-tooltip-close:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }
    
    /* Body do tooltip */
    .portal-tooltip-body {
        padding: 24px;
    }
    
    .portal-tooltip-description {
        color: #4B5563;
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 20px;
    }
    
    .portal-tooltip-features h4 {
        color: #2B5F3F;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 12px;
    }
    
    .portal-tooltip-features ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .portal-tooltip-features li {
        padding: 10px 0;
        color: #6B7280;
        font-size: 15px;
        border-bottom: 1px solid #E5E7EB;
    }
    
    .portal-tooltip-features li:last-child {
        border-bottom: none;
    }
    
    /* Footer do tooltip */
    .portal-tooltip-footer {
        padding: 0 24px 24px;
    }
    
    .portal-tooltip-access {
        width: 100%;
        background: linear-gradient(135deg, #10B981 0%, #059669 100%);
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .portal-tooltip-access:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
    }
    
    /* Botões nos cards */
    .portal-help-btn, .portal-ai-btn {
        display: inline-flex !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .portal-help-btn:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .portal-ai-btn:hover {
        box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
    }
    
    /* Responsivo */
    @media (max-width: 640px) {
        .portal-tooltip-content {
            width: 95%;
            max-height: 90vh;
        }
        
        .portal-tooltip-header h3 {
            font-size: 20px;
        }
        
        .portal-tooltip-features li {
            font-size: 14px;
        }
    }
`;

document.head.appendChild(styles);

// Log para confirmar carregamento
console.log('Portal Functions carregadas com sucesso!');