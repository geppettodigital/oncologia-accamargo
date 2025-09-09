// AI Assistant Chat Component
class AIAssistant {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.currentContext = window.location.pathname;
        this.init();
    }

    init() {
        this.createChatWidget();
        this.attachEventListeners();
        this.startContextAnalysis();
        this.showWelcomeMessage();
    }

    createChatWidget() {
        // Botão flutuante
        const floatingButton = document.createElement('div');
        floatingButton.id = 'ai-assistant-button';
        floatingButton.innerHTML = `
            <div class="ai-button-wrapper">
                <img src="/static/robot-auditor-icon.svg" alt="AI Assistant" class="ai-icon">
                <span class="ai-badge">IA</span>
                <div class="ai-pulse"></div>
            </div>
        `;

        // Container do chat
        const chatContainer = document.createElement('div');
        chatContainer.id = 'ai-chat-container';
        chatContainer.className = 'ai-chat-hidden';
        chatContainer.innerHTML = `
            <div class="ai-chat-header">
                <div class="ai-header-left">
                    <img src="/static/robot-auditor-icon.svg" alt="AI" class="ai-header-icon">
                    <div class="ai-header-info">
                        <span class="ai-header-title">Assistente IA</span>
                        <span class="ai-header-status">
                            <span class="status-dot"></span>
                            Online - Navegação Inteligente
                        </span>
                    </div>
                </div>
                <button class="ai-close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="ai-chat-messages" id="ai-messages">
                <!-- Mensagens serão adicionadas aqui -->
            </div>
            <div class="ai-chat-input-container">
                <div class="ai-suggestions" id="ai-suggestions">
                    <!-- Sugestões contextuais -->
                </div>
                <div class="ai-input-wrapper">
                    <input type="text" id="ai-input" placeholder="Digite sua mensagem..." class="ai-input">
                    <button id="ai-send" class="ai-send-btn">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;

        // Adiciona estilos
        const styles = document.createElement('style');
        styles.innerHTML = `
            /* Botão Flutuante */
            #ai-assistant-button {
                position: fixed;
                bottom: 30px;
                right: 30px;
                z-index: 9999;
                cursor: pointer;
                transition: transform 0.3s ease;
            }

            #ai-assistant-button:hover {
                transform: scale(1.1);
            }

            .ai-button-wrapper {
                position: relative;
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 20px rgba(255, 140, 0, 0.4);
            }

            .ai-icon {
                width: 32px;
                height: 32px;
                filter: brightness(0) invert(1);
            }

            .ai-badge {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #2B5F3F;
                color: white;
                font-size: 10px;
                font-weight: bold;
                padding: 2px 6px;
                border-radius: 10px;
                border: 2px solid white;
            }

            .ai-pulse {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%);
                opacity: 0.6;
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% {
                    transform: scale(1);
                    opacity: 0.6;
                }
                50% {
                    transform: scale(1.3);
                    opacity: 0;
                }
                100% {
                    transform: scale(1);
                    opacity: 0.6;
                }
            }

            /* Container do Chat */
            #ai-chat-container {
                position: fixed;
                bottom: 110px;
                right: 30px;
                width: 380px;
                height: 500px;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                z-index: 9998;
                display: flex;
                flex-direction: column;
                transition: all 0.3s ease;
                border: 1px solid rgba(255, 140, 0, 0.2);
            }

            .ai-chat-hidden {
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px);
            }

            /* Header do Chat */
            .ai-chat-header {
                padding: 16px;
                background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%);
                border-radius: 20px 20px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: white;
            }

            .ai-header-left {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .ai-header-icon {
                width: 36px;
                height: 36px;
                filter: brightness(0) invert(1);
            }

            .ai-header-info {
                display: flex;
                flex-direction: column;
            }

            .ai-header-title {
                font-weight: 600;
                font-size: 16px;
            }

            .ai-header-status {
                font-size: 12px;
                opacity: 0.9;
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .status-dot {
                width: 8px;
                height: 8px;
                background: #4CAF50;
                border-radius: 50%;
                animation: blink 2s infinite;
            }

            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }

            .ai-close-btn {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                padding: 4px;
                transition: opacity 0.2s;
            }

            .ai-close-btn:hover {
                opacity: 0.8;
            }

            /* Área de Mensagens */
            .ai-chat-messages {
                flex: 1;
                overflow-y: auto;
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .ai-message {
                display: flex;
                gap: 10px;
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .ai-message-ai {
                align-self: flex-start;
            }

            .ai-message-user {
                align-self: flex-end;
                flex-direction: row-reverse;
            }

            .ai-message-avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .ai-message-ai .ai-message-avatar {
                background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%);
            }

            .ai-message-user .ai-message-avatar {
                background: #2B5F3F;
                color: white;
                font-size: 14px;
                font-weight: bold;
            }

            .ai-message-content {
                max-width: 70%;
                padding: 12px 16px;
                border-radius: 18px;
                font-size: 14px;
                line-height: 1.4;
            }

            .ai-message-ai .ai-message-content {
                background: #f0f2f5;
                color: #333;
                border-bottom-left-radius: 4px;
            }

            .ai-message-user .ai-message-content {
                background: linear-gradient(135deg, #2B5F3F 0%, #3a7d52 100%);
                color: white;
                border-bottom-right-radius: 4px;
            }

            .ai-typing {
                display: flex;
                gap: 4px;
                padding: 12px 16px;
                background: #f0f2f5;
                border-radius: 18px;
                border-bottom-left-radius: 4px;
                width: fit-content;
            }

            .ai-typing span {
                width: 8px;
                height: 8px;
                background: #999;
                border-radius: 50%;
                animation: typing 1.4s infinite;
            }

            .ai-typing span:nth-child(2) {
                animation-delay: 0.2s;
            }

            .ai-typing span:nth-child(3) {
                animation-delay: 0.4s;
            }

            @keyframes typing {
                0%, 60%, 100% {
                    transform: translateY(0);
                }
                30% {
                    transform: translateY(-10px);
                }
            }

            /* Sugestões */
            .ai-suggestions {
                padding: 8px 16px;
                display: flex;
                gap: 8px;
                overflow-x: auto;
                border-top: 1px solid #e0e0e0;
            }

            .ai-suggestion-chip {
                padding: 6px 12px;
                background: white;
                border: 1px solid #FF8C00;
                color: #FF8C00;
                border-radius: 16px;
                font-size: 12px;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.2s;
            }

            .ai-suggestion-chip:hover {
                background: #FF8C00;
                color: white;
            }

            /* Input */
            .ai-input-wrapper {
                padding: 12px;
                display: flex;
                gap: 8px;
                border-top: 1px solid #e0e0e0;
            }

            .ai-input {
                flex: 1;
                padding: 10px 16px;
                border: 1px solid #e0e0e0;
                border-radius: 24px;
                outline: none;
                font-size: 14px;
                transition: border-color 0.2s;
            }

            .ai-input:focus {
                border-color: #FF8C00;
            }

            .ai-send-btn {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%);
                border: none;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s;
            }

            .ai-send-btn:hover {
                transform: scale(1.1);
            }

            /* Responsivo */
            @media (max-width: 480px) {
                #ai-chat-container {
                    width: calc(100vw - 40px);
                    right: 20px;
                    bottom: 90px;
                    height: 400px;
                }

                #ai-assistant-button {
                    right: 20px;
                    bottom: 20px;
                }
            }

            /* Notificação */
            .ai-notification {
                position: absolute;
                top: -10px;
                right: -10px;
                background: #f44336;
                color: white;
                font-size: 12px;
                font-weight: bold;
                padding: 4px 8px;
                border-radius: 12px;
                min-width: 20px;
                text-align: center;
                animation: bounceIn 0.5s;
            }

            @keyframes bounceIn {
                0% {
                    transform: scale(0);
                }
                50% {
                    transform: scale(1.2);
                }
                100% {
                    transform: scale(1);
                }
            }
        `;

        document.head.appendChild(styles);
        document.body.appendChild(floatingButton);
        document.body.appendChild(chatContainer);
    }

    attachEventListeners() {
        const button = document.getElementById('ai-assistant-button');
        const closeBtn = document.querySelector('.ai-close-btn');
        const input = document.getElementById('ai-input');
        const sendBtn = document.getElementById('ai-send');

        button.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.closeChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Delegação de eventos para sugestões
        document.getElementById('ai-suggestions').addEventListener('click', (e) => {
            if (e.target.classList.contains('ai-suggestion-chip')) {
                this.sendMessage(e.target.textContent);
            }
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const container = document.getElementById('ai-chat-container');
        
        if (this.isOpen) {
            container.classList.remove('ai-chat-hidden');
            document.getElementById('ai-input').focus();
        } else {
            container.classList.add('ai-chat-hidden');
        }
    }

    closeChat() {
        this.isOpen = false;
        document.getElementById('ai-chat-container').classList.add('ai-chat-hidden');
    }

    sendMessage(text = null) {
        const input = document.getElementById('ai-input');
        const message = text || input.value.trim();
        
        if (!message) return;

        // Adiciona mensagem do usuário
        this.addMessage(message, 'user');
        
        // Limpa o input
        if (!text) input.value = '';

        // Mostra indicador de digitação
        this.showTyping();

        // Simula resposta da IA
        setTimeout(() => {
            this.removeTyping();
            const response = this.generateResponse(message);
            this.addMessage(response, 'ai');
            this.updateSuggestions();
        }, 1000 + Math.random() * 1000);
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('ai-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ai-message-${sender}`;
        
        if (sender === 'ai') {
            messageDiv.innerHTML = `
                <div class="ai-message-avatar">
                    <img src="/static/robot-auditor-icon.svg" style="width: 20px; height: 20px; filter: brightness(0) invert(1);">
                </div>
                <div class="ai-message-content">${text}</div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="ai-message-avatar">U</div>
                <div class="ai-message-content">${text}</div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        this.messages.push({ text, sender, timestamp: new Date() });
    }

    showTyping() {
        const messagesContainer = document.getElementById('ai-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message ai-message-ai';
        typingDiv.id = 'ai-typing-indicator';
        typingDiv.innerHTML = `
            <div class="ai-message-avatar">
                <img src="/static/robot-auditor-icon.svg" style="width: 20px; height: 20px; filter: brightness(0) invert(1);">
            </div>
            <div class="ai-typing">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    removeTyping() {
        const typingIndicator = document.getElementById('ai-typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        const context = this.currentContext;

        // Respostas contextuais baseadas na página atual
        const contextResponses = {
            '/': {
                'glosas': 'Nosso sistema já economizou R$ 2.4M em glosas através da análise preditiva de IA. Posso mostrar um relatório detalhado?',
                'pacientes': 'Temos atualmente 847 pacientes em navegação ativa. O sistema monitora cada jornada individualmente.',
                'estatísticas': 'As estatísticas mostram: 847 pacientes ativos, 423 médicos cadastrados, 56 navegadores especialistas e 89 estudos em andamento.',
                default: 'Como posso ajudá-lo a navegar pelo dashboard principal? Posso explicar qualquer métrica ou direcionar você para um módulo específico.'
            },
            '/paciente': {
                'exames': 'Posso ajudá-lo a agendar exames ou visualizar resultados anteriores. Qual você prefere?',
                'consulta': 'Vejo que você precisa de informações sobre consultas. Posso verificar disponibilidade ou remarcar um horário.',
                'tratamento': 'Seu plano de tratamento está disponível na aba "Minha Jornada". Deseja que eu explique alguma etapa específica?',
                default: 'Estou aqui para auxiliar em sua jornada oncológica. Posso ajudar com agendamentos, exames, medicações ou dúvidas sobre seu tratamento.'
            },
            '/medico': {
                'paciente': 'Posso buscar informações detalhadas de pacientes ou ajudar a criar novos protocolos de tratamento.',
                'protocolo': 'Temos 15 protocolos atualizados este mês. Deseja revisar algum específico?',
                'evidência': 'Posso fornecer as últimas evidências científicas relacionadas ao caso que você está analisando.',
                default: 'Como posso auxiliar em suas decisões clínicas hoje? Tenho acesso a protocolos, evidências e históricos de pacientes.'
            },
            '/navegador': {
                'jornada': 'Posso otimizar rotas de navegação ou identificar pacientes que precisam de atenção prioritária.',
                'alerta': 'Há 3 alertas pendentes que requerem sua atenção. Deseja visualizá-los agora?',
                'suporte': 'O sistema de suporte está integrado. Posso conectá-lo com especialistas ou recursos específicos.',
                default: 'Vou ajudá-lo a gerenciar as jornadas dos pacientes. Posso priorizar casos, otimizar rotas ou gerar relatórios de acompanhamento.'
            },
            '/financeiro': {
                'glosas': 'Nossa IA preveniu R$ 2.4M em glosas. Posso mostrar análise detalhada por categoria ou período.',
                'faturamento': 'O faturamento está 15% acima da média. Deseja ver o breakdown por procedimento?',
                'auditoria': 'A auditoria automática identificou 23 oportunidades de otimização. Quer revisar?',
                default: 'Posso ajudar com análises financeiras, prevenção de glosas, otimização de faturamento ou auditorias automatizadas.'
            },
            '/admin-master': {
                'usuários': 'Gerenciamento de usuários disponível. Posso ajudar a configurar permissões ou criar novos acessos.',
                'sistema': 'Status do sistema: Todos os serviços operacionais. MEP com 95% de acurácia.',
                'treinar': 'O módulo de treinamento de IA está pronto. Podemos iniciar uma nova sessão de RLHF.',
                default: 'Como Master Admin, você tem acesso total. Posso auxiliar com configurações do sistema, treinamento de IA ou gerenciamento de usuários.'
            }
        };

        // Busca resposta contextual
        const pageResponses = contextResponses[context] || contextResponses['/'];
        
        for (const [key, response] of Object.entries(pageResponses)) {
            if (key !== 'default' && lowerMessage.includes(key)) {
                return response;
            }
        }

        // Respostas gerais
        if (lowerMessage.includes('ajuda') || lowerMessage.includes('help')) {
            return 'Sou seu assistente IA integrado. Posso ajudar com navegação, insights sobre dados, alertas importantes e suporte em tempo real. Como posso ajudá-lo?';
        }

        if (lowerMessage.includes('oi') || lowerMessage.includes('olá') || lowerMessage.includes('bom dia') || lowerMessage.includes('boa tarde')) {
            return 'Olá! Sou o assistente IA do ACCamargo. Estou aqui para tornar sua experiência mais eficiente. Em que posso ajudar?';
        }

        if (lowerMessage.includes('obrigado') || lowerMessage.includes('valeu')) {
            return 'Por nada! Estou sempre disponível para ajudar. Se precisar de mais alguma coisa, é só chamar! 😊';
        }

        return pageResponses.default;
    }

    updateSuggestions() {
        const suggestionsContainer = document.getElementById('ai-suggestions');
        const context = this.currentContext;
        
        const suggestions = {
            '/': ['Ver estatísticas detalhadas', 'Explicar economia de glosas', 'Mostrar alertas'],
            '/paciente': ['Agendar consulta', 'Ver resultados de exames', 'Minha jornada'],
            '/medico': ['Buscar paciente', 'Protocolos atualizados', 'Evidências científicas'],
            '/navegador': ['Pacientes prioritários', 'Otimizar rotas', 'Ver alertas'],
            '/financeiro': ['Análise de glosas', 'Relatório mensal', 'Oportunidades'],
            '/admin-master': ['Status do sistema', 'Treinar IA', 'Gerenciar usuários']
        };

        const currentSuggestions = suggestions[context] || suggestions['/'];
        
        suggestionsContainer.innerHTML = currentSuggestions.map(suggestion => 
            `<div class="ai-suggestion-chip">${suggestion}</div>`
        ).join('');
    }

    startContextAnalysis() {
        // Monitora mudanças de página
        let lastPath = window.location.pathname;
        setInterval(() => {
            if (window.location.pathname !== lastPath) {
                lastPath = window.location.pathname;
                this.currentContext = lastPath;
                this.onContextChange();
            }
        }, 1000);

        // Analisa ações do usuário periodicamente
        setInterval(() => {
            this.analyzeUserBehavior();
        }, 30000); // A cada 30 segundos
    }

    onContextChange() {
        if (this.isOpen) {
            this.addMessage(`Vejo que você navegou para ${this.getPageName()}. Posso ajudá-lo com algo específico desta seção?`, 'ai');
            this.updateSuggestions();
        } else {
            // Mostra notificação discreta
            this.showNotification();
        }
    }

    getPageName() {
        const pageNames = {
            '/': 'Dashboard Principal',
            '/paciente': 'Portal do Paciente',
            '/medico': 'Dashboard Médico',
            '/navegador': 'Central de Navegação',
            '/financeiro': 'Gestão Financeira',
            '/bem-estar': 'Programa de Bem-Estar',
            '/pesquisa': 'Pesquisa Clínica',
            '/admin': 'Administração',
            '/admin-master': 'Master Admin',
            '/ia': 'Central de IA'
        };
        return pageNames[this.currentContext] || 'esta página';
    }

    showNotification() {
        const button = document.getElementById('ai-assistant-button');
        const existing = button.querySelector('.ai-notification');
        
        if (!existing) {
            const notification = document.createElement('div');
            notification.className = 'ai-notification';
            notification.textContent = '1';
            button.querySelector('.ai-button-wrapper').appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 5000);
        }
    }

    analyzeUserBehavior() {
        // Análise simples de comportamento
        const timeOnPage = Date.now() - this.pageLoadTime;
        
        if (timeOnPage > 120000 && !this.hasOfferedHelp) { // 2 minutos
            this.hasOfferedHelp = true;
            if (!this.isOpen) {
                this.showNotification();
            }
        }
    }

    showWelcomeMessage() {
        // Mensagem de boas-vindas inicial
        setTimeout(() => {
            if (!this.isOpen && !sessionStorage.getItem('ai-welcomed')) {
                this.addMessage('Olá! Sou seu assistente IA. Clique no botão laranja para conversar comigo a qualquer momento! 🤖', 'ai');
                this.showNotification();
                sessionStorage.setItem('ai-welcomed', 'true');
            }
        }, 3000);
    }
}

// Inicializa o assistente quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    window.aiAssistant = new AIAssistant();
});