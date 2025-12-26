    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><?php echo $translations['footer_about']; ?></h3>
                    <p><?php echo $translations['footer_about_text']; ?></p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3><?php echo $translations['footer_quick_links']; ?></h3>
                    <ul class="footer-links">
                        <li><a href="index.php"><?php echo $translations['nav_home']; ?></a></li>
                        <li><a href="services.php"><?php echo $translations['nav_services']; ?></a></li>
                        <li><a href="products.php"><?php echo $translations['nav_products']; ?></a></li>
                        <li><a href="about.php"><?php echo $translations['nav_about']; ?></a></li>
                        <li><a href="contact.php"><?php echo $translations['nav_contact']; ?></a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3><?php echo $translations['footer_contact_info']; ?></h3>
                    <ul class="contact-info">
                        <li>
                            <i class="fas fa-envelope"></i>
                            <span><?php echo SITE_EMAIL; ?></span>
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            <span><?php echo SITE_PHONE; ?></span>
                        </li>
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span><?php echo SITE_ADDRESS; ?></span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p><?php echo $translations['footer_copyright']; ?></p>
            </div>
        </div>
    </footer>
    
    <!-- JavaScript -->
    <script src="assets/js/script.js"></script>
</body>
</html>
