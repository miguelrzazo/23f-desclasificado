import { setRequestLocale } from "next-intl/server";
import MapPageContent from "@/components/map/MapPageContent";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function MapaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MapPageContent />;
}
