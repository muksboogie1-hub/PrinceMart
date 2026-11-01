import React from 'react';
import { Building2, MapPin, Wrench, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/princemartData';

interface AboutPageProps {
  onNavigateToQuote: () => void;
  onNavigateToProducts: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateToQuote,
  onNavigateToProducts,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <span>Company Profile</span>
            <span aria-hidden="true">·</span>
            <span>Zimbabwe</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About PrinceMart
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Supplying reliable hardware, building materials, workshop tools, and automotive spares to trade professionals and everyday owners.
          </p>
        </div>

        {/* Mission Statement Callout */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
            Our Purpose & Commitment
          </span>
          <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed [text-wrap:balance]">
            &ldquo;{BUSINESS_INFO.officialStatement}&rdquo;
          </blockquote>
          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
            <span>PrinceMart Investments · Official Mandate</span>
            <a
              href={BUSINESS_INFO.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>princemart.co.zw</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Contractor & Hardware Supplies
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We stock durable building materials, contractor power tool accessories, and heavy-duty hand tools designed to withstand intensive site usage.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Motor Spares & Mechanics Gear
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Serving Zimbabwean mechanics and vehicle owners with compatible parts for popular vehicle models, alongside specialized gear like heavy-duty coil spring compressors.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Specialized Engineering Tooling
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Providing precision repair solutions including 304 stainless steel wire thread insert kits, digital measurement calipers, and workshop tool storage.
            </p>
          </div>
        </div>

        {/* Operational Locations Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block">
              Physical Presence & Logistics
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Serving Macheke, Harare & Surrounding Regions
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To support contractors and vehicle owners across Zimbabwe, PrinceMart combines physical branch facilities with accessible regional pickup points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Macheke Branch & Showroom</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Located at the <strong className="text-slate-800">Macheke Hotel Complex, Macheke</strong>. This location houses our primary trade counter, physical stock of hardware, and customer reception desk.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Harare Collection Point</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Collection options are available in the <strong className="text-slate-800">Harare Avenues</strong> area and <strong className="text-slate-800">Greendale / Msasa</strong> for pre-arranged customer pickups.
              </p>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">Have a project or equipment requirement?</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Explore our catalogue or submit a direct quotation inquiry today.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onNavigateToProducts}
              className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Browse Products
            </button>
            <button
              onClick={onNavigateToQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm transition-colors"
            >
              <span>Get a Quick Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
