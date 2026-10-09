import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Aniket Madhukar Salve',
  title: 'Software Developer | Java Full Stack Developer',
  role: 'Software Developer | Java Full Stack Developer',
  bioPlaceholder:
    'Passionate about building scalable backend services, full stack web applications, and reliable software architectures.',
  introduction:
    'I am a Computer Science and Engineering graduate with a PG Certificate in Advanced Computing from C-DAC. I have a strong foundation in software development and a keen interest in building practical, user-friendly applications. I am particularly interested in Java and Full Stack Development and enjoy learning new technologies, solving problems, and turning ideas into functional software solutions.',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/aniket-salve-b31a59288/',
    github: 'https://github.com/AniketSalve2373/',
  },
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Resume', href: '#resume' },
    { label: 'Publication', href: '#publication' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const educationData = [
  {
    id: 'pgcp-ac',
    degree: 'PG Certificate Programme in Advanced Computing (PGCP-AC)',
    institution: 'Centre for Development of Advanced Computing (C-DAC), Kharghar, Mumbai',
    completedYear: '2026',
    programType: '24-Week Full-Time Post Graduate Certificate Programme',
    duration: '24 Weeks',
    hours: '1200 Hours',
    credits: '40 Credits',
    selfStudyHours: '300 Hours Self-Study Included',
    isFeatured: true,
    featuredBadge: 'Post Graduate Specialization',
  },
  {
    id: 'be-cse',
    degree: 'B.E. - Computer Science and Engineering',
    institution: 'D. Y. Patil College of Engineering, Akurdi, Pune',
    affiliation: 'Affiliated to Savitribai Phule Pune University (SPPU)',
    completedYear: '2025',
    cgpa: '8.34/10',
    percentage: '75.90%',
  },
  {
    id: 'hsc',
    degree: 'HSC',
    institution: 'Shri Shanishwar Junior College, Sonai',
    affiliation: 'Affiliated to SPPU',
    completedYear: '2021',
    percentage: '86.50/100',
  },
  {
    id: 'ssc',
    degree: 'SSC',
    institution: 'Shri Shanishwar Vidya Mandir, Sonai',
    affiliation: 'Affiliated to SPPU',
    completedYear: '2019',
    percentage: '81.80/100',
  },
];


