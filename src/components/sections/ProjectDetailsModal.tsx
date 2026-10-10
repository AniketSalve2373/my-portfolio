import React, { useEffect, useRef } from 'react';
import {
  X,
  ExternalLink,
  BookOpen,
  Clock,
  CheckCircle2,
  Layers,
  Sparkles,
  Code2,
  Cpu,
  UserCheck,
  FolderGit2,
  ShieldCheck,
} from 'lucide-react';
import type { ProjectItem } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and set focus when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
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

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-sm transition-opacity duration-200 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        ref={modalRef}
        onKeyDown={handleKeyDownModal}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-200 animate-modal-content"
      >
        {/* Modal Header */}
        <div className="shrink-0 p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white border-b border-slate-800/80 flex items-start justify-between gap-4">
          <div className="space-y-2 pr-2">
            <div className="flex flex-wrap items-center gap-2">
              {project.badge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <Sparkles className="w-3 h-3 text-blue-400" /> {project.badge}
                </span>
              )}
              {project.duration && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  <Clock className="w-3 h-3 text-teal-400" /> {project.duration}
                </span>
              )}
            </div>

            <h2 id="project-modal-title" className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>

            {project.architecture && (
              <div className="flex items-center gap-2 text-blue-200 text-xs sm:text-sm font-medium">
                <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{project.architecture}</span>
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close project details modal"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8 space-y-8 divide-y divide-slate-100 dark:divide-slate-800/80">
          
          {/* ARCHITECTURE & METADATA GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.projectType && (
              <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-800/60">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Project Type
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{project.projectType}</div>
              </div>
            )}
            {project.role && (
              <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800/60">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" /> Engineering Role
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{project.role}</div>
              </div>
            )}
            {project.duration && (
              <div className="p-3.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/70 dark:border-teal-800/60">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" /> Project Timeline
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{project.duration}</div>
              </div>
            )}
          </div>

          {/* PROJECT DESCRIPTION */}
          <div className="pt-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Project Overview & Objective
            </h3>
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.detailedDescription || project.shortDescription}
            </div>
          </div>

          {/* KEY FEATURES */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="pt-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Core Capabilities & Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ARCHITECTURAL HIGHLIGHTS */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="pt-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4" /> Architectural Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50/70 dark:bg-slate-800/40 p-3 rounded-lg border border-slate-200/80 dark:border-slate-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TECHNOLOGIES STACK */}
          <div className="pt-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="primary"
                  className="px-3 py-1.5 text-xs sm:text-sm font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* ACTION LINKS */}
          <div className="pt-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Project Code & Demo Access
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {project.liveUrl && project.liveUrl.trim().length > 0
                    ? 'Explore the source code on GitHub or launch the live interactive application.'
                    : project.githubUrl && project.githubUrl.trim().length > 0
                    ? 'Explore the complete source code and implementation guidelines on GitHub.'
                    : 'GitHub repository and live demo links will be available soon.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {project.githubUrl && project.githubUrl.trim().length > 0 ? (
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                    className="font-semibold shadow-sm"
                    icon={<GithubIcon className="w-4 h-4" />}
                  >
                    View Repository
                  </Button>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <GithubIcon className="w-4 h-4 text-slate-400" />
                    <span>GitHub link coming soon</span>
                  </span>
                )}

                {/* Real Live URL ONLY - Never render fake links */}
                {project.liveUrl && project.liveUrl.trim().length > 0 && (
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    className="font-semibold shadow-md"
                    icon={<ExternalLink className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Pinned Footer */}
        <div className="shrink-0 p-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
            Press <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded">ESC</kbd> or click anywhere outside to close
          </span>
          <Button onClick={onClose} variant="outline" size="sm" className="ml-auto px-5">
            Close
          </Button>
        </div>

      </div>
    </div>
  );
};
