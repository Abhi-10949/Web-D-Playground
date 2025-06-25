<?php
session_start();
require_once 'config/database.php';

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: index.php");
    exit();
}

$user_id = $_SESSION['user_id'];
$user_name = $_SESSION['user_name'];

try {
    $pdo = getDBConnection();
    
    // Get posts with user information and like status
    $stmt = $pdo->prepare("
        SELECT 
            p.*,
            u.fullname,
            u.profile_picture,
            COUNT(DISTINCT l.id) as likes_count,
            COUNT(DISTINCT c.id) as comments_count,
            EXISTS(SELECT 1 FROM likes WHERE post_id = p.id AND user_id = ?) as user_liked
        FROM posts p
        JOIN users u ON p.user_id = u.id
        LEFT JOIN likes l ON p.id = l.post_id
        LEFT JOIN comments c ON p.id = c.post_id
        GROUP BY p.id
        ORDER BY p.created_at DESC
    ");
    $stmt->execute([$user_id]);
    $posts = $stmt->fetchAll();
    
    // Get suggested friends
    $stmt = $pdo->prepare("
        SELECT u.id, u.fullname, u.profile_picture
        FROM users u
        WHERE u.id != ? 
        AND u.id NOT IN (
            SELECT friend_id FROM friendships WHERE user_id = ?
            UNION
            SELECT user_id FROM friendships WHERE friend_id = ?
        )
        LIMIT 5
    ");
    $stmt->execute([$user_id, $user_id, $user_id]);
    $suggested_friends = $stmt->fetchAll();
    
} catch (PDOException $e) {
    $posts = [];
    $suggested_friends = [];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - SocialConnect</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <div class="dashboard">
        <!-- Navigation -->
        <nav class="navbar">
            <div class="navbar-brand">
                <i class="fas fa-users"></i> SocialConnect
            </div>
            <div class="navbar-nav">
                <a href="dashboard.php" class="nav-link">
                    <i class="fas fa-home"></i> Home
                </a>
                <a href="profile.php" class="nav-link">
                    <i class="fas fa-user"></i> Profile
                </a>
                <a href="messages.php" class="nav-link">
                    <i class="fas fa-envelope"></i> Messages
                </a>
                <a href="friends.php" class="nav-link">
                    <i class="fas fa-users"></i> Friends
                </a>
                <div class="user-avatar">
                    <?php echo strtoupper(substr($user_name, 0, 1)); ?>
                </div>
                <a href="auth/logout.php" class="nav-link">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </a>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="main-content">
            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Create Post Widget -->
                <div class="widget">
                    <h3>Create Post</h3>
                    <div class="post-form">
                        <textarea class="post-input" placeholder="What's on your mind?"></textarea>
                        <div class="post-actions">
                            <button class="post-btn">Post</button>
                        </div>
                    </div>
                </div>

                <!-- Suggested Friends Widget -->
                <div class="widget">
                    <h3>Suggested Friends</h3>
                    <?php if (!empty($suggested_friends)): ?>
                        <?php foreach ($suggested_friends as $friend): ?>
                            <div class="friend-suggestion">
                                <div class="user-avatar"><?php echo strtoupper(substr($friend['fullname'], 0, 1)); ?></div>
                                <div class="friend-info">
                                    <h4><?php echo htmlspecialchars($friend['fullname']); ?></h4>
                                    <button class="btn-add-friend" data-user-id="<?php echo $friend['id']; ?>">
                                        Add Friend
                                    </button>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <p>No suggestions available</p>
                    <?php endif; ?>
                </div>

                <!-- Quick Stats Widget -->
                <div class="widget">
                    <h3>Your Stats</h3>
                    <div class="stats">
                        <div class="stat">
                            <i class="fas fa-file-alt"></i>
                            <span>Posts: 0</span>
                        </div>
                        <div class="stat">
                            <i class="fas fa-users"></i>
                            <span>Friends: 0</span>
                        </div>
                        <div class="stat">
                            <i class="fas fa-heart"></i>
                            <span>Likes: 0</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feed -->
            <div class="feed">
                <?php if (!empty($posts)): ?>
                    <?php foreach ($posts as $post): ?>
                        <div class="post" data-post-id="<?php echo $post['id']; ?>">
                            <div class="post-header">
                                <div class="post-avatar">
                                    <?php echo strtoupper(substr($post['fullname'], 0, 1)); ?>
                                </div>
                                <div class="post-info">
                                    <h4><?php echo htmlspecialchars($post['fullname']); ?></h4>
                                    <span class="post-time">
                                        <?php echo date('M j, Y g:i A', strtotime($post['created_at'])); ?>
                                    </span>
                                </div>
                            </div>
                            <div class="post-content">
                                <?php echo nl2br(htmlspecialchars($post['content'])); ?>
                            </div>
                            <div class="post-actions-bar">
                                <button class="action-btn like-btn <?php echo $post['user_liked'] ? 'liked' : ''; ?>" 
                                        onclick="toggleLike(<?php echo $post['id']; ?>)">
                                    <i class="<?php echo $post['user_liked'] ? 'fas' : 'far'; ?> fa-heart"></i>
                                    <span class="like-count"><?php echo $post['likes_count']; ?></span>
                                    Like
                                </button>
                                <button class="action-btn" onclick="showComments(<?php echo $post['id']; ?>)">
                                    <i class="far fa-comment"></i>
                                    <span class="comment-count"><?php echo $post['comments_count']; ?></span>
                                    Comment
                                </button>
                                <button class="action-btn">
                                    <i class="far fa-share-square"></i>
                                    Share
                                </button>
                            </div>
                            
                            <!-- Comments Section (Hidden by default) -->
                            <div class="comments-section" id="comments-<?php echo $post['id']; ?>" style="display: none;">
                                <div class="comment-form">
                                    <textarea class="comment-input" placeholder="Write a comment..."></textarea>
                                    <button class="comment-btn" onclick="addComment(<?php echo $post['id']; ?>)">Comment</button>
                                </div>
                                <div class="comments-list">
                                    <!-- Comments will be loaded here -->
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <div class="widget">
                        <h3>Welcome to SocialConnect!</h3>
                        <p>No posts yet. Be the first to share something!</p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <script src="js/main.js"></script>
    <script>
        // Additional dashboard-specific JavaScript
        function showComments(postId) {
            const commentsSection = document.getElementById(`comments-${postId}`);
            if (commentsSection.style.display === 'none') {
                commentsSection.style.display = 'block';
                loadComments(postId);
            } else {
                commentsSection.style.display = 'none';
            }
        }

        function loadComments(postId) {
            fetch(`actions/get_comments.php?post_id=${postId}`)
                .then(response => response.json())
                .then(data => {
                    const commentsList = document.querySelector(`#comments-${postId} .comments-list`);
                    commentsList.innerHTML = '';
                    
                    data.forEach(comment => {
                        const commentElement = document.createElement('div');
                        commentElement.className = 'comment';
                        commentElement.innerHTML = `
                            <div class="comment-header">
                                <strong>${comment.fullname}</strong>
                                <span>${comment.created_at}</span>
                            </div>
                            <div class="comment-content">${comment.content}</div>
                        `;
                        commentsList.appendChild(commentElement);
                    });
                });
        }

        function addComment(postId) {
            const commentInput = document.querySelector(`#comments-${postId} .comment-input`);
            const content = commentInput.value.trim();
            
            if (!content) return;
            
            fetch('actions/add_comment.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post_id: postId,
                    content: content
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    commentInput.value = '';
                    loadComments(postId);
                    // Update comment count
                    const commentCount = document.querySelector(`[data-post-id="${postId}"] .comment-count`);
                    commentCount.textContent = parseInt(commentCount.textContent) + 1;
                }
            });
        }

        // Add friend functionality
        document.querySelectorAll('.btn-add-friend').forEach(button => {
            button.addEventListener('click', function() {
                const userId = this.dataset.userId;
                fetch('actions/send_friend_request.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        friend_id: userId
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        this.textContent = 'Request Sent';
                        this.disabled = true;
                    }
                });
            });
        });
    </script>
</body>
</html> 