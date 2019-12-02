<?php

Header('Access-Control-Allow-Origin: *');
/// Obtenemos el json enviado
$data = file_get_contents('php://input');
// Los convertimos en un array
$data = json_decode( $data, true );


//echo json_encode("Hola");


$Nombre = $data['Nombre'];
$Apellido = $data['Apellido'];
$Direccion = $data['Dirrecion'];
$Identificacion = $data['Identificacion'];

if($data['TipoIdentificacion']=='Cedula')
      $TipoIdentificacion = 1;
else
      $TipoIdentificacion = 0;

$Sexo = $data['Sexo'];
$TipoSangre = $data['Sangre'];
$SeguroSocial = $data['Seguro'];
$Departamento = $data['Departamento'];
$Especialidad = $data['Especialidad'];
$FechaEntrada = $data['FechaEntrada'];
$FechaNaciemiento = $data['FechaNacimiento'];
$Correo = $data['Correo'];
$Tipo= 'Medico';
$Estado=$data['Estado'];

include "../conectar.php";








if($Estado=='Nuevo')
{
      $EstadoReal='Habilitado';
      $sql = "INSERT INTO `empleado`(`id`, `Nombre`, `Apellido`, `Direccion`, `Identificacion`, `TipoIdentificacion`, `Sexo`, `TipoSangre`, `SeguroSocial`, `Area`, `Cargo`, `Escolaridad`, `Departamento`, `Especialidad`, `FechaEntrada`, `FechaNacimiento`, `Correo`, `Experiencia`,`Tipo`,`Estado`) VALUES (NULL,'$Nombre','$Apellido','$Direccion','$Identificacion',$TipoIdentificacion,'$Sexo','$TipoSangre',$SeguroSocial,NULL,NULL,'Profesional','$Departamento','$Especialidad','$FechaEntrada','$FechaNaciemiento','$Correo',Null,'$Tipo','$EstadoReal');";
}
else
{
      $Id=$data['id'];
      $sql = "UPDATE `empleado` SET `Nombre`= '$Nombre',`Apellido`='$Apellido', `Direccion`='$Direccion', `Identificacion`='$Identificacion', `TipoIdentificacion`=$TipoIdentificacion, `Sexo`='$Sexo', `TipoSangre`='$TipoSangre', `SeguroSocial`='$SeguroSocial',  `Departamento`='$Departamento', `Especialidad`='$Especialidad', `FechaEntrada`='$FechaEntrada', `FechaNacimiento`='$FechaNaciemiento', `Correo`='$Correo', `Estado`='$Estado' WHERE `empleado`.`id` = $Id; ";
}


$Consulta=mysqli_query($Conexion, $sql);


            
if ($Consulta) {
      
     

      if($Estado=='Nuevo')
      {
            $id=$Conexion->insert_id;

	    foreach($data['Numeros'] as $posicion=>$Valor)
	    {
            
            if(!mysqli_query($Conexion,"INSERT INTO `telefonosempleado`(`id_TelefonoEmpleado`,`Telefono`) VALUES($id,'$Valor');"))
                {
                      die('Error');
                }
      	    }
      }
      else
      {
            $id=$Id;
            $i=0;
            $Num='';
	    foreach ($data['Numeros'] as $val) {
                if($val[0] == -1)
                {
                  if(!mysqli_query($Conexion,"INSERT INTO `telefonosempleado`(`id_TelefonoEmpleado`,`Telefono`) VALUES($id,'$val[1]');"))
                  {
                        die('Error');
                  }
                  
                  if($i == 0)
                        {
                                    
                              $Num.=$Conexion->insert_id;
                        }
                        else
                        {
                              $Num.=','.$Conexion->insert_id;
                        }
                        $i++;
                        }
                else
                {
                        mysqli_query($Conexion,"UPDATE `telefonosempleado` SET `Telefono`=$val[1] WHERE `id`=$val[0];");
                        if($i == 0)
                        {
                                    
                              $Num.=$val[0];
                        }
                        else
                        {
                              $Num.=','.$val[0];
                        }
                        $i++;
                 }

                  
          }
         
          mysqli_query($Conexion,"DELETE FROM `telefonosempleado` WHERE `id_TelefonoEmpleado` = $id AND `id` NOT IN ($Num);");
      }
      
      
      if($Estado=='Nuevo')
      {
            echo "Se ha registrado correctamente";
      }
      else
      {
            echo "Se ha modificado correctamente";
      }
      
} else {
      echo "Ha sucedio un error inesperado";//<br><br>".mysqli_error($Conexion)";
}

/*
INSERT INTO `empleado`(`id`, `Nombre`, `Apellido`, `Direccion`, `Identificacion`, `TipoIdentificacion`, `Sexo`, `TipoSangre`, `SeguroSocial`, `Area`, `Cargo`, `Escolaridad`, `Departamento`, `Especialidad`, `FechaEntrada`, `FechaNacimiento`, `Correo`, `Experiencia`,`Tipo`,`Estado`) VALUES (NULL,'Jose','Vargaz','Ka ezquinita Caliente',4023434343,true,'Masculino','O+',566456456,NULL,NULL,'Profesional','Cardiologia','Especialida1','2018-04-01','2019-02-25','Juan24@gmail.com',5,'Medico','Habilitado'); SELECT LAST_INSERT_ID();

INSERT INTO `telefonosempleado`(`id_TelefonoEmpleado`,`Telefono`) VALUES(4,8096566464);
*/
?>