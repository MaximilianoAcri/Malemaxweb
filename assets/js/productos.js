// Datos de productos
const productDetails = {

'bulk-liner': {
    title: 'Sistema Bulk Liner',
    image: './assets/img/FOTOS/bulk liner.png',
    description: `
        <p class="lead">Sistema de protección superior para envíos de productos granulados o en polvo.</p>
        
        <div class="overview-section">
            <p>El Bulk Liner es la solución ideal para el transporte de productos a granel, garantizando un sistema de almacenamiento 
            libre de contaminación para productos sólidos pertenecientes a las industrias alimenticia, farmacéutica, química y mineral.</p>
        </div>

        <div class="features-section mt-4">
            <h4>Características</h4>
            <ul>
                <li>Protección total contra humedad y contaminantes</li>
                <li>Sistema de carga y descarga optimizado</li>
                <li>Compatible con contenedores estándar</li>
                <li>Material de grado alimenticio disponible</li>
                <li>Barrera contra factores ambientales</li>
            </ul>
        </div>

        <div class="benefits-section mt-4">
            <h4>Ventajas</h4>
            <ul>
                <li>Transporte rápido y limpio</li>
                <li>Máxima protección del producto</li>
                <li>Reducción de costos logísticos</li>
                <li>Fácil instalación y uso</li>
            </ul>
        </div>
    `
},
'bolsas': {
    title: 'Bolsas y Embalajes',
    image: './assets/img/FOTOS/Bolsareco-producto-bolsas.png',
    description: `
        <p class="lead">Soluciones de embalaje versátiles y económicas para diversos usos.</p>
        
        <div class="overview-section">
            <p>Ofrecemos una amplia gama de bolsas diseñadas para satisfacer diferentes necesidades de 
            almacenamiento y transporte, con opciones laminadas y sin laminar.</p>
        </div>

        <div class="types-section mt-4">
            <h4>Tipos Disponibles</h4>
            <ul>
                <li>Bolsas Laminadas
                    <ul>
                        <li>Mayor resistencia y durabilidad</li>
                        <li>Protección adicional contra humedad</li>
                    </ul>
                </li>
            </ul>
        </div>
    `
},
'cubre-cerco': {
    title: 'Cubre Cerco',
    image: './assets/img/FOTOS/cerco.jpeg',
    description: `
        <p class="lead">Solución profesional para cerramientos perimetrales.</p>
        
        <div class="specs-section">
            <h4>Especificaciones Técnicas</h4>
            <ul>
                <li>Material: RAFIA DE POLIPROPILENO</li>
                <li>Color: Verde Inglés</li>
                <li>Ancho: 1,85 Mts</li>
                <li>Peso: 87 Gr x Mt2</li>
                <li>Vida Útil: 4 Años</li>
                <li>Tratamiento UV para mayor durabilidad</li>
            </ul>
        </div>

        <div class="applications-section mt-4">
            <h4>Aplicaciones</h4>
            <ul>
                <li>Cerramientos perimetrales en barrios cerrados y countries</li>
                <li>Instituciones educativas</li>
                <li>Complejos deportivos</li>
                <li>Obras en construcción</li>
                <li>Perímetros industriales</li>
            </ul>
        </div>
    `
},
'disenos-personalizados': {
    title: 'Diseños Personalizados',
    image: '/assets/img/FOTOS/diseño.png',
    description: `
        <p class="lead">Desarrollamos soluciones a medida según sus necesidades específicas.</p>
        
        <div class="overview-section">
            <p>Nuestro equipo técnico trabaja en estrecha colaboración con cada cliente para crear 
            productos que se adapten perfectamente a sus requerimientos particulares.</p>
        </div>

        <div class="services-section mt-4">
            <h4>Servicios</h4>
            <ul>
                <li>Asesoramiento técnico especializado</li>
                <li>Desarrollo de prototipos</li>
                <li>Pruebas de materiales</li>
                <li>Diseños exclusivos</li>
                <li>Adaptación de productos existentes</li>
            </ul>
        </div>

        <div class="process-section mt-4">
            <h4>Proceso de Desarrollo</h4>
            <ol>
                <li>Análisis de necesidades específicas</li>
                <li>Propuesta técnica y económica</li>
                <li>Desarrollo de prototipo</li>
                <li>Pruebas y ajustes</li>
                <li>Producción final</li>
            </ol>
        </div>
    `
},


};

// Inicialización cuando el documento está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    initializeMobileNav();
    showProduct('bulk-liner');
});

// Función de inicialización
function initializeProducts() {
// Agregar listeners a los elementos
document.querySelectorAll('.product-list-item').forEach(item => {
    item.addEventListener('click', function(e) {
        const productId = this.getAttribute('data-product-id');
        if (productId) {
            showProduct(productId);
            e.stopPropagation();
        }
    });
});

// Inicializar estado de los subproductos
document.querySelectorAll('.sub-products').forEach(el => {
    el.style.display = 'none';
});
}

