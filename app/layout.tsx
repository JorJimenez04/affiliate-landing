import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_NAME = 'GetGreenRoutine';
const SITE_URL = 'https://getgreenroutine.com';
const SITE_DESCRIPTION =
  'Traditional phytotherapy and practical science, daily habits, plant-based recipes and active recovery — honest editorial guides on living a greener, healthier routine.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Herbal Wisdom & Healthy Habits`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: '/',
    title: `${SITE_NAME} | Herbal Wisdom & Healthy Habits`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Herbal Wisdom & Healthy Habits`,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#059669',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
