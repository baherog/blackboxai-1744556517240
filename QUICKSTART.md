# 🚀 Quick Start Guide - Innovia Android HTML App

Get your PWA up and running in 5 minutes!

## 📱 For End Users (Installing on Android)

### Step 1: Open the App
Open your Android device's Chrome browser and navigate to the app URL.

### Step 2: Install
When the "Install" prompt appears at the bottom of the screen:
1. Tap the **"Install"** button
2. Or tap the menu (⋮) → **"Add to Home screen"**
3. Or tap the install icon (📥) in the address bar

### Step 3: Launch
1. Find the **"Innovia"** icon on your home screen
2. Tap to open
3. Enjoy the app!

**That's it! The app now works like a native Android app.**

---

## 💻 For Developers (Local Testing)

### Quick Test (No Installation Needed)

**Option 1: Python**
```bash
cd /path/to/innovia-app
python3 -m http.server 8000
```

**Option 2: Node.js**
```bash
cd /path/to/innovia-app
npx http-server -p 8000
```

**Option 3: PHP**
```bash
cd /path/to/innovia-app
php -S localhost:8000
```

Then open: **http://localhost:8000**

### Test PWA Features

1. **Check Service Worker**
   - Open Chrome DevTools (F12)
   - Go to Application tab → Service Workers
   - Should show "Activated and running"

2. **Check Manifest**
   - Application tab → Manifest
   - Verify app name, icons, and colors

3. **Test Installation**
   - Look for install icon in address bar
   - Or use Application tab → Manifest → "Add to home screen"

4. **Run PWA Test Page**
   - Open: http://localhost:8000/pwa-test.html
   - Check all status indicators

---

## 🌐 Quick Deploy

### GitHub Pages (Fastest)
```bash
# 1. Create GitHub repo
git init
git add .
git commit -m "Initial commit"

# 2. Push to GitHub
git remote add origin https://github.com/YOUR-USERNAME/innovia-app.git
git push -u origin main

# 3. Enable GitHub Pages in repo settings
# Your app will be at: https://YOUR-USERNAME.github.io/innovia-app/
```

### Netlify (Drag & Drop)
1. Go to https://app.netlify.com/drop
2. Drag your project folder
3. Get instant URL
4. Done! 🎉

---

## 🎨 Quick Customization

### Change App Name
**File: `manifest.json`**
```json
{
  "name": "Your App Name",
  "short_name": "YourApp"
}
```

**File: `index.html`** (line 6)
```html
<title>Your App Name</title>
```

### Change Colors
**File: `manifest.json`**
```json
{
  "theme_color": "#2563eb",  ← Change this
  "background_color": "#2563eb"  ← And this
}
```

**File: `index.html`** (line 5)
```html
<meta name="theme-color" content="#2563eb">  ← Change this
```

### Change Content
**File: `cms.js`**

Edit the `content` object for both English and Arabic:
```javascript
const content = {
    en: {
        heroTitle: "Your Title Here",
        heroSubtitle: "Your Subtitle Here",
        // ... etc
    },
    ar: {
        heroTitle: "عنوانك هنا",
        heroSubtitle: "العنوان الفرعي هنا",
        // ... etc
    }
};
```

### Add Your Logo/Icon
1. Open: `icons/generate-icons.html`
2. Customize the canvas drawing code
3. Click "Generate All Icons"
4. Download all icons
5. Replace files in `/icons/` folder

---

## ✅ Checklist

### Before Testing
- [ ] All files are in the same directory
- [ ] Icons are generated (or using defaults)
- [ ] Web server is running
- [ ] No browser errors in console

### Before Deploying
- [ ] HTTPS is enabled (required for PWA)
- [ ] Service worker loads correctly
- [ ] Manifest.json is accessible
- [ ] All icons are present
- [ ] Content is customized
- [ ] Tested on mobile device
- [ ] PWA test page shows all green

### After Deploying
- [ ] App loads over HTTPS
- [ ] Install prompt appears on Android
- [ ] App installs successfully
- [ ] Offline mode works
- [ ] Language switching works
- [ ] All links work
- [ ] No console errors

---

## 🐛 Troubleshooting

### App Won't Install
**Problem:** No install button appears  
**Solution:** 
- Ensure you're using HTTPS (not HTTP)
- Check service worker is registered (DevTools → Application)
- Try manually: Chrome menu → "Add to Home screen"

### Service Worker Error
**Problem:** Service worker fails to register  
**Solution:**
- Check console for errors
- Verify `service-worker.js` path is correct
- Clear browser cache and reload

### Offline Mode Doesn't Work
**Problem:** App doesn't work offline  
**Solution:**
- Visit app at least once while online
- Check cache in DevTools → Application → Cache Storage
- Verify service worker is active

### Icons Don't Show
**Problem:** Default icon shows instead of custom icon  
**Solution:**
- Generate icons using `icons/generate-icons.html`
- Check icons are in `/icons/` directory
- Verify manifest.json paths

---

## 📚 More Help

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **PWA Testing**: Open `pwa-test.html` in browser
- **Icon Help**: See `icons/README.md`
- **Support**: info@innoviais.com

---

## 🎯 What's Next?

1. **Customize** your app (colors, content, icons)
2. **Test** on Android device
3. **Deploy** to GitHub Pages or Netlify
4. **Share** your app URL
5. **Install** on Android devices

**Need help?** Check the full README.md or contact support!

---

**Happy building! 🚀📱**
