<?php
session_start();
$conn = new mysqli("localhost", "root", "", "friend_system");

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

$user_id = $_SESSION['user_id'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $receiver_id = $_POST['receiver_id'];
    $conn->query("INSERT INTO friend_requests (sender_id, receiver_id) VALUES ($user_id, $receiver_id)");
    echo "Friend request sent!<br><br>";
}

// Show list of users to send request to
$result = $conn->query("SELECT id, username FROM users WHERE id != $user_id");
echo "<form method='post'>";
echo "<select name='receiver_id'>";
while ($row = $result->fetch_assoc()) {
    echo "<option value='{$row['id']}'>{$row['username']}</option>";
}
echo "</select>";
echo "<button type='submit'>Send Request</button>";
echo "</form>";
?>
<a href="dashboard.php">Back to Dashboard</a>
