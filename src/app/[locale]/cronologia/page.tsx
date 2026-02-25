import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CronologiaPageContent from "./CronologiaPageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "Timeline of 23-F" : "Cronología del 23-F",
    description: isEn
      ? "Hour-by-hour timeline of the attempted coup d'état of 23 February 1981 in Spain."
      : "Cronología hora a hora del intento de golpe de estado del 23 de febrero de 1981 en España.",
    openGraph: {
      title: isEn ? "Timeline of 23-F" : "Cronología del 23-F",
      description: isEn
        ? "Hour-by-hour timeline of the attempted coup d'état of 23 February 1981."
        : "Cronología hora a hora del intento de golpe de estado del 23 de febrero de 1981.",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function CronologiaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CronologiaPageContent locale={locale} />;
}
