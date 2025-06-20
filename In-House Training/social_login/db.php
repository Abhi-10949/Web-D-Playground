<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "social_db"; 

$conn = new mysqli($host, $user, $pass, $db);


if ($conn->connect_error) {
    die(" Connection failed: " . $conn->connect_error);
} else {
    echo " Connected to DB<br>";  
}
?>
