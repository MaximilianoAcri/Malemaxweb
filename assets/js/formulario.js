// Función para enviar formulario
function enviarFormulario(formId, tipo) {
    const form = document.getElementById(formId);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Deshabilitar botón y mostrar loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Enviando...';

    // Preparar datos
    const formData = {
        tipo: tipo,
        nombre: form.querySelector('[id$="-nombre"]').value,
        email: form.querySelector('[id$="-email"]').value,
        empresa: form.querySelector('[id$="-empresa"]').value,
        telefono: form.querySelector('[id$="-telefono"]').value,
        mensaje: form.querySelector('[id$="-mensaje"]').value
    };

    // Agregar campos específicos según el tipo de formulario
    if (tipo === 'cotizacion') {
        formData.producto = form.querySelector('#cotizacion-producto').value;
    } else {
        formData.tipoAsesoria = form.querySelector('#asesoria-tipo').value;
    }

    // Enviar formulario
    fetch('send-email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado!',
                text: tipo === 'cotizacion' ? 
                      'Te enviaremos la cotización a la brevedad.' : 
                      'Un asesor se pondrá en contacto contigo pronto.',
                confirmButtonColor: '#c50d0d'
            });
            form.reset();
        } else {
            throw new Error(data.message || 'Error al enviar el mensaje');
        }
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.',
            confirmButtonColor: '#c50d0d'
        });
        console.error('Error:', error);
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    });
}

// Event Listeners
document.getElementById('formCotizacion').addEventListener('submit', function(e) {
    e.preventDefault();
    enviarFormulario('formCotizacion', 'cotizacion');
});

document.getElementById('formAsesoria').addEventListener('submit', function(e) {
    e.preventDefault();
    enviarFormulario('formAsesoria', 'asesoria');
});