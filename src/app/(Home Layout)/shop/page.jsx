"use client"
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import ProductCard from '@/Components/ui/ProductCard';
import SkeletonCard from '@/Components/ui/SkeletonCard';
import { SlidersHorizontal, Grid3X3, List, Search } from 'lucide-react';

const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A–Z' },
];

export default function ShopPage() {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [view, setView] = useState('grid');

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['all-products'],
    queryFn: async () => {
      const res = await axiosSecure.get('/products');
      return Array.isArray(res.data) ? res.data : res.data.products ?? res.data.data ?? [];
    },
  });

  const filtered = products
    .filter((p) => {
      const name = (p.title || p.name || '').toLowerCase();
      return name.includes(search.toLowerCase());
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return (a.price ?? 0) - (b.price ?? 0);
      if (sort === 'price-desc') return (b.price ?? 0) - (a.price ?? 0);
      if (sort === 'name') return (a.title || a.name || '').localeCompare(b.title || b.name || '');
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <p className="text-xs text-indigo-500 font-semibold uppercase tracking-widest mb-1">All Products</p>
        <h1 className="text-4xl font-bold text-base-content">
          The <span className="gradient-text">Shop</span>
        </h1>
        <p className="text-base-content/60 mt-2">Browse our full collection of premium products.</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-base-300 bg-base-100 text-sm outline-none focus:border-indigo-400 transition-colors"
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-base-300 bg-base-100 text-sm outline-none focus:border-indigo-400"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <div className="flex items-center gap-1 border border-base-300 rounded-xl p-1">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg transition-colors ${view === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-base-200'}`}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg transition-colors ${view === 'list' ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-base-200'}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      <p className="text-sm text-base-content/50 mb-6">
        Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
      </p>

      <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
        {isLoading
          ? [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
          : filtered.map((p) => <ProductCard key={p._id} product={p} />)
        }
      </div>

      {!isLoading && filtered.length === 0 && (
        <div className="text-center py-24 text-base-content/40">
          <SlidersHorizontal size={40} className="mx-auto mb-3 opacity-40" />
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm mt-1">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
