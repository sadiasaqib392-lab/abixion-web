import React, { useState, useEffect } from 'react';
import officialLogoImg from '../assets/images/abixion_logo_1786827007448.jpg';
import { Sparkles, FastForward } from 'lucide-react';

interface IntroSplashScreenProps {
  onComplete: () => void;
}

export const IntroSplashScreen: React.FC<IntroSplashScreenProps> = ({ onComplete }) => {
  // Sequence steps: 
  // 0 = Initializing / Ambient build-up
  // 1 = "WELCOME" (0.1s - 1.2s)
  // 2 = "TO" (1.2s - 2.1s)
  // 3 = "ABIXION" text with powerful glow & zoom (2.1s - 3.4s)
  // 4 = Official ABIXION Logo showcase (3.4s - 4.6s)
  // 5 = Seamless Curtain Exit to Homepage (4.6s - 5.1s)
  const [step, setStep] = useState<number>(1);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    // Step 1: WELCOME (starts immediately)
    const timer1 = setTimeout(() => {
      setStep(2); // Switch to "TO"
    }, 1200);

    // Step 2: TO
    const timer2 = setTimeout(() => {
      setStep(3); // Switch to "ABIXION"
    }, 2100);

    // Step 3: ABIXION text
    const timer3 = setTimeout(() => {
      setStep(4); // Switch to Official Logo
    }, 3400);

    // Step 4: Exit sequence begins
    const timer4 = setTimeout(() => {
      setIsFadingOut(true);
    }, 4600);

    // Step 5: Complete & unmount
    const timer5 = setTimeout(() => {
      onComplete();
    }, 5100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 350);
  };

  return (
    <div
      id="abixion-intro-splash"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden select-none transition-all duration-700 ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse at center, #071927 0%, #030c14 55%, #02060b 100%)',
      }}
    >
      {/* Cinematic Ambient Glow Orbs in ABIXION brand teal & orange */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-gradient-to-tr from-cyan-600/25 via-teal-500/20 to-orange-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Cinematic Grid & Vignette Overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-700/80 text-xs font-semibold backdrop-blur-md transition-all duration-300 shadow-md group"
      >
        <span>Skip Intro</span>
        <FastForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Animation Sequence Stage */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto min-h-[320px]">
        {/* STEP 1: WELCOME */}
        {step === 1 && (
          <div className="animate-in fade-in zoom-in-90 duration-700 flex flex-col items-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 text-xs font-semibold tracking-widest uppercase shadow-lg shadow-cyan-950/40">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>DIGITAL EXCELLENCE</span>
            </div>

            <h1
              className="text-5xl sm:text-7xl md:text-8xl font-black font-heading tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] transform transition-transform"
              style={{ letterSpacing: '0.18em' }}
            >
              WELCOME
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-[0_0_12px_#06b6d4]" />
          </div>
        )}

        {/* STEP 2: TO */}
        {step === 2 && (
          <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-400/90">
              PREMIER GROWTH AGENCY
            </div>

            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-orange-200 drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)]"
              style={{ letterSpacing: '0.25em' }}
            >
              TO
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 via-orange-400 to-cyan-400 rounded-full shadow-[0_0_10px_#f97316]" />
          </div>
        )}

        {/* STEP 3: ABIXION (Text with powerful zoom, glow & motion) */}
        {step === 3 && (
          <div className="animate-in fade-in zoom-in-75 duration-700 flex flex-col items-center space-y-5">
            {/* Ambient burst ring */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/30 via-cyan-500/30 to-orange-500/30 rounded-3xl blur-xl animate-pulse" />

              <h1
                className="relative text-6xl sm:text-8xl md:text-9xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-orange-400 drop-shadow-[0_15px_35px_rgba(6,182,212,0.45)]"
                style={{
                  letterSpacing: '0.04em',
                  textShadow: '0 0 40px rgba(6, 182, 212, 0.45)',
                }}
              >
                ABIXION
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-300 bg-slate-900/90 px-6 py-2 rounded-full border border-teal-500/40 shadow-xl backdrop-blur-md">
              <span className="text-cyan-400">DIGITAL MARKETING</span>
              <span className="hidden sm:inline text-orange-400">•</span>
              <span className="text-orange-400">PVT LIMITED</span>
            </div>
          </div>
        )}

        {/* STEP 4: Official ABIXION Logo Showcase */}
        {step === 4 && (
          <div className="animate-in fade-in zoom-in-90 duration-700 flex flex-col items-center space-y-6">
            {/* Logo Backdrop Card with glowing cyan & orange halo */}
            <div className="relative group">
              {/* Pulsing multi-color border glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 via-cyan-400 to-orange-500 rounded-3xl blur-lg opacity-80 animate-pulse" />

              <div className="relative flex items-center justify-center rounded-2xl bg-white p-4 sm:p-6 shadow-2xl ring-2 ring-cyan-400/40 max-w-xs sm:max-w-md">
                <img
                  src={officialLogoImg}
                  alt="ABIXION DIGITAL MARKETING PVT LIMITED Official Logo"
                  referrerPolicy="no-referrer"
                  className="h-16 sm:h-24 md:h-28 w-auto object-contain rounded-xl transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />

                {/* SVG Fallback */}
                <div
                  style={{ display: 'none' }}
                  className="items-center gap-3 px-4 py-2 text-slate-900"
                >
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-tr from-cyan-600 via-teal-600 to-orange-500 flex items-center justify-center text-white text-3xl font-black shadow-md">
                    A
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold text-2xl tracking-wider text-slate-900">
                      ABIXION
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700">
                      Digital Marketing Pvt Ltd
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Launching indicator */}
            <div className="flex items-center gap-2.5 text-xs font-semibold text-cyan-300 tracking-wider">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>Entering Digital Growth Experience...</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-orange-500 transition-all ease-linear"
          style={{
            width:
              step === 1
                ? '25%'
                : step === 2
                ? '50%'
                : step === 3
                ? '75%'
                : '100%',
            transitionDuration: step === 1 ? '1.2s' : step === 2 ? '0.9s' : step === 3 ? '1.3s' : '1.2s',
          }}
        />
      </div>
    </div>
  );
};

export default IntroSplashScreen;
