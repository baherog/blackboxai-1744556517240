# Deployment Guide for Innovia Android HTML Application

This guide provides detailed instructions for deploying your PWA to various hosting platforms.

## 🚀 Deployment Options

### 1. GitHub Pages (Free & Easy)

**Prerequisites:**
- GitHub account
- Git installed on your computer

**Steps:**

1. **Create a GitHub repository**
   ```bash
   # If you haven't already initialized git
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it (e.g., "innovia-android-app")
   - Don't initialize with README (you already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/innovia-android-app.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Click Save

5. **Access your app**
   - Your app will be available at: `https://YOUR-USERNAME.github.io/innovia-android-app/`
   - Wait 1-2 minutes for deployment

**Note:** GitHub Pages uses HTTPS by default, which is required for PWA features!

---

### 2. Netlify (Free with Continuous Deployment)

**Prerequisites:**
- Netlify account (free)
- Git repository (GitHub, GitLab, or Bitbucket)

**Method A: Git-based Deployment**

1. **Sign up at Netlify**
   - Go to https://netlify.com
   - Sign up with GitHub/GitLab/Bitbucket

2. **New site from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/` or `.`
   - Click "Deploy site"

3. **Configure custom domain (optional)**
   - Go to Site settings → Domain management
   - Add custom domain or use provided netlify.app subdomain

**Method B: Drag & Drop Deployment**

1. **Prepare files**
   - Ensure all files are in a folder
   - Remove .git folder if deploying manually

2. **Deploy via Netlify UI**
   - Go to https://app.netlify.com/drop
   - Drag your project folder to the drop zone
   - Wait for deployment

3. **Get your URL**
   - Netlify provides a URL like: `https://random-name-123.netlify.app`
   - You can change the subdomain in settings

**Netlify Configuration File** (optional):

Create `netlify.toml` in project root:
```toml
[build]
  publish = "."
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/service-worker.js"
  [headers.values]
    Cache-Control = "no-cache"

[[headers]]
  for = "/manifest.json"
  [headers.values]
    Content-Type = "application/manifest+json"
```

---

### 3. Vercel (Free with Continuous Deployment)

**Prerequisites:**
- Vercel account (free)
- Git repository

**Steps:**

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy from Git**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your Git repository
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: `.`
   - Click "Deploy"

3. **Or deploy via CLI**
   ```bash
   cd /path/to/your/project
   vercel
   ```

**Vercel Configuration** (optional):

Create `vercel.json`:
```json
{
  "version": 2,
  "routes": [
    {
      "src": "/service-worker.js",
      "headers": {
        "cache-control": "public, max-age=0, must-revalidate"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

---

### 4. Firebase Hosting (Free, Google's Platform)

**Prerequisites:**
- Firebase account (free)
- Node.js and npm installed

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   cd /path/to/your/project
   firebase init hosting
   ```
   
   Configuration:
   - Public directory: `.` (current directory)
   - Single-page app: No
   - Automatic builds with GitHub: Optional
   - Don't overwrite existing files

4. **Deploy**
   ```bash
   firebase deploy --only hosting
   ```

5. **Access your app**
   - URL will be shown in terminal
   - Format: `https://PROJECT-ID.web.app`

**Firebase Configuration**:

