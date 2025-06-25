<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}
echo "Welcome! <a href='logout.php'>Logout</a><br><br>";
?>
<a href="send_request.php">Send Friend Request</a><br>
<a href="friend_list.php">My Friends</a><br>
<a href="handle_request.php">Handle Requests</a><br>
