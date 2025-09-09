// Configuração Central da Plataforma Oncológica
// ACCamargo Cancer Center - LAURA Assistant Integration

const PlatformConfig = {
    // Informações da Plataforma
    platform: {
        name: 'Plataforma Integrada de Gestão da Jornada Oncológica com IA',
        version: '1.0.0',
        client: 'ACCamargo Cancer Center',
        technology: 'LAURA Assistant',
        theme: {
            primary: '#2B5F3F',
            secondary: '#ff6b35',
            accent: '#3a8f5f'
        }
    },

    // Módulos do Sistema
    modules: [
        { id: 'patient', name: 'Portal do Paciente', icon: 'fa-user', color: 'green' },
        { id: 'doctor', name: 'Portal Médico', icon: 'fa-user-md', color: 'emerald' },
        { id: 'navigator', name: 'Navegador de Pacientes', icon: 'fa-compass', color: 'teal' },
        { id: 'financial', name: 'Gestão Financeira', icon: 'fa-dollar-sign', color: 'lime' },
        { id: 'wellness', name: 'Bem-estar Integrado', icon: 'fa-heart', color: 'green' },
        { id: 'research', name: 'Pesquisa Clínica', icon: 'fa-microscope', color: 'emerald' },
        { id: 'admin', name: 'Administração', icon: 'fa-cog', color: 'teal' },
        { id: 'prompt', name: 'Engenharia de Prompt', icon: 'fa-robot', color: 'orange' }
    ],

    // Métricas Principais
    metrics: {
        preventedLosses: 2400000, // R$ 2.4M em glosas evitadas
        patients: 847,
        adherenceRate: 87,
        aiAccuracy: 97,
        successRate: 94
    },

    // Configuração do LAURA Assistant
    laura: {
        enabled: true,
        features: {
            anxietySystem: true,
            view360: true,
            actionPlans: true,
            chat: true
        },
        colors: {
            primary: '#ff6b35',
            background: '#fff',
            text: '#333'
        }
    },

    // URLs e Endpoints
    api: {
        baseUrl: window.location.origin,
        endpoints: {
            health: '/api/health',
            patient: '/api/patient',
            doctor: '/api/doctor',
            navigator: '/api/navigator',
            financial: '/api/financial',
            wellness: '/api/wellness',
            research: '/api/research',
            admin: '/api/admin',
            ai: '/api/ai'
        }
    },

    // Funcionalidades Ativas
    features: {
        aiConcerns: true,
        actionPlans: true,
        financialAnalysis: true,
        similarCases: true,
        taskDelegation: true,
        reviewScheduling: true
    }
};

// Exportar configuração globalmente
window.PlatformConfig = PlatformConfig;