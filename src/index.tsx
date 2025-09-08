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

// Main landing page with updated design
app.get('/', (c) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ACCamargo Cancer Center - Plataforma Integrada de Gestão Oncológica</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <meta name="description" content="Plataforma Integrada de Gestão da Jornada Oncológica - ACCamargo Cancer Center">
        <meta name="author" content="ACCamargo Cancer Center">
        <meta property="og:title" content="ACCamargo - Plataforma Oncológica">
        <meta property="og:description" content="70 anos transformando o cuidado oncológico no Brasil">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gradient-to-br from-gray-50 to-green-50 min-h-screen flex flex-col">
        <!-- Header com Logo -->
        <header class="bg-white shadow-sm border-b border-gray-200">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-logo.svg" alt="ACCamargo Logo" class="logo-icon">
                        <div>
                            <h1 class="text-2xl font-bold text-gray-800">ACCamargo Cancer Center</h1>
                            <p class="text-sm text-gray-600 italic">"A Vida é muito maior que o Câncer"</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="text-gray-600 hover:text-gray-800">
                            <i class="far fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-gray-800">
                            <i class="far fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Módulos Grid com ícones outline -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <!-- Paciente -->
                <div class="bg-white rounded-xl shadow-md p-6 card-hover cursor-pointer border border-gray-100" onclick="window.location.href='/patient'">
                    <div class="text-center">
                        <div class="mb-4 text-green-600">
                            <i class="far fa-user text-5xl"></i>
                        </div>
                        <h2 class="text-xl font-semibold mb-2 text-gray-800">Portal do Paciente</h2>
                        <p class="text-gray-600 text-sm mb-4">Auto-triagem, agendamentos e acompanhamento da jornada</p>
                        <button class="mt-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all">
                            <i class="far fa-arrow-right mr-2"></i>Acessar
                        </button>
                    </div>
                </div>

                <!-- Médico -->
                <div class="bg-white rounded-xl shadow-md p-6 card-hover cursor-pointer border border-gray-100" onclick="window.location.href='/doctor'">
                    <div class="text-center">
                        <div class="mb-4 text-emerald-600">
                            <i class="fas fa-user-md text-5xl"></i>
                        </div>
                        <h2 class="text-xl font-semibold mb-2 text-gray-800">Portal Médico</h2>
                        <p class="text-gray-600 text-sm mb-4">Assistente clínico com IA e gestão de pacientes</p>
                        <button class="mt-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all">
                            <i class="far fa-arrow-right mr-2"></i>Acessar
                        </button>
                    </div>
                </div>

                <!-- Navegador -->
                <div class="bg-white rounded-xl shadow-md p-6 card-hover cursor-pointer border border-gray-100" onclick="window.location.href='/navigator'">
                    <div class="text-center">
                        <div class="mb-4 text-teal-600">
                            <i class="far fa-compass text-5xl"></i>
                        </div>
                        <h2 class="text-xl font-semibold mb-2 text-gray-800">Navegador de Pacientes</h2>
                        <p class="text-gray-600 text-sm mb-4">Coordenação e acompanhamento da jornada</p>
                        <button class="mt-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all">
                            <i class="far fa-arrow-right mr-2"></i>Acessar
                        </button>
                    </div>
                </div>

                <!-- Financeiro -->
                <div class="bg-white rounded-xl shadow-md p-6 card-hover cursor-pointer border border-gray-100" onclick="window.location.href='/financial'">
                    <div class="text-center">
                        <div class="mb-4 text-lime-600">
                            <i class="far fa-chart-line text-5xl"></i>
                        </div>
                        <h2 class="text-xl font-semibold mb-2 text-gray-800">Gestão Financeira</h2>
                        <p class="text-gray-600 text-sm mb-4">Prevenção de glosas e análise financeira com IA</p>
                        <button class="mt-2 bg-gradient-to-r from-lime-600 to-lime-700 text-white px-6 py-2 rounded-lg hover:from-lime-700 hover:to-lime-800 transition-all">
                            <i class="far fa-arrow-right mr-2"></i>Acessar
                        </button>
                    </div>
                </div>

                <!-- Bem-Estar -->
                <div class="bg-white rounded-xl shadow-md p-6 card-hover cursor-pointer border border-gray-100" onclick="window.location.href='/wellness'">
                    <div class="text-center">
                        <div class="mb-4 text-cyan-600">
                            <i class="far fa-heart text-5xl"></i>
                        </div>
                        <h2 class="text-xl font-semibold mb-2 text-gray-800">Bem-Estar e Apoio</h2>
                        <p class="text-gray-600 text-sm mb-4">Suporte psicológico e monitoramento emocional</p>
                        <button class="mt-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-2 rounded-lg hover:from-cyan-700 hover:to-cyan-800 transition-all">
                            <i class="far fa-arrow-right mr-2"></i>Acessar
                        </button>
                    </div>
                </div>

                <!-- Pesquisa -->
                <div class="bg-white rounded-xl shadow-md p-6 card-hover cursor-pointer border border-gray-100" onclick="window.location.href='/research'">
                    <div class="text-center">
                        <div class="mb-4 text-green-700">
                            <i class="fas fa-flask text-5xl"></i>
                        </div>
                        <h2 class="text-xl font-semibold mb-2 text-gray-800">Pesquisa Clínica</h2>
                        <p class="text-gray-600 text-sm mb-4">Análise de dados e insights para pesquisa</p>
                        <button class="mt-2 bg-gradient-to-r from-green-700 to-green-800 text-white px-6 py-2 rounded-lg hover:from-green-800 hover:to-green-900 transition-all">
                            <i class="far fa-arrow-right mr-2"></i>Acessar
                        </button>
                    </div>
                </div>
            </div>

            <!-- Estatísticas -->
            <div class="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <div class="flex items-center justify-center mb-6">
                    <img src="/static/accamargo-logo.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-3">
                    <h2 class="text-2xl font-bold text-gray-800">Estatísticas da Plataforma</h2>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                            <span id="stat-patients">0</span>
                        </div>
                        <div class="text-gray-600 mt-2 text-sm">Pacientes Ativos</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                            <span id="stat-appointments">0</span>
                        </div>
                        <div class="text-gray-600 mt-2 text-sm">Consultas Hoje</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                            <span id="stat-adherence">0</span>%
                        </div>
                        <div class="text-gray-600 mt-2 text-sm">Taxa de Adesão</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold bg-gradient-to-r from-lime-600 to-lime-700 bg-clip-text text-transparent">
                            <span id="stat-savings">0</span>
                        </div>
                        <div class="text-gray-600 mt-2 text-sm">Glosas Evitadas</div>
                    </div>
                </div>
            </div>

            <!-- Features Section -->
            <div class="mt-12 bg-gradient-to-r from-green-700 to-emerald-700 rounded-xl shadow-lg p-8 text-white">
                <div class="flex items-center justify-center mb-6">
                    <h2 class="text-2xl font-bold">
                        <i class="fas fa-microchip mr-3"></i>
                        Tecnologias Inovadoras
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="text-center">
                        <i class="fas fa-brain text-4xl mb-3"></i>
                        <h3 class="text-lg font-semibold mb-2">Motor de IA</h3>
                        <p class="text-sm opacity-90">Inteligência artificial avançada para análise preditiva e suporte à decisão</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-cogs text-4xl mb-3"></i>
                        <h3 class="text-lg font-semibold mb-2">Servos Mecanismos</h3>
                        <p class="text-sm opacity-90">Automação inteligente de processos e tarefas rotineiras</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-comments text-4xl mb-3"></i>
                        <h3 class="text-lg font-semibold mb-2">Engenharia de Prompt</h3>
                        <p class="text-sm opacity-90">Otimização de interações com IA para resultados precisos</p>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer Institucional -->
        <footer class="footer-gradient text-white mt-12">
            <div class="container mx-auto px-4 py-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Coluna 1: ACCamargo Cancer Center (DESTAQUE) -->
                    <div class="md:col-span-1 order-1 md:order-1">
                        <div class="flex items-center mb-4">
                            <img src="/static/accamargo-logo.svg" alt="ACCamargo Logo" class="w-14 h-14 mr-3">
                            <h3 class="text-xl font-bold">ACCamargo Cancer Center</h3>
                        </div>
                        <p class="text-sm opacity-95 mb-3 font-medium">
                            70 anos transformando o cuidado oncológico no Brasil
                        </p>
                        <p class="text-sm opacity-90 mb-3">
                            <strong>Centro Integrado de Diagnóstico, Tratamento, Ensino e Pesquisa</strong>
                        </p>
                        <p class="text-xs opacity-85 leading-relaxed">
                            <i class="far fa-hospital mr-2 text-green-300"></i>Instituição de Referência Nacional<br>
                            <i class="fas fa-award mr-2 text-green-300"></i>Acreditação Internacional<br>
                            <i class="fas fa-microscope mr-2 text-green-300"></i>Centro de Pesquisa Avançada<br>
                            <i class="fas fa-graduation-cap mr-2 text-green-300"></i>Formação de Especialistas<br>
                            <i class="fas fa-users mr-2 text-green-300"></i>+ 5.000 colaboradores<br>
                            <i class="fas fa-hospital-alt mr-2 text-green-300"></i>+ 500 leitos
                        </p>
                        <div class="mt-4 pt-3 border-t border-white/20">
                            <p class="text-xs opacity-90">
                                <i class="fas fa-map-marker-alt mr-2"></i>São Paulo - SP<br>
                                <i class="fas fa-globe mr-2"></i><a href="https://accamargo.org.br" class="hover:text-green-300">accamargo.org.br</a>
                            </p>
                        </div>
                    </div>

                    <!-- Coluna 2: Parceria Tecnológica -->
                    <div class="md:col-span-1 order-3 md:order-2">
                        <h3 class="text-lg font-bold mb-4">Parceria Tecnológica</h3>
                        <p class="text-sm opacity-90 mb-3">
                            Plataforma desenvolvida em colaboração com:
                        </p>
                        <div class="mb-4">
                            <p class="text-sm font-medium opacity-95 mb-2">Laura Technology</p>
                            <p class="text-xs opacity-75">
                                Especialista em IA para Saúde<br>
                                CNPJ: 38.475.698/0001-74<br>
                                Curitiba - PR
                            </p>
                        </div>
                        <div class="text-xs opacity-75 space-y-1">
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Inteligência Artificial</p>
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Machine Learning</p>
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Análise Preditiva</p>
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Automação de Processos</p>
                        </div>
                    </div>

                    <!-- Coluna 3: Informações Legais -->
                    <div class="md:col-span-1 order-2 md:order-3">
                        <h3 class="text-lg font-bold mb-4">Conformidade e Segurança</h3>
                        <ul class="text-sm opacity-90 space-y-2">
                            <li><i class="far fa-check-circle mr-2"></i>LGPD Compliant</li>
                            <li><i class="far fa-check-circle mr-2"></i>HIPAA Ready</li>
                            <li><i class="far fa-check-circle mr-2"></i>ISO 27001 Standards</li>
                            <li><i class="far fa-check-circle mr-2"></i>Criptografia AES-256</li>
                        </ul>
                        <div class="mt-4">
                            <a href="#" class="text-xs opacity-75 hover:opacity-100 mr-3">Termos de Uso</a>
                            <a href="#" class="text-xs opacity-75 hover:opacity-100 mr-3">Privacidade</a>
                            <a href="#" class="text-xs opacity-75 hover:opacity-100">Cookies</a>
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
                        Desenvolvido com <i class="far fa-heart text-green-300"></i> para transformar a jornada oncológica
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
            // Animate statistics on load
            document.addEventListener('DOMContentLoaded', () => {
                const animateCounter = (element, target) => {
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        element.textContent = Math.floor(current);
                    }, 30);
                };

                animateCounter(document.getElementById('stat-patients'), 234);
                animateCounter(document.getElementById('stat-appointments'), 56);
                animateCounter(document.getElementById('stat-adherence'), 87);
                animateCounter(document.getElementById('stat-savings'), 145);
            });
        </script>
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