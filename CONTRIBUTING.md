# Contributing to sanjivchandrasekar.com

Thank you for contributing. This is the portfolio site of Sanjiv Chandrasekar, a Creative Director and Brand Identity Specialist. Please read this fully before opening a PR.

---

## Local Setup

### Option A — Static only (no functions)
```bash
git clone https://github.com/sanjivnotifies-ctrl/sanjivchandrasekar-site
cd sanjivchandrasekar-site
npx serve src/
```
Open http://localhost:3000

### Option B — With Netlify Functions (contact form)
```bash
npm install
cp .env.example .env
# Fill in your RESEND_API_KEY and email values in .env
netlify dev
```
Open http://localhost:8888

---

## Branching Strategy

| Branch | Purpose |
|--------|---------|
| main | Production — auto-deploys to Netlify |
| dev | Staging — all PRs target this branch |
| feature/name | New features — branch from dev |
| fix/name | Bug fixes — branch from dev |
| perf/name | Performance improvements |

---

## Priority Areas for Contribution

### RED — Critical
- Contact form backend (functions/contact-handler.js)
- Mobile layout QA and fixes (375px, 390px, 414px breakpoints)

### YELLOW — High Impact
- Image optimization (WebP + srcset pipeline)
- CSS design token extraction into tokens.css
- Contact form success/error UI states

### GREEN — Nice to Have
- GA4 analytics implementation
- Scroll animations polish
- Dark mode support
- JSON-LD CreativeWork schema for portfolio projects

---

## PR Requirements

Every PR must include:
- [ ] Description of what changed and why
- [ ] Before/after screenshot for any visual change
- [ ] Tested at 375px, 768px, and 1280px viewport widths
- [ ] Lighthouse score before/after for any performance PR
- [ ] Contact form tested end-to-end if functions/ is touched
- [ ] No new hardcoded color or spacing values (use tokens.css)

---

## Code Style

- CSS: Use variables from tokens.css — no hardcoded hex values or px magic numbers
- JS: Vanilla ES6+ only — no jQuery, no frameworks
- HTML: Semantic elements — use article, section, nav, main, aside correctly
- Images: Always include alt text. Use webp format with jpeg fallback
- Commits: Conventional format — feat:, fix:, perf:, docs:, style:, refactor:

---

## Questions?

Open a Discussion tab on GitHub or reach out via sanjivchandrasekar.com/contact
