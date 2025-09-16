// Main application JavaScript
console.log('Plataforma Oncológica Inteligente - Iniciada');

// API Base URL
const API_BASE = window.location.origin + '/api';

// Utility functions
const api = {
  get: async (endpoint) => {
    try {
      const response = await axios.get(`${API_BASE}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
  
  post: async (endpoint, data) => {
    try {
      const response = await axios.post(`${API_BASE}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
};

// Load dashboard statistics
async function loadStatistics() {
  try {
    // This would be real API calls in production
    console.log('Loading platform statistics...');
    
    // Simulate loading animation
    const stats = document.querySelectorAll('[class*="text-4xl"]');
    stats.forEach(stat => {
      if (stat.textContent === '0') {
        const target = Math.floor(Math.random() * 100) + 50;
        animateValue(stat, 0, target, 1000);
      }
    });
  } catch (error) {
    console.error('Failed to load statistics:', error);
  }
}

// Animate number counting
function animateValue(element, start, end, duration) {
  const startTimestamp = Date.now();
  const step = (timestamp) => {
    const progress = Math.min((Date.now() - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    element.textContent = current;
    if (element.textContent.includes('%')) {
      element.textContent = current + '%';
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Check system health
async function checkHealth() {
  try {
    const health = await api.get('/health');
    console.log('System health:', health);
    
    // Update UI indicator if exists
    const indicator = document.getElementById('health-indicator');
    if (indicator) {
      indicator.classList.add('bg-green-500');
      indicator.title = 'Sistema operacional';
    }
  } catch (error) {
    console.error('Health check failed:', error);
  }
}

// Auto-triage chat function
async function sendTriageMessage(message) {
  try {
    const response = await api.post('/ai/auto-triage', {
      message: message,
      sessionId: generateSessionId(),
      patientInfo: {}
    });
    return response;
  } catch (error) {
    console.error('Triage error:', error);
    return {
      response: {
        message: 'Desculpe, ocorreu um erro. Por favor, tente novamente.',
        urgency: 'unknown'
      }
    };
  }
}

// Generate unique session ID
function generateSessionId() {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Initialize tooltips
function initTooltips() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  tooltips.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
      const tooltip = document.createElement('div');
      tooltip.className = 'absolute bg-gray-800 text-white p-2 rounded text-sm z-50';
      tooltip.textContent = e.target.dataset.tooltip;
      document.body.appendChild(tooltip);
      
      const rect = e.target.getBoundingClientRect();
      tooltip.style.left = rect.left + 'px';
      tooltip.style.top = (rect.top - 30) + 'px';
      
      e.target.tooltipElement = tooltip;
    });
    
    element.addEventListener('mouseleave', (e) => {
      if (e.target.tooltipElement) {
        e.target.tooltipElement.remove();
      }
    });
  });
}

// Format date for display
function formatDate(dateString) {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
    type === 'success' ? 'bg-green-500' :
    type === 'error' ? 'bg-red-500' :
    type === 'warning' ? 'bg-yellow-500' :
    'bg-blue-500'
  } text-white`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Handle module navigation
function navigateToModule(module) {
  window.location.href = `/${module}`;
}

// Real-time updates simulation
function startRealTimeUpdates() {
  setInterval(() => {
    // In production, this would be WebSocket or SSE
    console.log('Checking for updates...');
    checkHealth();
  }, 30000); // Check every 30 seconds
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing...');
  
  // Load initial data
  loadStatistics();
  checkHealth();
  initTooltips();
  
  // Start real-time updates
  startRealTimeUpdates();
  
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      console.log('Search shortcut activated');
      // Open search modal
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => modal.classList.add('hidden'));
    }
  });
  
  console.log('Initialization complete');
});

// Export functions for use in other scripts
window.platformAPI = {
  api,
  sendTriageMessage,
  showNotification,
  formatDate,
  navigateToModule
};