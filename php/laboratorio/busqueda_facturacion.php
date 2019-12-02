<?php
$ruta="python ../../py/laboratorio/busqueda_facturacion.py";
if(isset($_POST['busquedaprueba'])){ 
	$busquedaprueba=$_POST['busquedaprueba'];
	$prueba="Prueba";
	$json= exec("python ../../py/laboratorio/busqueda_facturacion.py $prueba $busquedaprueba" );
	echo iconv("windows-1250", "UTF-8", $json);
	}
if(isset($_POST['busquedapruebadet'])){ 
	$busquedapruebadet=$_POST['busquedapruebadet'];
	$prueba=$_POST['prueba'];
	$json= exec("python ../../py/laboratorio/busqueda_facturacion.py $prueba $busquedapruebadet" );
	echo iconv("windows-1250", "UTF-8", $json);
	}

	if(isset($_POST['busquedamedico'])){ 
	$busquedamedico=$_POST['busquedamedico'];
	$medico="Medico";
	$json= exec("python ../../py/laboratorio/busqueda_facturacion.py $medico $busquedamedico" );
	echo iconv("windows-1250", "UTF-8", $json);
	}
if(isset($_POST['busquedamedicodet'])){ 
	$busquedamedicodet=$_POST['busquedamedicodet'];
	$medico=$_POST['medico'];
	$json= exec("python ../../py/laboratorio/busqueda_facturacion.py $medico $busquedamedicodet" );
	echo iconv("windows-1250", "UTF-8", $json);
	}

	if(isset($_POST['busquedapaciente'])){ 
	$busquedapaciente=$_POST['busquedapaciente'];
	$paciente="Paciente";
	$json= exec("python ../../py/laboratorio/busqueda_facturacion.py $paciente $busquedapaciente" );
	echo iconv("windows-1250", "UTF-8", $json);
	}
if(isset($_POST['busquedapacientedet'])){ 
	$busquedapacientedet=$_POST['busquedapacientedet'];
	$paciente="Pacientedetalle";
	$json= exec("python ../../py/laboratorio/busqueda_facturacion.py $paciente $busquedapacientedet" );
	echo iconv("windows-1250", "UTF-8", $json);
	}
?>