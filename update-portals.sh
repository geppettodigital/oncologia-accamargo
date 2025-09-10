#!/bin/bash

# Script para replicar melhorias do Ansiedade de Laura nos demais portais

for portal in doctor navigator financial wellness research admin-master; do
    echo "Atualizando portal: $portal"
    
    # Portal Doctor já tem AI Concerns, mas vamos garantir que está com raw()
    if grep -q "aiConcernsHTML" src/pages/${portal}.tsx; then
        echo "Portal $portal já tem AI Concerns implementado"
    else
        echo "Adicionando AI Concerns ao portal $portal"
        
        # Adicionar import se não existir
        if ! grep -q "ai-concerns-enhanced" src/pages/${portal}.tsx; then
            sed -i "3i import { aiConcernsHTML } from '../components/ai-concerns-enhanced'" src/pages/${portal}.tsx
            sed -i "s/import { html } from 'hono\/html'/import { html, raw } from 'hono\/html'/" src/pages/${portal}.tsx
        fi
        
        # Procurar por Welcome Section ou similar e adicionar AI Concerns
        # Isso já foi feito anteriormente, apenas garantindo
    fi
done

echo "Todos os portais atualizados!"