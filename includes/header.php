<!DOCTYPE html>
<html lang="<?php echo $lang; ?>" dir="<?php echo $lang === 'ar' ? 'rtl' : 'ltr'; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo SITE_TITLE; ?> - Leading provider of Call Center Management and CRM Software in Egypt">
    <meta name="keywords" content="call center software, CRM, Egypt, customer relationship management, call center solutions">
    <title><?php echo isset($page_title) ? $page_title . ' - ' . SITE_NAME : SITE_TITLE; ?></title>
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body class="<?php echo $lang === 'ar' ? 'rtl' : 'ltr'; ?>">
    
    <!-- Language Switcher -->
    <div class="language-switcher">
        <a href="?lang=en" class="<?php echo $lang === 'en' ? 'active' : ''; ?>">English</a>
        <a href="?lang=ar" class="<?php echo $lang === 'ar' ? 'active' : ''; ?>">العربية</a>
    </div>
    
    <!-- Navigation -->
    <?php include 'includes/navigation.php'; ?>
