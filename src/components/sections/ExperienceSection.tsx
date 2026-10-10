import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Building2,
  MapPin,
  Calendar,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  UserCheck,
  FileCheck2,
  Sparkles,
  Layers,
  Brain,
  BadgeCheck,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { workExperienceData, professionalTrainingData } from '../../config/siteConfig';
import type { SectionProps } from '../../types';

export const ExperienceSection: React.FC<SectionProps> = ({ id = 'experience', className = '' }) => {
  // Track open state for training card details
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'devsecops-nielit': false,
    'generation-india-fsd': false,
  });

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/50 ${className}`}>
      <Container>
        <SectionHeader
          badge="Career & Training"
          title="Experience & Training"
          subtitle="Practical industry work experience and specialized, hands-on professional training programs."
        />

        {/* SECTION SUB-CONTAINER STACK */}
        <div className="space-y-16">
          {/* ========================================================================= */}
          {/* 1. SUBSECTION A: WORK EXPERIENCE                                          */}
          {/* ========================================================================= */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-2xs">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  Work Experience
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Verified internships and professional engineering roles
                </p>
              </div>
            </div>

            {/* Work Experience Cards List */}
            <div className="relative pl-4 sm:pl-6 md:pl-8 border-l-2 border-blue-200 dark:border-blue-900/50 space-y-8">
              {workExperienceData.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[25px] sm:-left-[33px] md:-left-[41px] top-6 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-slate-50 dark:border-slate-950 group-hover:scale-125 transition-transform duration-200 shadow-xs" />

                  <Card padding="lg" hoverEffect className="reveal-card relative overflow-hidden border-slate-200 dark:border-slate-800 shadow-xs">
                    {/* Top Role & Company Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-100 dark:border-slate-800/60">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
                            Internship
                          </span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                          {exp.role}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-400 font-medium">
                          <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
                            <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <Badge variant="outline" className="w-fit px-3 py-1.5 font-mono text-xs font-semibold border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 shrink-0">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-600 dark:text-blue-400 inline" />
                        {exp.duration}
                      </Badge>
                    </div>

                    {/* Responsibilities List */}
                    <div className="mb-6 space-y-3">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                        Key Responsibilities & Contributions
                      </h5>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used Badges */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2.5">
                        Technologies & Tools
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="primary" className="px-3 py-1 text-xs">
                            <Code2 className="w-3 h-3 mr-1" />
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. SUBSECTION B: PROFESSIONAL TRAINING                                    */}
          {/* ========================================================================= */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 shadow-2xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  Professional Training
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Specialized instructor-led coursework, tech bootcamps & certification programs
                </p>
              </div>
            </div>

            {/* Training Cards Grid / Stack */}
            <div className="space-y-8">
              {professionalTrainingData.map((training) => {
                const isExpanded = !!expandedCards[training.id];

                return (
                  <Card
                    key={training.id}
                    padding="lg"
                    hoverEffect
                    className="reveal-card relative overflow-hidden border-slate-200 dark:border-slate-800 shadow-xs transition-all duration-300"
                  >
                    {/* Top Training Non-Employment Banner */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60">
                        <BadgeCheck className="w-3.5 h-3.5" /> Professional Training Program
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                        {training.duration}
                      </span>
                    </div>

                    {/* CARD HEADER DETAILS */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                      <div className="space-y-2 flex-1">
                        <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                          {training.roleOrProgram}
                        </h4>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-700 dark:text-slate-300">
                          <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                            <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                            <span>{training.organization}</span>
                          </div>
                          {training.collaborationOrPartner && (
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/70 px-2.5 py-0.5 rounded-md text-xs font-medium">
                              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span>In Collaboration With / Partner: <strong className="text-slate-800 dark:text-slate-200">{training.collaborationOrPartner}</strong></span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* INITIAL SUMMARY HIGHLIGHTS (DEVSECOPS VS GENERATION INDIA) */}
                    {training.type === 'devsecops' && training.devSecOpsDetails && (
                      <div className="space-y-4 mb-6">
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {training.devSecOpsDetails.description}
                        </p>
                        
                        {/* Summary Badges Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-center">
                            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Duration</div>
                            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{training.devSecOpsDetails.trainingDuration}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 text-center">
                            <div className="text-[11px] font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider">Grade</div>
                            <div className="text-sm font-bold text-teal-700 dark:text-teal-300">Grade {training.devSecOpsDetails.grade}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-center">
                            <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider">Score</div>
                            <div className="text-sm font-bold text-blue-700 dark:text-blue-300">{training.devSecOpsDetails.performance}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-center">
                            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Mode</div>
                            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">{training.devSecOpsDetails.mode}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {training.type === 'generation-india' && training.generationIndiaDetails && (
                      <div className="space-y-4 mb-6">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-center">
                            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Training Partner</div>
                            <div className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{training.generationIndiaDetails.trainingPartner}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-center">
                            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Centre</div>
                            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.centre}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-center">
                            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Batch ID</div>
                            <div className="text-xs font-bold font-mono text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.batchId}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-center">
                            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Issue Date</div>
                            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.issueDate}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* EXPAND / COLLAPSE INTERACTION BUTTON */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex justify-end">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCard(training.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`details-${training.id}`}
                        icon={isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        iconPosition="right"
                        className="text-xs font-semibold"
                      >
                        {isExpanded ? 'Hide Details' : 'View Details'}
                      </Button>
                    </div>

                    {/* EXPANDED CONTENT VIEW */}
                    {isExpanded && (
                      <div
                        id={`details-${training.id}`}
                        className="mt-6 pt-6 border-t-2 border-dashed border-slate-200 dark:border-slate-800 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300"
                      >
                        {/* EXPANDED DEVSECOPS DETAILS */}
                        {training.type === 'devsecops' && training.devSecOpsDetails && (
                          <div className="space-y-6">
                            {/* Complete Course Information Table / Spec Grid */}
                            <div>
                              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-3 flex items-center gap-1.5">
                                <FileCheck2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                                Complete Course & Certificate Information
                              </h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm bg-slate-50 dark:bg-slate-900/90 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Course: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.devSecOpsDetails.course}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Training Duration: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.devSecOpsDetails.trainingDuration}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Mode: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.devSecOpsDetails.mode}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Performance: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.devSecOpsDetails.performance}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Grade: </span>
                                  <span className="font-bold text-teal-700 dark:text-teal-300">Grade {training.devSecOpsDetails.grade}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Certificate No.: </span>
                                  <span className="font-bold font-mono text-slate-900 dark:text-slate-100">{training.devSecOpsDetails.certificateNo}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Roll No.: </span>
                                  <span className="font-bold font-mono text-slate-900 dark:text-slate-100">{training.devSecOpsDetails.rollNo}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Date of Issue: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.devSecOpsDetails.dateOfIssue}</span>
                                </div>
                                <div className="md:col-span-2 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Issuing Bodies: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.devSecOpsDetails.issuingBodies}</span>
                                </div>
                              </div>
                            </div>

                            {/* Course Curriculum & Key Learnings */}
                            <div>
                              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-3 flex items-center gap-1.5">
                                <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                                Course Curriculum & Key Learning / Hands-On
                              </h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                                {training.devSecOpsDetails.keyLearnings.map((learning, lIdx) => (
                                  <div
                                    key={lIdx}
                                    className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2 text-xs font-medium text-slate-800 dark:text-slate-200"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                                    <span>{learning}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* EXPANDED GENERATION INDIA DETAILS */}
                        {training.type === 'generation-india' && training.generationIndiaDetails && (
                          <div className="space-y-6">
                            {/* Program Summary Specifications */}
                            <div>
                              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-3 flex items-center gap-1.5">
                                <Award className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                                Complete Program Information
                              </h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm bg-slate-50 dark:bg-slate-900/90 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Program: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.program}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Issuer: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.issuer}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Recipient: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.recipient}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Program Duration: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.duration}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Training Partner: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.trainingPartner}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Centre Name: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.centre}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Batch ID: </span>
                                  <span className="font-bold font-mono text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.batchId}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Issue Date: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.issueDate}</span>
                                </div>
                                <div className="md:col-span-2 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">Signatory: </span>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{training.generationIndiaDetails.signatory}</span>
                                </div>
                              </div>
                            </div>

                            {/* SKILLS COVERED (CATEGORIZED INTO TECHNICAL & BEHAVIOR) */}
                            <div className="space-y-4">
                              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1.5">
                                <Brain className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                                Skills Covered
                              </h5>

                              {/* Technical Skills Category */}
                              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono">
                                  <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                  Technical Skills ({training.generationIndiaDetails.technicalSkills.length})
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {training.generationIndiaDetails.technicalSkills.map((tech) => (
                                    <Badge key={tech} variant="primary" className="px-2.5 py-1 text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Behavior & Mindsets Category */}
                              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono">
                                  <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                  Behavior & Mindsets ({training.generationIndiaDetails.behavioralSkills.length})
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {training.generationIndiaDetails.behavioralSkills.map((behavior) => (
                                    <Badge key={behavior} variant="emerald" className="px-2.5 py-1 text-xs">
                                      {behavior}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
