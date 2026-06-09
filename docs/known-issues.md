# Known Issues — sanjivchandrasekar.com

Last updated: June 2026

---

## Critical

### 1. Contact Form Backend — Unreliable
**Page**: /contact/
**Problem**: Form submission has no confirmed backend handler. Submissions may silently fail.
**Fix needed**: Wire `functions/contact-handler.js` to the form POST. Use Resend API or Nodemailer.
**Env vars required**: RESEND_API_KEY, TO_EMAIL, FROM_EMAIL

### 2. Mobile Layout Breaks Below 375px
**Pages**: Homepage hero, Pricing cards, Work grid
**Problem**: Layout was partially fixed but not QA'd at 375px.
**Fix needed**: Full breakpoint audit at 375px, 390px, 414px, 768px.

---

## Medium Priority

### 3. No Image Optimization Pipeline
**Problem**: Portfolio images served raw — no WebP conversion, no srcset, no lazy loading.
**Impact**: Estimated 30-40 point drag on Lighthouse Performance score.

### 4. CSS Not Componentized
**Problem**: Styles written with hardcoded values — no CSS custom properties.
**Fix needed**: Extract all values into `src/css/tokens.css`.

---

## Low Priority

### 5. Analytics Not Confirmed
GA4 may not be firing correctly. Verify in GA4 DebugView.

### 6. Pricing Page Not Data-Driven
Pricing tiers hardcoded in HTML. Move to `src/js/pricing-data.js`.

### 7. Missing JSON-LD Schemas
Service, LocalBusiness, and CreativeWork schemas not yet implemented.
