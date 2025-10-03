# 📧 Email Setup Guide for Vercel Deployment

## 🔧 **Step 1: Configure Gmail App Password**

### 1.1 Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled

### 1.2 Generate App Password
1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Other (Custom name)"
3. Enter "Portfolio Contact Form"
4. **Copy the generated 16-character password** (save it securely)

## 🚀 **Step 2: Configure Vercel Environment Variables**

### 2.1 Access Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Open your portfolio project
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in the left sidebar

### 2.2 Add Environment Variables
Add these two environment variables:

```
Name: EMAIL_USER
Value: noorjanmysore842@gmail.com
```

```
Name: EMAIL_PASS
Value: your-16-character-app-password-from-step-1
```

### 2.3 Redeploy
1. After adding environment variables, go to **"Deployments"** tab
2. Click **"Redeploy"** on your latest deployment
3. Wait for deployment to complete

## ✅ **Step 3: Test Contact Form**

1. Visit your live portfolio
2. Go to the Contact section
3. Fill out and submit the contact form
4. Check your email (noorjanmysore842@gmail.com) for the message

## 🔍 **Troubleshooting**

### If emails still don't work:

1. **Check Vercel Function Logs:**
   - Go to Vercel Dashboard → Functions tab
   - Check for error messages

2. **Verify Environment Variables:**
   - Make sure EMAIL_USER and EMAIL_PASS are set correctly
   - Ensure no extra spaces in the values

3. **Test Gmail App Password:**
   - Try logging into Gmail with the app password
   - If it doesn't work, generate a new app password

4. **Check Gmail Security:**
   - Make sure "Less secure app access" is enabled (if needed)
   - Or use 2FA with app password (recommended)

## 📞 **Alternative: Use EmailJS (Easier)**

If Gmail setup is too complex, you can use EmailJS:

1. Go to [emailjs.com](https://emailjs.com)
2. Create free account
3. Connect your Gmail
4. Get Service ID, Template ID, and Public Key
5. Replace the contact form with EmailJS integration

## 🎯 **Expected Result**

After setup, when someone submits the contact form:
- ✅ Form shows success message
- ✅ You receive email at noorjanmysore842@gmail.com
- ✅ Email contains client details and message
- ✅ You can reply directly to the client's email
