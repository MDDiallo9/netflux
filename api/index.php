<?php

require_once("PDO.php");
$q = $_GET['q'];

$query = $pdo->query("SELECT title,cast,id_movie FROM movies_full WHERE cast LIKE '%" . $q ."%' ORDER BY rating DESC")->fetchAll();

/* var_dump($query) ; */

$json = json_encode($query);

echo $json;
