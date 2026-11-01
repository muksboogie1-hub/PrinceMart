import React from 'react';
import { X, Check, ArrowRight, Phone, MessageSquare, Wrench } from 'lucide-react';
import { ProductItem, BUSINESS_INFO } from '../data/princemartData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="uppercase tracking-wider text-amber-700 font-semibold">
              {product.category}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{product.subcategory}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Product Image */}
            <div className="aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Title & Core Overview */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {product.name}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Recommended For
                </span>
                <p className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{product.targetAudience}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Product Specifications & Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
              {product.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* No price invention notice & Quotation prompt */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs font-semibold text-amber-900">
                Official Trade Quotation Service
              </p>
              <p className="text-xs text-amber-800">
                We supply individual units or bulk wholesale quantities. Fast price quotation on request.
              </p>
            </div>

            <button
              onClick={() => {
                onRequestQuote(product);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              <span>Get a Quick Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Direct fast contact options */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
            <span className="text-slate-600 font-medium">Or enquire directly via phone or WhatsApp:</span>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-slate-700 hover:text-amber-700 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello PrinceMart, I would like to request a quotation for: ${product.name}`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Instant</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
