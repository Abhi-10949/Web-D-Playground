<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "feedback_db";

// Create connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data and sanitize
$name = $conn->real_escape_string($_POST["name"]);
$email = $conn->real_escape_string($_POST["email"]);
$message = $conn->real_escape_string($_POST["message"]);

// Insert into DB
$sql = "INSERT INTO feedback (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "<h2>Thank you for your feedback, $name!</h2>";
    echo "<a href='index.html'>Go Back</a>";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
