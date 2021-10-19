<?php

header('Content-type: text/plain');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pkmDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "SELECT wallet FROM trainer WHERE id = 1";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetch();
  echo $result['wallet'], ",";

  $sql = "SELECT count(lineup.id) as count FROM trainer INNER JOIN lineup ON lineup.trainer_id = trainer.id WHERE trainer.id = 1";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetch();
  echo $result['count'];
  $conn = null;
	//return $result['price'];
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

?>