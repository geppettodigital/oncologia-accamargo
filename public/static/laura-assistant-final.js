// LAURA Assistant - Sistema Completo e Integrado
// Tecnologia orquestradora da plataforma oncológica

class LauraAssistant {
    constructor() {
        this.isOpen = false;
        this.isMinimized = false;
        this.messages = [];
        this.currentView = 'chat';
        this.currentContext = window.location.pathname;
        this.sessionId = 'laura-session-' + Date.now();
        this.userName = localStorage.getItem('userName') || 'Usuário';
        this.anxietyAlerts = []; // Sistema Ansiedade de Laura
        this.init();
    }

    init() {
        this.createLauraWidget();
        this.attachEventListeners();
        this.initializeAnxietySystem();
        this.startContextMonitoring();
    }

    createLauraWidget() {
        // Remove assistentes antigos
        const oldElements = document.querySelectorAll('[id*="ai-assistant"], [id*="assistant-ultimate"]');
        oldElements.forEach(el => el.remove());

        // Botão LAURA minimalista
        const lauraButton = document.createElement('div');
        lauraButton.id = 'laura-assistant-button';
        lauraButton.innerHTML = `
            <div class="laura-fab">
                <div class="laura-logo">
                    <!-- Logo LAURA fiel ao vetor -->
                    <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <!-- Rounded square container -->
                        <rect x="10" y="10" width="80" height="80" rx="20" ry="20" 
                              fill="#ff6b35" stroke="none"/>
                        <!-- Robot eyes -->
                        <rect x="25" y="30" width="15" height="15" rx="3" fill="white"/>
                        <rect x="60" y="30" width="15" height="15" rx="3" fill="white"/>
                        <!-- Robot smile -->
                        <path d="M 30 60 Q 50 70 70 60" 
                              stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="laura-pulse"></div>
                <div class="laura-anxiety-badge" style="display: none;">
                    <span>0</span>
                </div>
            </div>
        `;

        // Container Principal LAURA
        const lauraContainer = document.createElement('div');
        lauraContainer.id = 'laura-assistant-container';
        lauraContainer.className = 'laura-hidden';
        lauraContainer.innerHTML = `
            <!-- Overlay -->
            <div class="laura-overlay"></div>
            
            <!-- Janela Principal LAURA -->
            <div class="laura-window">
                <!-- Header LAURA -->
                <div class="laura-header">
                    <div class="laura-header-brand">
                        <div class="laura-header-logo">
                            <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <!-- Rounded square container -->
                                <rect x="10" y="10" width="80" height="80" rx="20" ry="20" 
                                      fill="#ff6b35" stroke="none"/>
                                <!-- Robot eyes -->
                                <rect x="25" y="30" width="15" height="15" rx="3" fill="white"/>
                                <rect x="60" y="30" width="15" height="15" rx="3" fill="white"/>
                                <!-- Robot smile -->
                                <path d="M 30 60 Q 50 70 70 60" 
                                      stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="laura-header-info">
                            <div class="laura-title">LAURA Assistant</div>
                            <div class="laura-subtitle">
                                <span class="laura-status-dot"></span>
                                Sistema de Ansiedade Ativo
                            </div>
                        </div>
                    </div>
                    
                    <div class="laura-header-nav">
                        <button class="laura-nav-btn active" data-view="chat">
                            <i class="fas fa-comments"></i>
                            <span>Conversação</span>
                        </button>
                        <button class="laura-nav-btn" data-view="anxiety">
                            <i class="fas fa-heartbeat"></i>
                            <span>Ansiedade de Laura</span>
                        </button>
                        <button class="laura-nav-btn" data-view="360">
                            <i class="fas fa-eye"></i>
                            <span>Visão 360°</span>
                        </button>
                        <button class="laura-nav-btn" data-view="actions">
                            <i class="fas fa-tasks"></i>
                            <span>Ações</span>
                        </button>
                    </div>
                    
                    <div class="laura-header-controls">
                        <button class="laura-control minimize-btn" title="Minimizar">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button class="laura-control close-btn" title="Fechar">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <!-- Corpo Principal -->
                <div class="laura-body">
                    <!-- View: Chat -->
                    <div class="laura-view laura-view-chat active" data-view="chat">
                        <div class="laura-messages" id="laura-messages">
                            <div class="laura-welcome">
                                <div class="laura-welcome-logo">
                                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                                        <rect x="20" y="15" width="60" height="70" rx="8" fill="url(#lauraGradient)" stroke="none"/>
                                        <rect x="30" y="35" width="12" height="12" rx="2" fill="white"/>
                                        <rect x="48" y="35" width="12" height="12" rx="2" fill="white"/>
                                        <path d="M35 60 Q50 70 65 60" stroke="white" stroke-width="4" stroke-linecap="round" fill="none"/>
                                        <defs>
                                            <linearGradient id="lauraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stop-color="#FF8C00"/>
                                                <stop offset="100%" stop-color="#FF6B35"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <h2>Olá, eu sou LAURA</h2>
                                <p>Sua assistente inteligente para gestão oncológica</p>
                                <div class="laura-quick-actions">
                                    <button class="laura-quick-card" onclick="lauraAssistant.checkAnxiety()">
                                        <i class="fas fa-exclamation-triangle"></i>
                                        <span>Verificar Ansiedades</span>
                                    </button>
                                    <button class="laura-quick-card" onclick="lauraAssistant.show360View()">
                                        <i class="fas fa-eye"></i>
                                        <span>Visão 360°</span>
                                    </button>
                                    <button class="laura-quick-card" onclick="lauraAssistant.generatePlan()">
                                        <i class="fas fa-clipboard-list"></i>
                                        <span>Gerar Plano</span>
                                    </button>
                                    <button class="laura-quick-card" onclick="lauraAssistant.showMetrics()">
                                        <i class="fas fa-chart-bar"></i>
                                        <span>Métricas</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- View: Ansiedade de Laura -->
                    <div class="laura-view laura-view-anxiety" data-view="anxiety">
                        <div class="laura-anxiety-container">
                            <div class="laura-anxiety-header">
                                <h2>
                                    <i class="fas fa-heartbeat"></i>
                                    Sistema de Ansiedade de Laura
                                </h2>
                                <p>Monitoramento inteligente de riscos e alertas críticos</p>
                            </div>
                            
                            <div class="laura-anxiety-metrics">
                                <div class="anxiety-metric critical">
                                    <div class="metric-value">3</div>
                                    <div class="metric-label">Críticos</div>
                                </div>
                                <div class="anxiety-metric high">
                                    <div class="metric-value">7</div>
                                    <div class="metric-label">Alta Prioridade</div>
                                </div>
                                <div class="anxiety-metric medium">
                                    <div class="metric-value">12</div>
                                    <div class="metric-label">Média</div>
                                </div>
                                <div class="anxiety-metric low">
                                    <div class="metric-value">28</div>
                                    <div class="metric-label">Baixa</div>
                                </div>
                            </div>

                            <div class="laura-anxiety-alerts" id="anxiety-alerts">
                                <!-- Alertas de ansiedade aparecerão aqui -->
                            </div>
                        </div>
                    </div>

                    <!-- View: Visão 360° -->
                    <div class="laura-view laura-view-360" data-view="360">
                        <div class="laura-360-container">
                            <div class="laura-360-header">
                                <h2>Visão 360° do Paciente</h2>
                                <div class="patient-selector">
                                    <select id="patient-select" class="laura-select">
                                        <option>Selecione um paciente...</option>
                                        <option>PAC-001 - Maria Silva</option>
                                        <option>PAC-002 - João Santos</option>
                                        <option>PAC-003 - Ana Costa</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="laura-360-content" id="view-360-content">
                                <!-- Conteúdo 360° será carregado aqui -->
                            </div>
                        </div>
                    </div>

                    <!-- View: Ações -->
                    <div class="laura-view laura-view-actions" data-view="actions">
                        <div class="laura-actions-container">
                            <h2>Central de Ações</h2>
                            <div class="laura-actions-grid" id="actions-grid">
                                <!-- Ações serão carregadas aqui -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Barra de Input -->
                <div class="laura-input-bar">
                    <div class="laura-input-wrapper">
                        <button class="laura-input-btn" id="laura-attach">
                            <i class="fas fa-paperclip"></i>
                        </button>
                        <input 
                            type="text" 
                            id="laura-input" 
                            class="laura-input-field" 
                            placeholder="Converse com LAURA..."
                        />
                        <button class="laura-input-btn" id="laura-voice">
                            <i class="fas fa-microphone"></i>
                        </button>
                        <button class="laura-send-btn" id="laura-send">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <div class="laura-typing" id="laura-typing" style="display: none;">
                        <span>LAURA está analisando...</span>
                        <div class="typing-dots">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Estilos CSS para LAURA
        const styles = document.createElement('style');
        styles.innerHTML = `
            /* LAURA Assistant Styles */
            :root {
                --laura-primary: #FF8C00;
                --laura-secondary: #FF6B35;
                --laura-green: #2B5F3F;
                --laura-green-light: #3a7d52;
                --laura-danger: #f44336;
                --laura-warning: #FF9800;
                --laura-success: #4CAF50;
                --laura-info: #2196F3;
                --laura-dark: #1a1a1a;
                --laura-gray: #f8f9fa;
                --laura-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                --laura-radius: 16px;
            }

            /* Botão Flutuante LAURA */
            #laura-assistant-button {
                position: fixed;
                bottom: 32px;
                right: 32px;
                z-index: 99999;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .laura-fab {
                position: relative;
                width: 64px;
                height: 64px;
            }

            .laura-logo {
                width: 64px;
                height: 64px;
                background: linear-gradient(135deg, var(--laura-primary) 0%, var(--laura-secondary) 100%);
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 6px 20px rgba(255, 140, 0, 0.4);
                transition: all 0.3s ease;
            }

            .laura-fab:hover .laura-logo {
                transform: scale(1.1);
                box-shadow: 0 8px 30px rgba(255, 140, 0, 0.6);
            }

            .laura-pulse {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 20px;
                background: linear-gradient(135deg, var(--laura-primary) 0%, var(--laura-secondary) 100%);
                opacity: 0.4;
                animation: lauraPulse 2s infinite;
                pointer-events: none;
            }

            @keyframes lauraPulse {
                0%, 100% {
                    transform: scale(1);
                    opacity: 0.4;
                }
                50% {
                    transform: scale(1.2);
                    opacity: 0;
                }
            }

            .laura-anxiety-badge {
                position: absolute;
                top: -4px;
                right: -4px;
                min-width: 24px;
                height: 24px;
                background: var(--laura-danger);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;
                font-weight: bold;
                border: 3px solid white;
                animation: bounceIn 0.5s;
            }

            /* Container Principal LAURA */
            #laura-assistant-container {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 99998;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }

            #laura-assistant-container.laura-hidden {
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
            }

