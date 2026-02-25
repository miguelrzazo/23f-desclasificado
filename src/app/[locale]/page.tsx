import { setRequestLocale } from 'next-intl/server';
import { HomePageContent } from './HomePageContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageContent />;
}
