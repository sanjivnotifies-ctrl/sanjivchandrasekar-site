# Contributing to sanjivchandrasekar.com

Thanks for contributing! This is an open collaboration to improve the frontend performance, backend reliability, and code architecture of [sanjivchandrasekar.com](https://sanjivchandrasekar.com).

---

## Local Setup

### Option A — Simple (no functions)
```bash
git clone https://github.com/sanjivnotifies-ctrl/sanjivchandrasekar-site
cd sanjivchandrasekar-site
npx serve src/
```

### Option B — Full Netlify dev (with serverless functions)
```bash
npm install
netlify dev
```

Copy `.env.example` to `.env` and fill in your values.

---

## Branching Strategy
| Branch | Purpose |
|--------|---------|
| `main` | Production — auto-deploys to Netlify |
| `dev` | Staging — deploy previews only |
| `feature/[name]` | New features — PR into `dev` |
| `fix/[name]` | Bug fixes — PR into `dev` |

---

## PR Requirements
- Screenshot (before/after for any visual change)
- Tested on mobile at 375px minimum
- Lighthouse score before/after for performance PRs
- No hardcoded colors/values — use tokens from `src/css/tokens.css`

---

## Priority Contribution Areas
| Priority | Area | Files |
|----------|------|-------|
| HIGH | Contact form serverless handler | `functions/contact-handler.js` |
| HIGH | Mobile layout fixes (< 375px) | `src/css/components/*.css` |
| MED | Image optimization (WebP + srcset) | `src/assets/images/` |
| MED | CSS design token extraction | `src/css/tokens.css` |
| LOW | GA4 analytics wiring | `src/js/main.js` |
| LOW | Scroll animations | `src/js/animations.js` |
