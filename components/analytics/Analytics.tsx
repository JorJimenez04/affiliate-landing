'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { siteConfig } from '@/lib/site.config';
import { useConsent } from '@/components/consent/ConsentProvider';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/**
 * Carga GA4 únicamente si hay un ga4Id configurado. El script en sí se
 * inyecta siempre que exista el id (gtag.js es inocuo sin consentimiento),
 * pero el modo de consentimiento (Consent Mode v2) arranca denegado y solo
 * se actualiza a "granted" cuando la persona acepta analítica — así ningún
 * evento/cookie de medición se envía sin su permiso.
 */
export default function Analytics() {
  const { consent, hasDecided } = useConsent();
  const didSetDefaults = useRef(false);

  useEffect(() => {
    if (!siteConfig.ga4Id) return;

    if (!didSetDefaults.current) {
      gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
      didSetDefaults.current = true;
    }

    if (!hasDecided) return;

    gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.advertising ? 'granted' : 'denied',
      ad_user_data: consent.advertising ? 'granted' : 'denied',
      ad_personalization: consent.advertising ? 'granted' : 'denied',
    });
  }, [consent, hasDecided]);

  if (!siteConfig.ga4Id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ window.dataLayer.push(arguments); }
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${siteConfig.ga4Id}');
          window.gtag = gtag;
        `}
      </Script>
    </>
  );
}
