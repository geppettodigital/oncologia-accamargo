import { Hono } from 'hono';

const doctorViews = new Hono();

// View de Prescrição
doctorViews.get('/doctor/prescribe', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prescrição Médica - LAURA Assistant</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
    <div class="max-w-6xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-prescription mr-3 text-blue-600"></i>
                    Prescrição Médica Inteligente
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Formulário de Prescrição -->
            <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <h2 class="text-lg font-bold mb-4">Nova Prescrição</h2>
                
                <!-- Seleção de Paciente -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Paciente</label>
                    <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Maria Silva Santos - PAC-001</option>
                        <option>Ana Costa - PAC-002</option>
                        <option>Carlos Mendes - PAC-003</option>
                        <option>João Santos - PAC-004</option>
                        <option>Pedro Oliveira - PAC-005</option>
                        <option>Lucia Ferreira - PAC-006</option>
                    </select>
                </div>

                <!-- Tipo de Prescrição -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Prescrição</label>
                    <div class="grid grid-cols-3 gap-2">
                        <button class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                            <i class="fas fa-pills mr-2"></i>Medicamentos
                        </button>
                        <button class="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">
                            <i class="fas fa-syringe mr-2"></i>Quimioterapia
                        </button>
                        <button class="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                            <i class="fas fa-procedures mr-2"></i>Exames
                        </button>
                    </div>
                </div>

                <!-- Medicamentos -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Medicamentos</label>
                    <div class="space-y-3">
                        <div class="p-3 bg-gray-50 rounded-lg">
                            <div class="grid grid-cols-4 gap-2">
                                <input type="text" placeholder="Medicamento" class="col-span-2 px-3 py-2 border rounded">
                                <input type="text" placeholder="Dose" class="px-3 py-2 border rounded">
                                <input type="text" placeholder="Frequência" class="px-3 py-2 border rounded">
                            </div>
                        </div>
                        <button class="text-blue-600 hover:text-blue-700 text-sm">
                            <i class="fas fa-plus-circle mr-1"></i>Adicionar Medicamento
                        </button>
                    </div>
                </div>

                <!-- Observações -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Observações</label>
                    <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Instruções especiais, recomendações..."></textarea>
                </div>

                <!-- Botões de Ação -->
                <div class="flex gap-3">
                    <button class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                        <i class="fas fa-save mr-2"></i>Salvar Prescrição
                    </button>
                    <button class="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                        <i class="fas fa-paper-plane mr-2"></i>Enviar para Farmácia
                    </button>
                </div>
            </div>

            <!-- Painel IA LAURA -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h2 class="text-lg font-bold mb-4">
                    <i class="fas fa-robot mr-2 text-purple-600"></i>
                    Assistente LAURA
                </h2>
                
                <div class="space-y-4">
                    <!-- Sugestões -->
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h3 class="font-semibold text-sm text-blue-800 mb-2">
                            <i class="fas fa-lightbulb mr-1"></i>Sugestões Baseadas no Perfil
                        </h3>
                        <ul class="text-xs text-gray-700 space-y-1">
                            <li>• Ondansetrona 8mg para prevenção de náusea</li>
                            <li>• Dexametasona 4mg pré-quimio</li>
                            <li>• Omeprazol 20mg proteção gástrica</li>
                        </ul>
                    </div>

                    <!-- Alertas de Interação -->
                    <div class="bg-yellow-50 p-4 rounded-lg">
                        <h3 class="font-semibold text-sm text-yellow-800 mb-2">
                            <i class="fas fa-exclamation-triangle mr-1"></i>Verificação de Interações
                        </h3>
                        <p class="text-xs text-gray-700">Nenhuma interação medicamentosa detectada</p>
                    </div>

                    <!-- Protocolos -->
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h3 class="font-semibold text-sm text-purple-800 mb-2">
                            <i class="fas fa-book mr-1"></i>Protocolo Recomendado
                        </h3>
                        <p class="text-xs text-gray-700">NCCN Guidelines 2024 - Breast Cancer v3.2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `);
});

// View de Laudos
doctorViews.get('/doctor/reports', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laudos Médicos - Sistema Integrado</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-file-medical-alt mr-3 text-green-600"></i>
                    Central de Laudos e Relatórios
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <!-- Filtros e Ações -->
        <div class="bg-white rounded-xl shadow-lg p-4 mb-6">
            <div class="flex flex-wrap gap-3 items-center">
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todos os Status</option>
                    <option>Pendentes</option>
                    <option>Em Análise</option>
                    <option>Finalizados</option>
                </select>
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todos os Tipos</option>
                    <option>Anatomopatológico</option>
                    <option>Imagem</option>
                    <option>Laboratório</option>
                </select>
                <input type="date" class="px-3 py-2 border border-gray-300 rounded-lg">
                <button class="ml-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    <i class="fas fa-plus mr-2"></i>Novo Laudo
                </button>
            </div>
        </div>

        <!-- Grid de Laudos -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Laudo Pendente -->
            <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h3 class="font-bold text-gray-800">Maria Silva Santos</h3>
                        <p class="text-sm text-gray-600">PAC-001 • Anatomopatológico</p>
                    </div>
                    <span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Pendente</span>
                </div>
                <p class="text-sm text-gray-700 mb-3">Biópsia de mama - Análise imunohistoquímica</p>
                <div class="flex items-center justify-between text-xs text-gray-500">
                    <span><i class="fas fa-clock mr-1"></i>Solicitado: 14/01/2025</span>
                    <button class="text-blue-600 hover:text-blue-700">
                        <i class="fas fa-edit mr-1"></i>Elaborar
                    </button>
                </div>
            </div>

            <!-- Laudo em Análise -->
            <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h3 class="font-bold text-gray-800">Ana Costa</h3>
                        <p class="text-sm text-gray-600">PAC-002 • Imagem</p>
                    </div>
                    <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Em Análise</span>
                </div>
                <p class="text-sm text-gray-700 mb-3">PET-CT - Estadiamento</p>
                <div class="flex items-center justify-between text-xs text-gray-500">
                    <span><i class="fas fa-user-md mr-1"></i>Dr. Carlos Radiologista</span>
                    <button class="text-blue-600 hover:text-blue-700">
                        <i class="fas fa-eye mr-1"></i>Revisar
                    </button>
                </div>
            </div>

            <!-- Laudo Finalizado -->
            <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h3 class="font-bold text-gray-800">Carlos Mendes</h3>
                        <p class="text-sm text-gray-600">PAC-003 • Laboratório</p>
                    </div>
                    <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Finalizado</span>
                </div>
                <p class="text-sm text-gray-700 mb-3">Hemograma completo + Marcadores tumorais</p>
                <div class="flex items-center justify-between text-xs text-gray-500">
                    <span><i class="fas fa-check-circle mr-1"></i>Concluído: 15/01/2025</span>
                    <div class="flex gap-2">
                        <button class="text-green-600 hover:text-green-700">
                            <i class="fas fa-download mr-1"></i>PDF
                        </button>
                        <button class="text-blue-600 hover:text-blue-700">
                            <i class="fas fa-share mr-1"></i>Enviar
                        </button>
                    </div>
                </div>
            </div>

            <!-- Laudo Urgente -->
            <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h3 class="font-bold text-gray-800">João Santos</h3>
                        <p class="text-sm text-gray-600">PAC-004 • Anatomopatológico</p>
                    </div>
                    <span class="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Urgente</span>
                </div>
                <p class="text-sm text-gray-700 mb-3">Congelação intraoperatória</p>
                <div class="flex items-center justify-between text-xs text-gray-500">
                    <span><i class="fas fa-exclamation-triangle mr-1"></i>Prazo: Hoje</span>
                    <button class="text-red-600 hover:text-red-700">
                        <i class="fas fa-fast-forward mr-1"></i>Priorizar
                    </button>
                </div>
            </div>
        </div>

        <!-- Painel de Estatísticas -->
        <div class="mt-6 bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-lg font-bold mb-4">Estatísticas de Laudos</h2>
            <div class="grid grid-cols-4 gap-4">
                <div class="text-center">
                    <p class="text-3xl font-bold text-yellow-600">7</p>
                    <p class="text-sm text-gray-600">Pendentes</p>
                </div>
                <div class="text-center">
                    <p class="text-3xl font-bold text-blue-600">12</p>
                    <p class="text-sm text-gray-600">Em Análise</p>
                </div>
                <div class="text-center">
                    <p class="text-3xl font-bold text-green-600">45</p>
                    <p class="text-sm text-gray-600">Finalizados</p>
                </div>
                <div class="text-center">
                    <p class="text-3xl font-bold text-purple-600">2.3</p>
                    <p class="text-sm text-gray-600">Dias (Tempo Médio)</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `);
});

