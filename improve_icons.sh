#!/bin/bash

echo "🎨 Melhorando ícones genéricos com ícones específicos..."
echo ""

# Função para melhorar ícones
improve_icons() {
    file=$1
    module=$2
    echo "  Atualizando ícones em $module..."
    
    # Backup
    cp "$file" "${file}.icons_bak" 2>/dev/null || true
    
    case "$module" in
        "patient")
            # Portal do Paciente - ícones médicos e de saúde
            sed -i 's/<i class="far fa-file-medical/<i class="fas fa-file-medical-alt/g' "$file"
            sed -i 's/<i class="far fa-hand-holding-heart/<i class="fas fa-hands-helping/g' "$file"
            sed -i 's/<i class="fas fa-comments/<i class="fas fa-stethoscope/g' "$file"
            sed -i 's/<i class="far fa-calendar-check/<i class="fas fa-calendar-alt/g' "$file"
            ;;
            
        "doctor")
            # Portal Médico - ícones clínicos
            sed -i 's/<i class="far fa-chart-bar/<i class="fas fa-chart-line/g' "$file"
            sed -i 's/<i class="far fa-clipboard/<i class="fas fa-clipboard-list/g' "$file"
            sed -i 's/<i class="fas fa-bell/<i class="fas fa-bell/g' "$file"
            sed -i 's/<i class="fas fa-search/<i class="fas fa-search-plus/g' "$file"
            ;;
            
        "navigator")
            # Navegador - ícones de fluxo e gestão
            sed -i 's/<i class="far fa-clock/<i class="fas fa-clock/g' "$file"
            sed -i 's/<i class="far fa-flag/<i class="fas fa-flag-checkered/g' "$file"
            sed -i 's/<i class="fas fa-tasks/<i class="fas fa-project-diagram/g' "$file"
            sed -i 's/<i class="far fa-exclamation-triangle/<i class="fas fa-exclamation-circle/g' "$file"
            ;;
            
        "financial")
            # Financeiro - ícones monetários
            sed -i 's/<i class="far fa-file-invoice/<i class="fas fa-file-invoice-dollar/g' "$file"
            sed -i 's/<i class="far fa-chart-pie/<i class="fas fa-chart-pie/g' "$file"
            sed -i 's/<i class="fas fa-money/<i class="fas fa-coins/g' "$file"
            sed -i 's/<i class="far fa-calculator/<i class="fas fa-calculator/g' "$file"
            ;;
            
        "wellness")
            # Bem-estar - ícones de saúde mental
            sed -i 's/<i class="far fa-heart/<i class="fas fa-heartbeat/g' "$file"
            sed -i 's/<i class="far fa-smile/<i class="fas fa-smile-beam/g' "$file"
            sed -i 's/<i class="fas fa-users/<i class="fas fa-user-friends/g' "$file"
            sed -i 's/<i class="far fa-sun/<i class="fas fa-sun/g' "$file"
            ;;
            
        "research")
            # Pesquisa - ícones científicos
            sed -i 's/<i class="far fa-search/<i class="fas fa-search-plus/g' "$file"
            sed -i 's/<i class="far fa-chart-area/<i class="fas fa-chart-area/g' "$file"
            sed -i 's/<i class="fas fa-database/<i class="fas fa-database/g' "$file"
            sed -i 's/<i class="far fa-book/<i class="fas fa-book-medical/g' "$file"
            ;;
    esac
    
    # Ícones comuns melhorados em todos os módulos
    sed -i 's/<i class="far fa-download/<i class="fas fa-download/g' "$file"
    sed -i 's/<i class="far fa-print/<i class="fas fa-print/g' "$file"
    sed -i 's/<i class="far fa-share/<i class="fas fa-share-alt/g' "$file"
    sed -i 's/<i class="far fa-filter/<i class="fas fa-filter/g' "$file"
    sed -i 's/<i class="far fa-sort/<i class="fas fa-sort-amount-down/g' "$file"
}

# Melhorar ícones em cada página
improve_icons "src/pages/patient.tsx" "patient"
improve_icons "src/pages/doctor.tsx" "doctor"
improve_icons "src/pages/navigator.tsx" "navigator"
improve_icons "src/pages/financial.tsx" "financial"
improve_icons "src/pages/wellness.tsx" "wellness"
improve_icons "src/pages/research.tsx" "research"

echo ""
echo "🔧 Adicionando ícones específicos para ações..."

# Adicionar ícones específicos no index principal para botões de ação
sed -i 's/<i class="fas fa-cog /<i class="fas fa-cogs /g' "src/index.tsx"
sed -i 's/<i class="far fa-arrow-right/<i class="fas fa-arrow-circle-right/g' "src/index.tsx"

# Melhorar ícones de notificação
find src/ -name "*.tsx" -exec sed -i 's/<i class="far fa-bell/<i class="fas fa-bell/g' {} \;

# Melhorar ícones de usuário
find src/ -name "*.tsx" -exec sed -i 's/<i class="far fa-user-circle/<i class="fas fa-user-circle/g' {} \;

echo ""
echo "✅ Ícones melhorados com sucesso!"
echo "📋 Resumo das melhorias:"
echo "   - Portal do Paciente: ícones médicos específicos"
echo "   - Portal Médico: ícones clínicos"
echo "   - Navegador: ícones de gestão de fluxo"
echo "   - Financeiro: ícones monetários"
echo "   - Bem-estar: ícones de saúde mental"
echo "   - Pesquisa: ícones científicos"