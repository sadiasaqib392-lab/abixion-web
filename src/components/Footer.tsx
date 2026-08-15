import React, { useState } from 'react';
import { AbixionLogo } from './AbixionLogo';
import { COMPANY_INFO, SERVICES } from '../data/marketingData';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Send,
  CheckCircle2,
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenContact,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <footer
      id="main-footer"
      className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800/90 relative overflow-hidden"
    >
      {/* Top subtle ambient highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Logo with prominent clean backdrop as specified */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a
              href="#"
              id="footer-abixion-logo-link"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-xl"
              aria-label="ABIXION DIGITAL MARKETING PVT LIMITED"
            >
              <AbixionLogo size="lg" variant="footer" showSubtitle={true} />
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              <strong className="text-white">
                ABIXION DIGITAL MARKETING PVT LIMITED
              </strong>{' '}
              is an enterprise digital marketing firm engineered to scale organic
              search dominance, optimize paid media acquisition, and compound
              lifetime brand value.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certified Enterprise Agency Partner</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href="tel:+923020504559" className="hover:text-cyan-400 font-semibold transition-colors">
                  +92 302 0504559
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Core Growth Capabilities */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Solutions & Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-cyan-400 transition-colors block py-0.5"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Resources */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Company & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Our Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Case Studies & Proof
                </a>
              </li>
              <li>
                <a
                  href="#framework"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Growth Framework
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Marketing ROI Calculator
                </a>
              </li>
              <li>
                <a
                  href="#growth-audit"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Free SEO & Growth Audit
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Growth Insights */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              The Growth Briefing
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Join 12,000+ CMOs and founders receiving our weekly teardowns of
              winning ad hooks and algorithm updates.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox for the growth playbook.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex rounded-xl overflow-hidden border border-slate-800 bg-slate-900 focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full px-3 py-2.5 bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:from-cyan-300 hover:to-blue-400 transition-colors flex items-center justify-center font-bold text-xs"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-slate-500">
                  Zero spam. Unsubscribe in 1 click anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            <p>
              © {new Date().getFullYear()}{' '}
              <strong className="text-slate-300">
                ABIXION DIGITAL MARKETING PVT LIMITED
              </strong>
              . All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-cyan-400 transition-colors"
            >
              Security & Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
