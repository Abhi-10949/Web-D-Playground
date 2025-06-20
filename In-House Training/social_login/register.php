<?php
include "db.php";

if (isset($_POST['register'])) {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $password = trim($_POST['password']);


    if (!preg_match('/^(?=.*[A-Z])(?=.*\d).{8,}$/', $password)) {
        echo "<p style='color:red;'>Password must be 8+ characters, include 1 capital letter and 1 number.</p>";
    } else {

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);


        $stmt = $conn->prepare("INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $phone, $hashedPassword);

        if ($stmt->execute()) {
            echo "<p style='color:green;'>Registration successful! You can now <a href='login.php'>login</a>.</p>";
        } else {
            echo "<p style='color:red;'>Error: Email or phone already exists.</p>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* style.css */

    body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

h2 {
    text-align: center;
    color: #333;
}

form {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
    border-color: #007BFF;
    outline: none;
}

button {
    background-color: #007BFF;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #0056b3;
}

p {
    text-align: center;
}


    </style>
</head>
<body>
    <h2>Register</h2>
<form method="POST">
    Name:<br>
    <input type="text" name="name" required><br><br>

    Email:<br>
    <input type="email" name="email" required><br><br>

    Phone:<br>
    <input type="text" name="phone" required><br><br>

    Password:<br>
    <input type="password" name="password" required><br><br>

    <button type="submit" name="register">Register</button>
</form>
</body>
</html>

