<?php
require_once 'config.php';
$page_title = $translations['nav_contact'];

// Handle form submission
$success_message = '';
$error_message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $company = htmlspecialchars(trim($_POST['company'] ?? ''));
    $subject = htmlspecialchars(trim($_POST['subject'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));
    
    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        $error_message = $translations['form_error'];
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = $translations['form_error'];
    } else {
        // In a real application, you would send an email here
        // For now, we'll just show a success message
        $success_message = $translations['form_success'];
        
        // You can add email sending functionality here
        // Example:
        // $to = SITE_EMAIL;
        // $email_subject = "Contact Form: " . $subject;
        // $email_body = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\n\nMessage:\n$message";
        // mail($to, $email_subject, $email_body);
    }
}

include 'includes/header.php';
?>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1><?php echo $translations['contact_title']; ?></h1>
            <p><?php echo $translations['contact_subtitle']; ?></p>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact-section">
        <div class="container">
            <div class="contact-intro">
                <p><?php echo $translations['contact_desc']; ?></p>
            </div>
            
            <div class="contact-grid">
                
                <!-- Contact Info -->
                <div class="contact-info">
                    <h3><?php echo $translations['contact_info_title']; ?></h3>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h4><?php echo $translations['footer_email']; ?></h4>
                            <p><?php echo SITE_EMAIL; ?></p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h4><?php echo $translations['footer_phone']; ?></h4>
                            <p><?php echo SITE_PHONE; ?></p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h4><?php echo $translations['footer_address']; ?></h4>
                            <p><?php echo SITE_ADDRESS; ?></p>
                        </div>
                    </div>
                    
                    <div class="social-links-large">
                        <h4><?php echo $translations['footer_follow']; ?></h4>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                
                <!-- Contact Form -->
                <div class="contact-form-wrapper">
                    <h3><?php echo $translations['contact_form_title']; ?></h3>
                    
                    <?php if ($success_message): ?>
                        <div class="alert alert-success"><?php echo $success_message; ?></div>
                    <?php endif; ?>
                    
                    <?php if ($error_message): ?>
                        <div class="alert alert-error"><?php echo $error_message; ?></div>
                    <?php endif; ?>
                    
                    <form method="POST" action="contact.php" class="contact-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name"><?php echo $translations['form_name']; ?> *</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email"><?php echo $translations['form_email']; ?> *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone"><?php echo $translations['form_phone']; ?></label>
                                <input type="tel" id="phone" name="phone">
                            </div>
                            
                            <div class="form-group">
                                <label for="company"><?php echo $translations['form_company']; ?></label>
                                <input type="text" id="company" name="company">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="subject"><?php echo $translations['form_subject']; ?></label>
                            <input type="text" id="subject" name="subject">
                        </div>
                        
                        <div class="form-group">
                            <label for="message"><?php echo $translations['form_message']; ?> *</label>
                            <textarea id="message" name="message" rows="6" required></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">
                            <?php echo $translations['form_submit']; ?>
                        </button>
                    </form>
                </div>
                
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
