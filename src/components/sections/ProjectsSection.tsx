import React, { useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { projectsData } from '../../config/projectsData';
import type { SectionProps, ProjectItem } from '../../types';

export const ProjectsSection: React.FC<SectionProps> = ({ id = 'projects', className = '' }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenDetails = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id={id} className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 ${className}`}>
      <Container>
        <SectionHeader
          badge="Featured Engineering"
          title="Projects Showcase"
          subtitle="A collection of full-stack web applications, AI integrations, enterprise .NET services, and software tools engineered with clean architecture and scalable code."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleOpenDetails}
            />
          ))}
        </div>
      </Container>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
        project={selectedProject}
      />
    </section>
  );
};

export default ProjectsSection;
