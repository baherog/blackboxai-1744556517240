<?php
require_once 'config.php';
$page_title = $translations['nav_services'];
include 'includes/header.php';
?>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1><?php echo $translations['services_title']; ?></h1>
            <p><?php echo $translations['services_subtitle']; ?></p>
        </div>
    </section>

    <!-- Services Section -->
    <section class="section services-detail">
        <div class="container">
            <div class="services-list">
                
                <!-- Service 1 -->
                <div class="service-item">
                    <div class="service-icon">
                        <i class="fas fa-phone-volume"></i>
                    </div>
                    <div class="service-content">
                        <h3><?php echo $translations['service1_title']; ?></h3>
                        <p><?php echo $translations['service1_desc']; ?></p>
                    </div>
                </div>
                
                <!-- Service 2 -->
                <div class="service-item">
                    <div class="service-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <div class="service-content">
                        <h3><?php echo $translations['service2_title']; ?></h3>
                        <p><?php echo $translations['service2_desc']; ?></p>
                    </div>
                </div>
                
                <!-- Service 3 -->
                <div class="service-item">
                    <div class="service-icon">
                        <i class="fas fa-plug"></i>
                    </div>
                    <div class="service-content">
                        <h3><?php echo $translations['service3_title']; ?></h3>
                        <p><?php echo $translations['service3_desc']; ?></p>
                    </div>
                </div>
                
                <!-- Service 4 -->
                <div class="service-item">
                    <div class="service-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <div class="service-content">
                        <h3><?php echo $translations['service4_title']; ?></h3>
                        <p><?php echo $translations['service4_desc']; ?></p>
                    </div>
                </div>
                
                <!-- Service 5 -->
                <div class="service-item">
                    <div class="service-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="service-content">
                        <h3><?php echo $translations['service5_title']; ?></h3>
                        <p><?php echo $translations['service5_desc']; ?></p>
                    </div>
                </div>
                
                <!-- Service 6 -->
                <div class="service-item">
                    <div class="service-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <div class="service-content">
                        <h3><?php echo $translations['service6_title']; ?></h3>
                        <p><?php echo $translations['service6_desc']; ?></p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
        <div class="container">
            <div class="cta-content">
                <h2>Interested in Our Services?</h2>
                <p>Contact us to discuss how we can help your business grow.</p>
                <a href="contact.php" class="btn btn-primary">Contact Us</a>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
