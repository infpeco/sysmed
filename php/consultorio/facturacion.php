<?php
Header('Access-Control-Allow-Origin: *');
include '../conectar.php';

if (isset($_POST['fecha'])){
   $fecha = $_POST['fecha'];
   $id_consulta = $_POST['id_consulta']; 
   $ars= $_POST['ars'];  
   $comentario = $_POST['comentario']; 
   $monto = $_POST['monto'];
   $no_poliza = $_POST['no_poliza'];
   $no_reclamacion = $_POST['no_reclamacion'];
   $monto_cobertura = $_POST['monto_cobertura'];
   $total_factura = $_POST['total_factura'];
   $condicion_pago= $_POST['condicion_pago'];
   $total_recibido= $_POST['total_recibido'];
   $no_referencia= $_POST['no_referencia'];
   $total_devuelto= $_POST['total_devuelto'];
  
   $SQL = "INSERT INTO facturacion(fecha, id_consulta, ars, comentario, monto, 
   no_poliza,no_reclamacion, monto_cobertura, total_factura, condicion_pago, total_recibido, no_referencia, total_devuelto )
   VALUES (' $fecha',' $id_consulta',' $ars ',' $comentario ',' $monto','  $no_poliza','$no_reclamacion ',
   '  $monto_cobertura','   $total_factura  ','$condicion_pago ',' $total_recibido ',' $no_referencia','   $total_devuelto ')";

   $query =  mysqli_query($enlace,  $SQL );

   if(!$query){
      echo  " hay un error ";
   }else{
      echo ("registro exitoso..");
   }
   



}


   






?>