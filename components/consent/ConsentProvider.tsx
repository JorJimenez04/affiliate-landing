'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  ConsentState,
  DEFAULT_CONSENT,
  acceptAllConsent,
  rejectAllConsent,
  readConsentCookie,
  writeConsentCookie,
} from '@/lib/consent';
import { trackConsentUpdated } from '@/lib/analytics';

/**
 * Interfaz mínima para que, en una fase posterior, una CMP certificada
 * TCF v2.2 pueda sustituir esta implementación sin que el resto del
 * código (Footer, Analytics, slots de anuncios) tenga que cambiar.
 */
interface ConsentContextValue {
  consent: ConsentState;
  /** null mientras no se ha leído aún la cookie (evita flash de contenido). */
  hasDecided: boolean;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  setConsent: (partial: Pick<ConsentState, 'analytics' | 'advertising'>) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentState>(DEFAULT_CONSENT);
  const [hasDecided, setHasDecided] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    const stored = readConsentCookie();
    if (stored) {
      setConsentState(stored);
      setHasDecided(true);
    }
  }, []);

  const persist = useCallback((next: ConsentState) => {
    setConsentState(next);
    setHasDecided(true);
    writeConsentCookie(next);
    trackConsentUpdated(next);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      hasDecided,
      isPreferencesOpen,
      acceptAll: () => persist(acceptAllConsent()),
      rejectAll: () => persist(rejectAllConsent()),
      setConsent: (partial) => persist({ necessary: true, ...partial }),
      openPreferences: () => setIsPreferencesOpen(true),
      closePreferences: () => setIsPreferencesOpen(false),
    }),
    [consent, hasDecided, isPreferencesOpen, persist]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error('useConsent debe usarse dentro de <ConsentProvider>');
  return ctx;
}
