import React from 'react';
import { PublicationSection } from './PublicationSection';
import type { SectionProps } from '../../types';

export const ResearchSection: React.FC<SectionProps> = (props) => {
  return <PublicationSection {...props} />;
};

export default ResearchSection;
