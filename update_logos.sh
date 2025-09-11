#!/bin/bash

# Script para atualizar todas as referências de logo para ACCamargo

update_logos() {
    file=$1
    echo "Atualizando logos em $file..."
    
    # Substituir referências ao logo antigo
    sed -i 's|/static/logo.svg|/static/accamargo-logo.svg|g' "$file"
    sed -i 's|alt="Logo"|alt="ACCamargo Logo"|g' "$file"
    
    # Adicionar identificação ACCamargo em títulos de páginas
    sed -i 's|Portal do Paciente</span>|Portal do Paciente - ACCamargo</span>|g' "$file"
    sed -i 's|Portal Médico</span>|Portal Médico - ACCamargo</span>|g' "$file"
    sed -i 's|Navegador de Pacientes</span>|Navegador - ACCamargo</span>|g' "$file"
    sed -i 's|Gestão Financeira</span>|Gestão Financeira - ACCamargo</span>|g' "$file"
    sed -i 's|Bem-Estar e Apoio</span>|Bem-Estar - ACCamargo</span>|g' "$file"
    sed -i 's|Pesquisa Clínica</span>|Pesquisa - ACCamargo</span>|g' "$file"
}

# Atualizar todos os arquivos de páginas
for file in src/pages/*.tsx; do
    if [ -f "$file" ]; then
        update_logos "$file"
    fi
done

# Atualizar arquivo app.js
if [ -f "public/static/app.js" ]; then
    update_logos "public/static/app.js"
fi

echo "✅ Logos do ACCamargo aplicados com sucesso!"