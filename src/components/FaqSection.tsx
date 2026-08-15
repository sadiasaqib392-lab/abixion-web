import React, { useState } from 'react';
import { FAQS } from '../data/marketingData';
import {
  ChevronDown,
  HelpCircle,
  PhoneCall,
  MessageSquare,
  ArrowRight,
  Phone,
} from 'lucide-react';

interface FaqSectionProps {
  onOpenContact?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-slate-900/50 relative border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Find clear answers to common inquiries about our custom web development,
            search optimization, social growth, and paid advertising strategies.
          </p>
        </div>

        {/* Modern Accordion FAQ List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const isContactFaq = faq.question.includes('contact');

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-950/95 border-cyan-500/40 shadow-xl shadow-cyan-950/20'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-slate-100 hover:text-cyan-400 focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-heading pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-cyan-500/20 text-cyan-400 rotate-180'
                        : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-900 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="font-normal">{faq.answer}</p>

                    {/* Special quick contact actions for the contact question */}
                    {isContactFaq && (
                      <div className="mt-4 pt-3 border-t border-slate-900 flex flex-wrap items-center gap-3">
                        <a
                          href="tel:+923020504559"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call +92 302 0504559</span>
                        </a>
                        <a
                          href="https://wa.me/923020504559"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-800/60 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* “Still Have Questions? Contact Us” Button Container */}
        <div className="mt-12 text-center pt-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-xl max-w-xl mx-auto space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
              Have a Custom Requirement or Unique Growth Goal?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Our marketing and web engineering experts are available to discuss
              your project strategy in detail.
            </p>
            <div>
              <button
                id="faq-contact-us-button"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Still Have Questions? Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
