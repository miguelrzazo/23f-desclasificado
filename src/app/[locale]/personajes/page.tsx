import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import PersonajesPageContent from "./PersonajesPageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PersonajesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PersonajesPageContent locale={locale} />;
}
