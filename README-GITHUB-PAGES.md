# 📚 Deploy no GitHub Pages - Plataforma ACCamargo

## 🚀 Instruções Passo a Passo

### 1️⃣ **Autorizar GitHub no Sandbox**
```bash
# Primeiro, autorize o GitHub na aba #github do sandbox
# Depois execute:
setup_github_environment
```

### 2️⃣ **Criar Repositório no GitHub**
```bash
# Criar novo repositório
gh repo create oncologia-accamargo --public --description "Plataforma Integrada da Jornada Oncológica com IA"

# Ou usar repositório existente
git remote add origin https://github.com/JacFressatto/oncologia-accamargo.git
```

### 3️⃣ **Preparar o Projeto**
```bash
# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "feat: Plataforma Oncológica ACCamargo - Deploy GitHub Pages"

# Push para o GitHub
git push -u origin main
```

### 4️⃣ **Configurar GitHub Pages**

#### Via Interface Web:
1. Acesse: `https://github.com/JacFressatto/oncologia-accamargo`
2. Vá em **Settings** > **Pages**
3. Em **Build and deployment**:
   - Source: **GitHub Actions**
   - Não precisa selecionar branch

#### Via GitHub CLI:
```bash
# Habilitar GitHub Pages
gh api repos/JacFressatto/oncologia-accamargo/pages \
  --method POST \
  --field source='{"branch":"gh-pages","path":"/"}'
```

### 5️⃣ **Deploy Automático**

O deploy acontece automaticamente quando você faz push para `main`:

```bash
# Fazer alterações
git add .
git commit -m "update: Melhorias na plataforma"
git push
```

### 6️⃣ **Verificar Deploy**

#### Status do Workflow:
```bash
# Ver status do deploy
gh run list --workflow=deploy.yml

# Ver logs do último deploy
gh run view --log
```

#### URLs Disponíveis:
- **GitHub Pages**: https://jacfressatto.github.io/oncologia-accamargo
- **Cloudflare Pages**: https://oncologia-accamargo.pages.dev

## 🔧 **Comandos Úteis**

### Build Local para Teste:
```bash
# Gerar versão estática
npm run build:static

# Testar localmente
npx serve dist-static -p 8080
```

### Verificar Deploy:
```bash
# Ver todos os deployments
gh api repos/JacFressatto/oncologia-accamargo/deployments

# Ver status do Pages
gh api repos/JacFressatto/oncologia-accamargo/pages
```

### Troubleshooting:
```bash
# Se o workflow falhar, verificar logs
gh run view $(gh run list --limit 1 --json databaseId -q '.[0].databaseId') --log

# Rerun workflow manualmente
gh workflow run deploy.yml

# Verificar se Pages está habilitado
gh api repos/JacFressatto/oncologia-accamargo/pages
```

## 📂 **Estrutura do Deploy**

```
dist-static/
├── index.html          # Página principal (redireciona para Cloudflare)
├── static/
│   ├── style.css      # Estilos customizados
│   ├── portal-*.js    # Scripts dos portais
│   └── images/        # Imagens e ícones
└── favicon.svg        # Ícone do site
```

## 🔄 **Fluxo de Deploy**

1. **Push para main** → Trigger GitHub Action
2. **GitHub Action** → Build do projeto
3. **Upload artifact** → Prepara para Pages
4. **Deploy Pages** → Publica no GitHub Pages
5. **Site Live** → https://jacfressatto.github.io/oncologia-accamargo

## ⚙️ **Configurações Avançadas**

### Domínio Customizado:
```bash
# Adicionar domínio customizado
echo "plataforma.accamargo.org.br" > CNAME
git add CNAME
git commit -m "add: Custom domain"
git push
```

### Variáveis de Ambiente:
```bash
# Adicionar secrets no repositório
gh secret set API_KEY --body "seu-api-key"
gh secret set CLOUDFLARE_TOKEN --body "seu-token"
```

## 📊 **Monitoramento**

### Analytics:
```javascript
// Adicionar ao index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Status Badge:
```markdown
[![Deploy Status](https://github.com/JacFressatto/oncologia-accamargo/actions/workflows/deploy.yml/badge.svg)](https://github.com/JacFressatto/oncologia-accamargo/actions)
```

## 🆘 **Suporte**

- **Documentação GitHub Pages**: https://docs.github.com/pages
- **GitHub Actions**: https://docs.github.com/actions
- **Cloudflare Pages**: https://developers.cloudflare.com/pages

---

**Desenvolvido por**: Jac Fressatto
**Organização**: ACCamargo Cancer Center
**Tecnologia**: Hono + TypeScript + Cloudflare Workers