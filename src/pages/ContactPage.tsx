import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, ArrowRight, Check, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/princemartData';

interface ContactPageProps {
  onNavigateToQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateToQuote }) => {
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senderName.trim() && senderContact.trim() && message.trim()) {
      setSubmitted(true);
    }
  };

  const getWhatsAppDirectUrl = () => {
    const text = encodeURIComponent(`Hello PrinceMart, my name is ${senderName}. Contact: ${senderContact}. Inquiry: ${message}`);
    return `${BUSINESS_INFO.whatsappUrl}?text=${text}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <span>Verified Contact Details</span>
            <span aria-hidden="true">·</span>
            <span>PrinceMart Zimbabwe</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & Trade Desks
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out to PrinceMart for product inquiries, stock availability checks, custom tool requests, or collection arrangements.
          </p>
        </div>

        {/* Core Verified Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone & Direct Calling */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">Telephone Inquiries</h3>
              <p className="text-xs text-slate-500">Call our sales desk directly</p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="text-base font-bold text-slate-900 hover:text-amber-700 transition-colors block"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <div className="pt-2 text-xs text-slate-500">
              Monday – Saturday business hours
            </div>
          </div>

          {/* WhatsApp Instant Messaging */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">WhatsApp Trade Desk</h3>
              <p className="text-xs text-slate-500">Send photos of parts or quick specs</p>
            </div>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <span>+263 771 767 077</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <div className="pt-2 text-xs text-slate-500">
              Quick replies for quotes and part identification
            </div>
          </div>

          {/* Official Email */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">Official Email</h3>
              <p className="text-xs text-slate-500">Formal tender and quotation requests</p>
            </div>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors block truncate"
            >
              {BUSINESS_INFO.email}
            </a>
            <div className="pt-2 text-xs text-slate-500">
              Direct response from PrinceMart trade team
            </div>
          </div>
        </div>

        {/* Locations and Quick Message Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Location Branches */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block">
                  Store Locations & Pickup Points
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Where to Find PrinceMart
                </h2>
              </div>

              {/* Macheke */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      Macheke Branch & Showroom
                    </h3>
                    <p className="text-xs text-slate-600">
                      Macheke Hotel Complex, Macheke, Zimbabwe
                    </p>
                    <p className="text-xs text-slate-500">
                      Primary hardware stock, counter sales, and physical collection point.
                    </p>
                  </div>
                </div>
              </div>

              {/* Harare */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      Harare Collection Point
                    </h3>
                    <p className="text-xs text-slate-600">
                      Harare Avenues & Greendale / Msasa area, Harare, Zimbabwe
                    </p>
                    <p className="text-xs text-slate-500">
                      Pick-up service for contractors and workshops with advance order confirmations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating notice */}
              <div className="flex items-center gap-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Trade enquiries processed promptly during regional business hours.</span>
              </div>
            </div>
          </div>

          {/* Quick Message Box */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block">
                  Quick Message
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Send a Direct Message
                </h2>
                <p className="text-xs text-slate-600">
                  Have a quick question about a product or branch hours? Send us a message.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-4">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Message Ready</h3>
                    <p className="text-xs text-slate-600">
                      You can forward this directly to our sales desk via WhatsApp right now:
                    </p>
                  </div>
                  <a
                    href={getWhatsAppDirectUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </a>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      Write another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleQuickContactSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Farai Chikwanha"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Phone Number or Email
                    </label>
                    <input
                      type="text"
                      required
                      value={senderContact}
                      onChange={(e) => setSenderContact(e.target.value)}
                      placeholder="+263 77..."
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about part compatibility, pricing, or collection..."
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 resize-none"
                    />
                  </div>

                  <div className="pt-1 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={onNavigateToQuote}
                      className="text-xs font-semibold text-amber-800 hover:text-amber-900"
                    >
                      Need a formal quote instead?
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
