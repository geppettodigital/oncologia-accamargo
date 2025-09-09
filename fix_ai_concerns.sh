#!/bin/bash

echo "🔧 Corrigindo implementação do AI Concerns Dashboard..."

# Lista de arquivos para limpar
files=(
    "/home/user/webapp/src/pages/patient.tsx"
    "/home/user/webapp/src/pages/doctor.tsx"
    "/home/user/webapp/src/pages/navigator.tsx"
    "/home/user/webapp/src/pages/financial.tsx"
    "/home/user/webapp/src/pages/wellness.tsx"
    "/home/user/webapp/src/pages/research.tsx"
    "/home/user/webapp/src/pages/admin-master.tsx"
)

# Remover referências quebradas ao componente TypeScript
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        # Remove imports do componente
        sed -i "/import.*ai-concerns/d" "$file"
        
        # Remove template literals quebrados
        sed -i "s/\${aiConcernsHTML.*}//g" "$file"
        sed -i "s/\${aiConcernsStyles}//g" "$file"
        sed -i "s/\${aiConcernsScript}//g" "$file"
        
        # Remove comentários de AI Concerns Dashboard vazios
        sed -i "/<!-- AI Concerns Dashboard -->/d" "$file"
        
        # Adiciona o script ai-concerns.js antes do </body> se não existir
        if ! grep -q "ai-concerns.js" "$file"; then
            sed -i 's|</body>|    <script src="/static/ai-concerns.js"></script>\n    </body>|' "$file"
        fi
        
        echo "✅ Corrigido: $(basename $file)"
    fi
done

# Adicionar script ao index.tsx também
if ! grep -q "ai-concerns.js" "/home/user/webapp/src/index.tsx"; then
    sed -i 's|<script src="/static/portal-functions.js"></script>|<script src="/static/portal-functions.js"></script>\n    <script src="/static/ai-concerns.js"></script>|' "/home/user/webapp/src/index.tsx"
    echo "✅ Adicionado script ao index.tsx"
fi

echo "✅ Correção concluída!"