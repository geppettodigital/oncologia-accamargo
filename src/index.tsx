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
import { portalRoutes } from './routes/portal'
import kanbanTestRoutes from './routes/kanban-test'
import patientViewStandalone from './routes/patient-view-standalone'
import patientViewIntegrated from './routes/patient-view-integrated'
import { doctorEnhanced } from './routes/doctor-enhanced'
import { doctorViews } from './routes/doctor-views'
import { researchPortal } from './routes/research-portal'
import { researchViews } from './routes/research-views'


// Import page handlers
import { patientPage } from './pages/patient'
import { doctorPage } from './pages/doctor'
import { navigatorPage } from './pages/navigator'
import { financialPage } from './pages/financial'
import { wellnessPage } from './pages/wellness'
import { researchPage } from './pages/research'
import { adminMasterPage } from './pages/admin-master'
import { adminMasterCompletePage } from './pages/admin-master-complete'
import { testIntegrationPage } from './pages/test-integration'

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
app.use('/*.html', serveStatic({ root: './public' }))

// Mount API routes
app.route('/api/patient', patientRoutes)
app.route('/api/doctor', doctorRoutes)
app.route('/api/navigator', navigatorRoutes)
app.route('/api/financial', financialRoutes)
app.route('/api/wellness', wellnessRoutes)
app.route('/api/research', researchRoutes)
app.route('/api/admin', adminRoutes)
app.route('/api/ai', aiRoutes)
app.route('/api/portal', portalRoutes)

// Mount test routes
app.route('/', kanbanTestRoutes)
app.route('/', patientViewStandalone)
app.route('/', patientViewIntegrated)
app.route('/', doctorEnhanced)
app.route('/', doctorViews)
app.route('/', researchPortal)
app.route('/', researchViews)

// Redirect old patient-view URLs to new integrated view
app.get('/patient-view/:id', (c) => {
  const id = c.req.param('id');
  return c.redirect(`/patient-view-integrated/${id}`, 301);
})

// Mount page routes
app.get('/portal/patient', patientPage)
app.get('/portal/doctor', doctorPage)
app.get('/portal/navigator', navigatorPage)
app.get('/portal/financial', financialPage)
app.get('/portal/wellness', wellnessPage)
app.get('/portal/research', researchPage)
app.get('/portal/admin-master', adminMasterPage)
app.get('/admin-master', adminMasterCompletePage)
app.get('/test-integration', testIntegrationPage)

