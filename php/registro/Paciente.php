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
{
      $TipoIdentificacion = 1;
} 
if($data['TipoIdentificacion']=='Pasaporte')
{
      $TipoIdentificacion = 0;
}
      


$Sexo = $data['Sexo'];
$TipoSangre = $data['Sangre'];
$SeguroSocial = $data['Seguro'];
$FechaEntrada = $data['FechaEntrada'];
$FechaNaciemiento = $data['FechaNacimiento'];
$Estado=$data['Estado'];
$Triage=$data['Triage'];
$AntecedenteFamiliares=$data['Antencedentes'];
$Tutor=$data['Familiar'];
$Alergia=$data['Alergia'];
include "../conectar.php";




if($Estado=='Nuevo')
{
      $EstadoReal='Baja';
      $sql = "INSERT INTO `pacientes`(`id`, `Nombre`, `Apellido`, `Direccion`, `Identificacion`, `TipoIdentificacion`, `Sexo`, `TipoSangre`, `SeguroSocial`, `Triage`, `AntecedenteFamiliares`, `Alergia/Afeccion`, `FechaEntrada`, `FechaNacimiento`, `Familiar/Tutor`, `Estado`) VALUES (NULL,'$Nombre','$Apellido','$Direccion','$Identificacion',$TipoIdentificacion,'$Sexo','$TipoSangre',$SeguroSocial,'$Triage','$AntecedenteFamiliares','$Alergia','$FechaEntrada','$FechaNaciemiento','$Tutor','$EstadoReal')";
}
else
{
      $Id=$data['id'];
      $sql = "UPDATE `pacientes` SET `Nombre`='$Nombre',`Apellido`='$Apellido',`Direccion`='$Direccion',`Identificacion`='$Identificacion',`TipoIdentificacion`=$TipoIdentificacion,`Sexo`='$Sexo',`TipoSangre`='$TipoSangre',`SeguroSocial`=$SeguroSocial,`Triage`='$Triage',`AntecedenteFamiliares`='$AntecedenteFamiliares',`Alergia/Afeccion`='$Alergia',`FechaEntrada`='$FechaEntrada',`FechaNacimiento`='$FechaNaciemiento',`Familiar/Tutor`='$Tutor',`Estado`='$Estado' WHERE `pacientes`.`id` = $Id; ";
}


$Consulta=mysqli_query($Conexion, $sql);


            
if ($Consulta){
      
     

      if($Estado=='Nuevo')
      {
            $id=$Conexion->insert_id;
	     foreach($data['Numeros'] as $posicion=>$Valor)
		{
            
           	 if(!mysqli_query($Conexion,"INSERT INTO `telefonospacientes`(`id_TelefonoPaciente`,`Telefono`) VALUES(".$id.",$Valor);"))
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
                    if(!mysqli_query($Conexion,"INSERT INTO `telefonospacientes`(`id_TelefonoPaciente`,`Telefono`) VALUES($id,'$val[1]');"))
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
                          mysqli_query($Conexion,"UPDATE `telefonospacientes` SET `Telefono`=$val[1] WHERE `id`=$val[0];");
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
           
            mysqli_query($Conexion,"DELETE FROM `telefonospacientes` WHERE `id_TelefonoPaciente` = $id AND `id` NOT IN ($Num);");
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
      echo "Ha sucedio un error inesperado".mysqli_error($Conexion);
}

/*
INSERT INTO `empleado`(`id`, `Nombre`, `Apellido`, `Direccion`, `Identificacion`, `TipoIdentificacion`, `Sexo`, `TipoSangre`, `SeguroSocial`, `Area`, `Cargo`, `Escolaridad`, `Departamento`, `Especialidad`, `FechaEntrada`, `FechaNacimiento`, `Correo`, `Experiencia`,`Tipo`,`Estado`) VALUES (NULL,'Jose','Vargaz','Ka ezquinita Caliente',4023434343,true,'Masculino','O+',566456456,NULL,NULL,'Profesional','Cardiologia','Especialida1','2018-04-01','2019-02-25','Juan24@gmail.com',5,'Medico','Habilitado'); SELECT LAST_INSERT_ID();

INSERT INTO `telefonosempleado`(`id_TelefonoEmpleado`,`Telefono`) VALUES(4,8096566464);
*/
?>