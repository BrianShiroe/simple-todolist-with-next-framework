// todolist-next-js\src\components\Navbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const dark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    document.documentElement.classList.toggle('dark', dark);
    setIsDark(dark);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('dark', e.matches);
        setIsDark(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <nav className="bg-background text-foreground shadow-md px-6 py-4 flex justify-between items-center transition-colors duration-500">
      <Link href="/" className="text-xl font-bold select-none">
        📝 To-Do App
      </Link>
      <button
        onClick={toggleTheme}
        aria-pressed={isDark}
        className="flex items-center gap-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm hover:opacity-80 transition"
        title="Toggle light/dark mode"
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`transform transition-transform duration-500 ${
            isDark ? 'rotate-0' : 'rotate-180'
          }`}
          aria-hidden="true"
        >
          {isDark ? '🌙' : '☀️'}
        </span>
        {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
}
