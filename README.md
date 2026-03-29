# Repair My Deck Website

Static-first small-business website package for **Repair My Deck** (Reynoldsburg, Ohio).

## Included Files

- `index.html` - Main website page with SEO tags, semantic sections, CTA messaging, and contact form.
- `styles.css` - Mobile-first responsive styling.
- `script.js` - Navigation toggle, reviews rendering, and contact form validation/submission logic.
- `reviews.js` - Demo review data + optional Google reviews integration hook.
- `contact-handler.php` - Optional shared-hosting form handler using PHP `mail()`.

## Quick Upload (Shared Hosting)

1. Upload all files to your web root (`public_html` or equivalent).
2. Create an `assets` folder if not present.
3. Place your logo at `assets/logo.png`.
4. (Optional) Add real project photos and replace gallery placeholders in `index.html`.

## Contact Form Setup Options

### Option A: Static endpoint service (recommended simple setup)

Use Formspree or a similar service.

1. Create endpoint with your provider.
2. In `index.html`, update the form `action` attribute from:
   ```html
   action="contact-handler.php"
   ```
   to your provider URL, for example:
   ```html
   action="https://formspree.io/f/your-id"
   ```
3. Keep `script.js` as-is for validation + status messages.

### Option B: Built-in PHP handler (if host supports mail)

1. Keep form action pointing to `contact-handler.php`.
2. Open `contact-handler.php` and set:
   - `$toEmail` to your real inbox.
   - `From` domain to a valid domain mailbox for better deliverability.
3. Test with a real submission.

## Reviews Setup

### Default (works everywhere)

- `reviews.js` loads sample/demo reviews clearly labeled as demo content.

### Optional live Google reviews

- Keep API keys off the frontend.
- Create a secure backend endpoint to request Google Business/Places data.
- In `reviews.js`:
  1. Implement `fetchGoogleReviews()`.
  2. Set `mode: "live"`.
  3. Maintain fallback behavior to demo content.

## Easy Business Detail Edits

Update these common items in `index.html`:

- Phone number links: search `614-522-9472`
- Email: `info@repairmydeck.com`
- Website URL references
- Service area text (Reynoldsburg and nearby communities)

## Accessibility & Performance Notes

- Semantic HTML landmarks used (`header`, `main`, `section`, `footer`).
- Skip link for keyboard users.
- Alt text and ARIA labels included for placeholders.
- No external JS or CSS dependencies required.

## Suggested Next Improvements

- Add authentic project photos in gallery and hero.
- Replace demo reviews with live feed (secure backend integration).
- Add a privacy policy and terms page if needed.
- Add Google Analytics / conversion tracking script if desired.
