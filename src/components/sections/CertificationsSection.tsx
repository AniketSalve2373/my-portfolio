import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { CertificationCard } from './CertificationCard';
import { certificationsData } from '../../config/siteConfig';
import type { SectionProps } from '../../types';

export const CertificationsSection: React.FC<SectionProps> = ({
  id = 'certifications',
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/50 ${className}`}
    >
      <Container>
        <SectionHeader
          badge="Verified Credentials"
          title="Certifications"
          subtitle="Industry-recognized professional certifications and technical accreditations issued by global technology leaders, verified via official registry portals."
        />

        {/* Recruiter Quick Verification Snapshot */}
        <div className="mb-10 sm:mb-12 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse inline-block" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                Accreditation Registry:
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                3 Authenticated Credentials (IBM & Oracle)
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary" className="px-2.5 py-1">
                <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                <span>100% Verifiable</span>
              </Badge>
              <Badge variant="emerald" className="px-2.5 py-1">
                <ShieldCheck className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                <span>Official Registries</span>
              </Badge>
              <Badge variant="secondary" className="px-2.5 py-1">
                <span>Coursera & Oracle CertView</span>
              </Badge>
            </div>
          </div>
        </div>

        {/* 3-Column Responsive Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificationsData.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>

        {/* Trust & Transparency Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>
              All certificates are linked directly to official issuing registries. Click "Verify Certificate" to validate credentials on Coursera or Oracle CertView.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CertificationsSection;
