import React from 'react';
import { ProductRecommendation } from '@/lib/articles';

interface Props {
  product: ProductRecommendation;
}

export default function ProductAffiliateCard({ product }: Props) {
  return (
    <div className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between my-6">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          {product.badge && (
            <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
              {product.badge}
            </span>
          )}
          {product.rating && (
            <span className="text-amber-500 text-sm font-medium flex items-center gap-1 ml-auto">
              ★ {product.rating} / 5.0
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{product.description}</p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        {product.priceEstimate ? (
          <span className="text-xl font-extrabold text-slate-900">{product.priceEstimate}</span>
        ) : (
          <span className="text-xs text-slate-400">Check price on store</span>
        )}

        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-2"
        >
          Take a Look ✨
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
      <p className="text-[10px] text-slate-400 mt-3 text-center">
        * This is an affiliate link — if you buy through it, I earn a small commission at no extra cost to you. It's genuinely what helps keep this little corner of the internet running. 💛
      </p>
    </div>
  );
}