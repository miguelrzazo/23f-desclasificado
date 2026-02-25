import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { timelineEvents } from "@/content/data/timeline";
import EventDetailContent from "./EventDetailContent";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const event = timelineEvents.find((e) => e.id === id);
  if (!event) return {};
  const isEn = locale === "en";
  const title = isEn ? event.title.en : event.title.es;
  const description = isEn ? event.description.en : event.description.es;
  return {
    title: `${title} — 23-F`,
    description: description.slice(0, 160),
    openGraph: {
      title: `${title} — 23-F Desclasificado`,
      description: description.slice(0, 160),
    },
  };
}

export function generateStaticParams() {
  return timelineEvents.flatMap((event) =>
    routing.locales.map((locale) => ({
      locale,
      id: event.id,
    }))
  );
}

export default async function EventDetailPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const event = timelineEvents.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return <EventDetailContent event={event} locale={locale} />;
}
