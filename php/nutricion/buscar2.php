<?php

  include '../conectar.php';

  $codigo = $_POST['codigo'];

  if(!empty($codigo)) {
      $query = "SELECT * FROM enfermera WHERE enfermera LIKE '$codigo%' ";
     $resulta = mysqli_query($result, $query);
        if(!$resulta) {
            die(' Eror de consulta'. mysqli_error($result));
        }
        $json = array();
        while($row = mysqli_fetch_array($resulta)) {
            $json[] = array(
                'enfermera' => $row['enfermera'],
                'apellidos' => $row['apellidos']

            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }


    
?>
