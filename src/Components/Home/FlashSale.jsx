"use client"
import { useState, useEffect } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../ui/ProductCard';
import SkeletonCard from '../ui/SkeletonCard';

function useCountdown(targetSeconds) {
  const [time, setTime] = useState(targetSeconds);
  useEffect(() => {
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(time / 3600)).padStart(2, '0');
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const s = String(time % 60).padStart(2, '0');
  return { h, m, s };
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
        <span className="text-2xl font-bold text-white tabular-nums">{value}</span>
      </div>
      <span className="text-[10px] text-white/60 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function FlashSale() {
  const { h, m, s } = useCountdown(7 * 3600 + 23 * 60 + 45);
  const axiosSecure = useAxiosSecure();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['flash-sale'],
    queryFn: async () => {
      const res = await axiosSecure.get('/products');
      const all = Array.isArray(res.data) ? res.data : res.data.products ?? res.data.data ?? [];
      return all.slice(0, 4).map((p) => ({ ...p, isSale: true, originalPrice: p.price * 1.4 }));
    },
  });

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 p-8 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={20} className="text-yellow-300" fill="currentColor" />
              <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">Flash Sale</span>
            </div>
            <h2 className="text-3xl font-bold text-white">Today&apos;s Deals</h2>
            <p className="text-white/70 text-sm mt-1">Hurry up — offer ends soon!</p>
          </div>
          <div className="flex items-center gap-3">
            <TimeUnit value={h} label="Hours" />
            <span className="text-white/60 text-2xl font-light mb-4">:</span>
            <TimeUnit value={m} label="Mins" />
            <span className="text-white/60 text-2xl font-light mb-4">:</span>
            <TimeUnit value={s} label="Secs" />
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
            : products.map((p) => <ProductCard key={p._id} product={p} />)
          }
        </div>

        <div className="text-center mt-8">
          <Link
            href="/offers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-base-300 text-base-content hover:border-indigo-400 hover:text-indigo-600 font-medium text-sm transition-all duration-200"
          >
            View All Offers <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
