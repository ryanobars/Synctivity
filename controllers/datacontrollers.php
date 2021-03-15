<?php

require_once "../database/config.php";
if($_SERVER['REQUEST_METHOD']=='POST'){

    //BACKEND RESPONSE
    $query = "insert into cqss values(default, :flightNum, :ppNum, :fullName, :notes, current_timestamp)";
    if($statement = $pdo->prepare($query))
    {
        $statement->bindParam(":flightNum", $param_flightNum, PDO::PARAM_STR);
        $statement->bindParam(":ppNum", $param_ppNum, PDO::PARAM_STR);
        $statement->bindParam(":fullName", $param_fullName, PDO::PARAM_STR);
        $statement->bindParam(":notes", $param_notes, PDO::PARAM_STR);
        $param_flightNum = $_POST['flightNum'];
        $param_ppNum = $_POST['ppNum'];
        $param_fullName = $_POST['fullName'];
        $param_notes = $_POST['notes'];
        
        if($statement->execute()){
            $responseBackend = array("statuscode"=>200);
            echo json_encode($responseBackend);
        }
        unset($statement);
        unset($pdo);



    }}
?>
