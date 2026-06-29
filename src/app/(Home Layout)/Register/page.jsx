"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, User, Zap, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-violet-950">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-xl">
              <Zap size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Luxoria</span>
          </Link>
          <h1 className="text-2xl font-bold text-base-content">Create an account</h1>
          <p className="text-base-content/60 text-sm mt-1">Join thousands of happy shoppers</p>
        </div>

        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-200 p-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1.5">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/40" />
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-base-300 bg-base-50 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/40" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-base-300 bg-base-50 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/40" />
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Min. 8 characters"
                  className="w-full pl-10 pr-11 py-3 rounded-xl border border-base-300 bg-base-50 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-base-content/40">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <p className="text-xs text-base-content/50">
              By creating an account you agree to our{' '}
              <Link href="/terms" className="text-indigo-500 underline">Terms</Link> and{' '}
              <Link href="/privacy" className="text-indigo-500 underline">Privacy Policy</Link>.
            </p>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-sm shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Create Account <ArrowRight size={16} />
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-base-content/60 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-500 font-semibold hover:text-indigo-700">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
