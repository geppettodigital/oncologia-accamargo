#!/bin/bash

# Script para converter todos os ícones para versão outline (far)

update_icons() {
    file=$1
    echo "Atualizando ícones em $file..."
    
    # Converter fas para far (outline)
    sed -i 's/class="fas /class="far /g' "$file"
    sed -i 's/className="fas /className="far /g' "$file"
    
    # Alguns ícones específicos que não existem em far, usar alternativas
    sed -i 's/far fa-stethoscope/far fa-user-md/g' "$file"
    sed -i 's/far fa-microscope/far fa-flask/g' "$file"
    sed -i 's/far fa-robot/far fa-cog/g' "$file"
    sed -i 's/far fa-brain/far fa-lightbulb/g' "$file"
    sed -i 's/far fa-heartbeat/far fa-heart/g' "$file"
    sed -i 's/far fa-pills/far fa-capsules/g' "$file"
    sed -i 's/far fa-virus/far fa-circle/g' "$file"
    sed -i 's/far fa-dna/far fa-code-branch/g' "$file"
    sed -i 's/far fa-hands-helping/far fa-handshake/g' "$file"
    sed -i 's/far fa-user-nurse/far fa-user/g' "$file"
    sed -i 's/far fa-procedures/far fa-bed/g' "$file"
    sed -i 's/far fa-x-ray/far fa-file-medical/g' "$file"
    sed -i 's/far fa-briefcase-medical/far fa-briefcase/g' "$file"
    sed -i 's/far fa-notes-medical/far fa-clipboard/g' "$file"
    sed -i 's/far fa-vials/far fa-flask/g' "$file"
    sed -i 's/far fa-syringe/far fa-thermometer/g' "$file"
    sed -i 's/far fa-band-aid/far fa-medkit/g' "$file"
    sed -i 's/far fa-microchip/far fa-memory/g' "$file"
    sed -i 's/far fa-cogs/far fa-cog/g' "$file"
    
    # Garantir que alguns ícones importantes permaneçam visíveis
    sed -i 's/far fa-phone/far fa-phone-alt/g' "$file"
    sed -i 's/far fa-mail/far fa-envelope/g' "$file"
}

# Atualizar todos os arquivos
for file in src/pages/*.tsx src/routes/*.ts src/*.tsx; do
    if [ -f "$file" ]; then
        update_icons "$file"
    fi
done

echo "✅ Ícones atualizados para versão outline!"