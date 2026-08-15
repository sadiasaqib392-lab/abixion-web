import React from 'react';

// Official company logo asset generated/uploaded
import officialLogoImg from '../assets/images/abixion_logo_1786827007448.jpg';

interface AbixionLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'header' | 'footer' | 'default';
  showSubtitle?: boolean;
}

export const AbixionLogo: React.FC<AbixionLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'default',
  showSubtitle = true,
}) => {
  // Dimensions based on size
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  const imgHeightClasses = {
    sm: 'h-7 w-auto max-w-[140px]',
    md: 'h-9 sm:h-10 w-auto max-w-[190px]',
    lg: 'h-12 sm:h-14 w-auto max-w-[240px]',
    xl: 'h-16 sm:h-18 w-auto max-w-[320px]',
  };

  return (
    <div
      id="abixion-official-logo"
      className={`inline-flex items-center gap-3 transition-transform duration-300 hover:opacity-95 ${className}`}
    >
      {/* Clean container backdrop for logo prominence as specified */}
      <div className="relative flex items-center justify-center rounded-xl bg-white/95 p-1.5 sm:p-2 shadow-sm ring-1 ring-white/20 transition-all duration-300 hover:ring-cyan-400/50 hover:shadow-cyan-500/10">
        <img
          src={officialLogoImg}
          alt="ABIXION DIGITAL MARKETING PVT LIMITED Official Logo"
          referrerPolicy="no-referrer"
          className={`${imgHeightClasses[size]} object-contain rounded-lg transition-transform duration-300`}
          onError={(e) => {
            // High-fidelity fallback if raster load ever encounters network restrictions
            const target = e.currentTarget;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />

        {/* Vector SVG Fallback with official typography */}
        <div
          style={{ display: 'none' }}
          className="items-center gap-2 px-1 text-slate-900"
          aria-label="ABIXION DIGITAL MARKETING PVT LIMITED"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-700 text-white shadow-sm font-black text-lg">
            <span>A</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white"></span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm tracking-wider text-slate-900 leading-none">
              ABIXION
            </span>
            <span className="text-[8px] font-bold tracking-tight text-cyan-700 uppercase leading-tight mt-0.5">
              Digital Marketing Pvt Ltd
            </span>
          </div>
        </div>
      </div>

      {/* Optional typography tag next to logo for clarity on larger headers */}
      {showSubtitle && (
        <div className="hidden lg:flex flex-col text-left justify-center">
          <span className="text-base font-extrabold tracking-tight text-white leading-none font-heading flex items-center gap-1.5">
            ABIXION
            <span className="inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 rounded">
              Pvt Ltd
            </span>
          </span>
          <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400 mt-1">
            Digital Marketing Agency
          </span>
        </div>
      )}
    </div>
  );
};

export default AbixionLogo;
