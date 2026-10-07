import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ARTICLES } from '@/lib/articles';
import ProductAffiliateCard from '@/components/ProductAffiliateCard';
import BannerAd from '@/components/BannerAd';
import AuthorBioBox from '@/components/AuthorBioBox';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
            <span className="font-bold text-lg text-slate-900 tracking-tight">VITALIS & WELLNESS</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-emerald-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <article>
          <div className="flex items-center gap-3 text-xs font-semibold text-emerald-700 mb-4">
            <span>{article.category}</span>
            <span>•</span>
            <span className="text-slate-400">{article.readTime}</span>
            <span>•</span>
            <span className="text-slate-400">{article.publishedAt}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pb-6 mb-8 border-b border-slate-200 text-sm text-slate-600">
            <span>By <strong className="text-slate-900">{article.author.name}</strong> ({article.author.role})</span>
          </div>

          <div className="mb-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img src={article.image} alt={article.title} className="w-full h-auto object-cover max-h-[400px]" />
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium">
            {article.content.introduction}
          </p>

          <div className="space-y-8">
            {article.content.sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">{section.heading}</h2>
                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.tip && (
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl my-4 text-sm text-emerald-900">
                    <strong>🌿 A little tip:</strong> {section.tip}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Before You Go 💭</h3>
            <p className="text-slate-600 leading-relaxed">{article.content.conclusion}</p>
          </div>

          <div className="mt-10">
            <AuthorBioBox name={article.author.name} role={article.author.role} bio={article.author.bio} />
          </div>
        </article>

        <div className="mt-12">
          <BannerAd
            title="A Few Things I Actually Use Every Day 🌿"
            description="No corporate 'top 10' roundup here — just the handful of tools that earned a permanent spot in my own routine, warts and all."
            ctaText="See What I Use"
            affiliateUrl="https://amazon.com?tag=your-affiliate-tag-20"
            badge="What I'm Loving Right Now"
          />
        </div>

        {article.recommendations && article.recommendations.length > 0 && (
          <section className="mt-16 pt-10 border-t-2 border-dashed border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
              Stuff I'd Actually Tell a Friend to Buy ✨
            </h3>
            <p className="text-slate-500 text-center text-sm mb-8">
              No "top 10 best of" nonsense — just what's genuinely earned a spot in my routine.
            </p>

            <div className="grid gap-6">
              {article.recommendations.map((rec) => (
                <ProductAffiliateCard key={rec.id} product={rec} />
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 px-6 mt-20 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto space-y-3">
          <p>© 2026 Vitalis & Wellness. Thanks for reading — everything here comes from genuine trial, error, and way too much tea. 🍵</p>
          <p className="max-w-2xl mx-auto text-slate-400">
            <strong>Just so you know:</strong> some links on this site are affiliate links, and I may earn a small commission if you buy through them, at no extra cost to you. I only share things I'd genuinely recommend to a friend.
          </p>
        </div>
      </footer>
    </div>
  );
}