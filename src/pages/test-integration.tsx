import { Hono } from 'hono'

const app = new Hono()

export const testIntegrationPage = (c: any) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Teste de Integração - Sistema de Planos de Ação</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            body {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
            }
            .test-card {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 30px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            .test-button {
                background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%);
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                font-weight: 600;
                transition: all 0.3s;
                cursor: pointer;
                border: none;
                margin: 5px;
            }
            .test-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(255, 140, 0, 0.4);
            }
            .console-output {
                background: #1a1a1a;
                color: #00ff00;
                padding: 20px;
                border-radius: 10px;
                font-family: 'Courier New', monospace;
                height: 400px;
                overflow-y: auto;
                margin-top: 20px;
            }
            .status-indicator {
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                margin-right: 8px;
            }
            .status-ok { background: #4CAF50; }
            .status-error { background: #f44336; }
            .status-loading { background: #FF9800; animation: pulse 1s infinite; }
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
        </style>
    </head>
    <body class="p-8">
        <div class="max-w-6xl mx-auto">
            <div class="test-card mb-8">
                <h1 class="text-3xl font-bold mb-2 flex items-center">
                    <i class="fas fa-vial mr-3 text-purple-600"></i>
                    Teste de Integração - Sistema de Planos de Ação
                </h1>
                <p class="text-gray-600 mb-6">Página dedicada para testar a integração entre AI Assistant, AI Concerns e Action Plan System</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Status dos Componentes -->
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="font-bold mb-3 text-gray-800">
                            <i class="fas fa-check-circle mr-2"></i>Status dos Componentes
                        </h3>
                        <div id="component-status">
                            <div class="mb-2">
                                <span class="status-indicator status-loading"></span>
                                <span>AI Assistant: </span>
                                <span id="status-assistant" class="font-mono">Verificando...</span>
                            </div>
                            <div class="mb-2">
                                <span class="status-indicator status-loading"></span>
                                <span>AI Concerns: </span>
                                <span id="status-concerns" class="font-mono">Verificando...</span>
                            </div>
                            <div class="mb-2">
                                <span class="status-indicator status-loading"></span>
                                <span>Action Plan System: </span>
                                <span id="status-actionplan" class="font-mono">Verificando...</span>
                            </div>
                            <div class="mb-2">
                                <span class="status-indicator status-loading"></span>
                                <span>Integration Module: </span>
                                <span id="status-integration" class="font-mono">Verificando...</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Controles de Teste -->
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="font-bold mb-3 text-gray-800">
                            <i class="fas fa-play-circle mr-2"></i>Controles de Teste
                        </h3>
                        <button onclick="testShowAssistant()" class="test-button w-full mb-2">
                            <i class="fas fa-robot mr-2"></i>Abrir Assistente com Alerta
                        </button>
                        <button onclick="testGeneratePlan()" class="test-button w-full mb-2">
                            <i class="fas fa-clipboard-list mr-2"></i>Gerar Plano de Ação
                        </button>
                        <button onclick="testCreateAlert()" class="test-button w-full mb-2">
                            <i class="fas fa-exclamation-triangle mr-2"></i>Criar Alerta de Teste
                        </button>
                        <button onclick="testFullIntegration()" class="test-button w-full">
                            <i class="fas fa-rocket mr-2"></i>Teste Completo
                        </button>
                    </div>
                </div>
                
                <!-- Área de Alertas de Teste -->
                <div class="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <h3 class="font-bold mb-3 text-gray-800">
                        <i class="fas fa-bell mr-2"></i>Alertas de Teste
                    </h3>
                    <div id="test-alerts" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Alertas serão adicionados aqui -->
                    </div>
                </div>
                
                <!-- Console de Saída -->
                <div class="mt-6">
                    <h3 class="font-bold mb-3 text-gray-800">
                        <i class="fas fa-terminal mr-2"></i>Console de Saída
                    </h3>
                    <div id="console-output" class="console-output">
                        <div>🚀 Sistema de teste iniciado...</div>
                        <div>Aguardando comandos...</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scripts -->
        <script src="/static/action-plan-system.js"></script>
        <script src="/static/action-plan-handlers.js"></script>
        <script src="/static/test-integration.js"></script>
        
        <script>
            // Função para adicionar log ao console
            function addLog(message, type = 'info') {
                const consoleDiv = document.getElementById('console-output');
                const timestamp = new Date().toLocaleTimeString();
                const colors = {
                    info: '#00ff00',
                    error: '#ff4444',
                    warning: '#ffaa00',
                    success: '#44ff44'
                };
                
                const logEntry = document.createElement('div');
                logEntry.style.color = colors[type] || colors.info;
                logEntry.innerHTML = \`[\${timestamp}] \${message}\`;
                consoleDiv.appendChild(logEntry);
                consoleDiv.scrollTop = consoleDiv.scrollHeight;
            }
            
            // Verifica status dos componentes
            function checkComponentStatus() {
                const components = [
                    { name: 'assistant', obj: window.aiAssistant },
                    { name: 'concerns', obj: window.aiConcerns },
                    { name: 'actionplan', obj: window.actionPlanSystem || window.ActionPlanSystem },
                    { name: 'integration', obj: window.actionPlanIntegration }
                ];
                
                components.forEach(comp => {
                    const statusEl = document.getElementById(\`status-\${comp.name}\`);
                    const indicatorEl = statusEl.parentElement.querySelector('.status-indicator');
                    
                    if (comp.obj) {
                        statusEl.textContent = 'Carregado ✓';
                        statusEl.style.color = '#4CAF50';
                        indicatorEl.className = 'status-indicator status-ok';
                        addLog(\`✅ \${comp.name} carregado com sucesso\`, 'success');
                    } else {
                        statusEl.textContent = 'Não encontrado ✗';
                        statusEl.style.color = '#f44336';
                        indicatorEl.className = 'status-indicator status-error';
                        addLog(\`❌ \${comp.name} não foi encontrado\`, 'error');
                    }
                });
            }
            
            // Testa abertura do assistente
            function testShowAssistant() {
                addLog('🤖 Abrindo assistente com mensagem de alerta...', 'info');
                
                if (window.actionPlanIntegration && window.actionPlanIntegration.showActionPlanAssistant) {
                    window.actionPlanIntegration.showActionPlanAssistant('test-alert-001');
                    addLog('✅ Assistente aberto com sucesso', 'success');
                } else {
                    addLog('❌ Função showActionPlanAssistant não encontrada', 'error');
                }
            }
            
            // Testa geração de plano
            function testGeneratePlan() {
                addLog('📋 Gerando plano de ação...', 'info');
                
                if (window.actionPlanIntegration && window.actionPlanIntegration.handleActionButtonClick) {
                    window.actionPlanIntegration.handleActionButtonClick('generate', 'test-alert-002');
                    addLog('✅ Plano de ação gerado', 'success');
                } else {
                    addLog('❌ Função handleActionButtonClick não encontrada', 'error');
                }
            }
            
            // Cria alerta de teste
            function testCreateAlert() {
                addLog('⚠️ Criando alerta de teste...', 'info');
                
                const alertsContainer = document.getElementById('test-alerts');
                const alertId = 'alert-' + Date.now();
                
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert-card';
                alertDiv.dataset.alertId = alertId;
                alertDiv.style.cssText = \`
                    padding: 15px;
                    background: linear-gradient(135deg, rgba(255,68,68,0.1) 0%, rgba(255,68,68,0.2) 100%);
                    border: 2px solid #ff4444;
                    border-radius: 10px;
                    cursor: pointer;
                \`;
                
                alertDiv.innerHTML = \`
                    <div style="color: #ff4444; font-weight: bold; margin-bottom: 5px;">
                        <i class="fas fa-exclamation-triangle mr-2"></i>Alerta de Alta Prioridade
                    </div>
                    <div style="color: #333; margin-bottom: 10px;">
                        Paciente ID: TEST-\${Math.floor(Math.random() * 1000)}<br>
                        Risco: Possível glosa de R$ \${(Math.random() * 50000).toFixed(2)}
                    </div>
                    <button onclick="window.aiConcerns && window.aiConcerns.showDetails && window.aiConcerns.showDetails('\${alertId}')" 
                            class="concern-detail-btn" 
                            style="
                                padding: 5px 10px;
                                background: #ff4444;
                                color: white;
                                border: none;
                                border-radius: 5px;
                                cursor: pointer;
                            ">
                        Ver Detalhes
                    </button>
                \`;
                
                alertsContainer.appendChild(alertDiv);
                addLog(\`✅ Alerta criado com ID: \${alertId}\`, 'success');
            }
            
            // Teste completo
            function testFullIntegration() {
                addLog('🚀 Iniciando teste completo de integração...', 'info');
                
                // 1. Verifica componentes
                checkComponentStatus();
                
                // 2. Cria alerta após 1 segundo
                setTimeout(() => {
                    testCreateAlert();
                }, 1000);
                
                // 3. Abre assistente após 2 segundos
                setTimeout(() => {
                    testShowAssistant();
                }, 2000);
                
                // 4. Gera plano após 4 segundos
                setTimeout(() => {
                    testGeneratePlan();
                }, 4000);
                
                addLog('✅ Sequência de teste iniciada', 'success');
            }
            
            // Verifica status ao carregar
            window.addEventListener('load', () => {
                setTimeout(() => {
                    checkComponentStatus();
                    addLog('🎯 Página de teste pronta para uso', 'success');
                }, 1000);
            });
            
            // Intercepta logs do console
            const originalLog = console.log;
            console.log = function(...args) {
                originalLog.apply(console, args);
                addLog(args.join(' '), 'info');
            };
        </script>
    </body>
    </html>
  `)
}