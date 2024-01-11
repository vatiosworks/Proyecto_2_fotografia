<?php
ini('display_errors', 1)


/* 1-RECOGER DATOS Y COMPROBAR */
$destino = "borjafreire11@gmail.com"; 
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$mensaje = $_POST["mensaje"];

/* datos que cogemos de su cliente */
/* ip */
$ip = $_SERVER['REMOTE_ADDR'];

/* datos que cogemos del sistema */
/* fecha */
$datatime = $_SERVER['REMOTE_ADOR'];


/* mensaje concatenado para enviar por correo */
$contenido = "Fecha de envío: ".$datetime. "\nIP: ".$ip."\nNombre: ".$nombre. "\nCorreo: ".$correo. "\nTeléfono: ".$telefono. "\nMensaje: ".$mensaje;

$cabecera = 'From:info@webda.eus' ."\r\n".'X-Mailer: PHP/'.phpversion();

/* 9- enviar correo de confirmación */
mail($destino,"Consulta de la Web",$contenido,$cabecera);/*correo que recibo yo*/

mail($destino,"Consulta de la Web",~$contenido,$cabecera);/* correo que recibe el cliente */

/* 10- redirigir a gracias.html y salir de aqui*/


?>