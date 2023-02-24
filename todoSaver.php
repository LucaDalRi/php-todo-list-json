<?php

$toDoString = file_get_contents('database.json');
$toDoDecoded = json_decode($toDoString, true);

$newToDo = [

    'task' => $_POST['toDoArr']['task'],
    'done' => false,

];

$toDoDecoded[] = $newToDo;

$toDoEncoded = json_encode($toDoDecoded);

file_put_contents('database.json', $toDoEncoded);

header('Content-Type: application/json');

echo $toDoEncoded;
