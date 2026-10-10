import type { SkillCategoryData, PrimaryStackItem } from '../types';

/**
 * Main Professional Stack to highlight prominently:
 * - Java / Core Java
 * - Spring Boot
 * - React.js
 * - Microservices
 * - REST APIs
 * - MySQL
 */
export const primaryStackData: PrimaryStackItem[] = [
  {
    id: 'java',
    name: 'Java (Core Java)',
    role: 'Core Language & OOP',
    category: 'Programming Languages',
    description: 'Enterprise object-oriented design, robust multithreading, collections framework, and clean algorithmic foundations.',
    iconName: 'Coffee',
    tag: 'Core Foundation',
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    role: 'Backend Framework',
    category: 'Backend',
    description: 'Production-ready RESTful microservices, Spring Security, Spring Data JPA, and declarative dependency injection.',
    iconName: 'Server',
    tag: 'Primary Framework',
  },
  {
    id: 'react',
    name: 'React.js',
    role: 'Frontend UI Engineering',
    category: 'Frontend',
    description: 'Component-driven interactive web UIs, modern hooks, responsive interfaces, and seamless REST client integration.',
    iconName: 'Layers',
    tag: 'Modern Web UI',
  },
  {
    id: 'microservices',
    name: 'Microservices',
    role: 'Distributed Systems',
    category: 'Backend Architecture',
    description: 'Decoupled service design, Eureka service discovery, API Gateway routing, and distributed configuration servers.',
    iconName: 'Boxes',
    tag: 'System Architecture',
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    role: 'API Design & Protocols',
    category: 'Web Services',
    description: 'RESTful endpoint design, stateless communication, JWT token authentication, and Role-Based Access Control (RBAC).',
    iconName: 'Globe',
    tag: 'Service Integration',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    role: 'Relational Database',
    category: 'Database & Storage',
    description: 'Normalized database schema design, ACID transactions, complex queries, indexing, and relational persistence.',
    iconName: 'Database',
    tag: 'Data Persistence',
  },
];

export const PRIMARY_STACK_NAMES = [
  'Java',
  'Core Java',
  'Spring Boot',
  'React.js',
  'Microservices',
  'REST APIs',
  'MySQL',
];

export const isPrimaryStackSkill = (skill: string): boolean => {
  const normalized = skill.toLowerCase().trim();
  return (
    normalized === 'java' ||
    normalized === 'core java' ||
    normalized === 'spring boot' ||
    normalized === 'react.js' ||
    normalized === 'microservices' ||
    normalized === 'rest apis' ||
    normalized === 'mysql'
  );
};

/**
 * Complete organized skills categorized according to project specifications.
 * No arbitrary percentages or manufactured ratings.
 */
export const skillCategoriesData: SkillCategoryData[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core compiled and scripted languages used for algorithms, backend services, and client applications',
    iconName: 'Code2',
    themeColor: 'blue',
    skills: [
      'Core Java',
      'C++',
      'JavaScript',
      'C#',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Modern reactive libraries, markup standards, layout styling, and client-side tooling',
    iconName: 'Layout',
    themeColor: 'cyan',
    skills: [
      'React.js',
      'Bootstrap',
      'HTML',
      'HTML5',
      'CSS',
      'JavaScript',
      'jQuery',
      'Vite',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Enterprise',
    subtitle: 'Robust server-side frameworks, enterprise Java multi-tier architecture, and .NET services',
    iconName: 'Server',
    themeColor: 'emerald',
    skills: [
      'Spring Boot',
      'Spring Cloud',
      'Node.js',
      'Express.js',
      'ASP.NET Core 8',
      'Microsoft .NET Technologies',
      'Microservices',
      'Web-based Java Programming',
      'Enterprise Java / Multi-tier Architecture',
    ],
  },
  {
    id: 'database',
    title: 'Database & Storage',
    subtitle: 'Relational databases, document-based NoSQL stores, and Object-Relational Mappers',
    iconName: 'Database',
    themeColor: 'indigo',
    skills: [
      'MySQL',
      'MongoDB',
      'Mongoose',
      'Entity Framework Core',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    subtitle: 'Version control, containerization environments, dependency management, and build bundlers',
    iconName: 'Wrench',
    themeColor: 'slate',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Maven',
      'Vite',
    ],
  },
  {
    id: 'other-technologies',
    title: 'Architecture & Web Technologies',
    subtitle: 'API patterns, distributed microservice components, security protocols, and software patterns',
    iconName: 'Network',
    themeColor: 'purple',
    skills: [
      'REST APIs',
      'JWT',
      'RBAC',
      'Spring Cloud Config Server',
      'Eureka Service Discovery',
      'API Gateway',
      'Mongoose',
      'Axios',
      'Bootstrap',
      'Clean Architecture',
      'Repository Pattern',
      'Unit of Work Pattern',
    ],
  },
  {
    id: 'other-skills',
    title: 'Core Engineering & Professional Skills',
    subtitle: 'Foundational computer science principles, problem-solving, SDLC practices, and collaborative communication',
    iconName: 'Brain',
    themeColor: 'amber',
    skills: [
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Software Development Methodologies',
      'Analytical & Problem-Solving Skills',
      'Communication Skills',
      'Project Development',
    ],
  },
];
