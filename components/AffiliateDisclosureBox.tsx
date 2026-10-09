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
          <strong className="text-slate-700">Para que lo sepas:</strong> algunos enlaces de esta página son de afiliado. Si compras algo a través de ellos, gano una pequeña comisión, sin costo extra para ti. Así este pequeño rincón de internet se mantiene sin publicidad invasiva. 🌿
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
        <h4 className="text-sm font-bold text-slate-900 mb-1">Una nota breve y honesta</h4>
        <p className="text-xs text-slate-500 leading-relaxed">
          Solo recomiendo cosas que de verdad le diría a un amigo. Algunos de los enlaces de aquí son de afiliado, así que si compras a través de ellos, gano una pequeña comisión sin costo extra para ti. Esa relación comercial nunca cambia lo que escribo — si algo no me convence, simplemente no lo menciono.
        </p>
      </div>
    </div>
  );
}
