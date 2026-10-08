import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { EducationSection } from '../sections/EducationSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';
import { CertificationsSection } from '../sections/CertificationsSection';
import { ResearchSection } from '../sections/ResearchSection';
import { ResumeSection } from '../sections/ResumeSection';
import { ContactSection } from '../sections/ContactSection';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ResearchSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
