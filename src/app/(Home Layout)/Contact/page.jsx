"use client"
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-4 border border-indigo-100">Get in Touch</span>
        <h1 className="text-4xl font-bold text-base-content">
          Contact <span className="gradient-text">Us</span>
        </h1>
        <p className="text-base-content/60 mt-3 max-w-md mx-auto">
          Have a question or feedback? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Info Panel */}
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: Mail, title: 'Email', value: 'hello@luxoria.com', sub: 'We reply within 24 hours' },
            { icon: Phone, title: 'Phone', value: '+880 1851-212121', sub: 'Mon–Fri, 9am–6pm' },
            { icon: MapPin, title: 'Office', value: 'Dhaka, Bangladesh', sub: 'Gulshan-1, Dhaka 1212' },
          ].map(({ icon: Icon, title, value, sub }) => (
            <div key={title} className="flex gap-4 p-5 bg-base-100 rounded-2xl border border-base-200">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-indigo-500" />
              </div>
              <div>
                <p className="text-xs text-base-content/50 font-medium uppercase tracking-wide">{title}</p>
                <p className="font-semibold text-base-content text-sm mt-0.5">{value}</p>
                <p className="text-xs text-base-content/50 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="lg:col-span-3 bg-base-100 rounded-3xl border border-base-200 p-8 shadow-sm">
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={28} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-base-content mb-2">Message Sent!</h3>
              <p className="text-base-content/60 text-sm">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-50 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-50 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-50 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-50 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
