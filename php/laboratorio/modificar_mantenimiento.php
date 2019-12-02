<?php
include 'conexiondb.php';
if(isset($_POST['idprueba'])){ 
   $codigo = $_POST['idprueba'];   		$nombre = $_POST['nomprueba'];
   $estado = $_POST['estprueba'];		$departamento = $_POST['iddepartamento'];
   $sql = "UPDATE `lab_prueba` SET `nombre_labprueba`='$nombre',`estado_labprueba`=$estado,`iddepartamento_labdepartamento`=$departamento WHERE `idprueba_lab`= $codigo";
  if(mysqli_query($result, $sql)){echo "Actualizado";} 
  else {
    echo "ERROR: Could not able to execute $sql. ";
    echo (mysqli_error($result));
  }
}

if(isset($_POST['idmuestra'])){ 
   $codigo = $_POST['idmuestra'];   
   $nombre = $_POST['nommuestra'];				$detalle = $_POST['detmuestra'];
   $idprueba= $_POST['prueba'];          		$medida= $_POST['umedida'];
   $minimo= $_POST['vminimo'];           		$maximo= $_POST['vmaximo'];
   $estado= $_POST['estmuestra'];
   $sql = "UPDATE `lab_muestra` SET `nombre_labmuestra`='$nombre',`detalle_labmuestra`='$detalle',`idprueba_labprueba`=$idprueba,`idumedida_labnidadmedida`=$medida,`vminimo_labmuestra`=$minimo,`vmaximo_labmuestra`=$maximo,`estado_labmuestra`=$estado WHERE `idmuestra_lab`=$codigo";
  if(mysqli_query($result, $sql)){echo "Actualizado";} 
  else {
    echo "ERROR: Could not able to execute $sql. ";
    echo (mysqli_error($result));
  }
}
if(isset($_POST['idumedida'])){ 
   $codigo = $_POST['idumedida'];       $nombre = $_POST['nomumedida'];
   $abreviatura = $_POST['abvumedida']; $detalle = $_POST['detumedida'];
   $estado = $_POST['estumedida'];
   $sql = "UPDATE `lab_unidadmedida` SET `nombre_labumedida`='$nombre',`abv_labumedida`='$abreviatura',`detalle_labumedida`='$detalle', estado_labumedida=$estado WHERE `idumedida_lab`= $codigo";
  if(mysqli_query($result, $sql)){echo "Actualizado";} 
  else {
    echo "ERROR: Could not able to execute $sql. ";
    echo (mysqli_error($result));
  }
}
if(isset($_POST['idars'])){
  $codigo = $_POST['idars']; 
  $nombre = $_POST['nomars'];
  $estado = $_POST['estars'];
  $sql = "UPDATE `lab_ars` SET `nombre_labars`='$nombre', `estado_labars`=$estado WHERE `idars_lab`= $codigo";
  if(mysqli_query($result, $sql)){echo "Actualizado";} 
  else {
    echo "ERROR: Could not able to execute $sql. ";
    echo (mysqli_error($result));
  }
}

if(isset($_POST['idncf'])){ 
   $codigo = $_POST['idncf'];       
   $nombre=$_POST['nomncf'];
    $abreviatura=$_POST['abvncf'];
    $fecha=$_POST['fechancf'];
    $cantidad=$_POST['cantidadncf'];
    $primero=$_POST['prisecncf'];
    $ultimo=$_POST['ultsecncf'];
    $estado = $_POST['estncf'];
   $sql = "UPDATE `lab_ncf` SET `nombre_labncf`='$nombre',`abreviatura_labncf`='$abreviatura',`fechaven_labncf`='$fecha',`cantidad_labncf`=$cantidad,`prisecuencia_labncf`=$primero,`ultsecuencia_labncf`=$ultimo,`estado_labncf`=$estado WHERE `idncf_lab`=$codigo";
  if(mysqli_query($result, $sql)){echo "Actualizado";} 
  else {
    echo "ERROR: Could not able to execute $sql. ";
    echo (mysqli_error($result));
  }
}

?>