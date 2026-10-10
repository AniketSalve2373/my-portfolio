import type { SiteConfig, EducationItem, WorkExperienceItem, TrainingItem, ContactDetails } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Aniket Madhukar Salve',
  title: 'Software Developer | Java Full Stack Developer',
  role: 'Software Developer | Java Full Stack Developer',
  email: 'aniketsalve237@gmail.com',
  phone: '+91 9359642291',
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
    { label: 'Experience & Training', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Resume', href: '#resume' },
    { label: 'Publication', href: '#publication' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const educationData: EducationItem[] = [
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
    details: {
      programme: 'PG Certificate Programme in Advanced Computing (PGCP-AC)',
      institution: 'Centre for Development of Advanced Computing (C-DAC), Kharghar, Mumbai',
      completedYear: '2026',
      programType: '24-Week Full-Time Post Graduate Certificate Programme',
      statistics: {
        duration: '24 Weeks',
        format: 'Full-Time',
        totalHours: '1200 Hours',
        credits: '40 Credits',
        selfStudy: '300 Hours Self-Study Included',
      },
      description:
        'The PG Certificate Programme in Advanced Computing (PGCP-AC) is a 24-week full-time postgraduate certificate programme designed for Engineering Graduates and MCA/MSc graduates. The programme provides industry-oriented training in advanced computing and software technologies and prepares students to work with current technology scenarios and the evolving requirements of the software industry.',
      coreCurriculum: [
        { title: 'C++ Programming', hours: '90 Hrs' },
        { title: 'Database Technologies', hours: '90 Hrs' },
        { title: 'Concepts of Operating System & Software Development Methodologies', hours: '60 Hrs' },
        { title: 'Object Oriented Programming with Java', hours: '150 Hrs' },
        { title: 'Algorithms and Data Structures Using Java', hours: '90 Hrs' },
        { title: 'Web Programming Technologies', hours: '150 Hrs' },
        { title: 'Web-based Java Programming', hours: '150 Hrs' },
        { title: 'Microsoft .NET Technologies', hours: '120 Hrs' },
        { title: 'Aptitude', hours: '60 Hrs' },
        { title: 'Effective Communication', hours: '60 Hrs' },
        { title: 'Project', hours: '180 Hrs' },
      ],
      skillsDeveloped: [
        'C++',
        'Java',
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'Database Technologies',
        'HTML5',
        'CSS',
        'JavaScript',
        'jQuery',
        'React.js',
        'Web-based Java Programming',
        'Enterprise Java / Multi-tier Architecture',
        'Microsoft .NET Technologies',
        'Software Development Methodologies',
        'Analytical & Problem-Solving Skills',
        'Communication Skills',
        'Project Development',
      ],
      officialLink: {
        text: 'Learn More About C-DAC PGCP-AC →',
        url: 'https://www.cdac.in/index.aspx?id=edu_acts_PGDiplomaCoursesAdmission',
      },
    },
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

export const workExperienceData: WorkExperienceItem[] = [
  {
    id: 'elite-softwares',
    role: 'Web Developer Intern',
    company: 'Elite Softwares Pvt Ltd, Pune',
    location: 'Pune',
    duration: 'February 2024 – March 2024',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    responsibilities: [
      'Collaborated with team members to develop and improve web application features.',
      'Assisted in frontend development using HTML, CSS, Bootstrap, and JavaScript.',
      'Participated in testing, debugging, and maintaining responsive user interfaces.',
    ],
  },
];

export const professionalTrainingData: TrainingItem[] = [
  {
    id: 'devsecops-nielit',
    roleOrProgram: 'DevSecOps Trainee',
    organization: 'National Institute of Electronics and Information Technology (NIELIT), Delhi Centre',
    collaborationOrPartner: 'Kyndryl',
    duration: '24-Jan-2026 to 24-Mar-2026',
    isTraining: true,
    type: 'devsecops',
    devSecOpsDetails: {
      organization: 'National Institute of Electronics and Information Technology (NIELIT), Delhi Centre',
      collaboration: 'Kyndryl',
      course: 'DevSecOps Basic Course',
      duration: '24-Jan-2026 to 24-Mar-2026',
      trainingDuration: '120 Hours',
      mode: 'Online / Instructor-Led',
      performance: '100 out of 102 marks',
      grade: 'S',
      certificateNo: 'ST/2026/0150',
      rollNo: 'JKN-005/050',
      dateOfIssue: '06-May-2026',
      issuingBodies: 'National Institute of Electronics and Information Technology (NIELIT) Delhi Centre & Kyndryl',
      description: 'Selected for and successfully completed an intensive 120-hour instructor-led DevSecOps Basic Course training program from 24-Jan-2026 to 24-Mar-2026.',
      keyLearnings: [
        'Introduction to DevOps',
        'Stages involved in DevOps',
        'Continuous Integration (CI)',
        'Continuous Deployment (CD)',
        'Infrastructure Pipeline',
        'Application Pipeline',
        'AWS Infrastructure hands-on labs',
        'DevOps workflows',
        'Infrastructure automation concepts',
      ],
    },
  },
  {
    id: 'generation-india-fsd',
    roleOrProgram: 'Jr Full Stack Developer Program',
    organization: 'Generation India',
    collaborationOrPartner: 'ILMTEC',
    duration: '15.07.2025 to 10.11.2025',
    isTraining: true,
    type: 'generation-india',
    generationIndiaDetails: {
      program: 'Jr Full Stack Developer Program',
      issuer: 'Generation India',
      recipient: 'Aniket Salve',
      duration: '15.07.2025 to 10.11.2025',
      trainingPartner: 'ILMTEC',
      centre: 'Pune',
      batchId: '0008345',
      issueDate: '05.11.2025',
      signatory: 'Vivek Pandit (Generation India Foundation)',
      technicalSkills: [
        'Software Development Fundamentals',
        'Bash Scripting',
        'Git',
        'GitHub',
        'SCRUM',
        'Spring Boot',
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
        'TypeScript',
        'MySQL',
        'Java',
      ],
      behavioralSkills: [
        'Growth Mindset',
        'Persistence',
        'Personal Responsibility',
        'Future Orientation',
        'Communication',
        'Detail Orientation',
        'Proactiveness',
        'Team Work',
      ],
    },
  },
];





export { projectsData } from './projectsData';
export {
  primaryStackData,
  skillCategoriesData,
  isPrimaryStackSkill,
  PRIMARY_STACK_NAMES,
} from './skillsData';
export const contactData: ContactDetails = {
  name: 'Aniket Madhukar Salve',
  title: 'Software Developer | Java Full Stack Developer',
  email: 'aniketsalve237@gmail.com',
  phone: '+91 9359642291',
  location: 'Pune, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/aniket-salve-b31a59288/',
  github: 'https://github.com/AniketSalve2373/',
};

export { certificationsData } from './certificationsData';
export { resumeData } from './resumeData';
export { publicationData } from './publicationData';

