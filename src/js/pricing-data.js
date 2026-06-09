/**
 * pricing-data.js - Pricing package configuration
 * Update here to change tiers without touching HTML
 */

var PRICING_PACKAGES = [
  {
    id: 'dot',
    name: 'Dot',
    price: 10000,
    currency: 'INR',
    tagline: 'The starting point.',
    deliverables: [
      '1 Logo concept (3 variations)',
      'Black & white + color versions',
      'Basic brand guidelines (1 page)',
      'PNG + PDF delivery'
    ],
    turnaround: '5 business days',
    revisions: 2,
    cta: 'Start with Dot',
    highlighted: false
  },
  {
    id: 'signal',
    name: 'Signal',
    price: 25000,
    currency: 'INR',
    tagline: 'Identity that communicates.',
    deliverables: [
      '2 Logo concepts (3 variations each)',
      'Color palette + typography system',
      'Brand guidelines (5 pages)',
      'All file formats (AI, EPS, SVG, PNG, PDF)'
    ],
    turnaround: '8 business days',
    revisions: 3,
    cta: 'Start with Signal',
    highlighted: false
  },
  {
    id: 'form',
    name: 'Form',
    price: 48000,
    currency: 'INR',
    tagline: 'Full brand expression.',
    deliverables: [
      '3 Logo concepts + selected concept refined',
      'Complete brand identity system',
      'Brand guidelines (15+ pages)',
      'Social media kit',
      'All file formats'
    ],
    turnaround: '14 business days',
    revisions: 5,
    cta: 'Start with Form',
    highlighted: true
  },
  {
    id: 'system',
    name: 'System',
    price: 80000,
    currency: 'INR',
    tagline: 'Brand built to scale.',
    deliverables: [
      'Everything in Form',
      'Brand motion guidelines',
      'Icon system (10 icons)',
      'Pitch deck template',
      'Brand audit of existing assets'
    ],
    turnaround: '21 business days',
    revisions: 'Unlimited (within scope)',
    cta: 'Start with System',
    highlighted: false
  },
  {
    id: 'world',
    name: 'World',
    price: 125000,
    currency: 'INR',
    tagline: 'The complete universe.',
    deliverables: [
      'Everything in System',
      'Brand strategy document',
      'Website design (up to 5 pages)',
      'Print collateral design',
      '1 month post-launch support'
    ],
    turnaround: '30 business days',
    revisions: 'Unlimited',
    cta: 'Start with World',
    highlighted: false
  }
];
