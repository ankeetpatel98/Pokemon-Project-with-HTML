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

  $sql = "DELETE FROM lineup WHERE id=:id";
  $stmt = $conn->prepare($sql);
  $stmt->bindValue(':id', $_GET['id']);
  $result = $stmt->execute();
  echo $result;
  $conn = null;

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

?>