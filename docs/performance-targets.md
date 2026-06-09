# Performance Targets — sanjivchandrasekar.com

## Baseline
Run Lighthouse before contributing: https://pagespeed.web.dev/analysis?url=https://sanjivchandrasekar.com

| Metric | Desktop Baseline | Mobile Baseline | Target Desktop | Target Mobile |
|--------|-----------------|-----------------|----------------|---------------|
| Performance | [run audit] | [run audit] | 95+ | 85+ |
| LCP | [run audit] | [run audit] | < 2.5s | < 3.0s |
| CLS | [run audit] | [run audit] | < 0.1 | < 0.1 |
| Mobile Score | [run audit] | [run audit] | 85+ | 85+ |

## Image Rules
- All images must be .webp with JPEG fallback via <picture>
- Max width: hero 1400px, portfolio cards 800px, thumbnails 400px
- All below-fold images must have loading="lazy"
- LCP image must have fetchpriority="high" — do NOT lazy load it

## CSS Rules
- No render-blocking CSS
- font-display: swap on all @font-face
- Critical CSS inlined in <head>
- Total CSS bundle: < 30kb uncompressed

## JS Rules
- All scripts deferred (defer or async)
- Total JS bundle: < 50kb uncompressed
