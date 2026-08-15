import React from 'react';
import { TESTIMONIALS } from '../data/marketingData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED CLIENT REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            What Founders & CMOs Say
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real feedback from executive leaders scaling with ABIXION DIGITAL
            MARKETING PVT LIMITED.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 shadow-xl flex flex-col justify-between space-y-6 text-left relative transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating & Highlight */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/60">
                    {t.highlight}
                  </span>
                </div>

                {/* Content */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.author}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-cyan-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {t.role} • <span className="text-slate-300">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
