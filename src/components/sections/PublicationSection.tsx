import React from 'react';
import { BookOpen } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import type { SectionProps } from '../../types';

export const PublicationSection: React.FC<SectionProps> = ({ id = 'publication', className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 ${className}`}>
      <Container>
        <SectionHeader
          badge="Publications & Papers"
          title="Publications"
          subtitle="Academic research papers, journal publications, and technical writing contributions."
        />

        <Card hoverEffect padding="lg" className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Research Paper & Technical Publication
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                Publication Journal / Conference Details
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Abstract, citation info, DOI link, and research summary will be configured cleanly in upcoming updates.
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export const ResearchSection = PublicationSection;
