#!/bin/bash

echo "🚀 Deploy para GitHub Pages - Plataforma ACCamargo"
echo "=================================================="

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Passo 1: Verificando configuração do GitHub...${NC}"
if ! command -v gh &> /dev/null; then
    echo -e "${YELLOW}⚠️  GitHub CLI não instalado. Instalando...${NC}"
    curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
    sudo apt update
    sudo apt install gh -y
fi

echo -e "${BLUE}📦 Passo 2: Criando repositório no GitHub...${NC}"
REPO_NAME="oncologia-accamargo"
REPO_EXISTS=$(gh repo list --json name -q ".[] | select(.name==\"$REPO_NAME\") | .name" 2>/dev/null)

if [ -z "$REPO_EXISTS" ]; then
    echo "Criando novo repositório..."
    gh repo create $REPO_NAME --public \
        --description "Plataforma Integrada da Jornada Oncológica com IA - ACCamargo Cancer Center" \
        --homepage "https://jacfressatto.github.io/$REPO_NAME"
    echo -e "${GREEN}✅ Repositório criado com sucesso!${NC}"
else
    echo -e "${YELLOW}ℹ️  Repositório já existe${NC}"
fi

echo -e "${BLUE}📦 Passo 3: Configurando remote...${NC}"
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$(gh api user -q .login)/$REPO_NAME.git"
echo -e "${GREEN}✅ Remote configurado!${NC}"

echo -e "${BLUE}📦 Passo 4: Fazendo push para GitHub...${NC}"
git branch -M main
git push -u origin main
echo -e "${GREEN}✅ Código enviado para GitHub!${NC}"

echo -e "${BLUE}📦 Passo 5: Configurando GitHub Pages...${NC}"
# Aguardar um pouco para o repositório estar pronto
sleep 3

# Habilitar GitHub Pages via Actions
gh api repos/$(gh api user -q .login)/$REPO_NAME/pages \
    --method POST \
    --field source='{"branch":"gh-pages","path":"/"}' 2>/dev/null || \
    echo -e "${YELLOW}ℹ️  GitHub Pages já configurado ou será configurado automaticamente${NC}"

echo -e "${BLUE}📦 Passo 6: Executando workflow...${NC}"
# Trigger manual do workflow se necessário
gh workflow run deploy.yml 2>/dev/null || echo -e "${YELLOW}ℹ️  Workflow será executado automaticamente${NC}"

echo ""
echo -e "${GREEN}🎉 Deploy Iniciado com Sucesso!${NC}"
echo "=================================================="
echo ""
echo -e "${BLUE}📊 Informações do Deploy:${NC}"
echo -e "  Repository: https://github.com/$(gh api user -q .login)/$REPO_NAME"
echo -e "  Actions: https://github.com/$(gh api user -q .login)/$REPO_NAME/actions"
echo ""
echo -e "${YELLOW}⏳ Aguarde 2-3 minutos para o primeiro deploy${NC}"
echo ""
echo -e "${GREEN}🌐 Seu site estará disponível em:${NC}"
echo -e "  https://$(gh api user -q .login).github.io/$REPO_NAME"
echo ""
echo -e "${BLUE}📌 Para verificar o status:${NC}"
echo "  gh run list --workflow=deploy.yml"
echo "  gh run view --log"
echo ""