// Función para mostrar producto
function showProduct(productId) {
    // Si es big-bags-general, solo actualizamos el contenido sin redirección
    if (productId === 'big-bags-general') {
        const product = productDetails[productId];
        if (!product) {
            console.error('Producto no encontrado:', productId);
            return;
        }

        // Asegurar que el submenú esté visible
        const subItemsContainer = document.querySelector('.mobile-nav-scroll.sub-items');
        if (subItemsContainer) {
            subItemsContainer.style.display = 'flex';
            subItemsContainer.style.maxHeight = '500px';
        }

        // Actualizar contenido con animación
        const detailElement = document.getElementById('product-detail');
        detailElement.style.opacity = '0';

        setTimeout(() => {
            detailElement.innerHTML = `
                <div class="product-detail-header mb-4">
                    <img src="${product.image}" alt="${product.title}" class="img-fluid mb-4">
                    <h2 class="h3 mb-3">${product.title}</h2>
                </div>
                <div class="product-detail-body">
                    ${product.description}
                </div>
            `;
            detailElement.style.opacity = '1';
        }, 200);
        return;
    }

    // Para otros productos, mantener el comportamiento normal
    document.querySelectorAll('.product-list-item').forEach(item => {
        item.classList.remove('active');
    });

    const selectedItem = document.querySelector(`[data-product-id="${productId}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');

        // Mantener el submenú visible
        const subItemsContainer = document.querySelector('.mobile-nav-scroll.sub-items');
        if (subItemsContainer) {
            subItemsContainer.style.display = 'flex';
            subItemsContainer.style.maxHeight = '500px';
        }

        // Mantener el botón de Big Bags activo
        const bigBagsButton = document.querySelector('.mobile-nav-item[data-category="big-bags"]');
        if (bigBagsButton) {
            bigBagsButton.classList.add('active');
        }
    }

    // Obtener y mostrar detalles del producto
    const product = productDetails[productId];
    if (!product) {
        console.error('Producto no encontrado:', productId);
        return;
    }

    // Actualizar contenido con animación
    const detailElement = document.getElementById('product-detail');
    detailElement.style.opacity = '0';

    setTimeout(() => {
        detailElement.innerHTML = `
            <div class="product-detail-header mb-4">
                <img src="${product.image}" alt="${product.title}" class="img-fluid mb-4">
                <h2 class="h3 mb-3">${product.title}</h2>
            </div>
            <div class="product-detail-body">
                ${product.description}
            </div>
        `;
        detailElement.style.opacity = '1';

        // Scroll en móviles
        if (window.innerWidth < 992) {
            detailElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, 200);
}

// Función para manejar la navegación con teclado
function handleKeyboardNavigation() {
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focused = document.activeElement;
        if (focused.classList.contains('product-list-item')) {
            focused.click();
            e.preventDefault();
        }
    }
});
}

// Inicializar navegación con teclado
handleKeyboardNavigation();

function toggleCategory(event, categoryId) {
    event.stopPropagation();
    const subProducts = document.getElementById(categoryId);
    const toggleIcon = event.currentTarget.querySelector('.toggle-icon');
    
    if (subProducts) {
        const isHidden = subProducts.style.display === 'none';
        
        // Mostrar/ocultar subproductos
        subProducts.style.display = isHidden ? 'block' : 'none';
        subProducts.classList.toggle('show', isHidden);
        
        // Rotar ícono
        toggleIcon.classList.toggle('active', isHidden);

        // Si estamos abriendo, mostrar información general
        if (isHidden) {
            showProduct('big-bags-general');
        }
    }
}

// Inicialización: asegurar que los sub-productos estén ocultos inicialmente
document.addEventListener('DOMContentLoaded', () => {
    const allSubProducts = document.querySelectorAll('.sub-products');
    allSubProducts.forEach(sub => {
        if (!sub.classList.contains('show')) {
            sub.style.display = 'none';
        }
    });
});

// Función para rotar los títulos del CTA
function rotateCTATitles() {
    const titles = document.querySelectorAll('.rotating-titles h2');
    let currentIndex = 0;

    function showNextTitle() {
        titles[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % titles.length;
        titles[currentIndex].classList.add('active');
    }

    // Rotar cada 3 segundos
    setInterval(showNextTitle, 3000);
}

// Inicializar la rotación de títulos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    rotateCTATitles();
    // ... resto del código existente ...
});

// Función para manejar la navegación móvil
function initializeMobileNav() {
    const bigBagsButton = document.querySelector('.mobile-nav-item[data-category="big-bags"]');
    const allNavItems = document.querySelectorAll('.mobile-nav-item');
    const productDetailSection = document.getElementById('product-detail');

    // Evento para el botón principal de Big Bags
    if (bigBagsButton) {
        bigBagsButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showProduct('big-bags-general');
        });
    }

    // Evento para otros items de navegación
    allNavItems.forEach(item => {
        if (item !== bigBagsButton) {
            const productId = item.getAttribute('data-product-id');
            if (productId) {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    // Desactivamos otros menús
                    allNavItems.forEach(navItem => {
                        navItem.classList.remove('active');
                    });
                    // Activamos el menú seleccionado
                    item.classList.add('active');
                    
                    showProduct(productId);
                    if (productDetailSection) {
                        // Ajustamos el scroll para asegurar que el contenido sea visible
                        const headerOffset = 100;
                        const elementPosition = productDetailSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileNav();
    // ... existing code ...
});