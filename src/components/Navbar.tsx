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
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <nav className="bg-background text-foreground shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        📝 To-Do App
      </Link>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm hover:opacity-80 transition"
      >
        Toggle {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
}
