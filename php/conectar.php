<?php
$server = "localhost";
$usuario = "root";
$password = "nomejoda";
$db = "sysmed";
$result = mysqli_connect($server, $usuario, $password, $db);
if (mysqli_connect_errno()) {  
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }else{

  }
?>