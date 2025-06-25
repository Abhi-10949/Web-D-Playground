<?php
session_start();
require_once '../config/database.php';

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Not authenticated']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $content = trim($input['content'] ?? '');
    $user_id = $_SESSION['user_id'];
    
    // Validate input
    if (empty($content)) {
        echo json_encode(['success' => false, 'message' => 'Post content cannot be empty']);
        exit();
    }
    
    if (strlen($content) > 1000) {
        echo json_encode(['success' => false, 'message' => 'Post content is too long']);
        exit();
    }
    
    try {
        $pdo = getDBConnection();
        
        // Insert new post
        $stmt = $pdo->prepare("INSERT INTO posts (user_id, content) VALUES (?, ?)");
        $stmt->execute([$user_id, $content]);
        
        echo json_encode(['success' => true, 'message' => 'Post created successfully']);
        
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error creating post']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?> 