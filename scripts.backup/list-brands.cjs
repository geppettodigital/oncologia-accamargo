#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Cores para o terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  gray: '\x1b[90m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function listBrands() {
  const brandsDir = path.join(__dirname, '..', 'src', 'config', 'brands');
  const activeConfigPath = path.join(__dirname, '..', 'src', 'config', 'active.json');
  
  // Lê configuração ativa
  let activeBrandId = null;
  if (fs.existsSync(activeConfigPath)) {
    try {
      const activeConfig = JSON.parse(fs.readFileSync(activeConfigPath, 'utf8'));
      activeBrandId = activeConfig.brand.id;
    } catch (e) {
      // Ignora erros
    }
  }
  
  log('\n🎨 Marcas Disponíveis na Plataforma Oncológica\n', 'bright');
  
  const brandFiles = fs.readdirSync(brandsDir)
    .filter(file => file.endsWith('.json') && file !== 'template.json')
    .sort();
  
  if (brandFiles.length === 0) {
    log('Nenhuma marca configurada ainda.', 'yellow');
    log('Use "npm run create-brand" para criar uma nova marca.', 'cyan');
    return;
  }
  
  const brands = [];
  
  brandFiles.forEach(file => {
    try {
      const brandPath = path.join(brandsDir, file);
      const brand = JSON.parse(fs.readFileSync(brandPath, 'utf8'));
      const id = file.replace('.json', '');
      const isActive = id === activeBrandId;
      
      brands.push({
        id,
        name: brand.brand.fullName || brand.brand.name,
        tagline: brand.brand.tagline,
        color: brand.brand.colors.primary,
        demo: brand.demo?.enabled || false,
        modules: Object.values(brand.brand.features.modules).filter(v => v).length,
        verticals: Object.entries(brand.brand.features.verticals)
          .filter(([_, enabled]) => enabled)
          .map(([name]) => name),
        active: isActive
      });
    } catch (e) {
      log(`  ⚠️  Erro ao ler ${file}: ${e.message}`, 'red');
    }
  });
  
  // Exibe marcas formatadas
  brands.forEach(brand => {
    const marker = brand.active ? '✅' : '  ';
    const nameColor = brand.active ? 'green' : 'cyan';
    
    log(`${marker} ${brand.id}`, nameColor);
    log(`   Nome: ${brand.name}`, 'bright');
    log(`   Tagline: ${brand.tagline}`, 'gray');
    log(`   Cor: ${brand.color}`, 'gray');
    log(`   Módulos: ${brand.modules} ativos`, 'gray');
    log(`   Verticais: ${brand.verticals.join(', ') || 'Nenhuma'}`, 'gray');
    
    if (brand.demo) {
      log(`   🏷️  DEMO`, 'yellow');
    }
    
    log(''); // Linha em branco
  });
  
  log('─'.repeat(60), 'gray');
  
  if (activeBrandId) {
    log(`\nMarca ativa: ${activeBrandId}`, 'green');
  }
  
  log('\n📝 Comandos disponíveis:', 'yellow');
  log('  npm run switch-brand <id>  - Trocar marca ativa', 'cyan');
  log('  npm run create-brand       - Criar nova marca', 'cyan');
  log('  npm run dev                - Iniciar desenvolvimento', 'cyan');
}

listBrands();