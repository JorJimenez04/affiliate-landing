# affiliate-landing — GetGreenRoutine

Blog editorial de afiliación sobre fitoterapia tradicional, hábitos diarios y bienestar natural, marca **GetGreenRoutine**. Apto para todas las edades. Construido con Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Estructura

```
app/
  layout.tsx       Metadata SEO, viewport y layout raíz (<html>/<body>)
  page.tsx         Home: hero + feed de artículos + sidebar + anuncios
  globals.css       Tailwind v4 + theme de colores
  blog/[slug]/
    page.tsx        Página de artículo individual (contenido + recomendaciones de producto)
components/
  AdSlot.tsx                Inyección aislada de scripts de networks de ads (Adsterra, etc.)
  AffiliateDisclosureBox.tsx  Aviso de transparencia de enlaces de afiliado
  AuthorBioBox.tsx          Bio del autor al final de cada artículo
  BannerAd.tsx              Banner de anuncio (CTA manual o modo network)
  NativeAdCard.tsx          Tarjeta "Sponsored" en el feed
  ProductAffiliateCard.tsx  Tarjeta de producto recomendado
  StickyMobileCTA.tsx       Barra flotante inferior en móvil
  TrendingList.tsx          Lista "Lo más leído" en la sidebar
lib/
  articles.ts       ⭐ Fuente única de verdad del contenido editorial
  offers.ts          Catálogo de ofertas/afiliados auxiliares
  tracking.ts        Disparo de eventos de click (GA4 / Meta Pixel, opcional)
```

## Editar artículos

Todo el contenido vive en [`lib/articles.ts`](lib/articles.ts). Cada `Article` incluye slug, metadata, autor, cuerpo por secciones (con `tip` opcional) y un array `recommendations` con sus propios enlaces de afiliado.

Línea editorial a mantener en todo artículo nuevo (ver comentario al inicio del archivo): tono cercano y conversacional (de tú a tú, sin lenguaje clínico ni tecnicismos), párrafos cortos y fáciles de leer en móvil, y enfoque práctico en cómo ayuda cada hábito o planta en el día a día.

## Imágenes

Los artículos usan imágenes remotas de Unsplash como placeholder. Para usar assets propios, colócalos en `public/` y referencia la ruta (ej. `/images/mi-imagen.jpg`) en el campo `image` del artículo.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build y despliegue

```bash
npm run build
npm run start
```

### Vercel

```bash
npm i -g vercel   # si no lo tienes
vercel            # sigue el flujo interactivo
```

O importa el repositorio directamente desde [vercel.com/new](https://vercel.com/new) — Next.js se detecta automáticamente, sin configuración adicional.
