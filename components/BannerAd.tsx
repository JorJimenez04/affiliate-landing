interface BannerAdProps {
  title: string;
  description: string;
  ctaText: string;
  affiliateUrl: string;
  badge?: string;
}

export default function BannerAd({ title, description, ctaText, affiliateUrl, badge = "Sponsored Recommendation" }: BannerAdProps) {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-emerald-900 to-slate-900 rounded-2xl text-white shadow-lg border border-emerald-500/30">
      <div className="flex items-center justify-between mb-3">
        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full">
          {badge}
        </span>
        <span className="text-[10px] text-slate-400">Verified Partner Offer</span>
      </div>

      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-slate-300 text-sm mb-6 leading-relaxed">{description}</p>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-700/60">
        <span className="text-xs text-slate-400 italic">
          * Secure checkout via trusted affiliate partner.
        </span>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
        >
          {ctaText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}