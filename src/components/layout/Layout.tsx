import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { EducationSection } from '../sections/EducationSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';
import { CertificationsSection } from '../sections/CertificationsSection';
import { ResumeSection } from '../sections/ResumeSection';
import { PublicationSection } from '../sections/PublicationSection';
import { ContactSection } from '../sections/ContactSection';

import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Layout: React.FC = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transition-all"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <HeroSection />
        <AboutSection id="about" className="reveal-on-scroll" />
        <EducationSection id="education" className="reveal-on-scroll" />
        <ExperienceSection id="experience" className="reveal-on-scroll" />
        <ProjectsSection id="projects" className="reveal-on-scroll" />
        <SkillsSection id="skills" className="reveal-on-scroll" />
        <CertificationsSection id="certifications" className="reveal-on-scroll" />
        <ResumeSection id="resume" className="reveal-on-scroll" />
        <PublicationSection id="publication" className="reveal-on-scroll" />
        <ContactSection id="contact" className="reveal-on-scroll" />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
