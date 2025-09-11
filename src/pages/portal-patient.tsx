import { Context } from 'hono'

export const portalPatientPage = (c: Context) => {
  return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal do Paciente - Plataforma Oncológica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/geppetto-digital-theme.css" rel="stylesheet">
    <script src="/js/brand-config.js"></script>
    <style>
        .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
    </style>
</head>
<body class="bg-gradient-to-br from-gray-50 via-orange-50/10 to-orange-50/10 min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-4">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-orange-500 to-orange-600">
                        <i class="fas fa-user"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-gray-800">Portal do Paciente</h1>
                        <p class="text-sm text-gray-600">Acompanhe sua jornada de cuidado</p>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="text-gray-600 hover:text-orange-600">
                        <i class="fas fa-bell text-xl"></i>
                    </button>
                    <button class="text-gray-600 hover:text-orange-600">
                        <i class="fas fa-user-circle text-xl"></i>
                    </button>
                    <a href="/preview.html" class="text-gray-600 hover:text-orange-600">
                        <i class="fas fa-home text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
        <!-- Welcome Section -->
        <div class="glass-effect rounded-xl p-6 mb-8">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">Olá, Paciente!</h2>
                    <p class="text-gray-600">Bem-vindo ao seu portal personalizado de cuidados oncológicos</p>
                </div>
                <div class="text-right">
                    <p class="text-sm text-gray-500">Próxima consulta</p>
                    <p class="text-xl font-bold text-orange-600">15/09 às 14:30</p>
                </div>
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="glass-effect rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-all">
                <div class="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-calendar-alt text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800">Agendamentos</h3>
                <p class="text-sm text-gray-600 mt-2">Consultas e exames</p>
            </div>

            <div class="glass-effect rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-all">
                <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-file-medical text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800">Resultados</h3>
                <p class="text-sm text-gray-600 mt-2">Exames e laudos</p>
            </div>

            <div class="glass-effect rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-all">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-pills text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800">Medicações</h3>
                <p class="text-sm text-gray-600 mt-2">Prescrições ativas</p>
            </div>

            <div class="glass-effect rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-all">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-comments text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800">Mensagens</h3>
                <p class="text-sm text-gray-600 mt-2">Chat com equipe</p>
            </div>
        </div>

        <!-- Treatment Journey -->
        <div class="glass-effect rounded-xl p-6 mb-8">
            <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-route mr-2 text-orange-600"></i>
                Sua Jornada de Tratamento
            </h3>
            <div class="relative">
                <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200"></div>
                <div class="space-y-6">
                    <div class="flex items-center">
                        <div class="w-4 h-4 bg-orange-600 rounded-full mr-4 z-10"></div>
                        <div class="flex-1 glass-effect rounded-lg p-4">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h4 class="font-bold text-gray-800">Consulta Inicial</h4>
                                    <p class="text-sm text-gray-600">Dr. Silva - Oncologia</p>
                                </div>
                                <span class="text-sm text-green-600 font-semibold">✓ Concluído</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-4 h-4 bg-orange-600 rounded-full mr-4 z-10"></div>
                        <div class="flex-1 glass-effect rounded-lg p-4">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h4 class="font-bold text-gray-800">Exames de Estadiamento</h4>
                                    <p class="text-sm text-gray-600">Tomografia e PET-CT</p>
                                </div>
                                <span class="text-sm text-green-600 font-semibold">✓ Concluído</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-4 h-4 bg-orange-400 rounded-full mr-4 z-10 animate-pulse"></div>
                        <div class="flex-1 glass-effect rounded-lg p-4 border-2 border-orange-400">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h4 class="font-bold text-gray-800">Início do Tratamento</h4>
                                    <p class="text-sm text-gray-600">Quimioterapia - Ciclo 1/6</p>
                                </div>
                                <span class="text-sm text-orange-600 font-semibold">Em andamento</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- AI Assistant -->
        <div class="glass-effect rounded-xl p-6 mb-8">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-gray-800">
                    <i class="fas fa-robot mr-2 text-purple-600"></i>
                    Assistente IA - Laura
                </h3>
                <button class="text-purple-600 hover:text-purple-700">
                    <i class="fas fa-expand-alt"></i>
                </button>
            </div>
            <div class="bg-purple-50 rounded-lg p-4">
                <p class="text-gray-700">
                    <strong>Análise do seu progresso:</strong> Seus exames mostram boa resposta ao tratamento. 
                    Continue seguindo as orientações médicas. Lembre-se de manter-se hidratado e reportar 
                    qualquer sintoma novo à equipe.
                </p>
                <div class="mt-4 flex space-x-3">
                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                        <i class="fas fa-comments mr-2"></i>Conversar
                    </button>
                    <button class="bg-white text-purple-600 border border-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50">
                        <i class="fas fa-info-circle mr-2"></i>Mais Informações
                    </button>
                </div>
            </div>
        </div>
    </main>

    <script>
        // Apply brand configuration
        if (window.BrandConfig) {
            window.BrandConfig.apply();
        }
    </script>
</body>
</html>`)
}