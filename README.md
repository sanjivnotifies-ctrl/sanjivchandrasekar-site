# sanjivchandrasekar.com — Portfolio Site

Personal portfolio and brand identity studio site for **Sanjiv Chandrasekar**, Creative Director & Brand Identity Specialist with 9+ years across brand identity, ecommerce creative, and athlete personal branding.

---

## Live Site
[sanjivchandrasekar.com](https://sanjivchandrasekar.com)

## Tech Stack
| Layer | Tech |
|-------|------|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| Hosting | Hostinger |
| Deployment | Netlify (auto-deploy from `main`) |
| Forms | Netlify Functions (serverless handler) |
| SEO | JSON-LD, Open Graph, sitemap.xml, robots.txt |

## Pages
| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero + stat block (9+ Years, 8 Industries, 3 Countries, 0 Templates) |
| Work | `/work/` | Portfolio showcase |
| Pricing | `/pricing/` | 5 service tiers (Rs.10,000 to Rs.1,25,000) |
| Contact | `/contact/` | Contact form with serverless handler |

## Known Issues (Priority Order)
See `docs/known-issues.md` for full details.

1. Contact form backend — unreliable, needs serverless function wired up
2. Mobile layout — breaks on screens below 375px on multiple pages
3. No image optimization pipeline — assets served uncompressed
4. CSS not componentized — no design tokens, hardcoded values throughout
5. Analytics — GA4 not confirmed as wired correctly

## Performance Targets
| Metric | Estimated Current | Target |
|--------|------------------|--------|
| Lighthouse Performance | ~65 | 90+ |
| LCP | Unknown | < 2.5s |
| CLS | Unknown | < 0.1 |
| Mobile Score | ~55 | 85+ |

## Project Structure
```
sanjivchandrasekar-site/
├── src/               <- All site source files
│   ├── css/           <- Componentized CSS + design tokens
│   ├── js/            <- Scripts (form, animations, pricing)
│   ├── assets/        <- Images, fonts, icons
│   └── seo/           <- sitemap.xml, robots.txt, JSON-LD schemas
├── functions/         <- Netlify serverless functions
├── docs/              <- Dev documentation
├── .github/           <- Issue & PR templates
└── netlify.toml
```

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines.

---

*Built and maintained by [Sanjiv Chandrasekar](https://sanjivchandrasekar.com) · Think Red Studios*
