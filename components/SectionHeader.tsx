type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}

