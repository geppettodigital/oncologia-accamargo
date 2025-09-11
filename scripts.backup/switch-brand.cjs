#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Cores para o terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function switchBrand(brandName) {
  try {
    const configDir = path.join(__dirname, '..', 'src', 'config');
    const brandsDir = path.join(configDir, 'brands');
    const brandFile = path.join(brandsDir, `${brandName}.json`);
    const activeFile = path.join(configDir, 'active.json');
    
    // Verifica se a marca existe
    if (!fs.existsSync(brandFile)) {
      log(`❌ Marca '${brandName}' não encontrada!`, 'red');
      log(`\nMarcas disponíveis:`, 'yellow');
      
      const brands = fs.readdirSync(brandsDir)
        .filter(file => file.endsWith('.json'))
        .map(file => file.replace('.json', ''));
      
      brands.forEach(brand => {
        if (brand !== 'template') {
          log(`  • ${brand}`, 'cyan');
        }
      });
      
      process.exit(1);
    }
    
    // Carrega configuração da marca
    const brandConfig = JSON.parse(fs.readFileSync(brandFile, 'utf8'));
    
    log(`\n🔄 Trocando para: ${brandConfig.brand.fullName || brandConfig.brand.name}`, 'blue');
    
    // Copia configuração para active.json
    fs.writeFileSync(activeFile, JSON.stringify(brandConfig, null, 2));
    log(`✅ Configuração ativa atualizada`, 'green');
    
    // Copia assets da marca se existirem
    const brandAssetsDir = path.join(__dirname, '..', 'public', 'brands', brandName);
    const activeAssetsDir = path.join(__dirname, '..', 'public', 'active-brand');
    
    if (fs.existsSync(brandAssetsDir)) {
      // Remove diretório ativo anterior se existir
      if (fs.existsSync(activeAssetsDir)) {
        fs.rmSync(activeAssetsDir, { recursive: true });
      }
      
      // Copia novos assets
      fs.cpSync(brandAssetsDir, activeAssetsDir, { recursive: true });
      log(`✅ Assets da marca copiados`, 'green');
    }
    
    // Exibe informações da marca
    log(`\n📊 Informações da Marca:`, 'bright');
    log(`  Nome: ${brandConfig.brand.fullName || brandConfig.brand.name}`);
    log(`  Tagline: ${brandConfig.brand.tagline}`);
    log(`  Cor Principal: ${brandConfig.brand.colors.primary}`);
    log(`  Módulos Ativos: ${Object.entries(brandConfig.brand.features.modules)
      .filter(([_, enabled]) => enabled)
      .map(([module]) => module)
      .length}`);
    
    // Verifica se é modo demo
    if (brandConfig.demo && brandConfig.demo.enabled) {
      log(`\n⚠️  Modo DEMO ativado`, 'yellow');
      log(`  Dados: ${brandConfig.demo.dataSource}`, 'yellow');
      if (brandConfig.demo.watermark) {
        log(`  Marca d'água: Ativada`, 'yellow');
      }
    }
    
    log(`\n📦 Rebuilding aplicação...`, 'cyan');
    
    // Rebuild da aplicação
    try {
      execSync('npm run build', { 
        stdio: 'inherit',
        cwd: path.join(__dirname, '..')
      });
      log(`\n✅ Build concluído com sucesso!`, 'green');
    } catch (buildError) {
      log(`\n⚠️  Erro no build, mas configuração foi atualizada`, 'yellow');
      log(`Execute 'npm run build' manualmente para aplicar mudanças`, 'yellow');
    }
    
    log(`\n🚀 Pronto para ${brandConfig.brand.name}!`, 'bright');
    log(`\nPara iniciar o servidor de desenvolvimento:`, 'cyan');
    log(`  npm run dev`, 'blue');
    log(`\nPara fazer deploy:`, 'cyan');
    log(`  npm run deploy`, 'blue');
    
  } catch (error) {
    log(`\n❌ Erro ao trocar marca: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Processa argumentos da linha de comando
const args = process.argv.slice(2);

if (args.length === 0) {
  log('Uso: npm run switch-brand <nome-da-marca>', 'yellow');
  log('\nExemplos:', 'cyan');
  log('  npm run switch-brand accamargo');
  log('  npm run switch-brand default');
  log('  npm run switch-brand einstein');
  process.exit(1);
}

const brandName = args[0];
switchBrand(brandName);