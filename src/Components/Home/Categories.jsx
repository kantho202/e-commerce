"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shirt, Watch, Laptop, Home, Dumbbell, BookOpen, Gem, Camera } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const categories = [
  { label: 'Fashion', icon: Shirt, color: 'from-pink-400 to-rose-500', href: '/categories/fashion', count: '2.4k+' },
  { label: 'Watches', icon: Watch, color: 'from-amber-400 to-orange-500', href: '/categories/watches', count: '800+' },
  { label: 'Electronics', icon: Laptop, color: 'from-blue-400 to-indigo-500', href: '/categories/electronics', count: '3.1k+' },
  { label: 'Home & Living', icon: Home, color: 'from-emerald-400 to-teal-500', href: '/categories/home', count: '1.8k+' },
  { label: 'Sports', icon: Dumbbell, color: 'from-violet-400 to-purple-500', href: '/categories/sports', count: '1.2k+' },
  { label: 'Books', icon: BookOpen, color: 'from-cyan-400 to-sky-500', href: '/categories/books', count: '5k+' },
  { label: 'Jewelry', icon: Gem, color: 'from-fuchsia-400 to-pink-500', href: '/categories/jewelry', count: '600+' },
  { label: 'Cameras', icon: Camera, color: 'from-slate-400 to-gray-600', href: '/categories/cameras', count: '400+' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function Categories() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader
        badge="Browse by Category"
        title="Shop by"
        highlight="Category"
        subtitle="Find exactly what you're looking for across our curated collections."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
      >
        {categories.map(({ label, icon: Icon, color, href, count }) => (
          <motion.div key={label} variants={item}>
            <Link
              href={href}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-base-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 dark:hover:shadow-indigo-950 transition-all duration-300 bg-base-100"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={24} className="text-white" />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-base-content leading-tight">{label}</p>
                <p className="text-[11px] text-base-content/45 mt-0.5">{count} items</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
