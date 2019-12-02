<?php
if(isset($_POST['prueba'])){ 
	$prueba=$_POST['prueba'];
	$json= exec("python ../../py/laboratorio/consulta_genmantenimiento.py $prueba" );
	echo iconv("windows-1250", "UTF-8", $json);
	}

if(isset($_POST['muestra'])){ 
	$muestra=$_POST['muestra'];
	$json= exec("python ../../py/laboratorio/consulta_genmantenimiento.py $muestra" );
	echo iconv("windows-1250", "UTF-8", $json);
	}

if(isset($_POST['umedida'])){ 
	$umedida="UnidadMedida";
	$json= exec("python ../../py/laboratorio/consulta_genmantenimiento.py $umedida" );
	echo iconv("windows-1250", "UTF-8", $json);
	}

if(isset($_POST['ars'])){ 
	$ars="ARS";
	$json= exec("python ../../py/laboratorio/consulta_genmantenimiento.py $ars" );
	echo iconv("windows-1250", "UTF-8", $json);
	}

if(isset($_POST['ncf'])){ 
	$ncf="NCF";
	$json= exec("python ../../py/laboratorio/consulta_genmantenimiento.py $ncf" );
	echo iconv("windows-1250", "UTF-8", $json);
	}
?>