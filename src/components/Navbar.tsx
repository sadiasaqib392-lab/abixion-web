import React, { useState, useEffect } from 'react';
import { AbixionLogo } from './AbixionLogo';
import {
  Menu,
  X,
  PhoneCall,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Layers,
  HelpCircle,
  Mail,
  ShieldCheck,
} from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Growth Framework', href: '#framework' },
    { label: 'ROI Calculator', href: '#calculator' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-black/40 py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Top-Left Official Logo: ABIXION DIGITAL MARKETING PVT LIMITED */}
            <a
              href="#"
              id="header-abixion-logo-link"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-xl"
              aria-label="ABIXION DIGITAL MARKETING PVT LIMITED Home"
            >
              <AbixionLogo size="md" variant="header" showSubtitle={true} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                id="header-nav-audit-button"
                onClick={onOpenAudit}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 rounded-xl transition-all duration-200 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Free Growth Audit
              </button>

              <button
                id="header-nav-contact-button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                id="header-mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto xl:hidden border-b border-slate-800"
        >
          <div className="space-y-6">
            <div className="pb-4 border-b border-slate-800/80">
              <AbixionLogo size="sm" showSubtitle={true} />
              <p className="text-xs text-slate-400 mt-2">
                ABIXION DIGITAL MARKETING PVT LIMITED
              </p>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-xl transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 space-y-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-800/80"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Claim Free Growth Audit
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              <PhoneCall className="w-4 h-4" />
              Schedule 1-on-1 Strategy Session
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
