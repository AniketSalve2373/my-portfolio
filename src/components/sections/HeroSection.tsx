import React from 'react';
import {
  ArrowRight,
  FileText,
  Mail,
  Code2,
  Server,
  Layers,
  Cpu,
  Globe,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { siteConfig } from '../../config/siteConfig';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-slate-50/50 dark:bg-slate-950/50"
    >
      {/* Background Ambient Glows & Movement */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information, Call to Actions & Social Links */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Badges / Status Bar */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6 animate-hero-fade">
              <Badge variant="emerald" className="px-3.5 py-1 text-xs font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5" />
                Available for Opportunities
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium border border-slate-200 dark:border-slate-800">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-blue-600 dark:text-blue-400 inline" />
                C-DAC Certified
              </Badge>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-3 animate-hero-delay-1">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>

            {/* Professional Title */}
            <p className="text-lg sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 font-mono tracking-tight animate-hero-delay-2">
              {siteConfig.title}
            </p>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed animate-hero-delay-3">
              {siteConfig.introduction}
            </p>

            {/* Highlighted Technologies */}
            <div className="mb-8 w-full animate-hero-delay-3">
              <div className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                <span>Featured Tech Stack</span>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                <Badge variant="primary" className="px-3 py-1.5 text-xs sm:text-sm font-medium gap-1.5 shadow-2xs">
                  <Code2 className="w-3.5 h-3.5" /> Java
                </Badge>
                <Badge variant="primary" className="px-3 py-1.5 text-xs sm:text-sm font-medium gap-1.5 shadow-2xs">
                  <Server className="w-3.5 h-3.5" /> Spring Boot
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 text-xs sm:text-sm font-medium gap-1.5 shadow-2xs">
                  <Layers className="w-3.5 h-3.5" /> React.js
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 text-xs sm:text-sm font-medium gap-1.5 shadow-2xs">
                  <Cpu className="w-3.5 h-3.5" /> Microservices
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 text-xs sm:text-sm font-medium gap-1.5 shadow-2xs">
                  <Globe className="w-3.5 h-3.5" /> REST APIs
                </Badge>
              </div>
            </div>

            {/* Action Buttons & Social Links Container */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto animate-hero-delay-4">
              
              {/* Primary Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href="#projects"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="shadow-md hover:shadow-lg transition-all duration-200"
                >
                  View Projects
                </Button>

                <Button
                  href="#resume"
                  variant="outline"
                  size="lg"
                  icon={<FileText className="w-4 h-4" />}
                  className="hover:border-blue-500/50 transition-all duration-200"
                >
                  View Resume
                </Button>

                <Button
                  href="#contact"
                  variant="ghost"
                  size="lg"
                  icon={<Mail className="w-4 h-4" />}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact Me
                </Button>
              </div>

              {/* Divider on Desktop */}
              <div className="hidden sm:block w-px h-8 bg-slate-300 dark:bg-slate-800 mx-1" />

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
                  aria-label="Aniket Salve LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                  </svg>
                </a>

                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
                  aria-label="Aniket Salve GitHub Profile"
                  title="GitHub Profile"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Abstract Developer Visual & Code Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end animate-hero-delay-3">
            <div className="w-full max-w-lg relative animate-subtle-float">
              
              {/* Outer Decorative Gradient Border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 opacity-20 dark:opacity-30 blur-sm pointer-events-none" />

              {/* Code Window Container */}
              <div className="relative rounded-2xl bg-slate-900 text-slate-200 shadow-2xl border border-slate-800 overflow-hidden font-mono text-xs sm:text-sm">
                
                {/* Window Top Navigation Bar */}
                <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                    <span className="ml-2 text-xs text-slate-400 font-sans font-medium">
                      DeveloperProfile.java
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Spring Boot 3.x
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 overflow-x-auto space-y-1.5 text-slate-300 leading-relaxed">
                  <div>
                    <span className="text-purple-400">@RestController</span>
                  </div>
                  <div>
                    <span className="text-purple-400">@RequestMapping</span>
                    <span className="text-slate-400">(</span>
                    <span className="text-emerald-300">"/api/v1/developer"</span>
                    <span className="text-slate-400">)</span>
                  </div>
                  <div>
                    <span className="text-blue-400">public class</span>{' '}
                    <span className="text-amber-300">JavaFullStackDeveloper</span>{' '}
                    <span className="text-slate-400">{'{'}</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-500">// B.E. Computer Science & C-DAC PG-DAC</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-blue-400">private final String</span>{' '}
                    <span className="text-teal-300">name</span> ={' '}
                    <span className="text-emerald-300">"{siteConfig.name}"</span>;
                  </div>

                  <div className="pl-4">
                    <span className="text-purple-400">@GetMapping</span>
                    <span className="text-slate-400">(</span>
                    <span className="text-emerald-300">"/skills"</span>
                    <span className="text-slate-400">)</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-blue-400">public</span> List&lt;String&gt;{' '}
                    <span className="text-amber-300">getCoreTechnologies</span>
                    <span className="text-slate-400">()</span> <span className="text-slate-400">{'{'}</span>
                  </div>

                  <div className="pl-8">
                    <span className="text-blue-400">return</span> List.<span className="text-amber-300">of</span>(
                  </div>
                  <div className="pl-12 text-emerald-300">
                    "Java", "Spring Boot",
                  </div>
                  <div className="pl-12 text-emerald-300">
                    "React.js", "Microservices",
                  </div>
                  <div className="pl-12 text-emerald-300">
                    "REST APIs"
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">);</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">{'}'}</span>
                  </div>

                  <div>
                    <span className="text-slate-400">{'}'}</span>
                  </div>
                </div>

                {/* Bottom Terminal Status Footer */}
                <div className="bg-slate-950 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">$</span>
                    <span>mvn clean install -DskipTests=false</span>
                  </div>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> BUILD SUCCESS
                  </span>
                </div>

              </div>

              {/* Floating Feature Card (Bottom-Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Full Stack Java</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Spring Boot & React.js</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
