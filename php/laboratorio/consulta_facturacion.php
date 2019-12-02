<?php
$ruta="python ../../py/laboratorio/consulta_facturacion.py";
if(isset($_POST['ncf'])){ 
	$ncf=$_POST['ncf'];
	#exec — Ejecutar un programa externo, se ejecuta el archivo py y le mando un dato
	$json= exec("python ../../py/laboratorio/consulta_facturacion.py $ncf" );
	#iconv — Convierte un string a la codificación de caracteres indicada (UTF-8)
	echo iconv("windows-1250", "UTF-8", $json);
}

if(isset($_POST['ars'])){ 
	$ars=$_POST['ars'];
	#exec — Ejecutar un programa externo, se ejecuta el archivo py y le mando un dato
	$json= exec("python ../../py/laboratorio/consulta_facturacion.py $ars" );
	#iconv — Convierte un string a la codificación de caracteres indicada (UTF-8)
	echo iconv("windows-1250", "UTF-8", $json);
}

if(isset($_POST['tiponcf'])){ 
	$tiponcf=$_POST['tiponcf'];
	$datenumncf="datenumncf";
	#exec — Ejecutar un programa externo, se ejecuta el archivo py y le mando un dato
	$json=exec("python ../../py/laboratorio/consulta_facturacion.py $datenumncf $tiponcf");
	#iconv — Convierte un string a la codificación de caracteres indicada (UTF-8)
	echo iconv("windows-1250", "UTF-8", $json);
}


?>