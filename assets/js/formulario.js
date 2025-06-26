// Función para manejar el envío de formularios
function handleFormSubmit(formId, formType) {
    const form = document.getElementById(formId);
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mostrar indicador de carga
        const submitBtn = this.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
        submitBtn.disabled = true;

        // Recoger los datos del formulario
        const formData = new FormData();
        formData.append('formType', formType);
        formData.append('nombre', this.querySelector(`#${formType}-nombre`).value);
        formData.append('email', this.querySelector(`#${formType}-email`).value);
        formData.append('empresa', this.querySelector(`#${formType}-empresa`).value);
        formData.append('telefono', this.querySelector(`#${formType}-telefono`).value);

        if (formType === 'cotizacion') {
            formData.append('producto', this.querySelector('#cotizacion-producto').value);
            formData.append('mensaje', this.querySelector('#cotizacion-mensaje').value);
        } else {
            formData.append('tipo', this.querySelector('#asesoria-tipo').value);
            formData.append('consulta', this.querySelector('#asesoria-consulta').value);
        }

        // Enviar los datos
        fetch('https://malemaxsrl.com/send-email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Disparar evento de conversión de Google Ads
                if (typeof gtag !== 'undefined') {
                    console.log('🎯 Disparando evento de conversión de Google Ads...');
                    gtag('event', 'conversion', {
                        'send_to': 'AW-17200535881/IRNHCNqc8d0aEMmy7YlA'
                    });
                    console.log('✅ Evento de conversión disparado exitosamente');
                } else {
                    console.error('❌ gtag no está disponible');
                }
                
                // Limpiar el formulario
                form.reset();
                
                // Cerrar el modal si existe
                const modal = bootstrap.Modal.getInstance(document.getElementById('serviciosModal'));
                if (modal) {
                    modal.hide();
                }
                
                // Mostrar mensaje de éxito
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Nos pondremos en contacto contigo pronto.',
                    confirmButtonColor: '#c50d0d',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    timer: 2000, // Auto-cerrar después de 2 segundos
                    timerProgressBar: true
                });
                
                // Redirigir después de 2.5 segundos (un poco más que el timer)
                setTimeout(() => {
                    console.log('🔄 Redirigiendo a página de agradecimiento...');
                    window.location.href = 'gracias.html';
                }, 2500);
            } else {
                throw new Error(data.message);
            }
        })
        .catch(error => {
            // Mostrar mensaje de error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.',
                confirmButtonColor: '#c50d0d'
            });
        })
        .finally(() => {
            // Restaurar el botón
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
}

// Inicializar los manejadores de formularios
document.addEventListener('DOMContentLoaded', function() {
    handleFormSubmit('formCotizacion', 'cotizacion');
    handleFormSubmit('formAsesoria', 'asesoria');
});