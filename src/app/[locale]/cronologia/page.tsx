import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CronologiaPageContent from "./CronologiaPageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function CronologiaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CronologiaPageContent locale={locale} />;
}
