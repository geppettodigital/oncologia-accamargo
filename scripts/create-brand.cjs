#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Cores para o terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise(resolve => {
    rl.question(`${colors.cyan}${prompt}${colors.reset}`, resolve);
  });
}

function generateColorFromName(name) {
  // Gera uma cor baseada no hash do nome
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const hue = hash % 360;
  const saturation = 50 + (hash % 30);
  const lightness = 30 + (hash % 20);
  
  // Converte HSL para HEX
  const h = hue / 360;
  const s = saturation / 100;
  const l = lightness / 100;
  
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

async function createBrand() {
  log('\n🎨 Criador de Nova Marca para Plataforma Oncológica\n', 'bright');
  
  try {
    // Coleta informações
    const id = await question('ID da marca (sem espaços, ex: einstein): ');
    const name = await question('Nome curto (ex: Einstein): ');
    const fullName = await question('Nome completo (ex: Hospital Albert Einstein): ');
    const tagline = await question('Tagline/Slogan: ');
    const years = await question('Anos de atuação (opcional): ');
    const primaryColor = await question(`Cor primária HEX (Enter para auto-gerar): `) || generateColorFromName(name);
    const phone = await question('Telefone (ex: (11) 2151-1233): ');
    const email = await question('Email de contato: ');
    const website = await question('Website: ');
    
    // Pergunta sobre verticais
    log('\n📊 Selecione as verticais disponíveis:', 'yellow');
    const hasHospital = (await question('Visão Hospital? (s/n): ')).toLowerCase() === 's';
    const hasOperadora = (await question('Visão Operadora? (s/n): ')).toLowerCase() === 's';
    const hasRede = (await question('Visão Rede Hospitalar? (s/n): ')).toLowerCase() === 's';
    
    // Pergunta sobre modo demo
    const isDemo = (await question('\nÉ uma versão DEMO? (s/n): ')).toLowerCase() === 's';
    
    // Carrega template
    const templatePath = path.join(__dirname, '..', 'src', 'config', 'brands', 'template.json');
    const template = JSON.parse(fs.readFileSync(templatePath, 'utf8'));
    
    // Personaliza configuração
    const config = {
      ...template,
      brand: {
        ...template.brand,
        id: id.toLowerCase().replace(/\s+/g, '-'),
        name,
        fullName: fullName || name,
        tagline: tagline || template.brand.tagline,
        years: years || '',
        logo: {
          light: `/brands/${id}/logo-light.svg`,
          dark: `/brands/${id}/logo-dark.svg`,
          icon: `/brands/${id}/icon.svg`
        },
        colors: {
          ...template.brand.colors,
          primary: primaryColor,
          primaryDark: adjustColor(primaryColor, -20),
          secondary: adjustColor(primaryColor, 40)
        },
        features: {
          ...template.brand.features,
          verticals: {
            hospital: hasHospital,
            operadora: hasOperadora,
            rede: hasRede,
            regulador: false
          }
        },
        contact: {
          ...template.brand.contact,
          phone: phone || template.brand.contact.phone,
          email: email || template.brand.contact.email,
          website: website || template.brand.contact.website
        }
      },
      demo: {
        ...template.demo,
        enabled: isDemo,
        watermark: isDemo,
        dataSource: isDemo ? 'mock' : 'production'
      }
    };
    
    // Salva configuração
    const configPath = path.join(__dirname, '..', 'src', 'config', 'brands', `${id}.json`);
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    
    // Cria diretório para assets
    const assetsDir = path.join(__dirname, '..', 'public', 'brands', id);
    if (!fs.existsSync(assetsDir)) {
      fs.mkdirSync(assetsDir, { recursive: true });
    }
    
    // Cria placeholder para logos
    const placeholderSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
  <rect width="200" height="60" fill="${primaryColor}"/>
  <text x="100" y="35" font-family="Arial, sans-serif" font-size="20" fill="white" text-anchor="middle">
    ${name}
  </text>
</svg>`;
    
    fs.writeFileSync(path.join(assetsDir, 'logo-light.svg'), placeholderSVG);
    fs.writeFileSync(path.join(assetsDir, 'logo-dark.svg'), placeholderSVG);
    fs.writeFileSync(path.join(assetsDir, 'icon.svg'), placeholderSVG);
    
    log(`\n✅ Marca '${name}' criada com sucesso!`, 'green');
    log(`\n📁 Arquivos criados:`, 'cyan');
    log(`  • Configuração: src/config/brands/${id}.json`);
    log(`  • Assets: public/brands/${id}/`);
    
    log(`\n🎯 Próximos passos:`, 'yellow');
    log(`  1. Adicione os logos reais em: public/brands/${id}/`);
    log(`  2. Ative a marca com: npm run switch-brand ${id}`);
    log(`  3. Inicie o desenvolvimento: npm run dev`);
    
  } catch (error) {
    log(`\n❌ Erro ao criar marca: ${error.message}`, 'red');
  } finally {
    rl.close();
  }
}

function adjustColor(hex, percent) {
  // Ajusta brilho da cor
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1);
}

// Executa
createBrand();