#!/bin/bash

echo "🤖 Atualizando ícones de robô para o novo ícone laranja..."

# Atualiza o ícone de robô no index.tsx (Engenharia de Prompt)
sed -i 's|<i class="fas fa-robot text-4xl text-white"></i>|<img src="/static/robot-auditor-icon.svg" alt="IA" class="w-12 h-12 filter brightness-0 invert">|g' /home/user/webapp/src/index.tsx

# Atualiza o ícone no admin-master.tsx
sed -i 's|<i class="fas fa-robot mr-2"></i>|<img src="/static/robot-auditor-icon.svg" alt="IA" class="inline w-5 h-5 mr-2">|g' /home/user/webapp/src/pages/admin-master.tsx

# Adiciona o script do assistente IA no final do body em todos os HTMLs das páginas
# Primeiro, vamos adicionar ao template principal no index.tsx
sed -i 's|</body>|    <script src="/static/ai-assistant.js"></script>\n    </body>|g' /home/user/webapp/src/index.tsx

# Adiciona em todas as páginas que retornam HTML
for file in /home/user/webapp/src/pages/*.tsx; do
    if grep -q "</body>" "$file"; then
        sed -i 's|</body>|    <script src="/static/ai-assistant.js"></script>\n    </body>|g' "$file"
    fi
done

echo "✅ Ícones de robô atualizados!"
echo "✅ Script do assistente IA adicionado!"