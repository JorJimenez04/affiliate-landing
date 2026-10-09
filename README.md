# affiliate-landing — GetGreenRoutine

Blog editorial de afiliación en español sobre fitoterapia tradicional, hábitos diarios y bienestar natural, marca **GetGreenRoutine**. Pensado para adultos interesados en bienestar natural — no es un sitio médico ni de consejo profesional (ver [/aviso-importante](lib/legal-pages.ts)). Construido con Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Estructura

```
app/
  layout.tsx            Metadata SEO, JSON-LD Organization+WebSite, ConsentProvider/Analytics/Footer
  page.tsx               Home: hero + feed de artículos + sidebar + anuncios
  globals.css            Tailwind v4 + theme de colores
  sitemap.ts / robots.ts Sitemap y robots.txt generados desde ARTICLES + LEGAL_PAGES
  icon.tsx / apple-icon.tsx / opengraph-image.tsx   Favicon y OG image dinámicos (ImageResponse)
  blog/[slug]/
    page.tsx             Artículo individual: generateMetadata, JSON-LD Article+BreadcrumbList, recomendaciones
  (legal)/[page]/
    page.tsx             Páginas legales (dynamicParams = false), contenido en lib/legal-pages.ts
components/
  AdSlot.tsx                  Inyección aislada de scripts de networks de ads (Adsterra, etc.)
  AffiliateDisclosureBox.tsx  Aviso de transparencia de enlaces de afiliado
  AuthorBioBox.tsx            Bio del autor al final de cada artículo
  BannerAd.tsx / NativeAdCard.tsx  Anuncios — no cargan ningún script si siteConfig.adsEnabled es false
  ProductAffiliateCard.tsx    Tarjeta de producto recomendado (rel sponsored, evento affiliate_click)
  StickyMobileCTA.tsx         Barra flotante inferior en móvil (mismo rel/evento)
  TrendingList.tsx            Lista "Lo más leído" en la sidebar
  Footer.tsx                  Enlaces legales + botón "Configurar cookies"
  consent/ConsentProvider.tsx, ConsentBanner.tsx   Consentimiento de cookies (necessary/analytics/advertising)
  analytics/Analytics.tsx     Carga GA4 solo si hay ga4Id, con Consent Mode v2
lib/
  articles.ts     ⭐ Fuente única de verdad del contenido editorial (7 artículos, todos en español)
  site.config.ts  Configuración central (dominio, idioma, email de contacto, adsEnabled/ga4Id)
  legal-pages.ts  Contenido de las páginas legales/institucionales
  consent.ts      Cookie de consentimiento (12 meses) y helpers de lectura/escritura
  analytics.ts    Eventos tipados: affiliate_click, newsletter_signup, need_selected, consent_updated
content/_archive/en/   Respaldo de los artículos originales en inglés (no se usa en la build ni tiene rutas públicas)
```

## Editar artículos

Todo el contenido vive en [`lib/articles.ts`](lib/articles.ts). Cada `Article` incluye slug (en español), `lang`, metadata, autor, cuerpo por secciones (con `tip` opcional) y un array `recommendations` con sus propios enlaces de afiliado.

Línea editorial a mantener en todo artículo nuevo (ver comentario al inicio del archivo):

- Tono cercano y conversacional (de tú a tú, sin lenguaje clínico ni tecnicismos), párrafos cortos y fáciles de leer en móvil, enfoque práctico.
- Lenguaje seguro: nunca "cura/curar", "garantizado", "milagroso", "sin efectos secundarios" ni "sustituye/reemplaza el medicamento". En su lugar: "tradicionalmente se usa para…", "a mí me ayuda a…", "puede ayudar a…".

Los artículos originales (en inglés, antes de la Fase 0) quedan respaldados en `content/_archive/en/` por si se necesitan como referencia.

## Variables de entorno

Copia `.env.example` a `.env.local` y completa lo que necesites:

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Dominio canónico (metadata, sitemap, JSON-LD) |
| `NEXT_PUBLIC_GA4_ID` | Si está vacío, GA4 no se carga en absoluto |
| `NEXT_PUBLIC_ADS_ENABLED` | `"true"` para permitir que se carguen scripts de red de anuncios (por defecto `false`) |
| `NEXT_PUBLIC_ADSTERRA_SCRIPT_SRC` / `NEXT_PUBLIC_ADSTERRA_CONTAINER_ID` | Claves del slot de Adsterra, solo usadas si `NEXT_PUBLIC_ADS_ENABLED=true` |

El email de contacto en `lib/site.config.ts` es un placeholder (`[EMAIL_PENDIENTE]`) pendiente de confirmar.

## Imágenes

Los artículos usan imágenes remotas de Unsplash como placeholder (`images.unsplash.com` está en `images.remotePatterns`). Para usar assets propios, colócalos en `public/` y referencia la ruta (ej. `/images/mi-imagen.jpg`) en el campo `image` del artículo.

## Desarrollo local

```bash
npm install
npm run dev
```

> Nota: `npm run lint` no funciona en este repo — Next 16 eliminó el subcomando `next lint` de su CLI y no hay ESLint instalado todavía. Usa `npx tsc --noEmit` para verificar tipos mientras se configura.

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
