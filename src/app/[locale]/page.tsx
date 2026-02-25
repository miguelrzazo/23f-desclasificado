import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LocalePageContent />;
}

function LocalePageContent() {
  const t = useTranslations('home');

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1
        className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold
          text-ink-900 dark:text-paper-50
          tracking-tight text-center"
      >
        {t('hero')}
      </h1>
      <p
        className="mt-4 text-lg sm:text-xl text-ink-500 dark:text-paper-300
          font-body text-center max-w-xl"
      >
        {t('tagline')}
      </p>
      <div className="mt-8">
        <span
          className="inline-block px-3 py-1 text-xs font-mono font-bold
            uppercase tracking-widest
            bg-classified-red text-white
            border border-classified-darkred
            rotate-[-1deg]"
        >
          {t('cta')}
        </span>
      </div>
    </div>
  );
}
