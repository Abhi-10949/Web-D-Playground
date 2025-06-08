<?php
include 'db.php';

if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = md5($_POST['password']);

    $stmt = $db->prepare("SELECT * FROM users WHERE username=? AND password=?");
    $stmt->execute([$username, $password]);
    $user = $stmt->fetch();

    if ($user) {
        $_SESSION['username'] = $username;
        header("Location: products.php");
        exit();
    } else {
        $error = "Invalid credentials.";
    }
}
?>

<form method="POST">
    <h2>Login</h2>
    <?php if (!empty($error)) echo "<p style='color:red;'>$error</p>"; ?>
    <input name="username" placeholder="Username" required><br><br>
    <input type="password" name="password" placeholder="Password" required><br><br>
    <button name="login">Login</button>
</form>
