import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center gap-2 px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 shadow-xs hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 cursor-pointer group ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode (currently ${isDark ? 'dark' : 'light'} mode)`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} mode (Currently: ${isDark ? 'Dark Mode' : 'Light Mode'})`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-transform duration-300 rotate-0 group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-transform duration-300 rotate-0 group-hover:-rotate-12" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-semibold select-none">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
};
