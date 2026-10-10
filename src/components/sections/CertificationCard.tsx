import React, { useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Layers,
  Award,
} from 'lucide-react';
import type { CertificationItem } from '../../types';

interface CertificationCardProps {
  certification: CertificationItem;
}

// Brand SVG for IBM
const IbmIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <title>IBM</title>
    <path d="M23.544 15.993c.038 0 .06-.017.06-.053v-.036c0-.035-.022-.052-.06-.052h-.09v.14zm-.09.262h-.121v-.498h.225c.112 0 .169.066.169.157 0 .079-.036.129-.09.15l.111.19h-.133l-.092-.17h-.07zm.434-.222v-.062c0-.2-.157-.357-.363-.357a.355.355 0 00-.363.357v.062c0 .2.156.358.363.358a.355.355 0 00.363-.358zm-.838-.03c0-.28.212-.492.475-.492.264 0 .475.213.475.491 0 .279-.211.491-.475.491a.477.477 0 01-.475-.49zM16.21 8.13l-.216-.624h-3.56v.624zm.413 1.19l-.216-.623h-3.973v.624zm2.65 7.147h3.107v-.624h-3.108zm0-1.192h3.107v-.623h-3.108zm0-1.19h1.864v-.624h-1.865zm0-1.191h1.864v-.624h-1.865zm0-1.191h1.864v-.624h-3.555l-.175.504-.175-.504h-3.555v.624h1.865v-.574l.2.574h3.33l.2-.574zm1.864-1.815h-3.142l-.217.624h3.359zm-7.46 3.006h1.865v-.624h-1.865zm0 1.19h1.865v-.623h-1.865zm-1.243 1.191h3.108v-.623h-3.108zm0 1.192h3.108v-.624h-3.108zm6.386-8.961l-.216.624h3.776v-.624zm-.629 1.815h4.19v-.624h-3.974zm-4.514 1.19h3.359l-.216-.623h-3.143zm2.482 2.383h2.496l.218-.624h-2.932zm.417 1.19h1.662l.218-.623h-2.098zm.416 1.191h.83l.218-.623h-1.266zm.414 1.192l.217-.624h-.432zm-12.433-.006l4.578.006c.622 0 1.18-.237 1.602-.624h-6.18zm4.86-3v.624h2.092c0-.216-.03-.425-.083-.624zm-3.616.624h1.865v-.624H6.217zm3.617-3.573h2.008c.053-.199.083-.408.083-.624H9.834zm-3.617 0h1.865v-.624H6.217zM9.55 7.507H4.973v.624h6.18a2.36 2.36 0 00-1.602-.624zm2.056 1.191H4.973v.624h6.884a2.382 2.382 0 00-.25-.624zm-5.39 2.382v.624h4.87c.207-.176.382-.387.519-.624zm4.87 1.191h-4.87v.624h5.389a2.39 2.39 0 00-.519-.624zm-6.114 3.006h6.634c.11-.193.196-.402.25-.624H4.973zM0 8.13h4.352v-.624H0zm0 1.191h4.352v-.624H0zm1.243 1.191h1.865v-.624H1.243zm0 1.191h1.865v-.624H1.243zm0 1.19h1.865v-.623H1.243zm0 1.192h1.865v-.624H1.243zM0 15.276h4.352v-.623H0zm0 1.192h4.352v-.624H0Z" />
  </svg>
);

// Brand SVG for Oracle
const OracleIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <title>Oracle</title>
    <path d="M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z" />
  </svg>
);

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(certification.verificationUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const isIBM = certification.issuer === 'IBM';
  const isOracle = certification.issuer === 'Oracle';

  // Organization-tailored branding themes
  const brandTheme = isIBM
    ? {
        badgeBg: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/70',
        logoBg: 'bg-blue-50 dark:bg-blue-950/80 text-[#0F62FE] dark:text-[#4589ff] border-blue-200/80 dark:border-blue-800/80',
        accentBorder: 'hover:border-blue-400/80 dark:hover:border-blue-500/70',
        glowColor: 'from-blue-500/10 via-transparent to-transparent',
        tagBg: 'bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/50',
      }
    : isOracle
    ? {
        badgeBg: 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/70',
        logoBg: 'bg-red-50 dark:bg-red-950/80 text-[#C74634] dark:text-[#ff6b55] border-red-200/80 dark:border-red-800/80',
        accentBorder: 'hover:border-red-400/80 dark:hover:border-red-500/70',
        glowColor: 'from-red-500/10 via-transparent to-transparent',
        tagBg: 'bg-rose-50/80 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200/60 dark:border-rose-800/50',
      }
    : {
        badgeBg: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
        logoBg: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
        accentBorder: 'hover:border-slate-400 dark:hover:border-slate-600',
        glowColor: 'from-slate-500/10 via-transparent to-transparent',
        tagBg: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
      };

  return (
    <div
      className={`group relative h-full flex flex-col justify-between bg-white dark:bg-slate-900/95 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-950/70 transition-all duration-300 ease-out hover:-translate-y-1.5 ${brandTheme.accentBorder}`}
    >
      {/* Top subtle ambient glow on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${brandTheme.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10`}
      />

      {/* TOP SECTION: Issuer Logo + Metadata Badges */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-5">
          {/* Issuing Organization Branding & Name */}
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${brandTheme.logoBg}`}
            >
              {isIBM && <IbmIcon className="w-8 h-8" />}
              {isOracle && <OracleIcon className="w-7 h-7" />}
              {!isIBM && !isOracle && <Award className="w-6 h-6 text-blue-600" />}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 tracking-tight">
                  {certification.issuer}
                </span>
                <span
                  title="Official Issuer Verified"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400"
                >
                  <CheckCircle2 className="w-4 h-4 fill-blue-500/10 text-blue-600 dark:text-blue-400" />
                </span>
              </div>
              <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 tracking-tight">
                Issued via {certification.platform}
              </span>
            </div>
          </div>

          {/* Credential Type Badge */}
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-lg font-mono border ${brandTheme.badgeBg}`}
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden xs:inline">{certification.credentialType}</span>
            <span className="xs:hidden">Verified</span>
          </span>
        </div>

        {/* Category Pill Tag */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-md font-mono uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
            <Layers className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            {certification.category}
          </span>
        </div>

        {/* Certificate Name */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-3">
          {certification.name}
        </h3>

        {/* Program Summary */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {certification.summary}
        </p>

        {/* Key Competencies Highlights */}
        {certification.keyCompetencies && certification.keyCompetencies.length > 0 && (
          <div className="mb-5 space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Key Competencies Validated:
            </span>
            {certification.keyCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{comp}</span>
              </div>
            ))}
          </div>
        )}

        {/* Relevant Technology Tags */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 mb-6">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
            Relevant Technologies:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {certification.technologies.map((tech) => (
              <span
                key={tech}
                className={`inline-block px-2.5 py-1 text-xs font-mono font-medium rounded-md border transition-colors ${brandTheme.tagBg}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION BAR: Verify Certificate Button + Quick Copy Link */}
      <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center gap-2">
        <a
          href={certification.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${certification.name} on ${certification.platform} in a new tab`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 group/btn"
        >
          <span>Verify Certificate</span>
          <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>

        {/* Quick Link Copy Button */}
        <button
          type="button"
          onClick={handleCopyLink}
          aria-label={copied ? 'Link copied to clipboard' : 'Copy verification link to clipboard'}
          title={copied ? 'Copied to clipboard!' : 'Copy verification URL'}
          className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            copied
              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400'
              : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
          }`}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
