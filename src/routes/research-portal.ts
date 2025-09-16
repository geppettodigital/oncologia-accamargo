import { Hono } from 'hono';

const researchPortal = new Hono();

researchPortal.get('/research-portal', (c) => {
    return c.html(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal de Pesquisa Clínica - A.C.Camargo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body class="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
    <div class="max-w-7xl mx-auto p-4">
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6 glass-effect">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">
                        <i class="fas fa-microscope mr-3 text-indigo-600"></i>
                        Portal de Pesquisa Clínica
                    </h1>
                    <p class="text-gray-600 mt-1">Centro de Pesquisa A.C.Camargo Cancer Center</p>
                </div>
                <div class="flex items-center gap-4">
                    <div class="text-right">
                        <p class="text-sm text-gray-600">Segunda-feira, 16 de Janeiro</p>
                        <p class="text-lg font-semibold text-indigo-600">14:45</p>
                    </div>
                    <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                        PC
                    </div>
                </div>
            </div>
        </div>

        <!-- Cards do Topo - Clicáveis -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <!-- Estudos Ativos -->
            <div onclick="window.location.href='/research/studies'" class="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover-lift transition-all">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-flask text-indigo-600 mr-2"></i>
                        Estudos Ativos
                    </h3>
                    <button class="text-indigo-600 hover:text-indigo-700">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div class="text-3xl font-bold text-indigo-600 mb-2">42</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Fase III</span>
                        <span class="font-semibold text-green-600">15</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Recrutando</span>
                        <span class="font-semibold text-blue-600">28</span>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full" style="width: 75%"></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">75% da meta anual</p>
                </div>
            </div>

            <!-- Participantes -->
            <div onclick="window.location.href='/research/participants'" class="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover-lift transition-all">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-users text-green-600 mr-2"></i>
                        Participantes
                    </h3>
                    <button class="text-green-600 hover:text-green-700">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div class="text-3xl font-bold text-green-600 mb-2">523</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Novos este mês</span>
                        <span class="font-semibold text-blue-600">47</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Taxa de retenção</span>
                        <span class="font-semibold text-green-600">87%</span>
                    </div>
                </div>
                <div class="mt-4 flex gap-2">
                    <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">+12% vs mês anterior</span>
                </div>
            </div>

            <!-- Publicações -->
            <div onclick="window.location.href='/research/publications'" class="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover-lift transition-all">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-book-open text-blue-600 mr-2"></i>
                        Publicações
                    </h3>
                    <button class="text-blue-600 hover:text-blue-700">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div class="text-3xl font-bold text-blue-600 mb-2">89</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Impact Factor médio</span>
                        <span class="font-semibold text-purple-600">12.4</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Citações 2024</span>
                        <span class="font-semibold text-orange-600">3.2K</span>
                    </div>
                </div>
                <div class="mt-4 flex gap-2">
                    <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Nature: 3</span>
                    <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">NEJM: 2</span>
                </div>
            </div>
        </div>

        <!-- Dashboard Central -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <!-- Ansiedade de Laura para Pesquisa -->
            <div class="lg:col-span-2 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6 border border-orange-200">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <div class="relative">
                            <i class="fas fa-brain text-3xl text-orange-500"></i>
                            <span class="absolute -top-1 -right-1 flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                            </span>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-800">Ansiedade de Laura</h3>
                            <p class="text-sm text-gray-600">Alertas e Insights para Pesquisa Clínica</p>
                        </div>
                    </div>
                    <button onclick="toggleResearchAlerts()" class="text-gray-500 hover:text-orange-500 transition-all p-2 rounded-lg hover:bg-orange-50">
                        <i id="research-toggle-icon" class="fas fa-compress-alt text-lg"></i>
                    </button>
                </div>

                <div id="research-alerts-content">
                    <!-- Alertas Principais -->
                    <div class="space-y-3 mb-4">
                        <div class="flex items-center p-3 bg-red-50 border-l-4 border-red-500 rounded-lg">
                            <input type="checkbox" id="alert1" class="mr-3">
                            <label for="alert1" class="flex-1 cursor-pointer">
                                <div class="flex items-start">
                                    <i class="fas fa-exclamation-triangle text-red-500 mr-3 mt-1"></i>
                                    <div class="flex-1">
                                        <p class="font-semibold text-gray-800">Desvio de Protocolo Detectado</p>
                                        <p class="text-sm text-gray-600">3 pacientes do Estudo ONC-2024-005 com dados inconsistentes</p>
                                        <p class="text-xs text-red-600 mt-1">Ação: Revisar imediatamente</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        
                        <div class="flex items-center p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
                            <input type="checkbox" id="alert2" class="mr-3">
                            <label for="alert2" class="flex-1 cursor-pointer">
                                <div class="flex items-start">
                                    <i class="fas fa-clock text-yellow-500 mr-3 mt-1"></i>
                                    <div class="flex-1">
                                        <p class="font-semibold text-gray-800">Prazo CEP Aproximando</p>
                                        <p class="text-sm text-gray-600">2 estudos precisam de renovação em 30 dias</p>
                                        <p class="text-xs text-yellow-600 mt-1">Ação: Preparar documentação</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        
                        <div class="flex items-center p-3 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                            <input type="checkbox" id="alert3" class="mr-3">
                            <label for="alert3" class="flex-1 cursor-pointer">
                                <div class="flex items-start">
                                    <i class="fas fa-users text-blue-500 mr-3 mt-1"></i>
                                    <div class="flex-1">
                                        <p class="font-semibold text-gray-800">Meta de Recrutamento</p>
                                        <p class="text-sm text-gray-600">Estudo CAR-T abaixo da meta: 60% alcançado</p>
                                        <p class="text-xs text-blue-600 mt-1">Ação: Intensificar recrutamento</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Métricas Rápidas -->
                    <div class="grid grid-cols-3 gap-2 mb-4">
                        <div class="bg-white/70 rounded-lg p-2 text-center">
                            <div class="text-xl font-bold text-orange-600">8</div>
                            <div class="text-xs text-gray-600">Alertas Ativos</div>
                        </div>
                        <div class="bg-white/70 rounded-lg p-2 text-center">
                            <div class="text-xl font-bold text-purple-600">92%</div>
                            <div class="text-xs text-gray-600">Conformidade</div>
                        </div>
                        <div class="bg-white/70 rounded-lg p-2 text-center">
                            <div class="text-xl font-bold text-green-600">+15%</div>
                            <div class="text-xs text-gray-600">Eficiência</div>
                        </div>
                    </div>

                    <!-- Botão de Ação -->
                    <button onclick="executeResearchActions()" class="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-semibold">
                        <i class="fas fa-play mr-2"></i>
                        Executar Ações Selecionadas
                    </button>
                </div>
            </div>


        </div>

        <!-- Cards do Rodapé - Clicáveis -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Banco de Dados -->
            <div onclick="window.location.href='/research/database'" class="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all hover-lift">
                <i class="fas fa-database text-4xl mb-3 opacity-90"></i>
                <h4 class="text-lg font-bold mb-2">Banco de Dados</h4>
                <p class="text-sm opacity-90 mb-3">REDCap e registros</p>
                <div class="flex justify-between items-center">
                    <span class="text-xs opacity-75">12.5K registros</span>
                    <i class="fas fa-arrow-right opacity-75"></i>
                </div>
            </div>

            <!-- Análises -->
            <div onclick="window.location.href='/research/analysis'" class="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all hover-lift">
                <i class="fas fa-chart-pie text-4xl mb-3 opacity-90"></i>
                <h4 class="text-lg font-bold mb-2">Análises</h4>
                <p class="text-sm opacity-90 mb-3">Estatísticas e IA</p>
                <div class="flex justify-between items-center">
                    <span class="text-xs opacity-75">18 em andamento</span>
                    <i class="fas fa-arrow-right opacity-75"></i>
                </div>
            </div>

            <!-- Protocolos -->
            <div onclick="window.location.href='/research/protocols'" class="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all hover-lift">
                <i class="fas fa-file-contract text-4xl mb-3 opacity-90"></i>
                <h4 class="text-lg font-bold mb-2">Protocolos</h4>
                <p class="text-sm opacity-90 mb-3">CEP/CONEP</p>
                <div class="flex justify-between items-center">
                    <span class="text-xs opacity-75">8 em análise</span>
                    <i class="fas fa-arrow-right opacity-75"></i>
                </div>
            </div>

            <!-- Educação -->
            <div onclick="window.location.href='/research/education'" class="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all hover-lift">
                <i class="fas fa-graduation-cap text-4xl mb-3 opacity-90"></i>
                <h4 class="text-lg font-bold mb-2">Educação</h4>
                <p class="text-sm opacity-90 mb-3">Treinamentos</p>
                <div class="flex justify-between items-center">
                    <span class="text-xs opacity-75">24 cursos ativos</span>
                    <i class="fas fa-arrow-right opacity-75"></i>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Funções para Ansiedade de Laura - Portal de Pesquisa
        function toggleResearchAlerts() {
            const content = document.getElementById('research-alerts-content');
            const icon = document.getElementById('research-toggle-icon');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                icon.className = 'fas fa-compress-alt text-lg';
            } else {
                content.style.display = 'none';
                icon.className = 'fas fa-expand-alt text-lg';
            }
            
            // Salvar preferência
            localStorage.setItem('research-alerts-collapsed', content.style.display === 'none');
        }
        
        function executeResearchActions() {
            const checkboxes = document.querySelectorAll('#research-alerts-content input[type="checkbox"]:checked');
            
            if (checkboxes.length === 0) {
                alert('Selecione pelo menos uma ação para executar');
                return;
            }
            
            const actions = [];
            checkboxes.forEach(cb => {
                const label = cb.nextElementSibling;
                const actionText = label.querySelector('.font-semibold').textContent;
                actions.push(actionText);
            });
            
            // Simular execução
            console.log('Executando ações:', actions);
            
            // Mostrar feedback
            const button = event.target;
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check mr-2"></i>Ações Executadas!';
            button.disabled = true;
            
            // Desmarcar checkboxes após 2 segundos
            setTimeout(() => {
                checkboxes.forEach(cb => cb.checked = false);
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2000);
        }
        
        // Restaurar estado salvo
        window.addEventListener('DOMContentLoaded', () => {
            const isCollapsed = localStorage.getItem('research-alerts-collapsed') === 'true';
            if (isCollapsed) {
                const content = document.getElementById('research-alerts-content');
                const icon = document.getElementById('research-toggle-icon');
                if (content && icon) {
                    content.style.display = 'none';
                    icon.className = 'fas fa-expand-alt text-lg';
                }
            }
        });
    </script>
</body>
</html>
    `);
});

export { researchPortal };