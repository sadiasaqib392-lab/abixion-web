import React from 'react';
import { GROWTH_FRAMEWORK } from '../data/marketingData';
import { Layers, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface GrowthProcessSectionProps {
  onOpenConsultation: () => void;
}

export const GrowthProcessSection: React.FC<GrowthProcessSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      id="framework"
      className="py-20 lg:py-28 bg-slate-900/60 relative border-t border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>THE 5-STEP ABIXION FORMULA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            How We Systematically Scale Brands
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our battle-tested proprietary framework combines scientific analytics,
            rapid direct-response creative testing, and machine-learning media
            bidding to drive consistent compounding growth.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {GROWTH_FRAMEWORK.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/40 shadow-xl flex flex-col justify-between space-y-4 relative group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-cyan-400 font-mono">
                    {item.step}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-white font-heading leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-900 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors">
                <span>Phase {idx + 1} Execution</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar below Framework */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/50 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-lg font-bold text-white font-heading">
              Ready to launch the ABIXION framework for your company?
            </h3>
            <p className="text-xs text-slate-400">
              Schedule your confidential growth strategy roadmap with our lead
              architects.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-md shadow-cyan-500/20 shrink-0"
          >
            <span>Start Your 90-Day Sprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrowthProcessSection;
