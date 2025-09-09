// AI Concerns Dashboard Component - Preocupação do Assistente de IA
export const aiConcernsHTML = (portalType: string, data?: any) => {
  const concerns = getConcernsForPortal(portalType, data);
  
  return `
    <!-- Preocupação do Assistente de IA -->
    <div class="ai-concerns-dashboard glass-effect rounded-2xl p-6 mb-8 border border-orange-200/50">
      <!-- Header com ícone animado -->
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
            <h3 class="text-lg font-bold text-gray-800">Preocupação do Assistente de IA</h3>
            <p class="text-sm text-gray-600">${concerns.subtitle}</p>
          </div>
        </div>
        <button onclick="toggleAIConcernsDetails()" class="text-gray-500 hover:text-orange-500 transition-colors">
          <i class="fas fa-expand-alt"></i>
        </button>
      </div>

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

      <!-- Timeline de Ações Recomendadas -->
      <div class="ai-recommendations bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4">
        <h4 class="font-semibold text-sm mb-3 flex items-center gap-2">
          <i class="fas fa-lightbulb text-yellow-500"></i>
          Ações Recomendadas pelo Assistente
        </h4>
        <div class="space-y-2">
          ${concerns.recommendations.map((rec: any, index: number) => `
            <div class="recommendation-item flex items-center gap-3 bg-white/80 rounded-lg p-3 hover:bg-white transition-colors cursor-pointer" onclick="executeRecommendation('${rec.id}')">
              <div class="rec-number w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">
                ${index + 1}
              </div>
              <div class="flex-1">
                <p class="text-sm text-gray-700">${rec.action}</p>
                <p class="text-xs text-gray-500">${rec.reason}</p>
              </div>
              <div class="rec-priority">
                <span class="priority-badge priority-${rec.priority}">
                  ${rec.priority === 'high' ? 'Urgente' : rec.priority === 'medium' ? 'Importante' : 'Preventivo'}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Mini gráfico de tendências (mobile responsive) -->
      <div class="mt-4 md:hidden">
        <button onclick="showMobileTrends()" class="w-full bg-orange-100 text-orange-700 rounded-lg py-2 text-sm font-medium">
          <i class="fas fa-chart-line mr-2"></i>
          Ver Tendências Completas
        </button>
      </div>
      
      <div class="hidden md:block mt-4">
        <canvas id="ai-trends-chart" class="w-full h-32"></canvas>
      </div>
    </div>
  `;
};

// Função para obter preocupações específicas por portal
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
      subtitle: "Coordenação preditiva e otimização de jornadas",
      mainAlerts: [
        {
          id: "nav1",
          icon: "fas fa-route",
          title: "Gargalo Detectado",
          description: "Fila em radiologia - 15 pacientes",
          timeframe: "Agora",
          impact: "Crítico",
          severity: "high"
        },
        {
          id: "nav2",
          icon: "fas fa-user-times",
          title: "Risco Abandono",
          description: "3 pacientes com sinais de desistência",
          timeframe: "48h",
          impact: "Alto",
          severity: "high"
        },
        {
          id: "nav3",
          icon: "fas fa-clock",
          title: "Atrasos Previstos",
          description: "8 consultas podem atrasar amanhã",
          timeframe: "Amanhã",
          impact: "Médio",
          severity: "medium"
        }
      ],
      metrics: [
        {
          icon: "fas fa-compass",
          value: "178",
          label: "Em Navegação",
          trend: "up",
          prediction: "+12 hoje"
        },
        {
          icon: "fas fa-flag-checkered",
          value: "23",
          label: "Concluídos/Mês",
          trend: "stable",
          prediction: "Meta: 25"
        },
        {
          icon: "fas fa-exclamation",
          value: "7",
          label: "Barreiras Ativas",
          trend: "down",
          prediction: "3 resolvidas hoje"
        },
        {
          icon: "fas fa-star",
          value: "4.8",
          label: "Satisfação",
          trend: "up",
          prediction: "Excelente"
        }
      ],
      recommendations: [
        {
          id: "nrec1",
          action: "Realocar 5 pacientes da radiologia para horário alternativo",
          reason: "Prevenir atrasos em cascata",
          priority: "high"
        },
        {
          id: "nrec2",
          action: "Contatar pacientes em risco de abandono",
          reason: "Intervenção preventiva aumenta adesão em 70%",
          priority: "high"
        },
        {
          id: "nrec3",
          action: "Ativar protocolo de fast-track para casos simples",
          reason: "Liberar agenda para casos complexos",
          priority: "medium"
        }
      ]
    },
    financial: {
      subtitle: "Prevenção inteligente de perdas e otimização financeira",
      mainAlerts: [
        {
          id: "fin1",
          icon: "fas fa-file-invoice-dollar",
          title: "Risco de Glosa",
          description: "R$ 45.000 em risco - 12 contas",
          timeframe: "Urgente",
          impact: "R$ 45k",
          severity: "high"
        },
        {
          id: "fin2",
          icon: "fas fa-chart-line",
          title: "Faturamento Baixo",
          description: "15% abaixo da meta mensal",
          timeframe: "Este mês",
          impact: "R$ 120k",
          severity: "medium"
        },
        {
          id: "fin3",
          icon: "fas fa-coins",
          title: "Cobrança Pendente",
          description: "R$ 230k há mais de 60 dias",
          timeframe: "Vencido",
          impact: "R$ 230k",
          severity: "high"
        }
      ],
      metrics: [
        {
          icon: "fas fa-dollar-sign",
          value: "R$ 2.4M",
          label: "Glosas Evitadas",
          trend: "up",
          prediction: "+R$ 150k este mês"
        },
        {
          icon: "fas fa-percentage",
          value: "3.2%",
          label: "Taxa de Glosa",
          trend: "down",
          prediction: "Meta: < 3%"
        },
        {
          icon: "fas fa-receipt",
          value: "847",
          label: "Contas/Mês",
          trend: "up",
          prediction: "+50 previstas"
        },
        {
          icon: "fas fa-piggy-bank",
          value: "R$ 450k",
          label: "Economia/Mês",
          trend: "up",
          prediction: "Novo recorde"
        }
      ],
      recommendations: [
        {
          id: "frec1",
          action: "Revisar 12 contas com alto risco de glosa imediatamente",
          reason: "Prevenir perda de R$ 45.000",
          priority: "high"
        },
        {
          id: "frec2",
          action: "Implementar cobrança ativa para contas > 60 dias",
          reason: "Recuperar R$ 230.000 em atraso",
          priority: "high"
        },
        {
          id: "frec3",
          action: "Otimizar codificação de procedimentos complexos",
          reason: "Aumentar faturamento em 8%",
          priority: "medium"
        }
      ]
    },
    wellness: {
      subtitle: "Monitoramento holístico do bem-estar dos pacientes",
      mainAlerts: [
        {
          id: "wel1",
          icon: "fas fa-brain",
          title: "Saúde Mental",
          description: "15 pacientes com sinais de depressão",
          timeframe: "Esta semana",
          impact: "Alto",
          severity: "high"
        },
        {
          id: "wel2",
          icon: "fas fa-apple-alt",
          title: "Nutrição",
          description: "8 pacientes com perda de peso crítica",
          timeframe: "Monitorar",
          impact: "Médio",
          severity: "medium"
        },
        {
          id: "wel3",
          icon: "fas fa-users",
          title: "Grupo Apoio",
          description: "Baixa participação (< 40%)",
          timeframe: "Recorrente",
          impact: "Preventivo",
          severity: "low"
        }
      ],
      metrics: [
        {
          icon: "fas fa-smile",
          value: "72%",
          label: "Bem-estar Geral",
          trend: "stable",
          prediction: "Melhorando"
        },
        {
          icon: "fas fa-dumbbell",
          value: "45%",
          label: "Atividade Física",
          trend: "down",
          prediction: "Atenção necessária"
        },
        {
          icon: "fas fa-bed",
          value: "6.2h",
          label: "Sono Médio",
          trend: "down",
          prediction: "Abaixo do ideal"
        },
        {
          icon: "fas fa-heart",
          value: "83",
          label: "Participantes",
          trend: "up",
          prediction: "+5 esta semana"
        }
      ],
      recommendations: [
        {
          id: "wrec1",
          action: "Agendar avaliação psicológica para 15 pacientes",
          reason: "Sinais de depressão detectados pelo sistema",
          priority: "high"
        },
        {
          id: "wrec2",
          action: "Consulta nutricional urgente para 8 pacientes",
          reason: "Perda de peso acima de 10% em 30 dias",
          priority: "medium"
        },
        {
          id: "wrec3",
          action: "Criar novo formato de grupo de apoio online",
          reason: "Aumentar participação e engajamento",
          priority: "low"
        }
      ]
    },
    research: {
      subtitle: "Insights preditivos para otimização de pesquisas clínicas",
      mainAlerts: [
        {
          id: "res1",
          icon: "fas fa-user-plus",
          title: "Recrutamento Lento",
          description: "Estudo #45 - 30% da meta",
          timeframe: "2 meses restantes",
          impact: "Crítico",
          severity: "high"
        },
        {
          id: "res2",
          icon: "fas fa-file-medical",
          title: "Compliance",
          description: "3 estudos com desvios de protocolo",
          timeframe: "Esta semana",
          impact: "Alto",
          severity: "medium"
        },
        {
          id: "res3",
          icon: "fas fa-database",
          title: "Dados Incompletos",
          description: "23% de campos vazios",
          timeframe: "Correção necessária",
          impact: "Médio",
          severity: "medium"
        }
      ],
      metrics: [
        {
          icon: "fas fa-flask",
          value: "12",
          label: "Estudos Ativos",
          trend: "stable",
          prediction: "+2 próximo mês"
        },
        {
          icon: "fas fa-users",
          value: "234",
          label: "Participantes",
          trend: "up",
          prediction: "Meta: 300"
        },
        {
          icon: "fas fa-check-circle",
          value: "87%",
          label: "Compliance",
          trend: "down",
          prediction: "Requer ação"
        },
        {
          icon: "fas fa-award",
          value: "3",
          label: "Publicações/Ano",
          trend: "up",
          prediction: "Acima da média"
        }
      ],
      recommendations: [
        {
          id: "rrec1",
          action: "Expandir critérios de inclusão do Estudo #45",
          reason: "Acelerar recrutamento em 40%",
          priority: "high"
        },
        {
          id: "rrec2",
          action: "Treinar equipe em protocolo dos 3 estudos com desvios",
          reason: "Prevenir suspensão por não-compliance",
          priority: "high"
        },
        {
          id: "rrec3",
          action: "Implementar validação automática de dados",
          reason: "Reduzir campos vazios para < 5%",
          priority: "medium"
        }
      ]
    },
    admin: {
      subtitle: "Visão integrada e preditiva de toda a plataforma",
      mainAlerts: [
        {
          id: "adm1",
          icon: "fas fa-server",
          title: "Sistema",
          description: "Backup atrasado há 48h",
          timeframe: "Crítico",
          impact: "Sistema",
          severity: "high"
        },
        {
          id: "adm2",
          icon: "fas fa-users-cog",
          title: "Usuários",
          description: "23 senhas expiradas",
          timeframe: "Esta semana",
          impact: "Segurança",
          severity: "medium"
        },
        {
          id: "adm3",
          icon: "fas fa-chart-pie",
          title: "Capacidade",
          description: "85% de uso do servidor",
          timeframe: "Monitorar",
          impact: "Performance",
          severity: "medium"
        }
      ],
      metrics: [
        {
          icon: "fas fa-users",
          value: "423",
          label: "Usuários Ativos",
          trend: "up",
          prediction: "+15 este mês"
        },
        {
          icon: "fas fa-server",
          value: "99.8%",
          label: "Uptime",
          trend: "stable",
          prediction: "Excelente"
        },
        {
          icon: "fas fa-shield-alt",
          value: "0",
          label: "Incidentes",
          trend: "stable",
          prediction: "Seguro"
        },
        {
          icon: "fas fa-tachometer-alt",
          value: "1.2s",
          label: "Resposta Média",
          trend: "stable",
          prediction: "Ótimo"
        }
      ],
      recommendations: [
        {
          id: "arec1",
          action: "Executar backup manual do sistema imediatamente",
          reason: "Último backup há 48 horas",
          priority: "high"
        },
        {
          id: "arec2",
          action: "Forçar reset de senha para 23 usuários",
          reason: "Política de segurança",
          priority: "medium"
        },
        {
          id: "arec3",
          action: "Planejar expansão de infraestrutura",
          reason: "Uso próximo do limite de capacidade",
          priority: "low"
        }
      ]
    },
    "admin-master": {
      subtitle: "Visão executiva com IA preditiva de toda operação",
      mainAlerts: [
        {
          id: "master1",
          icon: "fas fa-hospital",
          title: "Operação Crítica",
          description: "3 setores com KPIs abaixo da meta",
          timeframe: "Este mês",
          impact: "Estratégico",
          severity: "high"
        },
        {
          id: "master2",
          icon: "fas fa-brain",
          title: "IA Performance",
          description: "Modelo preditivo necessita retreino",
          timeframe: "Esta semana",
          impact: "Acurácia",
          severity: "medium"
        },
        {
          id: "master3",
          icon: "fas fa-chart-line",
          title: "ROI",
          description: "Economia 12% acima da meta",
          timeframe: "Positivo",
          impact: "+R$ 280k",
          severity: "low"
        }
      ],
      metrics: [
        {
          icon: "fas fa-hospital-user",
          value: "847",
          label: "Pacientes Total",
          trend: "up",
          prediction: "1000 até fim do mês"
        },
        {
          icon: "fas fa-percentage",
          value: "94%",
          label: "Eficiência Geral",
          trend: "stable",
          prediction: "Top 5% nacional"
        },
        {
          icon: "fas fa-dollar-sign",
          value: "R$ 2.4M",
          label: "Economia Total",
          trend: "up",
          prediction: "R$ 3M projetado"
        },
        {
          icon: "fas fa-robot",
          value: "97%",
          label: "Acurácia IA",
          trend: "down",
          prediction: "Retreino necessário"
        }
      ],
      recommendations: [
        {
          id: "mrec1",
          action: "Convocar reunião emergencial com gestores dos 3 setores",
          reason: "KPIs críticos abaixo da meta",
          priority: "high"
        },
        {
          id: "mrec2",
          action: "Iniciar retreino do modelo preditivo principal",
          reason: "Queda de 2% na acurácia detectada",
          priority: "medium"
        },
        {
          id: "mrec3",
          action: "Preparar relatório executivo de economia gerada",
          reason: "Apresentação para board na próxima semana",
          priority: "low"
        }
      ]
    }
  };

  // Retorna as preocupações do portal específico ou um padrão
  return portalConcerns[portalType] || portalConcerns['admin'];
}

// Adicionar estilos CSS específicos
export const aiConcernsStyles = `
  <style>
    /* AI Concerns Dashboard Styles */
    .ai-concerns-dashboard {
      background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,251,235,0.95) 100%);
      position: relative;
      overflow: hidden;
    }
    
    .ai-concerns-dashboard::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%);
      animation: rotate 30s linear infinite;
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    /* Severity Styles */
    .high-severity {
      background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);
      border-left: 4px solid #EF4444;
    }
    
    .medium-severity {
      background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
      border-left: 4px solid #F59E0B;
    }
    
    .low-severity {
      background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
      border-left: 4px solid #3B82F6;
    }
    
    /* Concern Icon Wrapper */
    .concern-icon-wrapper {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      flex-shrink: 0;
    }
    
    .high-severity .concern-icon-wrapper { color: #EF4444; }
    .medium-severity .concern-icon-wrapper { color: #F59E0B; }
    .low-severity .concern-icon-wrapper { color: #3B82F6; }
    
    /* Concern Badge */
    .concern-badge {
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 10px;
      font-weight: 600;
      background: white;
      color: #6B7280;
    }
    
    /* Priority Badge */
    .priority-badge {
      padding: 2px 8px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 600;
    }
    
    .priority-high {
      background: #FEE2E2;
      color: #991B1B;
    }
    
    .priority-medium {
      background: #FEF3C7;
      color: #92400E;
    }
    
    .priority-low {
      background: #DBEAFE;
      color: #1E40AF;
    }
    
    /* Metric Card */
    .metric-card {
      transition: all 0.3s ease;
      position: relative;
    }
    
    .metric-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    /* Recommendation Item */
    .recommendation-item {
      transition: all 0.2s ease;
    }
    
    .recommendation-item:hover {
      transform: translateX(4px);
    }
    
    /* Mobile Responsive */
    @media (max-width: 768px) {
      .ai-concerns-dashboard {
        padding: 1rem;
      }
      
      .concern-card {
        font-size: 0.9rem;
      }
      
      .metric-card {
        padding: 0.75rem;
      }
    }
    
    /* Animation for alerts */
    .ai-concern-card {
      animation: slideInUp 0.5s ease;
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
`;

// Exportar função JavaScript para interações
export const aiConcernsScript = `
  <script>
    // Função para mostrar detalhes de uma preocupação
    function showConcernDetails(concernId) {
      // Abrir modal ou expandir detalhes
      console.log('Mostrando detalhes da preocupação:', concernId);
      
      // Integrar com o assistente IA
      if (window.aiAssistant && !window.aiAssistant.isOpen) {
        window.aiAssistant.toggleChat();
      }
      
      setTimeout(() => {
        if (window.aiAssistant) {
          window.aiAssistant.addMessage(
            'Detectei uma preocupação importante. Vou analisar os detalhes e sugerir ações específicas.',
            'ai'
          );
        }
      }, 500);
    }
    
    // Função para executar recomendação
    function executeRecommendation(recId) {
      console.log('Executando recomendação:', recId);
      
      // Feedback visual
      const element = event.currentTarget;
      element.style.background = '#10B981';
      element.style.color = 'white';
      element.innerHTML += ' <i class="fas fa-check ml-2"></i>';
      
      // Simular execução
      setTimeout(() => {
        alert('Ação iniciada com sucesso! O assistente IA está processando sua solicitação.');
      }, 300);
    }
    
    // Toggle detalhes expandidos
    function toggleAIConcernsDetails() {
      const dashboard = document.querySelector('.ai-concerns-dashboard');
      dashboard.classList.toggle('expanded');
      
      if (dashboard.classList.contains('expanded')) {
        // Mostrar mais detalhes
        console.log('Expandindo dashboard de preocupações');
      }
    }
    
    // Mostrar tendências mobile
    function showMobileTrends() {
      // Abrir modal com gráficos
      alert('Abrindo visualização completa de tendências...');
    }
    
    // Inicializar gráfico de tendências (se existir canvas)
    document.addEventListener('DOMContentLoaded', function() {
      const canvas = document.getElementById('ai-trends-chart');
      if (canvas && typeof Chart !== 'undefined') {
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
            datasets: [{
              label: 'Alertas',
              data: [12, 19, 15, 25, 22, 18, 15],
              borderColor: '#FF8C00',
              backgroundColor: 'rgba(255, 140, 0, 0.1)',
              tension: 0.4
            }, {
              label: 'Resolvidos',
              data: [10, 15, 13, 20, 21, 17, 14],
              borderColor: '#10B981',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  display: false
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            }
          }
        });
      }
    });
  </script>
`;