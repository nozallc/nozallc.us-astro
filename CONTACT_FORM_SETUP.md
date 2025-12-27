# Contact Form Backend Implementation Guide
## NOZA LLC - Astro + Cloudflare Pages

---

## ⚡ QUICK START (Recommended: Formspree)

### Step 1: Sign Up on Formspree
1. Go to https://formspree.io/
2. Click "Sign up" 
3. Connect with GitHub account
4. Create a new form for `nozallc.us`
5. You'll get a Form ID like `fXXXXXXXX`

### Step 2: Update Contact Form
Open `src/pages/contact/index.astro` and find the form (around line 63):

**Change FROM**:
```html
<form class="contact-form" method="POST" action="/contact">
```

**Change TO**:
```html
<form class="contact-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

Replace `YOUR_FORM_ID` with your actual Formspree ID.

### Step 3: Test
1. Fill out the contact form
2. Click "Send Message"
3. Check your email (Formspree sends submission email)
4. You'll see submission in Formspree dashboard

**That's it! Your form is now live.** ✅

---

## 🚀 ADVANCED: Cloudflare Pages Functions + Resend

If you want full control and beautiful email templates, follow this guide.

### Step 1: Create Cloudflare Pages Functions Folder

In your project root, create:
```
functions/
└── contact.ts
```

### Step 2: Create Contact Handler

Create `functions/contact.ts`:

```typescript
export async function onRequest(context) {
  // Only accept POST requests
  if (context.request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    // Parse form data
    const formData = await context.request.formData();
    
    const submission = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'Not provided',
      company: formData.get('company') || 'Not provided',
      service: formData.get('service'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      wantsUpdates: formData.get('updates') ? 'Yes' : 'No'
    };

    // Validate required fields
    if (!submission.name || !submission.email || !submission.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(submission.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Option A - Send email with Resend (see below)
    // TODO: Option B - Store in D1 database
    // TODO: Option C - Send to Zapier webhook

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you! We received your message and will be in touch soon.'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ error: 'Server error. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
```

### Step 3: Add Resend Integration (Optional but Recommended)

#### 3a. Sign up for Resend
1. Go to https://resend.com/
2. Sign up with email
3. Go to API keys
4. Copy API key

#### 3b. Add to Cloudflare Environment

In `wrangler.toml`, add your Resend API key:

```toml
[env.production]
vars = { RESEND_API_KEY = "your_resend_api_key_here" }

[build]
command = "npm run build"
```

#### 3c. Update functions/contact.ts with Resend

Replace the TODO section with:

```typescript
// Send email with Resend
const resendResponse = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    from: 'NOZA LLC <contact@nozallc.us>',
    to: 'hello@nozallc.us',
    subject: `New Contact Form Submission from ${submission.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Phone:</strong> ${submission.phone}</p>
      <p><strong>Company:</strong> ${submission.company}</p>
      <p><strong>Service Interested In:</strong> ${submission.service}</p>
      <p><strong>Message:</strong></p>
      <p>${submission.message.replace(/\n/g, '<br>')}</p>
      <p><strong>Wants Updates:</strong> ${submission.wantsUpdates}</p>
      <p><small>Submitted: ${submission.timestamp}</small></p>
    `
  })
});

if (!resendResponse.ok) {
  console.error('Resend error:', await resendResponse.text());
  return new Response(
    JSON.stringify({ error: 'Failed to send email' }),
    { status: 500, headers: { 'Content-Type': 'application/json' } }
  );
}
```

### Step 4: Update Contact Form URL

Change form action in `src/pages/contact/index.astro`:

```html
<form class="contact-form" method="POST" action="/api/contact">
```

### Step 5: Add Success/Error Handling

Add this script to `src/pages/contact/index.astro` (before closing `</RootLayout>`):

```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      try {
        const formData = new FormData(form);
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (response.ok) {
          // Show success message
          alert('Thank you! We received your message and will be in touch within 24 hours.');
          form.reset();
          submitButton.textContent = 'Message Sent ✓';
          setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
          }, 3000);
        } else {
          alert(data.error || 'Something went wrong. Please try again.');
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }
      } catch (error) {
        console.error('Form error:', error);
        alert('Error submitting form. Please try email instead.');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  });
</script>
```

---

## 📋 COMPARISON TABLE

| Feature | Formspree | Cloudflare Functions | Cloudflare Functions + Resend |
|---------|-----------|-------------------|-----------------------------|
| **Setup Time** | 5 minutes | 30 minutes | 45 minutes |
| **Cost** | Free (50/month) | Free | Free + Resend free tier |
| **Custom Emails** | Basic | Full control | Beautiful templates |
| **Database Storage** | Formspree | D1 (optional) | D1 (optional) |
| **Integrations** | Limited | Unlimited | Unlimited |
| **Rate Limiting** | Built-in | Manual setup | Manual setup |
| **Spam Protection** | Built-in | Manual setup | Manual setup |
| **Best For** | Quick start | Full control | Professional setup |

---

## 🔒 SECURITY BEST PRACTICES

### For Formspree
1. Formspree handles spam protection automatically
2. Your email is never exposed to client
3. No API keys needed

### For Cloudflare Functions
1. **Never store secrets in code** - use environment variables
2. **Add rate limiting** to prevent spam:
   ```typescript
   const clientIP = context.request.headers.get('cf-connecting-ip');
   // Implement rate limiting logic
   ```
3. **Validate all inputs** server-side
4. **Sanitize email content** to prevent injection:
   ```typescript
   const sanitize = (str) => {
     return str.replace(/[<>]/g, '');
   };
   ```
5. **Never log sensitive data** (emails, messages)

---

## ✅ TESTING CHECKLIST

- [ ] Form submits without errors
- [ ] Submission is received (check email)
- [ ] All form fields are captured correctly
- [ ] Success message displays after submission
- [ ] Form resets after successful submission
- [ ] Phone number is optional (doesn't block submission)
- [ ] Error messages display for invalid input
- [ ] Empty form submission is rejected
- [ ] Works on mobile devices
- [ ] Works in different browsers

---

## 🚀 DEPLOYMENT

### Deploy to Production
1. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Add contact form backend integration"
   git push origin main
   ```

2. Cloudflare Pages will auto-deploy
   - Wait for "Build Successful" status
   - Test form on live site

3. Monitor submissions:
   - **Formspree**: Check dashboard
   - **Cloudflare Functions**: Check Cloudflare Analytics

---

## ❓ TROUBLESHOOTING

### Form not submitting
- Check browser console for errors (F12)
- Verify form action URL is correct
- Check CORS headers (should be automatic on Cloudflare Pages)
- Ensure method is POST

### Email not received
- Check spam folder
- Verify email address is correct
- Check Formspree/Resend dashboard for errors
- Look at function logs in Cloudflare Pages

### CORS errors
- Should not happen on Cloudflare Pages
- If it does, add headers to function response:
  ```typescript
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
  ```

---

## 📞 SUPPORT

- **Formspree Help**: https://formspree.io/help/
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Resend Docs**: https://resend.com/docs

---

**Choose your approach and you'll have a working contact form in minutes!** 🎉
