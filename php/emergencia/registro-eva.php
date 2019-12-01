<?php
include '../conectar.php';

if(isset($_POST ['nombreE'])){  

    $nombreE = $_POST['nombreE'];
    $apellidoE = $_POST['apellidoE'];
    $alergiaE = $_POST['alergiaE'];
    $motivoE = $_POST['motivoE'];
    $enfermedad = $_POST['enfermedad'];
    $examenFisico = $_POST['examenFisico'];
    $presionAlt = $_POST['presionAlt'];
    $freCardiaca = $_POST['freCardiaca'];
    $freRespiratoria = $_POST['freRespiratoria'];
    $satOxigeno = $_POST['satOxigeno'];
    $tempAxilar = $_POST['tempAxilar'];
    $peso = $_POST['peso'];
    $diagnosticoE = $_POST['diagnosticoE'];
    $tratamientoE = $_POST['tratamientoE'];
    $medicamento = $_POST['medicamento'];
    $pruebas = $_POST['pruebas'];
    $estudios = $_POST['estudios'];
    $fecha = $_POST['fecha'];

    //nombre de la base de datos con los nombres de la tabla y los atributos
    //$SQL = "INSERT INTO _emergencia (nombre, apellido) VALUES('$nombre', '$apellido')";
    $SQL = "INSERT INTO _emergenciae (nombreE, apellidoE, alergiaE, motivoE, enfermedad, 
                        examen_fisico, presion_alterial, fre_cardiaca, fre_respiratoria, sat_oxigeno, 
                        temp_axilar, peso, diagnosticoE, tratamientoE, medicamento, pruebas, estudios, fecha) 
    VALUES('$nombreE', '$apellidoE', '$alergiaE', '$motivoE', '$enfermedad', '$examenFisico', '$presionAlt', 
            '$freCardiaca', '$freRespiratoria', '$satOxigeno', '$tempAxilar', '$peso', '$diagnosticoE', '$tratamientoE', 
            '$medicamento', '$pruebas', '$estudios', '$fecha')";

    $query = mysqli_query ($result, $SQL);
    
    if(!$query){
        die("Algo anda mal");
    }else{
        echo "Registro completado";
    }
}

?>