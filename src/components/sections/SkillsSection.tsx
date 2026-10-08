import React from 'react';
import { Server, Layout, Database, Wrench } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import type { SectionProps } from '../../types';

export const SkillsSection: React.FC<SectionProps> = ({ id = 'skills', className = '' }) => {
  const skillCategories = [
    {
      title: 'Backend & Java Stack',
      icon: <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      skills: ['Java', 'Spring Boot', 'RESTful APIs', 'Microservices', 'OOP', 'Spring Data JPA'],
    },
    {
      title: 'Frontend Web Technologies',
      icon: <Layout className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      title: 'Databases & Persistence',
      icon: <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      skills: ['SQL', 'MySQL / PostgreSQL', 'Database Design', 'Hibernate / ORM', 'Query Optimization'],
    },
    {
      title: 'Tools & Development Practices',
      icon: <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      skills: ['Git & GitHub', 'Maven / Gradle', 'Postman', 'VS Code / IntelliJ IDEA', 'Agile Methodologies'],
    },
  ];

  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 ${className}`}>
      <Container>
        <SectionHeader
          badge="Technical Stack"
          title="Skills & Expertise"
          subtitle="Core programming languages, backend frameworks, database systems, and full-stack development tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} hoverEffect padding="lg" className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
