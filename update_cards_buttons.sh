#!/bin/bash

echo "🔄 Atualizando estrutura dos cards com novos botões..."

# Fazer backup do arquivo original
cp /home/user/webapp/src/index.tsx /home/user/webapp/src/index.tsx.backup

# Criar arquivo temporário com as modificações
cat > /tmp/update_cards.py << 'EOF'
import re

def update_card_buttons(content):
    # Pattern para encontrar cada card
    pattern = r'(<div class="module-card[^>]+onclick="window\.location\.href=\'([^\']+)\'"[^>]*>.*?<button class="[^"]+">.*?Acessar.*?</button>)'
    
    def replace_card(match):
        full_card = match.group(0)
        href = match.group(2)
        
        # Remover onclick do div principal
        full_card = re.sub(r'onclick="window\.location\.href=\'[^\']+\'"', '', full_card)
        
        # Identificar o tipo de portal baseado no href
        portal_type = href.split('/')[-1]
        portal_map = {
            'patient': 'patient',
            'doctor': 'doctor', 
            'navigator': 'navigator',
            'financial': 'financial',
            'wellness': 'wellness',
            'research': 'research'
        }
        
        # Substituir o botão único por três botões
        button_replacement = f'''<div class="flex gap-2 justify-center items-center">
                            <button onclick="window.location.href='{href}'" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('{portal_type}')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                            <button onclick="event.stopPropagation(); openAIForPortal('{portal_type}')" class="portal-ai-btn w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white flex items-center justify-center transition-all hover:scale-110" title="Assistente IA para este portal">
                                <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-6 h-6 filter brightness-0 invert">
                            </button>
                        </div>'''
        
        # Substituir o botão antigo pelos novos
        full_card = re.sub(r'<button class="[^"]+">.*?Acessar.*?</button>', button_replacement, full_card, flags=re.DOTALL)
        
        return full_card
    
    # Aplicar substituições
    content = re.sub(pattern, replace_card, content, flags=re.DOTALL)
    
    return content

# Ler arquivo
with open('/home/user/webapp/src/index.tsx', 'r') as f:
    content = f.read()

# Atualizar conteúdo
updated_content = update_card_buttons(content)

# Escrever arquivo atualizado
with open('/home/user/webapp/src/index.tsx', 'w') as f:
    f.write(updated_content)

print("✅ Cards atualizados com sucesso!")
EOF

# Executar o script Python
python3 /tmp/update_cards.py

echo "✅ Estrutura dos cards atualizada!"