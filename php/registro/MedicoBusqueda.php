<?php


Header('Access-Control-Allow-Origin: *');

//echo json_encode("Hola");



include "../conectar.php";


$Codigo=$_POST["Codigo"];
$sql = "SELECT `id`,`Nombre`,`Apellido`,`Direccion`,`Identificacion`,`TipoIdentificacion`,`Sexo`,`TipoSangre`,`SeguroSocial`,`Departamento`,`Especialidad`,`FechaEntrada`,`FechaNacimiento`,`Correo`,`Estado` FROM `empleado` WHERE `id`=$Codigo AND  `Tipo`='Medico'";

$Consulta=mysqli_query($Conexion, $sql);


            
if ($Consulta) {
      $fila = mysqli_fetch_array($Consulta);
      $myArray = array($fila);
      $myArray2 = array();
      $ConsultaTelefono=mysqli_query($Conexion,"SELECT `id`,`id_TelefonoEmpleado`,`Telefono` FROM `telefonosempleado` WHERE `id_TelefonoEmpleado`=$Codigo;");


      while($fila= $ConsultaTelefono->fetch_array(MYSQLI_ASSOC)) {
            $myArray2[]=$fila;
      }
      $myArray["Telefonos"]=$myArray2;
      

    echo json_encode($myArray);
} else {
      echo "Ha sucedio un error inesperado".mysqli_error($Conexion);
}

/*
INSERT INTO `empleado`(`id`, `Nombre`, `Apellido`, `Direccion`, `Identificacion`, `TipoIdentificacion`, `Sexo`, `TipoSangre`, `SeguroSocial`, `Area`, `Cargo`, `Escolaridad`, `Departamento`, `Especialidad`, `FechaEntrada`, `FechaNacimiento`, `Correo`, `Experiencia`,`Tipo`,`Estado`) VALUES (NULL,'Jose','Vargaz','Ka ezquinita Caliente',4023434343,true,'Masculino','O+',566456456,NULL,NULL,'Profesional','Cardiologia','Especialida1','2018-04-01','2019-02-25','Juan24@gmail.com',5,'Medico','Habilitado'); SELECT LAST_INSERT_ID();

INSERT INTO `telefonosempleado`(`id_TelefonoEmpleado`,`Telefono`) VALUES(4,8096566464);
*/
?>