import React from 'react';
import {
  FolderGit2,
  ExternalLink,
  Clock,
  Layers,
  Info,
  Sparkles,
  Cpu,
} from 'lucide-react';
import type { ProjectItem } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

const GithubIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
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

interface ProjectCardProps {
  project: ProjectItem;
  onViewDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <Card
      padding="lg"
      className="reveal-card group relative flex flex-col justify-between h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-400/60 dark:hover:border-blue-500/50"
    >
      <div>
        {/* Card Header: Icon & Badges */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/80 dark:to-indigo-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
            {project.badge?.includes('AI') ? (
              <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            ) : project.badge?.includes('.NET') ? (
              <Cpu className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            ) : (
              <FolderGit2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 justify-end">
            {project.duration && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Clock className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                {project.duration}
              </span>
            )}
            {project.badge && (
              <Badge variant={project.featured ? 'primary' : 'secondary'}>
                {project.badge}
              </Badge>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2.5 line-clamp-1">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed line-clamp-3 min-h-[4.25rem]">
          {project.shortDescription}
        </p>

        {/* Architecture / Type Metadata tag */}
        {project.architecture && (
          <div className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-200/70 dark:border-slate-700/60">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="truncate">{project.architecture}</span>
          </div>
        )}

        {/* Technology Badges */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Technologies
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <Badge key={idx} variant="outline" className="text-[11px] bg-slate-50/50 dark:bg-slate-800/30">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Action Buttons */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5">
        {/* Left: View Details interaction */}
        <Button
          onClick={() => onViewDetails(project)}
          variant="outline"
          size="sm"
          className="font-medium text-xs shadow-xs hover:border-blue-400 dark:hover:border-blue-600"
          icon={<Info className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
        >
          View Details
        </Button>

        {/* Right: GitHub & Live Demo (ONLY IF REAL LIVE URL EXISTS) */}
        <div className="flex items-center gap-2">
          {project.githubUrl && project.githubUrl.trim().length > 0 ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="View Source Code on GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800 cursor-not-allowed"
              title="GitHub repository link coming soon"
            >
              <GithubIcon className="w-3.5 h-3.5 opacity-50" />
              <span className="hidden sm:inline">GitHub link coming soon</span>
              <span className="sm:hidden">Coming soon</span>
            </span>
          )}

          {/* Real Live Demo link ONLY - strict check to prevent fake URLs */}
          {project.liveUrl && project.liveUrl.trim().length > 0 && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="View Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
