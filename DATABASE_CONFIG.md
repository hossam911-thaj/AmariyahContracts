# ⚙️ إعدادات قاعدة البيانات

## معلومات الاتصال

| المعلومة | القيمة |
|---------|--------|
| **نوع قاعدة البيانات** | PostgreSQL 16 |
| **المضيف (Host)** | localhost |
| **المنفذ (Port)** | 5432 |
| **اسم المستخدم (Username)** | postgres |
| **كلمة المرور (Password)** | postgres |
| **اسم قاعدة البيانات** | amariyah_contracts_db |

---

## سلسلة الاتصال (Connection String)

```
postgresql://postgres:postgres@localhost:5432/amariyah_contracts_db
```

---

## متغير البيئة

في ملف `.env`:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/amariyah_contracts_db
```

---

## جداول قاعدة البيانات

### جدول: users
```sql
CREATE TABLE users (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
```

---

## أوامر إدارة قاعدة البيانات

### إنشاء قاعدة البيانات
```bash
# في psql أو pgAdmin
CREATE DATABASE amariyah_contracts_db;
```

### تطبيق الهجرات
```bash
npm run db:push
```

### عرض حالة الهجرات
```bash
# ستُنشأ تلقائياً في مجلد migrations/
ls migrations/
```

### الوصول إلى قاعدة البيانات من Terminal
```bash
psql -h localhost -U postgres -d amariyah_contracts_db
```

---

## متطلبات النظام

✅ PostgreSQL 16 أو أحدث  
✅ Node.js 20+  
✅ npm 10+  
✅ Drizzle ORM (مثبت في المشروع)  
✅ Drizzle Kit (مثبت في المشروع)  

---

## خطوات الإعداد الأول

### 1. تثبيت PostgreSQL
اتبع التعليمات من [موقع PostgreSQL الرسمي](https://www.postgresql.org/download/)

### 2. التحقق من التثبيت
```bash
psql --version
```

### 3. إنشاء قاعدة البيانات (اختياري - Drizzle سينشئها)
```bash
psql -U postgres
CREATE DATABASE amariyah_contracts_db;
```

### 4. تطبيق الهجرات
```bash
npm install
npm run db:push
```

### 5. التحقق من الجداول
```bash
psql -U postgres -d amariyah_contracts_db
\dt
```

---

## ملفات الهجرات

الملفات التلقائية في `migrations/`:
```
migrations/
├── 0000_clear_...
├── meta/
└── _journal.json
```

---

## استكشاف الأخطاء

### الخطأ: `could not connect to server`
**الحل**: تأكد من تشغيل خدمة PostgreSQL
```bash
# Windows
net start postgresql-x64-16

# macOS
brew services start postgresql

# Linux
sudo systemctl start postgresql
```

### الخطأ: `database does not exist`
**الحل**: أنشئ قاعدة البيانات يدوياً
```bash
psql -U postgres
CREATE DATABASE amariyah_contracts_db;
```

### الخطأ: `invalid password`
**الحل**: تأكد من كلمة المرور في `.env`
```bash
# قد تحتاج لإعادة تعيين كلمة المرور
psql -U postgres
ALTER USER postgres WITH PASSWORD 'postgres';
```

### الخطأ: `role postgres does not exist`
**الحل**: تأكد من تثبيت PostgreSQL بشكل صحيح أو أنشئ المستخدم
```bash
psql -U postgres
CREATE USER postgres WITH PASSWORD 'postgres';
ALTER USER postgres WITH SUPERUSER;
```

---

## أوامر مفيدة

### الاتصال بقاعدة البيانات
```bash
psql -h localhost -U postgres -d amariyah_contracts_db
```

### عرض كل الجداول
```sql
\dt
```

### عرض بنية جدول معين
```sql
\d users
```

### حذف جدول
```sql
DROP TABLE users;
```

### حذف قاعدة البيانات بالكامل
```sql
DROP DATABASE amariyah_contracts_db;
```

### تصدير قاعدة البيانات
```bash
pg_dump -U postgres -d amariyah_contracts_db > backup.sql
```

### استيراد قاعدة البيانات
```bash
psql -U postgres -d amariyah_contracts_db < backup.sql
```

---

## نصائح الأمان

⚠️ **قبل الإنتاج:**

1. **غيّر كلمة المرور**
   ```sql
   ALTER USER postgres WITH PASSWORD 'strong_secure_password_here';
   ```

2. **قيّد الوصول**
   ```bash
   # عدّل pg_hba.conf لتقبل الاتصالات من عناوين محددة فقط
   ```

3. **فعّل SSL**
   ```bash
   # في pg_hba.conf غيّر hostssl بدلاً من host
   ```

4. **عمل نسخ احتياطية منتظمة**
   ```bash
   pg_dump -U postgres -d amariyah_contracts_db > backup_$(date +%Y%m%d).sql
   ```

5. **حدّث إذن الملفات**
   ```bash
   chmod 600 .env
   ```

---

## الترخيص

قاعدة البيانات جزء من مشروع **عمارية العهود التجارية**  
الترخيص: MIT

---

**آخر تحديث**: 7 ديسمبر 2025
