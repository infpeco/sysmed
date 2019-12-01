<?php
include '../conectar.php';

if(isset($_POST ['nombreR'])){  

    $nombreR = $_POST['nombreR'];
    $apellidoR = $_POST['apellidoR'];
    $alergiaR = $_POST['alergiaR'];
    $doctor = $_POST['doctor'];
    $alta = $_POST['alta'];
    $diasIncapacitado = $_POST['diasIncapacitado'];
    $diagnosticoDef = $_POST['diagnosticoDef'];
    $consejo = $_POST['consejo'];
    $referimiento = $_POST['referimiento'];
    $anamnesis = $_POST['anamnesis'];
    $diagnosticoR = $_POST['diagnosticoR'];
    $evolucion = $_POST['evolucion'];
    $examenFisicoR = $_POST['examenFisicoR'];
    $tratamientoR = $_POST['tratamientoR'];
    $motivoR = $_POST['motivoR'];
    $condiciones = $_POST['condiciones'];
    $fechaR = $_POST['fecha'];

    
    $SQL = "INSERT INTO _emergenciar (nombreR, apellidoR, alergiaR, doctor, alta, 
    dias_incapacidad, diagnostico_def, consejo, referimiento, anamnesis, diagnosticoR, 
    evolucion, examen_fisicoR, tratamientoR, motivoR, condiciones, fecha) 
    VALUES('$nombreR', '$apellidoR', '$alergiaR', '$doctor', '$alta', 
    '$diasIncapacitado', '$diagnosticoDef', '$consejo', '$referimiento', '$anamnesis', 
    '$diagnosticoR', '$evolucion', '$examenFisicoR', '$tratamientoR', '$motivoR', '$condiciones', '$fechaR')";

    $query = mysqli_query ($result, $SQL);
    
    if(!$query){
        die("Algo anda mal");
    }else{
        echo "Registro completado";
    }
}

?>