/**
 * Device Detection for Android
 * Auto-detect device type, OS, browser, and optimize accordingly
 */

// Device Detection Class
class DeviceDetector {
    constructor() {
        this.userAgent = navigator.userAgent || navigator.vendor || window.opera;
        this.platform = navigator.platform;
        this.init();
    }

    init() {
        this.detectDevice();
        this.detectOS();
        this.detectBrowser();
        this.detectFeatures();
        this.applyOptimizations();
        this.logDeviceInfo();
    }

    // Detect if Android
    isAndroid() {
        return /android/i.test(this.userAgent);
    }

    // Detect if iOS
    isIOS() {
        return /iPad|iPhone|iPod/.test(this.userAgent) && !window.MSStream;
    }

    // Detect if Mobile
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(this.userAgent);
    }

    // Detect if Tablet
    isTablet() {
        return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(this.userAgent);
    }

    // Detect Device Type
    detectDevice() {
        this.device = {
            isAndroid: this.isAndroid(),
            isIOS: this.isIOS(),
            isMobile: this.isMobile(),
            isTablet: this.isTablet(),
            isDesktop: !this.isMobile(),
            type: this.getDeviceType()
        };
    }

    getDeviceType() {
        if (this.isTablet()) return 'tablet';
        if (this.isMobile()) return 'mobile';
        return 'desktop';
    }

    // Detect Operating System
    detectOS() {
        let os = 'Unknown';
        let version = 'Unknown';

        if (this.isAndroid()) {
            os = 'Android';
            const match = this.userAgent.match(/Android\s([0-9\.]*)/);
            version = match ? match[1] : 'Unknown';
        } else if (this.isIOS()) {
            os = 'iOS';
            const match = this.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
            version = match ? `${match[1]}.${match[2]}.${match[3] || 0}` : 'Unknown';
        } else if (/Windows/.test(this.userAgent)) {
            os = 'Windows';
        } else if (/Mac/.test(this.userAgent)) {
            os = 'macOS';
        } else if (/Linux/.test(this.userAgent)) {
            os = 'Linux';
        }

        this.os = { name: os, version: version };
    }

    // Detect Browser
    detectBrowser() {
        let browser = 'Unknown';
        let version = 'Unknown';

        if (/Chrome/.test(this.userAgent) && !/Edge|Edg/.test(this.userAgent)) {
            browser = 'Chrome';
            const match = this.userAgent.match(/Chrome\/([0-9\.]+)/);
            version = match ? match[1] : 'Unknown';
        } else if (/Firefox/.test(this.userAgent)) {
            browser = 'Firefox';
            const match = this.userAgent.match(/Firefox\/([0-9\.]+)/);
            version = match ? match[1] : 'Unknown';
        } else if (/Safari/.test(this.userAgent) && !/Chrome/.test(this.userAgent)) {
            browser = 'Safari';
            const match = this.userAgent.match(/Version\/([0-9\.]+)/);
            version = match ? match[1] : 'Unknown';
        } else if (/Edge|Edg/.test(this.userAgent)) {
            browser = 'Edge';
            const match = this.userAgent.match(/Edg\/([0-9\.]+)/);
            version = match ? match[1] : 'Unknown';
        } else if (/SamsungBrowser/.test(this.userAgent)) {
            browser = 'Samsung Internet';
            const match = this.userAgent.match(/SamsungBrowser\/([0-9\.]+)/);
            version = match ? match[1] : 'Unknown';
        }

        this.browser = { name: browser, version: version };
    }

    // Detect Device Features
    detectFeatures() {
        this.features = {
            touchScreen: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
            serviceWorker: 'serviceWorker' in navigator,
            pushNotifications: 'Notification' in window,
            geolocation: 'geolocation' in navigator,
            camera: 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices,
            vibration: 'vibrate' in navigator,
            battery: 'getBattery' in navigator,
            orientation: 'orientation' in window || 'onorientationchange' in window,
            share: 'share' in navigator,
            standalone: window.matchMedia('(display-mode: standalone)').matches ||
                       window.navigator.standalone === true,
            online: navigator.onLine,
            localStorage: this.checkLocalStorage(),
            cookies: navigator.cookieEnabled,
            webGL: this.checkWebGL()
        };
    }

    checkLocalStorage() {
        try {
            const test = '__localStorage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    checkWebGL() {
        try {
            const canvas = document.createElement('canvas');
            return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
        } catch (e) {
            return false;
        }
    }

    // Get Screen Information
    getScreenInfo() {
        return {
            width: window.screen.width,
            height: window.screen.height,
            availWidth: window.screen.availWidth,
            availHeight: window.screen.availHeight,
            colorDepth: window.screen.colorDepth,
            pixelRatio: window.devicePixelRatio || 1,
            orientation: this.getOrientation(),
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight
        };
    }

    getOrientation() {
        if (window.screen.orientation) {
            return window.screen.orientation.type;
        }
        return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    }

    // Get Connection Information
    getConnectionInfo() {
        const connection = navigator.connection || 
                          navigator.mozConnection || 
                          navigator.webkitConnection;
        
        if (!connection) return null;

        return {
            effectiveType: connection.effectiveType || 'unknown',
            downlink: connection.downlink || 'unknown',
            rtt: connection.rtt || 'unknown',
            saveData: connection.saveData || false
        };
    }

    // Apply Android-specific optimizations
    applyOptimizations() {
        const body = document.body;
        const html = document.documentElement;

        // Add device classes
        if (this.device.isAndroid) {
            body.classList.add('android-device');
            console.log('🤖 Android device detected!');
        }
        if (this.device.isMobile) {
            body.classList.add('mobile-device');
        }
        if (this.device.isTablet) {
            body.classList.add('tablet-device');
        }

        // Add OS class
        body.classList.add(`os-${this.os.name.toLowerCase()}`);

        // Add browser class
        body.classList.add(`browser-${this.browser.name.toLowerCase().replace(/\s/g, '-')}`);

        // Touch optimizations for Android
        if (this.device.isAndroid && this.features.touchScreen) {
            this.enableTouchOptimizations();
        }

        // Standalone mode (installed as PWA)
        if (this.features.standalone) {
            body.classList.add('standalone-mode');
            console.log('📱 Running as installed PWA!');
        }

        // Network-based optimizations
        const connection = this.getConnectionInfo();
        if (connection && connection.saveData) {
            body.classList.add('save-data-mode');
            console.log('💾 Data saver mode enabled');
        }
    }

    enableTouchOptimizations() {
        // Disable text selection on Android for better UX
        const style = document.createElement('style');
        style.textContent = `
            .android-device * {
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
                -webkit-touch-callout: none;
            }
            .android-device button,
            .android-device a,
            .android-device input,
            .android-device select {
                touch-action: manipulation;
            }
        `;
        document.head.appendChild(style);
    }

    // Show Android-specific welcome message
    showAndroidWelcome() {
        if (!this.device.isAndroid) return;

        const welcomeShown = sessionStorage.getItem('androidWelcomeShown');
        if (welcomeShown) return;

        const message = this.features.standalone 
            ? '🎉 Welcome! You\'re using the installed app!'
            : '📱 Tip: Install this app for a better experience!';

        if (typeof showNotification === 'function') {
            setTimeout(() => {
                showNotification(message, 'info');
                sessionStorage.setItem('androidWelcomeShown', 'true');
            }, 2000);
        }
    }

    // Log device information
    logDeviceInfo() {
        console.group('📱 Device Detection Results');
        console.log('Device Type:', this.device.type);
        console.log('Is Android:', this.device.isAndroid);
        console.log('Is Mobile:', this.device.isMobile);
        console.log('OS:', `${this.os.name} ${this.os.version}`);
        console.log('Browser:', `${this.browser.name} ${this.browser.version}`);
        console.log('Screen:', this.getScreenInfo());
        console.log('Features:', this.features);
        
        const connection = this.getConnectionInfo();
        if (connection) {
            console.log('Connection:', connection);
        }
        console.groupEnd();
    }

    // Get full device info
    getDeviceInfo() {
        return {
            device: this.device,
            os: this.os,
            browser: this.browser,
            features: this.features,
            screen: this.getScreenInfo(),
            connection: this.getConnectionInfo(),
            userAgent: this.userAgent,
            timestamp: new Date().toISOString()
        };
    }

    // Export device info as JSON
    exportDeviceInfo() {
        return JSON.stringify(this.getDeviceInfo(), null, 2);
    }

    // Save device info to localStorage
    saveDeviceInfo() {
        if (this.features.localStorage) {
            try {
                localStorage.setItem('deviceInfo', this.exportDeviceInfo());
                console.log('✅ Device info saved to localStorage');
            } catch (e) {
                console.error('❌ Failed to save device info:', e);
            }
        }
    }
}

// Initialize detector when DOM is ready
let deviceDetector;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        deviceDetector = new DeviceDetector();
        deviceDetector.showAndroidWelcome();
        deviceDetector.saveDeviceInfo();
        
        // Make globally accessible
        window.deviceDetector = deviceDetector;
    });
} else {
    deviceDetector = new DeviceDetector();
    deviceDetector.showAndroidWelcome();
    deviceDetector.saveDeviceInfo();
    window.deviceDetector = deviceDetector;
}

// Helper functions for easy access
window.isAndroid = () => deviceDetector ? deviceDetector.device.isAndroid : false;
window.isMobile = () => deviceDetector ? deviceDetector.device.isMobile : false;
window.isStandalone = () => deviceDetector ? deviceDetector.features.standalone : false;

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DeviceDetector;
}
