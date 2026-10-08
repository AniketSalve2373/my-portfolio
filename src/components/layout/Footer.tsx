import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Container } from '../common/Container';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-200">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {siteConfig.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              {siteConfig.title}
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <span>&copy; {currentYear} {siteConfig.name}. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
