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
  email: string;
  phone: string;
  bioPlaceholder: string;
  introduction: string;
  socialLinks: SocialLinks;
  navItems: NavItem[];
}

export interface ContactDetails {
  name: string;
  title: string;
  email: string;
  phone: string;
  location?: string;
  linkedin: string;
  github: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
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
export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  technologies: string[];
  responsibilities: string[];
}

export interface DevSecOpsDetails {
  organization: string;
  collaboration: string;
  course: string;
  duration: string;
  trainingDuration: string;
  mode: string;
  performance: string;
  grade: string;
  certificateNo: string;
  rollNo: string;
  dateOfIssue: string;
  issuingBodies: string;
  description: string;
  keyLearnings: string[];
}

export interface GenerationIndiaDetails {
  program: string;
  issuer: string;
  recipient: string;
  duration: string;
  trainingPartner: string;
  centre: string;
  batchId: string;
  issueDate: string;
  signatory: string;
  technicalSkills: string[];
  behavioralSkills: string[];
}

export interface TrainingItem {
  id: string;
  roleOrProgram: string;
  organization: string;
  collaborationOrPartner?: string;
  duration: string;
  isTraining: true;
  type: 'devsecops' | 'generation-india';
  devSecOpsDetails?: DevSecOpsDetails;
  generationIndiaDetails?: GenerationIndiaDetails;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription?: string;
  technologies: string[];
  architecture?: string;
  projectType?: string;
  duration?: string;
  githubUrl?: string;
  liveUrl?: string; // Optional real live URL ONLY - never fake
  featured?: boolean;
  badge?: string;
  category?: string;
  keyFeatures?: string[];
  highlights?: string[];
  role?: string;
}

export interface SkillCategoryData {
  id: string;
  title: string;
  subtitle?: string;
  iconName: string;
  skills: string[];
  themeColor: 'blue' | 'cyan' | 'emerald' | 'amber' | 'indigo' | 'purple' | 'slate';
}

export interface PrimaryStackItem {
  id: string;
  name: string;
  role: string;
  category: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: 'IBM' | 'Oracle' | string;
  category: string;
  verificationUrl: string;
  technologies: string[];
  platform: 'Coursera' | 'Oracle CertView' | string;
  credentialType: string;
  summary: string;
  keyCompetencies?: string[];
}

export interface ResumeConfig {
  fileName: string;
  filePath: string;
  candidateName: string;
  role: string;
  headline: string;
  highlights: string[];
  skillsList: string[];
  sectionsOverview: {
    title: string;
    description: string;
  }[];
}

export interface PublicationItem {
  id: string;
  title: string;
  journal: string;
  paperNumber: string;
  authors: string[];
  publicationUrl: string;
  primaryAuthor?: string;
  researchFocus?: string[];
}

