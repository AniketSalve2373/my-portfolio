import React, { useState, useMemo } from 'react';
import { Code2, Filter } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { projectsData } from '../../config/projectsData';
import type { SectionProps, ProjectItem } from '../../types';

export const ProjectsSection: React.FC<SectionProps> = ({ id = 'projects', className = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Extract unique categories dynamically for filter tabs
  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add('All');
    projectsData.forEach((p) => {
      if (p.category) {
        // Normalize categories for clean tabs
        if (p.category.includes('Full Stack') || p.category.includes('AI')) set.add('Full Stack & AI');
        else if (p.category.includes('.NET')) set.add('.NET Enterprise');
        else if (p.category.includes('Frontend')) set.add('Frontend');
        else set.add(p.category);
      }
    });
    return Array.from(set);
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => {
      if (!p.category) return false;
      if (selectedCategory === 'Full Stack & AI') {
        return p.category.includes('Full Stack') || p.category.includes('AI');
      }
      if (selectedCategory === '.NET Enterprise') {
        return p.category.includes('.NET');
      }
      if (selectedCategory === 'Frontend') {
        return p.category.includes('Frontend');
      }
      return p.category === selectedCategory;
    });
  }, [selectedCategory]);

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

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Filter:</span>
          </div>

          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
                aria-pressed={isActive}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-700 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Empty state fallback if filter returns nothing */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Code2 className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300">
              No projects found in this category.
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Select another category filter to view projects.
            </p>
          </div>
        )}
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
