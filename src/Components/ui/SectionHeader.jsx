export default function SectionHeader({ badge, title, highlight, subtitle, centered = true }) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-3 border border-indigo-100 dark:border-indigo-900">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-base-content leading-tight">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base-content/60 max-w-xl mx-auto text-base">{subtitle}</p>
      )}
    </div>
  );
}
