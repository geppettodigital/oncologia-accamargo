/**
 * Brand Configuration Manager
 * Gerencia as configurações de marca em todos os portais
 */

(function() {
    'use strict';
    
    // Brand Configuration Manager
    window.BrandConfig = {
        // Get current brand configuration
        get: function() {
            // Try sessionStorage first (most recent)
            let config = sessionStorage.getItem('brandConfig');
            
            // Fallback to localStorage
            if (!config) {
                config = localStorage.getItem('brandConfig');
            }
            
            // Parse and return config or default
            if (config) {
                try {
                    return JSON.parse(config);
                } catch (e) {
                    console.error('Error parsing brand config:', e);
                }
            }
            
            // Return default config
            return {
                brand: {
                    name: 'Hospital Example',
                    tagline: 'Transformando o cuidado oncológico',
                    website: 'https://www.hospital.com.br',
                    logo: null
                },
                colors: {
                    primary: '#f48120',
                    secondary: '#ff6b35',
                    accent: '#ff8c42'
                },
                theme: 'laranja'
            };
        },
        
        // Apply brand configuration to current page
        apply: function() {
            const config = this.get();
            
            // Apply colors as CSS variables
            if (config.colors) {
                document.documentElement.style.setProperty('--brand-primary', config.colors.primary);
                document.documentElement.style.setProperty('--brand-secondary', config.colors.secondary);
                document.documentElement.style.setProperty('--brand-accent', config.colors.accent);
                document.documentElement.style.setProperty('--brand-gradient', 
                    `linear-gradient(135deg, ${config.colors.primary} 0%, ${config.colors.secondary} 100%)`);
            }
            
            // Update brand name elements
            if (config.brand && config.brand.name) {
                const nameElements = document.querySelectorAll('[data-brand-name]');
                nameElements.forEach(el => {
                    el.textContent = config.brand.name;
                });
            }
            
            // Update tagline elements
            if (config.brand && config.brand.tagline) {
                const taglineElements = document.querySelectorAll('[data-brand-tagline]');
                taglineElements.forEach(el => {
                    el.textContent = config.brand.tagline;
                });
            }
            
            // Update logo elements
            if (config.brand && config.brand.logo) {
                const logoElements = document.querySelectorAll('[data-brand-logo]');
                logoElements.forEach(el => {
                    if (el.tagName === 'IMG') {
                        el.src = config.brand.logo;
                        el.style.display = 'block';
                    } else {
                        el.style.backgroundImage = `url(${config.brand.logo})`;
                    }
                });
                
                // Hide icon placeholders if logo exists
                const iconElements = document.querySelectorAll('[data-brand-icon]');
                iconElements.forEach(el => {
                    el.style.display = 'none';
                });
            }
            
            // Update header gradients
            const gradientElements = document.querySelectorAll('[data-brand-gradient]');
            gradientElements.forEach(el => {
                if (config.colors) {
                    el.style.background = `linear-gradient(135deg, ${config.colors.primary} 0%, ${config.colors.secondary} 100%)`;
                }
            });
            
            // Update primary color elements
            const primaryElements = document.querySelectorAll('[data-brand-primary]');
            primaryElements.forEach(el => {
                if (config.colors) {
                    el.style.color = config.colors.primary;
                }
            });
            
            // Update secondary color elements
            const secondaryElements = document.querySelectorAll('[data-brand-secondary]');
            secondaryElements.forEach(el => {
                if (config.colors) {
                    el.style.color = config.colors.secondary;
                }
            });
            
            // Update border colors
            const borderElements = document.querySelectorAll('[data-brand-border]');
            borderElements.forEach(el => {
                if (config.colors) {
                    el.style.borderColor = config.colors.primary;
                }
            });
            
            // Update background colors
            const bgElements = document.querySelectorAll('[data-brand-bg]');
            bgElements.forEach(el => {
                if (config.colors) {
                    el.style.backgroundColor = config.colors.primary;
                }
            });
            
            console.log('Brand configuration applied:', config.brand.name);
        },
        
        // Listen for configuration updates
        listen: function() {
            const self = this;
            
            // Listen for storage events (from other tabs)
            window.addEventListener('storage', function(e) {
                if (e.key === 'brandConfig' || e.key === 'brandConfigUpdate') {
                    console.log('Brand configuration updated from another tab');
                    self.apply();
                }
            });
            
            // Listen for BroadcastChannel messages if available
            if ('BroadcastChannel' in window) {
                const channel = new BroadcastChannel('brand_config');
                channel.addEventListener('message', function(e) {
                    if (e.data.type === 'update') {
                        console.log('Brand configuration broadcast received');
                        sessionStorage.setItem('brandConfig', JSON.stringify(e.data.config));
                        self.apply();
                    }
                });
            }
            
            // Listen for custom events
            window.addEventListener('brandConfigUpdate', function(e) {
                console.log('Brand configuration custom event received');
                if (e.detail && e.detail.config) {
                    sessionStorage.setItem('brandConfig', JSON.stringify(e.detail.config));
                    self.apply();
                }
            });
        },
        
        // Initialize brand configuration
        init: function() {
            // Apply configuration on load
            this.apply();
            
            // Start listening for updates
            this.listen();
            
            // Re-apply on page visibility change (in case of updates while hidden)
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden) {
                    this.apply();
                }
            });
            
            console.log('Brand Configuration Manager initialized');
        }
    };
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            window.BrandConfig.init();
        });
    } else {
        // DOM is already loaded
        window.BrandConfig.init();
    }
})();