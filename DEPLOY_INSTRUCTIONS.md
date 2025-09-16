# 🚀 Deploy Instructions - PaaS Oncologia 3.0

## 📦 Repositório GitHub
**URL**: https://github.com/geppettodigital/oncologia-accamargo

## 🌐 Deploy no Cloudflare Pages

### Opção 1: Deploy via GitHub Integration (RECOMENDADO)

1. **Acesse o Cloudflare Dashboard**
   - https://dash.cloudflare.com
   - Vá para "Workers & Pages"

2. **Crie um novo projeto**
   - Clique em "Create application"
   - Selecione "Pages"
   - Conecte ao GitHub

3. **Configure o projeto**
   - **Repository**: `geppettodigital/oncologia-accamargo`
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 ou superior

4. **Variáveis de ambiente** (se necessário)
   ```
   NODE_VERSION=18
   ```

5. **Deploy**
   - Clique em "Save and Deploy"
   - Aguarde o build completar

### Opção 2: Deploy Manual via Wrangler CLI

1. **Clone o repositório**
   ```bash
   git clone https://github.com/geppettodigital/oncologia-accamargo.git
   cd oncologia-accamargo
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o Cloudflare API Token**
   ```bash
   export CLOUDFLARE_API_TOKEN=seu_token_aqui
   ```

4. **Build do projeto**
   ```bash
   npm run build
   ```

5. **Deploy para Cloudflare Pages**
   ```bash
   npx wrangler pages deploy dist --project-name oncologia-accamargo
   ```

## 🔗 URLs de Acesso

### Desenvolvimento (Sandbox)
- **Principal**: https://3000-is0o3lqkacvyzl4g7t2eu-6532622b.e2b.dev
- **Portal Navegador**: https://3000-is0o3lqkacvyzl4g7t2eu-6532622b.e2b.dev#navigator
- **Test Functions**: https://3000-is0o3lqkacvyzl4g7t2eu-6532622b.e2b.dev/test-portal-functions

### Produção (após deploy)
- **Principal**: https://oncologia-accamargo.pages.dev
- **Portal Navegador**: https://oncologia-accamargo.pages.dev#navigator
- **Test Functions**: https://oncologia-accamargo.pages.dev/test-portal-functions

## 📱 Funcionalidades Principais

### Portais Disponíveis
1. **Portal do Paciente** - #patient
2. **Portal Médico** - #doctor
3. **Portal do Navegador** - #navigator (com Kanban e View Universal)
4. **Portal Financeiro** - #financial
5. **Portal Bem-estar** - #wellness
6. **Portal Pesquisa** - #research
7. **Portal Admin** - #admin

### View Universal do Paciente
- 6 pacientes exemplo (PAC-001 a PAC-006)
- Acesso via cards do Kanban (abre em nova aba)
- URLs diretas: `/patient-view/PAC-001` até `/patient-view/PAC-006`

## 🛠️ Desenvolvimento Local

1. **Clone e instale**
   ```bash
   git clone https://github.com/geppettodigital/oncologia-accamargo.git
   cd oncologia-accamargo
   npm install
   ```

2. **Desenvolvimento**
   ```bash
   npm run dev
   ```

3. **Build local**
   ```bash
   npm run build
   ```

4. **Preview**
   ```bash
   npx wrangler pages dev dist
   ```

## 📝 Scripts Disponíveis

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "wrangler pages dev dist",
  "deploy": "npm run build && wrangler pages deploy dist",
  "deploy:prod": "npm run build && wrangler pages deploy dist --project-name oncologia-accamargo"
}
```

## 🔧 Tecnologias Utilizadas

- **Framework**: Hono
- **Runtime**: Cloudflare Workers
- **Build**: Vite
- **Deploy**: Wrangler CLI
- **UI**: TailwindCSS (CDN)
- **Icons**: Font Awesome

## 📊 Estrutura do Projeto

```
oncologia-accamargo/
├── src/
│   ├── index.tsx           # Entry point
│   ├── routes/            # API routes
│   │   ├── portal.ts      # Portal routes
│   │   ├── patient-view-standalone.ts
│   │   └── kanban-test.ts
│   └── pages/             # Page templates
├── public/
│   └── static/            # Static assets
├── dist/                  # Build output
├── package.json
├── wrangler.jsonc         # Cloudflare config
└── vite.config.ts         # Vite config
```

## 🚨 Importante

- O projeto está configurado para Cloudflare Pages
- Não requer servidor Node.js tradicional
- Todas as funcionalidades rodam no edge
- Os arquivos estáticos são servidos pelo CDN

## 📞 Suporte

**Desenvolvido por**: Geppetto Digital
**Repositório**: https://github.com/geppettodigital/oncologia-accamargo

---

*Última atualização: 16/09/2025*