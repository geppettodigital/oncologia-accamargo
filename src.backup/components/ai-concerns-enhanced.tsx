// AI Concerns Dashboard Component - Enhanced Version with Collapse/Expand and Action Selection
export const aiConcernsHTML = (portalType: string, data?: any) => {
  const concerns = getConcernsForPortal(portalType, data);
  
  return `
    <!-- Ansiedade de Laura -->
    <div id="ai-concerns-container" class="ai-concerns-dashboard glass-effect rounded-2xl p-6 mb-8 border border-orange-200/50 transition-all duration-500">
      <!-- Header com ícone animado e botão de recolher -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <div class="relative">
            <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-10 h-10">
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-800">Ansiedade de Laura</h3>
            <p class="text-sm text-gray-600 ai-subtitle">${concerns.subtitle}</p>
          </div>
        </div>
        <!-- Botão de Recolher/Expandir -->
        <button onclick="toggleAICollapse()" class="ai-toggle-btn text-gray-500 hover:text-orange-500 transition-all duration-300 p-2 rounded-lg hover:bg-orange-50" title="Recolher/Expandir">
          <i id="ai-toggle-icon" class="fas fa-compress-alt text-lg"></i>
        </button>
      </div>

      <!-- Conteúdo Expansível -->
      <div id="ai-content-expanded" class="ai-expanded-content">
        <!-- Alertas Preditivos Principais -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          ${concerns.mainAlerts.map((alert: any) => `
            <div class="ai-concern-card ${alert.severity}-severity rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all" onclick="showConcernDetails('${alert.id}')">
              <div class="flex items-start gap-3">
                <div class="concern-icon-wrapper">
                  <i class="${alert.icon} text-2xl"></i>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-sm mb-1">${alert.title}</h4>
                  <p class="text-xs text-gray-600 mb-2">${alert.description}</p>
                  <div class="flex items-center justify-between">
                    <span class="concern-badge">${alert.timeframe}</span>
                    <span class="text-xs font-bold">${alert.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Métricas Preditivas -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          ${concerns.metrics.map((metric: any) => `
            <div class="metric-card bg-white/70 rounded-lg p-3 border border-gray-200">
              <div class="flex items-center justify-between mb-2">
                <i class="${metric.icon} text-orange-500"></i>
                <span class="trend-indicator ${metric.trend === 'up' ? 'text-red-500' : metric.trend === 'down' ? 'text-green-500' : 'text-gray-500'}">
                  <i class="fas fa-arrow-${metric.trend === 'up' ? 'up' : metric.trend === 'down' ? 'down' : 'right'} text-xs"></i>
                </span>
              </div>
              <div class="text-2xl font-bold text-gray-800">${metric.value}</div>
              <div class="text-xs text-gray-600">${metric.label}</div>
              <div class="text-xs text-orange-600 mt-1">
                <i class="fas fa-exclamation-triangle text-xs"></i> ${metric.prediction}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Timeline de Ações Recomendadas com Seleção -->
        <div class="ai-recommendations bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-semibold text-sm flex items-center gap-2">
              <i class="fas fa-lightbulb text-yellow-500"></i>
              Ações Recomendadas pelo Assistente
            </h4>
            <button onclick="executeSelectedActions()" class="execute-btn bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <i class="fas fa-play"></i>
              Executar
            </button>
          </div>
          <div class="space-y-2">
            ${concerns.recommendations.map((rec: any, index: number) => `
              <div class="recommendation-item flex items-center gap-3 bg-white/80 rounded-lg p-3 hover:bg-white transition-colors" data-rec-id="${rec.id}">
                <!-- Checkbox para seleção -->
                <input type="checkbox" 
                       id="rec-${rec.id}" 
                       class="rec-checkbox w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" 
                       onchange="updateExecuteButton()">
                
                <label for="rec-${rec.id}" class="flex-1 flex items-center gap-3 cursor-pointer">
                  <div class="rec-number w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">
                    ${index + 1}
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-700 rec-action-text">${rec.action}</p>
                    <p class="text-xs text-gray-500">${rec.reason}</p>
                  </div>
                  <div class="rec-priority">
                    <span class="priority-badge priority-${rec.priority}">
                      ${rec.priority === 'high' ? 'Urgente' : rec.priority === 'medium' ? 'Importante' : 'Preventivo'}
                    </span>
                  </div>
                </label>
              </div>
            `).join('')}
          </div>
          <!-- Contador de ações selecionadas -->
          <div class="mt-3 text-xs text-gray-600 text-center" id="selected-counter">
            Nenhuma ação selecionada
          </div>
        </div>
      </div>

      <!-- Versão Compacta (quando recolhido) -->
      <div id="ai-content-collapsed" class="ai-collapsed-content hidden">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex flex-wrap items-center gap-4">
            <!-- Alertas Resumidos com Ícones -->
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-2">
                <i class="fas fa-exclamation-triangle text-red-500 text-sm"></i>
                <span class="text-sm font-medium text-gray-700">Críticos:</span>
                <span class="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">
                  ${concerns.mainAlerts.filter((a: any) => a.severity === 'high').length}
                </span>
              </div>
              <div class="text-gray-400">|</div>
              <div class="flex items-center gap-2">
                <i class="fas fa-exclamation-circle text-yellow-500 text-sm"></i>
                <span class="text-sm font-medium text-gray-700">Médios:</span>
                <span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-bold">
                  ${concerns.mainAlerts.filter((a: any) => a.severity === 'medium').length}
                </span>
              </div>
              <div class="text-gray-400">|</div>
              <div class="flex items-center gap-2">
                <i class="fas fa-info-circle text-blue-500 text-sm"></i>
                <span class="text-sm font-medium text-gray-700">Baixos:</span>
                <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">
                  ${concerns.mainAlerts.filter((a: any) => a.severity === 'low').length}
                </span>
              </div>
            </div>
            
            <!-- Ações Recomendadas -->
            <div class="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg">
              <i class="fas fa-lightbulb text-orange-500"></i>
              <span class="text-sm font-medium text-gray-700">
                ${concerns.recommendations.length} ações recomendadas
              </span>
              ${concerns.recommendations.filter((r: any) => r.priority === 'high').length > 0 ? `
                <span class="bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-bold ml-1">
                  ${concerns.recommendations.filter((r: any) => r.priority === 'high').length} urgentes
                </span>
              ` : ''}
            </div>
          </div>
          
          <!-- Status e Métricas Principais -->
          <div class="flex items-center gap-4">
            ${portalType === 'financial' ? `
              <div class="flex items-center gap-2">
                <i class="fas fa-shield-alt text-green-500"></i>
                <span class="text-sm font-medium text-gray-700">Glosas Evitadas:</span>
                <span class="text-lg font-bold text-green-600">R$ 2.4M</span>
              </div>
            ` : portalType === 'admin' ? `
              <div class="flex items-center gap-2">
                <i class="fas fa-server text-emerald-500"></i>
                <span class="text-sm font-medium text-gray-700">Uptime:</span>
                <span class="text-lg font-bold text-emerald-600">99.98%</span>
              </div>
            ` : portalType === 'doctor' ? `
              <div class="flex items-center gap-2">
                <i class="fas fa-users text-blue-500"></i>
                <span class="text-sm font-medium text-gray-700">Pacientes:</span>
                <span class="text-lg font-bold text-blue-600">47 ativos</span>
              </div>
            ` : portalType === 'navigator' ? `
              <div class="flex items-center gap-2">
                <i class="fas fa-route text-purple-500"></i>
                <span class="text-sm font-medium text-gray-700">Em Navegação:</span>
                <span class="text-lg font-bold text-purple-600">178</span>
              </div>
            ` : portalType === 'patient' ? `
              <div class="flex items-center gap-2">
                <i class="fas fa-heartbeat text-red-500"></i>
                <span class="text-sm font-medium text-gray-700">Adesão:</span>
                <span class="text-lg font-bold text-red-600">92%</span>
              </div>
            ` : portalType === 'wellness' ? `
              <div class="flex items-center gap-2">
                <i class="fas fa-smile text-teal-500"></i>
                <span class="text-sm font-medium text-gray-700">Bem-Estar:</span>
                <span class="text-lg font-bold text-teal-600">73%</span>
              </div>
            ` : portalType === 'research' ? `
              <div class="flex items-center gap-2">
                <i class="fas fa-flask text-indigo-500"></i>
                <span class="text-sm font-medium text-gray-700">Estudos:</span>
                <span class="text-lg font-bold text-indigo-600">24 ativos</span>
              </div>
            ` : ''}
            
            <!-- Indicador de Status -->
            <div class="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-3 py-1.5 rounded-lg">
              <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span class="text-sm font-medium text-orange-600">IA Ativa</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Estilos adicionais para a versão aprimorada -->
    <style>
      /* Transições suaves para recolher/expandir */
      .ai-expanded-content {
        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
                    opacity 0.3s ease-out;
      }
      
      .ai-collapsed-content {
        overflow: hidden;
      }
      
      /* Container com estado recolhido - cores específicas por portal */
      #ai-concerns-container.collapsed {
        background: ${
          portalType === 'admin' ? 'rgba(220, 252, 231, 0.98)' :  // Verde claro para admin
          portalType === 'financial' ? 'rgba(240, 253, 244, 0.98)' :  // Verde muito claro para financial
          portalType === 'doctor' ? 'rgba(239, 246, 255, 0.98)' :  // Azul claro para doctor
          portalType === 'navigator' ? 'rgba(250, 245, 255, 0.98)' :  // Roxo claro para navigator
          portalType === 'patient' ? 'rgba(254, 242, 242, 0.98)' :  // Vermelho claro para patient
          portalType === 'wellness' ? 'rgba(240, 253, 250, 0.98)' :  // Teal claro para wellness
          portalType === 'research' ? 'rgba(238, 242, 255, 0.98)' :  // Indigo claro para research
          'rgba(255, 237, 213, 0.98)'  // Laranja claro padrão
        } !important;
        border-color: ${
          portalType === 'admin' ? 'rgba(34, 197, 94, 0.3)' :
          portalType === 'financial' ? 'rgba(74, 222, 128, 0.3)' :
          portalType === 'doctor' ? 'rgba(96, 165, 250, 0.3)' :
          portalType === 'navigator' ? 'rgba(196, 181, 253, 0.3)' :
          portalType === 'patient' ? 'rgba(252, 165, 165, 0.3)' :
          portalType === 'wellness' ? 'rgba(94, 234, 212, 0.3)' :
          portalType === 'research' ? 'rgba(165, 180, 252, 0.3)' :
          'rgba(251, 146, 60, 0.3)'
        } !important;
        box-shadow: 0 4px 6px -1px ${
          portalType === 'admin' ? 'rgba(34, 197, 94, 0.1)' :
          portalType === 'financial' ? 'rgba(74, 222, 128, 0.1)' :
          portalType === 'doctor' ? 'rgba(96, 165, 250, 0.1)' :
          portalType === 'navigator' ? 'rgba(196, 181, 253, 0.1)' :
          portalType === 'patient' ? 'rgba(252, 165, 165, 0.1)' :
          portalType === 'wellness' ? 'rgba(94, 234, 212, 0.1)' :
          portalType === 'research' ? 'rgba(165, 180, 252, 0.1)' :
          'rgba(251, 146, 60, 0.1)'
        };
      }
      
      /* Animações de entrada/saída */
      @keyframes slideIn {
        from { 
          opacity: 0; 
          transform: translateY(-20px);
          max-height: 0;
        }
        to { 
          opacity: 1; 
          transform: translateY(0);
          max-height: 200px;
        }
      }
      
      @keyframes slideOut {
        from { 
          opacity: 1; 
          transform: translateY(0);
        }
        to { 
          opacity: 0; 
          transform: translateY(-20px);
        }
      }
      
      /* Hover melhorado no botão toggle */
      .ai-toggle-btn {
        position: relative;
        overflow: hidden;
      }
      
      .ai-toggle-btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(251, 146, 60, 0.2);
        transform: translate(-50%, -50%);
        transition: width 0.4s ease, height 0.4s ease;
      }
      
      .ai-toggle-btn:hover::before {
        width: 40px;
        height: 40px;
      }
      
      /* Estilo do botão de toggle */
      .ai-toggle-btn {
        transition: transform 0.3s ease;
      }
      
      .ai-toggle-btn:hover {
        transform: scale(1.1);
      }
      
      /* Checkbox customizado */
      .rec-checkbox:checked {
        background-color: #ff8c00;
        border-color: #ff8c00;
      }
      
      /* Ação executada (verde sem tique) */
      .recommendation-item.executed {
        background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%) !important;
        border-left: 3px solid #10b981;
      }
      
      .recommendation-item.executed .rec-action-text {
        color: #059669;
        font-weight: 500;
      }
      
      /* Botão executar desabilitado */
      .execute-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      /* Transição suave no ícone do toggle */
      #ai-toggle-icon {
        transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .ai-toggle-btn:hover #ai-toggle-icon {
        transform: scale(1.15) rotate(180deg);
      }
      
      /* Efeito de brilho no container quando recolhido */
      #ai-concerns-container.collapsed::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        animation: shimmer 3s infinite;
        pointer-events: none;
      }
      
      @keyframes shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
      }
      
      /* Indicadores animados no estado recolhido */
      .ai-collapsed-content .bg-red-100,
      .ai-collapsed-content .bg-yellow-100,
      .ai-collapsed-content .bg-blue-100 {
        animation: pulse 2s infinite;
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      
      /* Modo compacto para dispositivos menores */
      @media (max-width: 640px) {
        .ai-concerns-dashboard.collapsed {
          padding: 1rem;
        }
        
        .ai-collapsed-content {
          font-size: 0.875rem;
        }
      }
    </style>

    <!-- Script para funcionalidades aprimoradas -->
    <script>
      // Estado do componente
      let aiConcernsState = {
        isCollapsed: false,
        selectedActions: new Set(),
        executedActions: new Set()
      };

      // Função para recolher/expandir com animações suaves
      function toggleAICollapse() {
        const container = document.getElementById('ai-concerns-container');
        const expandedContent = document.getElementById('ai-content-expanded');
        const collapsedContent = document.getElementById('ai-content-collapsed');
        const toggleIcon = document.getElementById('ai-toggle-icon');
        const subtitle = document.querySelector('.ai-subtitle');
        
        aiConcernsState.isCollapsed = !aiConcernsState.isCollapsed;
        
        if (aiConcernsState.isCollapsed) {
          // Recolher com animação suave
          expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
          expandedContent.offsetHeight; // Force reflow
          expandedContent.style.maxHeight = '0';
          expandedContent.style.opacity = '0';
          expandedContent.style.overflow = 'hidden';
          
          // Esconder subtitle quando recolhido
          if (subtitle) {
            subtitle.style.transition = 'opacity 0.3s ease';
            subtitle.style.opacity = '0';
            setTimeout(() => {
              subtitle.style.display = 'none';
            }, 300);
          }
          
          setTimeout(() => {
            expandedContent.classList.add('hidden');
            collapsedContent.classList.remove('hidden');
            collapsedContent.style.animation = 'slideIn 0.4s ease-out';
          }, 500);
          
          toggleIcon.className = 'fas fa-expand-alt text-lg';
          container.classList.add('collapsed');
          // Cores específicas por portal são aplicadas via CSS
        } else {
          // Expandir com animação suave
          collapsedContent.style.animation = 'slideOut 0.3s ease-in';
          
          setTimeout(() => {
            collapsedContent.classList.add('hidden');
            expandedContent.classList.remove('hidden');
            expandedContent.style.maxHeight = '0';
            expandedContent.style.opacity = '0';
            
            // Mostrar subtitle quando expandido
            if (subtitle) {
              subtitle.style.display = 'block';
              setTimeout(() => {
                subtitle.style.opacity = '1';
              }, 100);
            }
            
            setTimeout(() => {
              expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
              expandedContent.style.opacity = '1';
              setTimeout(() => {
                expandedContent.style.maxHeight = 'none';
                expandedContent.style.overflow = 'visible';
              }, 500);
            }, 10);
          }, 300);
          
          toggleIcon.className = 'fas fa-compress-alt text-lg';
          container.classList.remove('collapsed');
          // Remove estilos inline para voltar ao CSS original
        }
      }

      // Atualizar botão de executar baseado nas seleções
      function updateExecuteButton() {
        const checkboxes = document.querySelectorAll('.rec-checkbox:checked');
        const executeBtn = document.querySelector('.execute-btn');
        const counter = document.getElementById('selected-counter');
        
        aiConcernsState.selectedActions.clear();
        checkboxes.forEach(cb => {
          const recId = cb.id.replace('rec-', '');
          aiConcernsState.selectedActions.add(recId);
        });
        
        const count = aiConcernsState.selectedActions.size;
        
        if (count > 0) {
          executeBtn.disabled = false;
          counter.textContent = count + ' ação(ões) selecionada(s)';
          counter.className = 'mt-3 text-xs text-orange-600 text-center font-medium';
        } else {
          executeBtn.disabled = true;
          counter.textContent = 'Nenhuma ação selecionada';
          counter.className = 'mt-3 text-xs text-gray-600 text-center';
        }
      }

      // Executar ações selecionadas
      function executeSelectedActions() {
        if (aiConcernsState.selectedActions.size === 0) {
          alert('Por favor, selecione pelo menos uma ação para executar.');
          return;
        }
        
        // Processar cada ação selecionada
        aiConcernsState.selectedActions.forEach(recId => {
          const item = document.querySelector(\`[data-rec-id="\${recId}"]\`);
          const checkbox = document.getElementById(\`rec-\${recId}\`);
          
          if (item && !aiConcernsState.executedActions.has(recId)) {
            // Marcar como executada (verde sem tique)
            item.classList.add('executed');
            
            // Desmarcar checkbox
            checkbox.checked = false;
            checkbox.disabled = true;
            
            // Adicionar ao conjunto de executadas
            aiConcernsState.executedActions.add(recId);
          }
        });
        
        // Limpar seleções
        aiConcernsState.selectedActions.clear();
        updateExecuteButton();
        
        // Feedback ao usuário
        const count = aiConcernsState.executedActions.size;
        const message = \`\${count} ação(ões) iniciada(s) com sucesso! O sistema está processando as solicitações.\`;
        
        // Mostrar notificação
        showNotification(message, 'success');
      }

      // Mostrar notificação
      function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = \`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 \${
          type === 'success' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
        }\`;
        notification.innerHTML = \`
          <div class="flex items-center gap-2">
            <i class="fas fa-\${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>\${message}</span>
          </div>
        \`;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
          notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Remover após 3 segundos
        setTimeout(() => {
          notification.style.transform = 'translateX(400px)';
          setTimeout(() => {
            document.body.removeChild(notification);
          }, 300);
        }, 3000);
      }

      // Mostrar detalhes de uma preocupação
      function showConcernDetails(concernId) {
        console.log('Mostrando detalhes da preocupação:', concernId);
        showNotification('Analisando detalhes da preocupação...', 'info');
      }

      // Inicializar ao carregar
      document.addEventListener('DOMContentLoaded', function() {
        // Desabilitar botão executar inicialmente
        const executeBtn = document.querySelector('.execute-btn');
        if (executeBtn) {
          executeBtn.disabled = true;
        }
        
        // Removido o gráfico comparativo antigo - agora existe apenas no Master Admin como componente separado
      });
    </script>
  `;
};

// Função para obter preocupações específicas por portal (mantida igual)
function getConcernsForPortal(portalType: string, data?: any) {
  const portalConcerns: any = {
    patient: {
      subtitle: "Monitoramento preditivo da sua jornada oncológica",
      mainAlerts: [
        {
          id: "pa1",
          icon: "fas fa-calendar-exclamation",
          title: "Consulta Próxima",
          description: "Exame de controle em 3 dias",
          timeframe: "3 dias",
          impact: "Alto",
          severity: "high"
        },
        {
          id: "pa2",
          icon: "fas fa-pills",
          title: "Medicação",
          description: "Estoque baixo de Tamoxifeno",
          timeframe: "5 dias",
          impact: "Médio",
          severity: "medium"
        },
        {
          id: "pa3",
          icon: "fas fa-heartbeat",
          title: "Bem-estar",
          description: "Sessão psicológica recomendada",
          timeframe: "Preventivo",
          impact: "Preventivo",
          severity: "low"
        }
      ],
      metrics: [
        {
          icon: "fas fa-user-check",
          value: "92%",
          label: "Adesão",
          trend: "stable",
          prediction: "Mantendo padrão"
        },
        {
          icon: "fas fa-calendar-check",
          value: "3/5",
          label: "Consultas",
          trend: "up",
          prediction: "2 agendamentos pendentes"
        },
        {
          icon: "fas fa-heart",
          value: "Bom",
          label: "Estado Geral",
          trend: "stable",
          prediction: "Estável"
        },
        {
          icon: "fas fa-flask",
          value: "2",
          label: "Exames Pendentes",
          trend: "down",
          prediction: "Agendar esta semana"
        }
      ],
      recommendations: [
        {
          id: "rec1",
          action: "Agendar coleta de sangue para hemograma",
          reason: "Controle mensal do tratamento",
          priority: "high"
        },
        {
          id: "rec2",
          action: "Renovar receita de medicação contínua",
          reason: "Estoque termina em 5 dias",
          priority: "medium"
        },
        {
          id: "rec3",
          action: "Participar do grupo de apoio quinta-feira",
          reason: "Melhoria no bem-estar emocional",
          priority: "low"
        }
      ]
    },
    doctor: {
      subtitle: "Alertas preditivos e insights clínicos dos seus pacientes",
      mainAlerts: [
        {
          id: "doc1",
          icon: "fas fa-exclamation-triangle",
          title: "Paciente Crítico",
          description: "João Silva - Risco de neutropenia",
          timeframe: "Imediato",
          impact: "Crítico",
          severity: "high"
        },
        {
          id: "doc2",
          icon: "fas fa-user-clock",
          title: "Atrasos Recorrentes",
          description: "5 pacientes com baixa adesão",
          timeframe: "Esta semana",
          impact: "Alto",
          severity: "medium"
        },
        {
          id: "doc3",
          icon: "fas fa-microscope",
          title: "Resultados Pendentes",
          description: "12 laudos aguardando revisão",
          timeframe: "24h",
          impact: "Médio",
          severity: "medium"
        }
      ],
      metrics: [
        {
          icon: "fas fa-users",
          value: "47",
          label: "Pacientes Ativos",
          trend: "up",
          prediction: "+3 esta semana"
        },
        {
          icon: "fas fa-procedures",
          value: "8",
          label: "Internados",
          trend: "stable",
          prediction: "2 altas previstas"
        },
        {
          icon: "fas fa-clipboard-check",
          value: "89%",
          label: "Protocolos OK",
          trend: "down",
          prediction: "3 revisões urgentes"
        },
        {
          icon: "fas fa-chart-line",
          value: "94%",
          label: "Taxa Sucesso",
          trend: "up",
          prediction: "Acima da média"
        }
      ],
      recommendations: [
        {
          id: "drec1",
          action: "Revisar protocolo do paciente João Silva imediatamente",
          reason: "Sinais preditivos de complicação detectados",
          priority: "high"
        },
        {
          id: "drec2",
          action: "Agendar reunião multidisciplinar para casos complexos",
          reason: "3 pacientes necessitam revisão de conduta",
          priority: "medium"
        },
        {
          id: "drec3",
          action: "Atualizar protocolos de quimioterapia",
          reason: "Novas diretrizes publicadas esta semana",
          priority: "low"
        }
      ]
    },
    navigator: {
      subtitle: "Coordenação inteligente e otimização da jornada dos pacientes",
      mainAlerts: [
        {
          id: "nav1",
          icon: "fas fa-exclamation-circle",
          title: "Pacientes Urgentes",
          description: "5 pacientes necessitam intervenção imediata",
          timeframe: "Agora",
          impact: "Crítico",
          severity: "high"
        },
        {
          id: "nav2",
          icon: "fas fa-clock",
          title: "Atrasos Detectados",
          description: "12 pacientes com atraso em exames",
          timeframe: "Hoje",
          impact: "Alto",
          severity: "medium"
        },
        {
          id: "nav3",
          icon: "fas fa-route",
          title: "Otimização de Rotas",
          description: "3 jornadas podem ser aceleradas",
          timeframe: "Esta semana",
          impact: "Médio",
          severity: "low"
        }
      ],
      metrics: [
        {
          icon: "fas fa-users",
          value: "178",
          label: "Em Navegação",
          trend: "up",
          prediction: "+12 novos hoje"
        },
        {
          icon: "fas fa-tasks",
          value: "46",
          label: "Tarefas Pendentes",
          trend: "down",
          prediction: "23 urgentes"
        },
        {
          icon: "fas fa-percentage",
          value: "87%",
          label: "Taxa Adesão",
          trend: "stable",
          prediction: "Meta: 90%"
        },
        {
          icon: "fas fa-star",
          value: "92%",
          label: "Satisfação",
          trend: "up",
          prediction: "Acima da média"
        }
      ],
      recommendations: [
        {
          id: "navrec1",
          action: "Contatar pacientes com exames atrasados imediatamente",
          reason: "Prevenir abandono de tratamento",
          priority: "high"
        },
        {
          id: "navrec2",
          action: "Reorganizar agendamentos da próxima semana",
          reason: "Otimizar utilização de recursos",
          priority: "medium"
        },
        {
          id: "navrec3",
          action: "Atualizar protocolos de navegação",
          reason: "Novas diretrizes disponíveis",
          priority: "low"
        }
      ]
    },
    financial: {
      subtitle: "Inteligência artificial para prevenção de glosas e otimização financeira",
      mainAlerts: [
        {
          id: "fin1",
          icon: "fas fa-exclamation-triangle",
          title: "Risco de Glosa Detectado",
          description: "15 contas com inconsistências identificadas",
          timeframe: "Urgente",
          impact: "R$ 127.000",
          severity: "high"
        },
        {
          id: "fin2",
          icon: "fas fa-file-invoice-dollar",
          title: "Faturamento Pendente",
          description: "42 procedimentos aguardando cobrança",
          timeframe: "Hoje",
          impact: "R$ 89.000",
          severity: "medium"
        },
        {
          id: "fin3",
          icon: "fas fa-chart-line",
          title: "Oportunidade de Melhoria",
          description: "Redução de 12% em glosas possível",
          timeframe: "Este mês",
          impact: "R$ 45.000",
          severity: "low"
        }
      ],
      metrics: [
        {
          icon: "fas fa-shield-alt",
          value: "R$ 2.4M",
          label: "Glosas Evitadas",
          trend: "up",
          prediction: "+R$ 180K este mês"
        },
        {
          icon: "fas fa-percentage",
          value: "98.5%",
          label: "Taxa Aprovação",
          trend: "up",
          prediction: "Meta: 99%"
        },
        {
          icon: "fas fa-robot",
          value: "1,247",
          label: "Auditorias IA",
          trend: "up",
          prediction: "+89 hoje"
        },
        {
          icon: "fas fa-dollar-sign",
          value: "R$ 18.3M",
          label: "Faturamento Mês",
          trend: "stable",
          prediction: "Projeção: R$ 19M"
        }
      ],
      recommendations: [
        {
          id: "finrec1",
          action: "Revisar 15 contas com alto risco de glosa imediatamente",
          reason: "IA detectou inconsistências em documentação e codificação",
          priority: "high"
        },
        {
          id: "finrec2",
          action: "Implementar checklist automático para procedimentos complexos",
          reason: "Redução de 30% em glosas prevista",
          priority: "medium"
        },
        {
          id: "finrec3",
          action: "Treinar equipe em novas diretrizes TUSS/TISS",
          reason: "Atualização normativa este mês",
          priority: "low"
        }
      ]
    },
    wellness: {
      subtitle: "Monitoramento emocional e suporte psicossocial inteligente",
      mainAlerts: [
        {
          id: "well1",
          icon: "fas fa-heart-broken",
          title: "Pacientes em Risco",
          description: "8 pacientes com sinais de depressão severa",
          timeframe: "Imediato",
          impact: "Crítico",
          severity: "high"
        },
        {
          id: "well2",
          icon: "fas fa-users",
          title: "Grupos de Apoio",
          description: "3 grupos precisam de moderação",
          timeframe: "Hoje",
          impact: "Alto",
          severity: "medium"
        },
        {
          id: "well3",
          icon: "fas fa-calendar-check",
          title: "Sessões Agendadas",
          description: "24 atendimentos psicológicos esta semana",
          timeframe: "Semana",
          impact: "Normal",
          severity: "low"
        }
      ],
      metrics: [
        {
          icon: "fas fa-smile",
          value: "73%",
          label: "Bem-Estar Geral",
          trend: "up",
          prediction: "Melhora gradual"
        },
        {
          icon: "fas fa-users",
          value: "234",
          label: "Pacientes Ativos",
          trend: "up",
          prediction: "+18 esta semana"
        },
        {
          icon: "fas fa-brain",
          value: "156",
          label: "Sessões Realizadas",
          trend: "stable",
          prediction: "24 agendadas"
        },
        {
          icon: "fas fa-hands-helping",
          value: "89%",
          label: "Satisfação",
          trend: "up",
          prediction: "Acima da média"
        }
      ],
      recommendations: [
        {
          id: "wellrec1",
          action: "Contatar 8 pacientes identificados com risco emocional elevado",
          reason: "Prevenção de crises e abandono de tratamento",
          priority: "high"
        },
        {
          id: "wellrec2",
          action: "Expandir horários de grupos de apoio online",
          reason: "Alta demanda detectada nos horários noturnos",
          priority: "medium"
        },
        {
          id: "wellrec3",
          action: "Implementar programa de mindfulness semanal",
          reason: "Evidências de redução de 40% em ansiedade",
          priority: "low"
        }
      ]
    },
    research: {
      subtitle: "Análise preditiva para pesquisa clínica e recrutamento inteligente",
      mainAlerts: [
        {
          id: "res1",
          icon: "fas fa-vial",
          title: "Recrutamento Urgente",
          description: "Estudo ONCO-2024 precisa de 12 pacientes",
          timeframe: "2 semanas",
          impact: "Alto",
          severity: "high"
        },
        {
          id: "res2",
          icon: "fas fa-chart-bar",
          title: "Dados Incompletos",
          description: "38 CRFs pendentes de revisão",
          timeframe: "Esta semana",
          impact: "Médio",
          severity: "medium"
        },
        {
          id: "res3",
          icon: "fas fa-file-medical-alt",
          title: "Publicação Pronta",
          description: "3 artigos prontos para submissão",
          timeframe: "Este mês",
          impact: "Positivo",
          severity: "low"
        }
      ],
      metrics: [
        {
          icon: "fas fa-flask",
          value: "24",
          label: "Estudos Ativos",
          trend: "up",
          prediction: "+2 iniciando"
        },
        {
          icon: "fas fa-users",
          value: "1,847",
          label: "Participantes",
          trend: "up",
          prediction: "+67 este mês"
        },
        {
          icon: "fas fa-percentage",
          value: "94%",
          label: "Taxa Retenção",
          trend: "stable",
          prediction: "Meta: 95%"
        },
        {
          icon: "fas fa-trophy",
          value: "42",
          label: "Publicações 2024",
          trend: "up",
          prediction: "15 com IF>5"
        }
      ],
      recommendations: [
        {
          id: "resrec1",
          action: "Ativar protocolo de recrutamento acelerado para ONCO-2024",
          reason: "IA identificou 28 pacientes elegíveis no banco de dados",
          priority: "high"
        },
        {
          id: "resrec2",
          action: "Automatizar coleta de dados do REDCap",
          reason: "Redução de 60% no tempo de preenchimento de CRFs",
          priority: "medium"
        },
        {
          id: "resrec3",
          action: "Submeter artigos para journals de alto impacto",
          reason: "Janela de submissão favorável este mês",
          priority: "low"
        }
      ]
    },
    admin: {
      subtitle: "Monitoramento preditivo de sistema e gestão inteligente de plataforma",
      mainAlerts: [
        {
          id: "adm1",
          icon: "fas fa-server",
          title: "Carga Crítica Detectada",
          description: "CPU 78% - Escalonamento automático ativado",
          timeframe: "Agora",
          impact: "Sistema",
          severity: "high"
        },
        {
          id: "adm2",
          icon: "fas fa-exclamation-circle",
          title: "Anomalias de Segurança",
          description: "3 tentativas de acesso suspeitas bloqueadas",
          timeframe: "Última hora",
          impact: "Segurança",
          severity: "medium"
        },
        {
          id: "adm3",
          icon: "fas fa-sync-alt",
          title: "Sincronização Pendente",
          description: "HIS/RIS com delay de 5 minutos",
          timeframe: "Contínuo",
          impact: "Integração",
          severity: "low"
        }
      ],
      metrics: [
        {
          icon: "fas fa-server",
          value: "99.98%",
          label: "Uptime Sistema",
          trend: "stable",
          prediction: "SLA garantido"
        },
        {
          icon: "fas fa-tachometer-alt",
          value: "12ms",
          label: "Latência Edge",
          trend: "down",
          prediction: "Otimizado"
        },
        {
          icon: "fas fa-shield-alt",
          value: "100%",
          label: "Compliance",
          trend: "stable",
          prediction: "LGPD/ISO OK"
        },
        {
          icon: "fas fa-database",
          value: "523MB",
          label: "Database D1",
          trend: "up",
          prediction: "78% capacity"
        }
      ],
      recommendations: [
        {
          id: "admrec1",
          action: "Implementar auto-scaling para Workers em horário de pico",
          reason: "Previsão de aumento de 40% na carga às 14h",
          priority: "high"
        },
        {
          id: "admrec2",
          action: "Atualizar certificados SSL antes do vencimento",
          reason: "3 certificados expiram em 15 dias",
          priority: "medium"
        },
        {
          id: "admrec3",
          action: "Revisar logs de segurança da última semana",
          reason: "Auditoria mensal de compliance",
          priority: "low"
        }
      ]
    },
    // ... (mantém todos os outros portais iguais)
    default: {
      subtitle: "Monitoramento inteligente e preditivo",
      mainAlerts: [],
      metrics: [],
      recommendations: []
    }
  };

  // Retorna as preocupações do portal específico ou um padrão
  return portalConcerns[portalType] || portalConcerns['default'];
}