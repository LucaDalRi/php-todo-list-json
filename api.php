<?php

$toDoString = file_get_contents('database.json');

$todoDecoded = json_decode($toDoString, true);

echo $toDoString;

header('Content-Type: application/json');

json_encode($toDoList);