            .laura-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(10px);
            }

            /* Janela LAURA */
            .laura-window {
                position: relative;
                width: calc(100vw - 80px);
                height: calc(100vh - 80px);
                max-width: 1400px;
                max-height: 900px;
                background: white;
                border-radius: 24px;
                box-shadow: var(--laura-shadow), 0 0 100px rgba(255, 140, 0, 0.1);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                animation: lauraSlideUp 0.3s ease;
            }

            @keyframes lauraSlideUp {
                from {
                    transform: translateY(20px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            .laura-window.minimized {
                width: 420px;
                height: 600px;
                bottom: 100px;
                right: 32px;
                position: fixed;
            }

            /* Header LAURA */
            .laura-header {
                background: linear-gradient(135deg, var(--laura-green) 0%, var(--laura-green-light) 100%);
                padding: 16px 24px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: white;
                flex-shrink: 0;
            }

            .laura-header-brand {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .laura-header-logo {
                width: 40px;
                height: 40px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .laura-title {
                font-size: 18px;
                font-weight: 700;
                letter-spacing: 0.5px;
            }

            .laura-subtitle {
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 12px;
                opacity: 0.9;
            }

            .laura-status-dot {
                width: 6px;
                height: 6px;
                background: #4CAF50;
                border-radius: 50%;
                animation: blink 2s infinite;
            }

            /* Navigation */
            .laura-header-nav {
                display: flex;
                gap: 8px;
                background: rgba(0, 0, 0, 0.2);
                padding: 4px;
                border-radius: 12px;
            }

            .laura-nav-btn {
                padding: 8px 16px;
                background: transparent;
                border: none;
                color: rgba(255, 255, 255, 0.7);
                font-size: 14px;
                font-weight: 500;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .laura-nav-btn:hover {
                background: rgba(255, 255, 255, 0.1);
                color: white;
            }

            .laura-nav-btn.active {
                background: rgba(255, 255, 255, 0.25);
                color: white;
            }

            /* Controls */
            .laura-header-controls {
                display: flex;
                gap: 8px;
            }

            .laura-control {
                width: 32px;
                height: 32px;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 8px;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
            }

            .laura-control:hover {
                background: rgba(255, 255, 255, 0.2);
            }

            /* Body */
            .laura-body {
                flex: 1;
                overflow: hidden;
                position: relative;
                background: var(--laura-gray);
            }

            .laura-view {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                overflow-y: auto;
            }

            .laura-view.active {
                opacity: 1;
                visibility: visible;
            }

            /* Chat View */
            .laura-messages {
                padding: 24px;
                height: 100%;
                overflow-y: auto;
            }

            .laura-welcome {
                text-align: center;
                padding: 48px 24px;
                max-width: 600px;
                margin: 0 auto;
            }

            .laura-welcome-logo {
                margin-bottom: 24px;
            }

            .laura-welcome h2 {
                color: var(--laura-green);
                margin-bottom: 8px;
                font-size: 28px;
            }

            .laura-welcome p {
                color: #666;
                margin-bottom: 32px;
            }

            .laura-quick-actions {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 12px;
            }

            .laura-quick-card {
                padding: 16px;
                background: white;
                border: 2px solid #e0e0e0;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                font-size: 14px;
                color: #333;
            }

            .laura-quick-card:hover {
                border-color: var(--laura-primary);
                transform: translateY(-4px);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            }

            .laura-quick-card i {
                font-size: 24px;
                color: var(--laura-primary);
            }

            /* Ansiedade de Laura View */
            .laura-anxiety-container {
                padding: 24px;
            }

            .laura-anxiety-header {
                text-align: center;
                margin-bottom: 32px;
            }

            .laura-anxiety-header h2 {
                color: var(--laura-green);
                margin-bottom: 8px;
            }

            .laura-anxiety-header p {
                color: #666;
            }

            .laura-anxiety-metrics {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 16px;
                margin-bottom: 32px;
            }

            .anxiety-metric {
                padding: 20px;
                border-radius: 12px;
                text-align: center;
                color: white;
            }

            .anxiety-metric.critical {
                background: linear-gradient(135deg, #f44336, #ef5350);
            }

            .anxiety-metric.high {
                background: linear-gradient(135deg, #FF8C00, #FF6B35);
            }

            .anxiety-metric.medium {
                background: linear-gradient(135deg, #FFB300, #FFC107);
            }

            .anxiety-metric.low {
                background: linear-gradient(135deg, #4CAF50, #66BB6A);
            }

            .metric-value {
                font-size: 36px;
                font-weight: bold;
                margin-bottom: 4px;
            }

            .metric-label {
                font-size: 14px;
                opacity: 0.9;
            }

            .laura-anxiety-alerts {
                display: grid;
                gap: 16px;
            }

            .anxiety-alert-card {
                background: white;
                border-radius: 12px;
                padding: 16px;
                border-left: 4px solid;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                cursor: pointer;
                transition: all 0.2s;
            }

            .anxiety-alert-card:hover {
                transform: translateX(4px);
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
            }

            .anxiety-alert-card.critical {
                border-color: var(--laura-danger);
            }

            .anxiety-alert-card.high {
                border-color: var(--laura-primary);
            }

            /* 360 View */
            .laura-360-container {
                padding: 24px;
            }

            .laura-360-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 24px;
            }

            .laura-360-header h2 {
                color: var(--laura-green);
            }

            .laura-select {
                padding: 8px 16px;
                border: 1px solid #ddd;
                border-radius: 8px;
                font-size: 14px;
                background: white;
                cursor: pointer;
            }

            .laura-360-content {
                background: white;
                border-radius: 12px;
                padding: 24px;
                min-height: 400px;
            }

            /* Actions View */
            .laura-actions-container {
                padding: 24px;
            }

            .laura-actions-container h2 {
                color: var(--laura-green);
                margin-bottom: 24px;
            }

            .laura-actions-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 16px;
            }

            /* Input Bar */
            .laura-input-bar {
                padding: 16px 24px;
                background: white;
                border-top: 1px solid #e0e0e0;
                flex-shrink: 0;
            }

            .laura-input-wrapper {
                display: flex;
                align-items: center;
                gap: 8px;
                background: var(--laura-gray);
                border-radius: 24px;
                padding: 4px 4px 4px 16px;
            }

            .laura-input-btn {
                width: 36px;
                height: 36px;
                background: transparent;
                border: none;
                color: #999;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
                border-radius: 50%;
            }

            .laura-input-btn:hover {
                background: white;
                color: var(--laura-primary);
            }

            .laura-input-field {
                flex: 1;
                background: transparent;
                border: none;
                outline: none;
                font-size: 14px;
                color: #333;
                padding: 8px 0;
            }

            .laura-send-btn {
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, var(--laura-primary) 0%, var(--laura-secondary) 100%);
                border: none;
                border-radius: 50%;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
            }

            .laura-send-btn:hover {
                transform: scale(1.1);
            }

            .laura-typing {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                margin-top: 8px;
                background: var(--laura-gray);
                border-radius: 12px;
                font-size: 13px;
                color: #666;
                width: fit-content;
            }

            .typing-dots {
                display: flex;
                gap: 4px;
            }

            .typing-dots span {
                width: 6px;
                height: 6px;
                background: var(--laura-primary);
                border-radius: 50%;
                animation: typingDot 1.4s infinite;
            }

            .typing-dots span:nth-child(2) {
                animation-delay: 0.2s;
            }

            .typing-dots span:nth-child(3) {
                animation-delay: 0.4s;
            }

            @keyframes typingDot {
                0%, 60%, 100% { transform: translateY(0); }
                30% { transform: translateY(-10px); }
            }

            /* Message Styles */
            .laura-message {
                display: flex;
                gap: 12px;
                margin-bottom: 16px;
                animation: fadeInUp 0.3s ease;
            }

            .laura-message-user {
                flex-direction: row-reverse;
            }

            .laura-message-avatar {
                width: 40px;
                height: 40px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .laura-message-laura .laura-message-avatar {
                background: linear-gradient(135deg, var(--laura-primary) 0%, var(--laura-secondary) 100%);
            }

            .laura-message-user .laura-message-avatar {
                background: linear-gradient(135deg, var(--laura-green) 0%, var(--laura-green-light) 100%);
                color: white;
                font-weight: bold;
            }

            .laura-message-content {
                max-width: 70%;
                padding: 12px 16px;
                border-radius: 16px;
                font-size: 14px;
                line-height: 1.6;
            }

            .laura-message-laura .laura-message-content {
                background: white;
                color: #333;
                border: 1px solid #e0e0e0;
                border-bottom-left-radius: 4px;
            }

            .laura-message-user .laura-message-content {
                background: linear-gradient(135deg, var(--laura-green) 0%, var(--laura-green-light) 100%);
                color: white;
                border-bottom-right-radius: 4px;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .laura-window {
                    width: 100vw;
                    height: 100vh;
                    border-radius: 0;
                    max-width: none;
                    max-height: none;
                }

                .laura-nav-btn span {
                    display: none;
                }

                .laura-header-info {
                    display: none;
                }
            }

            /* Scrollbar */
            .laura-messages::-webkit-scrollbar,
            .laura-view::-webkit-scrollbar {
                width: 6px;
            }

            .laura-messages::-webkit-scrollbar-track,
            .laura-view::-webkit-scrollbar-track {
                background: transparent;
            }

            .laura-messages::-webkit-scrollbar-thumb,
            .laura-view::-webkit-scrollbar-thumb {
                background: #ddd;
                border-radius: 3px;
            }
        `;

        document.head.appendChild(styles);
        document.body.appendChild(lauraButton);
        document.body.appendChild(lauraContainer);
    }

    attachEventListeners() {
        // Botão principal
        const button = document.getElementById('laura-assistant-button');
        button.addEventListener('click', () => this.toggle());

        // Controles
        document.querySelector('.minimize-btn').addEventListener('click', () => this.toggleMinimize());
        document.querySelector('.close-btn').addEventListener('click', () => this.close());

        // Navegação
        document.querySelectorAll('.laura-nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchView(e.currentTarget.dataset.view);
            });
        });

        // Input
        const input = document.getElementById('laura-input');
        const sendBtn = document.getElementById('laura-send');
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        sendBtn.addEventListener('click', () => this.sendMessage());

        // Patient selector
        document.getElementById('patient-select')?.addEventListener('change', (e) => {
            this.load360View(e.target.value);
        });

        // Overlay click
        document.querySelector('.laura-overlay').addEventListener('click', () => {
            if (this.isMinimized) {
                this.close();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
                e.preventDefault();
                this.toggle();
            }
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        const container = document.getElementById('laura-assistant-container');
        
        if (this.isOpen) {
            container.classList.remove('laura-hidden');
            this.focusInput();
            this.checkAnxietyAlerts();
        } else {
            container.classList.add('laura-hidden');
        }
    }

    close() {
        this.isOpen = false;
        document.getElementById('laura-assistant-container').classList.add('laura-hidden');
    }

    toggleMinimize() {
        this.isMinimized = !this.isMinimized;
        const window = document.querySelector('.laura-window');
        const overlay = document.querySelector('.laura-overlay');
        
        if (this.isMinimized) {
            window.classList.add('minimized');
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
        } else {
            window.classList.remove('minimized');
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'auto';
        }
    }

    switchView(view) {
        this.currentView = view;
        
        // Update navigation
        document.querySelectorAll('.laura-nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });
        
        // Update views
        document.querySelectorAll('.laura-view').forEach(v => {
            v.classList.toggle('active', v.dataset.view === view);
        });
        
        // Load content
        this.loadViewContent(view);
    }

    loadViewContent(view) {
        switch(view) {
            case 'anxiety':
                this.loadAnxietyView();
                break;
            case '360':
                this.load360View();
                break;
            case 'actions':
                this.loadActionsView();
                break;
        }
    }

    // Sistema de Ansiedade de Laura
    initializeAnxietySystem() {
        // Monitora alertas críticos continuamente
        this.anxietyMonitor = setInterval(() => {
            this.checkAnxietyAlerts();
        }, 30000); // Verifica a cada 30 segundos
    }

    checkAnxietyAlerts() {
        // Simula verificação de ansiedades
        const alerts = [
            { id: 1, type: 'critical', message: 'Risco de glosa iminente - R$ 127.450,00', patient: 'PAC-001' },
            { id: 2, type: 'high', message: 'Autorização expirando em 24h', patient: 'PAC-002' },
            { id: 3, type: 'critical', message: 'Protocolo não conforme detectado', patient: 'PAC-003' }
        ];
        
        this.anxietyAlerts = alerts;
        
        // Atualiza badge
        const badge = document.querySelector('.laura-anxiety-badge');
        const criticalCount = alerts.filter(a => a.type === 'critical').length;
        
        if (criticalCount > 0 && badge) {
            badge.style.display = 'flex';
            badge.querySelector('span').textContent = criticalCount;
        }
        
        return alerts;
    }

    checkAnxiety() {
        this.switchView('anxiety');
        this.sendMessage('Verificando ansiedades do sistema...');
    }

    loadAnxietyView() {
        const container = document.getElementById('anxiety-alerts');
        const alerts = this.checkAnxietyAlerts();
        
        container.innerHTML = alerts.map(alert => `
            <div class="anxiety-alert-card ${alert.type}" onclick="lauraAssistant.handleAnxietyAlert(${alert.id})">
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div>
                        <strong style="color: ${alert.type === 'critical' ? '#f44336' : '#FF8C00'};">
                            <i class="fas fa-exclamation-triangle"></i> ${alert.type.toUpperCase()}
                        </strong>
                        <p style="margin: 8px 0 4px 0;">${alert.message}</p>
                        <small style="color: #666;">Paciente: ${alert.patient}</small>
                    </div>
                    <button style="padding: 6px 12px; background: ${alert.type === 'critical' ? '#f44336' : '#FF8C00'}; 
                                   color: white; border: none; border-radius: 6px; cursor: pointer;">
                        Resolver
                    </button>
                </div>
            </div>
        `).join('');
    }

    handleAnxietyAlert(alertId) {
        // Gera plano de ação para o alerta
        if (window.actionPlanHandlers) {
            window.actionPlanHandlers.generateActionPlan('anxiety-' + alertId);
        }
        
        this.addMessage('Gerando plano de ação para resolver esta ansiedade...', 'laura');
    }

    // Visão 360°
    show360View() {
        this.switchView('360');
    }

    load360View(patientId) {
        const container = document.getElementById('view-360-content');
        
        if (!patientId || patientId === 'Selecione um paciente...') {
            container.innerHTML = `
                <div style="text-align: center; padding: 48px; color: #999;">
                    <i class="fas fa-user-circle" style="font-size: 64px; margin-bottom: 16px;"></i>
                    <p>Selecione um paciente para visualizar sua jornada completa</p>
                </div>
            `;
            return;
        }
        
        // Carrega dados 360° do paciente
        container.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
                <div style="padding: 16px; background: linear-gradient(135deg, #4CAF50, #66BB6A); color: white; border-radius: 12px;">
                    <div style="font-size: 24px; font-weight: bold;">85%</div>
                    <div style="font-size: 14px; opacity: 0.9;">Aderência ao Tratamento</div>
                </div>
                <div style="padding: 16px; background: linear-gradient(135deg, #2196F3, #42A5F5); color: white; border-radius: 12px;">
                    <div style="font-size: 24px; font-weight: bold;">12</div>
                    <div style="font-size: 14px; opacity: 0.9;">Consultas Realizadas</div>
                </div>
                <div style="padding: 16px; background: linear-gradient(135deg, #FF8C00, #FF6B35); color: white; border-radius: 12px;">
                    <div style="font-size: 24px; font-weight: bold;">3</div>
                    <div style="font-size: 14px; opacity: 0.9;">Alertas Ativos</div>
                </div>
                <div style="padding: 16px; background: linear-gradient(135deg, #9C27B0, #AB47BC); color: white; border-radius: 12px;">
                    <div style="font-size: 24px; font-weight: bold;">R$ 45.2K</div>
                    <div style="font-size: 14px; opacity: 0.9;">Custo Total</div>
                </div>
            </div>
            
            <h3 style="color: #2B5F3F; margin-bottom: 16px;">Linha do Tempo da Jornada</h3>
            <div style="border-left: 3px solid #2B5F3F; padding-left: 20px;">
                <div style="margin-bottom: 16px;">
                    <div style="width: 12px; height: 12px; background: #2B5F3F; border-radius: 50%; margin-left: -26px; margin-bottom: -20px;"></div>
                    <strong>15/01/2025</strong> - Consulta de Rotina
                    <p style="color: #666; font-size: 13px; margin-top: 4px;">Dr. Carlos Silva - Oncologia</p>
                </div>
                <div style="margin-bottom: 16px;">
                    <div style="width: 12px; height: 12px; background: #FF8C00; border-radius: 50%; margin-left: -26px; margin-bottom: -20px;"></div>
                    <strong>10/01/2025</strong> - Exame de Imagem
                    <p style="color: #666; font-size: 13px; margin-top: 4px;">Tomografia - Resultado Normal</p>
                </div>
                <div style="margin-bottom: 16px;">
                    <div style="width: 12px; height: 12px; background: #4CAF50; border-radius: 50%; margin-left: -26px; margin-bottom: -20px;"></div>
                    <strong>05/01/2025</strong> - Medicação Ajustada
                    <p style="color: #666; font-size: 13px; margin-top: 4px;">Novo protocolo iniciado</p>
                </div>
            </div>
        `;
    }

    // Ações
    generatePlan() {
        if (window.actionPlanHandlers) {
            window.actionPlanHandlers.generateActionPlan('laura-' + Date.now());
        }
        this.addMessage('Gerando plano de ação personalizado...', 'laura');
    }

    loadActionsView() {
        const container = document.getElementById('actions-grid');
        
        container.innerHTML = `
            <div style="background: white; border-radius: 12px; padding: 20px; border: 2px solid #e0e0e0; cursor: pointer; transition: all 0.3s;"
                 onmouseover="this.style.borderColor='#FF8C00'; this.style.transform='translateY(-4px)'"
                 onmouseout="this.style.borderColor='#e0e0e0'; this.style.transform='translateY(0)'"
                 onclick="lauraAssistant.generatePlan()">
                <i class="fas fa-plus-circle" style="font-size: 32px; color: #FF8C00; margin-bottom: 12px;"></i>
                <h3 style="color: #333; margin-bottom: 8px;">Novo Plano de Ação</h3>
                <p style="color: #666; font-size: 14px;">Criar plano personalizado com análise de riscos</p>
            </div>
            
            <div style="background: white; border-radius: 12px; padding: 20px; border: 2px solid #e0e0e0; cursor: pointer; transition: all 0.3s;"
                 onmouseover="this.style.borderColor='#2196F3'; this.style.transform='translateY(-4px)'"
                 onmouseout="this.style.borderColor='#e0e0e0'; this.style.transform='translateY(0)'"
                 onclick="lauraAssistant.analyzeFinancial()">
                <i class="fas fa-chart-line" style="font-size: 32px; color: #2196F3; margin-bottom: 12px;"></i>
                <h3 style="color: #333; margin-bottom: 8px;">Análise Financeira</h3>
                <p style="color: #666; font-size: 14px;">Impacto financeiro e projeções</p>
            </div>
            
            <div style="background: white; border-radius: 12px; padding: 20px; border: 2px solid #e0e0e0; cursor: pointer; transition: all 0.3s;"
                 onmouseover="this.style.borderColor='#4CAF50'; this.style.transform='translateY(-4px)'"
                 onmouseout="this.style.borderColor='#e0e0e0'; this.style.transform='translateY(0)'"
                 onclick="lauraAssistant.delegate()">
                <i class="fas fa-users" style="font-size: 32px; color: #4CAF50; margin-bottom: 12px;"></i>
                <h3 style="color: #333; margin-bottom: 8px;">Delegar Tarefa</h3>
                <p style="color: #666; font-size: 14px;">Atribuir responsabilidades à equipe</p>
            </div>
        `;
    }

    analyzeFinancial() {
        if (window.actionPlanHandlers) {
            window.actionPlanHandlers.analyzeFinancialImpact('laura-' + Date.now());
        }
        this.addMessage('Analisando impacto financeiro...', 'laura');
    }

    delegate() {
        if (window.actionPlanHandlers) {
            window.actionPlanHandlers.delegateTask('laura-' + Date.now());
        }
        this.addMessage('Buscando melhores profissionais para delegar...', 'laura');
    }

    showMetrics() {
        this.addMessage('Acessando métricas do sistema... Economia total: R$ 2.4M em glosas evitadas este ano!', 'laura');
    }

    // Mensagens
    sendMessage(text = null) {
        const input = document.getElementById('laura-input');
        const message = text || input.value.trim();
        
        if (!message) return;
        
        // Remove welcome se existir
        const welcome = document.querySelector('.laura-welcome');
        if (welcome) welcome.remove();
        
        // Adiciona mensagem do usuário
        if (!text) {
            this.addMessage(message, 'user');
            input.value = '';
        }
        
        // Mostra typing
        this.showTyping();
        
        // Processa mensagem
        setTimeout(() => {
            this.hideTyping();
            const response = this.generateResponse(message);
            this.addMessage(response, 'laura');
        }, 1000 + Math.random() * 1000);
    }

    addMessage(content, sender) {
        const container = document.getElementById('laura-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `laura-message laura-message-${sender}`;
        
        const avatarContent = sender === 'laura' 
            ? '<svg width="20" height="20" viewBox="0 0 100 100" fill="none"><rect x="20" y="15" width="60" height="70" rx="8" fill="white" stroke="white" stroke-width="4"/><rect x="30" y="35" width="12" height="12" rx="2" fill="#FF8C00"/><rect x="48" y="35" width="12" height="12" rx="2" fill="#FF8C00"/><path d="M35 60 Q50 70 65 60" stroke="#FF8C00" stroke-width="4" stroke-linecap="round" fill="none"/></svg>'
            : this.userName.substring(0, 1).toUpperCase();
        
        messageDiv.innerHTML = `
            <div class="laura-message-avatar">
                ${avatarContent}
            </div>
            <div class="laura-message-content">
                ${content}
            </div>
        `;
        
        container.appendChild(messageDiv);
        container.scrollTop = container.scrollHeight;
        
        this.messages.push({ content, sender, timestamp: new Date() });
    }

    generateResponse(message) {
        const lower = message.toLowerCase();
        
        if (lower.includes('ansiedade') || lower.includes('alerta')) {
            this.switchView('anxiety');
            return 'Detectei 3 ansiedades críticas no sistema. Já estou exibindo na tela de Ansiedade de Laura para você resolver.';
        }
        
        if (lower.includes('360') || lower.includes('paciente')) {
            this.switchView('360');
            return 'Abrindo Visão 360° dos pacientes. Selecione um paciente para ver sua jornada completa.';
        }
        
        if (lower.includes('plano')) {
            this.generatePlan();
            return 'Gerando plano de ação completo com análise de riscos e responsabilidades...';
        }
        
        return 'Entendi sua solicitação. Como LAURA Assistant, estou processando isso para você.';
    }

    showTyping() {
        document.getElementById('laura-typing').style.display = 'flex';
    }

    hideTyping() {
        document.getElementById('laura-typing').style.display = 'none';
    }

    focusInput() {
        setTimeout(() => {
            document.getElementById('laura-input')?.focus();
        }, 100);
    }

    startContextMonitoring() {
        setInterval(() => {
            const newContext = window.location.pathname;
            if (newContext !== this.currentContext) {
                this.currentContext = newContext;
                this.onContextChange();
            }
        }, 1000);
    }

    onContextChange() {
        // Atualiza baseado no contexto
        console.log('LAURA: Contexto mudou para', this.currentContext);
    }
}

// Inicializa LAURA Assistant
document.addEventListener('DOMContentLoaded', () => {
    window.lauraAssistant = new LauraAssistant();
    console.log('🤖 LAURA Assistant inicializado com sucesso!');
});