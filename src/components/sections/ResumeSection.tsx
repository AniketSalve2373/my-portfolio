import React from 'react';
import { FileDown, Eye, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import type { SectionProps } from '../../types';

export const ResumeSection: React.FC<SectionProps> = ({ id = 'resume', className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 ${className}`}>
      <Container>
        <SectionHeader
          badge="Curriculum Vitae"
          title="Resume"
          subtitle="Download or view my complete curriculum vitae highlighting technical skills and experience."
        />

        <Card padding="lg" className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <FileDown className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Aniket Madhukar Salve — Resume
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Software Developer | Java Full Stack Developer
              </p>
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Professional Format
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Recruiter Verified
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button variant="primary" icon={<FileDown className="w-4 h-4" />}>
              Download PDF
            </Button>
            <Button variant="outline" icon={<Eye className="w-4 h-4" />}>
              Preview
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
};
