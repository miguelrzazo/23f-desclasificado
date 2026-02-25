"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import StampBadge from "@/components/ui/StampBadge";
import CensoredPhoto from "@/components/ui/CensoredPhoto";
import DossierSection from "@/components/ui/DossierSection";
import TypewriterText from "@/components/ui/TypewriterText";
import type { TimelineEvent } from "@/content/data/timeline";
import {
  getDocumentBySource,
  getCharactersForEvent,
  getLocationById,
  getAdjacentEvents,
} from "@/content/data/helpers";

interface EventDetailContentProps {
  event: TimelineEvent;
  locale: string;
}

/** Map category to chapter slug */
const CATEGORY_CHAPTER_MAP: Record<string, string> = {
  antecedentes: "antecedentes",
  noche: "la-noche",
  juicio: "juicio",
  secuelas: "sombras",
  internacional: "internacional",
  desclasificacion: "prisioneros",
};

const CATEGORY_LABELS: Record<string, { es: string; en: string }> = {
  antecedentes: { es: "Antecedentes", en: "Background" },
  noche: { es: "La Noche", en: "The Night" },
  juicio: { es: "El Juicio", en: "The Trial" },
  secuelas: { es: "Secuelas", en: "Aftermath" },
  internacional: { es: "Internacional", en: "International" },
  desclasificacion: { es: "Desclasificación", en: "Declassification" },
};

