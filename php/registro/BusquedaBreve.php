<?php


Header('Access-Control-Allow-Origin: *');

//echo json_encode("Hola");



include "../conectar.php";



$Codigo=$_POST["Codigo"];
$Tipo=$_POST["Tipo"];



if($Tipo != "Paciente")
{
      $sql = "SELECT `id`,`Nombre`,`Apellido`,`Identificacion` FROM `empleado` WHERE CONCAT (`id`,`Nombre`,`Apellido`,`Identificacion`) LIKE '%$Codigo%' AND  `Tipo`='$Tipo';";
}
else
{
      $sql = "SELECT `id`,`Nombre`,`Apellido`,`Identificacion` FROM `pacientes` WHERE CONCAT (`id`,`Nombre`,`Apellido`,`Identificacion`) LIKE '%$Codigo%';";
}

$Consulta=mysqli_query($Conexion, $sql);


            
if ($Consulta) {
      $myArray = array();
        while($row = $Consulta->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
} else {
      echo "Ha sucedio un error inesperado";
}

/*
INSERT INTO `empleado`(`id`, `Nombre`, `Apellido`, `Direccion`, `Identificacion`, `TipoIdentificacion`, `Sexo`, `TipoSangre`, `SeguroSocial`, `Area`, `Cargo`, `Escolaridad`, `Departamento`, `Especialidad`, `FechaEntrada`, `FechaNacimiento`, `Correo`, `Experiencia`,`Tipo`,`Estado`) VALUES (NULL,'Jose','Vargaz','Ka ezquinita Caliente',4023434343,true,'Masculino','O+',566456456,NULL,NULL,'Profesional','Cardiologia','Especialida1','2018-04-01','2019-02-25','Juan24@gmail.com',5,'Medico','Habilitado'); SELECT LAST_INSERT_ID();

INSERT INTO `telefonosempleado`(`id_TelefonoEmpleado`,`Telefono`) VALUES(4,8096566464);
*/
?>