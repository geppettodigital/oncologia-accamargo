import { Hono } from 'hono'

const financialRoutes = new Hono()

// Financial dashboard
financialRoutes.get('/dashboard', async (c) => {
  return c.json({
    summary: {
      totalRevenue: 2500000,
      totalCosts: 1800000,
      profit: 700000,
      profitMargin: 28,
      glosasEvitadas: 150000,
      glosasRate: 2.5
    },
    monthlyMetrics: [
      {
        month: 'Janeiro 2024',
        revenue: 850000,
        costs: 600000,
        glosas: 15000,
        glosasEvitadas: 45000
      },
      {
        month: 'Dezembro 2023',
        revenue: 820000,
        costs: 580000,
        glosas: 20000,
        glosasEvitadas: 38000
      }
    ],
    glosasAnalysis: {
      totalGlosas: 35000,
      mainReasons: [
        {
          reason: 'Documentação incompleta',
          count: 45,
          value: 15000,
          percentage: 42.8
        },
        {
          reason: 'Código incorreto',
          count: 30,
          value: 10000,
          percentage: 28.5
        },
        {
          reason: 'Autorização expirada',
          count: 20,
          value: 7000,
          percentage: 20
        },
        {
          reason: 'Procedimento não coberto',
          count: 10,
          value: 3000,
          percentage: 8.7
        }
      ]
    },
    costCenters: [
      {
        department: 'Oncologia',
        budget: 800000,
        spent: 650000,
        percentage: 81.25
      },
      {
        department: 'Radioterapia',
        budget: 500000,
        spent: 420000,
        percentage: 84
      },
      {
        department: 'Cirurgia',
        budget: 300000,
        spent: 250000,
        percentage: 83.33
      },
      {
        department: 'Diagnóstico',
        budget: 200000,
        spent: 180000,
        percentage: 90
      }
    ]
  })
})

// Glosa prediction endpoint
financialRoutes.post('/predict-glosa', async (c) => {
  const body = await c.req.json()
  const { procedure, diagnosis, insurance, documentation } = body
  
  // TODO: Implement real ML model for glosa prediction
  let riskScore = 0.2
  let risks = []
  
  // Simulate risk analysis
  if (!documentation.includes('laudo_completo')) {
    riskScore += 0.3
    risks.push({
      factor: 'Laudo médico incompleto',
      impact: 'high',
      recommendation: 'Solicitar laudo detalhado com CID e justificativa clínica'
    })
  }
  
  if (!documentation.includes('autorizacao_previa')) {
    riskScore += 0.25
    risks.push({
      factor: 'Autorização prévia ausente',
      impact: 'high',
      recommendation: 'Obter autorização antes do procedimento'
    })
  }
  
  if (procedure.complexity === 'high' && !documentation.includes('segunda_opiniao')) {
    riskScore += 0.15
    risks.push({
      factor: 'Segunda opinião não documentada',
      impact: 'medium',
      recommendation: 'Incluir parecer de especialista'
    })
  }
  
  return c.json({
    riskScore: Math.min(riskScore, 1),
    riskLevel: riskScore > 0.7 ? 'high' : riskScore > 0.4 ? 'medium' : 'low',
    estimatedGlosaValue: riskScore * (procedure.value || 10000),
    risks,
    preventiveActions: [
      'Revisar toda documentação antes do envio',
      'Confirmar cobertura com o convênio',
      'Garantir que todos os códigos estejam corretos',
      'Manter registro fotográfico quando aplicável'
    ],
    confidence: 0.87
  })
})

// Revenue analysis
financialRoutes.get('/revenue-analysis', async (c) => {
  return c.json({
    byInsurance: [
      {
        name: 'SUS',
        revenue: 800000,
        percentage: 32,
        avgTicket: 2500,
        paymentDelay: 45
      },
      {
        name: 'Unimed',
        revenue: 600000,
        percentage: 24,
        avgTicket: 5000,
        paymentDelay: 30
      },
      {
        name: 'SulAmérica',
        revenue: 450000,
        percentage: 18,
        avgTicket: 4500,
        paymentDelay: 25
      },
      {
        name: 'Bradesco Saúde',
        revenue: 400000,
        percentage: 16,
        avgTicket: 4000,
        paymentDelay: 28
      },
      {
        name: 'Particular',
        revenue: 250000,
        percentage: 10,
        avgTicket: 8000,
        paymentDelay: 0
      }
    ],
    byProcedure: [
      {
        procedure: 'Quimioterapia',
        revenue: 900000,
        count: 180,
        avgValue: 5000
      },
      {
        procedure: 'Radioterapia',
        revenue: 600000,
        count: 120,
        avgValue: 5000
      },
      {
        procedure: 'Cirurgia Oncológica',
        revenue: 500000,
        count: 50,
        avgValue: 10000
      },
      {
        procedure: 'Consultas',
        revenue: 300000,
        count: 1000,
        avgValue: 300
      },
      {
        procedure: 'Exames',
        revenue: 200000,
        count: 400,
        avgValue: 500
      }
    ]
  })
})

// Cost optimization suggestions
financialRoutes.get('/optimization-suggestions', async (c) => {
  return c.json({
    suggestions: [
      {
        area: 'Medicamentos',
        currentCost: 300000,
        potentialSaving: 45000,
        recommendation: 'Negociar compra em volume com fornecedores',
        priority: 'high',
        implementation: 'immediate'
      },
      {
        area: 'Exames Laboratoriais',
        currentCost: 150000,
        potentialSaving: 22500,
        recommendation: 'Implementar protocolos para evitar exames desnecessários',
        priority: 'medium',
        implementation: '1-2 months'
      },
      {
        area: 'Gestão de Leitos',
        currentCost: 200000,
        potentialSaving: 30000,
        recommendation: 'Otimizar tempo de permanência com navegação de pacientes',
        priority: 'high',
        implementation: '2-3 months'
      },
      {
        area: 'Energia e Utilidades',
        currentCost: 50000,
        potentialSaving: 7500,
        recommendation: 'Implementar medidas de eficiência energética',
        priority: 'low',
        implementation: '3-6 months'
      }
    ],
    totalPotentialSaving: 105000,
    estimatedROI: 3.5,
    implementationCost: 30000
  })
})

export { financialRoutes }