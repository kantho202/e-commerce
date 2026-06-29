"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingBag } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import firstSlide from '../../assets/image1.jpg';
import secondSlide from '../../assets/image 2.jpg';
import thirdSlide from '../../assets/image 3.png';
import fourSlide from '../../assets/image 4.png';

const slides = [
  {
    img: firstSlide,
    badge: 'New Collection',
    title: 'Discover Your',
    highlight: 'Perfect Style',
    subtitle: 'Curated luxury products crafted for those who demand the finest.',
    cta: 'Shop Now',
    ctaHref: '/shop',
  },
  {
    img: secondSlide,
    badge: 'Flash Sale — Up to 60% Off',
    title: 'Unbeatable',
    highlight: 'Deals Today',
    subtitle: 'Limited-time offers on premium brands. Don\'t miss out.',
    cta: 'View Offers',
    ctaHref: '/offers',
  },
  {
    img: thirdSlide,
    badge: 'Trending Now',
    title: 'What Everyone',
    highlight: 'Is Wearing',
    subtitle: 'Shop the most-loved pieces this season.',
    cta: 'Explore',
    ctaHref: '/shop?sort=trending',
  },
  {
    img: fourSlide,
    badge: 'Best Sellers',
    title: 'Top Picks',
    highlight: 'Just for You',
    subtitle: 'Handpicked favourites from our premium collection.',
    cta: 'Browse All',
    ctaHref: '/shop',
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  return (
    <div className="relative w-full h-[70vh] lg:h-[92vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        loop
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        pagination={{ clickable: true }}
        className="h-full [&_.swiper-pagination-bullet-active]:bg-white [&_.swiper-pagination-bullet]:bg-white/50"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover"
                priority={i === 0}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="max-w-2xl"
            >
              <motion.span
                custom={0}
                variants={textVariants}
                className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest mb-4"
              >
                {slide.badge}
              </motion.span>

              <motion.h1
                custom={1}
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-2"
              >
                {slide.title}
              </motion.h1>

              <motion.h1
                custom={2}
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent leading-tight mb-5"
              >
                {slide.highlight}
              </motion.h1>

              <motion.p
                custom={3}
                variants={textVariants}
                className="text-white/75 text-base sm:text-lg mb-8 max-w-md leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div custom={4} variants={textVariants} className="flex items-center gap-4">
                <Link
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-sm shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-200"
                >
                  <ShoppingBag size={16} />
                  {slide.cta}
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/25 text-white font-medium text-sm hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                >
                  Browse Categories
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Counters */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-2 text-white/60 text-sm font-medium">
        <span className="text-white font-bold text-lg">{String(activeIndex + 1).padStart(2, '0')}</span>
        <span>/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
