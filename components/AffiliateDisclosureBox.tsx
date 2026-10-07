interface AffiliateDisclosureBoxProps {
  compact?: boolean;
}

export default function AffiliateDisclosureBox({ compact = false }: AffiliateDisclosureBoxProps) {
  if (compact) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-3">
        <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-700">Just so you know:</strong> some links on this page are affiliate links. If you buy something through them, I earn a small commission — at no extra cost to you. It's how this little site stays ad-clutter-free. 🌿
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
      <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 mb-1">A quick, honest note</h4>
        <p className="text-xs text-slate-500 leading-relaxed">
          I only recommend things I'd genuinely tell a friend about. Some of the links here are affiliate links, so if you buy through them, I earn a small commission at no extra cost to you. That relationship never changes what I write — if it's not good, I just won't mention it.
        </p>
      </div>
    </div>
  );
}
