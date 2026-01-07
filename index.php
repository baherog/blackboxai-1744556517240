<?php
require_once 'config.php';
$page_title = $translations['nav_home'];
include 'includes/header.php';
?>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-overlay"></div>
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title"><?php echo $translations['home_hero_title']; ?></h1>
                <p class="hero-subtitle"><?php echo $translations['home_hero_subtitle']; ?></p>
                <a href="contact.php" class="btn btn-primary"><?php echo $translations['home_hero_cta']; ?></a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="section features">
        <div class="container">
            <h2 class="section-title"><?php echo $translations['home_why_choose']; ?></h2>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3><?php echo $translations['home_feature1_title']; ?></h3>
                    <p><?php echo $translations['home_feature1_desc']; ?></p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3><?php echo $translations['home_feature2_title']; ?></h3>
                    <p><?php echo $translations['home_feature2_desc']; ?></p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-headset"></i>
                    </div>
                    <h3><?php echo $translations['home_feature3_title']; ?></h3>
                    <p><?php echo $translations['home_feature3_desc']; ?></p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3><?php echo $translations['home_feature4_title']; ?></h3>
                    <p><?php echo $translations['home_feature4_desc']; ?></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Preview -->
    <section class="section services-preview">
        <div class="container">
            <h2 class="section-title"><?php echo $translations['nav_services']; ?></h2>
            
            <div class="services-grid">
                <div class="service-card">
                    <i class="fas fa-phone-volume"></i>
                    <h3><?php echo $translations['service1_title']; ?></h3>
                    <p><?php echo substr($translations['service1_desc'], 0, 150) . '...'; ?></p>
                    <a href="services.php" class="btn btn-secondary">Learn More</a>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-handshake"></i>
                    <h3><?php echo $translations['service2_title']; ?></h3>
                    <p><?php echo substr($translations['service2_desc'], 0, 150) . '...'; ?></p>
                    <a href="services.php" class="btn btn-secondary">Learn More</a>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-plug"></i>
                    <h3><?php echo $translations['service3_title']; ?></h3>
                    <p><?php echo substr($translations['service3_desc'], 0, 150) . '...'; ?></p>
                    <a href="services.php" class="btn btn-secondary">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
        <div class="container">
            <div class="cta-content">
                <h2>Ready to Transform Your Business?</h2>
                <p>Contact us today to learn how our solutions can help you achieve your goals.</p>
                <a href="contact.php" class="btn btn-primary">Get in Touch</a>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
