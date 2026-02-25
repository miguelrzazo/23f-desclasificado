'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useState } from 'react';

const chapters = ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7'] as const;

interface NavigationProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function Navigation({ isMobile = false, onItemClick }: NavigationProps) {
  const t = useTranslations();
  const locale = useLocale();
  const [chaptersOpen, setChaptersOpen] = useState(false);

  const navItems = [
    { key: 'chapters', href: '#', hasDropdown: true },
    { key: 'timeline', href: `/${locale}/cronologia` as const },
    { key: 'characters', href: `/${locale}/personajes` as const },
    { key: 'map', href: `/${locale}/mapa` as const },
    { key: 'documents', href: `/${locale}/documentos` as const },
    { key: 'about', href: `/${locale}/acerca` as const },
  ];

  const baseTabStyles = `
    relative px-4 py-2 text-sm font-sans font-medium
    text-ink-700 dark:text-paper-200
    transition-colors duration-200
    hover:text-classified-red dark:hover:text-classified-brightred
  `;

  const folderTabStyles = `
    ${baseTabStyles}
    before:absolute before:bottom-0 before:left-0 before:right-0
    before:h-0.5 before:bg-transparent
    hover:before:bg-classified-red
    before:transition-colors before:duration-200
  `;

  if (isMobile) {
    return (
      <nav className="flex flex-col gap-1 py-4" role="navigation">
        {navItems.map((item) => {
          if (item.hasDropdown) {
            return (
              <div key={item.key}>
                <button
                  onClick={() => setChaptersOpen(!chaptersOpen)}
                  className={`w-full text-left px-4 py-3 text-sm font-sans font-medium
                    text-ink-700 dark:text-paper-200
                    hover:bg-paper-200 dark:hover:bg-dark-700
                    flex items-center justify-between`}
                >
                  {t(`nav.${item.key}`)}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className={`w-4 h-4 transition-transform duration-200 ${
                      chaptersOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {chaptersOpen && (
                  <div className="pl-4 border-l-2 border-classified-red/30 ml-4">
                    {chapters.map((ch, i) => (
                      <a
                        key={ch}
                        href={`/${locale}/capitulo/${ch.replace('ch', 'capitulo-')}`}
                        onClick={onItemClick}
                        className="block px-4 py-2 text-sm
                          text-ink-500 dark:text-paper-300
                          hover:text-classified-red dark:hover:text-classified-brightred
                          hover:bg-paper-100 dark:hover:bg-dark-700"
                      >
                        <span className="font-mono text-xs text-classified-red mr-2">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {t(`chapters.${ch}.title`)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <a
              key={item.key}
              href={item.href}
              onClick={onItemClick}
              className="px-4 py-3 text-sm font-sans font-medium
                text-ink-700 dark:text-paper-200
                hover:bg-paper-200 dark:hover:bg-dark-700"
            >
              {t(`nav.${item.key}`)}
            </a>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-1" role="navigation">
      {navItems.map((item) => {
        if (item.hasDropdown) {
          return (
            <div
              key={item.key}
              className="relative group"
              onMouseEnter={() => setChaptersOpen(true)}
              onMouseLeave={() => setChaptersOpen(false)}
            >
              <button
                className={`${folderTabStyles} flex items-center gap-1`}
                aria-expanded={chaptersOpen}
                aria-haspopup="true"
              >
                {t(`nav.${item.key}`)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`w-3 h-3 transition-transform duration-200 ${
                    chaptersOpen ? 'rotate-180' : ''
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 mt-0 w-80
                  bg-paper-50 dark:bg-dark-800
                  border border-paper-300 dark:border-dark-600
                  rounded-b-md shadow-lg
                  transition-all duration-200 z-50
                  ${chaptersOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-1'
                  }`}
              >
                <div className="py-2">
                  {chapters.map((ch, i) => (
                    <a
                      key={ch}
                      href={`/${locale}/capitulo/${ch.replace('ch', 'capitulo-')}`}
                      className="block px-4 py-2.5 group/item
                        hover:bg-paper-100 dark:hover:bg-dark-700
                        transition-colors duration-150"
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs text-classified-red mt-0.5 shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <div className="text-sm font-medium text-ink-900 dark:text-paper-100
                            group-hover/item:text-classified-red dark:group-hover/item:text-classified-brightred">
                            {t(`chapters.${ch}.title`)}
                          </div>
                          <div className="text-xs text-ink-500 dark:text-paper-300 mt-0.5 line-clamp-1">
                            {t(`chapters.${ch}.description`)}
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <a
            key={item.key}
            href={item.href}
            className={folderTabStyles}
          >
            {t(`nav.${item.key}`)}
          </a>
        );
      })}
    </nav>
  );
}
