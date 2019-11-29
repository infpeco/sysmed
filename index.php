<?PHP 

require ('php/conectar.php');

function buscarEmpleado(){

    $conexion = conectar();
    $sentencia = $conexion->query("SELECT * FROM empleado");
    $datos = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    $respuesta = json_encode($datos);
    echo $respuesta;

}



$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case 'POST':
        buscarEmpleado();
    break;
    case 'GET': 
    break;
    case 'DELETE':
    break;
    case 'PUT':
    break;
    default:
    echo '{
        "error": true,
        "message": "Metodo no implementeado"
    }
    ';
}

?>