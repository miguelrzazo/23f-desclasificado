'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';

export function LanguageToggle() {
  const t = useTranslations('language');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale: Locale = locale === 'es' ? 'en' : 'es';

  const handleSwitch = () => {
    router.replace(pathname, { locale: otherLocale });
  };

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center gap-1 px-2 py-1 rounded-md text-sm font-mono
        border border-paper-300 dark:border-dark-600
        bg-paper-100 dark:bg-dark-700
        hover:bg-paper-200 dark:hover:bg-dark-600
        transition-colors duration-200
        text-ink-700 dark:text-paper-200"
      aria-label={t('toggle')}
      title={t('toggle')}
    >
      <span
        className={`${
          locale === 'es'
            ? 'text-classified-red font-bold'
            : 'text-ink-500 dark:text-paper-300'
        }`}
      >
        ES
      </span>
      <span className="text-ink-500 dark:text-dark-600">|</span>
      <span
        className={`${
          locale === 'en'
            ? 'text-classified-red font-bold'
            : 'text-ink-500 dark:text-paper-300'
        }`}
      >
        EN
      </span>
    </button>
  );
}
