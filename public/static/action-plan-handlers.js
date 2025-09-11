// Sistema Completo de Handlers para Botões de Ação
class ActionPlanHandlers {
    constructor() {
        this.currentAlertId = null;
        this.plansHistory = [];
        this.init();
    }

    init() {
        console.log('🎯 ActionPlanHandlers inicializado');
    }

    // 1. GERAR PLANO DE AÇÃO
    generateActionPlan(alertId) {
        this.currentAlertId = alertId;
        
        // Dados simulados baseados no tipo de alerta
        const plans = [
            {
                id: 'PLAN-' + Date.now(),
                alertId: alertId,
                titulo: 'Plano de Ação - Risco de Glosa em Quimioterapia',
                prioridade: 'ALTA',
                prazo: '48 horas',
                status: 'NOVO',
                
                motivos: [
                    '❌ Autorização prévia vencida há 3 dias',
                    '⚠️ Protocolo de medicação fora do padrão ANVISA',
                    '📋 Documentação incompleta para procedimento de alto custo',
                    '⏰ Prazo de contestação expirando em 24h'
                ],
                
                stakeholders: [
                    { nome: 'Dr. Carlos Silva', cargo: 'Oncologista Responsável', acao: 'Validar protocolo', prazo: '4h' },
                    { nome: 'Enfª Maria Santos', cargo: 'Navegadora Sênior', acao: 'Atualizar documentação', prazo: '6h' },
                    { nome: 'Ana Costa', cargo: 'Auditoria Médica', acao: 'Revisar autorização', prazo: '2h' },
                    { nome: 'João Ferreira', cargo: 'Faturamento', acao: 'Preparar recurso', prazo: '8h' }
                ],
                
                acoes: [
                    { 
                        ordem: 1, 
                        acao: 'Solicitar nova autorização emergencial', 
                        responsavel: 'Ana Costa',
                        prazo: '2 horas',
                        status: 'PENDENTE',
                        impacto: 'CRÍTICO'
                    },
                    { 
                        ordem: 2, 
                        acao: 'Revisar e ajustar protocolo conforme NCCN', 
                        responsavel: 'Dr. Carlos Silva',
                        prazo: '4 horas',
                        status: 'PENDENTE',
                        impacto: 'ALTO'
                    },
                    { 
                        ordem: 3, 
                        acao: 'Compilar documentação comprobatória', 
                        responsavel: 'Enfª Maria Santos',
                        prazo: '6 horas',
                        status: 'PENDENTE',
                        impacto: 'ALTO'
                    },
                    { 
                        ordem: 4, 
                        acao: 'Preparar carta de contestação', 
                        responsavel: 'João Ferreira',
                        prazo: '8 horas',
                        status: 'PENDENTE',
                        impacto: 'MÉDIO'
                    },
                    { 
                        ordem: 5, 
                        acao: 'Agendar reunião com operadora', 
                        responsavel: 'Ana Costa',
                        prazo: '24 horas',
                        status: 'PENDENTE',
                        impacto: 'MÉDIO'
                    }
                ],
                
                metricas: {
                    valorEmRisco: 'R$ 127.450,00',
                    pacientesAfetados: 3,
                    prazoLegal: '5 dias úteis',
                    probabilidadeGlosa: '87%',
                    taxaSucessoHistorica: '92%'
                },
                
                historico: [
                    { data: '15/01/2025 09:30', evento: 'Alerta gerado pelo sistema', status: 'warning' },
                    { data: '15/01/2025 09:35', evento: 'Análise automática de risco concluída', status: 'info' },
                    { data: '15/01/2025 09:40', evento: 'Plano de ação criado', status: 'success' }
                ]
            }
        ];

        const plan = plans[0]; // Seleciona o plano
        this.plansHistory.push(plan);
        
        // Cria e exibe o popup do plano
        this.showActionPlanPopup(plan);
        
        // Adiciona resposta no assistente
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                <div style="padding: 15px; background: linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0.2) 100%); border-radius: 10px; border-left: 4px solid #4CAF50;">
                    <strong style="color: #4CAF50;">✅ Plano de Ação Gerado com Sucesso!</strong><br><br>
                    <strong>ID do Plano:</strong> ${plan.id}<br>
                    <strong>Prioridade:</strong> <span style="color: #f44336; font-weight: bold;">${plan.prioridade}</span><br>
                    <strong>Prazo:</strong> ${plan.prazo}<br>
                    <strong>Valor em Risco:</strong> <span style="color: #FF8C00; font-weight: bold;">${plan.metricas.valorEmRisco}</span><br><br>
                    <strong>Próximos Passos:</strong><br>
                    1. ${plan.acoes[0].acao} (${plan.acoes[0].prazo})<br>
                    2. ${plan.acoes[1].acao} (${plan.acoes[1].prazo})<br><br>
                    <small style="color: #666;">📋 Verifique a janela popup para detalhes completos do plano.</small>
                </div>
            `, 'ai');
        }
        
        return plan;
    }

    // 2. ANALISAR IMPACTO FINANCEIRO
    analyzeFinancialImpact(alertId) {
        const impact = {
            resumo: {
                valorTotal: 'R$ 342.750,00',
                glosaPotencial: 'R$ 127.450,00',
                economiaComAcao: 'R$ 117.250,00',
                roi: '10.3x'
            },
            
            detalhamento: [
                {
                    categoria: 'Medicamentos Oncológicos',
                    valor: 'R$ 89.500,00',
                    risco: 'ALTO',
                    probabilidade: '85%'
                },
                {
                    categoria: 'Procedimentos Cirúrgicos',
                    valor: 'R$ 23.450,00',
                    risco: 'MÉDIO',
                    probabilidade: '45%'
                },
                {
                    categoria: 'Exames de Imagem',
                    valor: 'R$ 14.500,00',
                    risco: 'BAIXO',
                    probabilidade: '15%'
                }
            ],
            
            timeline: {
                hoje: 'R$ 127.450,00 em risco',
                semana: 'R$ 198.300,00 projetado',
                mes: 'R$ 485.000,00 acumulado'
            },
            
            comparativo: {
                mesPassado: 'R$ 98.200,00',
                media6Meses: 'R$ 112.400,00',
                tendencia: '+15.3%'
            }
        };

        // Cria popup de análise
        this.showFinancialImpactPopup(impact);
        
        // Adiciona resposta no assistente
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                <div style="padding: 15px; background: linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(255,107,53,0.1) 100%); border-radius: 10px; border-left: 4px solid #FF8C00;">
                    <strong style="color: #FF8C00;">📊 Análise de Impacto Financeiro</strong><br><br>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0;">
                        <div style="padding: 8px; background: white; border-radius: 5px;">
                            <small style="color: #666;">Valor em Risco</small><br>
                            <strong style="color: #f44336; font-size: 18px;">${impact.resumo.valorTotal}</strong>
                        </div>
                        <div style="padding: 8px; background: white; border-radius: 5px;">
                            <small style="color: #666;">Glosa Potencial</small><br>
                            <strong style="color: #FF8C00; font-size: 18px;">${impact.resumo.glosaPotencial}</strong>
                        </div>
                    </div>
                    
                    <strong>📈 Projeção Temporal:</strong><br>
                    • Hoje: ${impact.timeline.hoje}<br>
                    • 7 dias: ${impact.timeline.semana}<br>
                    • 30 dias: ${impact.timeline.mes}<br><br>
                    
                    <strong>💡 Recomendação:</strong><br>
                    Ação imediata pode economizar <span style="color: #4CAF50; font-weight: bold;">${impact.resumo.economiaComAcao}</span><br>
                    ROI estimado: <span style="color: #4CAF50; font-weight: bold;">${impact.resumo.roi}</span><br><br>
                    
                    <small style="color: #666;">📊 Análise detalhada disponível na janela popup.</small>
                </div>
            `, 'ai');
        }
        
        return impact;
    }

    // 3. BUSCAR CASOS SIMILARES
    findSimilarCases(alertId) {
        const similarCases = [
            {
                id: 'CASE-2024-1823',
                data: '08/01/2025',
                paciente: 'ID: PAC-4521',
                situacao: 'Glosa de quimioterapia - Autorização vencida',
                valor: 'R$ 98.300,00',
                resolucao: 'Recurso aceito após reautorização',
                tempoResolucao: '3 dias',
                responsavel: 'Dr. Roberto Lima',
                taxaSucesso: '100%'
            },
            {
                id: 'CASE-2024-1756',
                data: '22/12/2024',
                paciente: 'ID: PAC-3892',
                situacao: 'Protocolo fora do padrão - Medicamento importado',
                valor: 'R$ 156.700,00',
                resolucao: 'Aprovado com laudo médico detalhado',
                tempoResolucao: '5 dias',
                responsavel: 'Dra. Patricia Mendes',
                taxaSucesso: '100%'
            },
            {
                id: 'CASE-2024-1698',
                data: '15/12/2024',
                paciente: 'ID: PAC-3445',
                situacao: 'Documentação incompleta - Radioterapia',
                valor: 'R$ 67.400,00',
                resolucao: 'Glosa parcial - Recuperado 70%',
                tempoResolucao: '7 dias',
                responsavel: 'Dr. Carlos Silva',
                taxaSucesso: '70%'
            }
        ];

        // Análise de padrões
        const patterns = {
            causaPrincipal: 'Autorização vencida (45% dos casos)',
            tempoMedioResolucao: '5 dias',
            taxaSucessoMedia: '90%',
            valorMedioRecuperado: 'R$ 107.467,00'
        };

        // Cria popup de casos similares
        this.showSimilarCasesPopup(similarCases, patterns);
        
        // Adiciona resposta no assistente
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                <div style="padding: 15px; background: linear-gradient(135deg, rgba(33,150,243,0.1) 0%, rgba(33,150,243,0.2) 100%); border-radius: 10px; border-left: 4px solid #2196F3;">
                    <strong style="color: #2196F3;">🔍 Casos Similares Encontrados</strong><br><br>
                    
                    <strong>📊 Resumo da Análise:</strong><br>
                    • Encontrados: <strong>3 casos similares</strong> nos últimos 30 dias<br>
                    • Taxa de sucesso média: <span style="color: #4CAF50; font-weight: bold;">${patterns.taxaSucessoMedia}</span><br>
                    • Tempo médio de resolução: <strong>${patterns.tempoMedioResolucao}</strong><br>
                    • Valor médio recuperado: <strong>${patterns.valorMedioRecuperado}</strong><br><br>
                    
                    <strong>📌 Caso Mais Relevante:</strong><br>
                    <div style="padding: 10px; background: white; border-radius: 5px; margin: 10px 0;">
                        <strong>${similarCases[0].id}</strong> - ${similarCases[0].data}<br>
                        ${similarCases[0].situacao}<br>
                        <span style="color: #4CAF50;">✅ ${similarCases[0].resolucao}</span><br>
                        Resolvido em: <strong>${similarCases[0].tempoResolucao}</strong>
                    </div>
                    
                    <strong>💡 Estratégia Recomendada:</strong><br>
                    Baseado nos casos similares, recomendo:<br>
                    1. Solicitar reautorização emergencial (maior taxa de sucesso)<br>
                    2. Preparar laudo médico detalhado<br>
                    3. Tempo estimado para resolução: 3-5 dias<br><br>
                    
                    <small style="color: #666;">📁 Detalhes completos dos casos na janela popup.</small>
                </div>
            `, 'ai');
        }
        
        return { cases: similarCases, patterns: patterns };
    }

    // 4. DELEGAR TAREFA
    delegateTask(alertId) {
        const delegation = {
            recomendacoes: [
                {
                    nome: 'Dr. Carlos Silva',
                    cargo: 'Oncologista Sênior',
                    departamento: 'Oncologia Clínica',
                    disponibilidade: 'DISPONÍVEL',
                    experiencia: '15 anos',
                    casosResolvidos: 234,
                    taxaSucesso: '94%',
                    especialidades: ['Quimioterapia', 'Protocolos NCCN', 'Gestão de Glosas'],
                    status: 'online',
                    tempoResposta: '~15 min',
                    match: '98%'
                },
                {
                    nome: 'Enfª Maria Santos',
                    cargo: 'Navegadora Sênior',
                    departamento: 'Navegação de Pacientes',
                    disponibilidade: 'DISPONÍVEL',
                    experiencia: '8 anos',
                    casosResolvidos: 156,
                    taxaSucesso: '91%',
                    especialidades: ['Documentação', 'Autorizações', 'Suporte ao Paciente'],
                    status: 'online',
                    tempoResposta: '~20 min',
                    match: '92%'
                },
                {
                    nome: 'Ana Costa',
                    cargo: 'Auditora Médica',
                    departamento: 'Auditoria e Compliance',
                    disponibilidade: 'OCUPADA (livre em 1h)',
                    experiencia: '12 anos',
                    casosResolvidos: 389,
                    taxaSucesso: '96%',
                    especialidades: ['Auditoria', 'Compliance', 'Negociação com Operadoras'],
                    status: 'busy',
                    tempoResposta: '~1h',
                    match: '95%'
                }
            ],
            
            tarefaSugerida: {
                titulo: 'Resolver Risco de Glosa - Quimioterapia',
                descricao: 'Autorização vencida e protocolo fora do padrão necessitam ação imediata',
                prioridade: 'CRÍTICA',
                prazoSugerido: '4 horas',
                checkpoints: [
                    'Validar protocolo medicamentoso',
                    'Solicitar nova autorização',
                    'Compilar documentação',
                    'Preparar recurso se necessário'
                ]
            }
        };

        // Cria popup de delegação
        this.showDelegationPopup(delegation);
        
        // Adiciona resposta no assistente
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                <div style="padding: 15px; background: linear-gradient(135deg, rgba(156,39,176,0.1) 0%, rgba(156,39,176,0.2) 100%); border-radius: 10px; border-left: 4px solid #9C27B0;">
                    <strong style="color: #9C27B0;">👥 Sugestões de Delegação</strong><br><br>
                    
                    <strong>🎯 Melhor Match:</strong><br>
                    <div style="padding: 10px; background: white; border-radius: 5px; margin: 10px 0;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="width: 40px; height: 40px; background: #4CAF50; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                                CS
                            </div>
                            <div style="flex: 1;">
                                <strong>${delegation.recomendacoes[0].nome}</strong><br>
                                <small style="color: #666;">${delegation.recomendacoes[0].cargo} • ${delegation.recomendacoes[0].departamento}</small><br>
                                <small style="color: #4CAF50;">✅ Disponível agora • Resposta em ${delegation.recomendacoes[0].tempoResposta}</small>
                            </div>
                            <div style="text-align: center;">
                                <div style="color: #4CAF50; font-size: 24px; font-weight: bold;">${delegation.recomendacoes[0].match}</div>
                                <small style="color: #666;">Match</small>
                            </div>
                        </div>
                    </div>
                    
                    <strong>📋 Tarefa a Delegar:</strong><br>
                    "${delegation.tarefaSugerida.titulo}"<br>
                    Prazo: <strong>${delegation.tarefaSugerida.prazoSugerido}</strong><br><br>
                    
                    <strong>✅ Ações ao Delegar:</strong><br>
                    • Notificação automática enviada<br>
                    • Task criada no sistema<br>
                    • Tracking de progresso ativado<br>
                    • Alerta de prazo configurado<br><br>
                    
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <button onclick="window.actionPlanHandlers && window.actionPlanHandlers.confirmDelegation('${delegation.recomendacoes[0].nome}')" 
                                style="padding: 8px 16px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            ✅ Confirmar Delegação
                        </button>
                        <button onclick="window.actionPlanHandlers && window.actionPlanHandlers.showDelegationPopup()" 
                                style="padding: 8px 16px; background: white; color: #9C27B0; border: 2px solid #9C27B0; border-radius: 5px; cursor: pointer;">
                            👥 Ver Outras Opções
                        </button>
                    </div>
                </div>
            `, 'ai');
        }
        
        return delegation;
    }

    // 5. AGENDAR REVISÃO
    scheduleReview(alertId) {
        const schedule = {
            sugestoes: [
                {
                    tipo: 'Reunião de Alinhamento Urgente',
                    data: '16/01/2025',
                    horario: '14:00 - 15:00',
                    formato: 'Presencial + Online (Híbrido)',
                    sala: 'Sala de Reuniões 3A + Teams',
                    
                    participantes: [
                        { nome: 'Dr. Carlos Silva', cargo: 'Oncologista', status: 'confirmado' },
                        { nome: 'Enfª Maria Santos', cargo: 'Navegadora', status: 'confirmado' },
                        { nome: 'Ana Costa', cargo: 'Auditoria', status: 'pendente' },
                        { nome: 'João Ferreira', cargo: 'Faturamento', status: 'confirmado' },
                        { nome: 'Dra. Patricia Lima', cargo: 'Diretora Médica', status: 'opcional' }
                    ],
                    
                    pauta: [
                        { item: 'Análise do caso e documentação', tempo: '15 min', responsavel: 'Dr. Carlos Silva' },
                        { item: 'Status das autorizações', tempo: '10 min', responsavel: 'Ana Costa' },
                        { item: 'Plano de ação e prazos', tempo: '20 min', responsavel: 'Todos' },
                        { item: 'Definição de responsabilidades', tempo: '10 min', responsavel: 'Dra. Patricia Lima' },
                        { item: 'Próximos passos e follow-up', tempo: '5 min', responsavel: 'Enfª Maria Santos' }
                    ],
                    
                    preparacao: [
                        'Relatório do caso consolidado',
                        'Histórico de autorizações',
                        'Análise financeira de impacto',
                        'Casos similares para referência'
                    ]
                },
                {
                    tipo: 'Daily Stand-up - Acompanhamento',
                    data: 'Diariamente',
                    horario: '08:30 - 08:45',
                    formato: 'Online (Teams)',
                    frequencia: 'Até resolução do caso'
                }
            ],
            
            calendario: {
                conflitos: [],
                melhorHorario: '14:00',
                disponibilidadeGeral: '87%'
            }
        };

        // Cria popup de agendamento
        this.showSchedulePopup(schedule);
        
        // Adiciona resposta no assistente
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                <div style="padding: 15px; background: linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(0,188,212,0.2) 100%); border-radius: 10px; border-left: 4px solid #00BCD4;">
                    <strong style="color: #00BCD4;">📅 Agendamento de Revisão</strong><br><br>
                    
                    <strong>🎯 Reunião Recomendada:</strong><br>
                    <div style="padding: 10px; background: white; border-radius: 5px; margin: 10px 0;">
                        <strong>${schedule.sugestoes[0].tipo}</strong><br>
                        📅 <strong>${schedule.sugestoes[0].data}</strong> às <strong>${schedule.sugestoes[0].horario}</strong><br>
                        📍 ${schedule.sugestoes[0].sala}<br>
                        👥 ${schedule.sugestoes[0].participantes.length} participantes
                    </div>
                    
                    <strong>👥 Participantes Confirmados:</strong><br>
                    ${schedule.sugestoes[0].participantes
                        .filter(p => p.status === 'confirmado')
                        .map(p => `• ${p.nome} - ${p.cargo}`)
                        .join('<br>')}<br><br>
                    
                    <strong>📋 Pauta Principal:</strong><br>
                    ${schedule.sugestoes[0].pauta
                        .slice(0, 3)
                        .map((item, i) => `${i + 1}. ${item.item} (${item.tempo})`)
                        .join('<br>')}<br><br>
                    
                    <strong>✅ Ações Automáticas:</strong><br>
                    • Convite enviado via Outlook/Teams<br>
                    • Sala reservada no sistema<br>
                    • Documentos preparatórios compartilhados<br>
                    • Lembretes configurados (1h e 15min antes)<br><br>
                    
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <button onclick="window.actionPlanHandlers && window.actionPlanHandlers.confirmSchedule()" 
                                style="padding: 8px 16px; background: #00BCD4; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            ✅ Confirmar Agendamento
                        </button>
                        <button onclick="window.actionPlanHandlers && window.actionPlanHandlers.proposeAlternative()" 
                                style="padding: 8px 16px; background: white; color: #00BCD4; border: 2px solid #00BCD4; border-radius: 5px; cursor: pointer;">
                            🔄 Propor Outro Horário
                        </button>
                    </div>
                </div>
            `, 'ai');
        }
        
        return schedule;
    }

    // POPUPS DETALHADOS

    showActionPlanPopup(plan) {
        // Remove popup existente se houver
        const existing = document.getElementById('action-plan-popup');
        if (existing) existing.remove();

        const popup = document.createElement('div');
        popup.id = 'action-plan-popup';
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            z-index: 10000;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        `;

        popup.innerHTML = `
            <div style="background: linear-gradient(135deg, #2B5F3F 0%, #3a7d52 100%); color: white; padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0; font-size: 24px;">
                        <i class="fas fa-clipboard-check" style="margin-right: 10px;"></i>
                        ${plan.titulo}
                    </h2>
                    <button onclick="this.closest('#action-plan-popup').remove()" 
                            style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <span><i class="fas fa-flag"></i> Prioridade: ${plan.prioridade}</span>
                    <span><i class="fas fa-clock"></i> Prazo: ${plan.prazo}</span>
                    <span><i class="fas fa-spinner"></i> Status: ${plan.status}</span>
                </div>
            </div>
            
            <div style="flex: 1; overflow-y: auto; padding: 20px;">
                <!-- Métricas -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 20px;">
                    <div style="padding: 15px; background: #fff3e0; border-radius: 10px; text-align: center;">
                        <div style="color: #FF8C00; font-size: 24px; font-weight: bold;">${plan.metricas.valorEmRisco}</div>
                        <div style="color: #666; font-size: 12px;">Valor em Risco</div>
                    </div>
                    <div style="padding: 15px; background: #e8f5e9; border-radius: 10px; text-align: center;">
                        <div style="color: #4CAF50; font-size: 24px; font-weight: bold;">${plan.metricas.taxaSucessoHistorica}</div>
                        <div style="color: #666; font-size: 12px;">Taxa de Sucesso</div>
                    </div>
                    <div style="padding: 15px; background: #fce4ec; border-radius: 10px; text-align: center;">
                        <div style="color: #f44336; font-size: 24px; font-weight: bold;">${plan.metricas.probabilidadeGlosa}</div>
                        <div style="color: #666; font-size: 12px;">Risco de Glosa</div>
                    </div>
                    <div style="padding: 15px; background: #e3f2fd; border-radius: 10px; text-align: center;">
                        <div style="color: #2196F3; font-size: 24px; font-weight: bold;">${plan.metricas.prazoLegal}</div>
                        <div style="color: #666; font-size: 12px;">Prazo Legal</div>
                    </div>
                </div>

                <!-- Motivos -->
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #2B5F3F; margin-bottom: 10px;">
                        <i class="fas fa-exclamation-triangle"></i> Motivos do Alerta
                    </h3>
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 10px;">
                        ${plan.motivos.map(m => `<div style="margin-bottom: 8px;">${m}</div>`).join('')}
                    </div>
                </div>

                <!-- Ações -->
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #2B5F3F; margin-bottom: 10px;">
                        <i class="fas fa-tasks"></i> Plano de Ação Detalhado
                    </h3>
                    ${plan.acoes.map(acao => `
                        <div style="background: white; border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; margin-bottom: 10px;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div style="flex: 1;">
                                    <strong>${acao.ordem}. ${acao.acao}</strong><br>
                                    <small style="color: #666;">
                                        <i class="fas fa-user"></i> ${acao.responsavel} • 
                                        <i class="fas fa-clock"></i> ${acao.prazo}
                                    </small>
                                </div>
                                <div style="display: flex; gap: 10px; align-items: center;">
                                    <span style="padding: 4px 8px; background: ${acao.impacto === 'CRÍTICO' ? '#ffebee' : acao.impacto === 'ALTO' ? '#fff3e0' : '#e8f5e9'}; 
                                                 color: ${acao.impacto === 'CRÍTICO' ? '#f44336' : acao.impacto === 'ALTO' ? '#FF8C00' : '#4CAF50'}; 
                                                 border-radius: 4px; font-size: 12px; font-weight: bold;">
                                        ${acao.impacto}
                                    </span>
                                    <span style="padding: 4px 8px; background: #e3f2fd; color: #2196F3; border-radius: 4px; font-size: 12px;">
                                        ${acao.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Stakeholders -->
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #2B5F3F; margin-bottom: 10px;">
                        <i class="fas fa-users"></i> Stakeholders Envolvidos
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
                        ${plan.stakeholders.map(s => `
                            <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                                <strong>${s.nome}</strong><br>
                                <small style="color: #666;">${s.cargo}</small><br>
                                <small style="color: #2B5F3F;"><i class="fas fa-tasks"></i> ${s.acao} (${s.prazo})</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div style="padding: 20px; background: #f5f5f5; border-top: 1px solid #e0e0e0;">
                <div style="display: flex; gap: 10px; justify-content: flex-end;">
                    <button onclick="window.actionPlanHandlers && window.actionPlanHandlers.exportPlan('${plan.id}')" 
                            style="padding: 10px 20px; background: white; color: #2B5F3F; border: 2px solid #2B5F3F; border-radius: 8px; cursor: pointer; font-weight: 600;">
                        <i class="fas fa-download"></i> Exportar PDF
                    </button>
                    <button onclick="window.actionPlanHandlers && window.actionPlanHandlers.startCollaboration('${plan.id}')" 
                            style="padding: 10px 20px; background: #FF8C00; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                        <i class="fas fa-comments"></i> Convocar Alinhamento
                    </button>
                    <button onclick="window.actionPlanHandlers && window.actionPlanHandlers.executePlan('${plan.id}')" 
                            style="padding: 10px 20px; background: #2B5F3F; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                        <i class="fas fa-play"></i> Executar Plano
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(popup);
    }

    showFinancialImpactPopup(impact) {
        const existing = document.getElementById('financial-impact-popup');
        if (existing) existing.remove();

        const popup = document.createElement('div');
        popup.id = 'financial-impact-popup';
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 700px;
            max-height: 85vh;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            z-index: 10000;
            overflow: hidden;
        `;

        popup.innerHTML = `
            <div style="background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%); color: white; padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0;">
                        <i class="fas fa-chart-line"></i> Análise de Impacto Financeiro
                    </h2>
                    <button onclick="this.closest('#financial-impact-popup').remove()" 
                            style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            
            <div style="padding: 20px; overflow-y: auto; max-height: calc(85vh - 80px);">
                <!-- Resumo Principal -->
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">
                    <div style="padding: 15px; background: #ffebee; border-radius: 10px;">
                        <div style="color: #f44336; font-size: 28px; font-weight: bold;">${impact.resumo.valorTotal}</div>
                        <div style="color: #666;">Valor Total em Risco</div>
                    </div>
                    <div style="padding: 15px; background: #e8f5e9; border-radius: 10px;">
                        <div style="color: #4CAF50; font-size: 28px; font-weight: bold;">${impact.resumo.economiaComAcao}</div>
                        <div style="color: #666;">Economia com Ação</div>
                    </div>
                </div>

                <!-- Gráfico de Barras Simulado -->
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #333;">Distribuição por Categoria</h3>
                    ${impact.detalhamento.map(item => `
                        <div style="margin-bottom: 10px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>${item.categoria}</span>
                                <span style="font-weight: bold;">${item.valor}</span>
                            </div>
                            <div style="background: #e0e0e0; height: 30px; border-radius: 15px; overflow: hidden;">
                                <div style="background: ${item.risco === 'ALTO' ? '#f44336' : item.risco === 'MÉDIO' ? '#FF8C00' : '#4CAF50'}; 
                                            width: ${item.probabilidade}; height: 100%; display: flex; align-items: center; padding: 0 10px;">
                                    <small style="color: white;">${item.probabilidade}</small>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Timeline -->
                <div style="background: #f5f5f5; padding: 15px; border-radius: 10px;">
                    <h3 style="color: #333; margin-top: 0;">Projeção Temporal</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                        <div style="text-align: center;">
                            <div style="color: #FF8C00; font-weight: bold;">Hoje</div>
                            <div style="font-size: 18px;">${impact.timeline.hoje}</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: #FF8C00; font-weight: bold;">7 dias</div>
                            <div style="font-size: 18px;">${impact.timeline.semana}</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: #FF8C00; font-weight: bold;">30 dias</div>
                            <div style="font-size: 18px;">${impact.timeline.mes}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(popup);
    }

    showSimilarCasesPopup(cases, patterns) {
        const existing = document.getElementById('similar-cases-popup');
        if (existing) existing.remove();

        const popup = document.createElement('div');
        popup.id = 'similar-cases-popup';
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 800px;
            max-height: 85vh;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            z-index: 10000;
            overflow: hidden;
        `;

        popup.innerHTML = `
            <div style="background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%); color: white; padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0;">
                        <i class="fas fa-search"></i> Casos Similares Identificados
                    </h2>
                    <button onclick="this.closest('#similar-cases-popup').remove()" 
                            style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            
            <div style="padding: 20px; overflow-y: auto; max-height: calc(85vh - 80px);">
                <!-- Padrões Identificados -->
                <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="color: #1976D2; margin-top: 0;">Padrões Identificados</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                        <div><strong>Causa Principal:</strong> ${patterns.causaPrincipal}</div>
                        <div><strong>Tempo Médio:</strong> ${patterns.tempoMedioResolucao}</div>
                        <div><strong>Taxa de Sucesso:</strong> ${patterns.taxaSucessoMedia}</div>
                        <div><strong>Valor Médio Recuperado:</strong> ${patterns.valorMedioRecuperado}</div>
                    </div>
                </div>

                <!-- Lista de Casos -->
                ${cases.map(caso => `
                    <div style="background: white; border: 2px solid #e0e0e0; border-radius: 10px; padding: 15px; margin-bottom: 15px;">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div>
                                <strong style="color: #2196F3;">${caso.id}</strong> - ${caso.data}<br>
                                <strong>Situação:</strong> ${caso.situacao}<br>
                                <strong>Valor:</strong> ${caso.valor}<br>
                                <strong>Resolução:</strong> <span style="color: #4CAF50;">${caso.resolucao}</span><br>
                                <small style="color: #666;">
                                    <i class="fas fa-clock"></i> ${caso.tempoResolucao} • 
                                    <i class="fas fa-user"></i> ${caso.responsavel}
                                </small>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 24px; font-weight: bold; color: ${caso.taxaSucesso === '100%' ? '#4CAF50' : '#FF8C00'};">
                                    ${caso.taxaSucesso}
                                </div>
                                <small style="color: #666;">Sucesso</small>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        document.body.appendChild(popup);
    }

    showDelegationPopup(delegation) {
        const existing = document.getElementById('delegation-popup');
        if (existing) existing.remove();

        const popup = document.createElement('div');
        popup.id = 'delegation-popup';
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 750px;
            max-height: 85vh;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            z-index: 10000;
            overflow: hidden;
        `;

        popup.innerHTML = `
            <div style="background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%); color: white; padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0;">
                        <i class="fas fa-users"></i> Delegação de Tarefa
                    </h2>
                    <button onclick="this.closest('#delegation-popup').remove()" 
                            style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            
            <div style="padding: 20px; overflow-y: auto; max-height: calc(85vh - 80px);">
                <!-- Tarefa -->
                <div style="background: #f3e5f5; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="color: #7B1FA2; margin-top: 0;">Tarefa a Delegar</h3>
                    <strong>${delegation.tarefaSugerida.titulo}</strong><br>
                    ${delegation.tarefaSugerida.descricao}<br>
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <span style="background: #f44336; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                            ${delegation.tarefaSugerida.prioridade}
                        </span>
                        <span style="background: #FF8C00; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                            Prazo: ${delegation.tarefaSugerida.prazoSugerido}
                        </span>
                    </div>
                </div>

                <!-- Pessoas Recomendadas -->
                <h3 style="color: #333;">Pessoas Recomendadas</h3>
                ${delegation.recomendacoes.map((pessoa, index) => `
                    <div style="background: ${index === 0 ? '#e8f5e9' : 'white'}; border: 2px solid ${index === 0 ? '#4CAF50' : '#e0e0e0'}; 
                                border-radius: 10px; padding: 15px; margin-bottom: 15px; cursor: pointer;"
                         onclick="window.actionPlanHandlers && window.actionPlanHandlers.selectPerson('${pessoa.nome}')">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; gap: 15px; align-items: center;">
                                <div style="width: 50px; height: 50px; background: ${pessoa.status === 'online' ? '#4CAF50' : '#FF8C00'}; 
                                            border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                                    ${pessoa.nome.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <strong>${pessoa.nome}</strong><br>
                                    <small style="color: #666;">${pessoa.cargo} • ${pessoa.departamento}</small><br>
                                    <small style="color: ${pessoa.status === 'online' ? '#4CAF50' : '#FF8C00'};">
                                        ${pessoa.disponibilidade} • Resposta em ${pessoa.tempoResposta}
                                    </small>
                                </div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 28px; font-weight: bold; color: ${index === 0 ? '#4CAF50' : '#9C27B0'};">
                                    ${pessoa.match}
                                </div>
                                <small style="color: #666;">Match</small>
                            </div>
                        </div>
                        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #e0e0e0;">
                            <small style="color: #666;">
                                <strong>Experiência:</strong> ${pessoa.experiencia} • 
                                <strong>Casos:</strong> ${pessoa.casosResolvidos} • 
                                <strong>Taxa de Sucesso:</strong> ${pessoa.taxaSucesso}
                            </small>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        document.body.appendChild(popup);
    }

    showSchedulePopup(schedule) {
        const existing = document.getElementById('schedule-popup');
        if (existing) existing.remove();

        const popup = document.createElement('div');
        popup.id = 'schedule-popup';
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 750px;
            max-height: 85vh;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            z-index: 10000;
            overflow: hidden;
        `;

        const meeting = schedule.sugestoes[0];

        popup.innerHTML = `
            <div style="background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%); color: white; padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0;">
                        <i class="fas fa-calendar-check"></i> Agendamento de Revisão
                    </h2>
                    <button onclick="this.closest('#schedule-popup').remove()" 
                            style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            
            <div style="padding: 20px; overflow-y: auto; max-height: calc(85vh - 80px);">
                <!-- Detalhes da Reunião -->
                <div style="background: #e0f7fa; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="color: #0097A7; margin-top: 0;">${meeting.tipo}</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                        <div><i class="fas fa-calendar"></i> <strong>Data:</strong> ${meeting.data}</div>
                        <div><i class="fas fa-clock"></i> <strong>Horário:</strong> ${meeting.horario}</div>
                        <div><i class="fas fa-laptop"></i> <strong>Formato:</strong> ${meeting.formato}</div>
                        <div><i class="fas fa-door-open"></i> <strong>Local:</strong> ${meeting.sala}</div>
                    </div>
                </div>

                <!-- Participantes -->
                <h3 style="color: #333;">Participantes</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 20px;">
                    ${meeting.participantes.map(p => `
                        <div style="background: white; border: 1px solid #e0e0e0; padding: 10px; border-radius: 8px;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <strong>${p.nome}</strong><br>
                                    <small style="color: #666;">${p.cargo}</small>
                                </div>
                                <span style="padding: 4px 8px; background: ${p.status === 'confirmado' ? '#e8f5e9' : p.status === 'pendente' ? '#fff3e0' : '#f5f5f5'}; 
                                             color: ${p.status === 'confirmado' ? '#4CAF50' : p.status === 'pendente' ? '#FF8C00' : '#999'}; 
                                             border-radius: 4px; font-size: 12px;">
                                    ${p.status === 'confirmado' ? '✓ Confirmado' : p.status === 'pendente' ? '⏳ Pendente' : '? Opcional'}
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Pauta -->
                <h3 style="color: #333;">Pauta da Reunião</h3>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 10px;">
                    ${meeting.pauta.map((item, index) => `
                        <div style="display: flex; justify-content: space-between; padding: 10px 0; ${index < meeting.pauta.length - 1 ? 'border-bottom: 1px solid #e0e0e0;' : ''}">
                            <div>
                                <strong>${index + 1}. ${item.item}</strong><br>
                                <small style="color: #666;">Responsável: ${item.responsavel}</small>
                            </div>
                            <span style="color: #00BCD4; font-weight: bold;">${item.tempo}</span>
                        </div>
                    `).join('')}
                </div>

                <!-- Ações -->
                <div style="display: flex; gap: 10px; margin-top: 20px; justify-content: center;">
                    <button onclick="window.actionPlanHandlers && window.actionPlanHandlers.confirmSchedule()" 
                            style="padding: 12px 24px; background: #00BCD4; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                        <i class="fas fa-check"></i> Confirmar e Enviar Convites
                    </button>
                    <button onclick="window.actionPlanHandlers && window.actionPlanHandlers.proposeAlternative()" 
                            style="padding: 12px 24px; background: white; color: #00BCD4; border: 2px solid #00BCD4; border-radius: 8px; cursor: pointer; font-weight: 600;">
                        <i class="fas fa-clock"></i> Sugerir Outro Horário
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(popup);
    }

    // Métodos auxiliares
    confirmDelegation(personName) {
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                ✅ <strong>Tarefa delegada com sucesso para ${personName}!</strong><br>
                • Notificação enviada via Teams e email<br>
                • Task criada no sistema de gestão<br>
                • Prazo definido: 4 horas<br>
                • Você receberá atualizações automáticas do progresso
            `, 'ai');
        }
        
        // Fecha popup se existir
        const popup = document.getElementById('delegation-popup');
        if (popup) popup.remove();
    }

    confirmSchedule() {
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                ✅ <strong>Reunião agendada com sucesso!</strong><br>
                • Convites enviados via Outlook/Teams<br>
                • Sala reservada no sistema<br>
                • Documentos preparatórios compartilhados<br>
                • Lembretes configurados (1h e 15min antes)<br>
                • Link da reunião: teams.microsoft.com/meet/abc123
            `, 'ai');
        }
        
        const popup = document.getElementById('schedule-popup');
        if (popup) popup.remove();
    }

    executePlan(planId) {
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                🚀 <strong>Plano ${planId} iniciado!</strong><br>
                • Todas as tarefas foram ativadas<br>
                • Notificações enviadas aos responsáveis<br>
                • Monitoramento automático ativado<br>
                • Dashboard de acompanhamento disponível<br>
                Você receberá atualizações em tempo real do progresso.
            `, 'ai');
        }
    }

    exportPlan(planId) {
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                📄 <strong>Exportando plano ${planId}...</strong><br>
                PDF gerado com sucesso! O download iniciará em instantes.<br>
                O arquivo também foi enviado para seu email.
            `, 'ai');
        }
    }

    startCollaboration(planId) {
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                💬 <strong>Sala de colaboração criada!</strong><br>
                • Chat em tempo real ativado<br>
                • Todos os stakeholders foram convidados<br>
                • Documentos do caso compartilhados<br>
                • Videoconferência disponível<br>
                Link: teams.microsoft.com/collab/${planId}
            `, 'ai');
        }
    }

    selectPerson(personName) {
        const delegationPopup = document.getElementById('delegation-popup');
        if (delegationPopup) {
            delegationPopup.remove();
        }
        
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                Você selecionou <strong>${personName}</strong> para esta tarefa.<br>
                Deseja confirmar a delegação? Esta pessoa receberá uma notificação imediata.
            `, 'ai');
        }
        
        this.confirmDelegation(personName);
    }

    proposeAlternative() {
        if (window.aiAssistant) {
            window.aiAssistant.addMessage(`
                📅 <strong>Buscando horários alternativos...</strong><br><br>
                Encontrei estas opções com boa disponibilidade:<br>
                • Hoje, 16:30 - 17:30 (85% disponível)<br>
                • Amanhã, 09:00 - 10:00 (92% disponível)<br>
                • Amanhã, 15:00 - 16:00 (88% disponível)<br><br>
                Qual horário você prefere?
            `, 'ai');
        }
    }
}

// Inicializa o sistema de handlers
window.actionPlanHandlers = new ActionPlanHandlers();

console.log('✅ ActionPlanHandlers carregado e disponível em window.actionPlanHandlers');