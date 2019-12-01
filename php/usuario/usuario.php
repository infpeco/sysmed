<?PHP 
// header("Access-Control-Allow-Origin: *");

// header('Content-Type: application/json');

include ('../conectar.php');

function buscarEmpleado(){

    $conectar = getConexion();
    $sentencia = $conectar->query("SELECT * FROM empleado");
    $datos = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    $repuesta = json_encode($datos);
    echo $repuesta;
}


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case 'POST':        
    break;
    case 'GET':
        buscarEmpleado();
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