# 🏥 Plataforma Oncológica Multi-Cliente (SaaS)

## 📋 Visão Geral

**Protótipo avançado e configurável** de gestão da jornada oncológica com IA preditiva "Ansiedade de Laura". Sistema multi-marca que permite customização instantânea para demonstrações e implementações específicas por cliente.

## 🎯 Status do Projeto

- **Versão**: 2.0.0 (Multi-Cliente)
- **Base**: Fork do projeto ACCamargo com sistema de configuração
- **Ambiente**: Cloudflare Pages + Hono Framework
- **IA**: "Ansiedade de Laura" integrada em todos os portais

## 🚀 Funcionalidades Principais

### Módulos Implementados
1. ✅ **Agendamento Inteligente** - Otimização com IA
2. ✅ **Triagem Preditiva** - Classificação de risco
3. ✅ **Plano de Cuidados** - Personalizado por paciente
4. ✅ **Gestão de Quimioterapia** - Protocolos e ciclos
5. ✅ **Equipe Multidisciplinar** - Coordenação integrada
6. ✅ **Farmacovigilância** - Monitoramento de reações
7. ✅ **Integrações** - APIs hospitalares
8. ✅ **Analytics** - Dashboards em tempo real

### Portais Disponíveis
- 👤 **Paciente** - Jornada personalizada
- 👨‍⚕️ **Médico** - Gestão clínica
- 🧭 **Navegador** - Coordenação do cuidado
- 💰 **Financeiro** - Controle de custos
- 🔬 **Pesquisa** - Dados e estudos
- 💚 **Bem-estar** - Suporte integral
- ⚙️ **Admin Master** - Controle total

## 🎨 Sistema Multi-Marca

### Marcas Configuradas
- **ACCamargo** (Produção) - Verde institucional #2B5F3F
- **Einstein** (Demo) - Azul Einstein #003C71
- **Default** (Template) - Azul moderno #3b82f6

### Como Trocar de Marca
```bash
# Listar marcas disponíveis
npm run brand:list

# Trocar para Einstein
npm run switch-brand einstein

# Trocar para ACCamargo
npm run switch-brand accamargo

# Criar nova marca
npm run create-brand
```

## 🛠️ Configuração e Instalação

### Pré-requisitos
- Node.js 18+
- NPM 8+
- Cloudflare Account (para deploy)

### Instalação Local
```bash
# Clonar repositório
git clone [repository-url]
cd oncologia-saas

# Instalar dependências
npm install

# Configurar marca padrão
npm run switch-brand accamargo

# Iniciar desenvolvimento
npm run dev:sandbox
```

## 📁 Estrutura do Projeto

```
oncologia-saas/
├── src/
│   ├── config/
│   │   ├── brands/          # Configurações por cliente
│   │   │   ├── accamargo.json
│   │   │   ├── einstein.json
│   │   │   └── template.json
│   │   ├── active.json      # Marca ativa atual
│   │   └── brand-provider.tsx
│   │
│   ├── pages/               # Portais
│   ├── routes/              # APIs
│   └── components/          # Componentes reutilizáveis
│
├── scripts/
│   ├── switch-brand.cjs    # Trocar marca
│   ├── create-brand.cjs    # Criar marca
│   └── list-brands.cjs     # Listar marcas
│
└── public/
    └── brands/              # Assets por marca
        ├── accamargo/
        └── einstein/
```

## 🔧 Personalização de Marca

### Estrutura da Configuração
```json
{
  "brand": {
    "id": "hospital-id",
    "name": "Nome Curto",
    "fullName": "Nome Completo da Instituição",
    "colors": {
      "primary": "#HEX",
      "secondary": "#HEX"
    },
    "metrics": {
      "economia_anual": "R$ X.XXX.XXX"
    },
    "features": {
      "modules": {},
      "verticals": {},
      "portals": {}
    }
  }
}
```

### Criar Nova Marca (Interativo)
```bash
npm run create-brand
# Responda as perguntas:
# - ID da marca
# - Nome
# - Cores
# - Verticais
# - Modo demo
```

## 🌐 Deploy

### Cloudflare Pages
```bash
# Build para produção
npm run build

# Deploy para Cloudflare
npm run deploy

# URL Final: https://[projeto].pages.dev
```

### Ambientes
- **Development**: Local com dados mock
- **Demo**: Cloudflare com marca d'água
- **Production**: Cloudflare sem restrições

## 📊 Métricas de Impacto

### Demonstradas no Sistema
- 💰 **R$ 2.4M+** em perdas prevenidas
- 👥 **45.000+** pacientes atendidos
- 📉 **37%** redução de glosas
- ⭐ **98.5%** satisfação dos pacientes

## 🔄 Verticais Suportadas

1. **Hospital** ✅ Implementado
   - Gestão de leitos
   - Protocolos
   - Farmácia oncológica

2. **Operadora** 🚧 Em desenvolvimento
   - Autorização
   - Sinistralidade
   - Auditoria

3. **Rede Hospitalar** 🚧 Planejado
   - Benchmarking
   - Padronização
   - Compras centralizadas

## 🚀 Próximos Passos

### Fase 1 (Atual)
- ✅ Sistema multi-marca
- ✅ 8 módulos funcionais
- ✅ IA "Ansiedade de Laura"
- ✅ 7 portais especializados

### Fase 2 (Próxima)
- [ ] Vertical Operadora completa
- [ ] Vertical Rede Hospitalar
- [ ] API GraphQL
- [ ] Mobile responsivo aprimorado

### Fase 3 (Futuro)
- [ ] Webhooks para integrações
- [ ] SDK JavaScript/Python
- [ ] Multi-tenancy completo
- [ ] Sistema de billing

## 👨‍💻 Comandos Úteis

```bash
# Desenvolvimento
npm run dev:sandbox      # Servidor local
npm run dev:hospital     # Modo hospital
npm run dev:operadora    # Modo operadora

# Marcas
npm run brand:list       # Listar marcas
npm run switch-brand X   # Trocar marca
npm run create-brand     # Nova marca

# Build e Deploy
npm run build           # Build produção
npm run deploy          # Deploy Cloudflare

# Git
npm run git:status      # Status
npm run git:commit "msg" # Commit
```

## 📝 Notas de Versão

### v2.0.0 (Atual)
- Sistema multi-marca implementado
- Scripts de customização
- 3 marcas pré-configuradas
- Brand provider dinâmico

### v1.0.0 (Base)
- Versão ACCamargo original
- 8 módulos funcionais
- IA integrada

## 🆘 Suporte

Para personalização ou implementação:
- Email: jac@laura.technology
- Empresa: Geppetto Digital

## 📄 Licença

Proprietário - Geppetto Digital © 2025

---

**Desenvolvido com 💚 para transformar o cuidado oncológico no Brasil**