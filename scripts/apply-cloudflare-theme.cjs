#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Cloudflare theme configuration
const cloudflareTheme = {
  brand: {
    id: "cloudflare-default",
    name: "Plataforma Oncológica",
    fullName: "Sistema Integrado de Gestão Oncológica",
    tagline: "Transformando o cuidado com tecnologia de ponta",
    description: "Plataforma baseada em Cloudflare Workers para máxima performance e escala global",
    years: "",
    logo: {
      light: "/static/logo.svg",
      dark: "/static/logo.svg",
      icon: "/static/logo.svg"
    },
    colors: {
      // Cloudflare Brand Colors
      primary: "#f48120",        // Cloudflare Orange
      primaryDark: "#e06d10",    // Darker Orange
      secondary: "#0051c3",      // Cloudflare Blue
      secondaryDark: "#003d94",  // Darker Blue
      accent: "#7c3aed",         // Purple
      
      // Semantic Colors
      danger: "#ef4444",
      warning: "#fbbf24",
      success: "#10b981",
      info: "#3b82f6",
      
      // UI Colors
      background: "#f9fafb",
      surface: "#ffffff",
      text: "#111827",
      textLight: "#6b7280",
      
      // Grays (Cloudflare palette)
      gray50: "#f9fafb",
      gray100: "#f3f4f6",
      gray200: "#e5e7eb",
      gray300: "#d1d5db",
      gray400: "#9ca3af",
      gray500: "#6b7280",
      gray600: "#4b5563",
      gray700: "#374151",
      gray800: "#1f2937",
      gray900: "#111827"
    },
    gradients: {
      primary: "linear-gradient(135deg, #f48120 0%, #ff6b35 100%)",
      secondary: "linear-gradient(135deg, #0051c3 0%, #0080ff 100%)",
      sunset: "linear-gradient(135deg, #f48120 0%, #f48120 50%, #0051c3 100%)",
      aurora: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #10b981 100%)",
      mesh: "radial-gradient(at 40% 20%, #f48120 0%, transparent 50%), radial-gradient(at 80% 0%, #0051c3 0%, transparent 50%), radial-gradient(at 10% 50%, #7c3aed 0%, transparent 50%)"
    },
    effects: {
      glass: true,
      gradients: true,
      hover: true,
      animations: true,
      shadows: "modern"
    },
    features: {
      modules: {
        agendamento: true,
        triagem: true,
        plano_cuidados: true,
        quimioterapia: true,
        multidisciplinar: true,
        farmacovigilancia: true,
        integracoes: true,
        analytics: true,
        ai_laura: true,
        gestao_verticalizada: true,
        financeiro: true,
        pesquisa: true,
        bem_estar: true
      },
      verticals: {
        hospital: true,
        operadora: true,
        rede: true,
        regulador: false
      },
      portals: {
        patient: true,
        doctor: true,
        navigator: true,
        financial: true,
        research: true,
        wellness: true,
        admin: true
      }
    },
    metrics: {
      economia_anual: "R$ 3.500.000",
      economia_label: "economia comprovada",
      pacientes_atendidos: "50.000+",
      pacientes_label: "pacientes beneficiados",
      reducao_glosas: "42%",
      glosas_label: "redução de glosas",
      satisfacao: "99.2%",
      satisfacao_label: "satisfação dos usuários",
      tempo_atendimento: "35min",
      tempo_label: "redução no tempo de espera",
      taxa_resolutividade: "95%",
      resolutividade_label: "taxa de resolutividade",
      uptime: "99.98%",
      uptime_label: "disponibilidade global",
      latencia: "<50ms",
      latencia_label: "latência média global"
    },
    contact: {
      phone: "(11) 9999-9999",
      email: "contato@plataforma.com.br",
      website: "https://www.plataforma.com.br",
      address: {
        street: "",
        city: "São Paulo",
        state: "SP",
        zip: ""
      }
    },
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: "",
      twitter: ""
    },
    api: {
      endpoints: {
        his: "",
        erp: "",
        pacs: "",
        lis: "",
        ris: ""
      },
      auth: {
        type: "bearer",
        token: ""
      }
    },
    customization: {
      showLogo: true,
      showMetrics: true,
      showAIInsights: true,
      language: "pt-BR",
      dateFormat: "DD/MM/YYYY",
      currency: "BRL",
      timezone: "America/Sao_Paulo",
      theme: "cloudflare"
    }
  },
  demo: {
    enabled: false,
    watermark: false,
    dataSource: "production",
    expiresAt: null,
    restrictions: []
  },
  deployment: {
    type: "cloudflare",
    projectName: "oncologia-saas",
    customDomain: "",
    environment: "production",
    edge: true,
    workers: true,
    pages: true
  }
};

