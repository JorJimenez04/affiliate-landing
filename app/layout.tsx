import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PanoramaDigital | Reseñas y Guías de Entretenimiento Interactivo',
  description:
    'Análisis editorial y comparativas de plataformas digitales de entretenimiento interactivo y estilo de vida. Contenido para mayores de 18 años.',
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
