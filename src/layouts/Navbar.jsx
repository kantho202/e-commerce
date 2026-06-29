"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  ShoppingCart, Heart, User, Search, Menu, X,
  ChevronDown, Zap, Package, Tag, Star, Phone, Info
} from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop', icon: Package },
  { href: '/categories', label: 'Categories', icon: Tag },
  { href: '/offers', label: 'Offers', icon: Zap },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact', icon: Phone },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) =>
    href === '/' ? path === '/' : path.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-base-100/90 backdrop-blur-xl shadow-lg border-b border-base-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight gradient-text">Luxoria</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(href)
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                      : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-xl hover:bg-base-200 transition-colors text-base-content/70 hover:text-base-content"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="p-2.5 rounded-xl hover:bg-base-200 transition-colors text-base-content/70 hover:text-base-content relative"
                aria-label="Wishlist"
              >
                <Heart size={18} />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="p-2.5 rounded-xl hover:bg-base-200 transition-colors text-base-content/70 hover:text-base-content relative"
                aria-label="Cart"
              >
                <ShoppingCart size={18} />
                <span className="absolute top-1 right-1 w-4 h-4 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Profile */}
              <Link
                href="/login"
                className="hidden sm:flex items-center gap-2 ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-md"
              >
                <User size={15} />
                Login
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2.5 rounded-xl hover:bg-base-200 transition-colors"
                aria-label="Menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="bg-base-100/95 backdrop-blur-xl border-t border-base-200 px-4 py-4 space-y-1">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive(href)
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                    : 'text-base-content/70 hover:bg-base-200 hover:text-base-content'
                }`}
              >
                {Icon && <Icon size={16} />}
                {label}
              </Link>
            ))}
            <div className="pt-2 border-t border-base-200 flex gap-2">
              <Link href="/login" onClick={() => setMenuOpen(false)} className="flex-1 btn btn-sm btn-premium rounded-xl">Login</Link>
              <Link href="/register" onClick={() => setMenuOpen(false)} className="flex-1 btn btn-sm btn-outline rounded-xl">Register</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}
        >
          <div className="w-full max-w-2xl bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-base-200">
              <Search size={20} className="text-indigo-500 shrink-0" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, categories..."
                className="flex-1 bg-transparent outline-none text-base-content text-base placeholder:text-base-content/40"
              />
              <button onClick={() => setSearchOpen(false)} className="p-1 hover:bg-base-200 rounded-lg">
                <X size={18} />
              </button>
            </div>
            <div className="px-5 py-3 text-sm text-base-content/50">
              Press <kbd className="kbd kbd-sm">Esc</kbd> to close
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-18" />
    </>
  );
}
