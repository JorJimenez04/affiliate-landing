import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LEGAL_PAGES, getLegalPage } from '@/lib/legal-pages';

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ page: string }>;
}

export async function generateStaticParams() {
  return LEGAL_PAGES.map((page) => ({ page: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params;
  const legal = getLegalPage(page);
  if (!legal) return {};
  return {
    title: legal.title,
    description: legal.description,
  };
}

export default async function LegalPagePage({ params }: PageProps) {
  const { page } = await params;
  const legal = getLegalPage(page);

  if (!legal) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
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
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">{legal.title}</h1>
        <p className="text-sm text-slate-400 mb-10">Actualizado el {legal.updatedAt}</p>

        <div className="space-y-8">
          {legal.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              {section.heading && <h2 className="text-lg font-bold text-slate-900">{section.heading}</h2>}
              {section.paragraphs.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