// Main landing page with updated modern design
app.get('/', (c) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Plataforma Integrada da Jornada Oncológica com IA - ACCamargo Cancer Center</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <meta name="description" content="Plataforma Integrada de Gestão da Jornada Oncológica - ACCamargo Cancer Center">
        <meta name="author" content="ACCamargo Cancer Center">
        <meta property="og:title" content="ACCamargo - Plataforma Oncológica">
        <meta property="og:description" content="70 anos transformando o cuidado oncológico no Brasil">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">

        <style>
            .glass-effect {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
            .gradient-text {
                background: linear-gradient(135deg, #2B5F3F 0%, #3a8f5f 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .tech-card {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: pointer;
            }
            .tech-card:hover {
                transform: translateY(-10px) scale(1.05);
                box-shadow: 0 30px 60px -15px rgba(43, 95, 63, 0.3);
            }
            .module-card {
                background: linear-gradient(145deg, #ffffff 0%, #f9fafb 100%);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .module-card:hover {
                background: linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%);
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20 min-h-screen flex flex-col">
        <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">ACCamargo Cancer Center • "A Vida é muito maior que o Câncer"</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/doctor-portal" class="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all">
                            <i class="fas fa-user-md text-sm mr-2"></i>
                            <span class="text-sm font-semibold">Portal Médico</span>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="far fa-bell text-xl"></i>
                        </button>
                        <a href="/admin-master" class="flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1 rounded-full hover:from-green-700 hover:to-green-800 transition-all">
                            <i class="fas fa-user-shield text-sm mr-2"></i>
                            <span class="text-sm font-semibold">Master Admin</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Container Principal para Portais SPA -->
            <div id="main-container">
            <!-- Estatísticas da Plataforma (PRIMEIRO) - Design Moderno -->
            <div class="glass-effect rounded-2xl shadow-xl p-8 mb-10 border border-white/50">
                <div class="flex items-center justify-center mb-8">
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-14 h-14 mr-4 drop-shadow-lg">
                    <h2 class="text-3xl font-bold text-gray-800">Estatísticas em Tempo Real</h2>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div class="text-center">
                        <div class="text-4xl font-bold gradient-text mb-2">
                            <span id="stat-patients">234</span>
                        </div>
                        <div class="text-gray-600 font-medium">Pacientes Ativos</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold gradient-text mb-2">
                            <span id="stat-navigation">178</span>
                        </div>
                        <div class="text-gray-600 font-medium">Em Navegação</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold gradient-text mb-2">
                            <span id="stat-appointments">56</span>
                        </div>
                        <div class="text-gray-600 font-medium">Consultas Hoje</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold gradient-text mb-2">
                            <span id="stat-adherence">87</span>%
                        </div>
                        <div class="text-gray-600 font-medium">Taxa de Adesão</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold gradient-text mb-2">
                            <span id="stat-savings">R$ 0.0M</span>
                        </div>
                        <div class="text-gray-600 font-medium">Glosas Evitadas</div>
                    </div>
                </div>
            </div>

            <!-- Módulos Grid - Design Moderno -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <!-- Paciente -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                            <i class="far fa-user text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Portal do Paciente</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Auto-triagem inteligente, agendamentos e acompanhamento personalizado</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('patient')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('patient')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Médico -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                            <i class="fas fa-user-md text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Portal Médico</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Kanban de pacientes, alertas LAURA e assistente IA completo</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="window.location.href='/doctor-portal'" class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('doctor')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Navegador -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg">
                            <i class="far fa-compass text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Navegador de Pacientes</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Coordenação e acompanhamento otimizado da jornada</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('navigator')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('navigator')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Financeiro -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 shadow-lg">
                            <i class="fas fa-dollar-sign text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Gestão Financeira</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Prevenção inteligente de glosas e análise financeira com IA</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('financial')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('financial')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Bem-Estar -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg">
                            <i class="far fa-heart text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Bem-Estar e Apoio</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Suporte psicológico e monitoramento emocional integrado</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('wellness')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('wellness')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Pesquisa -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-green-700 shadow-lg">
                            <i class="fas fa-flask text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Pesquisa Clínica</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Análise avançada de dados e insights para pesquisa</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('research')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('research')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tecnologias Proprietárias - Blocos Navegáveis -->
            <div class="mb-12">
                <h2 class="text-3xl font-bold text-center mb-10 gradient-text">
                    <i class="fas fa-microchip mr-3"></i>
                    Tecnologias Proprietárias
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Motor de IA -->
                    <div class="tech-card glass-effect rounded-2xl p-8 border border-white/50 shadow-xl" onclick="window.location.href='/ai/engine'">
                        <div class="text-center">
                            <div class="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-xl">
                                <i class="fas fa-brain text-4xl text-white"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-gray-800">Motor de IA</h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">Inteligência artificial avançada para análise preditiva e suporte à decisão clínica</p>
                            <div class="flex justify-center space-x-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Machine Learning</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Deep Learning</span>
                            </div>
                        </div>
                    </div>

                    <!-- Servos Mecanismos -->
                    <div class="tech-card glass-effect rounded-2xl p-8 border border-white/50 shadow-xl" onclick="window.location.href='/ai/servos'">
                        <div class="text-center">
                            <div class="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl">
                                <i class="fas fa-cogs text-4xl text-white"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-gray-800">Servos Mecanismos</h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">Automação inteligente de processos hospitalares e tarefas rotineiras</p>
                            <div class="flex justify-center space-x-2">
                                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">RPA</span>
                                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Automação</span>
                            </div>
                        </div>
                    </div>

                    <!-- Engenharia de Prompt -->
                    <div class="tech-card glass-effect rounded-2xl p-8 border border-white/50 shadow-xl" onclick="window.location.href='/ai/prompt'">
                        <div class="text-center">
                            <div class="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl">
                                <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-12 h-12 filter brightness-0 invert">
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-gray-800">Engenharia de Prompt</h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">Otimização de interações com IA para resultados precisos e contextualizados</p>
                            <div class="flex justify-center space-x-2">
                                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">NLP</span>
                                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">LLM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim do Container Principal -->
            </div>
        </main>

        <!-- Footer Institucional Moderno -->
        <footer class="footer-gradient text-white mt-12">
            <div class="container mx-auto px-4 py-10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Coluna 1: ACCamargo Cancer Center (DESTAQUE) -->
                    <div class="md:col-span-1 order-1 md:order-1">
                        <div class="flex items-center mb-4">
                            <img src="/static/accamargo-icon-white.svg" alt="ACCamargo Logo" class="w-16 h-16 mr-4 drop-shadow-xl">
                            <h3 class="text-2xl font-bold">ACCamargo Cancer Center</h3>
                        </div>
                        <p class="text-base opacity-95 mb-3 font-medium">
                            70 anos transformando o cuidado oncológico no Brasil
                        </p>
                        <p class="text-sm opacity-90 mb-3">
                            <strong>Centro Integrado de Diagnóstico, Tratamento, Ensino e Pesquisa</strong>
                        </p>
                        <p class="text-sm opacity-85 leading-relaxed">
                            <i class="fas fa-hospital mr-2 text-green-300"></i>Instituição de Referência Nacional<br>
                            <i class="fas fa-award mr-2 text-green-300"></i>Acreditação Internacional<br>
                            <i class="fas fa-microscope mr-2 text-green-300"></i>Centro de Pesquisa Avançada<br>
                            <i class="fas fa-graduation-cap mr-2 text-green-300"></i>Formação de Especialistas
                        </p>
                        <div class="mt-4 pt-3 border-t border-white/20">
                            <p class="text-sm opacity-90">
                                <i class="fas fa-map-marker-alt mr-2"></i>São Paulo - SP<br>
                                <i class="fas fa-globe mr-2"></i><a href="https://accamargo.org.br" class="hover:text-green-300 transition-colors">accamargo.org.br</a>
                            </p>
                        </div>
                    </div>

                    <!-- Coluna 2: Parceria Tecnológica -->
                    <div class="md:col-span-1 order-3 md:order-2">
                        <h3 class="text-xl font-bold mb-4">Parceria Tecnológica</h3>
                        <p class="text-sm opacity-90 mb-3">
                            Plataforma desenvolvida em colaboração com:
                        </p>
                        <div class="mb-4">
                            <p class="text-base font-medium opacity-95 mb-2">Laura Technology</p>
                            <p class="text-sm opacity-80">
                                Especialista em IA para Saúde<br>
                                Geppetto Digital<br>
                                #borasalvarvidas<br>
                                CNPJ: 38.475.698/0001-74<br>
                                Curitiba - PR
                            </p>
                        </div>
                        <div class="text-sm opacity-80 space-y-1">
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Inteligência Artificial</p>
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Machine Learning</p>
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Análise Preditiva</p>
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Automação de Processos</p>
                        </div>
                    </div>

                    <!-- Coluna 3: Informações Legais -->
                    <div class="md:col-span-1 order-2 md:order-3">
                        <h3 class="text-xl font-bold mb-4">Conformidade e Segurança</h3>
                        <ul class="text-sm opacity-90 space-y-2">
                            <li><i class="far fa-check-circle mr-2 text-green-300"></i>LGPD Compliant</li>
                            <li><i class="far fa-check-circle mr-2 text-green-300"></i>HIPAA Ready</li>
                            <li><i class="far fa-check-circle mr-2 text-green-300"></i>ISO 27001 Standards</li>
                            <li><i class="far fa-check-circle mr-2 text-green-300"></i>Criptografia AES-256</li>
                        </ul>
                        <div class="mt-6">
                            <a href="#" class="text-sm opacity-80 hover:opacity-100 mr-4 transition-opacity">Termos de Uso</a>
                            <a href="#" class="text-sm opacity-80 hover:opacity-100 mr-4 transition-opacity">Privacidade</a>
                            <a href="#" class="text-sm opacity-80 hover:opacity-100 transition-opacity">Cookies</a>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="border-t border-white/20 mt-8 pt-6 text-center">
                    <p class="text-sm opacity-90">
                        © 2024 ACCamargo Cancer Center. Todos os direitos reservados.
                        <br><span class="text-xs opacity-75">Tecnologia desenvolvida em parceria com Laura Technology LTDA</span>
                    </p>
                    <p class="text-xs opacity-75 mt-2">
                        Desenvolvido com Amor <i class="far fa-heart text-green-300"></i> para Impactar 1 Bilhão de Vidas
                    </p>
                    <p class="text-xs opacity-60 mt-2">
                        Versão 1.0.0 | Última atualização: ${new Date().toLocaleDateString('pt-BR')}
                    </p>
                </div>
            </div>
        </footer>

        <link href="/static/kanban-styles.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="/static/app.js"></script>
        <script src="/static/portal-loader.js"></script>
        <script src="/static/ai-concerns.js"></script>
        <script src="/static/kanban-functions.js"></script>
        <script src="/static/navigator-views.js"></script>
        <script src="/static/navigator-views-extended.js"></script>
        <script src="/static/navigator-integration.js"></script>
        <script>
            // Função para mostrar ajuda do portal
            function showPortalHelp(portalType) {
                const helpTexts = {
                    patient: 'Portal do Paciente: Acesse seus exames, consultas, medicamentos e acompanhe sua jornada de tratamento.',
                    doctor: 'Portal Médico: Gerencie pacientes, prescrições, protocolos e utilize IA para suporte à decisão clínica.',
                    navigator: 'Navegador de Pacientes: Coordene jornadas, agende consultas e acompanhe a evolução dos pacientes.',
                    financial: 'Gestão Financeira: Previna glosas, analise custos e otimize o faturamento com inteligência artificial.',
                    wellness: 'Bem-Estar e Apoio: Acesse recursos de apoio psicológico, grupos de suporte e práticas integrativas.',
                    research: 'Pesquisa Clínica: Gerencie estudos, analise dados e acompanhe publicações científicas.'
                };
                
                alert(helpTexts[portalType] || 'Informações sobre este portal.');
            }
            
            // Animate statistics with smooth easing
            document.addEventListener('DOMContentLoaded', () => {
                const animateCounter = (element, target) => {
                    let current = 0;
                    const increment = target / 60;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        element.textContent = Math.floor(current);
                    }, 25);
                };

                setTimeout(() => {
                    animateCounter(document.getElementById('stat-patients'), 234);
                    animateCounter(document.getElementById('stat-navigation'), 178);
                    animateCounter(document.getElementById('stat-appointments'), 56);
                    animateCounter(document.getElementById('stat-adherence'), 87);
                    // Animar valor monetário das glosas
                    const savingsElement = document.getElementById('stat-savings');
                    let currentSavings = 0;
                    const targetSavings = 2.4;
                    const savingsTimer = setInterval(() => {
                        currentSavings += targetSavings / 60;
                        if (currentSavings >= targetSavings) {
                            currentSavings = targetSavings;
                            clearInterval(savingsTimer);
                        }
                        savingsElement.textContent = 'R$ ' + currentSavings.toFixed(1) + 'M';
                    }, 25);
                }, 500);
            });
        </script>
    <script src="/static/portal-helpers.js"></script>
    <script src="/static/portal-functions.js"></script>
    <script src="/static/action-plan-system.js"></script>
    <script src="/static/action-plan-handlers.js"></script>
    </body>
    </html>
  `)
})

// Health check endpoint
app.get('/api/health', (c) => {
  return c.json({ 
    status: 'healthy',
    service: 'Plataforma Oncológica',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  })
})

// Test Navigator Integrated page
app.get('/test-navigator', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste Portal Navegador Integrado</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">
            <i class="fas fa-vial text-teal-600 mr-2"></i>
            Teste do Portal do Navegador Integrado
        </h1>
        
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 class="text-xl font-semibold mb-4">✅ Sistema 100% Funcional</h2>
            <p class="text-gray-700 mb-4">
                O Portal do Navegador agora está totalmente integrado com a View Universal do Paciente.
                Todas as funcionalidades foram implementadas diretamente no código do portal.
            </p>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
                <li>Clique no botão abaixo para acessar o Portal do Navegador</li>
                <li>No Trilho de Atendimentos (Kanban), clique em qualquer card de paciente</li>
                <li>A View Universal abrirá com 6 abas: Visão Geral, Contatar, Agendar, Jornada, Checklist e IA Laura</li>
            </ol>
        </div>
        
        <div class="text-center space-y-4">
            <a href="/#navigator" class="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition text-lg font-semibold">
                <i class="fas fa-compass mr-2"></i>
                Abrir Portal do Navegador
            </a>
            
            <div class="text-sm text-gray-600">
                <p>Ou acesse diretamente: <a href="https://3000-is0o3lqkacvyzl4g7t2eu-6532622b.e2b.dev#navigator" class="text-blue-600 hover:underline" target="_blank">
                    Portal do Navegador
                </a></p>
            </div>
        </div>
    </div>
</body>
</html>`)
})

