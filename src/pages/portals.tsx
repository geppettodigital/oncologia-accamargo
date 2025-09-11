import { Context } from 'hono'

export const portalDoctorPage = (c: Context) => {
  return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal do Médico - Plataforma Oncológica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-gray-50 via-green-50/10 to-green-50/10 min-h-screen">
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white">
                        <i class="fas fa-user-md text-xl"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-gray-800">Portal do Médico</h1>
                        <p class="text-sm text-gray-600">Gestão clínica inteligente</p>
                    </div>
                </div>
                <a href="/preview.html" class="text-gray-600 hover:text-green-600">
                    <i class="fas fa-home text-xl"></i>
                </a>
            </div>
        </div>
    </header>
    <main class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-xl p-8 shadow-lg text-center">
            <i class="fas fa-stethoscope text-6xl text-green-500 mb-4"></i>
            <h2 class="text-3xl font-bold mb-4">Portal Médico</h2>
            <p class="text-gray-600 mb-6">Acesse prontuários, protocolos e ferramentas de IA para suporte clínico</p>
            <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                Acessar Dashboard
            </button>
        </div>
    </main>
</body>
</html>
  `)
}

export const portalNavigatorPage = (c: Context) => {
  return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal Navegador - Plataforma Oncológica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-gray-50 via-purple-50/10 to-purple-50/10 min-h-screen">
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                        <i class="fas fa-compass text-xl"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-gray-800">Portal Navegador</h1>
                        <p class="text-sm text-gray-600">Coordenação da jornada do paciente</p>
                    </div>
                </div>
                <a href="/preview.html" class="text-gray-600 hover:text-purple-600">
                    <i class="fas fa-home text-xl"></i>
                </a>
            </div>
        </div>
    </header>
    <main class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-xl p-8 shadow-lg text-center">
            <i class="fas fa-route text-6xl text-purple-500 mb-4"></i>
            <h2 class="text-3xl font-bold mb-4">Navegação de Pacientes</h2>
            <p class="text-gray-600 mb-6">Coordene e acompanhe a jornada completa dos pacientes oncológicos</p>
            <button class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
                Ver Jornadas Ativas
            </button>
        </div>
    </main>
</body>
</html>
  `)
}

export const portalFinancialPage = (c: Context) => {
  return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal Financeiro - Plataforma Oncológica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-gray-50 via-green-50/10 to-green-50/10 min-h-screen">
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white">
                        <i class="fas fa-dollar-sign text-xl"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-gray-800">Portal Financeiro</h1>
                        <p class="text-sm text-gray-600">Gestão inteligente de custos</p>
                    </div>
                </div>
                <div class="text-right mr-4">
                    <p class="text-sm text-gray-600">Economia Mensal</p>
                    <p class="text-xl font-bold text-green-600">R$ 2.4M</p>
                </div>
                <a href="/preview.html" class="text-gray-600 hover:text-green-600">
                    <i class="fas fa-home text-xl"></i>
                </a>
            </div>
        </div>
    </header>
    <main class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-xl p-8 shadow-lg">
            <div class="text-center mb-8">
                <i class="fas fa-chart-line text-6xl text-green-500 mb-4"></i>
                <h2 class="text-3xl font-bold mb-4">Portal Financeiro</h2>
                <p class="text-gray-600">Prevenção de glosas e otimização financeira com IA</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 class="text-xl font-bold text-green-800 mb-2">
                    <i class="fas fa-shield-alt mr-2"></i>
                    R$ 2.4 Milhões em Perdas Prevenidas
                </h3>
                <p class="text-gray-700">
                    Sistema de IA previne glosas em tempo real, analisando documentação, 
                    autorizações e codificações antes do faturamento.
                </p>
            </div>
        </div>
    </main>
</body>
</html>
  `)
}

export const portalWellnessPage = (c: Context) => {
  return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal Bem-Estar - Plataforma Oncológica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-gray-50 via-pink-50/10 to-pink-50/10 min-h-screen">
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-white">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold">Portal Bem-Estar</h1>
                        <p class="text-sm text-gray-600">Suporte integral ao paciente</p>
                    </div>
                </div>
                <a href="/preview.html" class="text-gray-600 hover:text-pink-600">
                    <i class="fas fa-home text-xl"></i>
                </a>
            </div>
        </div>
    </header>
    <main class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-xl p-8 shadow-lg text-center">
            <i class="fas fa-heart text-6xl text-pink-500 mb-4"></i>
            <h2 class="text-3xl font-bold mb-4">Portal de Bem-Estar</h2>
            <p class="text-gray-600 mb-6">Apoio psicológico, grupos de suporte e práticas integrativas</p>
            <button class="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700">
                Explorar Recursos
            </button>
        </div>
    </main>
</body>
</html>
  `)
}

export const portalResearchPage = (c: Context) => {
  return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal Pesquisa - Plataforma Oncológica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-gray-50 via-blue-50/10 to-blue-50/10 min-h-screen">
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                        <i class="fas fa-flask"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold">Portal de Pesquisa</h1>
                        <p class="text-sm text-gray-600">Dados e análises clínicas</p>
                    </div>
                </div>
                <a href="/preview.html" class="text-gray-600 hover:text-blue-600">
                    <i class="fas fa-home text-xl"></i>
                </a>
            </div>
        </div>
    </header>
    <main class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-xl p-8 shadow-lg text-center">
            <i class="fas fa-microscope text-6xl text-blue-500 mb-4"></i>
            <h2 class="text-3xl font-bold mb-4">Centro de Pesquisa</h2>
            <p class="text-gray-600 mb-6">Análise de dados, estudos clínicos e publicações científicas</p>
            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Acessar Estudos
            </button>
        </div>
    </main>
</body>
</html>
  `)
}

export const portalAdminPage = (c: Context) => {
  return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal Admin - Plataforma Oncológica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 min-h-screen">
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white">
                        <i class="fas fa-cog"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold">Portal Administrativo</h1>
                        <p class="text-sm text-gray-600">Gestão completa do sistema</p>
                    </div>
                </div>
                <a href="/preview.html" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-home text-xl"></i>
                </a>
            </div>
        </div>
    </header>
    <main class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-xl p-8 shadow-lg text-center">
            <i class="fas fa-shield-alt text-6xl text-gray-700 mb-4"></i>
            <h2 class="text-3xl font-bold mb-4">Centro de Controle</h2>
            <p class="text-gray-600 mb-6">Configurações, usuários e monitoramento do sistema</p>
            <button class="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900">
                Painel de Controle
            </button>
        </div>
    </main>
</body>
</html>
  `)
}

export const portalAdminMasterPage = (c: Context) => {
  return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal Admin Master - Plataforma Oncológica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
    <header class="bg-black shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white">
                        <i class="fas fa-crown"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-white">Portal Admin Master</h1>
                        <p class="text-sm text-gray-400">Controle total do sistema</p>
                    </div>
                </div>
                <a href="/preview.html" class="text-gray-400 hover:text-white">
                    <i class="fas fa-home text-xl"></i>
                </a>
            </div>
        </div>
    </header>
    <main class="container mx-auto px-4 py-8">
        <div class="bg-gray-800 rounded-xl p-8 shadow-2xl text-center">
            <i class="fas fa-crown text-6xl text-red-500 mb-4"></i>
            <h2 class="text-3xl font-bold text-white mb-4">Admin Master</h2>
            <p class="text-gray-300 mb-6">Acesso completo a todas as funcionalidades administrativas</p>
            <button class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                Acessar Painel Master
            </button>
        </div>
    </main>
</body>
</html>
  `)
}