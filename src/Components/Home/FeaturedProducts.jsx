"use client"
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import ProductCard from '../ui/ProductCard';
import SkeletonCard from '../ui/SkeletonCard';
import SectionHeader from '../ui/SectionHeader';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function FeaturedProducts({ title = "Featured", highlight = "Products", badge = "Handpicked", limit = 8 }) {
  const axiosSecure = useAxiosSecure();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['featured-products', limit],
    queryFn: async () => {
      const res = await axiosSecure.get('/products');
      const all = Array.isArray(res.data) ? res.data : res.data.products ?? res.data.data ?? [];
      return all.slice(0, limit);
    },
  });

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader badge={badge} title={title} highlight={highlight} />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {isLoading
          ? [...Array(limit)].map((_, i) => <SkeletonCard key={i} />)
          : products.map((product) => (
              <motion.div key={product._id} variants={item}>
                <ProductCard product={product} />
              </motion.div>
            ))
        }
      </motion.div>

      <div className="text-center mt-10">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-sm shadow-lg hover:shadow-indigo-300/40 hover:scale-105 transition-all duration-200"
        >
          View All Products <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
