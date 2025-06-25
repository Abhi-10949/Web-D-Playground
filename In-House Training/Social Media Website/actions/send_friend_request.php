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
    $friend_id = $input['friend_id'] ?? null;
    $user_id = $_SESSION['user_id'];
    
    // Validate input
    if (!$friend_id || !is_numeric($friend_id)) {
        echo json_encode(['success' => false, 'message' => 'Invalid user ID']);
        exit();
    }
    
    if ($friend_id == $user_id) {
        echo json_encode(['success' => false, 'message' => 'Cannot send friend request to yourself']);
        exit();
    }
    
    try {
        $pdo = getDBConnection();
        
        // Check if user exists
        $stmt = $pdo->prepare("SELECT id, fullname FROM users WHERE id = ?");
        $stmt->execute([$friend_id]);
        $friend = $stmt->fetch();
        
        if (!$friend) {
            echo json_encode(['success' => false, 'message' => 'User not found']);
            exit();
        }
        
        // Check if friendship already exists
        $stmt = $pdo->prepare("
            SELECT id, status FROM friendships 
            WHERE (user_id = ? AND friend_id = ?) OR (user_id = ? AND friend_id = ?)
        ");
        $stmt->execute([$user_id, $friend_id, $friend_id, $user_id]);
        $existing_friendship = $stmt->fetch();
        
        if ($existing_friendship) {
            if ($existing_friendship['status'] === 'pending') {
                echo json_encode(['success' => false, 'message' => 'Friend request already sent']);
            } elseif ($existing_friendship['status'] === 'accepted') {
                echo json_encode(['success' => false, 'message' => 'Already friends']);
            } else {
                echo json_encode(['success' => false, 'message' => 'Friend request was rejected']);
            }
            exit();
        }
        
        // Send friend request
        $stmt = $pdo->prepare("INSERT INTO friendships (user_id, friend_id, status) VALUES (?, ?, 'pending')");
        $stmt->execute([$user_id, $friend_id]);
        
        // Create notification
        $stmt = $pdo->prepare("INSERT INTO notifications (user_id, from_user_id, type, content) VALUES (?, ?, 'friend_request', ?)");
        $user_name = $_SESSION['user_name'];
        $content = "$user_name sent you a friend request";
        $stmt->execute([$friend_id, $user_id, $content]);
        
        echo json_encode(['success' => true, 'message' => 'Friend request sent successfully']);
        
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error sending friend request']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?> 