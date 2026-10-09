import type { ConsentState } from './consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

export function trackAffiliateClick(params: {
  merchant: string;
  productId?: string;
  articleSlug?: string;
  placement: string;
}): void {
  pushEvent('affiliate_click', params);
}

export function trackNewsletterSignup(params: { placement: string } = { placement: 'sidebar' }): void {
  pushEvent('newsletter_signup', params);
}

export function trackNeedSelected(need: string): void {
  pushEvent('need_selected', { need });
}

export function trackConsentUpdated(consent: ConsentState): void {
  pushEvent('consent_updated', {
    analytics: consent.analytics,
    advertising: consent.advertising,
  });
}
