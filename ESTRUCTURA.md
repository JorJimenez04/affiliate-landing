# Estructura del proyecto — affiliate-landing

Sitio editorial de afiliación con formato de **blog/magazine**, marca **"GetGreenRoutine"** (getgreenroutine.com), sobre fitoterapia tradicional, hábitos diarios, recetas con plantas medicinales y deporte/recuperación activa. Publicado solo en español, pensado para adultos interesados en bienestar natural — no es un sitio médico. Construido con **Next.js 16 (App Router)** + **TypeScript** + **Tailwind CSS v4**. Un solo paquete, sin monorepo.

> Actualizado el 2026-10-08 tras la Fase 0 (saneamiento, infraestructura de SEO/legal/consentimiento/analítica, y traducción de los 7 artículos al español con slugs renombrados). Las carpetas `.next/`, `node_modules/` y `.git/` se omiten (son generadas/externas, no código fuente).

```
affiliate-landing/
├── app/                        # App Router de Next.js (rutas y UI raíz)
│   ├── layout.tsx              # Layout raíz: <html lang="es">, metadata SEO, JSON-LD Organization+WebSite,
│   │                           #   ConsentProvider + Analytics (GA4) + Footer global
│   ├── page.tsx                # Home ("/"): hero bento + feed de artículos + sidebar + anuncios
│   ├── globals.css             # Import de Tailwind v4 + theme de colores + keyframes
│   ├── sitemap.ts              # /sitemap.xml — home + artículos + páginas legales
│   ├── robots.ts               # /robots.txt
│   ├── icon.tsx                # Favicon dinámico (ImageResponse)
│   ├── apple-icon.tsx          # Apple touch icon dinámico
│   ├── opengraph-image.tsx     # OG image dinámica (ImageResponse)
│   ├── (legal)/
│   │   └── [page]/
│   │       └── page.tsx        # Páginas legales/institucionales (dynamicParams = false), contenido en lib/legal-pages.ts
│   └── blog/
│       └── [slug]/
│           └── page.tsx        # Artículo individual: generateMetadata, JSON-LD Article+BreadcrumbList, recomendaciones
│
├── components/                 # Componentes de UI del diseño tipo blog
│   ├── AdSlot.tsx                   # ⭐ Inyección aislada de scripts de networks de ads (Adsterra, etc.)
│   ├── AffiliateDisclosureBox.tsx  # Aviso de transparencia de enlaces de afiliado (variante compacta y completa)
│   ├── AuthorBioBox.tsx            # Tarjeta de bio del autor al final de cada artículo
│   ├── BannerAd.tsx                # Banner de anuncio: modo afiliado manual (CTA) o modo `network` (vía AdSlot) —
│   │                               #   ninguno de los dos modos carga script de red si siteConfig.adsEnabled es false
│   ├── NativeAdCard.tsx            # Tarjeta "Publicidad" en el feed: mismo modo dual y mismo gating que BannerAd
│   ├── ProductAffiliateCard.tsx    # Tarjeta de producto recomendado — rel="sponsored nofollow noopener" + evento affiliate_click
│   ├── StickyMobileCTA.tsx         # Barra flotante inferior en móvil (mismo rel/evento que ProductAffiliateCard)
│   ├── TrendingList.tsx            # Lista "Lo más leído" en la sidebar
│   ├── Footer.tsx                  # Footer global: enlaces a las 7 páginas legales + botón "Configurar cookies"
│   ├── consent/
│   │   ├── ConsentProvider.tsx     # Contexto de consentimiento (necessary/analytics/advertising), cookie 12 meses
│   │   └── ConsentBanner.tsx       # Banner "Rechazar todo" / "Aceptar todo" / "Configurar"
│   └── analytics/
│       └── Analytics.tsx           # Carga GA4 solo si hay ga4Id, con Consent Mode v2 (denegado por defecto)
│
├── lib/                        # Lógica compartida, sin JSX
│   ├── articles.ts              # ⭐ Fuente única de verdad: 7 artículos (fitoterapia, hábitos, recetas, deporte),
│   │                            #   todos en español (`lang: "es"`), slugs en español
│   ├── site.config.ts           # Configuración central: dominio, idioma, email de contacto, adsEnabled/ga4Id (desde env)
│   ├── legal-pages.ts           # Contenido de sobre-nosotros, cómo-trabajamos, contacto, aviso-importante,
│   │                            #   aviso-de-afiliados, política-de-privacidad, política-de-cookies
│   ├── consent.ts               # Tipos y helpers de la cookie de consentimiento
│   └── analytics.ts             # Eventos tipados: affiliate_click, newsletter_signup, need_selected, consent_updated
│
├── content/
│   └── _archive/en/            # Respaldo de los 7 artículos originales en inglés (pre-Fase 0).
│                                #   No se importa desde ningún lado — fuera de la build, sin rutas públicas.
│
├── public/
│   └── images/garlic-elixir.jpg # Única imagen propia; el resto de artículos usa Unsplash como placeholder
│
├── .env.example                # Plantilla de variables de entorno (ver README.md)
├── next.config.mjs             # Config de Next: strict mode, sin header "X-Powered-By", formatos avif/webp,
│                                #   images.remotePatterns para images.unsplash.com
├── postcss.config.mjs           # Registra el plugin @tailwindcss/postcss (Tailwind v4 vía PostCSS)
├── tsconfig.json                # TS strict, alias "@/*" → raíz del proyecto, JSX react-jsx
├── package.json                 # Scripts: dev / build / start / lint (ver nota 7). Deps: next ^16, react/react-dom ^19
├── package-lock.json             # Lockfile de npm
├── next-env.d.ts                # Tipos ambientales de Next (autogenerado, en .gitignore)
│
├── .gitignore                   # Ignora node_modules, .next, build, .env*, .vercel, next-env.d.ts, *.tsbuildinfo, etc.
├── .gitattributes                # Normaliza fin de línea (LF) para archivos de texto
└── README.md                     # Documentación de uso, estructura, variables de entorno y línea editorial
```

