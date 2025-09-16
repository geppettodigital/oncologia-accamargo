#!/bin/bash
echo "🧪 Testando Portal do Navegador..."
echo "======================================"
echo ""

# Testar se a API está respondendo
echo "1. Testando API do Portal:"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/portal/navigator)
if [ "$STATUS" = "200" ]; then
    echo "   ✅ API respondendo corretamente"
else
    echo "   ❌ Erro na API: Status $STATUS"
fi

# Verificar se os cards existem
echo ""
echo "2. Verificando cards do Kanban:"
CARDS=$(curl -s http://localhost:3000/api/portal/navigator | jq -r '.html' | grep -c "kanban-card")
echo "   📊 $CARDS cards encontrados"

# Verificar se as funções estão presentes
echo ""
echo "3. Verificando funções JavaScript:"
FUNC=$(curl -s http://localhost:3000/api/portal/navigator | jq -r '.scripts[0]' | grep -c "openPatientView")
if [ "$FUNC" -gt 0 ]; then
    echo "   ✅ Função openPatientView presente"
else
    echo "   ❌ Função openPatientView não encontrada"
fi

echo ""
echo "======================================"
echo "📍 URLs para teste:"
echo "   Portal Principal: https://3000-is0o3lqkacvyzl4g7t2eu-6532622b.e2b.dev"
echo "   Portal Navegador: https://3000-is0o3lqkacvyzl4g7t2eu-6532622b.e2b.dev#navigator"
echo ""
echo "💡 Como testar:"
echo "   1. Acesse o Portal do Navegador"
echo "   2. Clique em 'Trilho de Atendimentos'"
echo "   3. Clique em qualquer card de paciente"
echo "   4. A View Universal deve abrir com 6 abas"