// Function to apply theme
function applyCloudflareTheme() {
  console.log('\n🎨 Aplicando tema Cloudflare como padrão...\n');
  
  try {
    const configDir = path.join(__dirname, '..', 'src', 'config');
    const brandsDir = path.join(configDir, 'brands');
    const activeConfigPath = path.join(configDir, 'active.json');
    const cloudflareConfigPath = path.join(brandsDir, 'cloudflare.json');
    
    // Save Cloudflare theme config
    fs.writeFileSync(cloudflareConfigPath, JSON.stringify(cloudflareTheme, null, 2));
    console.log('✅ Tema Cloudflare salvo em: brands/cloudflare.json');
    
    // Set as active
    fs.writeFileSync(activeConfigPath, JSON.stringify(cloudflareTheme, null, 2));
    console.log('✅ Tema Cloudflare definido como ativo');
    
    // Create CSS file with Cloudflare theme
    const cssContent = `/* Cloudflare Design System Theme */
:root {
  /* Primary Colors */
  --color-primary: #f48120;
  --color-primary-dark: #e06d10;
  --color-secondary: #0051c3;
  --color-secondary-dark: #003d94;
  --color-accent: #7c3aed;
  
  /* Semantic Colors */
  --color-danger: #ef4444;
  --color-warning: #fbbf24;
  --color-success: #10b981;
  --color-info: #3b82f6;
  
  /* Grays */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #f48120 0%, #ff6b35 100%);
  --gradient-secondary: linear-gradient(135deg, #0051c3 0%, #0080ff 100%);
  --gradient-sunset: linear-gradient(135deg, #f48120 0%, #f48120 50%, #0051c3 100%);
  --gradient-aurora: linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #10b981 100%);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-orange: 0 10px 25px rgba(244, 129, 32, 0.3);
  --shadow-blue: 0 10px 25px rgba(0, 81, 195, 0.3);
}

/* Glass Morphism Effect */
.glass-effect, .cf-glass {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--shadow-lg);
}

/* Cloudflare Button Styles */
.cf-button, .btn-primary {
  background: var(--gradient-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-md);
}

.cf-button:hover, .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-orange);
}

/* Cloudflare Card Styles */
.cf-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cf-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

/* Override existing colors with Cloudflare theme */
.bg-primary { background-color: var(--color-primary) !important; }
.bg-secondary { background-color: var(--color-secondary) !important; }
.text-primary { color: var(--color-primary) !important; }
.text-secondary { color: var(--color-secondary) !important; }
.border-primary { border-color: var(--color-primary) !important; }
.border-secondary { border-color: var(--color-secondary) !important; }

/* Gradient utilities */
.gradient-primary { background: var(--gradient-primary) !important; }
.gradient-secondary { background: var(--gradient-secondary) !important; }
.gradient-sunset { background: var(--gradient-sunset) !important; }
.gradient-aurora { background: var(--gradient-aurora) !important; }

/* Text gradient */
.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`;
    
    const cssPath = path.join(__dirname, '..', 'public', 'static', 'cloudflare-theme.css');
    fs.writeFileSync(cssPath, cssContent);
    console.log('✅ CSS do tema Cloudflare criado: public/static/cloudflare-theme.css');
    
    console.log('\n🎯 Tema Cloudflare aplicado com sucesso!');
    console.log('\n📋 Características do tema:');
    console.log('  • Cores: Orange (#f48120) + Blue (#0051c3)');
    console.log('  • Glass Morphism ativado');
    console.log('  • Gradientes modernos');
    console.log('  • Shadows otimizadas');
    console.log('  • Design System completo');
    
    console.log('\n🚀 Para usar o tema:');
    console.log('  1. npm run build');
    console.log('  2. npm run dev');
    console.log('  3. Acesse /customizer para personalizar');
    
  } catch (error) {
    console.error('❌ Erro ao aplicar tema:', error.message);
    process.exit(1);
  }
}

// Execute
applyCloudflareTheme();