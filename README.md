# Repair My Deck Website (Minimal Redesign)

A minimalistic static website for Repair My Deck that works on low-cost shared hosting.

## Files

- `index.html` - Main homepage markup with SEO, pricing, gallery, reviews, and contact form.
- `backyard-builds/index.html` - Dedicated backyard builds / outdoor woodworking service page.
- `john-ruth-custom-deck-options.html` - Private customer-specific quote/options page for John and Ruth.
- `ellie-custom-estimate-options.html` - Private customer-specific estimate/options page for Ellie with placeholder pricing and image upload placeholders.
- `styles.css` - Minimal responsive styles.
- `script.js` - Menu toggle and contact form validation/submission.
- `reviews.js` - Google reviews section data/link configuration.
- `contact-handler.php` - Optional PHP form handler for shared hosting.

## Business Details Used

- Phone: `614-522-9472`
- Email: `repairmydeck@iCloud.com`
- Service area: Reynoldsburg, OH and surrounding area
- Pricing copy:
  - Deck repairs starting as low as `$10 / linear foot`

## Photo Integration

The site uses image slots in `assets/photos/`.
Add your own photos using these filenames:

- `featured-deck.jpg`
- `deck-repair-closeup.jpg`
- `new-deck-build.jpg`
- `before-after.jpg`
- `railing-stairs-detail.jpg`

If filenames differ, update the `<img src="...">` paths in `index.html`.

### John & Ruth private page image setup (easiest method)

For `john-ruth-custom-deck-options.html`, just do this:

1. Open the folder `assets/photos/`.
2. Copy your 12 John & Ruth images into that folder.
3. Make sure each filename is an exact match.

Use this checklist file for copy/paste-ready names:

- `assets/photos/UPLOAD-CHECKLIST.md`

That checklist now includes:
- exact final `assets/photos/...` file paths,
- a step-by-step upload process, and
- a per-option mapping table (which before/cedar/composite image each card uses).

The page is already wired to those exact paths; once files are in place with exact names, the before/after toggle will work automatically.

## Contact Form Forwarding

By default, the form posts to FormSubmit (`https://formsubmit.co/repairmydeck@iCloud.com`) so static test environments can send email without PHP.

Optional: change the form `action` back to `contact-handler.php` if your host supports PHP `mail()` and you prefer self-hosted forwarding.

## Upload Steps

1. Upload all files to your host web root (`public_html` or equivalent).
2. Upload logo to `assets/logo.png`.
3. Upload gallery images to `assets/photos/`.
4. Submit a test form and verify email delivery.

## SEO Files

- `robots.txt` included for crawler directives.
- `sitemap.xml` included and referenced by `robots.txt`.
- Submit `https://www.repairmydeck.com/sitemap.xml` in Google Search Console after deployment.


## Packaging for ZIP Download

Binary ZIP artifacts are not committed in this repository to avoid branch update errors.
Generate a local ZIP package when needed:

```bash
zip -r dist/repair-my-deck-site.zip index.html styles.css script.js reviews.js contact-handler.php README.md robots.txt sitemap.xml assets
```


## GitHub Branch Update Compatibility

This repository is configured to avoid binary update failures in some GitHub/PR tools:

- `.gitattributes` marks source files as text and common media/archive formats as binary.
- `.gitignore` prevents committing generated ZIP files and local photo binaries by default.
- Keep only `.gitkeep` files in `assets/photos/` and `dist/` in git; add images/ZIPs only in deployment packages or releases.

If a branch still reports a binary-file update error, create a fresh branch from the current clean commit and push that branch.


## Google Reviews Section

The site now includes a Google Reviews section that links directly to your public Google reviews page.

- Source file: `reviews.js`
- Update `googleReviewsUrl` if your preferred Google Business Profile URL changes.
- Optional: add `liveSummary` in `reviews.js` if you later connect a secure backend integration.