`firebase.json`:
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "headers": [
      {
        "source": "/service-worker.js",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
          }
        ]
      },
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=7200"
          }
        ]
      }
    ]
  }
}
```

---

### 5. Self-Hosted (Your Own Server)

**Prerequisites:**
- Web server (Apache, Nginx, or other)
- SSL certificate (Let's Encrypt recommended)
- Domain name (optional but recommended)

**For Apache:**

1. **Upload files**
   ```bash
   scp -r * user@your-server.com:/var/www/html/innovia/
   ```

2. **Configure Apache**
   
   Create/edit `.htaccess`:
   ```apache
   # Enable HTTPS
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   
   # Service Worker headers
   <FilesMatch "service-worker\.js$">
     Header set Cache-Control "no-cache, no-store, must-revalidate"
   </FilesMatch>
   
   # Manifest headers
   <FilesMatch "manifest\.json$">
     Header set Content-Type "application/manifest+json"
   </FilesMatch>
   ```

**For Nginx:**

1. **Upload files**
   ```bash
   scp -r * user@your-server.com:/var/www/innovia/
   ```

2. **Configure Nginx**
   
   Edit `/etc/nginx/sites-available/innovia`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       # Redirect to HTTPS
       return 301 https://$server_name$request_uri;
   }
   
   server {
       listen 443 ssl http2;
       server_name your-domain.com;
       
       ssl_certificate /path/to/certificate.crt;
       ssl_certificate_key /path/to/private.key;
       
       root /var/www/innovia;
       index index.html;
       
       # Service Worker cache control
       location /service-worker.js {
           add_header Cache-Control "no-cache, no-store, must-revalidate";
       }
       
       # Manifest content type
       location /manifest.json {
           add_header Content-Type "application/manifest+json";
       }
       
       # Main location
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Enable site and reload**
   ```bash
   sudo ln -s /etc/nginx/sites-available/innovia /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

---

## 🔒 HTTPS Requirements

**PWAs require HTTPS to work properly!**

**Free SSL Certificates:**
- **Let's Encrypt**: https://letsencrypt.org/
- **Cloudflare**: https://www.cloudflare.com/ (free plan includes SSL)
- **SSL For Free**: https://www.sslforfree.com/

**Easy HTTPS Setup with Certbot (Let's Encrypt):**
```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Get certificate for Nginx
sudo certbot --nginx -d your-domain.com

# Get certificate for Apache
sudo certbot --apache -d your-domain.com

# Auto-renewal (recommended)
sudo certbot renew --dry-run
```

---

## 📱 Testing Your Deployment

### Lighthouse Audit
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select "Progressive Web App"
4. Click "Generate report"
5. Aim for 100% PWA score

### Manual Testing Checklist
- [ ] App loads over HTTPS
- [ ] Service worker registers successfully
- [ ] Manifest.json is accessible
- [ ] Icons display correctly
- [ ] Install prompt appears on Android
- [ ] App works offline after first visit
- [ ] Language switching works
- [ ] All sections are accessible
- [ ] Mobile navigation works
- [ ] Touch interactions are responsive

### DevTools Verification
1. Open Chrome DevTools
2. **Application tab**:
   - Service Workers: Check if registered and activated
   - Manifest: Verify all properties are correct
   - Cache Storage: Check cached resources
3. **Console**: Look for any errors

---

## 🔄 Continuous Deployment

For automatic deployments on every commit:

### GitHub Actions + GitHub Pages

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

### Netlify/Vercel
- Automatic deployment is enabled by default when connecting to Git
- Push to main branch triggers deployment
- View deployment logs in dashboard

---

## 🎯 Domain Configuration

### Custom Domain Setup

**For GitHub Pages:**
1. Add CNAME record pointing to: `YOUR-USERNAME.github.io`
2. Add `CNAME` file to repository with your domain name
3. Enable HTTPS in repository settings

**For Netlify:**
1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS configuration instructions
4. SSL is automatic

**For Vercel:**
1. Go to Project settings → Domains
2. Add your domain
3. Configure DNS as instructed
4. SSL is automatic

**For Firebase:**
```bash
firebase hosting:channel:deploy custom-domain
```

---

## 📊 Post-Deployment

### Analytics (Optional)

Add Google Analytics to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring

Consider adding:
- Google Analytics
- Firebase Analytics
- Sentry (error tracking)
- New Relic (performance monitoring)

---

## ⚠️ Common Issues

### Service Worker Not Updating
```javascript
// In service-worker.js, increment version:
const CACHE_NAME = 'innovia-v2'; // Changed from v1
```

### Icons Not Loading
- Check paths in manifest.json
- Ensure icons exist in /icons/ directory
- Verify correct MIME types

### App Not Installing
- Must be served over HTTPS
- Service worker must register successfully
- Must have valid manifest.json
- User must interact with the site

---

## 📞 Support

If you encounter issues during deployment, contact:
- Email: info@innoviais.com
- Check browser console for errors
- Use Lighthouse audit for guidance

---

**Happy Deploying! 🚀**
