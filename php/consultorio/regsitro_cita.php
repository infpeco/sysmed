<?php

include 'conectar.php';

if (isset($_POST['paciente'])){
    $fecha = $_POST['fecha'];
    $paciente = $_POST['paciente'];
    $motivo = $_POST['motivo'];
    $doctor = $_POST['doctor'];
    $fecha_cita = $_POST['fecha_cita'];
    $hora_cita = $_POST['hora_cita'];
    $estado_cita = $_POST['estado_cita'];
    $referencia = $_POST['referencia'];
    $comentario = $_POST['comentario'];

    $SQL = "INSERT INTO cita(fecha, paciente, motivo, doctor, fecha_cita, hora_cita, estado_cita, referencia, comentario) VALUES('$fecha', '$paciente','$motivo','$doctor', '$fecha_cita', '$hora_cita', '$estado_cita', '$referencia','$comentario')";

   $query = mysqli_query($enlace, $SQL);

   if(!$query){
       die("REvisa esto");
   }else{
       echo "Registro exitoso";
   }

}



?>