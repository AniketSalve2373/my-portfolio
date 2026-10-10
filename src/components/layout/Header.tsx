import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../common/Container';
import { ThemeToggle } from '../common/ThemeToggle';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 20 : false
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll detection for background glass effect & active section tracking
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const sectionIds = siteConfig.navItems.map((item) => item.href.substring(1));
    const scrollPosition = window.scrollY + 140;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const sectionId = sectionIds[i];
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop;
        if (scrollPosition >= top) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs py-3'
          : 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/40 py-4'
      }`}
      role="banner"
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-bold tracking-tight group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 -ml-1 transition-colors"
            aria-label={`${siteConfig.name} - ${siteConfig.title}`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 dark:bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-xs group-hover:bg-blue-700 dark:group-hover:bg-blue-500 transition-colors shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="leading-tight font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate max-w-[150px] xs:max-w-none">
                {siteConfig.name}
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-500 dark:text-slate-400 tracking-tight truncate max-w-[130px] xs:max-w-[200px] sm:max-w-none">
                {siteConfig.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary navigation">
            {siteConfig.navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/90 dark:bg-blue-950/60 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Action Items: Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="xl:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Overlay & Dropdown Menu */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 top-[65px] bg-slate-900/40 dark:bg-black/60 backdrop-blur-xs xl:hidden z-40 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Dropdown Container */}
            <nav
              id="mobile-navigation-menu"
              className="xl:hidden relative z-50 mt-3 py-3 px-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl flex flex-col gap-1 max-h-[calc(100vh-85px)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
              aria-label="Mobile navigation menu"
            >
              {siteConfig.navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 flex items-center justify-between focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold border-l-4 border-blue-600 dark:border-blue-400 pl-3'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    )}
                  </a>
                );
              })}

              {/* Dedicated Mobile Theme Switcher Row */}
              <div className="pt-2.5 mt-1.5 border-t border-slate-100 dark:border-slate-800 px-3 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Theme Preference</span>
                <ThemeToggle showLabel className="py-1 px-3 text-xs" />
              </div>
            </nav>
          </>
        )}
      </Container>
    </header>
  );
};
