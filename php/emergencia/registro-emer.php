<?php
include '../conectar.php';

if(isset($_POST ['nombre'])){  

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $alergia = $_POST['alergia'];
    $motivo = $_POST['motivo'];
    $fechaEntrada = $_POST['fechaEntrada'];
    $parentesco = $_POST['parentesco'];
    $nombreApellido = $_POST['nombreApellido'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $celular = $_POST['celular'];

    $SQL = "INSERT INTO _emergencia (nombre, apellido, alergia, motivo, fechaEntrada, parentesco, nombre_pariente, direccion_pariente, telefono_pariente, celular_pariente) 
    VALUES('$nombre', '$apellido', '$alergia', '$motivo', '$fechaEntrada', '$parentesco', '$nombreApellido', '$direccion', '$telefono', '$celular')";

    $query = mysqli_query ($result, $SQL);
    
    if(!$query){
        die("Algo anda mal");
    }else{
        echo "Registro completado";
    }
}

?>