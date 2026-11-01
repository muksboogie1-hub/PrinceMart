import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/princemartData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Genuine Profile */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-white">
                Prince<span className="text-amber-500">Mart</span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Investments
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hardware tools, contractor supplies, workshop equipment, and genuine motor vehicle spares in Zimbabwe. Serving contractors, mechanics, and vehicle owners with durable trade solutions.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                <span>Official Domain: www.princemart.co.zw</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Product Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-400 transition-colors"
                >
                  About PrinceMart
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact & Collection Points
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quote')}
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors flex items-center gap-1"
                >
                  <span>Request a Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Locations */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Locations
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">
                    Macheke Branch
                  </span>
                  <span className="text-slate-400 block text-xs">
                    Macheke Hotel Complex, Macheke
                  </span>
                  <span className="text-slate-500 block text-xs mt-0.5">
                    Showroom & Primary Store
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">
                    Harare Collection Point
                  </span>
                  <span className="text-slate-400 block text-xs">
                    Harare Avenues & Greendale / Msasa
                  </span>
                  <span className="text-slate-500 block text-xs mt-0.5">
                    Order Collection & Regional Dispatch
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Communication */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Inquiries & Quotations
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Chat on WhatsApp (+263 771 767 077)</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={() => handleNav('quote')}
                className="w-full py-2 px-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
              >
                Get a Quick Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright and business catalogue notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} PrinceMart Investments. All rights reserved. Registered Zimbabwe hardware & spares supplier.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Catalogue & Quotation Service</span>
            <span aria-hidden="true">·</span>
            <span>Simple Trade Enquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
