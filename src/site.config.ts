/**
 * Everything marketing changes most often lives here and in data/pricing.ts.
 * PUBLIC_APP_URL (build env) points the buttons at the WarmLine app.
 */
const appUrl = (import.meta.env.PUBLIC_APP_URL ?? 'http://localhost:8090').replace(/\/$/, '');

export const site = {
  name: 'WarmLine',
  tagline: 'A friendly phone call that checks in, every time.',
  description:
    'WarmLine calls older adults on a regular schedule for a warm, unhurried check-in, and lets family or care staff know right away if something needs attention.',
  appUrl,
  signupUrl: `${appUrl}/signup`,
  signInUrl: `${appUrl}/admin`,
  salesEmail: 'sales@example.com',
  supportEmail: 'support@example.com',
  partnersEmail: 'partners@example.com',
  /** Shown in the footer; leave empty to hide. */
  companyLine: '',
};

export const nav = [
  { href: '/families/', label: 'For families' },
  { href: '/organizations/', label: 'For care providers' },
  { href: '/partners/', label: 'Partners' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/faq/', label: 'FAQ' },
];
