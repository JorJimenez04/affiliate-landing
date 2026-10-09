'use client';

import { trackAffiliateClick } from '@/lib/analytics';

interface StickyMobileCTAProps {
  text: string;
  ctaText: string;
  affiliateUrl: string;
  articleSlug?: string;
}

export default function StickyMobileCTA({ text, ctaText, affiliateUrl, articleSlug }: StickyMobileCTAProps) {
  const handleClick = () => {
    trackAffiliateClick({
      merchant: safeHostname(affiliateUrl),
      articleSlug,
      placement: 'sticky_mobile_cta',
    });
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-900/95 backdrop-blur border-t border-emerald-500/30 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <p className="text-white text-xs font-medium leading-snug line-clamp-2">{text}</p>
      <a
        href={affiliateUrl}
        target="_blank"
        rel="sponsored nofollow noopener"
        onClick={handleClick}
        className="shrink-0 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
      >
        {ctaText}
      </a>
    </div>
  );
}

function safeHostname(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return 'desconocido';
  }
}
