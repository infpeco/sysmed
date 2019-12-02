<?php
if(isset($_POST['Pruebagendetalle'])){ 
	$prueba=$_POST['Pruebagendetalle'];
	$json= exec("python ../../py/laboratorio/consulta_genfacturacion.py $prueba" );
	echo iconv("windows-1250", "UTF-8", $json);
	}
if(isset($_POST['Medicogendetalle'])){ 
	$medico=$_POST['Medicogendetalle'];
	$json= exec("python ../../py/laboratorio/consulta_genfacturacion.py $medico" );
	echo iconv("windows-1250", "UTF-8", $json);
	}

if(isset($_POST['Pacientegendetalle'])){ 
	$paciente=$_POST['Pacientegendetalle'];
	$json= exec("python ../../py/laboratorio/consulta_genfacturacion.py $paciente" );
	echo iconv("windows-1250", "UTF-8", $json);
	}


?>