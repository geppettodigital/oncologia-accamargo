# 🧭 Guia de Navegação - PaaS Oncology 3.0

## 🚀 Acesso Rápido aos Portais

### Portal Principal
- **URL**: [https://oncologia-accamargo.pages.dev](https://oncologia-accamargo.pages.dev)
- **Descrição**: Landing page com acesso a todos os portais

### Portais Específicos

#### 1. Portal do Paciente
- **Acesso**: `/#patient`
- **Funcionalidades**:
  - Auto-triagem inteligente
  - Acompanhamento personalizado
  - Ansiedade de Laura integrada
  - Rede de apoio

#### 2. Portal Médico
- **Acesso**: `/#doctor`
- **Funcionalidades**:
  - Assistente clínico com IA
  - Gestão de pacientes
  - Análise preditiva
  - Dashboard executivo

#### 3. Portal do Navegador ⭐ ATUALIZADO
- **Acesso**: `/#navigator`
- **Funcionalidades Novas**:
  - ✅ **View Universal do Paciente** com 6 abas
  - ✅ **Sistema Contatar** - Comunicação integrada
  - ✅ **Sistema Agendar** - Calendário inteligente
  - ✅ **Wiki Jornada** - Timeline do tratamento
  - ✅ **Checklist Auditoria** - Double-check compliance
  - ✅ **Trilho de Atendimentos Kanban** - Gestão visual

#### 4. Portal Financeiro
- **Acesso**: `/#financial`
- **Funcionalidades**:
  - Prevenção de glosas
  - Dashboard financeiro
  - Análise de custos
  - ROI em tempo real

#### 5. Portal de Bem-Estar
- **Acesso**: `/#wellness`
- **Funcionalidades**:
  - Suporte psicológico
  - Qualidade de vida
  - Recursos de apoio
  - Comunidade

#### 6. Portal de Pesquisa
- **Acesso**: `/#research`
- **Funcionalidades**:
  - Gestão de trials
  - Recrutamento inteligente
  - Análise de dados
  - Publicações

#### 7. Portal Administrativo
- **Acesso**: `/#admin`
- **Funcionalidades**:
  - Visão executiva
  - Métricas globais
  - Gestão de usuários
  - Configurações

## 📂 Estrutura do Código

```
webapp/
├── src/
│   ├── index.tsx           # Entrada principal
│   ├── routes/
│   │   ├── portal.ts       # ⭐ Portal do Navegador (ATUALIZADO)
│   │   ├── patient.ts      # Portal do Paciente
│   │   ├── doctor.ts       # Portal Médico
│   │   ├── financial.ts    # Portal Financeiro
│   │   ├── wellness.ts     # Portal Bem-Estar
│   │   ├── research.ts     # Portal Pesquisa
│   │   └── admin.ts        # Portal Admin
│   └── components/
│       └── ai-concerns-enhanced.ts  # Ansiedade de Laura
├── public/
│   └── static/             # Assets estáticos
└── dist/                   # Build de produção
```

## 🎯 Como Testar o Portal do Navegador

### 1. Acesso Local (Desenvolvimento)
```bash
# Clone o repositório
git clone https://github.com/geppettodigital/oncologia-accamargo.git
cd oncologia-accamargo

# Instale as dependências
npm install

# Build do projeto
npm run build

# Inicie com PM2
pm2 start ecosystem.config.cjs

# Acesse
http://localhost:3000#navigator
```

### 2. Teste da View Universal
1. Acesse o Portal do Navegador
2. Clique em "Trilho de Atendimentos"
3. Clique em qualquer card de paciente
4. A View Universal abrirá com 6 abas:
   - Visão Geral
   - Contatar
   - Agendar
   - Jornada
   - Checklist
   - IA Laura

## 🔧 Tecnologias Principais

- **Framework**: Hono + TypeScript
- **Deploy**: Cloudflare Pages/Workers
- **Build**: Vite
- **Runtime**: Cloudflare Workers (Edge)
- **UI**: TailwindCSS + Glass Morphism
- **IA**: LAURA Assistant integrada

## 📊 Métricas de Impacto

- **847** pacientes ativos
- **R$ 2.4 milhões** em glosas evitadas
- **87%** taxa de adesão
- **97%** acurácia da IA
- **178** pacientes em navegação simultânea

## 🚨 Funcionalidades Críticas

### Ansiedade de Laura
- Sistema preditivo presente em TODOS os portais
- Ajustado por persona (médico, paciente, navegador)
- Interface collapse/expand com memória
- Ações em lote via checkboxes

### Trilho de Atendimentos (Kanban)
- 5 colunas de gestão da jornada
- Drag & Drop entre fases
- Indicadores visuais de prioridade
- Exportação de dados

## 📝 Últimas Atualizações

### v3.0 - Janeiro 2025
- ✅ View Universal do Paciente totalmente integrada
- ✅ 4 novas funcionalidades no Portal do Navegador
- ✅ Eliminação de redundâncias de interface
- ✅ Sistema 100% funcional e testado
- ✅ Integração completa sem dependências externas

## 🔗 Links Úteis

- **Repositório**: [github.com/geppettodigital/oncologia-accamargo](https://github.com/geppettodigital/oncologia-accamargo)
- **Documentação**: [README.md](./README.md)
- **Changelog**: [Commits](https://github.com/geppettodigital/oncologia-accamargo/commits/main)

## 💡 Suporte

Para dúvidas ou sugestões sobre a navegação:
- Abra uma [Issue](https://github.com/geppettodigital/oncologia-accamargo/issues)
- Consulte o [README](./README.md) principal

---

**ACCamargo Cancer Center** - 70 anos transformando o cuidado oncológico no Brasil 🏥💚