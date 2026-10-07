// Fuente única de verdad para todo el contenido editorial y sus enlaces de
// salida (Smartlinks de CrakRevenue, etc.). Edita únicamente este archivo
// para añadir, quitar o re-redactar artículos — ningún componente debe
// tener URLs ni copys "hardcodeados".

export type Accent = 'gold' | 'teal' | 'indigo' | 'rose';

export interface Offer {
  id: string;
  /** Categoría editorial mostrada como etiqueta superior de la tarjeta */
  category: string;
  /** Etiqueta opcional de autoridad, ej. "Informe Especial" */
  tag?: string;
  title: string;
  excerpt: string;
  /** Valoración editorial sobre 5.0, ej. 4.9 */
  rating: number;
  readTime: string;
  accent: Accent;
  /** URL base de tracking del smartlink/red de afiliación */
  baseUrl: string;
  /**
   * Nombre del parámetro de sub-id que usa la RED (ej. CrakRevenue: subid1-subid5).
   * Déjalo vacío para no tocar los parámetros propios de la red y en su lugar
   * añadir un parámetro "subid" propio para tu analítica interna.
   */
  networkSubIdParam?: string;
}

export const OFFERS: Offer[] = [
  {
    id: 'live-platforms',
    category: 'Entretenimiento Interactivo',
    tag: 'Informe Especial',
    title: 'Las Plataformas de Chat en Vivo Mejor Valoradas de 2026',
    excerpt:
      'Analizamos las comunidades de transmisión en vivo con mayor crecimiento, verificación de usuarios y reputación este año.',
    rating: 4.9,
    readTime: '4 min de lectura',
    accent: 'gold',
    // ⚠️ PLACEHOLDER — reemplaza por tu smartlink real de CrakRevenue.
    baseUrl: 'https://www.crakrevenue.com/smartlink/REPLACE_WITH_YOUR_SMARTLINK_ID',
  },
  {
    id: 'dating-guide',
    category: 'Estilo de Vida & Citas',
    title: 'Guía Completa: Apps de Citas con Verificación de Perfil',
    excerpt:
      'Comparamos las plataformas de citas que priorizan la seguridad, la privacidad y la autenticidad de sus miembros.',
    rating: 4.8,
    readTime: '5 min de lectura',
    accent: 'teal',
    baseUrl: 'https://www.crakrevenue.com/smartlink/REPLACE_WITH_YOUR_SMARTLINK_ID',
  },
  {
    id: 'community-review',
    category: 'Diversidad & Comunidad',
    title: 'Comunidades Alternativas: Un Análisis Editorial sin Filtros',
    excerpt:
      'Un repaso a los espacios digitales que están redefiniendo la inclusión dentro del entretenimiento online.',
    rating: 4.7,
    readTime: '6 min de lectura',
    accent: 'indigo',
    baseUrl: 'https://www.crakrevenue.com/smartlink/REPLACE_WITH_YOUR_SMARTLINK_ID',
  },
  {
    id: 'editor-pick',
    category: 'Selección del Editor',
    tag: 'Elección del Editor',
    title: 'La Plataforma Verificada que Recomienda Nuestro Equipo',
    excerpt:
      'Nuestro algoritmo de curaduría selecciona automáticamente la opción con mejor desempeño verificado para tu región.',
    rating: 5.0,
    readTime: '3 min de lectura',
    accent: 'rose',
    baseUrl: 'https://www.crakrevenue.com/smartlink/REPLACE_WITH_YOUR_SMARTLINK_ID',
    networkSubIdParam: 'subid1',
  },
];

/** Artículo usado en el CTA principal del hero. */
export const PRIMARY_OFFER = OFFERS[0];

/**
 * Construye la URL final de salida añadiendo un sub-id de tracking por
 * posición del enlace (ej. "editorial_top_platform"), sin romper los
 * parámetros de afiliado ya presentes en baseUrl.
 */
export function buildTrackingUrl(offer: Offer, placement: string): string {
  try {
    const url = new URL(offer.baseUrl);
    const param = offer.networkSubIdParam ?? 'subid';
    url.searchParams.set(param, placement);
    return url.toString();
  } catch {
    return offer.baseUrl;
  }
}
