<?php
// Configuration file for Innovia Integrated Solutions website
session_start();

// Site Configuration
define('SITE_NAME', 'Innovia Integrated Solutions');
define('SITE_TITLE', 'Innovia - Call Center & CRM Software Solutions');
define('SITE_EMAIL', 'info@innoviais.com');
define('SITE_PHONE', '+20 123 456 7890');
define('SITE_ADDRESS', 'Cairo, Egypt');

// Set default language
if (!isset($_SESSION['lang'])) {
    $_SESSION['lang'] = 'en';
}

// Handle language switching
if (isset($_GET['lang']) && in_array($_GET['lang'], ['en', 'ar'])) {
    $_SESSION['lang'] = $_GET['lang'];
}

$lang = $_SESSION['lang'];

// Include language file
require_once 'lang/' . $lang . '.php';

// Helper function to get current page
function getCurrentPage() {
    $page = basename($_SERVER['PHP_SELF'], '.php');
    return $page;
}

// Helper function to check if page is active
function isActive($page) {
    return getCurrentPage() === $page ? 'active' : '';
}
?>
