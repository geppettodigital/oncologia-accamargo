// Script para gerar versão estática para GitHub Pages
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Criar diretório dist-static se não existir
const distDir = path.join(__dirname, 'dist-static');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copiar arquivos públicos
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  copyRecursiveSync(publicDir, distDir);
}

// Criar index.html principal
const indexHTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plataforma Integrada da Jornada Oncológica - ACCamargo Cancer Center</title>
    <meta name="description" content="Sistema completo de gestão oncológica com IA">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    <!-- Custom Styles -->
    <link href="/static/style.css" rel="stylesheet">
    
    <style>
        .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }
        .gradient-text {
            background: linear-gradient(135deg, #2B5F3F 0%, #16a34a 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    
    <!-- Aplicação Principal -->
    <script>
        // Redirecionar para o Cloudflare Pages em produção
        if (window.location.hostname === 'jacfressatto.github.io') {
            // Mostrar página de loading
            document.getElementById('root').innerHTML = \`
                <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20">
                    <div class="text-center">
                        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600 mx-auto mb-4"></div>
                        <h1 class="text-2xl font-bold text-gray-800 mb-2">Carregando Plataforma ACCamargo...</h1>
                        <p class="text-gray-600">Você será redirecionado em instantes</p>
                    </div>
                </div>
            \`;
            
            // Redirecionar após 2 segundos
            setTimeout(() => {
                window.location.href = 'https://oncologia-accamargo.pages.dev';
            }, 2000);
        } else {
            // Desenvolvimento local
            document.getElementById('root').innerHTML = \`
                <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20">
                    <div class="max-w-4xl mx-auto p-8 text-center">
                        <h1 class="text-4xl font-bold gradient-text mb-4">
                            Plataforma Oncológica ACCamargo
                        </h1>
                        <p class="text-xl text-gray-600 mb-8">
                            Sistema Integrado de Gestão da Jornada Oncológica com IA
                        </p>
                        <div class="bg-white rounded-xl shadow-lg p-6 glass-effect">
                            <p class="text-gray-700 mb-4">
                                Esta é uma versão estática para GitHub Pages.
                            </p>
                            <a href="https://oncologia-accamargo.pages.dev" 
                               class="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
                                Acessar Plataforma Completa
                            </a>
                        </div>
                    </div>
                </div>
            \`;
        }
    </script>
    
    <!-- Scripts auxiliares -->
    <script src="/static/portal-helpers.js"></script>
    <script src="/static/portal-functions.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), indexHTML);

// Função auxiliar para copiar arquivos recursivamente
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('✅ Build estático criado em dist-static/');
console.log('📦 Pronto para deploy no GitHub Pages!');