// View de Protocolos
doctorViews.get('/doctor/protocols', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protocolos Clínicos - Base de Conhecimento</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-purple-50 via-white to-indigo-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-book-medical mr-3 text-purple-600"></i>
                    Protocolos Clínicos e Guidelines
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <!-- Busca e Filtros -->
        <div class="bg-white rounded-xl shadow-lg p-4 mb-6">
            <div class="flex gap-3">
                <input type="text" placeholder="Buscar protocolo..." class="flex-1 px-3 py-2 border border-gray-300 rounded-lg">
                <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Todas as Especialidades</option>
                    <option>Oncologia Mama</option>
                    <option>Oncologia Pulmão</option>
                    <option>Hematologia</option>
                    <option>Oncologia GI</option>
                </select>
                <button class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                    <i class="fas fa-search mr-2"></i>Buscar
                </button>
            </div>
        </div>

        <!-- Grid de Protocolos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Protocolo NCCN -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-t-xl">
                    <h3 class="text-white font-bold">NCCN Guidelines</h3>
                    <p class="text-purple-100 text-sm">Breast Cancer v3.2024</p>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Mama</span>
                        <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Atualizado</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">Diretrizes completas para tratamento de câncer de mama, incluindo estadiamento, cirurgia, quimioterapia adjuvante e neoadjuvante.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-500">Atualizado: Jan 2024</span>
                        <button class="text-purple-600 hover:text-purple-700">
                            <i class="fas fa-external-link-alt mr-1"></i>Abrir
                        </button>
                    </div>
                </div>
            </div>

            <!-- Protocolo ASCO -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-t-xl">
                    <h3 class="text-white font-bold">ASCO Guidelines</h3>
                    <p class="text-blue-100 text-sm">Lung Cancer Management</p>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Pulmão</span>
                        <span class="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Revisão</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">Protocolo para manejo de câncer de pulmão não pequenas células, incluindo terapia alvo e imunoterapia.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-500">Atualizado: Dez 2023</span>
                        <button class="text-blue-600 hover:text-blue-700">
                            <i class="fas fa-external-link-alt mr-1"></i>Abrir
                        </button>
                    </div>
                </div>
            </div>

            <!-- Protocolo Institucional -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-t-xl">
                    <h3 class="text-white font-bold">Protocolo A.C.Camargo</h3>
                    <p class="text-green-100 text-sm">Neutropenia Febril</p>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Emergência</span>
                        <span class="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Crítico</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">Manejo de neutropenia febril em pacientes oncológicos, incluindo antibioticoterapia empírica e suporte.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-500">Vigente: 2024</span>
                        <button class="text-green-600 hover:text-green-700">
                            <i class="fas fa-external-link-alt mr-1"></i>Abrir
                        </button>
                    </div>
                </div>
            </div>

            <!-- Protocolo ESMO -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 rounded-t-xl">
                    <h3 class="text-white font-bold">ESMO Guidelines</h3>
                    <p class="text-indigo-100 text-sm">Colorectal Cancer</p>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">GI</span>
                        <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">2024</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">Consenso europeu para tratamento de câncer colorretal metastático e localizado.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-500">Atualizado: Jan 2024</span>
                        <button class="text-indigo-600 hover:text-indigo-700">
                            <i class="fas fa-external-link-alt mr-1"></i>Abrir
                        </button>
                    </div>
                </div>
            </div>

            <!-- Protocolo Quimioterapia -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-t-xl">
                    <h3 class="text-white font-bold">Esquemas QT</h3>
                    <p class="text-orange-100 text-sm">FOLFIRINOX Modificado</p>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Pâncreas</span>
                        <span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Alta Complexidade</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">Protocolo detalhado de administração, ajuste de dose e manejo de toxicidades.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-500">Revisado: Nov 2023</span>
                        <button class="text-orange-600 hover:text-orange-700">
                            <i class="fas fa-external-link-alt mr-1"></i>Abrir
                        </button>
                    </div>
                </div>
            </div>

            <!-- Protocolo Suporte -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-teal-500 to-teal-600 p-4 rounded-t-xl">
                    <h3 class="text-white font-bold">Cuidados Suporte</h3>
                    <p class="text-teal-100 text-sm">Manejo de Náusea e Vômito</p>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded">Suporte</span>
                        <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Essencial</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">Prevenção e tratamento de náusea e vômito induzidos por quimioterapia (CINV).</p>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-gray-500">Atualizado: Jan 2024</span>
                        <button class="text-teal-600 hover:text-teal-700">
                            <i class="fas fa-external-link-alt mr-1"></i>Abrir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `);
});

// View IA Assistente
doctorViews.get('/doctor/ai-assistant', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAURA - Assistente IA Médico</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-800">
                    <i class="fas fa-robot mr-3 text-purple-600"></i>
                    LAURA - Assistente de Inteligência Artificial
                </h1>
                <button onclick="window.history.back()" class="text-gray-600 hover:text-gray-800">
                    <i class="fas fa-arrow-left mr-2"></i>Voltar
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Chat Interface -->
            <div class="lg:col-span-2 bg-white rounded-xl shadow-lg">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-t-xl">
                    <h2 class="text-white font-bold">Converse com LAURA</h2>
                    <p class="text-purple-100 text-sm">IA treinada com guidelines e protocolos oncológicos</p>
                </div>
                
                <!-- Mensagens -->
                <div class="p-4 h-96 overflow-y-auto space-y-4">
                    <!-- Mensagem LAURA -->
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                            <i class="fas fa-robot text-xs"></i>
                        </div>
                        <div class="flex-1">
                            <p class="text-xs text-gray-500 mb-1">LAURA • 14:25</p>
                            <div class="bg-purple-50 p-3 rounded-lg">
                                <p class="text-sm text-gray-800">Olá Dr. Roberto! Como posso ajudá-lo hoje? Posso auxiliar com:</p>
                                <ul class="text-sm text-gray-700 mt-2 space-y-1">
                                    <li>• Recomendações de tratamento baseadas em evidências</li>
                                    <li>• Análise de interações medicamentosas</li>
                                    <li>• Sugestões de protocolos clínicos</li>
                                    <li>• Interpretação de exames e marcadores</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Mensagem Médico -->
                    <div class="flex items-start gap-3 flex-row-reverse">
                        <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                            RA
                        </div>
                        <div class="flex-1">
                            <p class="text-xs text-gray-500 mb-1 text-right">Você • 14:26</p>
                            <div class="bg-blue-50 p-3 rounded-lg">
                                <p class="text-sm text-gray-800">Paciente com CA mama HER2+, qual o protocolo de primeira linha recomendado?</p>
                            </div>
                        </div>
                    </div>

                    <!-- Resposta LAURA -->
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                            <i class="fas fa-robot text-xs"></i>
                        </div>
                        <div class="flex-1">
                            <p class="text-xs text-gray-500 mb-1">LAURA • 14:26</p>
                            <div class="bg-purple-50 p-3 rounded-lg">
                                <p class="text-sm text-gray-800 mb-2">Para CA mama HER2+ metastático, o protocolo de primeira linha recomendado é:</p>
                                <div class="bg-white p-2 rounded border-l-4 border-purple-500 mb-2">
                                    <p class="font-semibold text-sm">CLEOPATRA Regimen:</p>
                                    <ul class="text-sm text-gray-700 mt-1">
                                        <li>• Pertuzumabe 840mg (ataque) → 420mg a cada 3 sem</li>
                                        <li>• Trastuzumabe 8mg/kg (ataque) → 6mg/kg a cada 3 sem</li>
                                        <li>• Docetaxel 75-100mg/m² a cada 3 sem (6 ciclos)</li>
                                    </ul>
                                </div>
                                <p class="text-xs text-gray-600">Referência: NCCN Guidelines Breast Cancer v3.2024, CLEOPATRA Trial (NEJM 2020)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Input -->
                <div class="border-t p-4">
                    <div class="flex gap-2">
                        <input type="text" placeholder="Digite sua pergunta..." 
                            class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <button class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Painel Lateral -->
            <div class="space-y-4">
                <!-- Contexto do Paciente -->
                <div class="bg-white rounded-xl shadow-lg p-4">
                    <h3 class="font-bold text-gray-800 mb-3">
                        <i class="fas fa-user-circle mr-2 text-blue-600"></i>
                        Contexto do Paciente
                    </h3>
                    <select class="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3">
                        <option>Selecionar Paciente</option>
                        <option>Maria Silva - PAC-001</option>
                        <option>Ana Costa - PAC-002</option>
                        <option>Carlos Mendes - PAC-003</option>
                    </select>
                    <div class="text-sm text-gray-600 space-y-1">
                        <p>• CA Mama HER2+</p>
                        <p>• Estadio IIIA</p>
                        <p>• Em quimioterapia</p>
                    </div>
                </div>

                <!-- Sugestões Rápidas -->
                <div class="bg-white rounded-xl shadow-lg p-4">
                    <h3 class="font-bold text-gray-800 mb-3">
                        <i class="fas fa-lightbulb mr-2 text-yellow-500"></i>
                        Perguntas Sugeridas
                    </h3>
                    <div class="space-y-2">
                        <button class="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm">
                            Ajuste de dose para toxicidade grau 3
                        </button>
                        <button class="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm">
                            Manejo de náusea refratária
                        </button>
                        <button class="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm">
                            Critérios para suspender tratamento
                        </button>
                        <button class="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm">
                            Interação com medicação cardíaca
                        </button>
                    </div>
                </div>

                <!-- Recursos -->
                <div class="bg-white rounded-xl shadow-lg p-4">
                    <h3 class="font-bold text-gray-800 mb-3">
                        <i class="fas fa-database mr-2 text-green-600"></i>
                        Base de Conhecimento
                    </h3>
                    <div class="text-xs text-gray-600 space-y-1">
                        <p>✓ NCCN Guidelines 2024</p>
                        <p>✓ ASCO Clinical Practice</p>
                        <p>✓ ESMO Consensus</p>
                        <p>✓ UpToDate Oncology</p>
                        <p>✓ 15.000+ estudos clínicos</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `);
});

export { doctorViews };