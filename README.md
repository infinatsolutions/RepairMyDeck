# Repair My Deck Website (Minimal Redesign)

A minimalistic static website for Repair My Deck that works on low-cost shared hosting.

## Files

- `index.html` - Main page markup with SEO, pricing, gallery, and contact form.
- `styles.css` - Minimal responsive styles.
- `script.js` - Menu toggle and contact form validation/submission.
- `reviews.js` - Reserved placeholder (reviews are currently not displayed).
- `contact-handler.php` - Optional PHP form handler for shared hosting.

## Business Details Used

- Phone: `614-522-9472`
- Email: `repairmydeck@iCloud.com`
- Service area: Reynoldsburg, OH and surrounding area
- Pricing copy:
  - Deck repairs starting as low as `$6 / linear foot`
  - New deck construction starting at `$35 / square foot`

## Photo Integration

The site now uses real image slots instead of placeholder blocks.
Add your photos in `assets/photos/` with these filenames:

- `featured-deck.jpg`
- `deck-repair-closeup.jpg`
- `new-deck-build.jpg`
- `before-after.jpg`
- `railing-stairs-detail.jpg`

If filenames differ, update the `<img src="...">` paths in `index.html`.

## Contact Form Forwarding

By default, the form posts to `contact-handler.php`, which forwards to:

- `repairmydeck@iCloud.com`

If your host doesn't support `mail()`, replace the form `action` in `index.html` with your Formspree (or similar) endpoint.

## Upload Steps

1. Upload all files to your host web root (`public_html` or equivalent).
2. Upload logo to `assets/logo.png`.
3. Upload gallery images to `assets/photos/`.
4. Submit a test form and verify email delivery.
