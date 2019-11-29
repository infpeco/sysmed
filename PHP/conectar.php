<?PHP
function conectar(){
    $SERVER = 'localhost';
    $USER = 'root';
    $PASS = '';
    $DB = 'sysmed';

    try {
        $pdo_conn = new PDO('mysql:host=localhost;dbname=sysmed',$USER, $PASS);
        $pdo_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo_conn;       
    } catch(PDOException $e){
        $e->getMesagge();
    }

}

?>