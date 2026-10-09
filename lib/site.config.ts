export const siteConfig = {
  name: 'GetGreenRoutine',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://getgreenroutine.com',
  lang: 'es' as const,
  locale: 'es_CO' as const,
  description:
    'Fitoterapia tradicional, hábitos diarios, recetas con plantas y recuperación activa, contados desde la experiencia propia — no es un sitio médico.',
  // TODO(legal-review): email real pendiente de confirmación.
  contactEmail: '[EMAIL_PENDIENTE]',
  /** Apagado por defecto: ningún script de anuncios se carga hasta activarlo explícitamente. */
  adsEnabled: process.env.NEXT_PUBLIC_ADS_ENABLED === 'true',
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || undefined,
};

export type SiteConfig = typeof siteConfig;
