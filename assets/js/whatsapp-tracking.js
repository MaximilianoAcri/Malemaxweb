// Función para disparar evento de conversión de Google Ads
function trackWhatsAppConversion() {
    if (typeof gtag !== 'undefined') {
        console.log('🎯 Disparando evento de conversión por WhatsApp...');
        gtag('event', 'conversion', {
            'send_to': 'AW-17200535881/IRNHCNqc8d0aEMmy7YlA'
        });
        console.log('✅ Evento de conversión por WhatsApp disparado exitosamente');
    } else {
        console.error('❌ gtag no está disponible para WhatsApp');
    }
}

// Función para agregar tracking a enlaces de WhatsApp
function addWhatsAppTracking() {
    // Buscar todos los enlaces de WhatsApp
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');
    console.log(`🔍 Encontrados ${whatsappLinks.length} enlaces de WhatsApp`);
    
    whatsappLinks.forEach((link, index) => {
        console.log(`📱 Configurando tracking para enlace ${index + 1}: ${link.href}`);
        link.addEventListener('click', function(e) {
            console.log('🖱️ Clic detectado en enlace de WhatsApp');
            // Disparar evento de conversión antes de abrir WhatsApp
            trackWhatsAppConversion();
            
            // Continuar con la navegación normal
            // No prevenimos el comportamiento por defecto para que el enlace funcione normalmente
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando tracking de WhatsApp...');
    addWhatsAppTracking();
    console.log('✅ Tracking de WhatsApp inicializado');
}); 