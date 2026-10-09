import Link from 'next/link';
import { ARTICLES } from '@/lib/articles';
import NativeAdCard from '@/components/NativeAdCard';
import TrendingList from '@/components/TrendingList';
import AffiliateDisclosureBox from '@/components/AffiliateDisclosureBox';
import BannerAd from '@/components/BannerAd';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const CATEGORY_TILES = [
  { label: 'Remedios Herbales', icon: '🌿' },
  { label: 'Hábitos Diarios', icon: '☀️' },
  { label: 'Recetas con Plantas', icon: '🍲' },
  { label: 'Recuperación Activa', icon: '🏃' },
];

const ADSTERRA_SLOT = {
  scriptSrc: process.env.NEXT_PUBLIC_ADSTERRA_SCRIPT_SRC ?? '',
  containerId: process.env.NEXT_PUBLIC_ADSTERRA_CONTAINER_ID ?? 'ggr-adsterra-home',
  height: 250,
};

export default function Home() {
  const mainArticle = ARTICLES[0];
  const secondaryArticles = ARTICLES.slice(1);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16 md:pb-0">
      {/* Header / Nav */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
            <span className="font-bold text-lg text-slate-900 tracking-tight">
              Get<span className="text-emerald-600">Green</span>Routine
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Inicio</Link>
            <Link href="#articles" className="hover:text-emerald-600 transition-colors">Remedios que Amamos</Link>
            <Link href="/sobre-nosotros" className="hover:text-emerald-600 transition-colors">Nuestra Promesa</Link>
          </nav>
          <a
            href="https://amazon.com?tag=your-affiliate-tag-20"
            target="_blank"
            rel="sponsored nofollow noopener"
            className="hidden md:inline-flex bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            Mis Favoritos ✨
          </a>
        </div>
        {/* Category ticker strip */}
        <div className="border-t border-slate-100 bg-slate-50/80">
          <div className="max-w-7xl mx-auto px-5 md:px-6 py-2 flex items-center gap-5 overflow-x-auto text-xs font-medium text-slate-500 whitespace-nowrap">
            {CATEGORY_TILES.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors cursor-pointer">
                <span>{c.icon}</span>{c.label}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 md:px-6 py-8">

        {/* Bento Hero: main story + partner spotlight + category nav */}
        {mainArticle && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 mb-10">
            <Link
              href={`/blog/${mainArticle.slug}`}
              className="lg:col-span-8 relative rounded-3xl overflow-hidden group block h-[360px] md:h-[440px] lg:h-[520px] shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={mainArticle.image}
                alt={mainArticle.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-9 lg:p-10">
                <div className="flex items-center gap-2 text-xs font-semibold mb-3">
                  <span className="bg-emerald-500 text-slate-950 px-2.5 py-1 rounded-full">{mainArticle.category}</span>
                  <span className="text-slate-300">{mainArticle.readTime}</span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight max-w-2xl group-hover:text-emerald-300 transition-colors">
                  {mainArticle.title}
                </h1>
                <p className="hidden md:block text-slate-200 text-sm leading-relaxed mb-5 max-w-xl line-clamp-2">
                  {mainArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-medium">Por {mainArticle.author.name}</span>
                  <span className="text-emerald-300 font-semibold text-sm flex items-center gap-1">
                    Sigue Leyendo →
                  </span>
                </div>
              </div>
            </Link>

            <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-5">
              {/* Partner spotlight */}
              <div className="flex-[1.2] bg-gradient-to-br from-emerald-900 to-slate-900 rounded-2xl p-6 text-white shadow-md border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full font-semibold inline-block mb-3">
                    Algunos de Mis Favoritos
                  </span>
                  <h3 className="text-base md:text-lg font-bold mb-2 text-white">Esenciales de Vitalidad Diaria 🌿</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Nada rebuscado — solo el puñado de básicos orgánicos que de verdad sigo reponiendo en casa.
                  </p>
                </div>
                <a
                  href="https://amazon.com?tag=your-affiliate-tag-20"
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="mt-4 block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  Échale un Vistazo →
                </a>
              </div>

              {/* Quick category bento */}
              <div className="flex-1 grid grid-cols-2 gap-3">
                {CATEGORY_TILES.map((c) => (
                  <Link
                    key={c.label}
                    href="#articles"
                    className="bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-1.5 py-3 hover:border-emerald-300 hover:shadow-sm transition-all"
                  >
                    <span className="text-xl">{c.icon}</span>
                    <span className="text-[11px] font-semibold text-slate-700 text-center leading-tight">{c.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main feed + sticky sidebar */}
        <div id="articles" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Main column */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-xl font-bold text-slate-900 border-b pb-3 flex items-center justify-between">
              <span>Más del Diario 📖</span>
              <span className="text-xs font-normal text-slate-400">Prepárate una taza de té ☕</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {secondaryArticles.map((article) => (
                <div
                  key={article.slug}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <img src={article.image} alt={article.title} className="w-full h-44 object-cover" />
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-2">
                        <span>{article.category}</span>
                        <span>•</span>
                        <span className="text-slate-400">{article.readTime}</span>
                      </div>
                      <Link href={`/blog/${article.slug}`}>
                        <h3 className="text-base font-bold text-slate-900 mb-2 hover:text-emerald-600 transition-colors cursor-pointer line-clamp-2">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-slate-100 mt-auto">
                    <span className="text-[11px] text-slate-500 font-medium">{article.author.name}</span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-emerald-600 font-medium text-xs hover:underline flex items-center gap-1"
                    >
                      Leer →
                    </Link>
                  </div>
                </div>
              ))}

              {/* Tarjeta patrocinada nativa — imita el layout de las tarjetas de artículo, claramente etiquetada */}
              <NativeAdCard
                sponsor="Botanica Labs"
                title="El Ritual de Sueño que Veo en Todas Partes Esta Temporada"
                excerpt="Una rutina nocturna acogedora con adaptógenos y textiles frescos. Tengo curiosidad por probarla yo misma."
                image="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?auto=format&fit=crop&q=80&w=800"
                ctaText="Échale un Vistazo"
                affiliateUrl="https://amazon.com?tag=your-affiliate-tag-20"
              />
            </div>

            <BannerAd
              title="Algunas Cosas que Uso Todos los Días 🌿"
              description="Nada de un ranking corporativo de 'top 10' — solo el puñado de cosas que se ganaron un lugar permanente en mi rutina, con sus defectos y todo."
              ctaText="Ver Qué Uso"
              affiliateUrl="https://amazon.com?tag=your-affiliate-tag-20"
              badge="Lo que Más me Gusta Ahora"
            />

            {/* Slot de Adsterra (u otro network) — las claves reales se configuran por variables de entorno */}
            <BannerAd network={ADSTERRA_SLOT} />
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">

              {/* Newsletter */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-emerald-200 uppercase tracking-wider inline-block mb-3">
                  Mantengámonos en Contacto
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Cartas Mías, de Vez en Cuando ✨</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  Sin spam, sin relleno — solo los rituales y pequeños hallazgos que de verdad estoy probando, directo a tu correo.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                    readOnly
                  />
                  <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-2.5 rounded-xl transition-colors shadow-sm">
                    Cuéntame Dentro
                  </button>
                </div>
              </div>

              {/* Lo más leído — mantiene a la gente navegando dentro del sitio */}
              <TrendingList articles={ARTICLES} />

              {/* Segundo anuncio de socio, con copy distinto al del hero */}
              <div className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-2xl p-6 text-white shadow-md border border-emerald-500/30">
                <span className="text-[10px] uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full font-semibold inline-block mb-3">
                  Lo que Estoy Usando
                </span>
                <h3 className="text-base font-bold mb-2 text-white">Monitor de Sueño de Precisión</h3>
                <p className="text-slate-300 text-xs mb-4 leading-relaxed">
                  Era escéptica con los monitores de sueño hasta que vi mis propios datos. Este es el que realmente se quedó conmigo.
                </p>
                <a
                  href="https://amazon.com?tag=your-affiliate-tag-20"
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  Échale un Vistazo →
                </a>
              </div>

              {/* Transparent affiliate disclosure, placed right where purchase intent is highest */}
              <AffiliateDisclosureBox compact />

            </div>
          </aside>

        </div>
      </main>

      {/* Barra fija de conversión en móvil */}
      <StickyMobileCTA
        text="Algunos favoritos de bienestar que juro que funcionan 🌿"
        ctaText="Échale un Vistazo"
        affiliateUrl="https://amazon.com?tag=your-affiliate-tag-20"
      />
    </div>
  );
}
