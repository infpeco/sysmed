<?php
include '../conectar.php';

$conexion = new mysqli($server, $usuario, $password, $db);

if ($conexion -> connect_errno)
{
	die("Fallo la conexion:(".$conexion -> mysqli_connect_errno().")".$conexion-> mysqli_connect_error());
}

$salida = "";
$query = "SELECT * FROM cita ORDER BY id";


if(isset ($_POST ['consulta'])) {
    $q = $conexion -> real_escape_string ($_POST['consulta']);
    $query = "SELECT  id, fecha, paciente, motivo, Doctor,fecha_cita FROM cita
    WHERE id LIKE '%".$q."' OR fecha LIKE '%".$q."' OR paciente LIKE '%".$q."' OR motivo 
    LIKE '%".$q."' OR doctor LIKE '%".$q."'";
}

$resultado = $conexion->query ($query);


if ($resultado->num_rows > 0) {
    $salida.= "<table border='1' style='width: 100%; border-color: black;color:black; '>
                    <thead class='thead-dark'>
                        <tr>
                            <td style='text-align:center; width: 5%;
                            background-color: #848484 ; color: black;font-size:16px '><b>ID</b></td>
                            <td style='text-align:center; width: 10%;
                            background-color: #848484 ; color: black;font-size:16px '><b>Nombre</b></td>
                            <td style='text-align:center; width: 10%;
                            background-color: #848484 ; color: black;font-size:16px '><b>Apellido</b></td>
                            <td style='text-align:center; width: 10%;
                            background-color: #848484 ; color: black;font-size:16px '><b>Motivo</b></td>
                            <td style='text-align:center; width: 10%;
                            background-color: #848484 ; color: black;font-size:16px '><b>Parentesco</b></td>
                            <td style='text-align:center; width: 10%;
                            background-color: #848484 ; color: black;font-size:16px '><b>Nombre del Parientesco</b></td>
                            <td style='text-align:center; width: 10%;
                            background-color: #848484 ; color: black;font-size:16px '></td>
                        </tr>
                    </thead>
                    <tbody style='background-color: white;text-align:center; font-size: 16px;'>";

    while ($fila = $resultado->fetch_assoc()) {
        $salida.= "<tr>
                    <td style='color: black; text-align:center'>".$fila['id']."</td>
                    <td style='color: black; text-align:center'>".$fila['fecha']."</td>
                    <td style='color: black; text-align:center'>".$fila['paciente']."</td>
                    <td style='color: black; text-align:center'>".$fila['motivo']."</td>
                    <td style='color: black; text-align:center'>".$fila['doctor']."</td>
                    <td style='color: black; text-align:center'>".$fila['fecha_cita']."</td>
                    <td style='color: black; text-align:center'>
                    <button type='button' title= 'Modificar' onclick='' 
                    class='btn btn-secondary py-2 px-2' id=''> 
                    <img src='../../images/emergencia/ed.png' width='20px'></button>
                    </td>
                </tr>";
    }
    $salida.="</tbody></table>";
} else {
    $salida.="No hay datos que mostrar";

}

echo $salida;

?>



