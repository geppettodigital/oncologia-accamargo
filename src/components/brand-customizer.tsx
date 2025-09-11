import { Hono } from 'hono';
import { html } from 'hono/html';

// Cloudflare Design System Colors
export const cloudflareTheme = {
  colors: {
    primary: '#f48120',      // Cloudflare Orange
    secondary: '#0051c3',    // Cloudflare Blue  
    accent: '#7c3aed',       // Cloudflare Purple
    success: '#10b981',      // Green
    warning: '#fbbf24',      // Yellow
    danger: '#ef4444',       // Red
    info: '#3b82f6',         // Light Blue
    
    // Grays (Cloudflare palette)
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #f48120 0%, #ff6b35 100%)',
    secondary: 'linear-gradient(135deg, #0051c3 0%, #0080ff 100%)',
    sunset: 'linear-gradient(135deg, #f48120 0%, #f48120 50%, #0051c3 100%)',
    aurora: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #10b981 100%)'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    orange: '0 10px 25px rgba(244, 129, 32, 0.3)',
    blue: '0 10px 25px rgba(0, 81, 195, 0.3)'
  }
};

// Componente de preview da marca
export const BrandPreview = ({ config }: { config: any }) => {
  const theme = config?.useCloudflareTheme ? cloudflareTheme : {
    colors: {
      primary: config?.brand?.colors?.primary || '#f48120',
      secondary: config?.brand?.colors?.secondary || '#0051c3'
    }
  };
  
  return html`
    <style>
      :root {
        --brand-primary: ${theme.colors.primary};
        --brand-secondary: ${theme.colors.secondary};
        --brand-gradient: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%);
      }
      
      .cf-glass {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .cf-button {
        background: var(--brand-gradient);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
      }
      
      .cf-button:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows?.orange || '0 10px 25px rgba(244, 129, 32, 0.3)'};
      }
      
      .cf-card {
        background: white;
        border-radius: 0.75rem;
        padding: 1.5rem;
        box-shadow: ${theme.shadows?.md || '0 4px 6px -1px rgba(0, 0, 0, 0.1)'};
        transition: all 0.3s ease;
      }
      
      .cf-card:hover {
        transform: translateY(-4px);
        box-shadow: ${theme.shadows?.xl || '0 20px 25px -5px rgba(0, 0, 0, 0.1)'};
      }
      
      .cf-metric {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        border-radius: 0.75rem;
        background: var(--brand-gradient);
        color: white;
      }
      
      .cf-metric-value {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
      }
      
      .cf-metric-label {
        font-size: 0.875rem;
        opacity: 0.9;
      }
    </style>
    
    <div class="preview-container">
      <div class="cf-glass p-6 rounded-xl">
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center space-x-4">
            ${config?.brand?.logo ? html`
              <img src="${config.brand.logo}" alt="Logo" class="h-12">
            ` : html`
              <div class="h-12 w-12 rounded-lg flex items-center justify-center text-white font-bold"
                   style="background: var(--brand-gradient);">
                ${config?.brand?.name?.charAt(0) || 'H'}
              </div>
            `}
            <div>
              <h1 class="text-2xl font-bold" style="color: var(--brand-primary);">
                ${config?.brand?.name || 'Hospital'}
              </h1>
              <p class="text-sm text-gray-600">
                ${config?.brand?.tagline || 'Cuidando de vidas'}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Metrics -->
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="cf-metric">
            <div class="cf-metric-value">R$ 2.4M</div>
            <div class="cf-metric-label">Economia Anual</div>
          </div>
          <div class="cf-metric">
            <div class="cf-metric-value">45.000</div>
            <div class="cf-metric-label">Pacientes</div>
          </div>
          <div class="cf-metric">
            <div class="cf-metric-value">98.5%</div>
            <div class="cf-metric-label">Satisfação</div>
          </div>
        </div>
        
        <!-- Sample Buttons -->
        <div class="flex space-x-4">
          <button class="cf-button">
            <i class="fas fa-rocket mr-2"></i>
            Acessar Plataforma
          </button>
          <button class="cf-button" style="background: white; color: var(--brand-primary); border: 2px solid var(--brand-primary);">
            <i class="fas fa-info-circle mr-2"></i>
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  `;
};

// Helper para aplicar tema Cloudflare como padrão
export const applyCloudflareDefaults = (config: any) => {
  if (!config.brand) {
    config.brand = {};
  }
  
  // Se não houver cores customizadas, usa Cloudflare
  if (!config.brand.colors || config.useCloudflareTheme) {
    config.brand.colors = cloudflareTheme.colors;
    config.brand.gradients = cloudflareTheme.gradients;
    config.brand.shadows = cloudflareTheme.shadows;
  }
  
  // Aplica glass morphism por padrão
  config.brand.effects = {
    glass: true,
    gradient: true,
    hover: true,
    ...config.brand.effects
  };
  
  return config;
};

// Rota para o customizador
export const brandCustomizerRoute = new Hono();

brandCustomizerRoute.get('/customizer', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Personalizador de Marca</title>
      <script>
        // Redireciona para o arquivo HTML completo
        window.location.href = '/brand-customizer.html';
      </script>
    </head>
    <body>
      <p>Redirecionando para o personalizador...</p>
    </body>
    </html>
  `);
});

// API para salvar configuração
brandCustomizerRoute.post('/api/brand/save', async (c) => {
  try {
    const config = await c.req.json();
    
    // Aplica defaults do Cloudflare se necessário
    const finalConfig = applyCloudflareDefaults(config);
    
    // Aqui você salvaria no banco de dados ou arquivo
    // Por enquanto, retorna sucesso
    
    return c.json({
      success: true,
      message: 'Configuração salva com sucesso',
      config: finalConfig
    });
  } catch (error) {
    return c.json({
      success: false,
      error: 'Erro ao salvar configuração'
    }, 500);
  }
});

// API para carregar configuração
brandCustomizerRoute.get('/api/brand/load/:brandId', (c) => {
  const brandId = c.req.param('brandId');
  
  // Aqui você carregaria do banco de dados
  // Por enquanto, retorna config padrão com tema Cloudflare
  
  const config = {
    brand: {
      id: brandId,
      name: 'Hospital Example',
      tagline: 'Transformando o cuidado oncológico',
      useCloudflareTheme: true
    }
  };
  
  return c.json(applyCloudflareDefaults(config));
});

export default brandCustomizerRoute;