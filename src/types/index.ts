export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  bioPlaceholder: string;
  introduction: string;
  socialLinks: SocialLinks;
  navItems: NavItem[];
}

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface CurriculumModule {
  title: string;
  hours: string;
}

export interface PGCPDetails {
  programme: string;
  institution: string;
  completedYear: string;
  programType: string;
  statistics: {
    duration: string;
    format: string;
    totalHours: string;
    credits: string;
    selfStudy: string;
  };
  description: string;
  coreCurriculum: CurriculumModule[];
  skillsDeveloped: string[];
  officialLink: {
    text: string;
    url: string;
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  affiliation?: string;
  location?: string;
  completedYear: string;
  programType?: string;
  cgpa?: string;
  percentage?: string;
  duration?: string;
  hours?: string;
  credits?: string;
  selfStudyHours?: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  details?: PGCPDetails;
}



