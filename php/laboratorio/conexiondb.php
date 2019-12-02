<?php
$server = "localhost";//direccion del servidor
$usuario = "root";//nombre de usuario de la base de datos
$password = "";//contraseña de la base de datos
$db = "sysmed";//nombre de la base de datos que vamos a usar
$result = mysqli_connect($server, $usuario, $password, $db);
if (mysqli_connect_errno()) {echo "Failed to connect to MySQL: " . mysqli_connect_error();}
  else{echo ("Esta conectado ");}
?>