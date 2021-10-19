<?php

header('Content-type: text/plain');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pkmDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "SELECT price FROM pokemon WHERE id = :id";
  $stmt = $conn->prepare($sql);
  $stmt->bindValue(':id', $_GET['id']);
  $stmt->execute();
  $result = $stmt->fetch();
  echo $result['price'];
  $conn = null;
	//return $result['price'];
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

?>