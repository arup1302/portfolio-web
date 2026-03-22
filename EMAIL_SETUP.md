# Email Setup Guide - EmailJS Configuration

## Step-by-Step Setup Instructions

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Get Your Keys

1. After login, go to **Account** (top right)
2. Copy your **Public Key** and **Service ID**

### 3. Create Email Service

1. Go to **Email Services** in the left sidebar
2. Click **Add New Service**
3. Select **Gmail** (or your preferred email provider)
4. Connect your email account
5. Copy the **Service ID**

### 4. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it: `contact_form` (or any name)
4. Use this template structure:

```
From: {{from_name}} <{{from_email}}>
Message:
{{message}}
```

5. Copy the **Template ID**

### 5. Update Your Code

In `/src/components/Contact.jsx`, replace:

- `YOUR_PUBLIC_KEY_HERE` → Your Public Key from Account settings
- `YOUR_SERVICE_ID_HERE` → Your Service ID
- `YOUR_TEMPLATE_ID_HERE` → Your Template ID

Example:

```javascript
emailjs.init('pk_xxxxxxxxxxxxxx');

await emailjs.send(
  'service_xxxxxx',
  'template_xxxxxx',
  {...}
);
```

### 6. Test the Form

1. Go to your portfolio website
2. Fill in the contact form
3. Submit and check your email

## Free EmailJS Limits

- Up to **200 emails/month** on free plan
- Perfect for portfolio websites

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Contact Form Examples](https://www.emailjs.com/docs/examples/reactjs/)

---

**Security Note:** Keep your Public Key visible but keep your Service ID confidential when deploying.
