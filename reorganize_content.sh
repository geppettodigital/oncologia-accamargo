#!/bin/bash

# Script para reorganizar o conteúdo e remover informações do footer

file="src/index.tsx"

# 1. Remover as linhas com + 5.000 colaboradores e + 500 leitos
sed -i '/<i class="fas fa-users mr-2 text-green-300"><\/i>+ 5.000 colaboradores<br>/d' "$file"
sed -i '/<i class="fas fa-hospital-alt mr-2 text-green-300"><\/i>+ 500 leitos/d' "$file"

# 2. Atualizar o logo da estatística para usar o ícone correto
sed -i 's|/static/accamargo-logo.svg|/static/accamargo-icon.svg|g' "$file"

echo "✅ Conteúdo reorganizado e informações removidas!"