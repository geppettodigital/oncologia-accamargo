#!/bin/bash

# Script para corrigir ícones - substituir far por fas onde necessário

fix_icons() {
    file=$1
    echo "Corrigindo ícones em $file..."
    
    # Ícones que EXISTEM em far (regular/outline) - manter como estão
    # user, bell, user-circle, compass, chart-line, heart, arrow-right, 
    # envelope, check-circle, hospital
    
    # Ícones que NÃO existem em far - converter para fas (solid)
    sed -i 's/class="far fa-user-md/class="fas fa-user-md/g' "$file"
    sed -i 's/class="far fa-microscope/class="fas fa-microscope/g' "$file"
    sed -i 's/class="far fa-flask/class="fas fa-flask/g' "$file"
    sed -i 's/class="far fa-memory/class="fas fa-microchip/g' "$file"
    sed -i 's/class="far fa-lightbulb/class="fas fa-brain/g' "$file"
    sed -i 's/class="far fa-cog /class="fas fa-cogs /g' "$file"
    sed -i 's/class="far fa-cogs/class="fas fa-cogs/g' "$file"
    sed -i 's/class="far fa-comments/class="fas fa-comments/g' "$file"
    sed -i 's/class="far fa-award/class="fas fa-award/g' "$file"
    sed -i 's/class="far fa-graduation-cap/class="fas fa-graduation-cap/g' "$file"
    sed -i 's/class="far fa-users/class="fas fa-users/g' "$file"
    sed -i 's/class="far fa-bed/class="fas fa-hospital-alt/g' "$file"
    sed -i 's/class="far fa-map-marker-alt/class="fas fa-map-marker-alt/g' "$file"
    sed -i 's/class="far fa-globe/class="fas fa-globe/g' "$file"
    sed -i 's/class="far fa-phone-alt/class="fas fa-phone/g' "$file"
    sed -i 's/class="far fa-brain/class="fas fa-brain/g' "$file"
    sed -i 's/class="far fa-robot/class="fas fa-robot/g' "$file"
    sed -i 's/class="far fa-microchip/class="fas fa-microchip/g' "$file"
    
    # Para ícones que definitivamente não existem, usar X ou alternativa
    sed -i 's/class="far fa-stethoscope/class="fas fa-stethoscope/g' "$file"
    sed -i 's/class="far fa-heartbeat/class="fas fa-heartbeat/g' "$file"
    sed -i 's/class="far fa-pills/class="fas fa-pills/g' "$file"
    sed -i 's/class="far fa-procedures/class="fas fa-procedures/g' "$file"
    sed -i 's/class="far fa-x-ray/class="fas fa-x-ray/g' "$file"
    sed -i 's/class="far fa-briefcase-medical/class="fas fa-briefcase-medical/g' "$file"
    sed -i 's/class="far fa-notes-medical/class="fas fa-notes-medical/g' "$file"
    sed -i 's/class="far fa-vials/class="fas fa-vials/g' "$file"
    sed -i 's/class="far fa-syringe/class="fas fa-syringe/g' "$file"
    sed -i 's/class="far fa-band-aid/class="fas fa-band-aid/g' "$file"
    
    # Substituir ícones que não existem nem em fas por um X
    sed -i 's/class="fas fa-NONEXISTENT/class="fas fa-times/g' "$file"
}

# Aplicar correções em todos os arquivos
for file in src/*.tsx src/pages/*.tsx src/routes/*.ts; do
    if [ -f "$file" ]; then
        fix_icons "$file"
    fi
done

echo "✅ Ícones corrigidos!"