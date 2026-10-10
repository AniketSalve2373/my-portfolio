import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  MapPin,
  Clock,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { contactData } from '../../config/siteConfig';
import type { SectionProps } from '../../types';

// Brand SVG for LinkedIn
const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

// Brand SVG for GitHub
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const ContactSection: React.FC<SectionProps> = ({ id = 'contact', className = '' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-b from-transparent via-slate-50/40 to-slate-100/50 dark:via-slate-950/40 dark:to-slate-950/70 ${className}`}
    >
      <Container>
        <SectionHeader
          badge="Get In Touch"
          title="Contact Me"
          subtitle="Feel free to connect for software engineering opportunities, enterprise Java development roles, or technical project collaborations."
        />

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {/* Candidate Profile / Identity Card */}
          <Card padding="lg" className="reveal-card border-l-4 border-l-blue-600 dark:border-l-blue-500 bg-white dark:bg-slate-900 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {contactData.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 font-mono mt-0.5">
                  {contactData.title}
                </p>
              </div>
              <Badge variant="emerald" className="text-xs py-1 px-3 shrink-0 self-start sm:self-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Available for Roles
              </Badge>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
              {contactData.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{contactData.location}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Open to Full-Time & Immediate Joining Roles</span>
              </div>
            </div>
          </Card>

          {/* Static Contact Cards: Email, LinkedIn, GitHub */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Email Card */}
            <Card padding="md" className="reveal-card flex flex-col justify-between gap-4 group hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 block">
                    Email
                  </span>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 truncate block transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  title="Copy email address"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contactData.email}`}
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  aria-label="Send email via mailto link"
                >
                  <span>Send Mail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>

            {/* LinkedIn Card */}
            <Card padding="md" className="reveal-card flex flex-col justify-between gap-4 group hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 block">
                    LinkedIn
                  </span>
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 truncate block transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    aria-label="Aniket Salve LinkedIn profile (opens in new tab)"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px] truncate max-w-[140px]">
                  linkedin.com/in/aniket-salve...
                </span>
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  aria-label="Open LinkedIn profile in a new tab"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>

            {/* GitHub Card */}
            <Card padding="md" className="reveal-card flex flex-col justify-between gap-4 group hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 block">
                    GitHub
                  </span>
                  <a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 truncate block transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    aria-label="Aniket Salve GitHub profile (opens in new tab)"
                  >
                    Explore Repositories
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px] truncate max-w-[140px]">
                  github.com/AniketSalve2373...
                </span>
                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  aria-label="Open GitHub profile in a new tab"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
