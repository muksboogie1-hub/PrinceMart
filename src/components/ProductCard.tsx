import React, { useState } from 'react';
import { ArrowRight, Eye, Wrench } from 'lucide-react';
import { ProductItem } from '../data/princemartData';

interface ProductCardProps {
  product: ProductItem;
  onViewDetails: (product: ProductItem) => void;
  onSelectQuote: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onSelectQuote,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col hover:border-slate-300 hover:shadow-md transition-all duration-200">
      {/* Product Image Area */}
      <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-100 text-slate-500">
            <Wrench className="w-10 h-10 mb-2 stroke-1 text-slate-400" />
            <span className="text-xs font-medium text-slate-600">{product.name}</span>
          </div>
        )}

        {/* Quick view hover overlay button */}
        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={() => onViewDetails(product)}
            className="px-3.5 py-2 bg-white/95 text-slate-900 text-xs font-semibold rounded-lg shadow-sm hover:bg-white flex items-center gap-1.5 transition-transform transform translate-y-1 group-hover:translate-y-0"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick Specs</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Clean unboxed metadata with typographic separators (NO PILLS) */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="uppercase tracking-wider text-amber-700 font-semibold">
              {product.category}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="truncate">{product.subcategory}</span>
          </div>

          {/* Product Name */}
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Product Short Description */}
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => onViewDetails(product)}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5"
          >
            View Details
          </button>

          <button
            onClick={() => onSelectQuote(product)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg shadow-xs transition-colors whitespace-nowrap"
          >
            <span>Get a Quick Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
