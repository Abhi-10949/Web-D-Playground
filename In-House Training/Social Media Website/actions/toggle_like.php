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
    $user_id = $_SESSION['user_id'];
    
    // Validate input
    if (!$post_id || !is_numeric($post_id)) {
        echo json_encode(['success' => false, 'message' => 'Invalid post ID']);
        exit();
    }
    
    try {
        $pdo = getDBConnection();
        
        // Check if post exists
        $stmt = $pdo->prepare("SELECT id FROM posts WHERE id = ?");
        $stmt->execute([$post_id]);
        if (!$stmt->fetch()) {
            echo json_encode(['success' => false, 'message' => 'Post not found']);
            exit();
        }
        
        // Check if user already liked the post
        $stmt = $pdo->prepare("SELECT id FROM likes WHERE user_id = ? AND post_id = ?");
        $stmt->execute([$user_id, $post_id]);
        $existing_like = $stmt->fetch();
        
        if ($existing_like) {
            // Unlike the post
            $stmt = $pdo->prepare("DELETE FROM likes WHERE user_id = ? AND post_id = ?");
            $stmt->execute([$user_id, $post_id]);
            
            // Update post likes count
            $stmt = $pdo->prepare("UPDATE posts SET likes_count = likes_count - 1 WHERE id = ?");
            $stmt->execute([$post_id]);
            
            echo json_encode(['success' => true, 'action' => 'unliked']);
        } else {
            // Like the post
            $stmt = $pdo->prepare("INSERT INTO likes (user_id, post_id) VALUES (?, ?)");
            $stmt->execute([$user_id, $post_id]);
            
            // Update post likes count
            $stmt = $pdo->prepare("UPDATE posts SET likes_count = likes_count + 1 WHERE id = ?");
            $stmt->execute([$post_id]);
            
            // Create notification for post owner
            $stmt = $pdo->prepare("SELECT user_id FROM posts WHERE id = ?");
            $stmt->execute([$post_id]);
            $post_owner = $stmt->fetch();
            
            if ($post_owner && $post_owner['user_id'] != $user_id) {
                $stmt = $pdo->prepare("INSERT INTO notifications (user_id, from_user_id, type, post_id, content) VALUES (?, ?, 'like', ?, ?)");
                $user_name = $_SESSION['user_name'];
                $content = "$user_name liked your post";
                $stmt->execute([$post_owner['user_id'], $user_id, $post_id, $content]);
            }
            
            echo json_encode(['success' => true, 'action' => 'liked']);
        }
        
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error toggling like']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?> 