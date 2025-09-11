import { Hono } from 'hono';
import activeConfig from './active.json';

// Tipo para a configuração da marca
export interface BrandConfig {
  brand: {
    id: string;
    name: string;
    fullName: string;
    tagline: string;
    description: string;
    years: string;
    logo: {
      light: string;
      dark: string;
      icon: string;
    };
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      accent: string;
      danger: string;
      warning: string;
      success: string;
      info: string;
      background: string;
      surface: string;
      text: string;
      textLight: string;
    };
    features: {
      modules: Record<string, boolean>;
      verticals: Record<string, boolean>;
      portals: Record<string, boolean>;
    };
    metrics: Record<string, string>;
    contact: {
      phone: string;
      email: string;
      website: string;
      address: {
        street: string;
        city: string;
        state: string;
        zip: string;
      };
    };
    social: Record<string, string>;
    api: {
      endpoints: Record<string, string>;
      auth: {
        type: string;
        token: string;
      };
    };
    customization: {
      showLogo: boolean;
      showMetrics: boolean;
      showAIInsights: boolean;
      language: string;
      dateFormat: string;
      currency: string;
      timezone: string;
    };
  };
  demo: {
    enabled: boolean;
    watermark: boolean;
    dataSource: string;
    expiresAt: string | null;
    restrictions: string[];
  };
  deployment: {
    type: string;
    projectName: string;
    customDomain: string;
    environment: string;
  };
}

// Configuração ativa
export const config: BrandConfig = activeConfig as BrandConfig;

// Helper functions
export const getBrand = () => config.brand;
export const getColors = () => config.brand.colors;
export const getFeatures = () => config.brand.features;
export const getMetrics = () => config.brand.metrics;
export const isDemo = () => config.demo.enabled;
export const isModuleEnabled = (module: string) => config.brand.features.modules[module] || false;
export const isVerticalEnabled = (vertical: string) => config.brand.features.verticals[vertical] || false;
export const isPortalEnabled = (portal: string) => config.brand.features.portals[portal] || false;

// Função para aplicar tema dinamicamente
export const applyTheme = () => {
  if (typeof document !== 'undefined') {
    const colors = getColors();
    const root = document.documentElement;
    
    // Define CSS variables
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-dark', colors.primaryDark);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-danger', colors.danger);
    root.style.setProperty('--color-warning', colors.warning);
    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-info', colors.info);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-light', colors.textLight);
  }
};

// Função para gerar styles inline
export const getThemeStyles = () => {
  const colors = getColors();
  return `
    :root {
      --color-primary: ${colors.primary};
      --color-primary-dark: ${colors.primaryDark};
      --color-secondary: ${colors.secondary};
      --color-accent: ${colors.accent};
      --color-danger: ${colors.danger};
      --color-warning: ${colors.warning};
      --color-success: ${colors.success};
      --color-info: ${colors.info};
      --color-background: ${colors.background};
      --color-surface: ${colors.surface};
      --color-text: ${colors.text};
      --color-text-light: ${colors.textLight};
    }
    
    .bg-primary { background-color: var(--color-primary) !important; }
    .bg-secondary { background-color: var(--color-secondary) !important; }
    .text-primary { color: var(--color-primary) !important; }
    .text-secondary { color: var(--color-secondary) !important; }
    .border-primary { border-color: var(--color-primary) !important; }
    
    /* Glass morphism com cores da marca */
    .glass-effect {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    /* Gradientes com cores da marca */
    .gradient-primary {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    }
    
    .gradient-text {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;
};

// Função para renderizar marca d'água de demo
export const renderWatermark = () => {
  if (!isDemo() || !config.demo.watermark) return '';
  
  return `
    <div style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: rgba(0,0,0,0.7);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 12px;
      z-index: 9999;
      pointer-events: none;
    ">
      🔬 VERSÃO DEMONSTRAÇÃO
    </div>
  `;
};

// Export default
export default config;