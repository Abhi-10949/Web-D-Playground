<?php
session_start();
$conn = new mysqli("localhost", "root", "", "friend_system");

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

$user_id = $_SESSION['user_id'];

// Accept or reject request
if (isset($_GET['action']) && isset($_GET['id'])) {
    $action = $_GET['action'];
    $id = $_GET['id'];
    if ($action === 'accept') {
        $conn->query("UPDATE friend_requests SET status = 'accepted' WHERE id = $id AND receiver_id = $user_id");
    } elseif ($action === 'reject') {
        $conn->query("UPDATE friend_requests SET status = 'rejected' WHERE id = $id AND receiver_id = $user_id");
    }
}

// Show pending requests
$result = $conn->query("
    SELECT f.id, u.username 
    FROM friend_requests f 
    JOIN users u ON f.sender_id = u.id 
    WHERE f.receiver_id = $user_id AND f.status = 'pending'
");

echo "<h3>Pending Friend Requests:</h3>";
while ($row = $result->fetch_assoc()) {
    echo $row['username'];
    echo " - <a href='handle_request.php?action=accept&id={$row['id']}'>Accept</a>";
    echo " | <a href='handle_request.php?action=reject&id={$row['id']}'>Reject</a><br>";
}
?>
<a href="dashboard.php">Back to Dashboard</a>
