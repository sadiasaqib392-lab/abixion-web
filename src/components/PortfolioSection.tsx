import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/marketingData';
import { PortfolioProject } from '../types';
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
  TrendingUp,
  Globe,
  Award,
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject?: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = [
    'All',
    'Website Development',
    'SEO',
    'Social Media Marketing',
    'Paid Advertising',
    'E-Commerce',
    'Branding',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  const handleOpenProject = (project: PortfolioProject) => {
    setActiveModalProject(project);
  };

  const handleCloseModal = () => {
    setActiveModalProject(null);
  };

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-850"
    >
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold shadow-sm">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Our Recent Work
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Explore some of the digital solutions and marketing strategies we
            have created to help businesses build a stronger online presence.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 ring-1 ring-cyan-400'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/40"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video sm:aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Service Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 text-[11px] font-bold rounded-full bg-slate-950/90 text-cyan-400 border border-cyan-500/30 shadow-md backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Key Metric Pill */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-emerald-300 bg-slate-950/90 rounded-lg border border-emerald-500/30 backdrop-blur-md">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span>{project.metrics}</span>
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {project.client}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white border border-slate-700 hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-md"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Action CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setSelectedCategory('All')}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-slate-900 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-slate-950/90 text-cyan-400 border border-cyan-500/40">
                  {activeModalProject.category}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-left">
              <div>
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  {activeModalProject.client}
                </p>
                <h3 className="text-2xl font-bold text-white font-heading mt-1">
                  {activeModalProject.name}
                </h3>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center gap-3">
                <Award className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-cyan-200">
                  {activeModalProject.metrics}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalProject.shortDesc}
              </p>

              {/* Deliverables */}
              {activeModalProject.deliverables && (
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Deliverables & Strategy
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeModalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    handleCloseModal();
                    if (onSelectProject) {
                      onSelectProject(activeModalProject.name);
                    }
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  <span>Build Similar Solution For My Business</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
