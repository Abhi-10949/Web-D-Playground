<?php include("db.php"); ?>
<?php include("header.php"); ?>

<!-- Form to Post Message -->
<form method="POST" action="">
    <textarea name="message" rows="3" cols="50" placeholder="Write a message..." required></textarea><br>
    <input type="submit" name="submit" value="Post Message">
</form>

<?php
// Insert message into database
if (isset($_POST['submit'])) {
    $msg = $conn->real_escape_string($_POST['message']);
    $conn->query("INSERT INTO posts (message) VALUES ('$msg')");
    header("Location: index.php"); // Refresh to avoid resubmission
    exit();
}

// Pagination logic
$limit = 5; // posts per page
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$start = ($page - 1) * $limit;

$result = $conn->query("SELECT * FROM posts ORDER BY id DESC LIMIT $start, $limit");
?>

<div class="chat-box">
    <?php while ($row = $result->fetch_assoc()) { ?>
        <div class="message">
            <strong><?php echo htmlspecialchars($row['message']); ?></strong><br>
            <small><?php echo $row['created_at']; ?></small>
        </div>
        <hr>
    <?php } ?>
</div>

<!-- Pagination Links -->
<div class="pagination">
    <?php
    $res = $conn->query("SELECT COUNT(*) AS total FROM posts");
    $totalPosts = $res->fetch_assoc()['total'];
    $totalPages = ceil($totalPosts / $limit);

    for ($i = 1; $i <= $totalPages; $i++) {
        echo "<a href='?page=$i'>" . ($i == $page ? "<strong>$i</strong>" : $i) . "</a>";
    }
    ?>
</div>

<?php include("footer.php"); ?>
