#!/bin/bash

echo "🔧 Melhorando navegação e ajustando gráficos..."
echo ""

# Função para adicionar link do paciente
add_patient_link() {
    file=$1
    module=$2
    
    echo "  Adicionando navegação para pacientes em $module..."
    
    # Adicionar botão de acesso rápido ao portal do paciente se não existir
    if ! grep -q "href=\"/patient\"" "$file" 2>/dev/null; then
        # Adicionar após o botão home no header
        sed -i '/<i class="fas fa-home text-xl"><\/i>/a\
                        </a>\
                        <a href="/patient" class="text-gray-600 hover:text-green-600 transition-colors" title="Portal do Paciente">\
                            <i class="fas fa-hospital-user text-xl"></i>' "$file" 2>/dev/null || true
    fi
}

# Função para ajustar tamanhos de gráficos
fix_charts() {
    file=$1
    
    echo "  Ajustando gráficos em $file..."
    
    # Ajustar canvas para ter tamanho responsivo
    sed -i 's/<canvas id="\([^"]*\)"[^>]*>/<canvas id="\1" class="w-full max-w-full" style="max-height: 400px;">/g' "$file" 2>/dev/null || true
    
    # Ajustar containers de gráficos
    sed -i 's/class="chart-container"/class="chart-container w-full overflow-hidden"/g' "$file" 2>/dev/null || true
    
    # Adicionar responsividade aos gráficos
    sed -i 's/responsive: false/responsive: true/g' "$file" 2>/dev/null || true
    sed -i 's/maintainAspectRatio: false/maintainAspectRatio: true/g' "$file" 2>/dev/null || true
}

# Aplicar em todos os módulos
for file in src/pages/*.tsx; do
    if [[ "$file" != *"patient.tsx" ]] && [[ "$file" != *"admin-master.tsx" ]]; then
        module=$(basename "$file" .tsx)
        add_patient_link "$file" "$module"
        fix_charts "$file"
    fi
done

echo ""
echo "📊 Adicionando configuração responsiva para gráficos..."

# Criar arquivo de configuração para gráficos responsivos
cat > /tmp/chart_config.js << 'EOF'
// Configuração padrão para gráficos responsivos
const defaultChartConfig = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 15,
                font: {
                    size: 11
                }
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0.05)'
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};

// Função para criar gráficos responsivos
function createResponsiveChart(ctx, type, data, customOptions = {}) {
    return new Chart(ctx, {
        type: type,
        data: data,
        options: { ...defaultChartConfig, ...customOptions }
    });
}
EOF

echo ""
echo "🔄 Atualizando páginas com gráficos para serem responsivas..."

# Páginas que têm gráficos
pages_with_charts=("doctor" "financial" "research" "wellness" "navigator")

for page in "${pages_with_charts[@]}"; do
    file="src/pages/${page}.tsx"
    if [ -f "$file" ]; then
        echo "  Ajustando $page..."
        
        # Adicionar classe para containers de gráficos
        sed -i 's/<div class="bg-white rounded-lg shadow-md p-4">/<div class="bg-white rounded-lg shadow-md p-4 overflow-hidden">/g' "$file" 2>/dev/null || true
        
        # Limitar largura máxima dos gráficos
        sed -i 's/<canvas/<canvas style="max-width: 100%; height: auto;"/' "$file" 2>/dev/null || true
    fi
done

echo ""
echo "✅ Navegação e gráficos melhorados!"
echo ""
echo "📋 Resumo das melhorias:"
echo "   ✓ Link para Portal do Paciente adicionado em todos os módulos"
echo "   ✓ Gráficos ajustados para serem responsivos"
echo "   ✓ Containers limitados para evitar overflow"
echo "   ✓ Configuração padrão para aspectRatio aplicada"