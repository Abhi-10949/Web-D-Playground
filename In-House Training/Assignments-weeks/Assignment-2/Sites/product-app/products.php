<?php
include 'db.php';
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

$products = $db->query("SELECT * FROM products")->fetchAll();
?>

<h2>Welcome, <?= $_SESSION['username'] ?> | <a href="logout.php">Logout</a></h2>
<h3>Product List</h3>
<ul>
<?php foreach ($products as $row): ?>
    <li>
        <a href="product_details.php?id=<?= $row['id'] ?>">
            <?= htmlspecialchars($row['name']) ?> - ₹<?= $row['price'] ?>
        </a>
    </li>
<?php endforeach; ?>
</ul>
