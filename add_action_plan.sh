#!/bin/bash

echo "📋 Adicionando Sistema de Planos de Ação em todas as páginas..."

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

# Adiciona o script action-plan-system.js após o ai-concerns.js
for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        # Verifica se já não foi adicionado
        if ! grep -q "action-plan-system.js" "$page"; then
            sed -i 's|<script src="/static/ai-concerns.js"></script>|<script src="/static/ai-concerns.js"></script>\n    <script src="/static/action-plan-system.js"></script>|g' "$page"
            echo "✅ Atualizado: $(basename $page)"
        else
            echo "⏭️  Já contém action-plan: $(basename $page)"
        fi
    fi
done

echo "✅ Sistema de Planos de Ação adicionado em todas as páginas!"