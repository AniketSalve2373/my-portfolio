import React, { useState } from 'react';
import {
  FileDown,
  Eye,
  CheckCircle2,
  ExternalLink,
  FileText,
  Sparkles,
  Download,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { resumeData } from '../../config/resumeData';
import { ResumeModal } from './ResumeModal';
import type { SectionProps } from '../../types';

export const ResumeSection: React.FC<SectionProps> = ({ id = 'resume', className = '' }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-950/40 ${className}`}
    >
      <Container>
        <SectionHeader
          badge="Curriculum Vitae"
          title="Resume"
          subtitle="Review my professional qualifications, technical capabilities, and verified credentials, or download a direct PDF copy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Details & Actions (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Card padding="lg" className="reveal-card flex flex-col gap-6 relative overflow-hidden">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Candidate Info Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md shrink-0">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {resumeData.candidateName}
                    </h3>
                    <Badge variant="emerald" className="text-[11px] py-0.5">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Updated
                    </Badge>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5 font-mono">
                    {resumeData.role}
                  </p>
                </div>
              </div>

              {/* Headline description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {resumeData.headline}
              </p>

              {/* Key Resume Highlights Checklist */}
              <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <span>Resume Highlights & Focus Areas</span>
                  <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {resumeData.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ATS & Professional Standards Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> ATS-Friendly Formatting
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Standard PDF Standard
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Industry Verified
                </span>
              </div>

              {/* Action Buttons: View Resume & Download Resume */}
              <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
                  {/* Button 1: View Resume (Live online viewer modal) */}
                  <Button
                    onClick={() => setIsViewerOpen(true)}
                    variant="primary"
                    size="lg"
                    icon={<Eye className="w-4 h-4" />}
                    className="flex-1 shadow-md hover:shadow-lg transition-all"
                  >
                    View Resume
                  </Button>

                  {/* Button 2: Download Resume (Direct PDF Download) */}
                  <Button
                    href={resumeData.filePath}
                    download={resumeData.fileName}
                    variant="outline"
                    size="lg"
                    icon={<FileDown className="w-4 h-4" />}
                    className="flex-1 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all"
                  >
                    Download Resume
                  </Button>
                </div>

                {/* Sub-actions & Quick Path Display */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 text-[11px] font-mono">
                    File: <code className="text-slate-700 dark:text-slate-300 font-semibold">{resumeData.fileName}</code>
                  </span>
                  <a
                    href={resumeData.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Interactive Document Preview Mockup (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Card
              padding="none"
              className="reveal-card group relative overflow-hidden border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              onClick={() => setIsViewerOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsViewerOpen(true);
                }
              }}
              aria-label="Click to open full resume in live PDF viewer"
            >
              {/* Document Header Bar Mockup */}
              <div className="bg-slate-100 dark:bg-slate-800/90 px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-300 font-medium ml-2 truncate">
                    {resumeData.fileName}
                  </span>
                </div>
                <Badge variant="secondary" className="text-[10px] py-0">
                  PDF
                </Badge>
              </div>

              {/* Document Content Mockup */}
              <div className="p-5 sm:p-6 bg-white dark:bg-slate-900/60 flex flex-col gap-4 select-none">
                {/* Header in Mockup */}
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <p className="text-base font-bold text-slate-900 dark:text-slate-100 font-sans tracking-tight">
                    {resumeData.candidateName}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-mono font-medium">
                    {resumeData.role}
                  </p>
                </div>

                {/* Section Blocks in Mockup */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Education & Specialization</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        C-DAC PGCP-AC & B.E. Computer Science and Engineering
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Code2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Full-Stack Tech Stack</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Java, Spring Boot, React, MySQL, REST APIs, Microservices
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Experience & DevSecOps</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Elite Softwares, NIELIT Delhi & Kyndryl, Generation India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Research & Certifications</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        IJTE Publication No. 44, IBM Java & GenAI, Oracle Cloud AI
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover overlay button */}
                <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    Click to Open Live PDF
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Interactive Viewer
                  </span>
                </div>
              </div>
            </Card>

            {/* Quick Access Utility Box */}
            <div className="bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-4 text-xs text-slate-600 dark:text-slate-400 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-blue-500" />
                  Direct Asset Path
                </span>
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">
                  Active
                </span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Resume PDF is located in the project's public folder at{' '}
                <code className="font-mono text-slate-800 dark:text-slate-200 bg-slate-200/70 dark:bg-slate-800 px-1 py-0.5 rounded">
                  public/resume/Aniket-Madhukar-Salve-Resume.pdf
                </code>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Live Online Resume Modal Viewer */}
      {isViewerOpen && (
        <ResumeModal
          isOpen={isViewerOpen}
          onClose={() => setIsViewerOpen(false)}
          pdfUrl={resumeData.filePath}
          fileName={resumeData.fileName}
          candidateName={resumeData.candidateName}
        />
      )}
    </section>
  );
};

export default ResumeSection;
