#!/bin/bash

# Script para padronizar os cabeçalhos em todos os módulos

update_header() {
    file=$1
    module_name=$2
    echo "Atualizando cabeçalho em $file..."
    
    # Primeiro, vamos fazer backup
    cp "$file" "${file}.bak"
    
    # Substituir o cabeçalho antigo pelo novo padrão
    # Procurar pela tag <header> e substituir até </header>
    
    # Criar arquivo temporário com o novo cabeçalho
    cat > /tmp/new_header.txt << 'EOF'
        <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">MODULE_NAME • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="far fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="far fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
EOF
    
    # Substituir MODULE_NAME pelo nome do módulo
    sed -i "s/MODULE_NAME/$module_name/g" /tmp/new_header.txt
    
    # Agora vamos aplicar no arquivo
    # Remover o header antigo e inserir o novo
    perl -i -pe 'BEGIN{undef $/;} s|<header.*?>.*?</header>|`cat /tmp/new_header.txt`|smge' "$file"
}

# Atualizar cada página com seu respectivo nome
update_header "src/pages/patient.tsx" "Portal do Paciente"
update_header "src/pages/doctor.tsx" "Portal Médico"
update_header "src/pages/navigator.tsx" "Navegador de Pacientes"
update_header "src/pages/financial.tsx" "Gestão Financeira"
update_header "src/pages/wellness.tsx" "Bem-Estar e Apoio"
update_header "src/pages/research.tsx" "Pesquisa Clínica"

# Adicionar o CSS gradient-text se não existir
for file in src/pages/*.tsx; do
    if ! grep -q "gradient-text" "$file"; then
        # Adicionar o estilo após a tag <link href="/static/style.css">
        sed -i '/<link href="\/static\/style.css"/a\
        <style>\
            .glass-effect {\
                background: rgba(255, 255, 255, 0.95);\
                backdrop-filter: blur(10px);\
                -webkit-backdrop-filter: blur(10px);\
            }\
            .gradient-text {\
                background: linear-gradient(135deg, #2B5F3F 0%, #3a8f5f 100%);\
                -webkit-background-clip: text;\
                -webkit-text-fill-color: transparent;\
                background-clip: text;\
            }\
        </style>' "$file"
    fi
done

echo "✅ Cabeçalhos padronizados em todos os módulos!"