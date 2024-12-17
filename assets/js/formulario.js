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
                // Mostrar mensaje de éxito
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Nos pondremos en contacto contigo pronto.',
                    confirmButtonColor: '#c50d0d'
                });
                
                // Limpiar el formulario
                form.reset();
                
                // Cerrar el modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('serviciosModal'));
                modal.hide();
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