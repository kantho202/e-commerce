"use client"
import Link from 'next/link';
import { Zap, Mail, MapPin, Phone, Globe, MessageCircle, Share2, Rss } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Categories', href: '/categories' },
    { label: 'Offers', href: '/offers' },
    { label: 'New Arrivals', href: '/shop?sort=new' },
    { label: 'Best Sellers', href: '/shop?sort=popular' },
  ],
  Account: [
    { label: 'My Profile', href: '/profile' },
    { label: 'Orders', href: '/orders' },
    { label: 'Wishlist', href: '/wishlist' },
    { label: 'Cart', href: '/cart' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
};

const socials = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: MessageCircle, href: '#', label: 'Messenger' },
  { icon: Share2, href: '#', label: 'Share' },
  { icon: Rss, href: '#', label: 'RSS' },
];

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      {/* Newsletter Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Stay in the Loop</h3>
          <p className="text-indigo-100 mb-6 text-sm">
            Subscribe for exclusive deals, new arrivals and insider-only discounts.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-indigo-200 outline-none focus:bg-white/20 transition-colors text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors text-sm shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
                <Zap size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Luxoria</span>
            </Link>
            <p className="text-base-content/60 text-sm leading-relaxed mb-6 max-w-xs">
              Curated luxury products delivered to your door. Experience premium shopping like never before.
            </p>
            <div className="space-y-2 text-sm text-base-content/60">
              <div className="flex items-center gap-2"><MapPin size={14} className="text-indigo-500 shrink-0" /> Dhaka, Bangladesh</div>
              <div className="flex items-center gap-2"><Phone size={14} className="text-indigo-500 shrink-0" /> +880 1851-212121</div>
              <div className="flex items-center gap-2"><Mail size={14} className="text-indigo-500 shrink-0" /> hello@luxoria.com</div>
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h6 className="font-semibold text-base-content mb-4 text-sm tracking-wide uppercase">{group}</h6>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-base-content/60 hover:text-indigo-500 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-base-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-base-content/50">
            © {new Date().getFullYear()} Luxoria. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-base-300 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-950 flex items-center justify-center text-base-content/60 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
