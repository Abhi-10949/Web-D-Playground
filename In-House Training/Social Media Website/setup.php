<?php
require_once 'config/database.php';

echo "<h1>SocialConnect Database Setup</h1>";

try {
    // Initialize database tables
    initializeDatabase();
    echo "<p>✅ Database tables created successfully!</p>";
    
    // Create sample users for testing
    $pdo = getDBConnection();
    
    // Check if sample users already exist
    $stmt = $pdo->prepare("SELECT COUNT(*) as count FROM users");
    $stmt->execute();
    $userCount = $stmt->fetch()['count'];
    
    if ($userCount == 0) {
        // Create sample users
        $sampleUsers = [
            ['John Doe', 'john@example.com', 'password123'],
            ['Jane Smith', 'jane@example.com', 'password123'],
            ['Mike Johnson', 'mike@example.com', 'password123'],
            ['Sarah Wilson', 'sarah@example.com', 'password123'],
            ['David Brown', 'david@example.com', 'password123']
        ];
        
        foreach ($sampleUsers as $user) {
            $hashed_password = password_hash($user[2], PASSWORD_DEFAULT);
            $stmt = $pdo->prepare("INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)");
            $stmt->execute([$user[0], $user[1], $hashed_password]);
        }
        
        echo "<p>✅ Sample users created successfully!</p>";
        
        // Create sample posts
        $samplePosts = [
            [1, 'Hello everyone! Welcome to SocialConnect! 🎉'],
            [2, 'Just finished a great workout! 💪 Feeling energized!'],
            [3, 'Working on some exciting new projects today. Can\'t wait to share more!'],
            [4, 'Beautiful day for a walk in the park! 🌳'],
            [5, 'Learning new technologies is always exciting! #coding #learning'],
            [1, 'Thanks everyone for the warm welcome! This platform is amazing!'],
            [2, 'Anyone up for a coffee meetup this weekend? ☕'],
            [3, 'Just discovered this awesome new restaurant downtown. Highly recommend! 🍕']
        ];
        
        foreach ($samplePosts as $post) {
            $stmt = $pdo->prepare("INSERT INTO posts (user_id, content) VALUES (?, ?)");
            $stmt->execute([$post[0], $post[1]]);
        }
        
        echo "<p>✅ Sample posts created successfully!</p>";
        
        // Create some sample likes
        $sampleLikes = [
            [2, 1], [3, 1], [4, 1], [5, 1], // John's first post
            [1, 2], [3, 2], [4, 2], // Jane's post
            [1, 3], [2, 3], [5, 3], // Mike's post
            [1, 4], [2, 4], [3, 4], [5, 4], // Sarah's post
            [1, 5], [2, 5], [3, 5], [4, 5] // David's post
        ];
        
        foreach ($sampleLikes as $like) {
            $stmt = $pdo->prepare("INSERT INTO likes (user_id, post_id) VALUES (?, ?)");
            $stmt->execute([$like[0], $like[1]]);
        }
        
        // Update post like counts
        $stmt = $pdo->prepare("
            UPDATE posts p 
            SET likes_count = (
                SELECT COUNT(*) 
                FROM likes l 
                WHERE l.post_id = p.id
            )
        ");
        $stmt->execute();
        
        echo "<p>✅ Sample likes created successfully!</p>";
        
        // Create some sample comments
        $sampleComments = [
            [2, 1, 'Welcome to the community! 🎉'],
            [3, 1, 'Great to be here!'],
            [4, 2, 'Keep up the great work! 💪'],
            [5, 2, 'You inspire me!'],
            [1, 3, 'What kind of projects are you working on?'],
            [2, 3, 'Sounds exciting!'],
            [3, 4, 'Nature is the best therapy! 🌿'],
            [1, 5, 'What technologies are you learning?']
        ];
        
        foreach ($sampleComments as $comment) {
            $stmt = $pdo->prepare("INSERT INTO comments (user_id, post_id, content) VALUES (?, ?, ?)");
            $stmt->execute([$comment[0], $comment[1], $comment[2]]);
        }
        
        // Update post comment counts
        $stmt = $pdo->prepare("
            UPDATE posts p 
            SET comments_count = (
                SELECT COUNT(*) 
                FROM comments c 
                WHERE c.post_id = p.id
            )
        ");
        $stmt->execute();
        
        echo "<p>✅ Sample comments created successfully!</p>";
        
        // Create some sample friendships
        $sampleFriendships = [
            [1, 2, 'accepted'],
            [1, 3, 'accepted'],
            [2, 4, 'accepted'],
            [3, 5, 'accepted'],
            [1, 4, 'pending'],
            [2, 5, 'pending']
        ];
        
        foreach ($sampleFriendships as $friendship) {
            $stmt = $pdo->prepare("INSERT INTO friendships (user_id, friend_id, status) VALUES (?, ?, ?)");
            $stmt->execute([$friendship[0], $friendship[1], $friendship[2]]);
        }
        
        echo "<p>✅ Sample friendships created successfully!</p>";
        
        echo "<h2>🎉 Setup Complete!</h2>";
        echo "<p>Your SocialConnect database has been initialized with sample data.</p>";
        echo "<p><strong>Sample Users:</strong></p>";
        echo "<ul>";
        foreach ($sampleUsers as $user) {
            echo "<li><strong>{$user[0]}</strong> - {$user[1]} (Password: {$user[2]})</li>";
        }
        echo "</ul>";
        echo "<p><a href='index.php' style='background: #667eea; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>Go to Login Page</a></p>";
        
    } else {
        echo "<p>⚠️ Database already contains users. Setup skipped.</p>";
        echo "<p><a href='index.php' style='background: #667eea; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>Go to Login Page</a></p>";
    }
    
} catch (Exception $e) {
    echo "<p style='color: red;'>❌ Error: " . $e->getMessage() . "</p>";
    echo "<p>Please check your database configuration in config/database.php</p>";
}
?> 