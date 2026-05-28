# sanjivchandrasekar.com — Portfolio Site

Personal portfolio and brand identity studio site for **Sanjiv Chandrasekar**, Creative Director & Brand Identity Specialist with 9+ years across 8 industries and 3 countries.

---

## Live Site
[sanjivchandrasekar.com](https://sanjivchandrasekar.com)

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| Hosting | Hostinger |
| Deployment | Netlify (auto-deploy from main branch) |
| Forms | Netlify Serverless Functions (see functions/) |
| SEO | JSON-LD schemas, Open Graph, sitemap.xml, robots.txt |

---

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | / | Hero + editorial stat block + intro |
| Work | /work/ | Curated portfolio showcase |
| Pricing | /pricing/ | 5 service tiers from Rs 10K to Rs 1.25L |
| Contact | /contact/ | Contact form + social links |

---

## Known Issues (Priority Order)

See docs/known-issues.md for full details.

1. CRITICAL: Contact form backend unreliable — no confirmed handler
2. CRITICAL: Mobile layout breaks at under 375px on multiple pages
3. HIGH: No image optimization pipeline — assets uncompressed
4. HIGH: CSS lacks design tokens — hardcoded values throughout
5. HIGH: No error/success states on contact form UI
6. MEDIUM: Analytics (GA4) not confirmed wired up
7. LOW: No CMS — content updates require manual HTML edits

---

## Performance Targets

| Metric | Current (est.) | Target |
|--------|----------------|--------|
| Lighthouse Performance | ~65 | 90+ |
| LCP | Unknown | < 2.5s |
| CLS | Unknown | < 0.1 |
| Mobile Score | ~55 | 85+ |

Run a Lighthouse audit and update this table with real baselines before contributing.

---

## Project Structure

```
sanjivchandrasekar-site/
├── src/
│   ├── index.html
│   ├── pricing.html
│   ├── contact.html
│   ├── work/index.html
│   ├── assets/images/ fonts/ icons/
│   ├── css/
│   │   ├── tokens.css       <- Design tokens (START HERE)
│   │   ├── global.css
│   │   ├── components/
│   │   └── pages/
│   ├── js/
│   │   ├── main.js
│   │   ├── contact-form.js
│   │   ├── animations.js
│   │   └── pricing-data.js
│   └── seo/sitemap.xml robots.txt
├── functions/
│   └── contact-handler.js   <- Netlify serverless form handler
├── docs/
│   ├── design-system.md
│   ├── seo-audit.md
│   ├── performance-targets.md
│   └── known-issues.md
├── .github/ISSUE_TEMPLATE/ PULL_REQUEST_TEMPLATE.md
├── netlify.toml
├── .env.example
└── package.json
```

---

## Contributing

See CONTRIBUTING.md for full guidelines.

Quick start:
```bash
git clone https://github.com/sanjivnotifies-ctrl/sanjivchandrasekar-site
cd sanjivchandrasekar-site
npx serve src/
# or for Netlify Functions:
npm install && netlify dev
```

---

## Design Identity

- Tagline: 9+ Years | 8 Industries | 3 Countries | 0 Templates
- Specialisation: Brand identity, athlete personal branding, dual-read logo systems, e-commerce creative
- Notable clients: Fragrance World (Dubai), Think Red Studios, Chhattisgarh Open Golf Championship, cricketer Sai Kishore

---

*This repo is open for frontend and backend contributions. Please read CONTRIBUTING.md before submitting a PR.*
