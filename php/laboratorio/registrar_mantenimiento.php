<?php
include 'conexiondb.php';
//REGISTRAR PRUEBA
if(isset($_POST['nomprueba'])){    
   $nombre = $_POST['nomprueba'];
    $departamento = $_POST['iddepartamento'];
    $estado = $_POST['estprueba'];
    $sql = "INSERT INTO `lab_prueba`(`nombre_labprueba`, `estado_labprueba`, `iddepartamento_labdepartamento`) VALUES ('$nombre',$estado,$departamento)";
  if(mysqli_query($result, $sql)){echo "Insertado";} 
  else {
    echo "ERROR: Could not able to execute $sql. ";
    echo (mysqli_error($result));
  }
}
//REGISTRAR MUESTRA
if(isset($_POST['nommuestra'])){    
  $nombre=$_POST['nommuestra'];
    $detalle=$_POST['detmuestra'];
    $idprueba=$_POST['prueba'];
    $medida=$_POST['umedida'];
    $minimo=$_POST['vminimo'];
    $maximo=$_POST['vmaximo'];
    $estado = $_POST['estmuestra'];
    $sql = "INSERT INTO `lab_muestra`(`nombre_labmuestra`, `detalle_labmuestra`,`idprueba_labprueba`,`idumedida_labnidadmedida`,`vminimo_labmuestra`,`vmaximo_labmuestra`,`estado_labmuestra`) VALUES ('$nombre','$detalle',$idprueba,$medida, $minimo,$maximo,$estado)";
  if(mysqli_query($result, $sql)){echo "Insertado";} 
  else {
    echo "ERROR: Could not able to execute $sql. ";
    echo (mysqli_error($result));
  }
}

//REGISTRAR UMEDIDA
if(isset($_POST['nomumedida'])){    
   $nombre = $_POST['nomumedida'];
   $abreviatura=$_POST['abvumedida'];
   $detalle=$_POST['detumedida'];
   $estado = $_POST['estumedida'];
   $sql = "INSERT INTO `lab_unidadmedida`(`nombre_labumedida`, `abv_labumedida`, `detalle_labumedida`, `estado_labumedida`) VALUES ('$nombre','$abreviatura','$detalle',$estado)";
  if(mysqli_query($result, $sql)){echo "Insertado";} 
  else {
    echo "ERROR: Could not able to execute $sql. ";
    echo (mysqli_error($result));
  }
    
}
//REGISTRAR UNIDAD DE MEDIDA
if(isset($_POST['nomars'])){    
   $nombre = $_POST['nomars'];
    $estado = $_POST['estars'];
    $sql = "INSERT INTO `lab_ars`(`nombre_labars`, `estado_labars`) VALUES ('$nombre',$estado)";
  if(mysqli_query($result, $sql)){echo "Insertado";} 
  else {
    echo "ERROR: Could not able to execute $sql. ";
    echo (mysqli_error($result));
  }
    
}

//REGISTRAR NCF
if(isset($_POST['nomncf'])){    
  $nombre=$_POST['nomncf'];
    $abreviatura=$_POST['abvncf'];
    $fecha=$_POST['fechancf'];
    $cantidad=$_POST['cantidadncf'];
    $primero=$_POST['prisecncf'];
    $ultimo=$_POST['ultsecncf'];
    $estado = $_POST['estncf'];
    $sql = "INSERT INTO `lab_ncf`(`nombre_labncf`, `abreviatura_labncf`, `fechaven_labncf`,`cantidad_labncf`, `prisecuencia_labncf`, `ultsecuencia_labncf`, `estado_labncf`) VALUES ('$nombre','$abreviatura','$fecha',$cantidad, $primero,$ultimo,$estado)";
  if(mysqli_query($result, $sql)){echo "Insertado";} 
  else {
    echo "ERROR: Could not able to execute $sql. ";
    echo (mysqli_error($result));
  }
}
?>