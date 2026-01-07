<?php
require_once 'config.php';
$page_title = $translations['nav_about'];
include 'includes/header.php';
?>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1><?php echo $translations['about_title']; ?></h1>
            <p><?php echo $translations['about_subtitle']; ?></p>
        </div>
    </section>

    <!-- About Content -->
    <section class="section about-content">
        <div class="container">
            <div class="about-text">
                <p><?php echo $translations['about_desc1']; ?></p>
                <p><?php echo $translations['about_desc2']; ?></p>
                <p><?php echo $translations['about_desc3']; ?></p>
            </div>
        </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="section mvv-section">
        <div class="container">
            <div class="mvv-grid">
                
                <div class="mvv-card">
                    <div class="mvv-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3><?php echo $translations['about_mission_title']; ?></h3>
                    <p><?php echo $translations['about_mission_desc']; ?></p>
                </div>
                
                <div class="mvv-card">
                    <div class="mvv-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3><?php echo $translations['about_vision_title']; ?></h3>
                    <p><?php echo $translations['about_vision_desc']; ?></p>
                </div>
                
                <div class="mvv-card">
                    <div class="mvv-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3><?php echo $translations['about_values_title']; ?></h3>
                    <ul>
                        <li><?php echo $translations['about_value1']; ?></li>
                        <li><?php echo $translations['about_value2']; ?></li>
                        <li><?php echo $translations['about_value3']; ?></li>
                        <li><?php echo $translations['about_value4']; ?></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="section stats-section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <i class="fas fa-building"></i>
                    <h3>100+</h3>
                    <p>Happy Clients</p>
                </div>
                <div class="stat-item">
                    <i class="fas fa-project-diagram"></i>
                    <h3>250+</h3>
                    <p>Projects Completed</p>
                </div>
                <div class="stat-item">
                    <i class="fas fa-calendar-alt"></i>
                    <h3>10+</h3>
                    <p>Years Experience</p>
                </div>
                <div class="stat-item">
                    <i class="fas fa-award"></i>
                    <h3>15+</h3>
                    <p>Industry Awards</p>
                </div>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
