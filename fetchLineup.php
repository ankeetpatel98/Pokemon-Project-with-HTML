<?php

header('Content-type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pkmDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Trainer id
  $id = $_GET['id'];

  if ( ! preg_match( "/[0-9]+/", $id ) ) {
    throw new Exception('id is not an integer');
  }
  else if ( (int) $id < 1 || (int) $id > 151 ) {
    throw new Exception('id out of range');
  }
 
  $stmt = $conn->prepare("SELECT pkm_id FROM lineup WHERE trainer_id= $id");
  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_COLUMN);

  $json = json_encode($result);
  echo $json;

} catch(Exception $e) {
  $json = json_encode([-1,$e->getMessage()]);
  echo $json;
}

?>
