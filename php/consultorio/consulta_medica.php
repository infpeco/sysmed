<?php
Header('Access-Control-Allow-Origin: *');
include '../conectar.php';

if (isset($_POST['nombre'])){
   $referencia = $_POST['referencia'];
   $nombre = $_POST['nombre']; 
   $apellido= $_POST['apellido'];  
   $telefono = $_POST['telefono']; 
   $fecha = $_POST['fecha'];
   $doctor = $_POST['doctor'];
   $tipo_paciente = $_POST['tipo_paciente'];
   $comentario = $_POST['comentario'];
   $diagnostico = $_POST['diagnostico'];
   $receta_medica = $_POST['receta_medica'];
  
   $SQL = "INSERT INTO consultamedica(referencia, nombre, apellido, telefono, fecha, doctor, 
   tipo_paciente, comentario, diagnostico, receta_medica)
   VALUES (' $referencia','$nombre',' $apellido',' $telefono','$fecha','$doctor',' $tipo_paciente',
   '$comentario',' $diagnostico',' $receta_medica')";

   $query =  mysqli_query($enlace,  $SQL );

   if(!$query){
      echo  " hay un error ";
   }else{
      echo ("registro exitoso..");
   }
   



}


   






?>