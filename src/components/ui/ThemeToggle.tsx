'use client';

import { useState, useSyncExternalStore } from 'react';

export function ThemeToggle() {
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
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-base text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <span aria-hidden>{isHydrated ? (theme === 'dark' ? '☀' : '☾') : '◐'}</span>
    </button>
  );
}
