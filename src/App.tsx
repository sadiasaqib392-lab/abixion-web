import React, { useState } from 'react';
import IntroSplashScreen from './components/IntroSplashScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import RoiCalculatorSection from './components/RoiCalculatorSection';
import AuditToolSection from './components/AuditToolSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import GrowthProcessSection from './components/GrowthProcessSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { ServiceItem } from './types';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [auditWebsite, setAuditWebsite] = useState<string>('');
  const [calculatorBudget, setCalculatorBudget] = useState<number | undefined>();
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service.title);
    scrollToSection('contact');
  };

  const handleSelectCaseStudy = (caseTitle: string) => {
    setSelectedService(`Case Study Strategy: ${caseTitle}`);
    scrollToSection('contact');
  };

  const handleApplyRoiModel = (details: {
    budget: number;
    industry: string;
    projectedRevenue: number;
    roas: number;
  }) => {
    setCalculatorBudget(details.budget);
    setSelectedService(
      `Custom Growth Plan (${details.industry} - Target $${details.projectedRevenue.toLocaleString()} / mo)`
    );
    scrollToSection('contact');
  };

  const handleScheduleFullAudit = (website: string) => {
    setAuditWebsite(website);
    setSelectedService('15-Page Full Forensic Growth Audit');
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white flex flex-col justify-between">
      {/* Animated Cinematic Intro Splash Screen */}
      {showIntro && (
        <IntroSplashScreen onComplete={() => setShowIntro(false)} />
      )}

      {/* Official Top Navigation Header with ABIXION Logo */}
      <Navbar
        onOpenAudit={() => scrollToSection('growth-audit')}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection
          onOpenAudit={() => scrollToSection('growth-audit')}
          onOpenContact={() => scrollToSection('contact')}
          onScrollToCalculator={() => scrollToSection('calculator')}
        />

        <ServicesSection onSelectService={handleSelectService} />

        <PortfolioSection
          onSelectProject={(projName) => {
            setSelectedService(`Custom Solution Based on: ${projName}`);
            scrollToSection('contact');
          }}
        />

        <CaseStudiesSection onSelectCaseStudy={handleSelectCaseStudy} />

        <GrowthProcessSection
          onOpenConsultation={() => scrollToSection('contact')}
        />

        <RoiCalculatorSection onApplyModel={handleApplyRoiModel} />

        <AuditToolSection onScheduleFullAudit={handleScheduleFullAudit} />

        <TestimonialsSection />

        <FaqSection />

        <ContactSection
          initialService={selectedService}
          initialWebsite={auditWebsite}
          initialBudget={calculatorBudget}
        />
      </main>

      {/* Official Footer with ABIXION Logo */}
      <Footer
        onOpenPrivacy={() =>
          setLegalModalState({ isOpen: true, type: 'privacy' })
        }
        onOpenTerms={() => setLegalModalState({ isOpen: true, type: 'terms' })}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Legal & Compliance Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={() => setLegalModalState({ isOpen: false, type: null })}
      />
    </div>
  );
}
