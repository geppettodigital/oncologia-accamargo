import { Hono } from 'hono'
import { html } from 'hono/html'

const patientRoutes = new Hono()

// API endpoints for patient module
patientRoutes.get('/profile/:id', async (c) => {
  const patientId = c.req.param('id')
  // TODO: Fetch from database
  return c.json({
    id: patientId,
    name: 'João Silva',
    diagnosis: 'Em tratamento',
    nextAppointment: '2024-02-15',
    treatmentStage: 'Quimioterapia'
  })
})

patientRoutes.post('/symptoms', async (c) => {
  const body = await c.req.json()
  // TODO: Save to database and trigger AI analysis
  return c.json({
    success: true,
    message: 'Sintomas registrados com sucesso',
    aiRecommendation: 'Monitoramento contínuo recomendado'
  })
})

patientRoutes.get('/journey/:id', async (c) => {
  const patientId = c.req.param('id')
  // TODO: Fetch journey timeline from database
  return c.json({
    patientId,
    stages: [
      { date: '2024-01-01', event: 'Diagnóstico inicial', status: 'completed' },
      { date: '2024-01-15', event: 'Início do tratamento', status: 'completed' },
      { date: '2024-02-01', event: 'Primeira sessão de quimioterapia', status: 'in-progress' },
      { date: '2024-03-01', event: 'Avaliação de resposta', status: 'pending' }
    ]
  })
})

// Auto-triagem endpoint
patientRoutes.post('/triage', async (c) => {
  const body = await c.req.json()
  const { symptoms, age, gender, history } = body
  
  // TODO: Implement AI-based triage logic
  const urgencyLevel = symptoms.includes('dor intensa') ? 'high' : 'medium'
  
  return c.json({
    urgencyLevel,
    recommendation: urgencyLevel === 'high' 
      ? 'Procure atendimento médico imediato' 
      : 'Agende uma consulta com seu médico',
    suggestedSpecialty: 'Oncologia',
    estimatedWaitTime: urgencyLevel === 'high' ? '0-2 horas' : '1-3 dias'
  })
})

export { patientRoutes }