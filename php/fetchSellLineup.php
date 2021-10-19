<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pkmDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "SELECT lineup.id as id,name,(price-100) as price FROM lineup INNER JOIN pokemon ON lineup.pkm_id = pokemon.id WHERE trainer_id = 1";
  $stmt = $conn->prepare($sql);  
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  $result = $stmt->fetchAll();
  print_r(json_encode($result));

  // echo "<form>";
  //   while($rows = $stmt->fetch()){
  //       //print_r(json_encode($rows));
  //       $id = $rows["id"];
  //       $name = $rows["name"];
  //       echo "<input type='checkbox' id='$id' name='$id' value='$name' onclick='list(this.id)'>";
  //       echo "<label for='$id'>$name</label><br>";
  //   }
  // echo "<input type='submit' value='Choose up to 3 pokemon to be on your team'>";
  // echo "</form>";

  $conn = null;


} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

?>