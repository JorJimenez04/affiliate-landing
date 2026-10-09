import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site.config';
import { ConsentProvider } from '@/components/consent/ConsentProvider';
import ConsentBanner from '@/components/consent/ConsentBanner';
import Analytics from '@/components/analytics/Analytics';
import Footer from '@/components/Footer';

const TAGLINE = 'Sabiduría herbal y hábitos saludables';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | ${TAGLINE}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    url: '/',
    locale: siteConfig.locale,
    title: `${siteConfig.name} | ${TAGLINE}`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${TAGLINE}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#059669',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.domain,
      },
      {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.domain,
        inLanguage: siteConfig.lang,
      },
    ],
  };

  return (
    <html lang={siteConfig.lang}>
      <body className="font-sans antialiased">
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ConsentProvider>
          <Analytics />
          {children}
          <Footer />
          <ConsentBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
