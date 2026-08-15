import React, { useState } from 'react';
import { SERVICES } from '../data/marketingData';
import { ServiceItem } from '../types';
import {
  Search,
  Target,
  Share2,
  TrendingUp,
  Layout,
  Mail,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Share2':
        return <Share2 className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const activeService =
    SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-slate-900/60 relative border-t border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-FUNNEL GROWTH SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Services Engineered for Pure ROI & Market Dominance
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            At ABIXION DIGITAL MARKETING PVT LIMITED, we don't do cookie-cutter
            tactics. Every campaign is customized to eliminate customer acquisition
            bottlenecks and scale bottom-line revenue.
          </p>
        </div>

        {/* Desktop Interactive Layout: Left Navigation + Right Deep-Dive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services List / Selector */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  id={`service-tab-${service.id}`}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-4 border ${
                    isSelected
                      ? 'bg-slate-800 border-cyan-500/60 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30'
                      : 'bg-slate-950/70 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg text-white bg-gradient-to-tr ${service.gradient} shrink-0 mt-0.5 shadow-md`}
                  >
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-white truncate">
                        {service.title}
                      </h3>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 shrink-0">
                        {service.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Inspector Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-slate-700/80 shadow-2xl space-y-6 relative overflow-hidden">
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-3.5 rounded-xl text-white bg-gradient-to-tr ${activeService.gradient} shadow-lg`}
                  >
                    {getServiceIcon(activeService.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      Strategic Capability
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-bold self-start sm:self-auto">
                  {activeService.metrics}
                </div>
              </div>

              {/* Comprehensive Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Framework Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Actionable Deliverables Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Key Deliverables & Execution Scope
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Box */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80">
                <div>
                  <p className="text-xs font-semibold text-white">
                    Ready to accelerate with {activeService.title}?
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Get a tailored action roadmap from ABIXION growth architects.
                  </p>
                </div>

                <button
                  id={`inquire-service-${activeService.id}`}
                  onClick={() => onSelectService(activeService)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-md shadow-cyan-500/20 transition-all duration-200 shrink-0"
                >
                  <span>Inquire for Your Brand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
