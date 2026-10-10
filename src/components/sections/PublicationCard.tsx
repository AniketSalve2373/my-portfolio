import React, { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  Users,
  Copy,
  Check,
  FileText,
  Sparkles,
  BarChart3,
  UserCheck,
} from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import type { PublicationItem } from '../../types';

interface PublicationCardProps {
  publication: PublicationItem;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const [copied, setCopied] = useState(false);

  // Exact citation using only provided metadata
  const handleCopyCitation = async () => {
    const citation = `${publication.authors.join(', ')}. "${publication.title}." ${publication.journal}, Paper No.: ${publication.paperNumber}. Available at: ${publication.publicationUrl}`;
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Card
      hoverEffect
      padding="lg"
      className="reveal-card relative overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col gap-6 relative z-10">
        {/* Top Meta Header: Journal, Paper Number & Academic Type */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary" className="px-3 py-1 text-xs font-semibold gap-1.5 shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              {publication.journal}
            </Badge>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 font-mono text-xs font-semibold">
              Paper No.: {publication.paperNumber}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
              <FileText className="w-3 h-3 text-slate-400" />
              Official Publication PDF
            </span>
          </div>
        </div>

        {/* Paper Title */}
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100 leading-snug tracking-tight">
            {publication.title}
          </h3>
        </div>

        {/* Authors List */}
        <div className="flex flex-col gap-2.5">
          <div className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span>Authors ({publication.authors.length})</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {publication.authors.map((author, index) => {
              const isPortfolioOwner = author.toLowerCase().includes('aniket salve');
              return (
                <span
                  key={index}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    isPortfolioOwner
                      ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700 font-semibold shadow-2xs ring-1 ring-blue-400/30'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {isPortfolioOwner && (
                    <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  )}
                  <span>{author}</span>
                  {isPortfolioOwner && (
                    <span className="text-[10px] font-mono bg-blue-200/60 dark:bg-blue-900/60 px-1 py-0.2 rounded text-blue-800 dark:text-blue-200 ml-0.5">
                      You
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>

        {/* Research Themes / Topics from Title */}
        {publication.researchFocus && publication.researchFocus.length > 0 && (
          <div className="flex flex-col gap-2 pt-1">
            <div className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-slate-400" />
              <span>Key Research Focus</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {publication.researchFocus.map((focus, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 font-mono"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons: View Publication & Copy Citation */}
        <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Required Action: View Publication in new tab */}
            <Button
              href={publication.publicationUrl}
              target="_blank"
              variant="primary"
              size="md"
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
              className="shadow-md hover:shadow-lg transition-all w-full sm:w-auto text-center justify-center"
              aria-label={`View "${publication.title}" research publication (opens in new tab)`}
            >
              View Publication
            </Button>

            {/* Utility Action: Copy Citation */}
            <Button
              type="button"
              onClick={handleCopyCitation}
              variant="outline"
              size="md"
              icon={copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              className="hover:border-slate-400 dark:hover:border-slate-600 w-full sm:w-auto text-center justify-center"
              aria-label="Copy research paper citation text to clipboard"
            >
              {copied ? 'Citation Copied!' : 'Copy Citation'}
            </Button>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5 self-start sm:self-center">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Open Access PDF</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
