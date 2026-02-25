import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import PersonajesPageContent from "./PersonajesPageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "Key Figures of 23-F" : "Los protagonistas del 23-F",
    description: isEn
      ? "Profiles of the military officers, politicians, and key figures involved in Spain's 23-F coup attempt."
      : "Perfiles de los militares, políticos y figuras clave del intento de golpe de estado del 23-F.",
    openGraph: {
      title: isEn ? "Key Figures of 23-F" : "Los protagonistas del 23-F",
      description: isEn
        ? "The conspirators, loyalists, and politicians of Spain's 23-F."
        : "Los conspiradores, leales y políticos del 23-F.",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PersonajesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PersonajesPageContent locale={locale} />;
}
