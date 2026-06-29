"use client"
import Link from 'next/link';
import { ShoppingCart, ArrowRight, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

// Placeholder — wire up real cart state via context/zustand later
const mockCart = [];

export default function CartPage() {
  const isEmpty = mockCart.length === 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-base-content mb-8">
        Your <span className="gradient-text">Cart</span>
      </h1>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="w-24 h-24 rounded-3xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center mb-6">
            <ShoppingCart size={40} className="text-indigo-400" />
          </div>
          <h2 className="text-xl font-semibold text-base-content mb-2">Your cart is empty</h2>
          <p className="text-base-content/60 text-sm mb-8 max-w-xs">Looks like you haven't added anything yet. Start shopping!</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-sm shadow-lg hover:opacity-90 transition-all"
          >
            <ShoppingBag size={16} />
            Start Shopping
            <ArrowRight size={15} />
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {mockCart.map((item) => (
              <div key={item._id} className="flex gap-4 bg-base-100 rounded-2xl p-4 border border-base-200">
                <div className="w-24 h-24 rounded-xl bg-base-200 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <p className="text-indigo-600 font-bold mt-1">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-base-100 rounded-2xl border border-base-200 p-6 h-fit">
            <h3 className="font-semibold text-base-content mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm text-base-content/70 mb-6">
              <div className="flex justify-between"><span>Subtotal</span><span>$0.00</span></div>
              <div className="flex justify-between"><span>Shipping</span><span className="text-emerald-500">Free</span></div>
              <div className="flex justify-between font-bold text-base-content pt-2 border-t border-base-200"><span>Total</span><span>$0.00</span></div>
            </div>
            <Link
              href="/checkout"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            >
              Checkout <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
