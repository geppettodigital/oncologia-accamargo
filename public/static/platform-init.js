// Platform Initialization - Optimized Version
// Carrega todos os componentes necessários de forma eficiente

(function() {
    'use strict';
    
    // Verificar dependências
    const requiredScripts = [
        'platform-config.js',
        'laura-assistant-final.js',
        'laura-integration.js',
        'ai-concerns.js',
        'action-plan-handlers.js',
        'portal-helpers.js'
    ];
    
    // Estado de carregamento
    let loadedScripts = 0;
    
    // Função para carregar script dinamicamente
    function loadScript(src, callback) {
        const existing = document.querySelector(`script[src*="${src}"]`);
        if (existing) {
            callback();
            return;
        }
        
        const script = document.createElement('script');
        script.src = '/static/' + src;
        script.async = true;
        script.onload = callback;
        script.onerror = () => console.error(`Erro ao carregar: ${src}`);
        document.head.appendChild(script);
    }
    
    // Função de inicialização
    function initializePlatform() {
        loadedScripts++;
        
        if (loadedScripts === requiredScripts.length) {
            // Todos os scripts carregados
            if (window.lauraAssistant) {
                console.log('✅ Plataforma Oncológica Inicializada');
                
                // Atualizar métricas se existirem
                updateMetrics();
                
                // Disparar evento de ready
                window.dispatchEvent(new Event('platformReady'));
            }
        }
    }
    
    // Atualizar métricas na tela
    function updateMetrics() {
        if (!window.PlatformConfig) return;
        
        const metrics = window.PlatformConfig.metrics;
        
        // Atualizar contadores
        const elements = {
            'stat-patients': metrics.patients,
            'stat-adherence': metrics.adherenceRate,
            'stat-savings': `R$ ${(metrics.preventedLosses / 1000000).toFixed(1)}M`
        };
        
        Object.keys(elements).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = elements[id];
        });
    }
    
    // Carregar scripts em paralelo
    requiredScripts.forEach(script => {
        loadScript(script, initializePlatform);
    });
    
    // Listener para navegação SPA
    if (window.location.pathname !== '/') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(updateMetrics, 500);
        });
    }
})();