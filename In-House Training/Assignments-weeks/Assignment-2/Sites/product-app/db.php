<?php
session_start();
$db = new PDO("sqlite:product_app.db");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>
