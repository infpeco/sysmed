<?php

 include '../conectar.php';


      $query = "SELECT * FROM dietas";
     $resulta = mysqli_query($result, $query);
     
        if(!$resulta) {
            die(' Eror de consulta'. mysqli_error($result));
        }
        $json = array();
        while($row = mysqli_fetch_array($resulta)) {
            $json[] = array(
        'tandas' => $row['tandas'],
        'lune' => $row['lunes'],
        'marte' => $row['martes'],
        'miercole' => $row['miercoles'],
        'jueve' => $row['jueves'],
        'vierne' => $row['viernes'],
        'sabado' => $row['sabado'],
        'domingo' => $row['domingo']

            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;


?>