import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import MapPageContent from "@/components/map/MapPageContent";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "Map of the Coup" : "Mapa del golpe",
    description: isEn
      ? "Interactive map of the key locations during Spain's 23-F coup attempt."
      : "Mapa interactivo de las localizaciones clave durante el intento de golpe del 23-F.",
    openGraph: {
      title: isEn ? "Map of the Coup" : "Mapa del golpe",
      description: isEn
        ? "Key locations of the 23-F coup attempt on an interactive map."
        : "Localizaciones clave del intento de golpe del 23-F en un mapa interactivo.",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function MapaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MapPageContent />;
}
