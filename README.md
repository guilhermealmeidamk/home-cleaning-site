# In Home Cleaning — Template
Next.js + Tailwind starter for a premium residential cleaning website.

Quick setup

1. Install dependencies:

```bash
npm install
```

2. Add your logo at `public/logo.png` (replace the placeholder).

3. Configure environment variables in a `.env.local` file:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false # true if using port 465
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-pass
CONTACT_TO=you@yourdomain.com
SMTP_FROM="Website" <no-reply@yourdomain.com>
```

4. Run in development:

```bash
npm run dev
```

The contact API is at `pages/api/contact.js` and sends emails using `nodemailer`.