// Test Portal Functions page
app.get('/test-portal-functions', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste Portal Functions</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold mb-6">Teste de Carregamento das Funções do Portal</h1>
        
        <div class="bg-white rounded-lg shadow p-6 mb-4">
            <h2 class="text-lg font-semibold mb-4">Status dos Scripts</h2>
            <div id="status-container" class="space-y-2">
                <p>Carregando...</p>
            </div>
        </div>
        
        <div class="bg-white rounded-lg shadow p-6 mb-4">
            <h2 class="text-lg font-semibold mb-4">Teste de Abertura da View - 6 Pacientes</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <button onclick="window.open('/patient-view/PAC-001', '_blank')" class="bg-teal-600 text-white px-4 py-3 rounded hover:bg-teal-700 text-sm">
                    <i class="fas fa-user mr-2"></i>
                    Maria Silva (PAC-001)
                </button>
                <button onclick="window.open('/patient-view/PAC-002', '_blank')" class="bg-red-600 text-white px-4 py-3 rounded hover:bg-red-700 text-sm">
                    <i class="fas fa-user mr-2"></i>
                    Ana Costa (PAC-002)
                </button>
                <button onclick="window.open('/patient-view/PAC-003', '_blank')" class="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 text-sm">
                    <i class="fas fa-user mr-2"></i>
                    Carlos Mendes (PAC-003)
                </button>
                <button onclick="window.open('/patient-view/PAC-004', '_blank')" class="bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 text-sm">
                    <i class="fas fa-user mr-2"></i>
                    João Santos (PAC-004)
                </button>
                <button onclick="window.open('/patient-view/PAC-005', '_blank')" class="bg-purple-600 text-white px-4 py-3 rounded hover:bg-purple-700 text-sm">
                    <i class="fas fa-user mr-2"></i>
                    Pedro Oliveira (PAC-005)
                </button>
                <button onclick="window.open('/patient-view/PAC-006', '_blank')" class="bg-orange-600 text-white px-4 py-3 rounded hover:bg-orange-700 text-sm">
                    <i class="fas fa-user mr-2"></i>
                    Lucia Ferreira (PAC-006)
                </button>
            </div>
            <p class="text-sm text-gray-600 mt-4">Clique em qualquer paciente para abrir a View Universal em nova aba</p>
        </div>
        
        <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-lg font-semibold mb-4">Console Log</h2>
            <div id="console-log" class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm h-64 overflow-y-auto">
                <p>Console iniciado...</p>
            </div>
        </div>
    </div>
    
    <!-- Carregar scripts necessários -->
    <script src="/static/patient-view-universal.js"></script>
    <script src="/static/navigator-views.js"></script>
    <script src="/static/navigator-views-extended.js"></script>
    <script src="/static/portal-loader.js"></script>
    
    <script>
        // Função de log customizada
        function log(message, type = 'info') {
            const consoleDiv = document.getElementById('console-log');
            const timestamp = new Date().toLocaleTimeString();
            const color = type === 'error' ? 'text-red-400' : 
                         type === 'success' ? 'text-green-400' : 
                         'text-yellow-400';
            
            const p = document.createElement('p');
            p.className = color;
            p.textContent = \`[\${timestamp}] \${message}\`;
            consoleDiv.appendChild(p);
            consoleDiv.scrollTop = consoleDiv.scrollHeight;
            
            // Também logar no console real
            console.log(message);
        }
        
        // Verificar status dos scripts
        function checkScriptStatus() {
            const statusDiv = document.getElementById('status-container');
            let html = '';
            
            const functions = [
                { name: 'openPatientUniversalView', desc: 'View Universal do Paciente' },
                { name: 'renderPatientUniversalView', desc: 'Renderizar View Universal' },
                { name: 'renderContatarView', desc: 'View Contatar' },
                { name: 'renderAgendarView', desc: 'View Agendar' },
                { name: 'renderJornadaView', desc: 'View Jornada' },
                { name: 'renderChecklistView', desc: 'View Checklist' },
                { name: 'loadPortal', desc: 'Portal Loader' }
            ];
            
            functions.forEach(func => {
                const exists = typeof window[func.name] === 'function';
                const icon = exists ? '✅' : '❌';
                const color = exists ? 'text-green-600' : 'text-red-600';
                
                html += \`
                    <div class="flex items-center justify-between p-2 border rounded">
                        <span>\${func.desc}</span>
                        <span class="\${color} font-bold">\${icon} \${func.name}</span>
                    </div>
                \`;
                
                log(\`Função \${func.name}: \${exists ? 'DISPONÍVEL' : 'NÃO ENCONTRADA'}\`, exists ? 'success' : 'error');
            });
            
            statusDiv.innerHTML = html;
        }
        
        // Testar abertura da view
        function testOpenView() {
            log('Tentando abrir View Universal do Paciente...', 'info');
            
            if (typeof window.openPatientUniversalView === 'function') {
                try {
                    window.openPatientUniversalView('PAC-001', 'navigator');
                    log('View aberta com sucesso!', 'success');
                } catch (error) {
                    log('Erro ao abrir view: ' + error.message, 'error');
                }
            } else {
                log('Função openPatientUniversalView não está disponível!', 'error');
            }
        }
        
        // Executar verificação ao carregar
        window.addEventListener('load', () => {
            log('Página carregada, verificando scripts...', 'info');
            setTimeout(checkScriptStatus, 1000);
        });
        
        // Interceptar erros globais
        window.addEventListener('error', (e) => {
            log(\`ERRO GLOBAL: \${e.message}\`, 'error');
        });
    </script>
</body>
</html>`)
})

