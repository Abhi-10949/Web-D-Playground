<?php
session_start();

// Check if user is already logged in
if (isset($_SESSION['user_id'])) {
    header("Location: dashboard.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SocialConnect - Connect with Friends</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="hero-section">
            <div class="hero-content">
                <h1><i class="fas fa-users"></i> SocialConnect</h1>
                <p>Connect with friends, share your moments, and stay updated with what matters most.</p>
                <div class="features">
                    <div class="feature">
                        <i class="fas fa-share-alt"></i>
                        <span>Share Posts</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-comments"></i>
                        <span>Chat with Friends</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-heart"></i>
                        <span>Like & Comment</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="auth-section">
            <div class="auth-container">
                <div class="auth-tabs">
                    <button class="tab-btn active" onclick="showTab('login')">Login</button>
                    <button class="tab-btn" onclick="showTab('register')">Register</button>
                </div>
                
                <!-- Login Form -->
                <div id="login" class="auth-form active">
                    <h2>Welcome Back!</h2>
                    <form action="auth/login.php" method="POST">
                        <div class="form-group">
                            <i class="fas fa-envelope"></i>
                            <input type="email" name="email" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <i class="fas fa-lock"></i>
                            <input type="password" name="password" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn-primary">Login</button>
                    </form>
                    <div class="social-login">
                        <p>Or login with:</p>
                        <div class="social-buttons">
                            <button class="btn-social facebook">
                                <i class="fab fa-facebook-f"></i> Facebook
                            </button>
                            <button class="btn-social google">
                                <i class="fab fa-google"></i> Google
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Register Form -->
                <div id="register" class="auth-form">
                    <h2>Join SocialConnect</h2>
                    <form action="auth/register.php" method="POST">
                        <div class="form-group">
                            <i class="fas fa-user"></i>
                            <input type="text" name="fullname" placeholder="Full Name" required>
                        </div>
                        <div class="form-group">
                            <i class="fas fa-envelope"></i>
                            <input type="email" name="email" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <i class="fas fa-lock"></i>
                            <input type="password" name="password" placeholder="Password" required>
                        </div>
                        <div class="form-group">
                            <i class="fas fa-lock"></i>
                            <input type="password" name="confirm_password" placeholder="Confirm Password" required>
                        </div>
                        <button type="submit" class="btn-primary">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    <script src="js/main.js"></script>
</body>
</html> 