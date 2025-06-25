<?php
session_start();
require_once '../config/database.php';

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Not authenticated']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $post_id = $_GET['post_id'] ?? null;
    
    // Validate input
    if (!$post_id || !is_numeric($post_id)) {
        echo json_encode(['success' => false, 'message' => 'Invalid post ID']);
        exit();
    }
    
    try {
        $pdo = getDBConnection();
        
        // Get comments with user information
        $stmt = $pdo->prepare("
            SELECT 
                c.*,
                u.fullname,
                u.profile_picture
            FROM comments c
            JOIN users u ON c.user_id = u.id
            WHERE c.post_id = ?
            ORDER BY c.created_at ASC
        ");
        $stmt->execute([$post_id]);
        $comments = $stmt->fetchAll();
        
        // Format dates for display
        foreach ($comments as &$comment) {
            $comment['created_at'] = date('M j, Y g:i A', strtotime($comment['created_at']));
        }
        
        echo json_encode($comments);
        
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error fetching comments']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?> 