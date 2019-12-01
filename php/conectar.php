<?php
 header("Access-Control-Allow-Origin: *");
//  header('Content-Type: application/json');
    function getConexion(){
        $database_username = 'root';
        $database_password = '/1LwU4caFTN5mSkfzr2V';
        try {      
            $pdo_conn = new PDO('mysql:host=localhost;dbname=sysmed', $database_username, $database_password);   
            $pdo_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);           
            return $pdo_conn;
            } catch(PDOException $e){
                echo $e->getMessage();
            }
    }

    getConexion();
?>