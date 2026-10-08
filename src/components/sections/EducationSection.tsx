import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import type { SectionProps } from '../../types';

export const EducationSection: React.FC<SectionProps> = ({ id = 'education', className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 ${className}`}>
      <Container>
        <SectionHeader
          badge="Academic Background"
          title="Education"
          subtitle="Academic qualifications, degree coursework, and foundational computer science learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hoverEffect padding="lg" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <Badge variant="outline">
                  <Calendar className="w-3 h-3 inline mr-1" />
                  Academic Qualifications
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                Degree & Education Details
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                Computer Science / Software Engineering Discipline
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Academic institution details, major coursework, projects, and academic highlights will be updated here.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
