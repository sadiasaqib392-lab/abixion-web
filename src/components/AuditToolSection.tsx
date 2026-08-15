import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  RefreshCw,
  Zap,
} from 'lucide-react';

interface AuditToolSectionProps {
  onScheduleFullAudit: (website: string) => void;
}

export const AuditToolSection: React.FC<AuditToolSectionProps> = ({
  onScheduleFullAudit,
}) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [industry, setIndustry] = useState('E-Commerce');
  const [analyzing, setAnalyzing] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl) return;

    setAnalyzing(true);
    setAuditResult(null);

    // Simulate sophisticated multi-point digital diagnostic
    setTimeout(() => {
      setAnalyzing(false);
      setAuditResult({
        domain: websiteUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, ''),
        overallScore: 68,
        seoHealth: {
          score: 72,
          issues: [
            'Missing Schema Markup on high-intent conversion pages',
            'Low GEO (Generative AI Engine Optimization) query presence',
            'Sub-optimal backlink distribution compared to top 3 rivals',
          ],
        },
        speedAndUx: {
          score: 61,
          issues: [
            'Mobile Cumulative Layout Shift (CLS) exceeds 0.25s',
            'Checkout funnel drop-off rate estimated at 71%',
          ],
        },
        adConversionEfficiency: {
          score: 64,
          issues: [
            'Pixel event tracking missing secondary lead triggers',
            'No automated dynamic retargeting for cart abandoners',
          ],
        },
        revenueGrowthPotential: '+185% - 240%',
      });
    }, 1500);
  };

  return (
    <section
      id="growth-audit"
      className="py-20 lg:py-28 bg-slate-900/80 relative border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT PERFORMANCE SCAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Free Digital Marketing & Growth Audit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Enter your business website URL to run a live diagnostic across SEO,
            speed, generative search visibility, and paid media conversion readiness.
          </p>
        </div>

        {/* Audit Input Form */}
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleRunAudit}
            className="p-3 sm:p-4 rounded-2xl bg-slate-950 border border-slate-700/80 shadow-2xl flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="audit-website-input"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="Enter your website (e.g. yourcompany.com)"
                className="w-full pl-11 pr-4 py-3 bg-slate-900 rounded-xl text-slate-100 text-sm border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <select
              id="audit-industry-select"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              aria-label="Select Company Sector"
              className="w-full sm:w-44 px-3.5 py-3 bg-slate-900 rounded-xl text-slate-200 text-xs border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="E-Commerce">E-Commerce & Retail</option>
              <option value="B2B SaaS">B2B SaaS & Tech</option>
              <option value="Healthcare">Healthcare & Clinic</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Services">Local & Pro Services</option>
            </select>

            <button
              id="run-audit-button"
              type="submit"
              disabled={analyzing}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all duration-200 shrink-0 disabled:opacity-50"
            >
              {analyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Scanning Site...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Scan My Site</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Audit Results View */}
        {auditResult && (
          <div
            id="audit-results-container"
            className="mt-10 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-2xl space-y-6 animate-fadeIn"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Diagnostic Analysis Complete
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                    {auditResult.domain}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mt-1">
                  Overall Digital Growth Grade: {auditResult.overallScore}/100
                </h3>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-right">
                <p className="text-[10px] text-slate-400 uppercase font-semibold">
                  Estimated Revenue Unlock
                </p>
                <p className="text-lg font-black text-emerald-400 font-mono">
                  {auditResult.revenueGrowthPotential}
                </p>
              </div>
            </div>

            {/* Diagnostic Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {/* Category 1 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">
                    SEO & GEO Search
                  </span>
                  <span className="text-xs font-bold font-mono text-cyan-400">
                    {auditResult.seoHealth.score}/100
                  </span>
                </div>
                <ul className="space-y-2">
                  {auditResult.seoHealth.issues.map((issue: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 text-[11px] text-slate-400"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 2 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">
                    Speed & UX Funnel
                  </span>
                  <span className="text-xs font-bold font-mono text-amber-400">
                    {auditResult.speedAndUx.score}/100
                  </span>
                </div>
                <ul className="space-y-2">
                  {auditResult.speedAndUx.issues.map((issue: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 text-[11px] text-slate-400"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 3 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">
                    Paid Ads & Tracking
                  </span>
                  <span className="text-xs font-bold font-mono text-cyan-400">
                    {auditResult.adConversionEfficiency.score}/100
                  </span>
                </div>
                <ul className="space-y-2">
                  {auditResult.adConversionEfficiency.issues.map(
                    (issue: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-[11px] text-slate-400"
                      >
                        <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <p className="text-xs text-slate-300">
                Want our senior growth strategists to build a step-by-step fix
                roadmap for <strong className="text-white">{auditResult.domain}</strong>?
              </p>
              <button
                id="claim-custom-audit-fix"
                onClick={() => onScheduleFullAudit(auditResult.domain)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-md shadow-cyan-500/20 shrink-0"
              >
                <span>Get Full 15-Page Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuditToolSection;
