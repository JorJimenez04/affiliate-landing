import Link from 'next/link';
import { Article } from '@/lib/articles';

interface TrendingListProps {
  articles: Article[];
  title?: string;
}

export default function TrendingList({ articles, title = 'Lo que todo el mundo está leyendo 👀' }: TrendingListProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
        <span className="w-1.5 h-4 bg-emerald-600 rounded-full"></span>
        {title}
      </h3>
      <ol className="space-y-4">
        {articles.map((article, index) => (
          <li key={article.slug}>
            <Link href={`/blog/${article.slug}`} className="flex items-start gap-3 group">
              <span className="text-2xl font-extrabold text-slate-200 group-hover:text-emerald-200 transition-colors leading-none tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors leading-snug line-clamp-2">
                  {article.title}
                </p>
                <span className="text-[11px] text-slate-400">{article.readTime}</span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
