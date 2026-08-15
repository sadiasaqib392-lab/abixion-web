import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { AbixionLogo } from './AbixionLogo';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            ) : (
              <FileText className="w-5 h-5 text-cyan-400" />
            )}
            <h3 className="text-base font-bold text-white font-heading">
              {type === 'privacy'
                ? 'Privacy Policy & Data Security'
                : 'Terms of Service & Agency Agreement'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 mb-4">
            <AbixionLogo size="sm" showSubtitle={true} />
            <p className="text-[11px] text-slate-400 mt-2">
              Official Legal Document for ABIXION DIGITAL MARKETING PVT LIMITED
            </p>
          </div>

          {type === 'privacy' ? (
            <>
              <h4 className="text-sm font-bold text-white">
                1. Data Collection & Usage
              </h4>
              <p>
                ABIXION DIGITAL MARKETING PVT LIMITED respects client data privacy.
                We only collect necessary business information (website URLs,
                ad account metrics, lead forms) to execute digital marketing
                services and prepare customized growth audits.
              </p>

              <h4 className="text-sm font-bold text-white">
                2. Non-Disclosure & Security
              </h4>
              <p>
                All proprietary campaign assets, financial numbers, customer
                lists, and intellectual properties shared with ABIXION are
                strictly protected under enterprise Non-Disclosure standards.
              </p>

              <h4 className="text-sm font-bold text-white">
                3. Tracking & Pixels
              </h4>
              <p>
                We employ industry-standard privacy-first conversion tracking
                (Meta CAPI, Google Consent Mode v2, Google Analytics 4) to ensure
                full compliance with GDPR, CCPA, and regional data protection laws.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-sm font-bold text-white">
                1. Service Engagement Scope
              </h4>
              <p>
                ABIXION DIGITAL MARKETING PVT LIMITED delivers professional
                digital marketing, media buying, SEO optimization, and web
                consulting as outlined in approved client Statements of Work (SOW).
              </p>

              <h4 className="text-sm font-bold text-white">
                2. Performance & Retainers
              </h4>
              <p>
                Following initial onboarding sprints, all retainers proceed on a
                flexible month-to-month agreement. Clients retain 100% ownership
                of their ad accounts, pixels, Google assets, and creative designs.
              </p>

              <h4 className="text-sm font-bold text-white">
                3. Governing Law
              </h4>
              <p>
                These terms are governed by commercial corporate laws applicable
                to ABIXION DIGITAL MARKETING PVT LIMITED.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 flex justify-end bg-slate-950/50">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
