import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import type { SectionProps } from '../../types';

export const ProjectsSection: React.FC<SectionProps> = ({ id = 'projects', className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 ${className}`}>
      <Container>
        <SectionHeader
          badge="Featured Engineering"
          title="Projects"
          subtitle="Software projects showcasing Java full-stack development, database design, microservices, and modern frontend interfaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card hoverEffect padding="lg" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="emerald">Full Stack</Badge>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Java Full-Stack Application
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Backend REST services, Spring Boot integration, data persistence, and interactive user interface.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">Spring Boot</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">SQL</Badge>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Project links & repository details ready to be populated.
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
