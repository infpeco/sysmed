<?php
$ruta="python ../../py/laboratorio/busqueda_mantenimiento.py";
if(isset($_POST['busquedaprueba'])){ 
	$busquedaprueba=$_POST['busquedaprueba'];
	$prueba=$_POST['prueba'];
	$json= exec("python ../../py/laboratorio/busqueda_mantenimiento.py $prueba $busquedaprueba" );
	echo iconv("windows-1250", "UTF-8", $json);
	}
if(isset($_POST['busquedamuestra'])){ 
	$busquedamuestra=$_POST['busquedamuestra'];
	$muestra=$_POST['muestra'];
	$json= exec("python ../../py/laboratorio/busqueda_mantenimiento.py $muestra $busquedamuestra" );
	echo iconv("windows-1250", "UTF-8", $json);
	}
if(isset($_POST['busquedaumedida'])){ 
	$busquedaumedida=$_POST['busquedaumedida'];
	$umedida=$_POST['umedida'];
	$json= exec("python ../../py/laboratorio/busqueda_mantenimiento.py $umedida $busquedaumedida");
	echo iconv("windows-1250", "UTF-8", $json);
	}
if(isset($_POST['busquedaars'])){ 
	$busquedaars=$_POST['busquedaars'];
	$ars=$_POST['ars'];
	$json= exec("python ../../py/laboratorio/busqueda_mantenimiento.py $ars $busquedaars");
	echo iconv("windows-1250", "UTF-8", $json);
	}

if(isset($_POST['busquedancf'])){ 
	$busquedancf=$_POST['busquedancf'];
	$ncf=$_POST['ncf'];
	$json= exec("python ../../py/laboratorio/busqueda_mantenimiento.py $ncf $busquedancf");
	echo iconv("windows-1250", "UTF-8", $json);
	}
?>