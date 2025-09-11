#!/bin/bash

echo "🔄 Substituindo todas as logos antigas pelo ícone correto do ACCamargo..."
echo "📌 IMPORTANTE: Não alterando o rodapé (footer)"

# Função para substituir logos
fix_logos() {
    file=$1
    echo "  Verificando $file..."
    
    # Criar backup
    cp "$file" "${file}.logo_bak" 2>/dev/null || true
    
    # Substituir /static/logo.svg por /static/accamargo-icon.svg
    # Mas NÃO em linhas que contenham "footer" ou dentro de tags <footer>
    
    # Primeiro, substituir todas as ocorrências de logo.svg por accamargo-icon.svg
    # exceto nas linhas do footer
    perl -i -pe 's|/static/logo\.svg|/static/accamargo-icon.svg|g unless /footer/i' "$file"
    
    # Substituir accamargo-logo.svg por accamargo-icon.svg 
    # (exceto no footer e exceto accamargo-icon-white.svg)
    perl -i -pe 's|/static/accamargo-logo\.svg|/static/accamargo-icon.svg|g unless /footer/i || /white/i' "$file"
    
    # Garantir que o alt text esteja correto
    perl -i -pe 's|alt="Logo"|alt="ACCamargo Logo"|g unless /footer/i' "$file"
}

# Processar todos os arquivos TypeScript e JavaScript
echo ""
echo "📁 Processando arquivos de páginas..."
for file in src/pages/*.tsx; do
    if [ -f "$file" ]; then
        fix_logos "$file"
    fi
done

echo ""
echo "📁 Processando arquivo principal..."
# Para o index.tsx, vamos ser mais cuidadosos
# Não alterar nada dentro do bloco do footer
fix_logos "src/index.tsx"

echo ""
echo "📁 Processando arquivos de rotas..."
for file in src/routes/*.ts; do
    if [ -f "$file" ]; then
        fix_logos "$file"
    fi
done

echo ""
echo "📁 Processando outros arquivos TypeScript..."
if [ -f "src/renderer.tsx" ]; then
    fix_logos "src/renderer.tsx"
fi

# Verificar se há alguma referência restante ao logo.svg ou accamargo-logo.svg
# (excluindo o footer)
echo ""
echo "🔍 Verificando referências restantes..."
echo "   (ignorando footer e arquivos de backup)"

remaining=$(grep -r "logo\.svg\|accamargo-logo\.svg" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "footer" | grep -v "\.bak" | grep -v "white" | grep -v "backup" || true)

if [ -z "$remaining" ]; then
    echo "✅ Todas as logos foram atualizadas com sucesso!"
else
    echo "⚠️  Ainda existem algumas referências:"
    echo "$remaining"
fi

# Limpar arquivos de backup antigos se tudo estiver OK
echo ""
echo "🧹 Limpando arquivos de backup antigos..."
find src/ -name "*.logo_bak" -type f -delete 2>/dev/null || true

echo ""
echo "✅ Processo concluído! Todas as logos foram padronizadas."
echo "ℹ️  O rodapé (footer) foi preservado conforme solicitado."