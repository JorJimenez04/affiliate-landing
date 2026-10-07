import Link from 'next/link';
import { ARTICLES } from '@/lib/articles';
import NativeAdCard from '@/components/NativeAdCard';
import TrendingList from '@/components/TrendingList';
import AffiliateDisclosureBox from '@/components/AffiliateDisclosureBox';
import BannerAd from '@/components/BannerAd';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const CATEGORY_TILES = [
  { label: 'Herbal Remedies', icon: '🌿' },
  { label: 'Daily Habits', icon: '☀️' },
  { label: 'Plant-Based Recipes', icon: '🍲' },
  { label: 'Active Recovery', icon: '🏃' },
];

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
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <Link href="#articles" className="hover:text-emerald-600 transition-colors">Remedies We Love</Link>
            <Link href="#about" className="hover:text-emerald-600 transition-colors">Our Promise</Link>
          </nav>
          <a
            href="https://amazon.com?tag=your-affiliate-tag-20"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            Shop My Favorites ✨
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
                  <span className="text-xs text-slate-300 font-medium">By {mainArticle.author.name}</span>
                  <span className="text-emerald-300 font-semibold text-sm flex items-center gap-1">
                    Keep Reading →
                  </span>
                </div>
              </div>
            </Link>

            <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-5">
              {/* Partner spotlight */}
              <div className="flex-[1.2] bg-gradient-to-br from-emerald-900 to-slate-900 rounded-2xl p-6 text-white shadow-md border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full font-semibold inline-block mb-3">
                    A Few of My Favorites
                  </span>
                  <h3 className="text-base md:text-lg font-bold mb-2 text-white">Daily Vitality Essentials 🌿</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Nothing fancy — just the handful of organic staples I actually keep restocking at home.
                  </p>
                </div>
                <a
                  href="https://amazon.com?tag=your-affiliate-tag-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  Take a Peek →
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
              <span>More From the Journal 📖</span>
              <span className="text-xs font-normal text-slate-400">Grab a cup of tea ☕</span>
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
                      Read →
                    </Link>
                  </div>
                </div>
              ))}

              {/* Native in-feed sponsored card — mimics article card layout, clearly labeled */}
              <NativeAdCard
                sponsor="Botanica Labs"
                title="The Sleep Ritual I Keep Seeing Everywhere This Fall"
                excerpt="A cozy, dermatologist-reviewed evening routine with adaptogens and cooling textiles. I'm curious enough to try it myself."
                image="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?auto=format&fit=crop&q=80&w=800"
                ctaText="Take a Peek"
                affiliateUrl="https://amazon.com?tag=your-affiliate-tag-20"
              />
            </div>

            <BannerAd
              title="A Few Things I Actually Use Every Day 🌿"
              description="No corporate 'top 10' roundup here — just the handful of tools that earned a permanent spot in my own routine, warts and all."
              ctaText="See What I Use"
              affiliateUrl="https://amazon.com?tag=your-affiliate-tag-20"
              badge="What I'm Loving Right Now"
            />

            {/* Adsterra (or similar network) slot — replace scriptSrc/containerId with your real invoke keys */}
            <BannerAd
              network={{
                scriptSrc: '//REPLACE_WITH_YOUR_ADSTERRA_INVOKE_URL/invoke.js',
                containerId: 'container-replace-with-your-adsterra-key',
                height: 250,
              }}
            />
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">

              {/* Newsletter */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-emerald-200 uppercase tracking-wider inline-block mb-3">
                  Let's Stay in Touch
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Letters From Me, Occasionally ✨</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  No spam, no fluff — just the rituals and little finds I'm actually trying myself, straight to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                    readOnly
                  />
                  <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-2.5 rounded-xl transition-colors shadow-sm">
                    Count Me In
                  </button>
                </div>
              </div>

              {/* Trending / most read — keeps readers on-site */}
              <TrendingList articles={ARTICLES} />

              {/* Secondary partner ad, distinct copy from hero spotlight */}
              <div className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-2xl p-6 text-white shadow-md border border-emerald-500/30">
                <span className="text-[10px] uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full font-semibold inline-block mb-3">
                  What I'm Using
                </span>
                <h3 className="text-base font-bold mb-2 text-white">Precision Sleep Tracker</h3>
                <p className="text-slate-300 text-xs mb-4 leading-relaxed">
                  I was skeptical about sleep trackers until I saw my own data. This is the one that actually stuck.
                </p>
                <a
                  href="https://amazon.com?tag=your-affiliate-tag-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  Check It Out →
                </a>
              </div>

              {/* Transparent affiliate disclosure, placed right where purchase intent is highest */}
              <AffiliateDisclosureBox compact />

            </div>
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-6 mt-20 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto space-y-3">
          <p>© 2026 GetGreenRoutine. Thanks for reading — everything here comes from genuine trial, error, and way too much tea. 🍵</p>
          <p className="max-w-2xl mx-auto text-slate-400">
            <strong>Just so you know:</strong> some links on this site are affiliate links, and I may earn a small commission if you buy through them, at no extra cost to you. I only share things I'd genuinely recommend to a friend.
          </p>
        </div>
      </footer>

      {/* Mobile sticky conversion bar */}
      <StickyMobileCTA
        text="A few wellness picks I swear by 🌿"
        ctaText="Take a Look"
        affiliateUrl="https://amazon.com?tag=your-affiliate-tag-20"
      />
    </div>
  );
}
