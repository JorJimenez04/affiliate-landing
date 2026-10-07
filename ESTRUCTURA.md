# Estructura del proyecto — affiliate-landing

Sitio editorial de afiliación con formato de **blog/magazine**, marca **"GetGreenRoutine"** (getgreenroutine.com), sobre fitoterapia tradicional, hábitos diarios, recetas con plantas medicinales y deporte/recuperación activa. Apto para todas las edades (+10). Construido con **Next.js 16 (App Router)** + **TypeScript** + **Tailwind CSS v4**. Un solo paquete, sin monorepo.

> Generado a partir del estado real del código el 2026-10-06 (tras eliminar el contenido y las restricciones +18 del catálogo de ofertas antiguo, rebrandear a "GetGreenRoutine" y añadir soporte de anuncios de red). Las carpetas `.next/`, `node_modules/` y `.git/` se omiten (son generadas/externas, no código fuente).

```
affiliate-landing/
├── app/                        # App Router de Next.js (rutas y UI raíz)
│   ├── layout.tsx              # Layout raíz: <html>/<body>, metadata SEO y viewport
│   ├── page.tsx                # Home ("/"): hero bento + feed de artículos + sidebar + anuncios
│   ├── globals.css             # Import de Tailwind v4 + theme de colores + keyframes
│   └── blog/
│       └── [slug]/
│           └── page.tsx        # Página de artículo individual (contenido + recomendaciones de producto)
│
├── components/                 # Componentes de UI del diseño tipo blog
│   ├── AdSlot.tsx                   # ⭐ Inyección aislada de scripts de networks de ads (Adsterra, etc.) — ver nota 8
│   ├── AffiliateDisclosureBox.tsx  # Aviso de transparencia de enlaces de afiliado (variante compacta y completa)
│   ├── AuthorBioBox.tsx            # Tarjeta de bio del autor al final de cada artículo
│   ├── BannerAd.tsx                # Banner de anuncio: modo afiliado manual (CTA) o modo `network` (vía AdSlot)
│   ├── NativeAdCard.tsx            # Tarjeta "Sponsored" en el feed: mismo modo dual que BannerAd
│   ├── ProductAffiliateCard.tsx    # Tarjeta de producto recomendado (precio, rating, link de afiliado)
│   ├── StickyMobileCTA.tsx         # Barra flotante inferior en móvil (anti-fuga de tráfico)
│   └── TrendingList.tsx            # Lista "Lo más leído" en la sidebar
│
├── lib/                        # Lógica compartida, sin JSX
│   ├── articles.ts              # ⭐ Fuente única de verdad: catálogo de 5 artículos (fitoterapia, hábitos, recetas, deporte)
│   └── tracking.ts              # Disparo de evento "offer_click" a GA4/Meta Pixel — ver nota 2 (actualmente sin uso)
│
├── public/                     # ⚠️ Carpeta VACÍA — sin imágenes/favicon todavía
│
├── next.config.mjs             # Config de Next: strict mode, sin header "X-Powered-By", formatos avif/webp
├── postcss.config.mjs          # Registra el plugin @tailwindcss/postcss (Tailwind v4 vía PostCSS)
├── tsconfig.json               # TS strict, alias "@/*" → raíz del proyecto, JSX react-jsx
├── tsconfig.tsbuildinfo        # Caché incremental de TS (generado, normalmente debería ir en .gitignore)
├── package.json                # Scripts: dev / build / start / lint. Deps: next ^16, react/react-dom ^19
├── package-lock.json           # Lockfile de npm
├── next-env.d.ts               # Tipos ambientales de Next (autogenerado, normalmente en .gitignore)
│
├── .gitignore                  # Ignora node_modules, .next, build, .env*, .vercel, next-env.d.ts, etc.
├── .gitattributes              # Normaliza fin de línea (LF) para archivos de texto
└── README.md                   # Documentación de uso, ya realineada con el diseño actual — ver nota 3
```

