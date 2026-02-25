'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Navigation } from './Navigation';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useState, useEffect } from 'react';

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2
          focus:z-[100] focus:px-4 focus:py-2 focus:bg-classified-red focus:text-white
          focus:rounded focus:text-sm"
      >
        {t('header.skipToContent')}
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-shadow duration-300
          bg-paper-50/95 dark:bg-dark-900/95 backdrop-blur-sm
          border-b border-paper-300 dark:border-dark-600
          ${scrolled ? 'shadow-md' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href={`/${locale}`}
              className="flex items-center gap-2 group shrink-0"
            >
              <span className="font-serif text-xl sm:text-2xl font-bold text-ink-900 dark:text-paper-50
                tracking-tight group-hover:text-classified-red transition-colors duration-200">
                {t('header.title')}
              </span>
              <span
                className="inline-block px-1.5 py-0.5 text-[10px] font-mono font-bold
                  uppercase tracking-widest
                  bg-classified-red text-white
                  border border-classified-darkred
                  rotate-[-2deg]
                  shadow-sm"
                aria-hidden="true"
              >
                {t('header.subtitle')}
              </span>
            </a>

            {/* Desktop Navigation */}
            <Navigation />

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md
                  border border-paper-300 dark:border-dark-600
                  bg-paper-100 dark:bg-dark-700
                  hover:bg-paper-200 dark:hover:bg-dark-600
                  transition-colors duration-200
                  text-ink-700 dark:text-paper-200"
                aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.menu')}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  // X icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-5 h-5"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-5 h-5"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t border-paper-300 dark:border-dark-600
              bg-paper-50 dark:bg-dark-900"
          >
            <Navigation
              isMobile
              onItemClick={() => setMobileMenuOpen(false)}
            />
          </div>
        )}
      </header>
    </>
  );
}
