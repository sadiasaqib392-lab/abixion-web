import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/marketingData';
import {
  Star,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Quote,
  Pause,
  Play,
  CheckCircle,
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const total = TESTIMONIALS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, total]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Visible items: calculate 1 active on mobile, 2 active on md+, 3 on lg+
  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-850"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CLIENT REVIEWS & PARTNERSHIPS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            What Our Clients Say
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We believe in building long-term relationships and delivering digital
            solutions that create real value for businesses.
          </p>
        </div>

        {/* Testimonials Slider Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Featured Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 p-7 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
            {/* Top decorative elements */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-400 ml-2">
                  5.0 Verified Rating
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/60">
                  {activeTestimonial.highlight}
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="py-8 relative">
              <Quote className="absolute -top-3 -left-2 w-12 h-12 text-cyan-500/10 pointer-events-none" />
              <p className="text-slate-200 text-base sm:text-xl lg:text-2xl leading-relaxed italic relative z-10 font-normal">
                "{activeTestimonial.content}"
              </p>
            </div>

            {/* Client Profile Info */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.author}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-cyan-500/40 shadow-lg shadow-cyan-500/10"
                />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                    {activeTestimonial.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    <span className="text-cyan-400 font-medium">
                      {activeTestimonial.role}
                    </span>{' '}
                    • <span className="text-slate-300 font-semibold">{activeTestimonial.company}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium bg-emerald-950/50 px-3 py-1.5 rounded-full border border-emerald-800/40">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Client Partnership</span>
              </div>
            </div>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center justify-between mt-8">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots & Play/Pause */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to testimonial slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-8 bg-gradient-to-r from-cyan-400 to-blue-500'
                        : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? 'Pause autoplay' : 'Play autoplay'}
                className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors ml-2"
                title={isAutoPlaying ? 'Pause carousel' : 'Start auto-sliding'}
              >
                {isAutoPlaying ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Secondary Multi-Card Preview Grid below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-900">
            {TESTIMONIALS.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => goToSlide(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 text-left border ${
                  currentIndex === idx
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-lg shadow-cyan-950/30'
                    : 'bg-slate-950/60 border-slate-900 hover:border-slate-800 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-white truncate">
                      {item.author}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate">
                      {item.company}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 italic">
                  "{item.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
