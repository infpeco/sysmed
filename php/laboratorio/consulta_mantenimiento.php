<?php
if(isset($_POST['departamentonom'])){ 
	$departamento=$_POST['departamentonom'];
	#exec — Ejecutar un programa externo, se ejecuta el archivo py y le mando un dato
	$json= exec("python ../../py/laboratorio/consulta_mantenimiento.py $departamento" );
	#iconv — Convierte un string a la codificación de caracteres indicada (UTF-8)
	echo iconv("windows-1250", "UTF-8", $json);
}

if(isset($_POST['departamentomue'])){ 
	$departamentomue=$_POST['departamentomue'];
	$prueba="Prueba";
	$json= exec("$ruta $prueba $departamentomue" );
	echo iconv("windows-1250", "UTF-8", $json);
	}
if(isset($_POST['unidadmedida'])){ 
	$unidadmedida=$_POST['unidadmedida'];
	$json= exec("$ruta $unidadmedida" );
	echo iconv("windows-1250", "UTF-8", $json);
	}
?>