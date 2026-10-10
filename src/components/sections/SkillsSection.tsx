import React, { useState, useMemo } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Network,
  Brain,
  Sparkles,
  Star,
  Search,
  X,
  ShieldCheck,
  CheckCircle2,
  Coffee,
  Layers,
  Boxes,
  Globe,
  Zap,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import {
  skillCategoriesData,
  primaryStackData,
  isPrimaryStackSkill,
} from '../../config/skillsData';
import type { SectionProps } from '../../types';

export const SkillsSection: React.FC<SectionProps> = ({ id = 'skills', className = '' }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon mapping for categories
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'Network':
        return <Network className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  // Icon mapping for primary stack
  const getPrimaryStackIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      default:
        return <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  // Theme colors for category icon wrappers
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'blue':
        return {
          iconBox: 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60',
          badge: 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300',
        };
      case 'cyan':
        return {
          iconBox: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400 border border-cyan-200/60 dark:border-cyan-900/60',
          badge: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300',
        };
      case 'emerald':
        return {
          iconBox: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/60',
          badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300',
        };
      case 'indigo':
        return {
          iconBox: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/60',
          badge: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300',
        };
      case 'purple':
        return {
          iconBox: 'bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 border border-purple-200/60 dark:border-purple-900/60',
          badge: 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300',
        };
      case 'amber':
        return {
          iconBox: 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/60',
          badge: 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300',
        };
      case 'slate':
      default:
        return {
          iconBox: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
          badge: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
        };
    }
  };

  // Filter categories and skills based on search query and category filter
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return skillCategoriesData
      .filter((cat) => {
        if (selectedCategoryId === 'all') return true;
        return cat.id === selectedCategoryId;
      })
      .map((cat) => {
        if (!query) return cat;

        const matchingSkills = cat.skills.filter((skill) =>
          skill.toLowerCase().includes(query)
        );

        const categoryMatches =
          cat.title.toLowerCase().includes(query) ||
          (cat.subtitle && cat.subtitle.toLowerCase().includes(query));

        return {
          ...cat,
          skills: categoryMatches ? cat.skills : matchingSkills,
          isVisible: categoryMatches || matchingSkills.length > 0,
        };
      })
      .filter((cat) => (query ? cat.skills.length > 0 : true));
  }, [selectedCategoryId, searchQuery]);

  // Total count of distinct skills across all categories
  const totalSkillsCount = useMemo(() => {
    const all = skillCategoriesData.flatMap((c) => c.skills);
    return new Set(all).size;
  }, []);

  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden ${className}`}
    >
      {/* Subtle background ambient accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Technical Proficiency"
          title="Skills & Technical Stack"
          subtitle="A comprehensive inventory of programming languages, enterprise frameworks, data systems, and developer tools acquired through academic study, 1200-hour C-DAC training, and production projects."
        />

        {/* =========================================================================
            SECTION 1: MAIN PROFESSIONAL STACK (VISUALLY HIGHLIGHTED SPOTLIGHT)
           ========================================================================= */}
        <div className="mb-14">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-slate-50/80 dark:from-slate-900/90 dark:via-blue-950/20 dark:to-slate-900/90 border border-blue-200/70 dark:border-blue-900/60 shadow-sm relative overflow-hidden">
            {/* Spotlight Banner Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-blue-100 dark:border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                      Core Professional Stack
                    </h3>
                    <Badge variant="primary" className="text-[11px] font-semibold py-0.5">
                      Primary Focus
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    Specialized enterprise full-stack development, distributed microservices, and modern web applications.
                  </p>
                </div>
              </div>

              {/* Verified Count Pill */}
              <div className="flex items-center gap-2 self-start md:self-auto px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>6 Core Pillars</span>
              </div>
            </div>

            {/* 6 Primary Technologies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {primaryStackData.map((tech) => (
                <div
                  key={tech.id}
                  className="group relative p-5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform duration-200">
                        {getPrimaryStackIcon(tech.iconName)}
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
                        {tech.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {tech.role}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Production Verified
                    </span>
                    <span className="font-mono text-slate-400">{tech.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: SEARCH & CATEGORY FILTER BAR
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategoryId('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategoryId === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              All Categories ({skillCategoriesData.length})
            </button>

            {skillCategoriesData.map((cat) => {
              const isSelected = selectedCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <span>{cat.title}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? 'bg-blue-700 text-blue-100'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Skill Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Docker, React)..."
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                title="Clear search"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* =========================================================================
            SECTION 3: CATEGORIZED SKILL CARDS GRID
           ========================================================================= */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => {
              const themeStyles = getThemeStyles(category.themeColor);

              return (
                <Card
                  key={category.id}
                  hoverEffect
                  padding="lg"
                  className="flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2.5 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105 ${themeStyles.iconBox}`}
                        >
                          {getCategoryIcon(category.iconName)}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                            {category.title}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                            {category.skills.length} {category.skills.length === 1 ? 'skill' : 'technologies'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Category Description */}
                    {category.subtitle && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                        {category.subtitle}
                      </p>
                    )}

                    {/* Grouped Skills Chips / Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.skills.map((skill) => {
                        const isPrimary = isPrimaryStackSkill(skill);
                        const isQueryMatch =
                          searchQuery.trim() !== '' &&
                          skill.toLowerCase().includes(searchQuery.trim().toLowerCase());

                        return (
                          <div
                            key={skill}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 cursor-default select-none ${
                              isPrimary
                                ? 'bg-gradient-to-r from-blue-50 to-indigo-50/80 dark:from-blue-950/60 dark:to-indigo-950/40 text-blue-700 dark:text-blue-300 font-semibold border border-blue-300/80 dark:border-blue-700/70 shadow-2xs hover:shadow-xs hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-0.5'
                                : 'bg-slate-50/90 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/90 dark:border-slate-700/70 hover:bg-white dark:hover:bg-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-slate-100 hover:shadow-2xs hover:-translate-y-0.5'
                            } ${
                              isQueryMatch ? 'ring-2 ring-blue-500/40 bg-blue-100/50 dark:bg-blue-900/40 font-bold' : ''
                            }`}
                          >
                            {isPrimary && (
                              <Star
                                className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0"
                                aria-label="Core Stack"
                              />
                            )}
                            <span className="tracking-tight">{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Bottom Indicator */}
                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    <span>Categorized for production</span>
                    {category.skills.some((s) => isPrimaryStackSkill(s)) && (
                      <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-sans font-medium">
                        <Sparkles className="w-3 h-3" /> Includes Core Stack
                      </span>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Empty State for Search */
          <div className="text-center py-16 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
              No skills found matching &ldquo;{searchQuery}&rdquo;
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              Try searching for another keyword like &ldquo;Java&rdquo;, &ldquo;React&rdquo;, &ldquo;API&rdquo;, or reset your filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategoryId('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* =========================================================================
            SECTION 4: PROFESSIONAL INTEGRITY & ENGINEERING FOUNDATION CALLOUT
           ========================================================================= */}
        <div className="mt-14">
          <Card padding="lg" className="border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                    Engineering Foundation & Applied Competency
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
                    Technologies are listed based on applied architectural and implementation experience across C-DAC postgraduate training, engineering coursework, and production-ready applications. No arbitrary percentage bars are used—expertise is demonstrated through clean code, modular architecture, and functional deliverables.
                  </p>
                </div>
              </div>

              {/* Quick Pillars */}
              <div className="flex flex-wrap md:flex-nowrap items-center gap-2 text-xs font-mono shrink-0">
                <div className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{totalSkillsCount}+</span> Verified Skills
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  1200+ Hrs C-DAC
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
