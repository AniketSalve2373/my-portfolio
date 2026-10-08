import React from 'react';
import { Calendar } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import type { SectionProps } from '../../types';

export const ExperienceSection: React.FC<SectionProps> = ({ id = 'experience', className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 ${className}`}>
      <Container>
        <SectionHeader
          badge="Career History"
          title="Professional Experience"
          subtitle="Software development experience, internships, and engineering contributions."
        />

        <div className="relative pl-6 md:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
          <Card padding="md" className="relative">
            <div className="absolute -left-[31px] md:-left-[39px] top-6 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Software Developer / Java Full Stack Developer
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Full Stack Engineering & Application Development
                </p>
              </div>
              <Badge variant="outline" className="w-fit">
                <Calendar className="w-3 h-3 inline mr-1" />
                Present / Career Timeline
              </Badge>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Detailed professional background, key achievements, tech stack responsibilities, and team contributions will be configured with exact verified details.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
};
