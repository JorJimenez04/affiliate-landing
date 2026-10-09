'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useConsent } from './ConsentProvider';

export default function ConsentBanner() {
  const { consent, hasDecided, isPreferencesOpen, acceptAll, rejectAll, setConsent, openPreferences, closePreferences } =
    useConsent();
  const [draftAnalytics, setDraftAnalytics] = useState(consent.analytics);
  const [draftAdvertising, setDraftAdvertising] = useState(consent.advertising);

  if (hasDecided && !isPreferencesOpen) return null;

  if (isPreferencesOpen) {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-950/50 flex items-end sm:items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-1">Configurar cookies</h2>
          <p className="text-sm text-slate-500 mb-5">
            Elige qué cookies quieres permitir. Puedes cambiar esta decisión cuando quieras desde el pie de página.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-800">Necesarias</p>
                <p className="text-xs text-slate-500">Imprescindibles para que el sitio funcione. Siempre activas.</p>
              </div>
              <input type="checkbox" checked disabled className="mt-1 accent-emerald-600" />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-800">Analítica</p>
                <p className="text-xs text-slate-500">Nos ayuda a entender qué artículos son útiles.</p>
              </div>
              <input
                type="checkbox"
                checked={draftAnalytics}
                onChange={(e) => setDraftAnalytics(e.target.checked)}
                className="mt-1 accent-emerald-600"
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-800">Publicidad</p>
                <p className="text-xs text-slate-500">Solo se usa si en algún momento activamos anuncios.</p>
              </div>
              <input
                type="checkbox"
                checked={draftAdvertising}
                onChange={(e) => setDraftAdvertising(e.target.checked)}
                className="mt-1 accent-emerald-600"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={closePreferences}
              className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                setConsent({ analytics: draftAnalytics, advertising: draftAdvertising });
                closePreferences();
              }}
              className="flex-1 text-sm font-semibold px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
            >
              Guardar preferencias
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-4 sm:p-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-slate-600 leading-relaxed">
          Usamos cookies propias y, si las aceptas, de analítica para entender qué artículos ayudan de verdad. Puedes
          leer más en nuestra{' '}
          <Link href="/politica-de-cookies" className="text-emerald-700 underline">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={rejectAll}
            className="text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Rechazar todo
          </button>
          <button
            onClick={acceptAll}
            className="text-sm font-semibold px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
          >
            Aceptar todo
          </button>
          <button
            onClick={openPreferences}
            className="text-sm font-medium px-3 py-2.5 rounded-xl text-slate-500 hover:text-slate-700 transition-colors"
          >
            Configurar
          </button>
        </div>
      </div>
    </div>
  );
}
