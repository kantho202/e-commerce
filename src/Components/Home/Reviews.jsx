"use client"
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Verified Buyer',
    avatar: 'https://i.pravatar.cc/80?img=1',
    rating: 5,
    text: 'Absolutely incredible quality. The packaging was premium, delivery was fast, and the product exceeded every expectation. This is what luxury shopping should feel like.',
    product: 'Premium Watch',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Verified Buyer',
    avatar: 'https://i.pravatar.cc/80?img=3',
    rating: 5,
    text: 'Best online shopping experience I\'ve ever had. The interface is beautiful, customer support is top-notch, and my order arrived perfectly wrapped.',
    product: 'Designer Bag',
  },
  {
    id: 3,
    name: 'Amina Rahman',
    role: 'Verified Buyer',
    avatar: 'https://i.pravatar.cc/80?img=5',
    rating: 5,
    text: 'I was hesitant ordering luxury items online but Luxoria completely changed my mind. Authentic products, seamless checkout and beautiful unboxing experience.',
    product: 'Silk Scarf',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Verified Buyer',
    avatar: 'https://i.pravatar.cc/80?img=8',
    rating: 5,
    text: 'Five stars isn\'t enough. Superb curation, lightning-fast shipping, and the return process was effortless. Will definitely order again.',
    product: 'Sneakers',
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-base-200/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Customer Reviews"
          title="What People"
          highlight="Are Saying"
          subtitle="Real reviews from real customers who love what we do."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={item}>
              <div className="bg-base-100 rounded-2xl p-6 border border-base-200 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 h-full flex flex-col">
                <Quote size={28} className="text-indigo-200 dark:text-indigo-900 mb-3 shrink-0" />
                <p className="text-base-content/70 text-sm leading-relaxed flex-1 mb-5">
                  {review.text}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-100"
                  />
                  <div>
                    <p className="text-sm font-semibold text-base-content">{review.name}</p>
                    <p className="text-xs text-base-content/50">{review.role} · {review.product}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
