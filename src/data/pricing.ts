/**
 * Prices shown on the site. Source of truth: docs/03-PRICING.md in the app
 * repo, and the plans configured in the app (Billing → plans). Keep the
 * `code` values equal to the app's plan codes: "Get started" preselects
 * that plan on the app's signup page.
 */

export interface FamilyPlan {
  code: 'essential' | 'plus' | 'premium';
  name: string;
  price: number;
  cadence: string;
  callLength: string;
  blurb: string;
  features: string[];
  featured?: boolean;
}

export const familyPlans: FamilyPlan[] = [
  {
    code: 'essential',
    name: 'Essential',
    price: 19,
    cadence: '2 calls a week',
    callLength: 'Up to about 5 minutes',
    blurb: 'A regular, reassuring hello.',
    features: [
      'Friendly check-in calls in the time window you choose',
      'Text or email alerts to the family members you choose',
      'Alert after missed calls in a row',
      'Call summaries and care notes in your family dashboard',
    ],
  },
  {
    code: 'plus',
    name: 'Plus',
    price: 39,
    cadence: '5 calls a week',
    callLength: 'Up to about 5 minutes',
    blurb: 'Our recommended plan: someone to talk to most days.',
    features: [
      'Everything in Essential',
      'Calls five days a week',
      'Family contact list: we ask about the people they love by name',
    ],
    featured: true,
  },
  {
    code: 'premium',
    name: 'Premium',
    price: 69,
    cadence: 'A call every day',
    callLength: 'Up to about 8 minutes',
    blurb: 'Daily company and the closest watch.',
    features: [
      'Everything in Plus',
      'Daily calls, including weekends',
      'Longer, more relaxed conversations',
    ],
  },
];

/** Each additional person in the same home. */
export const householdDiscountPct = 50;

/** Annual billing isn't available in the app yet; flip on when it is. */
export const showAnnual = false;
export const annualNote = 'Pay yearly and get 2 months free.';

export interface OrgTier {
  label: string;
  price: number;
  note?: string;
}

export const agencyTiers: OrgTier[] = [
  { label: '10–49 clients', price: 32 },
  { label: '50–199 clients', price: 28 },
  { label: '200+ clients or multi-site', price: 24 },
];

export const orgPricing = {
  baseCadence: '2 calls a week per client',
  fivePerWeekAddOn: 8,
  assistedLiving: { label: 'Assisted living (20+ residents)', price: 25 },
  siteFee: 99,
  implementationFee: 1500,
  implementationWaivedAt: 50,
};
