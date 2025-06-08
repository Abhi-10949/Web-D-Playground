<?php
include 'db.php';

$db->exec("CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)");

$db->exec("CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    price REAL
)");

$db->exec("INSERT OR IGNORE INTO users (username, password) VALUES ('admin', '".md5('admin123')."')");

$db->exec("INSERT OR IGNORE INTO products (name, description, price) VALUES
    ('Laptop', 'A high-performance laptop.', 799.99),
    ('Smartphone', 'Latest Android smartphone.', 499.99),
    ('Headphones', 'Noise-cancelling headphones.', 149.99)
");

echo "Database setup complete.";
