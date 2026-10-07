interface AuthorBioBoxProps {
  name: string;
  role: string;
  bio: string;
}

export default function AuthorBioBox({ name, role, bio }: AuthorBioBoxProps) {
  const initial = name.charAt(0);

  return (
    <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 flex gap-4 items-start">
      <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">
        {initial}
      </div>
      <div>
        <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide mb-1">Written with care by</p>
        <h4 className="text-base font-bold text-slate-900 mb-1">{name} <span className="text-slate-400 font-normal text-sm">· {role}</span></h4>
        <p className="text-sm text-slate-600 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
