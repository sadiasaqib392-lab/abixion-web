import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/marketingData';
import {
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Quote,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudyTitle: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
    { id: 'all', label: 'All Success Stories' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'saas', label: 'B2B SaaS' },
    { id: 'healthcare', label: 'Healthcare' },
  ];

  const filteredStudies =
    selectedIndustry === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) =>
          item.industry.toLowerCase().includes(selectedIndustry)
        );

  return (
    <section
      id="case-studies"
      className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>PROVEN CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Predictable Revenue Transformations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            See how ABIXION DIGITAL MARKETING PVT LIMITED turns stalled marketing
            budgets into industry-dominating revenue engines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedIndustry(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedIndustry === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12">
          {filteredStudies.map((study, idx) => (
            <div
              key={study.id}
              className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Visual Preview Left/Right */}
              <div
                className={`lg:col-span-5 relative rounded-xl overflow-hidden border border-slate-700/80 shadow-lg ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-[280px] sm:h-[340px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700 text-cyan-300 text-[11px] font-bold">
                  {study.client}
                </div>
              </div>

              {/* Content Details */}
              <div
                className={`lg:col-span-7 space-y-6 text-left ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    {study.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <p className="font-bold text-slate-300 mb-1">The Challenge</p>
                    <p className="text-slate-400 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <p className="font-bold text-cyan-400 mb-1">ABIXION Solution</p>
                    <p className="text-slate-400 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Key Result Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {study.results.map((res, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-left"
                    >
                      <p className="text-[10px] text-slate-400 truncate">
                        {res.label}
                      </p>
                      <p className="text-lg font-black text-white font-mono mt-0.5 flex items-center gap-1">
                        {res.value}
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                      </p>
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                {study.testimonial && (
                  <div className="p-4 rounded-xl bg-slate-950/90 border-l-4 border-cyan-500 text-left space-y-2">
                    <p className="text-xs italic text-slate-300">
                      "{study.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-2.5">
                      <img
                        src={study.testimonial.avatar}
                        alt={study.testimonial.author}
                        referrerPolicy="no-referrer"
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-xs font-bold text-white leading-none">
                          {study.testimonial.author}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          {study.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  id={`case-study-cta-${study.id}`}
                  onClick={() => onSelectCaseStudy(study.title)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Replicate this strategy for your brand</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
