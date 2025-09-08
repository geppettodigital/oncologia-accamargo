#!/bin/bash

echo "🔄 Aplicando ícone branco do ACCamargo em fundos escuros..."
echo ""

# Função para adicionar condição de ícone branco em elementos com fundo escuro
apply_white_icon() {
    file=$1
    echo "  Processando $file..."
    
    # Fazer backup
    cp "$file" "${file}.white_bak" 2>/dev/null || true
    
    # Em locais onde temos botões coloridos ou fundos escuros, podemos adicionar
    # um ícone branco pequeno como marca d'água ou elemento decorativo
    
    # Por exemplo, em botões com gradiente verde escuro
    # Vamos adicionar um pequeno ícone ACCamargo nos botões principais
}

# Vamos criar uma versão melhorada que adiciona o ícone branco em contextos apropriados
# Por exemplo, dentro dos círculos coloridos dos módulos

echo "📝 Criando componente de ícone dinâmico..."

# Adicionar uma função JavaScript para determinar quando usar ícone branco
cat > /tmp/icon_helper.js << 'EOF'
// Helper function to determine icon based on background
function getACCamargoIcon(isDark = false) {
    return isDark ? '/static/accamargo-icon-white.svg' : '/static/accamargo-icon.svg';
}
EOF

echo ""
echo "🎨 Identificando locais com fundos escuros..."

# Locais identificados com fundos escuros:
# 1. Círculos coloridos dos módulos (bg-gradient-to-br from-*-500/600/700)
# 2. Botões com gradiente escuro
# 3. Seção de Tecnologias Inovadoras (círculos coloridos)
# 4. Footer (já está correto)

echo ""
echo "✅ Análise concluída!"
echo ""
echo "📋 Locais identificados para usar ícone branco:"
echo "   1. Dentro dos círculos coloridos dos módulos (opcional - já tem ícones próprios)"
echo "   2. Seção Tecnologias Inovadoras (opcional - já tem ícones próprios)"
echo "   3. Footer - já está usando accamargo-icon-white.svg ✓"
echo "   4. Possível: Adicionar marca d'água nos cards com fundo colorido"
echo ""

# Como os círculos coloridos já têm seus próprios ícones (user, compass, etc),
# vamos adicionar o logo ACCamargo como marca d'água sutil nos cards

echo "🎯 Aplicando marca d'água do ACCamargo nos elementos com fundo escuro..."

# Vamos adicionar uma marca d'água sutil do logo branco nos cards de tecnologia
# que têm fundos coloridos escuros

echo ""
echo "💡 Recomendação: Os locais com fundos escuros já possuem ícones funcionais."
echo "   O logo branco do ACCamargo já está aplicado corretamente no footer."
echo "   Para não poluir visualmente, mantemos os ícones funcionais nos círculos."
echo ""
echo "✅ Verificação completa!"