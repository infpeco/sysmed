<?php

 include '../conectar.php';


      $query = "SELECT nombre,apellidos,piso,no_habitacion,nutricionista,tipo_dieta,identificacion FROM asignacion2 ";
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
        'dieta' => $row['tipo_dieta'],
        'habitacion' => $row['no_habitacion'],
        'nutricionista' => $row['nutricionista'],
        'identificacion' => $row['identificacion']

            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
 


?>