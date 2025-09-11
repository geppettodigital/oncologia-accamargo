#!/bin/bash

echo "📦 Adicionando Portal Helpers em todas as páginas..."

# Lista de arquivos para atualizar
pages=(
    "/home/user/webapp/src/pages/patient.tsx"
    "/home/user/webapp/src/pages/doctor.tsx"
    "/home/user/webapp/src/pages/navigator.tsx"
    "/home/user/webapp/src/pages/financial.tsx"
    "/home/user/webapp/src/pages/wellness.tsx"
    "/home/user/webapp/src/pages/research.tsx"
    "/home/user/webapp/src/pages/admin-master.tsx"
)

# Adiciona o script portal-helpers.js após o ai-assistant.js
for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        # Verifica se já não foi adicionado
        if ! grep -q "portal-helpers.js" "$page"; then
            sed -i 's|<script src="/static/ai-assistant.js"></script>|<script src="/static/ai-assistant.js"></script>\n        <script src="/static/portal-helpers.js"></script>|g' "$page"
            echo "✅ Atualizado: $(basename $page)"
        else
            echo "⏭️  Já contém portal-helpers: $(basename $page)"
        fi
    fi
done

echo "✅ Portal Helpers adicionado em todas as páginas!"