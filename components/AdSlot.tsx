'use client';

import { useEffect, useRef } from 'react';

export interface AdNetworkSlot {
  /** Script "invoke" del network (Adsterra u otro), ej. "//pl12345678.effectivecpmgate.com/xx/invoke.js" */
  scriptSrc: string;
  /** Id único del contenedor que el script del network espera encontrar en el DOM */
  containerId: string;
  /** Alto/ancho mínimo del slot mientras el network carga, para no generar layout shift */
  height?: number;
  width?: number;
  className?: string;
}

/**
 * Inyecta el script de un network de anuncios (Adsterra, etc.) dentro de un
 * contenedor aislado y propio de esta instancia. El script y su <div> target
 * se crean/destruyen únicamente dentro del nodo que controla este componente,
 * así que nunca toca el resto del DOM de la página.
 *
 * El guard por `childElementCount` evita doble inyección en StrictMode/dev,
 * y el cleanup al desmontar evita scripts duplicados al navegar entre rutas
 * del App Router (navegación client-side).
 */
export default function AdSlot({ scriptSrc, containerId, height, width, className }: AdNetworkSlot) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.childElementCount > 0) return;

    const target = document.createElement('div');
    target.id = containerId;
    host.appendChild(target);

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = scriptSrc;
    host.appendChild(script);

    return () => {
      host.innerHTML = '';
    };
  }, [scriptSrc, containerId]);

  return (
    <div
      ref={hostRef}
      className={className}
      style={{ minHeight: height, minWidth: width }}
      aria-label="Publicidad"
      role="complementary"
    />
  );
}
