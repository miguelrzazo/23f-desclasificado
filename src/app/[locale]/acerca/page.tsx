import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import AcercaPageContent from "./AcercaPageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "About the Project" : "Sobre el proyecto",
    description: isEn
      ? "About the 23-F Desclasificado project: methodology, sources, and purpose."
      : "Sobre el proyecto 23-F Desclasificado: metodología, fuentes y propósito.",
    openGraph: {
      title: isEn ? "About — 23-F Desclasificado" : "Sobre el proyecto — 23-F Desclasificado",
      description: isEn
        ? "Methodology, sources, and purpose behind 23-F Desclasificado."
        : "Metodología, fuentes y propósito del proyecto 23-F Desclasificado.",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AcercaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AcercaPageContent />;
}
