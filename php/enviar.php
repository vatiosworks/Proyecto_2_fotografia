<?php

// CTRL+K+C Comentario de linea

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
$datatime = date("Y-m-d H:i:s");


/* mensaje concatenado para enviar por correo */
$contenido = "Fecha de envío: ".$datatime."\nIP: ".$ip."\nNombre: ".$nombre. "\nCorreo: ".$correo."\nTeléfono: ".$telefono. "\nMensaje: ".$mensaje;

$cabecera = 'From:info@webda.eus' ."\r\n".'X-Mailer: PHP/'.phpversion();

/* 9- enviar correo de confirmación */
mail($destino,"Consulta de la Web",$contenido,$cabecera);/*correo que recibo yo*/
mail($destino,"Consulta de la Web",~$contenido,$cabecera);/* correo que recibe el cliente */

header("location:../index.html?enviado=correo enviado")

/* 10- redirigir a gracias.html y salir de aqui*/






// limpiamos de cualquier caracter usado en scripts maliciosos
$comprobacion->filtrarValorLight($correo);
// combamos que el correo sea un correo
// llamamos a la función de la clase comprobaciones
if(!$comprobacion->validar_email($correo)){
    header("location:../index.html?fallo=3#hitoContacto");
    die;
}

//VALIDACIONES DE TELÉFONO
//comprobamos que el teléfono no venga vació
if($comprobacion->comprobarVacio($telefono)){
    header("location:../index.html?fallo=4#hitoContacto");
}
//limpiamos de cualquier caracter usado en scripts maliciosos y quitamos espacios al número
$comprobacion->filtrarValor($telefono);
//comprobamos si es número
if(!$comprobacion->validar_numero($telefono)){
    header("location:../index.html?fallo=6#hitoContacto");
    die;
}
//limpiamos de cualquier caracter usado en scripts maliciosos
$comprobacion->filtrarValorLigth($mensaje);

//fin de comprobaciones en PHP----------


?>