import React, { useState } from 'react';
import { Search, Filter, Wrench, X, ArrowRight } from 'lucide-react';
import { PRODUCT_CATALOGUE, ProductItem } from '../data/princemartData';
import { ProductCard } from '../components/ProductCard';

interface ProductsPageProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onViewDetails: (product: ProductItem) => void;
  onSelectQuote: (product: ProductItem) => void;
  onNavigateToQuote: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  selectedCategory,
  setSelectedCategory,
  onViewDetails,
  onSelectQuote,
  onNavigateToQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All Products',
    'Hardware & Tools',
    'Motor Spares',
    'Workshop Equipment',
    'Kitchenware',
  ];

  const filteredProducts = PRODUCT_CATALOGUE.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All Products' ||
      selectedCategory === '' ||
      product.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      selectedCategory.toLowerCase().includes(product.category.toLowerCase());

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.subcategory.toLowerCase().includes(query) ||
      product.shortDescription.toLowerCase().includes(query) ||
      product.fullDescription.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <span>Verified Product Catalogue</span>
            <span aria-hidden="true">·</span>
            <span>PrinceMart Zimbabwe</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hardware, Tools & Motor Spares
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore our curated inventory of heavy-duty tools, genuine motor replacement parts, and workshop equipment. Click any item to view specifications or request an immediate quotation.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools, spares, part names..."
                className="w-full pl-10 pr-9 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick General Quote Button */}
            <button
              onClick={onNavigateToQuote}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-xs transition-colors shrink-0"
            >
              <span>Get a Quick Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Category Filter Controls (functional buttons with click handlers) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 shrink-0 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>
            {categories.map((cat) => {
              const isActive =
                selectedCategory === cat ||
                (cat === 'All Products' && (!selectedCategory || selectedCategory === 'All Products'));

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Metadata */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>
            Showing <strong className="text-slate-900 font-semibold">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
            {selectedCategory && selectedCategory !== 'All Products' ? ` in ${selectedCategory}` : ''}
          </span>
          <span>No automated pricing · Quotations prepared on request</span>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
                onSelectQuote={onSelectQuote}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Wrench className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">No matching products found</h3>
              <p className="text-xs text-slate-600">
                Try clearing your search query or switching to another category.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Products');
              }}
              className="px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Quotation Assistance Callout */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Don&apos;t see the exact part or tool you need?
            </h4>
            <p className="text-xs text-slate-600">
              We frequently source custom hardware, thread sizes, and vehicle spares for clients. Contact our trade desk directly.
            </p>
          </div>
          <button
            onClick={onNavigateToQuote}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Request Custom Quotation
          </button>
        </div>
      </div>
    </div>
  );
};
