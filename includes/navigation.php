    <nav class="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">
                    <a href="index.php">
                        <i class="fas fa-network-wired"></i>
                        <span><?php echo SITE_NAME; ?></span>
                    </a>
                </div>
                
                <div class="nav-toggle" id="navToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <ul class="nav-menu" id="navMenu">
                    <li><a href="index.php" class="<?php echo isActive('index'); ?>"><?php echo $translations['nav_home']; ?></a></li>
                    <li><a href="services.php" class="<?php echo isActive('services'); ?>"><?php echo $translations['nav_services']; ?></a></li>
                    <li><a href="products.php" class="<?php echo isActive('products'); ?>"><?php echo $translations['nav_products']; ?></a></li>
                    <li><a href="about.php" class="<?php echo isActive('about'); ?>"><?php echo $translations['nav_about']; ?></a></li>
                    <li><a href="contact.php" class="<?php echo isActive('contact'); ?>"><?php echo $translations['nav_contact']; ?></a></li>
                </ul>
            </div>
        </div>
    </nav>
