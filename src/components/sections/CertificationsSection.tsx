import React from 'react';
import { Award } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import type { SectionProps } from '../../types';

export const CertificationsSection: React.FC<SectionProps> = ({ id = 'certifications', className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 ${className}`}>
      <Container>
        <SectionHeader
          badge="Credentials"
          title="Certifications"
          subtitle="Verified technical certifications, professional training, and domain accreditations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hoverEffect padding="lg" className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Software Development & Java Certification
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Verified certification credentials and issuing organization details will be showcased here.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
