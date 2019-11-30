<?PHP
header("Access-Control-Allow-Origin: *");
function conectar(){
    $USER = 'root';
    $PASS = '/1LwU4caFTN5mSkfzr2V';

    try {
        $pdo_conn = new PDO('mysql:host=localhost;dbname=sysmed',$USER, $PASS);
        $pdo_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo_conn; 
    } catch(PDOException $e){
        $e->getMesagge();
    }

}

?>
