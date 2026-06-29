"use client"
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const brands = [
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
  { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg' },
  { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg' },
];

export default function Brands() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <SectionHeader
        badge="Our Partners"
        title="Trusted"
        highlight="Brands"
        subtitle="Shop authentic products from the world's most iconic brands."
      />
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
        {brands.map(({ name, logo }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="w-28 h-16 flex items-center justify-center px-4 py-3 rounded-2xl bg-base-200 hover:bg-base-300 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          >
            <img src={logo} alt={name} className="max-h-8 max-w-full object-contain" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
