// Disparo de eventos de click no bloqueante. Funciona con o sin GA4/Meta Pixel
// instalados: si no existen, simplemente no hace nada (no lanza errores).

type DataLayerWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  fbq?: (...args: unknown[]) => void;
};

export function trackOfferClick(offerId: string, placement: string): void {
  if (typeof window === 'undefined') return;
  const w = window as DataLayerWindow;

  w.dataLayer?.push({
    event: 'offer_click',
    offer_id: offerId,
    placement,
  });

  w.fbq?.('trackCustom', 'OfferClick', { offer_id: offerId, placement });
}
