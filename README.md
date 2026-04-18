# Repair My Deck Website (Static-First)

A polished, conversion-focused local service website package for **Repair My Deck** in Reynoldsburg, Ohio.
Built with plain HTML/CSS/JS plus an optional PHP contact handler for generic shared hosting.

## Files

- `index.html` - Full website markup, SEO tags, JSON-LD schema, conversion sections, and contact form.
- `styles.css` - Mobile-first responsive styles.
- `script.js` - Navigation toggle, reviews rendering, form validation/submission, and ID consistency checks.
- `reviews.js` - Demo review source + optional live Google reviews integration hook.
- `contact-handler.php` - Optional PHP mail handler.
- `assets/logo.png` - Your logo file (add this image manually).

## Shared Hosting Deployment

1. Upload all files to your web root (often `public_html`).
2. Create an `assets` folder if missing.
3. Upload your logo as `assets/logo.png`.
4. Test on mobile and desktop after upload.

## Contact Form Options

### Option A (Static endpoint service)
Use Formspree or similar:

1. Create your endpoint.
2. Update form action in `index.html` from:
   `action="contact-handler.php"`
   to your hosted endpoint URL.
3. Keep `script.js` for client-side validation and status messages.

### Option B (PHP on shared hosting)

1. Keep `action="contact-handler.php"`.
2. In `contact-handler.php`, set `$toEmail` to your inbox.
3. Confirm host mail() support.
4. Submit a test request and verify email delivery.

## Reviews Section Setup

### Default mode (recommended until live API is ready)

- `reviews.js` uses demo/sample data clearly labeled as sample content.

### Optional live Google reviews mode

1. Build a secure backend endpoint (never expose secret key in frontend code).
2. Implement `fetchGoogleReviews()` in `reviews.js` to call your backend.
3. Change `mode` from `"demo"` to `"live"`.
4. Keep fallback behavior in `script.js`.

## Quick Business Detail Updates

In `index.html`, update as needed:

- Phone: `614-522-9472`
- Email: `repairmydeck@iCloud.com`
- Website URL references
- Service areas (Reynoldsburg + nearby towns)

## Notes

- No Node, npm, React, build steps, or database required.
- Compatible with low-cost generic shared hosting.
- Designed to degrade gracefully if APIs are not configured yet.
