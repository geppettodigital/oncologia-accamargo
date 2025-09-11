#!/bin/bash

# Script para atualizar todas as cores para tema verde

# Função para substituir cores em um arquivo
update_file() {
    file=$1
    echo "Atualizando $file..."
    
    # Blues para Greens
    sed -i 's/from-blue-500/from-green-600/g' "$file"
    sed -i 's/to-blue-600/to-green-700/g' "$file"
    sed -i 's/from-blue-600/from-green-700/g' "$file"
    sed -i 's/to-blue-700/to-green-800/g' "$file"
    sed -i 's/text-blue-500/text-green-600/g' "$file"
    sed -i 's/text-blue-600/text-green-700/g' "$file"
    sed -i 's/bg-blue-500/bg-green-600/g' "$file"
    sed -i 's/bg-blue-600/bg-green-700/g' "$file"
    sed -i 's/bg-blue-100/bg-green-100/g' "$file"
    sed -i 's/border-blue-500/border-green-600/g' "$file"
    
    # Purples para Teals
    sed -i 's/from-purple-500/from-teal-600/g' "$file"
    sed -i 's/to-purple-600/to-teal-700/g' "$file"
    sed -i 's/from-purple-600/from-teal-700/g' "$file"
    sed -i 's/to-purple-700/to-teal-800/g' "$file"
    sed -i 's/text-purple-500/text-teal-600/g' "$file"
    sed -i 's/text-purple-600/text-teal-700/g' "$file"
    sed -i 's/bg-purple-500/bg-teal-600/g' "$file"
    sed -i 's/bg-purple-100/bg-teal-100/g' "$file"
    sed -i 's/border-purple-500/border-teal-600/g' "$file"
    
    # Indigos para Dark Greens
    sed -i 's/from-indigo-500/from-green-700/g' "$file"
    sed -i 's/to-indigo-600/to-green-800/g' "$file"
    sed -i 's/from-indigo-600/from-green-800/g' "$file"
    sed -i 's/to-indigo-700/to-green-900/g' "$file"
    sed -i 's/text-indigo-500/text-green-700/g' "$file"
    sed -i 's/text-indigo-600/text-green-800/g' "$file"
    sed -i 's/bg-indigo-500/bg-green-700/g' "$file"
    sed -i 's/bg-indigo-100/bg-green-100/g' "$file"
    
    # Pinks para Cyans
    sed -i 's/from-pink-500/from-cyan-600/g' "$file"
    sed -i 's/to-pink-600/to-cyan-700/g' "$file"
    sed -i 's/from-pink-600/from-cyan-700/g' "$file"
    sed -i 's/to-pink-700/to-cyan-800/g' "$file"
    sed -i 's/text-pink-500/text-cyan-600/g' "$file"
    sed -i 's/text-pink-600/text-cyan-700/g' "$file"
    sed -i 's/bg-pink-500/bg-cyan-600/g' "$file"
    sed -i 's/bg-pink-100/bg-cyan-100/g' "$file"
    
    # Yellows para Limes
    sed -i 's/from-yellow-500/from-lime-600/g' "$file"
    sed -i 's/to-yellow-600/to-lime-700/g' "$file"
    sed -i 's/from-yellow-600/from-lime-700/g' "$file"
    sed -i 's/to-yellow-700/to-lime-800/g' "$file"
    sed -i 's/text-yellow-500/text-lime-600/g' "$file"
    sed -i 's/text-yellow-600/text-lime-700/g' "$file"
    sed -i 's/bg-yellow-500/bg-lime-600/g' "$file"
    sed -i 's/bg-yellow-100/bg-lime-100/g' "$file"
    
    # Reds para Emeralds (para alguns destaques)
    sed -i 's/text-red-500/text-emerald-600/g' "$file"
    sed -i 's/bg-red-100/bg-emerald-100/g' "$file"
    
    # Grays remain unchanged (neutral)
}

# Atualizar todos os arquivos de páginas
for file in src/pages/*.tsx; do
    update_file "$file"
done

# Atualizar arquivo principal
update_file "src/index.tsx"

echo "✅ Tema verde aplicado com sucesso!"