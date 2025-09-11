import { Hono } from 'hono'

const navigatorRoutes = new Hono()

// Get patient flow dashboard
navigatorRoutes.get('/dashboard', async (c) => {
  // TODO: Fetch real-time patient flow data
  return c.json({
    summary: {
      totalPatients: 156,
      inTreatment: 89,
      waitingAppointment: 34,
      pendingExams: 23,
      criticalAlerts: 10
    },
    bottlenecks: [
      {
        type: 'exam_scheduling',
        severity: 'high',
        affectedPatients: 15,
        averageDelay: '5 days',
        recommendation: 'Aumentar slots de ressonância magnética'
      },
      {
        type: 'authorization_pending',
        severity: 'medium',
        affectedPatients: 8,
        averageDelay: '3 days',
        recommendation: 'Contatar convênios para agilização'
      }
    ],
    patientFlow: [
      {
        stage: 'Triagem',
        count: 12,
        avgTime: '2 horas'
      },
      {
        stage: 'Diagnóstico',
        count: 28,
        avgTime: '5 dias'
      },
      {
        stage: 'Tratamento',
        count: 89,
        avgTime: '3 meses'
      },
      {
        stage: 'Acompanhamento',
        count: 27,
        avgTime: 'Contínuo'
      }
    ]
  })
})

// Get patient journey status
navigatorRoutes.get('/journey-status/:patientId', async (c) => {
  const patientId = c.req.param('patientId')
  
  return c.json({
    patientId,
    currentStage: 'treatment',
    timeline: [
      {
        date: '2024-01-01',
        event: 'Primeira consulta',
        status: 'completed',
        responsible: 'Dr. Silva'
      },
      {
        date: '2024-01-05',
        event: 'Exames solicitados',
        status: 'completed',
        responsible: 'Navegador Ana'
      },
      {
        date: '2024-01-10',
        event: 'Biópsia realizada',
        status: 'completed',
        responsible: 'Dr. Santos'
      },
      {
        date: '2024-01-15',
        event: 'Início quimioterapia',
        status: 'in-progress',
        responsible: 'Equipe Oncologia'
      },
      {
        date: '2024-02-15',
        event: 'Avaliação de resposta',
        status: 'scheduled',
        responsible: 'Dr. Silva'
      }
    ],
    alerts: [
      {
        type: 'appointment_reminder',
        message: 'Consulta em 3 dias',
        priority: 'medium'
      }
    ],
    nextSteps: [
      'Completar ciclo de quimioterapia',
      'Agendar exame de controle',
      'Avaliar necessidade de radioterapia'
    ]
  })
})

// Coordinate care action
navigatorRoutes.post('/coordinate-care', async (c) => {
  const body = await c.req.json()
  const { patientId, action, details } = body
  
  // TODO: Implement care coordination logic
  let result = {
    success: true,
    actionTaken: action,
    timestamp: new Date().toISOString()
  }
  
  switch(action) {
    case 'schedule_appointment':
      result = {
        ...result,
        appointmentDate: '2024-02-20',
        department: details.department,
        doctor: details.doctor
      }
      break
    case 'expedite_exam':
      result = {
        ...result,
        examType: details.examType,
        newDate: '2024-02-05',
        previousDate: '2024-02-15'
      }
      break
    case 'contact_insurance':
      result = {
        ...result,
        insuranceCompany: details.company,
        authorizationNumber: 'AUTH-2024-0123',
        status: 'approved'
      }
      break
  }
  
  return c.json(result)
})

// Get navigation alerts
navigatorRoutes.get('/alerts', async (c) => {
  return c.json({
    alerts: [
      {
        id: '1',
        patientId: 'P001',
        patientName: 'João Silva',
        type: 'missed_appointment',
        message: 'Paciente faltou à consulta de 28/01',
        priority: 'high',
        timestamp: '2024-01-28T14:00:00Z',
        suggestedAction: 'Contatar paciente e reagendar'
      },
      {
        id: '2',
        patientId: 'P002',
        patientName: 'Maria Santos',
        type: 'exam_delay',
        message: 'Tomografia agendada há mais de 7 dias',
        priority: 'medium',
        timestamp: '2024-01-27T10:00:00Z',
        suggestedAction: 'Verificar disponibilidade de horários alternativos'
      },
      {
        id: '3',
        patientId: 'P003',
        patientName: 'Pedro Costa',
        type: 'insurance_pending',
        message: 'Autorização de quimioterapia pendente há 5 dias',
        priority: 'high',
        timestamp: '2024-01-26T09:00:00Z',
        suggestedAction: 'Contatar convênio urgentemente'
      }
    ],
    summary: {
      total: 15,
      high: 5,
      medium: 7,
      low: 3
    }
  })
})

export { navigatorRoutes }