<?php
session_start();
$conn = new mysqli("localhost", "root", "", "friend_system");

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

$user_id = $_SESSION['user_id'];

$result = $conn->query("
    SELECT u.username 
    FROM users u
    JOIN friend_requests f ON (
        (f.sender_id = $user_id AND f.receiver_id = u.id)
        OR (f.receiver_id = $user_id AND f.sender_id = u.id)
    )
    WHERE f.status = 'accepted'
");

echo "<h3>Your Friends:</h3>";
while ($row = $result->fetch_assoc()) {
    echo $row['username'] . "<br>";
}
?>
<a href="dashboard.php">Back to Dashboard</a>