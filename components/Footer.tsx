'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site.config';
import { useConsent } from '@/components/consent/ConsentProvider';

const LEGAL_LINKS = [
  { href: '/sobre-nosotros', label: 'Sobre nosotros' },
  { href: '/como-trabajamos', label: 'Cómo trabajamos' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/aviso-importante', label: 'Aviso importante' },
  { href: '/aviso-de-afiliados', label: 'Aviso de afiliados' },
  { href: '/politica-de-privacidad', label: 'Política de privacidad' },
  { href: '/politica-de-cookies', label: 'Política de cookies' },
];

export default function Footer() {
  const { openPreferences } = useConsent();

  return (
    <footer className="bg-white border-t border-slate-200 py-10 px-6 mt-20 text-xs text-slate-500">
      <div className="max-w-4xl mx-auto space-y-5 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-slate-600 font-medium">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-emerald-600 transition-colors">
              {link.label}
            </Link>
          ))}
          <button onClick={openPreferences} className="hover:text-emerald-600 transition-colors underline">
            Configurar cookies
          </button>
        </nav>

        <p>© {new Date().getFullYear()} {siteConfig.name}. Gracias por leer — todo aquí sale de probar, equivocarnos y tomar demasiado té. 🍵</p>
        <p className="max-w-2xl mx-auto text-slate-400">
          <strong>Para que lo sepas:</strong> algunos enlaces de este sitio son de afiliado y podemos ganar una pequeña
          comisión si compras a través de ellos, sin costo extra para ti. Solo recomendamos lo que de verdad le
          diríamos a un amigo.
        </p>
      </div>
    </footer>
  );
}
