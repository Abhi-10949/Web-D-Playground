<?php
session_start();
include "db.php";

if (isset($_POST['submit'])) {
    $login = trim($_POST['login']);
    $password = trim($_POST['password']);

    echo "Typed login: [$login]<br>";
    echo "Typed password: [$password]<br>";

    if (!preg_match('/^(?=.*[A-Z])(?=.*\d).{8,}$/', $password)) {
        echo "<p style='color:red;'>Password must be 8+ characters, 1 capital letter, and 1 number.</p>";
    } else {
        $loginEscaped = $conn->real_escape_string($login);
        $query = "SELECT * FROM users WHERE email = '$loginEscaped' OR phone = '$loginEscaped'";
        $result = $conn->query($query);

        echo "Query used: $query<br>";
        echo "Rows found: " . $result->num_rows . "<br>";

        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            if (password_verify($password, $user['password'])) {
                echo "<p style='color:green;'>Login successful! Welcome, " . $user['name'] . "</p>";
                $_SESSION['user_id'] = $user['id'];
                // header("Location: dashboard.php");
            } else {
                echo "<p style='color:red;'>Incorrect password.</p>";
            }
        } else {
            echo "<p style='color:red;'>No user found with that email or phone.</p>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f0f2f5;
            margin: 0;
            padding: 0;
        }

        h2 {
            text-align: center;
            margin-top: 40px;
            color: #333333;
        }

        .form-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 60px;
        }

        form {
            background: #ffffff;
            padding: 30px 40px;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        label {
            font-size: 14px;
            font-weight: 600;
            color: #555555;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 12px 15px;
            margin: 8px 0 20px 0;
            border: 1px solid #cccccc;
            border-radius: 8px;
            box-sizing: border-box;
            transition: border-color 0.3s ease;
        }

        input[type="text"]:focus,
        input[type="password"]:focus {
            border-color: #007bff;
            outline: none;
        }

        button[type="submit"] {
            background-color: #007bff;
            color: white;
            padding: 12px;
            width: 100%;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }

        button[type="submit"]:hover {
            background-color: #0056b3;
        }

        p {
            text-align: center;
            font-size: 14px;
        }

        p[style*="color:red"] {
            color: #d9534f;
            margin-top: -10px;
            margin-bottom: 15px;
        }

        p[style*="color:green"] {
            color: #28a745;
            margin-top: -10px;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>

    <h2>Login</h2>

    <div class="form-container">
        <form method="POST">
            <label>Email or Phone:</label><br>
            <input type="text" name="login" required><br>

            <label>Password:</label><br>
            <input type="password" name="password" required><br>

            <button type="submit" name="submit">Login</button>
        </form>
    </div>

</body>
</html>
