#!/bin/bash
# نص سريع لنسخ الملفات الأساسية فقط

echo "📦 نسخ ملفات التطبيق الأساسية..."
echo ""

# إنشاء مجلد مؤقت
mkdir -p /tmp/innovia-app
cd /workspace

# نسخ الملفات HTML
echo "📄 نسخ ملفات HTML..."
cp index.html settings.html contact-form.html portfolio.html faq.html testimonials.html device-info.html pwa-test.html /tmp/innovia-app/

# نسخ ملفات JavaScript
echo "⚙️ نسخ ملفات JavaScript..."
cp cms.js device-detection.js service-worker.js /tmp/innovia-app/

# نسخ ملفات التكوين
echo "🔧 نسخ ملفات التكوين..."
cp manifest.json netlify.toml _headers _redirects /tmp/innovia-app/

# نسخ مجلد الأيقونات
echo "🎨 نسخ الأيقونات..."
cp -r icons /tmp/innovia-app/

# إنشاء أرشيف
echo ""
echo "📦 إنشاء ملف مضغوط..."
cd /tmp
tar -czf innovia-app.tar.gz innovia-app/

echo ""
echo "✅ تم! الملف جاهز:"
echo "📁 /tmp/innovia-app.tar.gz"
echo ""
ls -lh /tmp/innovia-app.tar.gz
