import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ARTICLES } from '@/lib/articles';
import { siteConfig } from '@/lib/site.config';
import ProductAffiliateCard from '@/components/ProductAffiliateCard';
import BannerAd from '@/components/BannerAd';
import AuthorBioBox from '@/components/AuthorBioBox';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ADSTERRA_SLOT = {
  scriptSrc: process.env.NEXT_PUBLIC_ADSTERRA_SCRIPT_SRC ?? '',
  containerId: process.env.NEXT_PUBLIC_ADSTERRA_CONTAINER_ID ?? 'ggr-adsterra-article',
  height: 250,
};

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: [article.image],
        author: { '@type': 'Person', name: article.author.name },
        // TODO(fase-1): article.publishedAt hoy es texto libre ("Octubre 2026"), no ISO 8601 —
        // añadir datePublished/dateModified reales cuando el frontmatter MDX los incluya.
        publisher: { '@type': 'Organization', name: siteConfig.name },
        mainEntityOfPage: `${siteConfig.domain}/blog/${article.slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.domain },
          { '@type': 'ListItem', position: 2, name: article.title, item: `${siteConfig.domain}/blog/${article.slug}` },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
            <span className="font-bold text-lg text-slate-900 tracking-tight">
              Get<span className="text-emerald-600">Green</span>Routine
            </span>
          </Link>
          <Link href="/" className="text-sm font-medium text-emerald-600 hover:underline">
            ← Volver al inicio
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
            <span>Por <strong className="text-slate-900">{article.author.name}</strong> ({article.author.role})</span>
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
                    <strong>🌿 Un pequeño tip:</strong> {section.tip}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Antes de Irte 💭</h3>
            <p className="text-slate-600 leading-relaxed">{article.content.conclusion}</p>
          </div>

          <div className="mt-10">
            <AuthorBioBox name={article.author.name} role={article.author.role} bio={article.author.bio} />
          </div>
        </article>

        <div className="mt-12">
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

        {article.recommendations && article.recommendations.length > 0 && (
          <section className="mt-16 pt-10 border-t-2 border-dashed border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
              Cosas que de Verdad le Diría a un Amigo que Comprara ✨
            </h3>
            <p className="text-slate-500 text-center text-sm mb-8">
              Sin tonterías de "los 10 mejores" — solo lo que de verdad se ganó un lugar en mi rutina.
            </p>

            <div className="grid gap-6">
              {article.recommendations.map((rec) => (
                <ProductAffiliateCard key={rec.id} product={rec} articleSlug={article.slug} placement="article_recommendations" />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}