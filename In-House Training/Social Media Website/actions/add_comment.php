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
    $post_id = $input['post_id'] ?? null;
    $content = trim($input['content'] ?? '');
    $user_id = $_SESSION['user_id'];
    
    // Validate input
    if (!$post_id || !is_numeric($post_id)) {
        echo json_encode(['success' => false, 'message' => 'Invalid post ID']);
        exit();
    }
    
    if (empty($content)) {
        echo json_encode(['success' => false, 'message' => 'Comment content cannot be empty']);
        exit();
    }
    
    if (strlen($content) > 500) {
        echo json_encode(['success' => false, 'message' => 'Comment is too long']);
        exit();
    }
    
    try {
        $pdo = getDBConnection();
        
        // Check if post exists
        $stmt = $pdo->prepare("SELECT id, user_id FROM posts WHERE id = ?");
        $stmt->execute([$post_id]);
        $post = $stmt->fetch();
        
        if (!$post) {
            echo json_encode(['success' => false, 'message' => 'Post not found']);
            exit();
        }
        
        // Insert comment
        $stmt = $pdo->prepare("INSERT INTO comments (user_id, post_id, content) VALUES (?, ?, ?)");
        $stmt->execute([$user_id, $post_id, $content]);
        
        // Update post comments count
        $stmt = $pdo->prepare("UPDATE posts SET comments_count = comments_count + 1 WHERE id = ?");
        $stmt->execute([$post_id]);
        
        // Create notification for post owner (if not commenting on own post)
        if ($post['user_id'] != $user_id) {
            $stmt = $pdo->prepare("INSERT INTO notifications (user_id, from_user_id, type, post_id, content) VALUES (?, ?, 'comment', ?, ?)");
            $user_name = $_SESSION['user_name'];
            $content_preview = substr($content, 0, 50) . (strlen($content) > 50 ? '...' : '');
            $notification_content = "$user_name commented: $content_preview";
            $stmt->execute([$post['user_id'], $user_id, $post_id, $notification_content]);
        }
        
        echo json_encode(['success' => true, 'message' => 'Comment added successfully']);
        
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error adding comment']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?> 