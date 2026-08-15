import React from 'react';
import {
  TrendingUp,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
  BarChart2,
  CheckCircle2,
  Play,
} from 'lucide-react';
import heroBannerImg from '../assets/images/agency_hero_banner_1786827021166.jpg';
import { COMPANY_INFO } from '../data/marketingData';

interface HeroSectionProps {
  onOpenAudit: () => void;
  onOpenContact: () => void;
  onScrollToCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAudit,
  onOpenContact,
  onScrollToCalculator,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950"
    >
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[300px] h-[250px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Agency Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="tracking-wide">
                ABIXION DIGITAL MARKETING PVT LIMITED
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-heading">
              Scale Your Revenue With{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                High-Performance
              </span>{' '}
              Digital Marketing.
            </h1>

            {/* Sub-Headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We engineer full-funnel digital marketing ecosystems for ambitious
              brands. From dominant SEO and algorithmic paid media to high-converting
              landing pages, we turn ad spend into predictable client revenue.
            </p>

            {/* Core Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified 4.8x Average Return on Ad Spend (ROAS)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Omnichannel Google, Meta, TikTok & SEO Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent Live Client Reporting & Weekly Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No Rigid Long-Term Lock-Ins • Performance-Driven</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                id="hero-primary-cta"
                onClick={onOpenContact}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Book Free Growth Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onScrollToCalculator}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200"
              >
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                <span>Calculate Your ROI</span>
              </button>

              <button
                id="hero-audit-cta"
                onClick={onOpenAudit}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Audit</span>
              </button>
            </div>

            {/* Client Ratings Quote */}
            <div className="pt-4 flex items-center gap-3 border-t border-slate-800/80">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&auto=format&fit=crop&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {'★'.repeat(5)}
                  <span className="font-bold text-slate-200 ml-1">4.9/5.0</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Trusted by 250+ scaling brands & enterprises worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visualizer Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/80 shadow-2xl glow-cyan group">
              <img
                src={heroBannerImg}
                alt="ABIXION DIGITAL MARKETING PVT LIMITED Growth Analytics Center"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Glass Card: Live Growth Highlight */}
              <div className="absolute inset-x-4 bottom-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Live Campaign Performance
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                    +480% ROAS
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-left pt-1">
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <p className="text-[10px] text-slate-400">Total Revenue</p>
                    <p className="text-xs font-bold text-white">$140M+</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <p className="text-[10px] text-slate-400">Avg. CAC</p>
                    <p className="text-xs font-bold text-emerald-400">-52%</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <p className="text-[10px] text-slate-400">Retention</p>
                    <p className="text-xs font-bold text-cyan-400">98.4%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Floating Metric Pill */}
            <div className="absolute -top-4 -left-4 sm:-left-6 hidden sm:flex items-center gap-3 p-3 rounded-xl bg-slate-900/95 border border-slate-700/90 shadow-xl backdrop-blur-md">
              <div className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white">
                <Target className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Global Reach
                </p>
                <p className="text-xs font-extrabold text-white">
                  350M+ Impressions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Key Metric Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
