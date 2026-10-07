# affiliate-landing

Landing page de afiliación 18+ construida con Next.js 14 (App Router) + TypeScript + Tailwind CSS.
Optimizada mobile-first para máxima velocidad y conversión.

## Estructura

```
app/
  layout.tsx       Metadata, viewport, fuente del sistema (sin descargas de fuentes)
  page.tsx         Página principal: hero, grid de ofertas, footer
  globals.css      Tailwind
components/
  LiveHeader.tsx   Indicador "EN VIVO" + contador animado
  OfferCard.tsx    Tarjeta de oferta del catálogo
  StickyCTA.tsx    Barra flotante inferior (anti-fuga de tráfico)
lib/
  offers.ts        ⭐ Fuente única de todas las ofertas y enlaces de afiliado
  tracking.ts       Disparo de eventos de click (GA4 / Meta Pixel, opcional)
```

## Editar ofertas y enlaces

Todo se controla desde [`lib/offers.ts`](lib/offers.ts). Cada oferta tiene:

- `baseUrl`: tu enlace de tracking (Stripchat/camsk5, CrakRevenue, etc.)
- `networkSubIdParam` (opcional): si quieres que el sub-id de posición se
  envíe usando el parámetro propio de la red (ej. `subid1` en CrakRevenue).
  Si lo dejas vacío, se añade un parámetro `subid` propio sin tocar los
  parámetros de afiliado que ya tenga la URL.

Cada botón añade automáticamente un sub-id distinto según su posición
(`mobile_grid_top`, `hero_main_cta`, `sticky_bar_bottom`, etc.) para que
puedas medir en tu panel de afiliado qué ubicación convierte mejor.

⚠️ La oferta `vip-smartlink` trae una URL de ejemplo
(`REPLACE_WITH_YOUR_SMARTLINK_ID`) — reemplázala por tu smartlink real de
CrakRevenue antes de publicar.

## Imágenes de previsualización

Las tarjetas usan iconos/emoji como placeholder en lugar de imágenes reales
(no se incluyen imágenes explícitas en el repo). Para usar tus propias
miniaturas, sustituye el bloque de icono en `components/OfferCard.tsx` por
`next/image` apuntando a tus assets en `public/`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy en Vercel

```bash
npm i -g vercel   # si no lo tienes
vercel            # sigue el flujo interactivo
```

O importa el repositorio directamente desde [vercel.com/new](https://vercel.com/new)
— Next.js se detecta automáticamente, no requiere configuración adicional.