// Test Patient View page
app.get('/test-patient-view', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste - View Universal do Paciente</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">🧪 Teste da View Universal do Paciente</h1>
        
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <p class="mb-4 text-gray-600">Clique no botão abaixo para testar a view completa do paciente:</p>
            
            <button onclick="testarView()" class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold">
                <i class="fas fa-user-circle mr-2"></i>
                Abrir View Completa do Paciente
            </button>
            
            <div id="status" class="mt-4 text-sm text-gray-600"></div>
        </div>
        
        <div id="resultado" class="mt-8"></div>
    </div>

    <!-- Modal Container -->
    <div id="patient-universal-modal" class="fixed inset-0 z-50 overflow-y-auto" style="display: none;"></div>

    <script src="/static/patient-view-universal.js"></script>
    
    <script>
        function testarView() {
            const statusDiv = document.getElementById('status');
            statusDiv.innerHTML = 'Carregando view...';
            
            try {
                // Tentar abrir usando a função modal
                if (typeof openPatientUniversalView === 'function') {
                    statusDiv.innerHTML = '✅ Abrindo view em modal...';
                    openPatientUniversalView('PAC-TEST-001', 'test');
                } 
                // Se não existir, renderizar diretamente
                else if (typeof renderPatientUniversalView === 'function') {
                    statusDiv.innerHTML = '✅ Renderizando view...';
                    const modal = document.getElementById('patient-universal-modal');
                    modal.innerHTML = renderPatientUniversalView('PAC-TEST-001', 'test');
                    modal.style.display = 'block';
                    modal.style.overflow = 'auto';
                } 
                else {
                    statusDiv.innerHTML = '❌ Erro: Funções não encontradas';
                }
            } catch (error) {
                statusDiv.innerHTML = '❌ Erro: ' + error.message;
                console.error(error);
            }
        }
        
        // Verificação inicial
        document.addEventListener('DOMContentLoaded', function() {
            const statusDiv = document.getElementById('status');
            if (typeof renderPatientUniversalView === 'function') {
                statusDiv.innerHTML = '✅ Script carregado com sucesso!';
            } else {
                statusDiv.innerHTML = '⚠️ Aguardando carregamento do script...';
            }
        });
    </script>
</body>
</html>`)
})

// Demo Navigator page - TESTE DAS NOVAS FUNCIONALIDADES
app.get('/demo-navigator', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Navigator - FUNCIONANDO!</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center text-red-600">
            🚀 TESTE REAL - CLIQUE NOS BOTÕES ABAIXO
        </h1>
        
        <div class="grid grid-cols-2 gap-4 mb-8">
            <button onclick="mostrarContatar()" class="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 text-xl">
                <i class="fas fa-address-book mr-2"></i>
                CONTATAR
            </button>
            
            <button onclick="mostrarAgendar()" class="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 text-xl">
                <i class="fas fa-calendar mr-2"></i>
                AGENDAR
            </button>
            
            <button onclick="mostrarJornada()" class="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 text-xl">
                <i class="fas fa-route mr-2"></i>
                JORNADA
            </button>
            
            <button onclick="mostrarChecklist()" class="bg-indigo-500 text-white p-4 rounded-lg hover:bg-indigo-600 text-xl">
                <i class="fas fa-clipboard-check mr-2"></i>
                CHECKLIST
            </button>
        </div>
        
        <div id="content" class="bg-white rounded-lg shadow-lg min-h-[400px]"></div>
    </div>

    <script src="/static/navigator-views.js"></script>
    <script src="/static/navigator-views-extended.js"></script>
    
    <script>
        console.log('Scripts carregados!');
        
        function mostrarContatar() {
            console.log('Mostrando Contatar...');
            document.getElementById('content').innerHTML = renderContatarView('PAC-001');
        }
        
        function mostrarAgendar() {
            console.log('Mostrando Agendar...');
            document.getElementById('content').innerHTML = renderAgendarView('PAC-001');
        }
        
        function mostrarJornada() {
            console.log('Mostrando Jornada...');
            document.getElementById('content').innerHTML = renderJornadaView('PAC-001');
        }
        
        function mostrarChecklist() {
            console.log('Mostrando Checklist...');
            document.getElementById('content').innerHTML = renderChecklistView('PAC-001');
        }
        
        window.closeModal = function() {
            document.getElementById('content').innerHTML = '<p class="p-8 text-center text-gray-500">Clique em um botão acima para testar</p>';
        }
        
        // Mensagem inicial
        document.getElementById('content').innerHTML = '<p class="p-8 text-center text-2xl text-gray-600">👆 Clique em um dos botões acima para testar as funcionalidades</p>';
    </script>
</body>
</html>`)
})

export default app