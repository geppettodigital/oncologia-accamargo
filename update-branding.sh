#!/bin/bash

echo "🎨 Atualizando branding para Geppetto Digital..."

# Backup antes de fazer mudanças
echo "📦 Criando backup..."
cp -r src src.backup
cp -r public public.backup
cp -r scripts scripts.backup

# 1. Substituir Cloudflare por Geppetto Digital em todos os arquivos relevantes
echo "🔄 Substituindo Cloudflare por Geppetto Digital..."

# Arquivos HTML
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/Cloudflare/Geppetto Digital/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/cloudflare/geppetto-digital/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/CLOUDFLARE/GEPPETTO-DIGITAL/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/cf-/gd-/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/CF/GD/g' {} \;

# Arquivos TypeScript/JavaScript
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./dist/*" -exec sed -i 's/Cloudflare/Geppetto Digital/g' {} \;
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./dist/*" -exec sed -i 's/cloudflare/geppetto-digital/g' {} \;
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./dist/*" -exec sed -i 's/CLOUDFLARE/GEPPETTO_DIGITAL/g' {} \;
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./dist/*" -exec sed -i 's/cf-/gd-/g' {} \;

# Arquivos CSS
find . -type f -name "*.css" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/cf-/gd-/g' {} \;
find . -type f -name "*.css" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/cloudflare/geppetto-digital/g' {} \;

# Arquivos JSON
find . -type f -name "*.json" -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./package*.json" -exec sed -i 's/Cloudflare/Geppetto Digital/g' {} \;
find . -type f -name "*.json" -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./package*.json" -exec sed -i 's/cloudflare/geppetto-digital/g' {} \;

# Scripts
find . -type f -name "*.cjs" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/Cloudflare/Geppetto Digital/g' {} \;
find . -type f -name "*.cjs" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/cloudflare/geppetto-digital/g' {} \;

# Markdown files
find . -type f -name "*.md" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/Cloudflare Pages/Geppetto Digital Platform/g' {} \;
find . -type f -name "*.md" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/Cloudflare Workers/Geppetto Digital Edge/g' {} \;
find . -type f -name "*.md" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/Cloudflare/Geppetto Digital/g' {} \;

# 2. Atualizar cores - substituir azul por tons de laranja
echo "🎨 Atualizando cores para tons de laranja..."

# Substituir cores azuis por laranjas em HTML
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/#0051c3/#ff6b35/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/#0080ff/#ff8c42/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/#003d94/#e55100/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/blue-500/orange-500/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/blue-600/orange-600/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/blue-50/orange-50/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/from-blue/from-orange/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/to-blue/to-orange/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/text-blue/text-orange/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/bg-blue/bg-orange/g' {} \;
find . -type f -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/border-blue/border-orange/g' {} \;

# Substituir em CSS
find . -type f -name "*.css" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/#0051c3/#ff6b35/g' {} \;
find . -type f -name "*.css" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/#0080ff/#ff8c42/g' {} \;
find . -type f -name "*.css" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/#003d94/#e55100/g' {} \;
find . -type f -name "*.css" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/#3b82f6/#fb923c/g' {} \;
find . -type f -name "*.css" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/--cf-blue/--gd-orange-secondary/g' {} \;

# Substituir em TypeScript/JavaScript
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./dist/*" -exec sed -i "s/'#0051c3'/'#ff6b35'/g" {} \;
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./dist/*" -exec sed -i "s/'#0080ff'/'#ff8c42'/g" {} \;
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./dist/*" -exec sed -i "s/'#003d94'/'#e55100'/g" {} \;

# Substituir em JSON
find . -type f -name "*.json" -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./package*.json" -exec sed -i 's/"#0051c3"/"#ff6b35"/g' {} \;
find . -type f -name "*.json" -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./package*.json" -exec sed -i 's/"#0080ff"/"#ff8c42"/g' {} \;
find . -type f -name "*.json" -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./package*.json" -exec sed -i 's/"#003d94"/"#e55100"/g' {} \;

# Substituir em scripts CJS
find . -type f -name "*.cjs" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/#0051c3/#ff6b35/g' {} \;
find . -type f -name "*.cjs" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/#0080ff/#ff8c42/g' {} \;
find . -type f -name "*.cjs" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/#003d94/#e55100/g' {} \;
find . -type f -name "*.cjs" -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/"#3b82f6"/"#fb923c"/g' {} \;

# 3. Renomear arquivos de tema
echo "📝 Renomeando arquivos de tema..."
if [ -f "public/static/cloudflare-theme.css" ]; then
    mv public/static/cloudflare-theme.css public/static/geppetto-digital-theme.css
fi

if [ -f "src/config/brands/cloudflare.json" ]; then
    mv src/config/brands/cloudflare.json src/config/brands/geppetto-digital.json
fi

if [ -f "scripts/apply-cloudflare-theme.cjs" ]; then
    mv scripts/apply-cloudflare-theme.cjs scripts/apply-geppetto-digital-theme.cjs
fi

echo "✅ Branding atualizado com sucesso!"
echo "📊 Mudanças aplicadas:"
echo "   - Cloudflare → Geppetto Digital"
echo "   - Cores azuis → Tons de laranja"
echo "   - Prefixos cf- → gd-"
echo ""
echo "🔄 Próximos passos:"
echo "   1. npm run build"
echo "   2. Reiniciar servidores"
echo "   3. Testar preview"