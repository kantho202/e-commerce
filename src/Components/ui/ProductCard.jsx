"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star, Zap } from 'lucide-react';

export default function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const {
    _id,
    title,
    name,
    price = 0,
    originalPrice,
    images,
    image,
    category,
    rating = 4.5,
    reviewCount = 0,
    isNew,
    isSale,
  } = product;

  const displayName = title || name || 'Product';
  const imageUrl = images?.[0]?.url || (typeof image === 'string' ? image : null);
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <Link href={`/product/${_id}`} className="group block">
      <div className="product-card bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-200 hover:border-indigo-200 dark:hover:border-indigo-800">

        {/* Image */}
        <div className="relative overflow-hidden bg-base-200 aspect-square">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={displayName}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-base-content/20">
              <ShoppingCart size={48} />
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {discount && (
              <span className="px-2 py-0.5 bg-rose-500 text-white text-xs font-bold rounded-lg">
                -{discount}%
              </span>
            )}
            {isNew && (
              <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs font-bold rounded-lg">
                NEW
              </span>
            )}
            {isSale && (
              <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-bold rounded-lg">
                SALE
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
              aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-md transition-all duration-200 ${
                wishlisted
                  ? 'bg-rose-500 text-white'
                  : 'bg-base-100/90 backdrop-blur-sm hover:bg-rose-50 hover:text-rose-500'
              }`}
            >
              <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
            </button>
            <Link
              href={`/product/${_id}`}
              onClick={(e) => e.stopPropagation()}
              aria-label="Quick view"
              className="w-9 h-9 rounded-xl bg-base-100/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
            >
              <Eye size={16} />
            </Link>
          </div>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                addedToCart
                  ? 'bg-emerald-500 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              <ShoppingCart size={15} />
              {addedToCart ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          {category && (
            <p className="text-xs text-indigo-500 font-medium uppercase tracking-wide mb-1">{category}</p>
          )}
          <h3 className="text-sm font-semibold text-base-content line-clamp-2 mb-2 leading-snug">
            {displayName}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-base-300'}
                />
              ))}
            </div>
            <span className="text-xs text-base-content/50">({reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-1.5">
              <span className="text-lg font-bold text-base-content">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-sm text-base-content/40 line-through mb-0.5">${originalPrice.toFixed(2)}</span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              aria-label="Buy Now"
              className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <Zap size={13} />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
