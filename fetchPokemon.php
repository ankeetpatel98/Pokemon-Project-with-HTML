<?php

header('Content-type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pkmDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $id = $_GET['id'];

  if ( ! preg_match( "/[0-9]+/", $id ) ) {
    throw new Exception('id is not an integer');
  }
  else if ( (int) $id < 1 || (int) $id > 151 ) {
    throw new Exception('id out of range');
  }
 
  $attrs = "name,type1,type2,total,hP,attack,defense,spAttack,spDefense,speed";
  $stmt = $conn->prepare("SELECT $attrs FROM pokemon WHERE id = $id");
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  $result = $stmt->fetch();

  $json = json_encode($result);
  echo $json;

} catch(Exception $e) {
  $error['name'] = 'missingno';
  $error['errmsg'] = $e->getMessage();
  $json = json_encode($error);
  echo $json;
}

?>
