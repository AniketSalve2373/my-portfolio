import type { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: 'ibm-java-developer',
    name: 'IBM Java Developer Professional Certificate',
    issuer: 'IBM',
    category: 'Software Development & Java',
    verificationUrl: 'https://coursera.org/share/3bd4d5dc8dd99d5a3466bf891bc764c3',
    technologies: ['Java', 'OOP', 'Spring Boot', 'RESTful APIs', 'Cloud-Native', 'Docker'],
    platform: 'Coursera',
    credentialType: 'Professional Certificate',
    summary:
      'Professional credential demonstrating expertise in core Java, object-oriented design, microservices, cloud-native architecture, and database integrations.',
    keyCompetencies: [
      'Core & Advanced Java Object-Oriented Programming',
      'Microservices & RESTful API Architecture',
      'Cloud-Native Development & Containerization',
      'Database Connectivity & Backend Integration',
    ],
  },
  {
    id: 'ibm-genai-software-dev',
    name: 'Generative AI for Software Developers Specialization',
    issuer: 'IBM',
    category: 'Generative AI & LLMs',
    verificationUrl: 'https://coursera.org/share/ed0d8ef6c606d23e2dd0724d4bddd2ff',
    technologies: ['Generative AI', 'Prompt Engineering', 'LLMs', 'AI Code Assistants', 'SDLC AI Integration'],
    platform: 'Coursera',
    credentialType: 'Specialization',
    summary:
      'Specialized credential focused on integrating generative AI and large language models into modern software engineering workflows to accelerate development.',
    keyCompetencies: [
      'Prompt Engineering for Code Generation',
      'AI-Powered Code Refactoring & Testing',
      'LLM Integration into Software Systems',
      'Responsible AI Practices & Engineering Productivity',
    ],
  },
  {
    id: 'oracle-cloud-ai-foundations',
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    category: 'Cloud Infrastructure & AI',
    verificationUrl:
      'https://catalog-education.oracle.com/pls/certview/sharebadge?id=7E387168E355068AE69F15B8C2D79659B925812C0A9D6F10E2922A7C0FF8C5FF',
    technologies: ['Oracle Cloud Infrastructure (OCI)', 'OCI AI Services', 'Generative AI', 'Machine Learning', 'Vector Search'],
    platform: 'Oracle CertView',
    credentialType: 'Associate Certification',
    summary:
      'Industry certification validating foundational knowledge of artificial intelligence, machine learning concepts, and enterprise cloud AI services on Oracle Cloud Infrastructure.',
    keyCompetencies: [
      'Oracle Cloud Infrastructure AI Core Services',
      'Machine Learning & Deep Learning Fundamentals',
      'OCI Generative AI & Semantic Vector Search',
      'Responsible AI Deployment in Cloud Environments',
    ],
  },
];
