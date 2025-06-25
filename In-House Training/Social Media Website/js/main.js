// Tab switching functionality
function showTab(tabName) {
    // Hide all auth forms
    const authForms = document.querySelectorAll('.auth-form');
    authForms.forEach(form => {
        form.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected form and activate corresponding button
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '#e9ecef';
        }
    });
    
    // Password confirmation validation
    const password = form.querySelector('input[name="password"]');
    const confirmPassword = form.querySelector('input[name="confirm_password"]');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
        isValid = false;
        confirmPassword.style.borderColor = '#e74c3c';
        showNotification('Passwords do not match!', 'error');
    }
    
    return isValid;
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'error') {
        notification.style.background = '#e74c3c';
    } else if (type === 'success') {
        notification.style.background = '#27ae60';
    } else {
        notification.style.background = '#3498db';
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login form');
    const registerForm = document.querySelector('#register form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                showNotification('Please fill in all required fields!', 'error');
            }
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                showNotification('Please fill in all required fields!', 'error');
            }
        });
    }
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.btn-social');
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Social login feature coming soon!', 'info');
        });
    });
});

// Dashboard functionality (if on dashboard page)
if (document.querySelector('.dashboard')) {
    // Like/Unlike posts
    function toggleLike(postId) {
        const likeBtn = document.querySelector(`[data-post-id="${postId}"] .like-btn`);
        const likeCount = document.querySelector(`[data-post-id="${postId}"] .like-count`);
        
        if (likeBtn.classList.contains('liked')) {
            likeBtn.classList.remove('liked');
            likeBtn.innerHTML = '<i class="far fa-heart"></i> Like';
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
        } else {
            likeBtn.classList.add('liked');
            likeBtn.innerHTML = '<i class="fas fa-heart"></i> Liked';
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        }
        
        // Send AJAX request to update like status
        fetch('actions/toggle_like.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post_id: postId
            })
        });
    }
    
    // Create new post
    function createPost() {
        const postInput = document.querySelector('.post-input');
        const content = postInput.value.trim();
        
        if (!content) {
            showNotification('Please write something to post!', 'error');
            return;
        }
        
        // Send AJAX request to create post
        fetch('actions/create_post.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: content
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                postInput.value = '';
                showNotification('Post created successfully!', 'success');
                // Reload posts or add new post to feed
                location.reload();
            } else {
                showNotification(data.message || 'Error creating post!', 'error');
            }
        })
        .catch(error => {
            showNotification('Error creating post!', 'error');
        });
    }
    
    // Add event listeners for dashboard functionality
    document.addEventListener('DOMContentLoaded', function() {
        const postBtn = document.querySelector('.post-btn');
        if (postBtn) {
            postBtn.addEventListener('click', createPost);
        }
        
        // Add like button event listeners
        const likeButtons = document.querySelectorAll('.like-btn');
        likeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const postId = this.closest('.post').dataset.postId;
                toggleLike(postId);
            });
        });
    });
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Search functionality
function searchUsers(query) {
    if (query.length < 2) return;
    
    fetch(`actions/search_users.php?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const searchResults = document.querySelector('.search-results');
            if (searchResults) {
                searchResults.innerHTML = '';
                data.forEach(user => {
                    const userElement = document.createElement('div');
                    userElement.className = 'search-result-item';
                    userElement.innerHTML = `
                        <div class="user-avatar">${user.name.charAt(0)}</div>
                        <div class="user-info">
                            <h4>${user.name}</h4>
                            <p>${user.email}</p>
                        </div>
                    `;
                    searchResults.appendChild(userElement);
                });
            }
        });
}

// Real-time notifications (simulated)
function checkNotifications() {
    // Simulate checking for new notifications
    fetch('actions/check_notifications.php')
        .then(response => response.json())
        .then(data => {
            if (data.notifications.length > 0) {
                data.notifications.forEach(notification => {
                    showNotification(notification.message, 'info');
                });
            }
        });
}

// Check for notifications every 30 seconds
setInterval(checkNotifications, 30000); 