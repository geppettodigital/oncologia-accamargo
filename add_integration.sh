#!/bin/bash

echo "🔗 Adicionando script de integração em todas as páginas..."

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

# Adiciona o script de integração após o action-plan-system.js
for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        # Verifica se já não foi adicionado
        if ! grep -q "action-plan-integration.js" "$page"; then
            sed -i 's|<script src="/static/action-plan-system.js"></script>|<script src="/static/action-plan-system.js"></script>\n    <script src="/static/action-plan-integration.js"></script>|g' "$page"
            echo "✅ Atualizado: $(basename $page)"
        else
            echo "⏭️  Já contém integração: $(basename $page)"
        fi
    fi
done

echo "✅ Script de integração adicionado em todas as páginas!"