## Carpetas generadas / externas (no versionadas como código fuente)

```
.next/          # Build output de Next.js (cache, chunks, manifests) — se regenera con `npm run dev`/`build`
node_modules/   # Dependencias instaladas por npm
.git/           # Repositorio git local (propio de affiliate-landing/, no del directorio padre)
```

## Notas importantes

1. **Se eliminó todo el contenido y las restricciones +18.** `lib/offers.ts` (catálogo de smartlinks de CrakRevenue sobre "chat en vivo", citas y "comunidades alternativas", con copy orientado a adultos) se borró por completo — estaba huérfano, ningún componente lo importaba. La metadata de `app/layout.tsx` ya no menciona "mayores de 18 años" ni el eufemismo "entretenimiento interactivo"; ahora describe el sitio real (bienestar/estilo de vida, apto para todas las edades). El sitio actual (artículos de `lib/articles.ts` + componentes de `components/`) nunca tuvo contenido explícito en su UI — el material +18 vivía solo en el catálogo de ofertas ya eliminado.

2. **`lib/tracking.ts` queda sin uso tras eliminar `offers.ts`.** Es un helper genérico de analítica (`trackOfferClick` → GA4/Meta Pixel) sin contenido relacionado a +18, así que se conservó por si se quiere reconectar a los CTAs actuales. Ningún botón de `app/page.tsx` ni `app/blog/[slug]/page.tsx` lo llama todavía.

3. **`README.md` tenía un conflicto de merge sin resolver** (`<<<<<<< HEAD` ... `>>>>>>>`) cuyo bloque "HEAD" describía el diseño antiguo de ofertas +18. Se resolvió reescribiendo el README para que documente el diseño de blog actual, sin esa referencia. Nota: en `.git/` todavía existen `MERGE_HEAD`/`AUTO_MERGE` — el merge en sí no se ha cerrado a nivel de git (faltaría `git add` + continuar/commitear el merge si se quiere dejar formalmente resuelto).

4. **`lib/articles.ts` es la fuente de verdad del contenido editorial**: cada `Article` incluye slug, metadata, cuerpo por secciones (con tips opcionales) y un array `recommendations: ProductRecommendation[]` con sus propios `affiliateUrl` — los links de afiliado de producto viven *dentro* de cada artículo.

5. **`public/` sigue vacía** — los artículos usan imágenes remotas de Unsplash (`images.unsplash.com/...`) como placeholder, no hay assets propios todavía.

6. **`CLAUDE.md` y `AGENTS.md` ya no existen** en la raíz del proyecto (antes `CLAUDE.md` solo reexportaba `AGENTS.md`, que `next dev` regeneraba automáticamente). Si se necesitan de nuevo, bastará con correr `next dev` para que Next regenere `AGENTS.md`.

7. No hay carpeta `tests/` ni configuración de testing (ej. Jest/Vitest/Playwright) en el proyecto todavía.

8. **`components/AdSlot.tsx` es el primitivo compartido para anuncios de red (Adsterra u otro).** Inyecta el `<script>` del network dentro de un `<div>` propio de cada instancia (vía `useEffect` + `ref`), con guard anti-doble-inyección y cleanup al desmontar — aislado del resto del DOM y seguro en navegación client-side del App Router. `BannerAd` y `NativeAdCard` lo consumen a través de una prop `network?: AdNetworkSlot`: si se pasa, renderizan el slot de red dentro del mismo "chrome" visual (badge, bordes, spacing) que ya tenían; si no, se comportan igual que antes (CTA de afiliado manual). Hay un ejemplo de uso con claves placeholder (`REPLACE_WITH_YOUR_ADSTERRA_INVOKE_URL`) en `app/page.tsx` y en `app/blog/[slug]/page.tsx` — hay que sustituirlas por las claves reales de Adsterra antes de publicar. Verificado con Playwright headless: el slot no rompe el layout ni el responsive mobile aunque el script falle en cargar.
