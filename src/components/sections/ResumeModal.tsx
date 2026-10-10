import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  FileDown,
  ExternalLink,
  FileText,
  AlertCircle,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  fileName: string;
  candidateName: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  pdfUrl,
  fileName,
  candidateName,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  // Lock body scroll and focus manage
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-5xl h-[92vh] sm:h-[88vh] flex flex-col overflow-hidden relative"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/80 backdrop-blur-xs shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3
                  id="resume-modal-title"
                  className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 truncate"
                >
                  {candidateName} — Resume
                </h3>
                <Badge variant="primary" className="hidden sm:inline-flex text-[10px] py-0.5">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Live Viewer
                </Badge>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono truncate">
                {fileName}
              </p>
            </div>
          </div>

          {/* Action Buttons in Modal Header */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Button
              href={pdfUrl}
              download={fileName}
              variant="outline"
              size="sm"
              icon={<FileDown className="w-3.5 h-3.5" />}
              className="text-xs py-1.5 px-2.5 sm:px-3"
            >
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">Save</span>
            </Button>

            <Button
              href={pdfUrl}
              target="_blank"
              variant="ghost"
              size="sm"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              className="text-xs py-1.5 px-2 sm:px-2.5"
              title="Open in new tab"
            >
              <span className="hidden md:inline">New Tab</span>
            </Button>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              type="button"
              className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Viewer Body */}
        <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 relative overflow-hidden flex flex-col">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/80 dark:bg-slate-900/80 z-10">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-2" />
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Loading resume document...
              </p>
            </div>
          )}

          {loadError ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <AlertCircle className="w-12 h-12 text-amber-500 mb-3" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                Embedded Preview Unavailable
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-6">
                Your browser or mobile environment may prevent embedded PDF rendering. You can view or download the resume directly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button
                  href={pdfUrl}
                  target="_blank"
                  variant="primary"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Open in New Tab
                </Button>
                <Button
                  href={pdfUrl}
                  download={fileName}
                  variant="outline"
                  icon={<FileDown className="w-4 h-4" />}
                >
                  Download PDF
                </Button>
              </div>
            </div>
          ) : (
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0`}
              title={`${candidateName} Resume PDF Viewer`}
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setLoadError(true);
              }}
            />
          )}
        </div>

        {/* Mobile / Quick Notice Bar */}
        <div className="py-2 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 shrink-0">
          <span className="truncate">
            Target location: <code className="font-mono text-slate-700 dark:text-slate-300">public/resume/{fileName}</code>
          </span>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center gap-1 shrink-0 ml-2"
          >
            Direct Link <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
