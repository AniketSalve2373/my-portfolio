import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
  padding = 'md',
}) => {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyle = hoverEffect
    ? 'transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md'
    : '';

  return (
    <div
      className={`bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 rounded-xl shadow-xs ${paddingStyles[padding]} ${hoverStyle} ${className}`}
    >
      {children}
    </div>
  );
};
