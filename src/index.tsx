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


// Import page handlers
import { patientPage } from './pages/patient'
import { doctorPage } from './pages/doctor'
import { navigatorPage } from './pages/navigator'
import { financialPage } from './pages/financial'
import { wellnessPage } from './pages/wellness'
import { researchPage } from './pages/research'
import { adminMasterPage } from './pages/admin-master'

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

// Mount page routes
app.get('/patient', patientPage)
app.get('/doctor', doctorPage)
app.get('/navigator', navigatorPage)
app.get('/financial', financialPage)
app.get('/wellness', wellnessPage)
app.get('/research', researchPage)
app.get('/admin-master', adminMasterPage)

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
                            <button onclick="window.location.href='/patient'" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('patient')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                            <button onclick="event.stopPropagation(); openAIForPortal('patient')" class="portal-ai-btn w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white flex items-center justify-center transition-all hover:scale-110" title="Assistente IA para este portal">
                                <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-6 h-6 filter brightness-0 invert">
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Médico -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                            <i class="fas fa-user-md text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Portal Médico</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Assistente clínico com IA e gestão integrada de pacientes</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="window.location.href='/doctor'" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('doctor')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                            <button onclick="event.stopPropagation(); openAIForPortal('doctor')" class="portal-ai-btn w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white flex items-center justify-center transition-all hover:scale-110" title="Assistente IA para este portal">
                                <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-6 h-6 filter brightness-0 invert">
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
                            <button onclick="window.location.href='/navigator'" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('navigator')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                            <button onclick="event.stopPropagation(); openAIForPortal('navigator')" class="portal-ai-btn w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white flex items-center justify-center transition-all hover:scale-110" title="Assistente IA para este portal">
                                <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-6 h-6 filter brightness-0 invert">
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
                            <button onclick="window.location.href='/financial'" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('financial')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                            <button onclick="event.stopPropagation(); openAIForPortal('financial')" class="portal-ai-btn w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white flex items-center justify-center transition-all hover:scale-110" title="Assistente IA para este portal">
                                <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-6 h-6 filter brightness-0 invert">
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
                            <button onclick="window.location.href='/wellness'" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('wellness')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                            <button onclick="event.stopPropagation(); openAIForPortal('wellness')" class="portal-ai-btn w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white flex items-center justify-center transition-all hover:scale-110" title="Assistente IA para este portal">
                                <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-6 h-6 filter brightness-0 invert">
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
                            <button onclick="window.location.href='/research'" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('research')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                            <button onclick="event.stopPropagation(); openAIForPortal('research')" class="portal-ai-btn w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white flex items-center justify-center transition-all hover:scale-110" title="Assistente IA para este portal">
                                <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-6 h-6 filter brightness-0 invert">
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

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
        <script>
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
        <script src="/static/ai-assistant.js"></script>
    <script src="/static/portal-helpers.js"></script>
    <script src="/static/portal-functions.js"></script>
    <script src="/static/ai-concerns.js"></script>
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

export default app