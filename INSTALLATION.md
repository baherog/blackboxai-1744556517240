# Installation Guide - Innovia Integrated Solutions Website

## Quick Start (Development)

1. **Verify PHP Installation**
   ```bash
   php --version
   ```
   Make sure you have PHP 7.4 or higher installed.

2. **Navigate to the project directory**
   ```bash
   cd /workspace
   ```

3. **Start the PHP built-in server**
   ```bash
   php -S localhost:8000
   ```

4. **Open your browser**
   Navigate to: `http://localhost:8000`

## Production Deployment

### Option 1: Shared Hosting (cPanel)

1. **Upload Files**
   - Log in to your cPanel
   - Go to File Manager
   - Navigate to `public_html` directory
   - Upload all website files

2. **Set Permissions**
   - Ensure files have 644 permissions
   - Ensure directories have 755 permissions

3. **Test the Website**
   - Visit your domain name
   - Test all pages and functionality
   - Test language switching

### Option 2: VPS/Dedicated Server (Ubuntu/Debian)

1. **Install Apache and PHP**
   ```bash
   sudo apt update
   sudo apt install apache2 php libapache2-mod-php php-cli
   ```

2. **Enable Required Modules**
   ```bash
   sudo a2enmod rewrite
   sudo a2enmod headers
   sudo systemctl restart apache2
   ```

3. **Copy Website Files**
   ```bash
   sudo cp -r /workspace/* /var/www/html/
   sudo chown -R www-data:www-data /var/www/html/
   sudo chmod -R 755 /var/www/html/
   ```

4. **Configure Virtual Host**
   Create `/etc/apache2/sites-available/innovia.conf`:
   ```apache
   <VirtualHost *:80>
       ServerName yourdomain.com
       ServerAlias www.yourdomain.com
       DocumentRoot /var/www/html
       
       <Directory /var/www/html>
           Options -Indexes +FollowSymLinks
           AllowOverride All
           Require all granted
       </Directory>
       
       ErrorLog ${APACHE_LOG_DIR}/error.log
       CustomLog ${APACHE_LOG_DIR}/access.log combined
   </VirtualHost>
   ```

5. **Enable Site and Restart Apache**
   ```bash
   sudo a2ensite innovia.conf
   sudo systemctl restart apache2
   ```

6. **Install SSL Certificate (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-apache
   sudo certbot --apache -d yourdomain.com -d www.yourdomain.com
   ```

### Option 3: Nginx + PHP-FPM

1. **Install Nginx and PHP**
   ```bash
   sudo apt update
   sudo apt install nginx php-fpm php-cli
   ```

2. **Configure Nginx**
   Create `/etc/nginx/sites-available/innovia`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;
       root /var/www/html;
       index index.php index.html;
       
       location / {
           try_files $uri $uri/ /index.php?$query_string;
       }
       
       location ~ \.php$ {
           include snippets/fastcgi-php.conf;
           fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
       }
       
       location ~ /\.ht {
           deny all;
       }
   }
   ```

3. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/innovia /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

## Configuration

### 1. Update Site Information

Edit `config.php`:
```php
define('SITE_EMAIL', 'your-email@innoviais.com');
define('SITE_PHONE', '+20 XXX XXX XXXX');
define('SITE_ADDRESS', 'Your Address, Cairo, Egypt');
```

### 2. Configure Email (Contact Form)

Option A - Using PHP mail() function:
- Ensure your server has mail configured
- Uncomment the mail code in `contact.php`

Option B - Using PHPMailer (Recommended):
```bash
composer require phpmailer/phpmailer
```

Then update `contact.php` to use PHPMailer.

### 3. Add Your Logo

1. Create your logo image (recommended size: 200x50px)
2. Save it in the `assets/images/` directory
3. Update `includes/navigation.php` to replace the icon with your logo image

### 4. Update Social Media Links

Edit `includes/footer.php` and replace `#` with your actual social media URLs:
```php
<a href="https://facebook.com/yourpage"><i class="fab fa-facebook"></i></a>
<a href="https://twitter.com/yourpage"><i class="fab fa-twitter"></i></a>
```

## Testing Checklist

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Language switching works (English/Arabic)
- [ ] Contact form submits successfully
- [ ] All pages are responsive on mobile
- [ ] Images load properly
- [ ] Social media links work
- [ ] Email functionality works
- [ ] SSL certificate is installed
- [ ] Website loads over HTTPS
- [ ] .htaccess rules work correctly
- [ ] No PHP errors in error logs

## Troubleshooting

### Problem: White screen / PHP errors
**Solution**: 
```bash
# Check PHP error log
sudo tail -f /var/log/apache2/error.log
# or for Nginx
sudo tail -f /var/log/nginx/error.log
```

### Problem: .htaccess not working
**Solution**: 
- Ensure mod_rewrite is enabled: `sudo a2enmod rewrite`
- Check AllowOverride is set to "All" in Apache config
- Restart Apache: `sudo systemctl restart apache2`

### Problem: Contact form not sending emails
**Solution**: 
- Verify PHP mail is configured
- Check spam folder
- Use PHPMailer instead of mail()
- Check error logs

### Problem: CSS/JS not loading
**Solution**: 
- Check file paths are correct
- Verify file permissions (644 for files)
- Clear browser cache
- Check browser console for errors

### Problem: Language switching not working
**Solution**: 
- Ensure sessions are enabled in PHP
- Check that lang/ directory has both en.php and ar.php
- Verify session.save_path is writable

## Performance Optimization

1. **Enable OPcache** (php.ini):
   ```ini
   opcache.enable=1
   opcache.memory_consumption=128
   opcache.max_accelerated_files=4000
   ```

2. **Enable Gzip Compression**
   Already configured in .htaccess

3. **Use CDN for Assets**
   Consider using a CDN for Font Awesome and Google Fonts

4. **Optimize Images**
   - Compress images using tools like TinyPNG
   - Use WebP format for better compression
   - Implement lazy loading

## Security Best Practices

1. **Keep PHP Updated**
   ```bash
   sudo apt update && sudo apt upgrade php
   ```

2. **Secure File Permissions**
   ```bash
   # Files
   find /var/www/html -type f -exec chmod 644 {} \;
   # Directories
   find /var/www/html -type d -exec chmod 755 {} \;
   ```

3. **Hide PHP Version**
   Add to php.ini:
   ```ini
   expose_php = Off
   ```

4. **Backup Regularly**
   ```bash
   # Create backup
   tar -czf innovia-backup-$(date +%Y%m%d).tar.gz /var/www/html/
   ```

## Support

For technical support or questions:
- Email: info@innoviais.com
- Phone: +20 123 456 7890

---

Last Updated: December 2025
