import AdSlot, { AdNetworkSlot } from './AdSlot';

interface AffiliateNativeAdCardProps {
  network?: undefined;
  sponsor: string;
  title: string;
  excerpt: string;
  image: string;
  ctaText: string;
  affiliateUrl: string;
}

interface NetworkNativeAdCardProps {
  /** Config del script del network de anuncios (Adsterra, etc.) a inyectar en esta tarjeta */
  network: AdNetworkSlot;
  sponsor?: string;
}

type NativeAdCardProps = AffiliateNativeAdCardProps | NetworkNativeAdCardProps;

export default function NativeAdCard(props: NativeAdCardProps) {
  if (props.network) {
    const { network, sponsor = 'our ad partners' } = props;
    return (
      <div className="group relative bg-white border border-amber-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col animate-fade-up">
        <span className="absolute top-3 left-3 z-10 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-300/80 shadow-sm">
          Sponsored
        </span>
        <div className="p-5 pt-12 flex flex-col grow items-center justify-center min-h-[220px]">
          <AdSlot {...network} className="w-full flex items-center justify-center" />
        </div>
        <div className="px-5 pb-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">Paid placement from {sponsor}</span>
        </div>
      </div>
    );
  }

  const { sponsor, title, excerpt, image, ctaText, affiliateUrl } = props;

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group relative bg-white border border-amber-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col animate-fade-up"
    >
      <span className="absolute top-3 left-3 z-10 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-300/80 shadow-sm">
        Sponsored
      </span>
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col grow">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <span>A little something from</span>
          <span>•</span>
          <span className="text-slate-400">{sponsor}</span>
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">Paid placement, picked by us</span>
          <span className="text-emerald-600 font-semibold text-xs flex items-center gap-1">
            {ctaText} →
          </span>
        </div>
      </div>
    </a>
  );
}
