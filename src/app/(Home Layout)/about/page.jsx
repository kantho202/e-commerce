import { Zap, Shield, Truck, HeadphonesIcon, Users, Package } from 'lucide-react';

export const metadata = { title: 'About Us' };

const stats = [
  { value: '50k+', label: 'Happy Customers' },
  { value: '10k+', label: 'Products' },
  { value: '99%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support' },
];

const values = [
  { icon: Shield, title: 'Authenticity', desc: 'Every product is 100% genuine and verified before reaching you.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Express shipping across the country in 1–3 business days.' },
  { icon: HeadphonesIcon, title: 'Premium Support', desc: 'Our team is always here to help, 24 hours a day.' },
  { icon: Users, title: 'Community', desc: 'A growing family of 50,000+ satisfied customers worldwide.' },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-4 border border-indigo-100">Our Story</span>
        <h1 className="text-5xl font-bold text-base-content mb-4">
          We are <span className="gradient-text">Luxoria</span>
        </h1>
        <p className="text-base-content/60 text-lg max-w-2xl mx-auto leading-relaxed">
          Born from a passion for premium quality and seamless digital experiences, Luxoria brings the finest products from around the world directly to your doorstep.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center p-6 bg-base-100 rounded-2xl border border-base-200 shadow-sm">
            <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
            <div className="text-sm text-base-content/60">{label}</div>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-10 text-white text-center mb-20">
        <Zap size={32} className="mx-auto mb-4 text-yellow-300" />
        <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
        <p className="text-indigo-100 max-w-2xl mx-auto text-base leading-relaxed">
          To make luxury accessible. We believe everyone deserves access to the finest products without compromise — quality, service, or price.
        </p>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-10">
          Our <span className="gradient-text">Values</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 bg-base-100 rounded-2xl border border-base-200 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center mb-4">
                <Icon size={22} className="text-indigo-500" />
              </div>
              <h3 className="font-semibold text-base-content mb-2">{title}</h3>
              <p className="text-sm text-base-content/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
