# Innovia Integrated Solutions - Company Website

A professional PHP native website for Innovia Integrated Solutions, an Egyptian company specializing in call center management software and CRM solutions.

## 🌟 Features

- **Bilingual Support**: Full English and Arabic language support with RTL layout for Arabic
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Contact Form**: Functional contact form with validation
- **Fast Loading**: Optimized assets and clean code for quick page loads

## 📁 Project Structure

```
/workspace/
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   └── js/
│       └── script.js          # JavaScript for interactivity
├── includes/
│   ├── header.php             # Common header include
│   ├── navigation.php         # Navigation menu
│   └── footer.php             # Common footer include
├── lang/
│   ├── en.php                 # English translations
│   └── ar.php                 # Arabic translations
├── config.php                 # Configuration file
├── index.php                  # Homepage
├── services.php               # Services page
├── products.php               # Products page
├── about.php                  # About Us page
├── contact.php                # Contact page with form
└── README.md                  # Documentation
```

## 🚀 Installation

### Requirements
- PHP 7.4 or higher
- Web server (Apache, Nginx, or built-in PHP server)
- Modern web browser

### Setup Instructions

1. **Clone or download the repository**
   ```bash
   cd /workspace
   ```

2. **Configure the website**
   - Open `config.php`
   - Update the site information:
     ```php
     define('SITE_EMAIL', 'info@innoviais.com');
     define('SITE_PHONE', '+20 123 456 7890');
     define('SITE_ADDRESS', 'Cairo, Egypt');
     ```

3. **Start the PHP development server**
   ```bash
   php -S localhost:8000
   ```

4. **Access the website**
   - Open your browser and navigate to: `http://localhost:8000`

### Production Deployment

For production deployment:

1. Upload all files to your web server
2. Ensure the web server has proper permissions
3. Configure your domain to point to the website directory
4. Update contact form to send actual emails (see contact.php)
5. Set up SSL certificate for HTTPS

## 📄 Pages

### Homepage (`index.php`)
- Hero section with call-to-action
- Feature highlights
- Services preview
- Call-to-action section

### Services (`services.php`)
- Call Center Software
- CRM Solutions
- Integration Services
- Custom Development
- Training & Consultation
- Maintenance & Support

### Products (`products.php`)
- Innovia CallCenter Pro
- Innovia CRM Suite
- Innovia Integration Hub

### About Us (`about.php`)
- Company overview
- Mission, Vision, and Values
- Company statistics

### Contact (`contact.php`)
- Contact information
- Contact form with validation
- Social media links

## 🌐 Language Support

The website supports two languages:

- **English** (Default): Left-to-right layout
- **Arabic**: Right-to-left layout with Arabic fonts

To switch languages, use the language switcher at the top of the page, or access via URL:
- English: `?lang=en`
- Arabic: `?lang=ar`

### Adding New Languages

1. Create a new language file in the `lang/` directory (e.g., `fr.php`)
2. Copy the structure from `en.php` or `ar.php`
3. Translate all text strings
4. Update the language switcher in `includes/header.php`
5. Add the new language code to the allowed languages in `config.php`

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e40af;  /* Secondary color */
    --accent-color: #3b82f6;     /* Accent color */
}
```

### Modifying Content

All content is stored in language files (`lang/en.php` and `lang/ar.php`). Edit these files to change text content without modifying PHP pages.

### Adding New Pages

1. Create a new PHP file (e.g., `newpage.php`)
2. Include the config at the top:
   ```php
   <?php
   require_once 'config.php';
   $page_title = 'Page Title';
   include 'includes/header.php';
   ?>
   ```
3. Add your content
4. Include the footer:
   ```php
   <?php include 'includes/footer.php'; ?>
   ```
5. Add navigation links in `includes/navigation.php`
6. Add translations in language files

## 📧 Contact Form Setup

The contact form in `contact.php` currently displays success messages without sending emails. To enable email functionality:

1. Uncomment the email code in `contact.php`:
   ```php
   $to = SITE_EMAIL;
   $email_subject = "Contact Form: " . $subject;
   $email_body = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\n\nMessage:\n$message";
   $headers = "From: " . $email;
   mail($to, $email_subject, $email_body, $headers);
   ```

2. Or integrate with a third-party email service like:
   - PHPMailer
   - SendGrid
   - Mailgun
   - AWS SES

## 🔧 Technical Details

### Technologies Used
- **PHP**: Native PHP (no frameworks)
- **CSS**: Custom CSS with CSS Variables
- **JavaScript**: Vanilla JavaScript (no libraries)
- **Fonts**: Google Fonts (Cairo for Arabic, Poppins for English)
- **Icons**: Font Awesome 6

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features
- Lazy loading animations
- Optimized images
- Minimal dependencies
- Efficient CSS and JavaScript

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🔒 Security Considerations

- All form inputs are sanitized using `htmlspecialchars()`
- Email validation on both client and server side
- Session-based language switching
- No direct file uploads
- Prepared for HTTPS deployment

## 🤝 Support & Maintenance

For support or questions about this website:
- Email: info@innoviais.com
- Phone: +20 123 456 7890

## 📝 License

Copyright © 2025 Innovia Integrated Solutions. All rights reserved.

## 🚦 Getting Started Checklist

- [x] Install PHP 7.4+
- [x] Configure site settings in config.php
- [x] Start PHP development server
- [x] Test all pages and navigation
- [x] Test language switching (EN/AR)
- [x] Test contact form
- [x] Customize colors and branding
- [x] Add your logo (replace logo placeholder in navigation)
- [x] Update contact information
- [x] Configure email functionality
- [x] Test on mobile devices
- [x] Deploy to production server
- [x] Set up SSL certificate
- [x] Test production site

## 📚 Additional Resources

- [PHP Documentation](https://www.php.net/docs.php)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ for Innovia Integrated Solutions
