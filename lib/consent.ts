export type ConsentCategory = 'necessary' | 'analytics' | 'advertising';

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  advertising: boolean;
}

export const CONSENT_COOKIE_NAME = 'ggr_consent';
export const CONSENT_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 12 meses

export const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  advertising: false,
};

export function acceptAllConsent(): ConsentState {
  return { necessary: true, analytics: true, advertising: true };
}

export function rejectAllConsent(): ConsentState {
  return { necessary: true, analytics: false, advertising: false };
}

export function serializeConsent(consent: ConsentState): string {
  return JSON.stringify(consent);
}

export function parseConsent(raw: string | undefined | null): ConsentState | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics === 'boolean' && typeof parsed?.advertising === 'boolean') {
      return { necessary: true, analytics: parsed.analytics, advertising: parsed.advertising };
    }
    return null;
  } catch {
    return null;
  }
}

export function readConsentCookie(): ConsentState | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`));
  if (!match) return null;
  const raw = decodeURIComponent(match.split('=').slice(1).join('='));
  return parseConsent(raw);
}

export function writeConsentCookie(consent: ConsentState): void {
  if (typeof document === 'undefined') return;
  const value = encodeURIComponent(serializeConsent(consent));
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; max-age=${CONSENT_COOKIE_MAX_AGE_SECONDS}; path=/; SameSite=Lax`;
}
