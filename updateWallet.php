<?php

header('Content-type: text/plain');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pkmDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "UPDATE trainer SET wallet = wallet + :prize WHERE id = 1";
  $stmt = $conn->prepare($sql);
  $stmt->bindValue(':prize', $_GET['prize'], PDO::PARAM_INT);
  $stmt->execute();
  $conn = null;

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

?>