// Función para disparar evento de conversión de Google Ads
function trackWhatsAppConversion() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17200535881/IRNHCNqc8d0aEMmy7YlA'
        });
    }
}

// Función para agregar tracking a enlaces de WhatsApp
function addWhatsAppTracking() {
    // Buscar todos los enlaces de WhatsApp
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Disparar evento de conversión antes de abrir WhatsApp
            trackWhatsAppConversion();
            
            // Continuar con la navegación normal
            // No prevenimos el comportamiento por defecto para que el enlace funcione normalmente
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    addWhatsAppTracking();
}); 