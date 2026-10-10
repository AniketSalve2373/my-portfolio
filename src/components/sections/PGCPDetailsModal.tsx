import React, { useEffect, useRef } from 'react';
import {
  X,
  ExternalLink,
  BookOpen,
  Clock,
  Award,
  CheckCircle2,
  Sparkles,
  Building2,
  Calendar,
  Code2,
  Layers,
  GraduationCap,
} from 'lucide-react';
import type { PGCPDetails } from '../../types';
import { Button } from '../common/Button';

interface PGCPDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: PGCPDetails;
}

export const PGCPDetailsModal: React.FC<PGCPDetailsModalProps> = ({
  isOpen,
  onClose,
  details,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and focus close button when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Short timeout to ensure DOM is rendered before focusing
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap inside modal
  const handleKeyDownModal = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-200 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pgcp-modal-title"
    >
      <div
        ref={modalRef}
        onKeyDown={handleKeyDownModal}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-200 animate-modal-content"
      >
        {/* Modal Pinned Header */}
        <div className="shrink-0 p-5 sm:p-6 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white border-b border-blue-800/50 flex items-start justify-between gap-4">
          <div className="space-y-1.5 pr-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <Sparkles className="w-3 h-3 text-blue-400" /> C-DAC Post Graduate Specialization
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                <Calendar className="w-3 h-3 text-teal-400" /> Completed: {details.completedYear}
              </span>
            </div>
            <h2 id="pgcp-modal-title" className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {details.programme}
            </h2>
            <div className="flex items-center gap-2 text-blue-200 text-xs sm:text-sm font-medium">
              <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{details.institution}</span>
            </div>
          </div>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close programme details modal"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8 space-y-8 divide-y divide-slate-100 dark:divide-slate-800/80">
          
          {/* STATISTICS GRID */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Award className="w-4 h-4" /> Programme Key Statistics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-800/60 text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">Duration</div>
                <div className="text-sm sm:text-base font-bold text-blue-900 dark:text-blue-200">{details.statistics.duration}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/70 dark:border-teal-800/60 text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">Format</div>
                <div className="text-sm sm:text-base font-bold text-teal-900 dark:text-teal-200">{details.statistics.format}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800/60 text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">Total Training</div>
                <div className="text-sm sm:text-base font-bold text-indigo-900 dark:text-indigo-200">{details.statistics.totalHours}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-violet-50/70 dark:bg-violet-950/40 border border-violet-200/70 dark:border-violet-800/60 text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">Academic Weight</div>
                <div className="text-sm sm:text-base font-bold text-violet-900 dark:text-violet-200">{details.statistics.credits}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/60 text-center col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">Self-Study</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200">{details.statistics.selfStudy}</div>
              </div>
            </div>
          </div>

          {/* PROGRAMME DESCRIPTION */}
          <div className="pt-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Programme Overview & Description
            </h3>
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {details.description}
            </div>
          </div>

          {/* CORE CURRICULUM */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Core Curriculum (11 Intensive Modules)
              </h3>
              <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">Total: 1200 Hours</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.coreCurriculum.map((module, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-700 transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {module.title}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold shrink-0">
                    <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    {module.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS DEVELOPED */}
          <div className="pt-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Skills Developed
            </h3>
            <div className="flex flex-wrap gap-2">
              {details.skillsDeveloped.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 border border-blue-200/80 dark:border-blue-800/80 text-xs sm:text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* OFFICIAL C-DAC LINK SECTION */}
          <div className="pt-6">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-teal-50 to-indigo-50 dark:from-slate-800 dark:via-blue-950/40 dark:to-slate-800 border border-blue-200 dark:border-blue-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 flex items-center justify-center sm:justify-start gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Official C-DAC Admission Portal
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Explore official course structure, eligibility, and C-DAC ACTS post-graduate specifications.
                </p>
              </div>
              <Button
                href={details.officialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="shrink-0 font-bold shadow-md hover:shadow-lg transition-shadow"
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="right"
              >
                {details.officialLink.text}
              </Button>
            </div>
          </div>

        </div>

        {/* Modal Pinned Footer */}
        <div className="shrink-0 p-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
            Press <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded">ESC</kbd> or click anywhere outside to close
          </span>
          <Button
            onClick={onClose}
            variant="outline"
            size="sm"
            className="ml-auto px-5"
          >
            Close
          </Button>
        </div>

      </div>
    </div>
  );
};
