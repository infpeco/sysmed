<?php

include '../conectar.php';

$conexion = new mysqli($server, $usuario, $password, $db);

if ($conexion -> connect_errno)
{
	die("Fallo la conexion:(".$conexion -> mysqli_connect_errno().")".$conexion-> mysqli_connect_error());
}

$valor = $conexion -> real_escape_string ($_POST['Codigo']);

$query = "SELECT nombre, apellido, alergia, motivo, fechaEntrada  FROM _emergencia WHERE nombre= '$valor'";
$resultado = $conexion->query ($query);


if ($resultado) {
    $fila = mysqli_fetch_array($resultado);
    $myArray = array($fila);
    
  echo json_encode($myArray);

} else {
    echo "Ha sucedio un error inesperado".mysqli_error($conexion);
}


?>
