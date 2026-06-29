export default function SkeletonCard() {
  return (
    <div className="bg-base-100 rounded-2xl overflow-hidden border border-base-200">
      <div className="skeleton-box aspect-square w-full" />
      <div className="p-4 space-y-3">
        <div className="skeleton-box h-3 w-20 rounded" />
        <div className="skeleton-box h-4 w-full rounded" />
        <div className="skeleton-box h-4 w-3/4 rounded" />
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="skeleton-box h-3 w-3 rounded" />
          ))}
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="skeleton-box h-6 w-16 rounded" />
          <div className="skeleton-box h-8 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
