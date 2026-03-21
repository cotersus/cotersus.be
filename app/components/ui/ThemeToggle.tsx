'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const rootClasses = document.documentElement.classList;
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const initialTheme =
      savedTheme ||
      (rootClasses.contains('dark')
        ? 'dark'
        : rootClasses.contains('light')
          ? 'light'
          : prefersDark
            ? 'dark'
            : 'light');
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  if (!mounted) {
    return <div className="w-14 h-8" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-base text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <span aria-hidden>{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  );
}
