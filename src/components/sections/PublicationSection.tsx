import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { PublicationCard } from './PublicationCard';
import { publicationData } from '../../config/publicationData';
import type { SectionProps } from '../../types';

export const PublicationSection: React.FC<SectionProps> = ({ id = 'publication', className = '' }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 ${className}`}
    >
      <Container>
        <SectionHeader
          badge="Academic Research"
          title="Research Publication"
          subtitle="Scholarly contributions and peer-reviewed research papers in predictive analytics and intelligent computing systems."
        />

        <div className="max-w-4xl mx-auto">
          <PublicationCard publication={publicationData} />
        </div>
      </Container>
    </section>
  );
};

export const ResearchSection = PublicationSection;
export default PublicationSection;
