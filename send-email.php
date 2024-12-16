<?php
header('Content-Type: application/json');

// Obtener datos del formulario
$data = json_decode(file_get_contents('php://input'), true);

// Email de destino (tu email)
$to = "ventas@malemaxsa.com";

// Preparar asunto según tipo de formulario
$subject = $data['tipo'] === 'cotizacion' ? 'Nueva Solicitud de Cotización' : 'Nueva Solicitud de Asesoramiento';

// Construir el cuerpo del email
$message = "Detalles de la solicitud:\n\n";
$message .= "Nombre: " . $data['nombre'] . "\n";
$message .= "Email: " . $data['email'] . "\n";
$message .= "Teléfono: " . $data['telefono'] . "\n";
$message .= "Empresa: " . $data['empresa'] . "\n";

if ($data['tipo'] === 'cotizacion') {
    $message .= "Producto: " . $data['producto'] . "\n";
} else {
    $message .= "Tipo de Asesoramiento: " . $data['tipoAsesoria'] . "\n";
}

$message .= "\nMensaje:\n" . $data['mensaje'];

// Headers del email
$headers = "From: " . $data['email'] . "\r\n";
$headers .= "Reply-To: " . $data['email'] . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar email
try {
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Email enviado correctamente']);
    } else {
        throw new Exception('Error al enviar el email');
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>