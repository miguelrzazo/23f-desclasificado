'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useTheme() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isDark = mounted ? resolvedTheme === 'dark' : false;

  return {
    theme: mounted ? theme : undefined,
    resolvedTheme: mounted ? resolvedTheme : undefined,
    systemTheme,
    setTheme,
    toggleTheme,
    isDark,
    mounted,
  };
}
