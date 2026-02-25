import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Red tape separator */}
      <div
        className="h-1 w-full bg-classified-red"
        role="separator"
        aria-hidden="true"
      />

      <div className="bg-paper-100 dark:bg-dark-800 border-t border-paper-300 dark:border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-paper-50 mb-2">
                {t('brand')}
              </h3>
              <p className="text-sm text-ink-500 dark:text-paper-300 font-body leading-relaxed">
                {t('project')}
              </p>
            </div>

            {/* Sources */}
            <div>
              <p className="text-xs text-ink-500 dark:text-paper-300 font-body leading-relaxed">
                {t('sources')}
              </p>
            </div>

            {/* Legal */}
            <div>
              <p className="text-xs text-ink-500 dark:text-paper-300 font-body leading-relaxed italic">
                {t('legal')}
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-6 border-t border-paper-300 dark:border-dark-600">
            <p className="text-xs text-ink-500 dark:text-paper-300 font-mono text-center">
              {t('copyright', { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
