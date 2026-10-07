# Estructura del proyecto — affiliate-landing

Landing page de afiliación (+18) construida con **Next.js 16 (App Router)** + **TypeScript** + **Tailwind CSS v4**. Un solo paquete, sin monorepo.

> Generado a partir del estado real del código el 2026-10-05. Las carpetas `.next/`, `node_modules/` y `.git/` se omiten (son generadas/externas, no código fuente).

```
affiliate-landing/
├── app/                        # App Router de Next.js (rutas y UI raíz)
│   ├── layout.tsx              # Layout raíz: <html>/<body>, metadata SEO y viewport
│   ├── page.tsx                # Única página ("/"): hero + grid de ofertas + footer legal
│   └── globals.css             # Import de Tailwind v4 + theme de colores neón + keyframes
│
├── components/                 # ⚠️ Carpeta VACÍA (ver nota 1 más abajo)
│
├── lib/                        # Lógica compartida, sin JSX
│   ├── offers.ts                # ⭐ Fuente única de verdad: catálogo de ofertas y builder de URLs de tracking
│   └── tracking.ts              # Disparo de evento "offer_click" a GA4 (dataLayer) / Meta Pixel (fbq), no bloqueante
│
├── public/                     # ⚠️ Carpeta VACÍA — sin imágenes/favicon todavía
│
├── next.config.mjs             # Config de Next: strict mode, sin header "X-Powered-By", formatos avif/webp
├── postcss.config.mjs          # Registra el plugin @tailwindcss/postcss (Tailwind v4 vía PostCSS)
├── tsconfig.json               # TS strict, alias "@/*" → raíz del proyecto, JSX react-jsx
├── package.json                # Scripts: dev / build / start / lint. Deps: next, react, react-dom
├── package-lock.json           # Lockfile de npm
├── next-env.d.ts               # Tipos ambientales de Next (autogenerado, normalmente en .gitignore)
│
├── .gitignore                  # Ignora node_modules, .next, build, .env*, .vercel, next-env.d.ts, etc.
├── .gitattributes              # Normaliza fin de línea (LF) para archivos de texto
├── README.md                   # Documentación de uso (ver nota 2: desactualizada)
├── CLAUDE.md                   # Solo contiene "@AGENTS.md" → reexporta las reglas de AGENTS.md
└── AGENTS.md                   # Reglas auto-generadas por `next dev` sobre breaking changes de esta versión de Next.js
```

## Carpetas generadas / externas (no versionadas como código fuente)

```
.next/          # Build output de Next.js (cache, chunks, manifests) — se regenera con `npm run dev`/`build`
node_modules/   # Dependencias instaladas por npm
.git/           # Repositorio git local
```

## Notas importantes

1. **`components/` está vacía pero el `README.md` la documenta como si existiera** (`LiveHeader.tsx`, `OfferCard.tsx`, `StickyCTA.tsx`). En el código actual, todo ese markup vive inline dentro de [app/page.tsx](app/page.tsx) (header, tarjetas de oferta y footer en un solo archivo). O bien el README quedó desactualizado, o la refactorización a componentes separados todavía no se hizo — vale la pena alinear ambos antes de seguir iterando.

2. **El `README.md` dice "Next.js 14"**, pero `package.json` fija `"next": "^16.3.8"` — también desactualizado.

3. **`lib/offers.ts` es la única fuente de verdad** para contenido editorial y enlaces de afiliado. Cada `Offer` tiene una `baseUrl` (smartlink de CrakRevenue u otra red) y `buildTrackingUrl()` añade un sub-id de tracking por posición del enlace sin romper los parámetros ya existentes en la URL.
   - ⚠️ Las 4 ofertas actuales usan la URL placeholder `REPLACE_WITH_YOUR_SMARTLINK_ID` — hay que sustituirla por el smartlink real antes de publicar.

4. **`public/` está vacía** — las tarjetas usan emojis/texto como placeholder visual, no hay imágenes todavía (ver sección "Imágenes de previsualización" del README).

5. **`AGENTS.md`** no es documentación del proyecto en sí: es un bloque que el propio `next dev` regenera automáticamente con reglas sobre cambios de API en esta versión de Next.js. `CLAUDE.md` simplemente lo reutiliza con `@AGENTS.md`.

6. No hay carpeta `tests/` ni configuración de testing (ej. Jest/Vitest/Playwright) en el proyecto todavía.