function formatDate(datetime: string, locale: string): string {
  try {
    const date = new Date(datetime);
    return date.toLocaleDateString(locale === "es" ? "es-ES" : "en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
  } catch {
    return datetime;
  }
}

export default function EventDetailContent({
  event,
  locale,
}: EventDetailContentProps) {
  const t = useTranslations("eventDetail");
  const lang = locale === "en" ? "en" : "es";

  const title = event.title[lang];
  const description = event.description[lang];
  const dateStr = formatDate(event.datetime, locale);
  const sourceDoc = getDocumentBySource(event.source);
  const eventCharacters = getCharactersForEvent(event);
  const location = getLocationById(event.location);
  const { prev, next } = getAdjacentEvents(event.id);
  const chapterSlug = CATEGORY_CHAPTER_MAP[event.category];
  const categoryLabel = CATEGORY_LABELS[event.category]?.[lang] ?? event.category;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Back navigation */}
      <Link
        href="/cronologia"
        className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] hover:text-classified-red transition-colors no-underline mb-6"
      >
        &larr; {t("backToTimeline")}
      </Link>

      {/* Hero section */}
      <motion.header
        className="paper-texture-aged rounded-sm p-6 md:p-10 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Stamp */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <StampBadge
            type={sourceDoc?.classification !== "sin-clasificar" && sourceDoc?.classification ? sourceDoc.classification : "desclasificado"}
            size="md"
            animated
          />
        </div>

        {/* Date and time */}
        <div className="flex items-center gap-3 flex-wrap mb-3">
          <time
            className="font-mono text-sm font-bold text-classified-red tracking-wide"
            dateTime={event.datetime}
          >
            {dateStr}
          </time>
          {event.time && (
            <span className="font-mono text-lg font-bold text-classified-red bg-classified-red/10 px-3 py-1 rounded">
              {event.time}
            </span>
          )}
        </div>

        {/* Category badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] bg-classified-red/10 text-classified-red border border-classified-red/20 rounded-sm">
            {categoryLabel}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight pr-16 md:pr-24">
          {title}
        </h1>
      </motion.header>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-6">
          {/* Source Document */}
          <DossierSection
            title={t("sourceDocument")}
            stamp={sourceDoc?.classification !== "sin-clasificar" ? sourceDoc?.classification : undefined}
            tabLabel={lang === "es" ? "FUENTE" : "SOURCE"}
          >
            {sourceDoc ? (
              <div className="space-y-3">
                <h3 className="font-serif text-sm font-bold text-[var(--text-primary)] leading-snug">
                  {sourceDoc.title[lang]}
                </h3>
                <span className="inline-block font-mono text-[0.55rem] uppercase tracking-widest text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded">
                  {sourceDoc.ministry}
                </span>
                {sourceDoc.date && (
                  <p className="font-mono text-[0.65rem] text-[var(--text-secondary)]">
                    {sourceDoc.date}
                  </p>
                )}
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  {sourceDoc.summary[lang]}
                </p>
                {sourceDoc.url && (
                  <a
                    href={sourceDoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5
                      font-mono text-[0.6rem] uppercase tracking-wider
                      text-classified-red border border-classified-red/30
                      rounded-sm bg-classified-red/5
                      hover:bg-classified-red/15 hover:border-classified-red/60
                      transition-colors no-underline"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t("viewOriginalPdf")}
                  </a>
                )}
              </div>
            ) : (
              <p className="font-mono text-xs text-[var(--text-secondary)] italic">
                {t("noSourceFound")}
              </p>
            )}
          </DossierSection>

          {/* Location */}
          {location && (
            <DossierSection tabLabel={lang === "es" ? "LUGAR" : "PLACE"}>
              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-[var(--text-primary)]">
                  {location.name[lang]}
                </h3>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  {location.description[lang]}
                </p>
                <Link
                  href={`/mapa#${location.id}`}
                  className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] text-classified-red hover:underline underline-offset-2 transition-colors no-underline"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {t("viewOnMap")}
                </Link>
              </div>
            </DossierSection>
          )}

          {/* Chapter link */}
          {chapterSlug && (
            <div className="paper-texture rounded-sm p-4">
              <p className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                {t("chapter")}
              </p>
              <Link
                href={`/capitulo/${chapterSlug}`}
                className="font-serif text-sm font-bold text-classified-red hover:underline underline-offset-2 transition-colors no-underline"
              >
                {categoryLabel}
              </Link>
            </div>
          )}
        </aside>

        {/* Main content area */}
        <div className="md:col-span-2 space-y-8">
          {/* Narrative description */}
          <DossierSection
            tabLabel={lang === "es" ? "INFORME" : "REPORT"}
          >
            <p className="font-body text-base text-[var(--text-primary)] leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </DossierSection>

          {/* Quote block */}
          {event.quote && (
            <motion.div
              className="border-l-4 border-classified-red/50 pl-5 py-3 paper-texture rounded-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="font-serif text-lg md:text-xl italic text-[var(--text-primary)] leading-relaxed">
                &ldquo;
                <TypewriterText text={event.quote.text} speed={25} delay={500} />
                &rdquo;
              </p>
              <cite className="font-mono text-xs text-[var(--text-secondary)] not-italic mt-2 block">
                &mdash; {event.quote.source}
              </cite>
            </motion.div>
          )}

          {/* Related Characters */}
          {eventCharacters.length > 0 && (
            <DossierSection
              title={t("relatedCharacters")}
              tabLabel={lang === "es" ? "IMPLICADOS" : "INVOLVED"}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {eventCharacters.map((char) => (
                  <Link
                    key={char.id}
                    href={`/personajes/${char.id}`}
                    className="group flex flex-col items-center gap-2 p-3 rounded-sm hover:bg-classified-red/5 transition-colors no-underline"
                  >
                    <CensoredPhoto
                      name={char.name}
                      category={char.category}
                      image={char.image}
                      size="sm"
                    />
                    <div className="text-center">
                      <p className="font-serif text-sm font-bold text-[var(--text-primary)] group-hover:text-classified-red transition-colors leading-tight">
                        {char.name}
                      </p>
                      <p className="font-mono text-[0.55rem] text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">
                        {char.rank}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </DossierSection>
          )}
        </div>
      </div>

      {/* Previous / Next navigation */}
      <nav className="mt-12 pt-8 border-t border-[var(--border)]">
        <div className="grid grid-cols-2 gap-4">
          {/* Previous */}
          <div>
            {prev && (
              <Link
                href={`/cronologia/${prev.id}`}
                className="group block p-4 paper-texture rounded-sm hover:shadow-md transition-shadow no-underline"
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--text-secondary)]">
                  &larr; {t("previousEvent")}
                </span>
                <p className="font-serif text-sm font-bold text-[var(--text-primary)] mt-1 group-hover:text-classified-red transition-colors leading-snug">
                  {prev.title[lang]}
                </p>
                {prev.time && (
                  <span className="font-mono text-[0.6rem] text-classified-red/70 mt-0.5 block">
                    {prev.time}
                  </span>
                )}
              </Link>
            )}
          </div>

          {/* Next */}
          <div className="text-right">
            {next && (
              <Link
                href={`/cronologia/${next.id}`}
                className="group block p-4 paper-texture rounded-sm hover:shadow-md transition-shadow no-underline"
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--text-secondary)]">
                  {t("nextEvent")} &rarr;
                </span>
                <p className="font-serif text-sm font-bold text-[var(--text-primary)] mt-1 group-hover:text-classified-red transition-colors leading-snug">
                  {next.title[lang]}
                </p>
                {next.time && (
                  <span className="font-mono text-[0.6rem] text-classified-red/70 mt-0.5 block">
                    {next.time}
                  </span>
                )}
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
