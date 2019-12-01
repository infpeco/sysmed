<?php 

include '../conectar.php';

if(isset($_POST['nombre'])) {

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$identificacion = $_POST['identificacion'];
$sexo = $_POST['sexo'];
$direccion = $_POST['direccion'];
$tipo_dieta = $_POST['tipo_dieta'];
$tipo_sangre = $_POST['tipo_sangre'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$patologia = $_POST['patologia'];
$no_habitacion = $_POST['no_habitacion'];
$nutricionista = $_POST['Nutricionista'];
$seguro_social = $_POST['seguro_social'];
$telefono = $_POST['telefono'];
$piso = $_POST['piso'];
    $query = "INSERT INTO `asignacion2` (`id`, `nombre`, `apellidos`, `identificacion`, `sexo`, `direccion`, `tipo_dieta` , `tipo_sangre`, `seguro_social`, `fecha_nacimiento`, `telefono`, `patologia`, `piso`, `no_habitacion`, `nutricionista`) VALUES (NULL, '$nombre', '$apellido', '$identificacion', '$sexo', '$direccion', '$tipo_dieta', '$tipo_sangre', '$seguro_social', '$fecha_nacimiento', '$telefono', '$patologia', '$piso', '$no_habitacion', '$nutricionista')";
    $resulta = mysqli_query($result, $query);
    if(!$resulta) {
        die('La consulta Fallo');
    }
    echo 'Se ha agregado satisfactoriamente';

}


/*  agregar la enfermera */

if(isset($_POST['enfermera'])) {

    $enfermera = $_POST['enfermera'];
    $apellidos = $_POST['apellidos'];
    $fecha = $_POST['fecha'];
    
        $query = "INSERT INTO `enfermera` (`id`, `enfermera`, `apellidos`, `fecha`) VALUES (NULL, '$enfermera', '$apellidos', '$fecha')";
        $resulta = mysqli_query($result, $query);
        if(!$resulta) {
            die('La consulta Fallo');
        }
        echo 'Se ha agregado satisfactoriamente';
    
    }

?>