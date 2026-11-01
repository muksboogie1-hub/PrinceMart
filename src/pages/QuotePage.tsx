import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, Copy, Check, ArrowRight, Info, Building2, MapPin } from 'lucide-react';
import { BUSINESS_INFO, PRODUCT_CATALOGUE } from '../data/princemartData';

interface QuotePageProps {
  initialProduct?: string;
  onClearInitialProduct?: () => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({
  initialProduct = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [productInterest, setProductInterest] = useState(initialProduct || 'General Hardware Inquiry');
  const [quantity, setQuantity] = useState('1');
  const [preferredLocation, setPreferredLocation] = useState('Macheke Hotel Complex');
  const [additionalMessage, setAdditionalMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProductInterest(initialProduct);
    }
  }, [initialProduct]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }
    const cleanPhone = phoneNumber.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone || cleanPhone.length < 7) {
      errs.phoneNumber = 'Please enter a valid phone number (e.g. +263 77 176 7077).';
    }
    if (emailAddress.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailAddress.trim())) {
        errs.emailAddress = 'Please enter a valid email address.';
      }
    }
    if (!quantity.trim()) {
      errs.quantity = 'Please specify the quantity needed.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const getQuotationSummaryText = () => {
    return `*PrinceMart Quotation Request*
Name: ${fullName}
Phone: ${phoneNumber}
${emailAddress ? `Email: ${emailAddress}\n` : ''}Product: ${productInterest}
Quantity: ${quantity}
Collection/Location: ${preferredLocation}
${additionalMessage ? `Notes: ${additionalMessage}` : ''}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getQuotationSummaryText());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const getWhatsAppEnquiryUrl = () => {
    const msg = encodeURIComponent(getQuotationSummaryText());
    return `https://wa.me/263771767077?text=${msg}`;
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setEmailAddress('');
    setProductInterest('General Hardware Inquiry');
    setQuantity('1');
    setAdditionalMessage('');
    setErrors({});
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <span>Direct Commercial Enquiries</span>
            <span aria-hidden="true">·</span>
            <span>Zimbabwe</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Request a Quick Quote
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Need contractor supplies, specific motor vehicle spares, or workshop repair kits? Fill in the details below to prepare your quotation inquiry.
          </p>
        </div>

        {/* Demo Notice Banner (Transparent as required) */}
        <div className="mb-8 p-4 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <span className="font-semibold block mb-0.5">Quotation Submission Information</span>
            This official demonstration website prepares your enquiry summary. You can immediately send your compiled enquiry directly to PrinceMart via WhatsApp (<span className="font-semibold">{BUSINESS_INFO.phoneDisplay}</span>) or by calling our trade desk.
          </div>
        </div>

        {/* Submission Confirmation View */}
        {isSubmitted ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6">
            <div className="text-center space-y-3 pb-6 border-b border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Quotation Request Prepared
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Your enquiry details have been compiled. In this preview demonstration, no automated backend is connected so PrinceMart has not received this automatically.
              </p>
            </div>

            {/* Compiled Quotation Summary Box */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3 font-mono text-xs text-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-slate-500 font-sans">
                <span className="font-semibold uppercase tracking-wider">Prepared Quotation Summary</span>
                <span>PrinceMart Zimbabwe</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-slate-500 block text-[11px] font-sans">Client Name</span>
                  <span className="font-semibold text-slate-900">{fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] font-sans">Contact Phone</span>
                  <span className="font-semibold text-slate-900">{phoneNumber}</span>
                </div>
                {emailAddress && (
                  <div>
                    <span className="text-slate-500 block text-[11px] font-sans">Email Address</span>
                    <span className="font-semibold text-slate-900">{emailAddress}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500 block text-[11px] font-sans">Item / Category</span>
                  <span className="font-semibold text-slate-900">{productInterest}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] font-sans">Quantity Required</span>
                  <span className="font-semibold text-slate-900">{quantity}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] font-sans">Pickup Point</span>
                  <span className="font-semibold text-slate-900">{preferredLocation}</span>
                </div>
              </div>

              {additionalMessage && (
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-500 block text-[11px] font-sans">Notes / Requirements</span>
                  <span className="text-slate-800">{additionalMessage}</span>
                </div>
              )}
            </div>

            {/* Direct Connect Options */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Connect Directly with PrinceMart:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={getWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp (+263 771 767 077)</span>
                </a>

                <button
                  onClick={handleCopySummary}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-xs"
                >
                  {copiedSummary ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedSummary ? 'Summary Copied!' : 'Copy Summary to Clipboard'}</span>
                </button>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                ← Prepare another quotation enquiry
              </button>
            </div>
          </div>
        ) : (
          /* Main Quotation Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
                  Full Name <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Tendai Moyo"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors ${
                    errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 bg-white'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-600">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
                  Phone Number <span className="text-amber-600">*</span>
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. +263 77 123 4567"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors ${
                    errors.phoneNumber ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 bg-white'
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-rose-600">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Address (Optional) */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
                  Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="e.g. tendai@example.co.zw"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors ${
                    errors.emailAddress ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 bg-white'
                  }`}
                />
                {errors.emailAddress && (
                  <p className="text-xs text-rose-600">{errors.emailAddress}</p>
                )}
              </div>

              {/* Product or Category of Interest */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
                  Product / Category of Interest <span className="text-amber-600">*</span>
                </label>
                <select
                  value={productInterest}
                  onChange={(e) => setProductInterest(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <option value="General Hardware Inquiry">General Hardware & Tools Inquiry</option>
                  <option value="Motor Spares General Inquiry">General Motor Spares Inquiry</option>
                  <option value="Workshop Equipment Inquiry">Workshop & Specialty Equipment</option>
                  <option value="Kitchenware Inquiry">Kitchenware & Essentials</option>
                  <optgroup label="Specific Verified Products">
                    {PRODUCT_CATALOGUE.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Quantity Required */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
                  Quantity Required <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 1 set, 5 units, 100 fasteners"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors ${
                    errors.quantity ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 bg-white'
                  }`}
                />
                {errors.quantity && (
                  <p className="text-xs text-rose-600">{errors.quantity}</p>
                )}
              </div>

              {/* Preferred Collection / Location */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
                  Preferred Pickup Location
                </label>
                <select
                  value={preferredLocation}
                  onChange={(e) => setPreferredLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <option value="Macheke Hotel Complex">Macheke Hotel Complex (Showroom & Main Branch)</option>
                  <option value="Harare Collection Point">Harare Collection Point (Avenues / Greendale)</option>
                  <option value="Direct Consultation Required">Discuss Delivery / Collection with Trade Desk</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
                Additional Message / Technical Specifications
              </label>
              <textarea
                rows={3}
                value={additionalMessage}
                onChange={(e) => setAdditionalMessage(e.target.value)}
                placeholder="Mention specific vehicle models, dimensions, thread sizes, or project deadlines..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 resize-none"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Direct trade support: Call <span className="font-semibold text-slate-700">{BUSINESS_INFO.phoneDisplay}</span>
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                <span>Submit Quotation Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Direct Contact Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-3.5">
            <Building2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-slate-900">Macheke Showroom</h4>
              <p className="text-xs text-slate-600">
                Macheke Hotel Complex, Macheke, Zimbabwe. Visit our main hardware and tools trade counter.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-slate-900">Harare Collection</h4>
              <p className="text-xs text-slate-600">
                Collection available in the Harare Avenues and Greendale / Msasa area for pre-ordered supplies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
