import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  School,
  Calendar,
  Clock,
  Sparkles,
  Building2,
  BadgeCheck,
  ChevronRight,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { PGCPDetailsModal } from './PGCPDetailsModal';
import { educationData } from '../../config/siteConfig';
import type { SectionProps } from '../../types';

export const EducationSection: React.FC<SectionProps> = ({ id = 'education', className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pgcp = educationData.find((e) => e.id === 'pgcp-ac');
  const be = educationData.find((e) => e.id === 'be-cse');
  const hsc = educationData.find((e) => e.id === 'hsc');
  const ssc = educationData.find((e) => e.id === 'ssc');

  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/50 ${className}`}>
      <Container>
        <SectionHeader
          badge="Academic Qualifications"
          title="Education"
          subtitle="Post-graduate certificate specialization, engineering degree, and foundational academic journey."
        />

        {/* Recruiter Quick Snapshot Bar */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse inline-block" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Recruiter Quick Summary:</span>
              <span className="text-slate-600 dark:text-slate-400">Post Graduate (C-DAC 2026) & B.E. CSE Graduate (2025)</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 font-mono">
              <Badge variant="primary" className="px-2.5 py-1">B.E. CGPA: 8.34/10</Badge>
              <Badge variant="emerald" className="px-2.5 py-1">C-DAC: 1200 Hours</Badge>
              <Badge variant="secondary" className="px-2.5 py-1">HSC: 86.50%</Badge>
              <Badge variant="secondary" className="px-2.5 py-1">SSC: 81.80%</Badge>
            </div>
          </div>
        </div>

        {/* Education Timeline / Cards Stack */}
        <div className="space-y-8">
          {/* ENTRY 1: PGCP-AC (C-DAC) - FEATURED SPECIAL TREATMENT */}
          {pgcp && (
            <div className="reveal-card relative group">
              {/* Outer Decorative Gradient Border & Glow */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 opacity-30 group-hover:opacity-60 blur-xs transition duration-300 pointer-events-none" />

              <div className="relative rounded-2xl bg-gradient-to-br from-blue-50/90 via-white to-teal-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 border border-blue-300/80 dark:border-blue-800/80 p-6 sm:p-8 md:p-10 shadow-lg">
                
                {/* Top Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-600 text-white shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" /> Featured Post Graduate Specialization
                    </span>
                  </div>
                  <Badge variant="outline" className="px-3 py-1 font-mono font-medium border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                    <Calendar className="w-3.5 h-3.5 mr-1 inline" /> Completed: {pgcp.completedYear}
                  </Badge>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                    <Award className="w-7 h-7" />
                  </div>

                  {/* Main Content Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                        {pgcp.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">
                        <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{pgcp.institution}</span>
                      </div>
                    </div>

                    {/* Program Type Banner - Clear Rule Compliance */}
                    <div className="p-3.5 rounded-xl bg-blue-100/70 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/80">
                      <div className="flex items-center gap-2 text-blue-950 dark:text-blue-200 font-bold text-sm sm:text-base">
                        <BadgeCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{pgcp.programType}</span>
                      </div>
                    </div>

                    {/* Rigor & Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-0.5">Duration</div>
                        <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">{pgcp.duration}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-0.5">Total Hours</div>
                        <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">{pgcp.hours}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-0.5">Academic Weight</div>
                        <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">{pgcp.credits}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-0.5">Format</div>
                        <div className="text-sm sm:text-base font-bold text-teal-600 dark:text-teal-400">Full-Time</div>
                      </div>
                    </div>

                    {/* Action Bar & Self study note */}
                    <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                        <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                        <span>{pgcp.selfStudyHours}</span>
                      </div>
                      
                      <Button
                        onClick={() => setIsModalOpen(true)}
                        variant="primary"
                        size="md"
                        className="font-bold shadow-sm hover:shadow transition-all text-xs sm:text-sm px-4 py-2"
                        icon={<ChevronRight className="w-4 h-4" />}
                        iconPosition="right"
                      >
                        Programme Details
                      </Button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

        {/* PGCP Details Modal */}
        {pgcp?.details && (
          <PGCPDetailsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            details={pgcp.details}
          />
        )}

          {/* ENTRY 2: B.E. - COMPUTER SCIENCE AND ENGINEERING */}
          {be && (
            <Card hoverEffect padding="lg" className="reveal-card relative border-slate-200 dark:border-slate-800">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/60 dark:border-blue-900/50">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {be.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {be.institution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {be.affiliation}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 self-start">
                  <Badge variant="outline" className="px-3 py-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 mr-1 inline" /> Completed: {be.completedYear}
                  </Badge>
                </div>
              </div>

              {/* B.E. Grade Highlights */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">CGPA:</span>
                  <span className="text-sm font-bold text-blue-700 dark:text-blue-300 font-mono">{be.cgpa}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800/60">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Percentage:</span>
                  <span className="text-sm font-bold text-teal-700 dark:text-teal-300 font-mono">{be.percentage}</span>
                </div>
              </div>
            </Card>
          )}

          {/* GRID FOR HSC & SSC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ENTRY 3: HSC */}
            {hsc && (
              <Card hoverEffect padding="lg" className="reveal-card border-slate-200 dark:border-slate-800">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-200/60 dark:border-amber-900/50">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <Badge variant="outline" className="px-2.5 py-0.5 font-mono text-xs">
                    Completed: {hsc.completedYear}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {hsc.degree}
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {hsc.institution}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {hsc.affiliation}
                </p>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Score</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60 text-xs font-bold font-mono">
                    Percentage: {hsc.percentage}
                  </span>
                </div>
              </Card>
            )}

            {/* ENTRY 4: SSC */}
            {ssc && (
              <Card hoverEffect padding="lg" className="reveal-card border-slate-200 dark:border-slate-800">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-200/60 dark:border-indigo-900/50">
                    <School className="w-5 h-5" />
                  </div>
                  <Badge variant="outline" className="px-2.5 py-0.5 font-mono text-xs">
                    Completed: {ssc.completedYear}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {ssc.degree}
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {ssc.institution}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {ssc.affiliation}
                </p>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Score</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/60 text-xs font-bold font-mono">
                    Percentage: {ssc.percentage}
                  </span>
                </div>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EducationSection;
