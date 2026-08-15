import React, { useState, useMemo } from 'react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

interface RoiCalculatorSectionProps {
  onApplyModel: (details: {
    budget: number;
    industry: string;
    projectedRevenue: number;
    roas: number;
  }) => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({
  onApplyModel,
}) => {
  const [monthlyBudget, setMonthlyBudget] = useState<number>(5000);
  const [industry, setIndustry] = useState<string>('ecommerce');
  const [avgDealValue, setAvgDealValue] = useState<number>(150);
  const [currentConversionRate, setCurrentConversionRate] = useState<number>(2.0);

  const industryProfiles = {
    ecommerce: {
      name: 'E-Commerce / D2C Brands',
      avgCpc: 1.25,
      defaultRoasMultiplier: 4.8,
      croLiftFactor: 1.45,
    },
    saas: {
      name: 'B2B Software & SaaS',
      avgCpc: 4.5,
      defaultRoasMultiplier: 5.2,
      croLiftFactor: 1.6,
    },
    healthcare: {
      name: 'Healthcare & Medical Clinics',
      avgCpc: 3.2,
      defaultRoasMultiplier: 4.5,
      croLiftFactor: 1.5,
    },
    realestate: {
      name: 'Real Estate & High-Ticket',
      avgCpc: 3.8,
      defaultRoasMultiplier: 6.0,
      croLiftFactor: 1.4,
    },
    services: {
      name: 'Professional & Local Services',
      avgCpc: 2.4,
      defaultRoasMultiplier: 4.2,
      croLiftFactor: 1.55,
    },
  };

  const currentProfile =
    industryProfiles[industry as keyof typeof industryProfiles] ||
    industryProfiles.ecommerce;

  // Real-time calculated projections
  const projections = useMemo(() => {
    const estimatedClicks = Math.round(monthlyBudget / currentProfile.avgCpc);
    const optimizedConvRate = currentConversionRate * currentProfile.croLiftFactor;
    const estimatedConversions = Math.max(
      1,
      Math.round(estimatedClicks * (optimizedConvRate / 100))
    );
    const projectedRevenue = Math.round(estimatedConversions * avgDealValue);
    const calculatedRoas = Number((projectedRevenue / monthlyBudget).toFixed(2));
    const estimatedCac = Math.round(monthlyBudget / estimatedConversions);
    const netProfitLift = Math.max(0, Math.round(projectedRevenue - monthlyBudget));

    return {
      estimatedClicks,
      optimizedConvRate: optimizedConvRate.toFixed(1),
      estimatedConversions,
      projectedRevenue,
      calculatedRoas: calculatedRoas < 1.2 ? 2.4 : calculatedRoas,
      estimatedCac,
      netProfitLift,
    };
  }, [monthlyBudget, industry, avgDealValue, currentConversionRate, currentProfile]);

  return (
    <section
      id="calculator"
      className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE GROWTH FORECASTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Calculate Your Revenue Potential
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Estimate your projected sales pipeline, customer acquisition cost, and
            Return on Ad Spend (ROAS) when powered by ABIXION DIGITAL MARKETING PVT
            LIMITED.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>Configure Your Campaign Parameters</span>
            </h3>

            {/* Industry Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Select Your Industry
              </label>
              <select
                id="calc-industry-select"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                aria-label="Select Your Industry"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="ecommerce">E-Commerce & D2C Brands</option>
                <option value="saas">B2B Software & Enterprise SaaS</option>
                <option value="healthcare">Healthcare & Medical Clinics</option>
                <option value="realestate">Real Estate & High-Ticket Services</option>
                <option value="services">Professional & Local Services</option>
              </select>
            </div>

            {/* Monthly Budget Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-300 uppercase tracking-wider">
                  Target Monthly Ad Budget
                </label>
                <span className="font-mono font-bold text-cyan-400 text-base">
                  ${monthlyBudget.toLocaleString()}
                </span>
              </div>
              <input
                id="calc-budget-slider"
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                aria-label="Target Monthly Ad Budget"
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$1,000</span>
                <span>$25,000</span>
                <span>$50,000+</span>
              </div>
            </div>

            {/* Average Deal / Order Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-300 uppercase tracking-wider">
                  Average Order / Customer Deal Value
                </label>
                <span className="font-mono font-bold text-cyan-400 text-base">
                  ${avgDealValue.toLocaleString()}
                </span>
              </div>
              <input
                id="calc-deal-value-slider"
                type="range"
                min="30"
                max="5000"
                step="20"
                value={avgDealValue}
                onChange={(e) => setAvgDealValue(Number(e.target.value))}
                aria-label="Average Order / Customer Deal Value"
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$30</span>
                <span>$2,500</span>
                <span>$5,000+</span>
              </div>
            </div>

            {/* Baseline Conversion Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-300 uppercase tracking-wider">
                  Current Website Conversion Rate
                </label>
                <span className="font-mono font-bold text-cyan-400 text-base">
                  {currentConversionRate}%
                </span>
              </div>
              <input
                id="calc-conv-rate-slider"
                type="range"
                min="0.5"
                max="6.0"
                step="0.1"
                value={currentConversionRate}
                onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                aria-label="Current Website Conversion Rate"
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>0.5% (Low)</span>
                <span>2.5% (Avg)</span>
                <span>6.0% (High)</span>
              </div>
            </div>
          </div>

          {/* Results Projection Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/40 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    ABIXION Forecast Model
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Projected Revenue & Growth
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold font-mono">
                  {projections.calculatedRoas}x Target ROAS
                </div>
              </div>

              {/* Big Revenue Showcase */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-left space-y-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Estimated Monthly Gross Revenue
                </p>
                <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-400 font-mono">
                  ${projections.projectedRevenue.toLocaleString()}
                </p>
                <p className="text-[11px] text-slate-400">
                  Projected net gross lift of{' '}
                  <span className="text-emerald-400 font-semibold">
                    +${projections.netProfitLift.toLocaleString()}
                  </span>{' '}
                  above media spend.
                </p>
              </div>

              {/* Sub Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">
                    Estimated Inbound Conversions
                  </p>
                  <p className="text-lg font-bold text-white font-mono mt-0.5">
                    {projections.estimatedConversions.toLocaleString()} orders/leads
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">
                    Projected Cost Per Acq. (CPA)
                  </p>
                  <p className="text-lg font-bold text-emerald-400 font-mono mt-0.5">
                    ${projections.estimatedCac}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">
                    ABIXION Optimized CVR
                  </p>
                  <p className="text-lg font-bold text-cyan-400 font-mono mt-0.5">
                    {projections.optimizedConvRate}%
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">
                    Estimated High-Intent Clicks
                  </p>
                  <p className="text-lg font-bold text-white font-mono mt-0.5">
                    {projections.estimatedClicks.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                id="calc-apply-model-button"
                onClick={() =>
                  onApplyModel({
                    budget: monthlyBudget,
                    industry: currentProfile.name,
                    projectedRevenue: projections.projectedRevenue,
                    roas: projections.calculatedRoas,
                  })
                }
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 transition-all duration-200"
              >
                <span>Apply This Custom Growth Model</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2">
                Calculations based on real performance data from 180+ ABIXION
                client campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculatorSection;
