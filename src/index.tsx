import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { html } from 'hono/html'

// Import route handlers
import { patientRoutes } from './routes/patient'
import { doctorRoutes } from './routes/doctor'
import { navigatorRoutes } from './routes/navigator'
import { financialRoutes } from './routes/financial'
import { wellnessRoutes } from './routes/wellness'
import { researchRoutes } from './routes/research'
import { adminRoutes } from './routes/admin'
import { aiRoutes } from './routes/ai'

// Type definitions for Cloudflare bindings
type Bindings = {
  DB?: D1Database;
  KV?: KVNamespace;
  AI?: any;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Mount API routes
app.route('/api/patient', patientRoutes)
app.route('/api/doctor', doctorRoutes)
app.route('/api/navigator', navigatorRoutes)
app.route('/api/financial', financialRoutes)
app.route('/api/wellness', wellnessRoutes)
app.route('/api/research', researchRoutes)
app.route('/api/admin', adminRoutes)
app.route('/api/ai', aiRoutes)

// Main landing page
app.get('/', (c) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Plataforma Integrada de Gestão da Jornada Oncológica</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <div class="container mx-auto px-4 py-8">
            <!-- Header -->
            <header class="text-center mb-12">
                <h1 class="text-5xl font-bold text-gray-800 mb-4">
                    <i class="fas fa-heartbeat text-purple-600 mr-3"></i>
                    Plataforma Oncológica Inteligente
                </h1>
                <p class="text-xl text-gray-600 italic">"A Vida é muito maior que o Câncer"</p>
                <div class="mt-4 text-sm text-gray-500">
                    Desenvolvido por Laura Technology | ACCamargo Cancer Center
                </div>
            </header>

            <!-- Módulos Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <!-- Paciente -->
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow cursor-pointer" onclick="window.location.href='/patient'">
                    <div class="text-center">
                        <i class="fas fa-user-injured text-5xl text-blue-500 mb-4"></i>
                        <h2 class="text-2xl font-semibold mb-2">Portal do Paciente</h2>
                        <p class="text-gray-600">Auto-triagem, agendamentos e acompanhamento da jornada</p>
                        <button class="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                            Acessar
                        </button>
                    </div>
                </div>

                <!-- Médico -->
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow cursor-pointer" onclick="window.location.href='/doctor'">
                    <div class="text-center">
                        <i class="fas fa-user-md text-5xl text-green-500 mb-4"></i>
                        <h2 class="text-2xl font-semibold mb-2">Portal Médico</h2>
                        <p class="text-gray-600">Assistente clínico com IA e gestão de pacientes</p>
                        <button class="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                            Acessar
                        </button>
                    </div>
                </div>

                <!-- Navegador -->
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow cursor-pointer" onclick="window.location.href='/navigator'">
                    <div class="text-center">
                        <i class="fas fa-route text-5xl text-purple-500 mb-4"></i>
                        <h2 class="text-2xl font-semibold mb-2">Navegador de Pacientes</h2>
                        <p class="text-gray-600">Coordenação e acompanhamento da jornada</p>
                        <button class="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600">
                            Acessar
                        </button>
                    </div>
                </div>

                <!-- Financeiro -->
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow cursor-pointer" onclick="window.location.href='/financial'">
                    <div class="text-center">
                        <i class="fas fa-chart-line text-5xl text-yellow-500 mb-4"></i>
                        <h2 class="text-2xl font-semibold mb-2">Gestão Financeira</h2>
                        <p class="text-gray-600">Prevenção de glosas e análise financeira com IA</p>
                        <button class="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
                            Acessar
                        </button>
                    </div>
                </div>

                <!-- Bem-Estar -->
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow cursor-pointer" onclick="window.location.href='/wellness'">
                    <div class="text-center">
                        <i class="fas fa-heart text-5xl text-pink-500 mb-4"></i>
                        <h2 class="text-2xl font-semibold mb-2">Bem-Estar e Apoio</h2>
                        <p class="text-gray-600">Suporte psicológico e monitoramento emocional</p>
                        <button class="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
                            Acessar
                        </button>
                    </div>
                </div>

                <!-- Pesquisa -->
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow cursor-pointer" onclick="window.location.href='/research'">
                    <div class="text-center">
                        <i class="fas fa-microscope text-5xl text-indigo-500 mb-4"></i>
                        <h2 class="text-2xl font-semibold mb-2">Pesquisa Clínica</h2>
                        <p class="text-gray-600">Análise de dados e insights para pesquisa</p>
                        <button class="mt-4 bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600">
                            Acessar
                        </button>
                    </div>
                </div>
            </div>

            <!-- Estatísticas -->
            <div class="bg-white rounded-xl shadow-lg p-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
                    <i class="fas fa-chart-bar mr-2"></i>
                    Estatísticas da Plataforma
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-blue-600">0</div>
                        <div class="text-gray-600 mt-2">Pacientes Ativos</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-green-600">0</div>
                        <div class="text-gray-600 mt-2">Consultas Hoje</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-purple-600">0%</div>
                        <div class="text-gray-600 mt-2">Taxa de Adesão</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-yellow-600">0</div>
                        <div class="text-gray-600 mt-2">Glosas Evitadas</div>
                    </div>
                </div>
            </div>

            <!-- Features Section -->
            <div class="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
                <h2 class="text-3xl font-bold mb-6 text-center">
                    <i class="fas fa-robot mr-2"></i>
                    Tecnologias Inovadoras
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="text-center">
                        <i class="fas fa-brain text-4xl mb-3"></i>
                        <h3 class="text-xl font-semibold mb-2">Motor de IA</h3>
                        <p class="text-sm">Inteligência artificial avançada para análise preditiva e suporte à decisão</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-cogs text-4xl mb-3"></i>
                        <h3 class="text-xl font-semibold mb-2">Servos Mecanismos</h3>
                        <p class="text-sm">Automação inteligente de processos e tarefas rotineiras</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-comments text-4xl mb-3"></i>
                        <h3 class="text-xl font-semibold mb-2">Engenharia de Prompt</h3>
                        <p class="text-sm">Otimização de interações com IA para resultados precisos</p>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

// Health check endpoint
app.get('/api/health', (c) => {
  return c.json({ 
    status: 'healthy',
    service: 'Plataforma Oncológica',
    timestamp: new Date().toISOString()
  })
})

export default app