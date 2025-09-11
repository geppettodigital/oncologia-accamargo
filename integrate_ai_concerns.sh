#!/bin/bash

echo "🤖 Integrando Preocupação do Assistente de IA em todos os portais..."

# Importar o componente no index.tsx
cat > /tmp/import_concerns.py << 'EOF'
import re

files_to_update = [
    '/home/user/webapp/src/pages/patient.tsx',
    '/home/user/webapp/src/pages/doctor.tsx',
    '/home/user/webapp/src/pages/navigator.tsx',
    '/home/user/webapp/src/pages/financial.tsx',
    '/home/user/webapp/src/pages/wellness.tsx',
    '/home/user/webapp/src/pages/research.tsx',
    '/home/user/webapp/src/pages/admin-master.tsx'
]

# Mapear tipo de portal por arquivo
portal_map = {
    'patient.tsx': 'patient',
    'doctor.tsx': 'doctor',
    'navigator.tsx': 'navigator',
    'financial.tsx': 'financial',
    'wellness.tsx': 'wellness',
    'research.tsx': 'research',
    'admin-master.tsx': 'admin-master'
}

for file_path in files_to_update:
    # Determinar o tipo de portal
    filename = file_path.split('/')[-1]
    portal_type = portal_map.get(filename, 'admin')
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Adicionar import no início se ainda não existir
    if 'ai-concerns' not in content:
        # Adicionar import após outros imports
        import_line = "import { aiConcernsHTML, aiConcernsStyles, aiConcernsScript } from '../components/ai-concerns'\n"
        content = re.sub(r"(import.*?\n)+", r"\g<0>" + import_line, content, count=1)
    
    # Encontrar onde inserir o dashboard (após o header/welcome e antes das quick actions ou main content)
    # Padrão: procurar por "<!-- Quick Actions -->" ou similar
    
    # Adicionar o dashboard de AI Concerns após o welcome/header
    if '<!-- AI Concerns Dashboard -->' not in content:
        # Padrão para inserir após o header
        pattern = r'(</div>\s*\n\s*</div>\s*\n\s*<!-- Quick Actions -->)'
        replacement = f'''</div>
            </div>

            <!-- AI Concerns Dashboard -->
            ${{aiConcernsHTML('{portal_type}')}}

            <!-- Quick Actions -->'''
        
        content = re.sub(pattern, replacement, content)
        
        # Se não encontrou, tentar outro padrão
        if '<!-- AI Concerns Dashboard -->' not in content:
            # Inserir após o container principal
            pattern = r'(<div class="container mx-auto px-4 py-8">)'
            replacement = f'''<div class="container mx-auto px-4 py-8">
            <!-- AI Concerns Dashboard -->
            ${{aiConcernsHTML('{portal_type}')}}
'''
            content = re.sub(pattern, replacement, content, count=1)
    
    # Adicionar estilos antes do </head>
    if 'aiConcernsStyles' not in content:
        content = content.replace('</head>', f'${{aiConcernsStyles}}\n    </head>')
    
    # Adicionar script antes do </body>
    if 'aiConcernsScript' not in content:
        content = content.replace('</body>', f'${{aiConcernsScript}}\n    </body>')
    
    # Salvar arquivo atualizado
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"✅ Atualizado: {filename}")

print("✅ Integração concluída!")
EOF

# Executar o script Python
python3 /tmp/import_concerns.py

echo "✅ Dashboard de Preocupação do Assistente de IA integrado em todos os portais!"