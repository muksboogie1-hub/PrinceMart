import React from 'react';
import { ArrowRight, Wrench, Shield, MapPin, Phone, MessageSquare, CheckCircle2, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, PRODUCT_CATALOGUE, ProductItem } from '../data/princemartData';
import { ProductCard } from '../components/ProductCard';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onViewDetails: (product: ProductItem) => void;
  onSelectQuote: (product: ProductItem) => void;
  setSelectedCategory: (cat: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onViewDetails,
  onSelectQuote,
  setSelectedCategory,
}) => {
  const featuredProducts = PRODUCT_CATALOGUE.slice(0, 4);

  const handleCategoryClick = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Ambient background image with measured contrast scrim */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/hero_princemart_hardware_1793559225476.jpg"
            alt="PrinceMart Hardware and Workshop Equipment"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl space-y-6">
            {/* Clean unboxed metadata lead-in */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span>Hardware & Motor Spares Supplier</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Zimbabwe</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              High-Performance Tools & Genuine Motor Spares
            </h1>

            {/* Official Website Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              &ldquo;{BUSINESS_INFO.officialStatement}&rdquo;
            </p>

            {/* Primary Action Zone */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleNav('quote')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 transition-colors rounded-lg shadow-sm whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              >
                <span>Get a Quick Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNav('products')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors rounded-lg whitespace-nowrap"
              >
                <span>Explore Products</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick Trust Markers strip */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Macheke & Harare Collection</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Contractor & Mechanic Grade</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Direct Quotes: {BUSINESS_INFO.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <span>About PrinceMart</span>
              <span aria-hidden="true">·</span>
              <span>Trade Specialists</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Supplying Zimbabwe&apos;s Contractors, Mechanics & Vehicle Owners
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              PrinceMart operates as a dedicated hardware and motor vehicle spares provider based at the Macheke Hotel Complex in Macheke, with order collection points conveniently located in Harare.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We specialize in reliable tools that withstand tough job-site environments, high-precision thread repair systems, heavy-duty automotive suspension equipment, and essential vehicle replacement parts for popular models.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => handleNav('about')}
                className="text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-900 flex items-center gap-1.5 transition-colors"
              >
                <span>Read our company profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <span className="text-2xl font-bold text-slate-900 font-mono">01</span>
                <h3 className="text-sm font-semibold text-slate-900">Contractor Tools</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Power tools, masonry equipment, measuring instruments, and job-site accessories.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <span className="text-2xl font-bold text-slate-900 font-mono">02</span>
                <h3 className="text-sm font-semibold text-slate-900">Automotive Spares</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Brake parts, suspension components, filters, and spares for popular car models.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <span className="text-2xl font-bold text-slate-900 font-mono">03</span>
                <h3 className="text-sm font-semibold text-slate-900">Specialty Repair Kits</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  304 stainless wire thread insert kits, coil spring compressors, and garage gear.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <span className="text-2xl font-bold text-slate-900 font-mono">04</span>
                <h3 className="text-sm font-semibold text-slate-900">Fast Quotations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast quotation responses via web enquiry, direct phone call, and WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
              <span>Core Supply Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Featured Product Categories
            </h2>
          </div>
          <button
            onClick={() => handleNav('products')}
            className="text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-900 flex items-center gap-1 transition-colors self-start sm:self-auto"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.coreCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.title)}
              className="group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="aspect-4/3 bg-slate-100 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-xs font-medium text-amber-800 block">
                    {cat.badge}
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-amber-700">
                  <span>Browse Category</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Products Showcase */}
      <section className="bg-slate-100/60 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
                <span>Featured Catalogue Selection</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Selected Products Available for Quotation
              </h2>
            </div>
            <button
              onClick={() => handleNav('products')}
              className="text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-900 flex items-center gap-1 transition-colors self-start sm:self-auto"
            >
              <span>Explore All Products ({PRODUCT_CATALOGUE.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
                onSelectQuote={onSelectQuote}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => handleNav('products')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-lg border border-slate-300 shadow-2xs transition-colors"
            >
              <span>View Complete Product Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Verified Reasons to Choose PrinceMart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <span>Verified Business Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Why Contractors & Mechanics Choose PrinceMart
          </h2>
          <p className="text-sm text-slate-600">
            Genuine reasons based on our verified operations in Macheke and Harare.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.verifiedStrengths.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-mono font-bold text-sm">
                0{index + 1}
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Clear Quick Quote Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl text-white p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="relative max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
              Direct Quotation Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Order or Request Specifications?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We respond promptly with accurate availability, collection options at Macheke or Harare, and trade pricing tailored to your requirements.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleNav('quote')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 transition-colors rounded-lg font-bold shadow-sm whitespace-nowrap"
              >
                <span>Get a Quick Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors rounded-lg whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (+263 771 767 077)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
