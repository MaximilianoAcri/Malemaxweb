document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.promo-banner');
    let lastScrollTop = 0;
    const scrollThreshold = 10; // Reducido para que aparezca con el mínimo movimiento
    let scrollTimeout;

    // Función para cerrar el banner
    function closeBanner() {
        banner.classList.remove('show');
        setTimeout(() => {
            banner.style.display = 'none';
        }, 300);
    }

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Limpiar el timeout anterior si existe
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        // Usar debounce para evitar múltiples llamadas
        scrollTimeout = setTimeout(function() {
            if (scrollTop > scrollThreshold) {
                banner.classList.add('show');
            } else {
                banner.classList.remove('show');
            }
        }, 10); // Reducido el delay para una respuesta más rápida
        
        lastScrollTop = scrollTop;
    });

    // Mostrar el banner con animación
    setTimeout(() => {
        banner.classList.add('show');
    }, 1000);

    // Verificar si es dispositivo móvil
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Ocultar el banner después de 5 segundos en móvil
        setTimeout(closeBanner, 5000);
    }

    // Cerrar banner al hacer click en el botón de cierre
    const closeButton = document.querySelector('.promo-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeBanner);
    }

    // Cerrar banner al hacer click en el botón de cotizar
    const promoButton = document.querySelector('.btn-promo');
    if (promoButton) {
        promoButton.addEventListener('click', closeBanner);
    }
}); 