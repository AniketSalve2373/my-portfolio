import React from 'react';
import { Terminal, ArrowRight, Download, Mail } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { siteConfig } from '../../config/siteConfig';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <Container>
        <div className="flex flex-col items-start max-w-4xl">
          {/* Status Badge */}
          <div className="mb-6">
            <Badge variant="emerald" className="px-3 py-1 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1"></span>
              Available for Opportunities
            </Badge>
          </div>

          {/* Main Title & Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-4">
            Hello, I'm <span className="text-blue-600 dark:text-blue-400">{siteConfig.name}</span>
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6 font-mono">
            {siteConfig.title}
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Specializing in scalable backend systems, enterprise Java applications, microservices architecture, and modern full-stack web solutions.
          </p>

          {/* Quick Technical Keywords */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Badge variant="primary">Java</Badge>
            <Badge variant="primary">Spring Boot</Badge>
            <Badge variant="primary">REST APIs</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">SQL / Databases</Badge>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" icon={<Mail className="w-4 h-4" />}>
              Get In Touch
            </Button>
            <Button href="#projects" variant="outline" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              View Featured Work
            </Button>
            <Button href="#resume" variant="ghost" icon={<Download className="w-4 h-4" />}>
              Download Resume
            </Button>
          </div>

          {/* Architectural Feature Card Preview */}
          <div className="mt-12 w-full p-4 sm:p-6 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-mono">
                Full-Stack Engineering & Microservices Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Engineered with clean architectural principles, robust type systems, and scalable backend integrations.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
