// assistant.js

class AssistantManager {
    constructor() {
        this.assistantBtn = document.getElementById('assistantBtn');
        this.assistantMenu = document.getElementById('assistantMenu');
        this.initialized = false;
    }

    /**
     * Inicializa el asistente si los elementos necesarios están presentes
     */
    initialize() {
        // Verifica si los elementos necesarios existen
        if (!this.assistantBtn || !this.assistantMenu || this.initialized) {
            return;
        }

        this.initialized = true;
        this.setupEventListeners();
    }

    /**
     * Configura los event listeners para el asistente
     */
    setupEventListeners() {
        // Maneja el clic en el botón del asistente
        this.assistantBtn.addEventListener('click', () => {
            this.assistantMenu.classList.toggle('show');
        });

        // Cierra el menú cuando se hace clic fuera
        document.addEventListener('click', (event) => {
            if (!this.assistantBtn.contains(event.target) && 
                !this.assistantMenu.contains(event.target)) {
                this.assistantMenu.classList.remove('show');
            }
        });
    }

    /**
     * Cierra el menú del asistente
     */
    closeMenu() {
        if (this.assistantMenu) {
            this.assistantMenu.classList.remove('show');
        }
    }
}

/**
 * Activa la pestaña correspondiente en el modal de servicios
 * @param {string} tabId - ID de la pestaña a activar
 */
function activateTab(tabId) {
    // Cerrar el menú del asistente
    const assistantMenu = document.getElementById('assistantMenu');
    if (assistantMenu) {
        assistantMenu.classList.remove('show');
    }
    
    // Verificar si Bootstrap está disponible
    if (typeof bootstrap === 'undefined') {
        console.warn('Bootstrap no está disponible');
        return;
    }

    // Esperar a que el modal se abra y luego activar la pestaña
    setTimeout(() => {
        const tabElement = document.querySelector(`button[data-bs-target="#${tabId}"]`);
        if (tabElement) {
            try {
                const tab = new bootstrap.Tab(tabElement);
                tab.show();
            } catch (error) {
                console.warn('Error al activar la pestaña:', error);
            }
        }
    }, 150);
}

// Crear e inicializar el asistente cuando el DOM esté listo
let assistantInstance;
document.addEventListener('DOMContentLoaded', () => {
    assistantInstance = new AssistantManager();
    assistantInstance.initialize();
});