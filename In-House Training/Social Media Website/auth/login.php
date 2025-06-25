<?php
session_start();
require_once '../config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    
    // Validate input
    if (empty($email) || empty($password)) {
        header("Location: ../index.php?error=Please fill in all fields");
        exit();
    }
    
    try {
        $pdo = getDBConnection();
        
        // Check if user exists
        $stmt = $pdo->prepare("SELECT id, fullname, email, password FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        
        if ($user && password_verify($password, $user['password'])) {
            // Login successful
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['fullname'];
            $_SESSION['user_email'] = $user['email'];
            
            header("Location: ../dashboard.php");
            exit();
        } else {
            // Login failed
            header("Location: ../index.php?error=Invalid email or password");
            exit();
        }
        
    } catch (PDOException $e) {
        header("Location: ../index.php?error=Database error occurred");
        exit();
    }
} else {
    // If not POST request, redirect to index
    header("Location: ../index.php");
    exit();
}
?> 