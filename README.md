# Aniket Madhukar Salve — Personal Developer Portfolio

A responsive, high-performance personal developer portfolio built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed to showcase software development projects, academic background, C-DAC PGCP-AC specialization, DevSecOps training, research publications, and professional certifications.

---

## 🌟 Key Features

- **Dynamic Projects Showcase**: Real-time category filtering (`All`, `Full Stack & AI`, `.NET`), detail modals, and direct GitHub source code links.
- **Academic & Specialization Highlights**: Featured cards for **C-DAC PGCP-AC** (1200 Hours, 40 Credits), B.E. Computer Science (8.34 CGPA), HSC, and SSC.
- **Experience & Training Section**: Clear distinction between professional work experience (Web Developer Intern) and intensive training programs (DevSecOps NIELIT & Kyndryl, Generation India Full Stack Program).
- **Verified Certifications**: Directly verifiable credentials from IBM (Java & GenAI Specialization) and Oracle Cloud Infrastructure (AI Foundations Associate).
- **Academic Research Publication**: Full citation and direct PDF link for IJTE Paper No. 44.
- **Interactive Resume Modal & Direct PDF Download**: Embedded PDF viewer modal and clean asset link (`Aniket-Madhukar-Salve-Resume.pdf`).
- **Accessible Contact Form**: Form validation with pre-filled `mailto:` client fallback.
- **Dark Mode & Light Mode**: Seamless theme toggling with theme persistence.
- **Fully Responsive & Accessible**: Custom layout math, keyboard navigation support, focus indicators, and ARIA attributes.

---

## 🛠️ Technologies Used

- **Frontend Framework**: React 19, TypeScript
- **Build Tool & Bundler**: Vite 8
- **Styling**: Tailwind CSS v4, Lucide React Icons
- **Linting & Code Quality**: Oxlint
- **Icons**: `lucide-react`

---

## 📁 Project Structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── resume/
│       └── Aniket-Madhukar-Salve-Resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   └── sections/
│   │       ├── AboutSection.tsx
│   │       ├── CertificationCard.tsx
│   │       ├── CertificationsSection.tsx
│   │       ├── ContactSection.tsx
│   │       ├── EducationSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── HeroSection.tsx
│   │       ├── PGCPDetailsModal.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectDetailsModal.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── PublicationCard.tsx
│   │       ├── PublicationSection.tsx
│   │       ├── ResumeModal.tsx
│   │       ├── ResumeSection.tsx
│   │       └── SkillsSection.tsx
│   ├── config/
│   │   ├── certificationsData.ts
│   │   ├── projectsData.ts
│   │   ├── publicationData.ts
│   │   ├── resumeData.ts
│   │   ├── siteConfig.ts
│   │   └── skillsData.ts
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📋 Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm`/`yarn`)

---

## 🚀 Local Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AniketSalve2373/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

---

## ⚙️ Available Scripts

- `npm run dev`: Starts the Vite development server with HMR.
- `npm run build`: Runs TypeScript compiler check (`tsc -b`) and builds the production assets into `dist/`.
- `npm run lint`: Runs `oxlint` to check for syntax or code quality issues across TypeScript/React files.
- `npm run preview`: Bootstraps a local web server to preview the production build in `dist/`.
