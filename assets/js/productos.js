// Datos de productos
const productDetails = {
    'big-bags-general': {
        title: 'Big Bags',
        image: './assets/img/bolsas-01.png',
        description: `
            <p class="lead">Solución industrial de primer nivel para el almacenamiento y transporte de materiales a granel.</p>
            
            <div class="overview-section">
                <p>Nuestros Big Bags están diseñados para ofrecer máxima seguridad y eficiencia en el manejo de grandes volúmenes. 
                Fabricados con materiales de alta calidad y tecnología avanzada, garantizan la protección y el manejo óptimo de sus productos.</p>
            </div>

            <div class="features-section mt-4">
                <h4>Características Generales</h4>
                <ul>
                    <li>Capacidades desde 500kg hasta 2000kg</li>
                    <li>Fabricación en polipropileno virgen de alta resistencia</li>
                    <li>Factor de seguridad 5:1</li>
                    <li>Diseños testeados para cargas pesadas</li>
                    <li>Opciones con y sin recubrimiento interno</li>
                </ul>
            </div>

            <div class="benefits-section mt-4">
                <h4>Ventajas</h4>
                <ul>
                    <li>Optimización del espacio de almacenamiento</li>
                    <li>Reducción de costos logísticos</li>
                    <li>Manipulación segura y eficiente</li>
                    <li>Protección del producto</li>
                    <li>Versatilidad de uso</li>
                </ul>
            </div>
        `
    },
    'boca-abierta-fondo-cerrado': {
        title: 'Boca Abierta / Fondo Cerrado',
        image: './assets/img/bolsas-01.png',
        description: `
            <p class="lead">Diseño clásico ideal para carga superior y descarga por vuelco completo.</p>
            
            <div class="features-section">
                <h4>Características Específicas</h4>
                <ul>
                    <li>Apertura superior de fácil acceso</li>
                    <li>Base plana reforzada para mayor estabilidad</li>
                    <li>Asas de elevación reforzadas</li>
                    <li>Opción de cierre superior con cuerda</li>
                </ul>
            </div>

            <div class="applications-section mt-4">
                <h4>Aplicaciones Recomendadas</h4>
                <ul>
                    <li>Materiales de construcción</li>
                    <li>Productos agrícolas</li>
                    <li>Minerales</li>
                    <li>Productos industriales a granel</li>
                </ul>
            </div>
        `
    },
    'boca-abierta-valvula': {
        title: 'Boca Abierta / Válvula de Descarga',
        image: './assets/img/bolsas-03.png',
        description: `
            <p class="lead">Combinación perfecta para llenado fácil y descarga controlada.</p>

            <div class="features-section">
                <h4>Características Específicas</h4>
                <ul>
                    <li>Boca superior amplia para llenado eficiente</li>
                    <li>Válvula de descarga de tamaño personalizable</li>
                    <li>Sistema de cierre seguro en la válvula</li>
                    <li>Diseño optimizado para flujo controlado</li>
                </ul>
            </div>

            <div class="applications-section mt-4">
                <h4>Aplicaciones Recomendadas</h4>
                <ul>
                    <li>Productos granulados</li>
                    <li>Materiales que requieren dosificación</li>
                    <li>Industria química</li>
                    <li>Alimentos a granel</li>
                </ul>
            </div>
        `
    },
    'valvula-carga-fondo-cerrado': {
        title: 'Válvula de Carga / Fondo Cerrado',
        image: './assets/img/bolsas-02.png',
        description: `
            <p class="lead">Ideal para sistemas de llenado automatizados con descarga por vuelco.</p>

            <div class="features-section">
                <h4>Características Específicas</h4>
                <ul>
                    <li>Válvula superior compatible con sistemas automáticos</li>
                    <li>Base cerrada y reforzada</li>
                    <li>Diseño hermético para productos sensibles</li>
                    <li>Optimizado para líneas de llenado industrial</li>
                </ul>
            </div>

            <div class="applications-section mt-4">
                <h4>Aplicaciones Recomendadas</h4>
                <ul>
                    <li>Plantas de procesamiento automatizado</li>
                    <li>Productos que requieren protección especial</li>
                    <li>Materiales finos o polvorientos</li>
                    <li>Industria alimenticia</li>
                </ul>
            </div>
        `
    },
// ... continuación de productos anteriores ...
'boca-pollera-fondo-cerrado': {
    title: 'Boca con Pollera / Fondo Cerrado',
    image: './assets/img/bolsas-05.png',
    description: `
        <p class="lead">Máxima protección superior con sistema de descarga tradicional.</p>

        <div class="features-section">
            <h4>Características Específicas</h4>
            <ul>
                <li>Pollera protectora superior</li>
                <li>Sistema de cierre hermético</li>
                <li>Base reforzada para mayor estabilidad</li>
                <li>Protección adicional contra contaminantes</li>
            </ul>
        </div>

        <div class="applications-section mt-4">
            <h4>Aplicaciones Recomendadas</h4>
            <ul>
                <li>Productos que requieren protección superior</li>
                <li>Almacenamiento al aire libre</li>
                <li>Materiales sensibles a la humedad</li>
                <li>Industria química y alimenticia</li>
            </ul>
        </div>
    `
},
'boca-pollera-valvula': {
    title: 'Boca con Pollera / Válvula de Descarga',
    image: './assets/img/bolsas-06.png',
    description: `
        <p class="lead">Combina protección superior con descarga controlada.</p>

        <div class="features-section">
            <h4>Características Específicas</h4>
            <ul>
                <li>Pollera protectora en la parte superior</li>
                <li>Válvula de descarga de fácil operación</li>
                <li>Doble sistema de protección</li>
                <li>Máxima versatilidad operativa</li>
            </ul>
        </div>

        <div class="applications-section mt-4">
            <h4>Aplicaciones Recomendadas</h4>
            <ul>
                <li>Productos que requieren máxima protección</li>
                <li>Materiales de descarga controlada</li>
                <li>Industrias con altos estándares de calidad</li>
                <li>Productos sensibles al ambiente</li>
            </ul>
        </div>
    `
},
'valvula-carga-descarga': {
    title: 'Válvula de Carga / Válvula de Descarga',
    image: './assets/img/bolsas-04.png',
    description: `
        <p class="lead">Sistema completamente cerrado para máximo control y protección.</p>

        <div class="features-section">
            <h4>Características Específicas</h4>
            <ul>
                <li>Válvulas en ambos extremos</li>
                <li>Sistema totalmente hermético</li>
                <li>Compatible con equipos automatizados</li>
                <li>Máxima protección del producto</li>
            </ul>
        </div>

        <div class="applications-section mt-4">
            <h4>Aplicaciones Recomendadas</h4>
            <ul>
                <li>Productos que requieren ambiente controlado</li>
                <li>Materiales peligrosos o sensibles</li>
                <li>Procesos automatizados</li>
                <li>Industrias con requisitos especiales de manipulación</li>
            </ul>
        </div>
    `
},
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
                        <li>Ideal para productos que requieren barrera</li>
                    </ul>
                </li>
                <li>Bolsas Sin Laminar
                    <ul>
                        <li>Solución económica y versátil</li>
                        <li>Excelente ventilación</li>
                        <li>Para productos que no requieren barrera</li>
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
}
};