## Carpetas generadas / externas (no versionadas como código fuente)

```
.next/          # Build output de Next.js (cache, chunks, manifests) — se regenera con `npm run dev`/`build`
node_modules/   # Dependencias instaladas por npm
.git/           # Repositorio git local (propio de affiliate-landing/, no del directorio padre)
```

## Notas importantes

1. **`lib/offers.ts` y `lib/tracking.ts` se eliminaron en la Fase 0.** `offers.ts` quedaba huérfano (ningún componente lo importaba) y conservaba el copy de la marca anterior +18 (chat en vivo, citas, "comunidades alternativas" con smartlinks de CrakRevenue) — incompatible con la línea editorial actual. `tracking.ts` tampoco tenía ninguna llamada real; se sustituyó por `lib/analytics.ts`, con eventos tipados y gating de consentimiento.

2. **El sitio se publica solo en español.** `app/layout.tsx` usa `lang="es"`, y los 7 artículos de `lib/articles.ts` están traducidos con `lang: "es"`. El modelo de contenido ya tiene el campo `lang` preparado para i18n a futuro, pero no hay rutas `/en` ni `hreflang` todavía. Los 7 artículos originales en inglés se conservan como referencia en `content/_archive/en/` (fuera de la build).

3. **Los slugs de artículo están en español** (ej. `tes-para-dormir-mejor`, `manzanilla-digestion`) — se renombraron desde sus versiones en inglés porque el sitio no estaba indexado todavía, así que no hicieron falta redirecciones. Los enlaces internos (home, trending, sitemap) usan `article.slug` dinámicamente, así que no quedó ninguna referencia colgante a los slugs viejos.

4. **`lib/articles.ts` sigue siendo la fuente de verdad del contenido editorial**: cada `Article` incluye slug, `lang`, metadata, cuerpo por secciones (con tips opcionales) y un array `recommendations: ProductRecommendation[]` con sus propios `affiliateUrl`. El comentario al inicio del archivo fija la línea editorial (tono cercano, sin lenguaje clínico, lenguaje seguro de reclamos de salud) para cualquier artículo nuevo.

5. **Páginas legales e institucionales** (`/sobre-nosotros`, `/como-trabajamos`, `/contacto`, `/aviso-importante`, `/aviso-de-afiliados`, `/politica-de-privacidad`, `/politica-de-cookies`) se sirven desde una única ruta dinámica (`app/(legal)/[page]/page.tsx`, `dynamicParams = false`) con el contenido en `lib/legal-pages.ts`. Varios textos legales llevan `TODO(legal-review)` pendiente de revisión profesional, y el email de contacto es un placeholder (`[EMAIL_PENDIENTE]`).

6. **Consentimiento de cookies real**: `ConsentProvider` + `ConsentBanner` manejan tres categorías (necessary/analytics/advertising) con una cookie propia de 12 meses. Ningún script de GA4 ni de anuncios se carga antes de que la persona decida. `components/analytics/Analytics.tsx` implementa Google Consent Mode v2 (denegado por defecto, se actualiza a "granted" solo si se acepta analítica/publicidad).

7. **`npm run lint` no funciona.** Next.js 16 eliminó el subcomando `next lint` de su CLI (no aparece en `next --help`) y el repo no tiene ESLint instalado ni configurado. Por ahora se verifica con `npx tsc --noEmit` y `npm run build`; falta decidir e instalar una configuración de ESLint si se quiere recuperar ese chequeo.

8. **`public/` ya no está vacía**: contiene `images/garlic-elixir.jpg`, la única imagen propia del sitio. El resto de artículos sigue usando imágenes remotas de Unsplash (`images.unsplash.com`, ya en `images.remotePatterns`) como placeholder.

9. **`components/AdSlot.tsx` es el primitivo compartido para anuncios de red (Adsterra u otro).** Inyecta el `<script>` del network dentro de un `<div>` propio de cada instancia, aislado del resto del DOM. `BannerAd` y `NativeAdCard` lo consumen vía una prop `network?: AdNetworkSlot`, pero **ninguno de los dos carga ningún script si `siteConfig.adsEnabled` es `false`** (el valor por defecto) — las claves de Adsterra se leen desde `NEXT_PUBLIC_ADSTERRA_SCRIPT_SRC`/`NEXT_PUBLIC_ADSTERRA_CONTAINER_ID` (ver `.env.example`), no hardcodeadas.

10. **Enlaces de afiliado con `rel` correcto y tracking**: `ProductAffiliateCard` y `StickyMobileCTA` usan `rel="sponsored nofollow noopener"` y disparan el evento `affiliate_click` (vía `lib/analytics.ts`) al hacer clic.
