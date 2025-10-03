# Contact Form Setup Instructions

## Email Configuration

To enable the contact form to send emails, you need to set up environment variables:

### 1. Create Environment File
Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration for Contact Form
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
```

### 2. Gmail Setup
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
   - Use this app password (not your regular Gmail password)

### 3. Environment Variables
- `EMAIL_USER`: Your Gmail address (e.g., `noorjanmysore842@gmail.com`)
- `EMAIL_PASS`: The app password you generated (16 characters)

### 4. Test the Form
Once configured, the contact form will:
- Send emails to `noorjanmysore842@gmail.com`
- Include sender's name, email, subject, and message
- Show success/error messages to users
- Handle form validation and loading states

## Alternative: EmailJS Setup
If you prefer not to use Gmail SMTP, you can use EmailJS instead:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Replace the API call in `Contact.tsx` with EmailJS SDK
4. Update the form submission logic

## Security Notes
- Never commit `.env.local` to version control
- Use app passwords, not regular passwords
- Consider using a dedicated email service for production
