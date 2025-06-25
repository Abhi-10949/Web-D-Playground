# SocialConnect - Social Media Website

A modern social media platform built with HTML, CSS, JavaScript, and PHP. Connect with friends, share posts, like and comment on content, and build your social network.

## Features

### Core Features
- **User Authentication**: Secure registration and login system
- **User Profiles**: Personal profiles with customizable information
- **Post Creation**: Share text posts with the community
- **Like System**: Like and unlike posts with real-time updates
- **Comment System**: Add comments to posts with threaded discussions
- **Friend System**: Send and accept friend requests
- **Real-time Notifications**: Get notified about likes, comments, and friend requests
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### Technical Features
- **Modern UI/UX**: Beautiful gradient design with smooth animations
- **Security**: Password hashing, SQL injection prevention, XSS protection
- **Database**: MySQL database with proper relationships
- **AJAX**: Dynamic content loading without page refreshes
- **Session Management**: Secure user sessions

## Prerequisites

Before running this project, make sure you have:

1. **Web Server**: Apache or Nginx
2. **PHP**: Version 7.4 or higher
3. **MySQL**: Version 5.7 or higher
4. **Web Browser**: Modern browser with JavaScript enabled

## Installation

### Step 1: Clone or Download
```bash
# If using Git
git clone <repository-url>
cd social-media-website

# Or download and extract the ZIP file
```

### Step 2: Database Setup
1. Create a new MySQL database:
```sql
CREATE DATABASE social_media_db;
```

2. Update database configuration in `config/database.php`:
```php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
define('DB_NAME', 'social_media_db');
```

3. Initialize the database tables by uncommenting the last line in `config/database.php`:
```php
// Change this line:
// initializeDatabase();
// To:
initializeDatabase();
```

4. Run the website once to create tables, then comment the line again.

### Step 3: Web Server Configuration
1. Place the project files in your web server's document root (e.g., `htdocs/` for XAMPP)
2. Ensure your web server can execute PHP files
3. Make sure the `uploads/` directory (if created) has write permissions

### Step 4: Access the Website
1. Start your web server and MySQL service
2. Open your browser and navigate to:
   ```
   http://localhost/social-media-website/
   ```
3. You should see the login/registration page

## Project Structure

```
social-media-website/
├── index.php              # Main landing page with login/register
├── dashboard.php          # Main dashboard after login
├── css/
│   └── style.css         # Main stylesheet
├── js/
│   └── main.js           # Client-side JavaScript
├── config/
│   └── database.php      # Database configuration
├── auth/
│   ├── login.php         # Login handler
│   ├── register.php      # Registration handler
│   └── logout.php        # Logout handler
├── actions/
│   ├── create_post.php   # Create new posts
│   ├── toggle_like.php   # Like/unlike posts
│   ├── add_comment.php   # Add comments
│   ├── get_comments.php  # Get comments for a post
│   └── send_friend_request.php # Send friend requests
└── README.md             # This file
```

## Usage

### For Users

1. **Registration**: Create a new account with your name, email, and password
2. **Login**: Sign in with your email and password
3. **Create Posts**: Use the "Create Post" widget to share your thoughts
4. **Interact**: Like and comment on posts from other users
5. **Connect**: Send friend requests to other users
6. **Profile**: View and edit your profile information

### For Developers

The codebase is well-structured and documented:

- **Frontend**: HTML5, CSS3, and vanilla JavaScript
- **Backend**: PHP with PDO for database operations
- **Database**: MySQL with proper relationships and constraints
- **Security**: Prepared statements, password hashing, input validation

## Customization

### Styling
- Modify `css/style.css` to change colors, fonts, and layout
- The design uses CSS Grid and Flexbox for responsive layouts
- Color scheme can be easily changed by updating CSS variables

### Functionality
- Add new features by creating PHP files in the `actions/` directory
- Extend the database schema in `config/database.php`
- Add new JavaScript functions in `js/main.js`

## Security Features

- **Password Hashing**: Uses PHP's `password_hash()` function
- **SQL Injection Prevention**: All database queries use prepared statements
- **XSS Protection**: Output is properly escaped using `htmlspecialchars()`
- **Session Security**: Secure session management with proper validation
- **Input Validation**: Server-side validation for all user inputs

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Internet Explorer 11+

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check database credentials in `config/database.php`
   - Ensure MySQL service is running
   - Verify database name exists

2. **Page Not Loading**
   - Check web server configuration
   - Ensure PHP is properly installed
   - Check file permissions

3. **Features Not Working**
   - Check browser console for JavaScript errors
   - Verify all files are in correct directories
   - Check PHP error logs

### Error Logs
- Check your web server's error logs for detailed error messages
- Enable PHP error reporting for debugging:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the code comments for guidance
3. Create an issue in the repository

## Future Enhancements

- Image upload functionality
- Real-time messaging
- Post sharing
- User search functionality
- Advanced privacy settings
- Mobile app development
- API endpoints for third-party integration

---

**Happy Coding! 🚀** 