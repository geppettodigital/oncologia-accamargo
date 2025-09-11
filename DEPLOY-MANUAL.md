# 🚀 Deploy Manual para GitHub Pages

Como o sandbox tem limitações com GitHub, siga estes passos no seu computador local:

## Opção 1: Download e Deploy Local (Mais Fácil)

### 1️⃣ Baixe o Projeto
```bash
# Baixe o backup do projeto
# Arquivo: webapp_backup_2025-01-10.tar.gz (está no AI Drive)

# Ou baixe diretamente do sandbox usando o link público
```

### 2️⃣ Extraia o Projeto
```bash
tar -xzf webapp_backup_2025-01-10.tar.gz
cd webapp
```

### 3️⃣ Crie o Repositório no GitHub
1. Acesse: https://github.com/new
2. Nome: `oncologia-accamargo`
3. Descrição: `Plataforma Integrada da Jornada Oncológica com IA - ACCamargo Cancer Center`
4. Público
5. Criar repositório

### 4️⃣ Faça o Deploy
```bash
# Inicialize o git (se necessário)
git init
git add .
git commit -m "Initial commit - Plataforma ACCamargo"

# Adicione o remote
git remote add origin https://github.com/JacFressatto/oncologia-accamargo.git

# Faça o push
git branch -M main
git push -u origin main
```

### 5️⃣ Ative o GitHub Pages
1. Vá em: Settings > Pages
2. Source: GitHub Actions
3. Salvar

## Opção 2: Via GitHub Web (Sem Terminal)

### 1️⃣ Crie o Repositório
https://github.com/new
- Nome: `oncologia-accamargo`
- Público
- Criar

### 2️⃣ Upload dos Arquivos
1. Clique em "uploading an existing file"
2. Arraste todos os arquivos do projeto
3. Commit com mensagem: "Initial commit - Plataforma ACCamargo"

### 3️⃣ Crie o Workflow
1. Vá em Actions > New workflow
2. Clique em "set up a workflow yourself"
3. Cole o conteúdo do arquivo `.github/workflows/deploy.yml`
4. Commit

### 4️⃣ Ative GitHub Pages
1. Settings > Pages
2. Source: GitHub Actions

## 📋 Arquivos Importantes para Deploy

Certifique-se de incluir:
- `.github/workflows/deploy.yml` - Workflow de deploy
- `package.json` - Dependências
- `src/` - Código fonte
- `public/` - Arquivos estáticos
- `vite.config.ts` - Configuração Vite
- `wrangler.jsonc` - Configuração Cloudflare

## 🔗 URLs Após Deploy

- **Repositório**: https://github.com/JacFressatto/oncologia-accamargo
- **GitHub Pages**: https://jacfressatto.github.io/oncologia-accamargo
- **Actions**: https://github.com/JacFressatto/oncologia-accamargo/actions

## ⚡ Comandos Úteis

### Verificar Status
```bash
gh run list --workflow=deploy.yml
gh run view --log
```

### Atualizar Projeto
```bash
git add .
git commit -m "Update: descrição"
git push
```

## 🆘 Troubleshooting

### Se o build falhar:
1. Verifique os logs em Actions
2. Certifique-se que `npm install` funciona localmente
3. Verifique se todos os arquivos foram incluídos

### Se o Pages não funcionar:
1. Aguarde 5-10 minutos após o primeiro deploy
2. Verifique em Settings > Pages se está ativo
3. Force refresh (Ctrl+F5) no navegador

## 📦 Estrutura Necessária
```
oncologia-accamargo/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── index.tsx
│   ├── components/
│   ├── pages/
│   └── routes/
├── public/
│   └── static/
├── package.json
├── package-lock.json
├── vite.config.ts
├── wrangler.jsonc
└── README.md
```

## ✅ Checklist de Deploy

- [ ] Repositório criado no GitHub
- [ ] Código enviado (push)
- [ ] GitHub Actions rodando
- [ ] GitHub Pages ativado
- [ ] Site acessível

---

**Desenvolvido por**: Jac Fressatto
**Organização**: ACCamargo Cancer Center
**Tecnologia**: Hono + TypeScript + Cloudflare Workers