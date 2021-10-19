<?php

header('Content-type: text/plain');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pkmDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "UPDATE trainer SET wallet=:curWallet WHERE id = 1";
  $stmt = $conn->prepare($sql);
  $stmt->bindValue(':curWallet', $_GET['curWallet'], PDO::PARAM_INT);
  $stmt->execute();

  $sql = "INSERT INTO lineup(trainer_id, pkm_id, lvl, exp) VALUES (1, :id, 1, 0)";
  $stmt = $conn->prepare($sql);
  $stmt->bindValue(':id', $_GET['id']);
  $stmt->execute();
  //$result = $stmt->fetch();
  //echo $result['wallet'];
  $conn = null;
	//return $result['price'];
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

?>