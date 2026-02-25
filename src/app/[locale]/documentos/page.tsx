import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import DocumentosPageContent from "./DocumentosPageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "Document Corpus" : "Corpus documental",
    description: isEn
      ? "Browse 154 declassified documents from Spain's 23-F coup attempt, released by the Council of Ministers."
      : "Explora los 154 documentos desclasificados del intento de golpe del 23-F, publicados por el Consejo de Ministros.",
    openGraph: {
      title: isEn ? "Document Corpus — 23-F" : "Corpus documental — 23-F",
      description: isEn
        ? "154 declassified documents from the 23-F coup attempt."
        : "154 documentos desclasificados del intento de golpe del 23-F.",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function DocumentosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DocumentosPageContent locale={locale} />;
}
