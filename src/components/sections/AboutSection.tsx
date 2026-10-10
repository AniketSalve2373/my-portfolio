import React from 'react';
import {
  Code,
  Server,
  GraduationCap,
  UserCheck,
  Brain,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { siteConfig } from '../../config/siteConfig';
import type { SectionProps } from '../../types';

export const AboutSection: React.FC<SectionProps> = ({ id = 'about', className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-950/40 ${className}`}>
      <Container>
        <SectionHeader
          badge="Background & Profile"
          title="About Me"
          subtitle="Software Developer specializing in Java and Full Stack web solutions with a solid engineering foundation."
        />

        {/* Featured Introduction Card */}
        <div className="mb-12">
          <div className="reveal-card relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 md:p-10 shadow-xs transition-all duration-300 hover:shadow-md">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600" />
            
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="emerald" className="px-3 py-1">
                    <UserCheck className="w-3.5 h-3.5 mr-1" /> Ready for Engineering Roles
                  </Badge>
                  <Badge variant="primary" className="px-3 py-1">
                    <GraduationCap className="w-3.5 h-3.5 mr-1" /> C-DAC & B.E. Graduate
                  </Badge>
                </div>

                <blockquote className="text-base sm:text-lg md:text-xl text-slate-800 dark:text-slate-200 font-normal leading-relaxed text-left border-l-4 border-blue-600 dark:border-blue-500 pl-4 sm:pl-6 my-2">
                  "{siteConfig.introduction}"
                </blockquote>

                <div className="pt-2 flex flex-wrap gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Java Development
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-900/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" /> Full Stack Architecture
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" /> Problem Solving
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars / Core Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card hoverEffect padding="lg" className="reveal-card flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-200/60 dark:border-blue-900/50">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Backend & Core Java</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Focused on object-oriented software design, RESTful web services, database schema design, and Spring-based enterprise backend systems.
              </p>
            </div>
          </Card>

          <Card hoverEffect padding="lg" className="reveal-card flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-200/60 dark:border-teal-900/50">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Full Stack Engineering</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Building accessible, modern client user interfaces using React, JavaScript, and Tailwind CSS seamlessly connected with backend APIs.
              </p>
            </div>
          </Card>

          <Card hoverEffect padding="lg" className="reveal-card flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-200/60 dark:border-indigo-900/50">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Systems & Problem Solving</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Passionate about learning new technologies, analyzing computational problems, and transforming requirements into clean software solutions.
              </p>
            </div>
          </Card>
        </div>

        {/* Quick Fast Facts / Recruiter Snapshot Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">1200+</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Hours C-DAC Rigorous Training</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400 mb-1">8.34</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">B.E. CSE Graduation CGPA</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">2026</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">C-DAC PG Certificate Year</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1">Java</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Full Stack Core Focus</div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default AboutSection;
