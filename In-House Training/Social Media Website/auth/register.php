<?php
session_start();
require_once '../config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullname = trim($_POST['fullname']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    
    // Validate input
    if (empty($fullname) || empty($email) || empty($password) || empty($confirm_password)) {
        header("Location: ../index.php?error=Please fill in all fields");
        exit();
    }
    
    if ($password !== $confirm_password) {
        header("Location: ../index.php?error=Passwords do not match");
        exit();
    }
    
    if (strlen($password) < 6) {
        header("Location: ../index.php?error=Password must be at least 6 characters long");
        exit();
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../index.php?error=Please enter a valid email address");
        exit();
    }
    
    try {
        $pdo = getDBConnection();
        
        // Check if email already exists
        $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$email]);
        
        if ($stmt->fetch()) {
            header("Location: ../index.php?error=Email already registered");
            exit();
        }
        
        // Hash password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
        // Insert new user
        $stmt = $pdo->prepare("INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)");
        $stmt->execute([$fullname, $email, $hashed_password]);
        
        // Get the new user's ID
        $user_id = $pdo->lastInsertId();
        
        // Create session
        $_SESSION['user_id'] = $user_id;
        $_SESSION['user_name'] = $fullname;
        $_SESSION['user_email'] = $email;
        
        header("Location: ../dashboard.php?success=Account created successfully!");
        exit();
        
    } catch (PDOException $e) {
        header("Location: ../index.php?error=Registration failed. Please try again.");
        exit();
    }
} else {
    // If not POST request, redirect to index
    header("Location: ../index.php");
    exit();
}
?> 