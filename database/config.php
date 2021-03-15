<?php

define('dbserver','localhost');
define('dbusername','root');
define('dbpassword',"");
define('databasename','bcis');

try {
    $pdo = new PDO ("mysql:host=".dbserver.";dbname=".databasename,dbusername,dbpassword);
                    //mysql:host=localhost; dbname=whuut,root,''
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);             
} catch (\PDOException $e) {
    die('could not connect to the database.'.$e->getMessage());
}

?>