<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Datos del formulario
    $formType = $_POST['formType']; // 'cotizacion' o 'asesoria'
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $empresa = $_POST['empresa'];
    $telefono = $_POST['telefono'];
    
    // Email de destino
    $para = "ventas@malemaxsrl.com"; // Reemplaza con tu email
    
    // Configurar asunto y contenido según el tipo de formulario
    if ($formType === 'cotizacion') {
        $producto = $_POST['producto'];
        $mensaje = $_POST['mensaje'];
        
        $asunto = "Nueva solicitud de cotización";
        $contenido = "SOLICITUD DE COTIZACIÓN\n\n";
        $contenido .= "Nombre: " . $nombre . "\n";
        $contenido .= "Email: " . $email . "\n";
        $contenido .= "Empresa: " . $empresa . "\n";
        $contenido .= "Teléfono: " . $telefono . "\n";
        $contenido .= "Producto: " . $producto . "\n\n";
        $contenido .= "Especificaciones y cantidades:\n" . $mensaje;
    } else {
        $tipo = $_POST['tipo'];
        $consulta = $_POST['consulta'];
        
        $asunto = "Nueva solicitud de asesoramiento técnico";
        $contenido = "SOLICITUD DE ASESORAMIENTO\n\n";
        $contenido .= "Nombre: " . $nombre . "\n";
        $contenido .= "Email: " . $email . "\n";
        $contenido .= "Empresa: " . $empresa . "\n";
        $contenido .= "Teléfono: " . $telefono . "\n";
        $contenido .= "Tipo de asesoramiento: " . $tipo . "\n\n";
        $contenido .= "Consulta:\n" . $consulta;
    }
    
    // Cabeceras del email
    $cabeceras = "From: " . $email . "\r\n";
    $cabeceras .= "Reply-To: " . $email . "\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();
    
    // Enviar el email
    if(mail($para, $asunto, $contenido, $cabeceras)) {
        $respuesta = array(
            'status' => 'success',
            'message' => '¡Mensaje enviado correctamente!'
        );
    } else {
        $respuesta = array(
            'status' => 'error',
            'message' => 'Hubo un error al enviar el mensaje.'
        );
    }
    
    // Devolver respuesta como JSON
    header('Content-Type: application/json');
    echo json_encode($respuesta);
    exit;
}
?>