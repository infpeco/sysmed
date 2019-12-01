<?php

  include '../conectar.php';

  $codigo = $_POST['codigo'];

  if(!empty($codigo)) {
      $query = "SELECT * FROM asignacion WHERE nombre LIKE '$codigo%' ";
     $resulta = mysqli_query($result, $query);
        if(!$resulta) {
            die(' Eror de consulta'. mysqli_error($result));
        }
        $json = array();
        while($row = mysqli_fetch_array($resulta)) {
            $json[] = array(
        'nombre' => $row['nombre'],
        'apellidos' => $row['apellidos'],
        'piso' => $row['piso'],
        'habitacion' => $row['no_habitacion'],
        'nutricionista' => $row['nutricionista'],
        'patologia' => $row['patologia'],
        'fecha' => $row['fecha_nacimiento'],
        'sangre' => $row['tipo_sangre'],
        'telefono' => $row['telefono'],
        'seguro' => $row['seguro_social'],
        'sexo' => $row['sexo'],
        'identificacion' => $row['identificacion'],
        'direccion' => $row['direccion']

            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }


    
?>