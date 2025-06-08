<?php
include 'db.php';
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

if (!isset($_GET['id'])) {
    echo "No product selected.";
    exit();
}

$id = (int) $_GET['id'];
$stmt = $db->prepare("SELECT * FROM products WHERE id = ?");
$stmt->execute([$id]);
$product = $stmt->fetch();

if (!$product) {
    echo "Product not found.";
    exit();
}
?>

<h2><?= htmlspecialchars($product['name']) ?></h2>
<p><strong>Description:</strong> <?= htmlspecialchars($product['description']) ?></p>
<p><strong>Price:</strong> ₹<?= $product['price'] ?></p>
<a href="products.php">← Back to Product List</a> |
<a href="logout.php">Logout</a>
