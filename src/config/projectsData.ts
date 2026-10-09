import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'careerpilot-ai',
    title: 'CareerPilot - AI-Powered Job Portal',
    shortDescription:
      'An intelligent job searching and recruitment platform leveraging AI for resume matching, personalized candidate recommendations, and automated application tracking.',
    detailedDescription:
      'CareerPilot (AI-Powered) is an advanced web platform designed to streamline job searches and candidate matching. It leverages artificial intelligence to analyze candidate resumes against job specifications, calculate skill compatibility scores, and deliver personalized career recommendations.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Spring Boot',
      'Java',
      'OpenAI API',
      'PostgreSQL',
      'REST API',
    ],
    architecture: 'AI-Integrated Microservices & REST API',
    projectType: 'AI & Full Stack Web Application',
    duration: '3 Months',
    githubUrl: 'https://github.com/AniketSalve2373/CareerPilot-AI-Job-Portal',
    // liveUrl intentionally omitted - no fake live demo links
    featured: true,
    badge: 'AI Powered',
    category: 'Full Stack / AI',
    role: 'Full Stack & AI Integration Developer',
    keyFeatures: [
      'AI-Driven Resume Matching & Skill Gap Analysis',
      'Automated Candidate Ranking & Match Scoring',
      'Interactive Applicant Dashboard & Real-Time Status Tracking',
      'Role-Based Access Control (Job Seekers & Recruiters)',
      'RESTful Backend API with Spring Boot & Secure JWT Authentication',
    ],
    highlights: [
      'Integrated LLM / OpenAI APIs for intelligent CV parsing and prompt-based career recommendations.',
      'Designed responsive React UI with Tailwind CSS for seamless user experience across devices.',
      'Architected relational PostgreSQL database schemas to manage user profiles, job listings, and applications.',
    ],
  },
  {
    id: 'careerpilot-dotnet',
    title: 'CareerPilot - .NET Job Portal',
    shortDescription:
      'An enterprise job recruitment solution built with ASP.NET Core, C#, Entity Framework Core, and SQL Server for structured job posting and applicant workflows.',
    detailedDescription:
      'CareerPilot (.NET) is an enterprise-oriented recruitment and applicant management portal. Engineered with C# and Microsoft .NET framework, it follows clean architectural patterns to handle candidate registration, job vacancy publishing, resume submission, and administrative workflow management.',
    technologies: [
      'ASP.NET Core',
      'C#',
      'Entity Framework Core',
      'SQL Server',
      'Bootstrap',
      'HTML5/CSS3',
      'Razor Pages',
    ],
    architecture: 'Microsoft .NET Tiered Architecture',
    projectType: '.NET Enterprise Application',
    duration: '2 Months',
    githubUrl: 'https://github.com/AniketSalve2373/CareerPilot-DotNet-Job-Portal',
    // liveUrl intentionally omitted - no fake live demo links
    featured: true,
    badge: '.NET Enterprise',
    category: '.NET / Enterprise',
    role: '.NET Developer',
    keyFeatures: [
      'ASP.NET Core MVC Architecture with Repository Pattern',
      'Database Management via Entity Framework Core & SQL Server Migrations',
      'Role-Based Authorization & Session Management',
      'Job Search with Keyword, Category, and Experience Filters',
      'Admin Dashboard for Vacancy Management & Resume Reviews',
    ],
    highlights: [
      'Implemented Code-First Entity Framework migrations for structured relational data modeling.',
      'Built secure CRUD workflows for job listings, application status updates, and user profiles.',
      'Optimized database query performance using LINQ and eager loading techniques.',
    ],
  },
  {
    id: 'smart-task-tracker',
    title: 'Smart Task Tracker',
    shortDescription:
      'A responsive task management application with priority queues, real-time status tracking, category filtering, and productivity analytics.',
    detailedDescription:
      'Smart Task Tracker is a streamlined productivity tool engineered to help users manage daily goals, track task lifecycles, and organize projects with ease. It features intuitive status toggles, priority levels, category tagging, and state persistence.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Context API',
      'Lucide Icons',
      'LocalStorage',
    ],
    architecture: 'Client-Side Single Page Application (SPA)',
    projectType: 'Productivity & Frontend App',
    duration: '1 Month',
    githubUrl: 'https://github.com/AniketSalve2373/Smart-Task-Tracker',
    // liveUrl intentionally omitted - no fake live demo links
    featured: false,
    badge: 'Productivity App',
    category: 'Frontend',
    role: 'Frontend Developer',
    keyFeatures: [
      'Dynamic Task Creation, Editing, Deletion, and Archival',
      'Priority Tagging (High, Medium, Low) & Category Organization',
      'Search & Filter Tasks by Status (Pending, In Progress, Completed)',
      'Persistent Local Storage Sync & State Management',
      'Productivity Statistics & Progress Completion Metrics',
    ],
    highlights: [
      'Built modular React component architecture using custom hooks and Context API.',
      'Designed fully responsive and accessible UI with dark mode support.',
      'Implemented clean, state-driven search and multi-criteria filtering controls.',
    ],
  },
  {
    id: 'skill-tracker',
    title: 'Skill Tracker',
    shortDescription:
      'A structured skill matrix and learning progress tracker to monitor technical proficiencies, course completions, and milestone goals.',
    detailedDescription:
      'Skill Tracker is a full-stack learning management and skill audit utility. It allows developers and students to map out technical domains (e.g., Backend, Frontend, Cloud, DevOps), track hours spent learning, record certification milestones, and evaluate competency ratings.',
    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'TypeScript',
      'MySQL',
      'Tailwind CSS',
      'REST API',
    ],
    architecture: 'Modular Full-Stack Application',
    projectType: 'Full Stack Developer Utility',
    duration: '1 Month',
    githubUrl: 'https://github.com/AniketSalve2373/Skill-Tracker',
    // liveUrl intentionally omitted - no fake live demo links
    featured: false,
    badge: 'Developer Tool',
    category: 'Full Stack',
    role: 'Full Stack Developer',
    keyFeatures: [
      'Skill Profiling with Skill Category Breakdown (Java, Databases, Web, DevOps)',
      'Proficiency Rating System (Beginner, Intermediate, Advanced, Master)',
      'Milestone & Goal Target Logging with Progress Bars',
      'Spring Boot REST Backend with Relational Database Mapping',
      'Visual Skill Matrix & Analytics Dashboard',
    ],
    highlights: [
      'Created relational database schema in MySQL to log user competencies and skill milestones.',
      'Integrated RESTful endpoints for real-time skill updates and analytical summary metrics.',
      'Designed a clean visualization dashboard for tracking progress across core software disciplines.',
    ],
  },
];
