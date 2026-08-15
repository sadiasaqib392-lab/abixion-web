import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/marketingData';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  Building,
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialWebsite?: string;
  initialBudget?: number;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialWebsite = '',
  initialBudget,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    website: initialWebsite,
    budget: initialBudget ? `$${initialBudget.toLocaleString()}/mo` : '$5,000 - $15,000 / month',
    services: initialService ? [initialService] : ['Search Engine Optimization (SEO)', 'Performance Paid Media & PPC'],
    timeline: 'Within 2 Weeks',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetTiers = [
    '$1,500 - $3,000 / month',
    '$3,000 - $5,000 / month',
    '$5,000 - $15,000 / month',
    '$15,000 - $50,000 / month',
    '$50,000+ / month (Enterprise)',
  ];

  const serviceOptions = [
    'Enterprise SEO & Generative Search',
    'Google & Meta Paid Performance Ads',
    'Social Media & Viral Short Video',
    'Conversion Rate Optimization (CRO)',
    'High-Speed Web & E-Commerce Store',
    'Email & SMS Retention Funnels',
  ];

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== srv)
          : [...prev.services, srv],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>GROWTH CONSULTATION & INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Schedule Your Strategic Growth Session
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Speak directly with a senior performance marketing strategist from{' '}
            <strong className="text-white">ABIXION DIGITAL MARKETING PVT LIMITED</strong>.
            We will review your current funnels and map out your next 90 days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact & Company Details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  Official Entity
                </span>
                <h3 className="text-xl font-extrabold text-white font-heading">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Registered Full-Suite Digital Marketing & Growth Engineering
                  Agency.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">
                      Client Growth & Inquiries
                    </p>
                    <p className="text-white font-semibold">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">
                      Direct Strategy Hotline
                    </p>
                    <a
                      href="tel:+923020504559"
                      className="text-white font-semibold hover:text-cyan-400 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">
                      Corporate Headquarters
                    </p>
                    <p className="text-white font-semibold">
                      {COMPANY_INFO.headquarters}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">
                      Strategy Advisory Hours
                    </p>
                    <p className="text-white font-semibold">
                      Mon – Fri: 8:00 AM – 7:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Confidentiality Guarantee</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  All strategic data, revenue metrics, and proprietary funnels
                  shared are protected by strict Non-Disclosure Agreements (NDA).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
              {submitted ? (
                <div
                  id="consultation-success-toast"
                  className="py-12 px-6 text-center space-y-4"
                >
                  <div className="inline-flex p-4 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white font-heading">
                    Growth Consultation Requested!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for contacting{' '}
                    <strong className="text-cyan-400">
                      ABIXION DIGITAL MARKETING PVT LIMITED
                    </strong>
                    . A senior growth strategist will review your brand details and
                    reach out within 4 business hours with your custom roadmap.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        phone: '',
                        companyName: '',
                        website: '',
                        budget: '$5,000 - $15,000 / month',
                        services: ['Search Engine Optimization (SEO)'],
                        timeline: 'Within 2 Weeks',
                        notes: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-fullname"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, workEmail: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        required
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                        placeholder="Your Company Inc."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Website URL
                      </label>
                      <input
                        type="text"
                        id="contact-website"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  {/* Service Multi-Select Checkboxes */}
                  <div className="space-y-2 pt-1">
                    <label className="text-xs font-semibold text-slate-300">
                      Select Target Capabilities
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((srv, idx) => {
                        const isChecked = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-2 rounded-lg text-left text-xs font-medium transition-colors flex items-center gap-2 border ${
                              isChecked
                                ? 'bg-cyan-950/80 border-cyan-500/80 text-cyan-300'
                                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <span
                              className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                                isChecked
                                  ? 'bg-cyan-400 text-slate-950'
                                  : 'border border-slate-700'
                              }`}
                            >
                              {isChecked ? '✓' : ''}
                            </span>
                            <span className="truncate">{srv}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Monthly Marketing Budget Tier */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Estimated Monthly Marketing Budget
                    </label>
                    <select
                      id="contact-budget-select"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      {budgetTiers.map((tier) => (
                        <option key={tier} value={tier}>
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Strategic Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Key Growth Goals or Current Bottlenecks (Optional)
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Tell us about your target CAC, current monthly traffic, or upcoming product launch..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                    ></textarea>
                  </div>

                  <button
                    id="submit-consultation-form-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Reserving Strategy Slot...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Confidential Strategy Roadmap</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
