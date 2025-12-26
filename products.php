<?php
require_once 'config.php';
$page_title = $translations['nav_products'];
include 'includes/header.php';
?>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1><?php echo $translations['products_title']; ?></h1>
            <p><?php echo $translations['products_subtitle']; ?></p>
        </div>
    </section>

    <!-- Products Section -->
    <section class="section products-detail">
        <div class="container">
            
            <!-- Product 1 -->
            <div class="product-card">
                <div class="product-header">
                    <i class="fas fa-headset"></i>
                    <h3><?php echo $translations['product1_title']; ?></h3>
                </div>
                <p class="product-description"><?php echo $translations['product1_desc']; ?></p>
                <div class="product-features">
                    <h4><?php echo $translations['product1_features']; ?></h4>
                    <ul>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product1_feature1']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product1_feature2']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product1_feature3']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product1_feature4']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product1_feature5']; ?></li>
                    </ul>
                </div>
                <a href="contact.php" class="btn btn-primary">Request Demo</a>
            </div>
            
            <!-- Product 2 -->
            <div class="product-card">
                <div class="product-header">
                    <i class="fas fa-users-cog"></i>
                    <h3><?php echo $translations['product2_title']; ?></h3>
                </div>
                <p class="product-description"><?php echo $translations['product2_desc']; ?></p>
                <div class="product-features">
                    <h4><?php echo $translations['product1_features']; ?></h4>
                    <ul>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product2_feature1']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product2_feature2']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product2_feature3']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product2_feature4']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product2_feature5']; ?></li>
                    </ul>
                </div>
                <a href="contact.php" class="btn btn-primary">Request Demo</a>
            </div>
            
            <!-- Product 3 -->
            <div class="product-card">
                <div class="product-header">
                    <i class="fas fa-project-diagram"></i>
                    <h3><?php echo $translations['product3_title']; ?></h3>
                </div>
                <p class="product-description"><?php echo $translations['product3_desc']; ?></p>
                <div class="product-features">
                    <h4><?php echo $translations['product1_features']; ?></h4>
                    <ul>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product3_feature1']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product3_feature2']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product3_feature3']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product3_feature4']; ?></li>
                        <li><i class="fas fa-check"></i> <?php echo $translations['product3_feature5']; ?></li>
                    </ul>
                </div>
                <a href="contact.php" class="btn btn-primary">Request Demo</a>
            </div>
            
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
