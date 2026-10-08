import React from 'react';
import { Code, Database, Server } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import type { SectionProps } from '../../types';

export const AboutSection: React.FC<SectionProps> = ({ id = 'about', className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 ${className}`}>
      <Container>
        <SectionHeader
          badge="Background & Focus"
          title="About Me"
          subtitle="Software developer specializing in Java full-stack solutions, clean code architecture, and high-performance web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hoverEffect padding="lg" className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Backend Development</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Designing RESTful APIs, core Java backend services, database integrations, and application logic.
            </p>
          </Card>

          <Card hoverEffect padding="lg" className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Frontend Engineering</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Building interactive, accessible, and responsive client user interfaces using React, JavaScript, and modern CSS frameworks.
            </p>
          </Card>

          <Card hoverEffect padding="lg" className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Systems & Engineering</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Focusing on system efficiency, structured databases, version control, and scalable development practices.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
};
