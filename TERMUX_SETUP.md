# 📱 إعداد التطبيق على Termux

## 🎯 خطوات سريعة

### 1. تثبيت الأدوات الأساسية
```bash
pkg update && pkg upgrade -y
pkg install git python nodejs -y
```

### 2. الحصول على الملفات

#### الطريقة A: من GitHub (إذا كان المشروع موجود)
```bash
cd ~
git clone https://github.com/YOUR-USERNAME/innovia-app.git
cd innovia-app
```

#### الطريقة B: إنشاء المجلد يدوياً
```bash
cd ~
mkdir innovia-app
cd innovia-app

# ثم انسخ الملفات من GitHub أو من مكان آخر
```

### 3. تشغيل التطبيق
```bash
cd ~/innovia-app
python -m http.server 8000
```

### 4. افتح في Chrome
```
http://localhost:8000
```

## 🌐 أو استخدم Netlify (الأفضل!)

بدلاً من Termux، انشر التطبيق على Netlify:

1. اذهب إلى: https://app.netlify.com
2. سجل دخول بـ GitHub
3. New site → Import from Git
4. اختر المشروع → Deploy
5. افتح الرابط على Android
6. ثبّت التطبيق!

## 📱 الرابط المباشر بعد النشر:
```
https://your-app-name.netlify.app
```

هذا أفضل من Termux لأنه:
✅ HTTPS تلقائي
✅ يمكن تثبيته كـ PWA
✅ يعمل على أي جهاز
✅ لا يحتاج Termux