// Inicialización cuando el documento está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    initializeMobileNav();
    showProduct('big-bags-general');
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
// Actualizar estados activos
document.querySelectorAll('.product-list-item').forEach(item => {
    item.classList.remove('active');
});

const selectedItem = document.querySelector(`[data-product-id="${productId}"]`);
if (selectedItem) {
    selectedItem.classList.add('active');

    // Manejar visibilidad de subproductos
    if (selectedItem.closest('.sub-products')) {
        const subProducts = selectedItem.closest('.sub-products');
        subProducts.style.display = 'block';
        const categoryItem = subProducts.previousElementSibling;
        const toggleIcon = categoryItem.querySelector('.toggle-icon');
        if (toggleIcon) toggleIcon.classList.add('active');
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
    const isHidden = subProducts.style.display === 'none';

    // Mostrar/ocultar subproductos
    subProducts.style.display = isHidden ? 'block' : 'none';
    
    // Rotar ícono
    toggleIcon.classList.toggle('active', isHidden);

    // Si estamos abriendo, mostrar información general
    if (isHidden) {
        showProduct('big-bags-general');
    }
}

function toggleCategory(event, categoryId) {
    const subProducts = document.getElementById(categoryId);
    const toggleIcon = event.currentTarget.querySelector('.toggle-icon');
    
    if (subProducts) {
        subProducts.classList.toggle('show');
        toggleIcon.classList.toggle('active');

        // Si está abriendo, asegurar que el contenido sea visible
        if (subProducts.classList.contains('show')) {
            subProducts.style.display = 'block';
        } else {
            // Esperar a que termine la animación antes de ocultar
            setTimeout(() => {
                if (!subProducts.classList.contains('show')) {
                    subProducts.style.display = 'none';
                }
            }, 300);
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
    const subItemsContainer = document.querySelector('.mobile-nav-scroll.sub-items');
    const mainNavItemsContainer = document.querySelector('.mobile-nav-scroll:not(.sub-items)');
    const allNavItems = document.querySelectorAll('.mobile-nav-item');
    const productDetailSection = document.getElementById('product-detail'); // Referencia a la sección de detalles

    let backButton = null; // Usamos una variable para referenciar el botón Volver

    // Función para gestionar el estado de la barra de navegación móvil
    function setMobileNavState(state, selectedItem = null) { // state: 'default', 'big-bags-subitems', 'single-item'
        if (window.innerWidth > 991.98) return; // Solo aplicar en pantallas pequeñas (lg breakpoint y abajo)

        // Reset general para todos los estados (dentro de la barra)
        allNavItems.forEach(item => {
             if (!item.closest('.mobile-nav-scroll.sub-items')) { // Items principales
                 item.style.display = 'flex';
             }
             item.classList.remove('active'); // Remover clase active de todos
        });
        if (subItemsContainer) subItemsContainer.style.display = 'none'; // Ocultar subitems por defecto

        if (backButton) {
             backButton.remove();
             backButton = null;
        }

        if (state === 'big-bags-subitems') {
            if (bigBagsButton) bigBagsButton.classList.add('active');
            if (subItemsContainer) subItemsContainer.style.display = 'flex'; // Asegurar que se muestre aquí también

             // Ocultar otros items principales excepto Big Bags
             allNavItems.forEach(item => {
                if (item !== bigBagsButton && !item.closest('.mobile-nav-scroll.sub-items') && !item.classList.contains('back-button')) {
                    item.style.display = 'none';
                }
            });

            // Crear y mostrar botón Volver
             backButton = document.createElement('button');
            backButton.className = 'mobile-nav-item back-button';
            backButton.innerHTML = '<i class="bi bi-arrow-left"></i> Volver';
            mainNavItemsContainer.insertBefore(backButton, mainNavItemsContainer.firstChild);
            backButton.addEventListener('click', () => { setMobileNavState('default'); showProduct('big-bags-general'); }); // Al volver, mostrar info general de Big Bags
            backButton.style.display = 'flex';

        } else if (state === 'single-item' && selectedItem) {
             // Ocultar todos los items de la barra excepto el seleccionado
             allNavItems.forEach(item => {
                 if (item !== selectedItem) {
                     item.style.display = 'none';
                 }
             });

            // Crear botón Volver y posicionarlo antes del item seleccionado
             backButton = document.createElement('button');
            backButton.className = 'mobile-nav-item back-button';
            backButton.innerHTML = '<i class="bi bi-arrow-left"></i> Volver';
             // Insertar el botón volver antes del item seleccionado en el contenedor principal de items
             if(selectedItem.closest('.mobile-nav-scroll')){
                 selectedItem.closest('.mobile-nav-scroll').insertBefore(backButton, selectedItem);
             } else {
                  // En caso de que no esté en un scroll container (aunque debería), insertarlo al principio del main nav
                 mainNavItemsContainer.insertBefore(backButton, mainNavItemsContainer.firstChild);
             }
            backButton.addEventListener('click', () => { setMobileNavState('default'); showProduct('big-bags-general'); }); // Al volver, mostrar info general de Big Bags
            backButton.style.display = 'flex'; // Asegurar visibilidad

             // Asegurarse de que el item seleccionado sea visible y activo
             selectedItem.style.display = 'flex';
             selectedItem.classList.add('active');

             // Asegurarse de que el botón Big Bags principal no tenga la clase active en este estado
             if (bigBagsButton) {
                bigBagsButton.classList.remove('active');
             }
        }
        // Para 'default', el reset ya se hizo al inicio de la función
    }

    // Evento para el botón principal de Big Bags
    if (bigBagsButton && subItemsContainer) {
        bigBagsButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            console.log('Big Bags button clicked'); // Log para verificar que el listener se activa

            // Si ya está mostrando subitems, volver al estado default
            if (bigBagsButton.classList.contains('active')) {
                console.log('Big Bags state: Hiding subitems');
                setMobileNavState('default');
                 if (subItemsContainer) subItemsContainer.style.display = 'none'; // Asegurar ocultar
                 console.log('subItemsContainer display after hide:', subItemsContainer.style.display);
            } else {
                 // Si no, mostrar subitems de Big Bags
                console.log('Big Bags state: Showing subitems');
                setMobileNavState('big-bags-subitems');
                // Llamar a showProduct('big-bags-general') al mostrar los subitems
                showProduct('big-bags-general');
                 if (subItemsContainer) subItemsContainer.style.display = 'flex'; // Forzar mostrar aquí también
                 console.log('subItemsContainer display after show:', subItemsContainer.style.display);
            }
             console.log('Big Bags button active class:', bigBagsButton.classList.contains('active'));
        });
    }

    // Evento para todos los items de navegación (principales y subitems) que representan un producto
    allNavItems.forEach(item => {
         // Asegurarse de no agregar listener al botón Big Bags principal o al botón Volver
        if (item !== bigBagsButton && !item.classList.contains('back-button')) {
            const productId = item.getAttribute('data-product-id');
            if (productId) { // Solo agregar listener si el item tiene un product-id
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    // Mostrar el detalle del producto
                    showProduct(productId);

                    // Configurar estado para mostrar solo este item en la barra
                    setMobileNavState('single-item', item); // Pasar el item seleccionado a la función de estado

                    // Desplazarse al panel de detalles del producto
                    if (productDetailSection) {
                         productDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            }
        }
    });

    // Cerrar todo al hacer clic fuera del contenedor principal de la barra móvil
    document.addEventListener('click', (e) => {
        // Verificar si estamos en móvil y si el clic fue fuera del contenedor principal de la barra móvil
        if (window.innerWidth <= 991.98 && !e.target.closest('.mobile-nav-products')) {
            setMobileNavState('default');
        }
    });

    // Manejar redimensionamiento para resetear el estado móvil
    window.addEventListener('resize', () => {
        setMobileNavState('default'); // Resetear al estado default en cualquier redimensionamiento
    });

     // Asegurarse de que la vista inicial sea correcta al cargar la página en móvil
     // Llama a setMobileNavState('default') para configurar la vista inicial correctamente
     setMobileNavState('default');

}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileNav();
    // ... existing code ...
});