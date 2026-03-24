'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';

interface ThemeToggleProps {
  label: string;
}

export function ThemeToggle({ label }: ThemeToggleProps) {
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark';

    const rootClasses = document.documentElement.classList;
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
      savedTheme ||
      (rootClasses.contains('dark')
        ? 'dark'
        : rootClasses.contains('light')
          ? 'light'
          : prefersDark
            ? 'dark'
            : 'light')
    );
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-base text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      <span aria-hidden>{isHydrated ? (theme === 'dark' ? '☀' : '☾') : '◐'}</span>
    </button>
  );
}
