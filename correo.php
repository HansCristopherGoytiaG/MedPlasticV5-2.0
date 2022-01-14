<?php

$destinatario = 'medplasticperu@gmail.com';

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$celular = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$header = "Enviado desde la pagina medplasticpe.com";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;




$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nCelular: " . $celular . "\nMensaje: " . $mensaje;

mail($destinatario, "Enviado desde medplasticpe.com", $contenido);
echo "<script>alert('Sugerencia enviada con éxito ')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";