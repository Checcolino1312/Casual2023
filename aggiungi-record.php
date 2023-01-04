<?php

// Recupera i dati del form
$nome = $_POST['nome'];

// Crea il nuovo record come stringa
$nuovo_record = $nome . "\n";

// Aggiunge il nuovo record al file txt
file_put_contents('file.txt', $nuovo_record, FILE_APPEND);

?>
