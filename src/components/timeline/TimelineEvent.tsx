"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import StampBadge from "@/components/ui/StampBadge";
import TypewriterText from "@/components/ui/TypewriterText";
import type { TimelineEvent as TEvent } from "@/content/data/timeline";
import type { Character } from "@/content/data/characters";
import { locations } from "@/content/data/locations";
import { getDocumentBySource } from "@/content/data/helpers";

interface TimelineEventProps {
  event: TEvent;
  side: "left" | "right";
  locale: string;
  characters?: Character[];
}

/** Format an ISO date string for display */
function formatDate(datetime: string, locale: string): string {
  try {
    const date = new Date(datetime);
    return date.toLocaleDateString(locale === "es" ? "es-ES" : "en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return datetime;
  }
}

/** Map source document to a stamp type, using real doc classification when available */
function getStampType(
  source: string
): "desclasificado" | "secreto" | "reservado" | "confidencial" {
  const doc = getDocumentBySource(source);
  if (doc && doc.classification !== "sin-clasificar") {
    return doc.classification;
  }
  if (source.includes("_R.")) return "reservado";
  if (source.startsWith("D.")) return "confidencial";
  return "secreto";
}

export default function TimelineEventCard({
  event,
  side,
  locale,
  characters = [],
}: TimelineEventProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const t = useTranslations("timeline");

  const title = locale === "es" ? event.title.es : event.title.en;
  const description =
    locale === "es" ? event.description.es : event.description.en;
  const dateStr = formatDate(event.datetime, locale);

  const eventCharacters = characters.filter((c) =>
    event.characters.includes(c.id)
  );

  const sourceDoc = getDocumentBySource(event.source);

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-4 md:gap-8 mb-12 ${
        side === "left"
          ? "md:flex-row-reverse md:text-right"
          : "md:flex-row md:text-left"
      } flex-row text-left`}
    >
      {/* Connector dot on the central line */}
      <div
        className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-2
          w-4 h-4 rounded-full bg-classified-red border-2
          border-paper-100 dark:border-dark-800 z-10
          shadow-[0_0_0_3px_rgba(196,30,30,0.2)]"
        aria-hidden="true"
      />

      {/* Spacer for the timeline line side */}
      <div className="hidden md:block md:w-1/2" />

      {/* Event card */}
      <motion.div
        className={`ml-10 md:ml-0 md:w-1/2 ${
          side === "left" ? "md:pr-12" : "md:pl-12"
        }`}
        initial={{
          opacity: 0,
          x: side === "left" ? 40 : -40,
          y: 20,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: side === "left" ? 40 : -40, y: 20 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <article className="paper-texture dossier-section rounded-sm p-4 md:p-5 relative">
          {/* Timestamp */}
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <time
              className="font-mono text-sm font-bold text-classified-red tracking-wide"
              dateTime={event.datetime}
            >
              {dateStr}
            </time>
            {event.time && (
              <span className="font-mono text-sm font-bold text-classified-red bg-classified-red/10 px-2 py-0.5 rounded">
                {event.time}
              </span>
            )}
          </div>

          {/* Title — links to event detail page */}
          <h3 className="font-serif text-lg md:text-xl font-bold leading-snug mb-2">
            <Link
              href={`/cronologia/${event.id}`}
              className="text-[var(--text-primary)] hover:text-classified-red transition-colors no-underline"
            >
              {title}
            </Link>
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
            {description}
          </p>

          {/* Quote with typewriter effect */}
          {event.quote && (
            <div className="my-3 py-2 border-l-2 border-classified-red/40 pl-3">
              <p className="font-body text-sm italic text-[var(--text-primary)]">
                &ldquo;
                {isInView ? (
                  <TypewriterText
                    text={event.quote.text}
                    speed={30}
                    delay={600}
                  />
                ) : (
                  event.quote.text
                )}
                &rdquo;
              </p>
              <cite className="font-mono text-xs text-[var(--text-secondary)] not-italic mt-1 block">
                {event.quote.source}
              </cite>
            </div>
          )}

          {/* Bottom row: characters + location + stamp */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {/* Character chips — link to detail page */}
            {eventCharacters.map((char) => (
              <Link
                key={char.id}
                href={`/personajes/${char.id}`}
                className="inline-flex items-center gap-1 px-2 py-0.5 text-xs
                  font-mono bg-ink-900/5 dark:bg-paper-50/10
                  text-[var(--text-secondary)] rounded-sm
                  hover:bg-classified-red/10 hover:text-classified-red
                  transition-colors"
                title={char.name}
              >
                <span aria-hidden="true" className="text-[10px]">
                  &#9679;
                </span>
                {char.name.split(" ")[0]}
              </Link>
            ))}

            {/* Location badge */}
            {event.location && (() => {
              const loc = locations.find((l) => l.id === event.location);
              const locName = loc
                ? (locale === "en" ? loc.name.en : loc.name.es)
                : event.location;
              return (
                <Link
                  href={`/mapa#${event.location}`}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs
                    font-mono bg-ink-900/5 dark:bg-paper-50/10
                    text-[var(--text-secondary)] rounded-sm
                    hover:bg-classified-red/10 hover:text-classified-red
                    transition-colors"
                  title={locName}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="truncate max-w-[120px]">{locName}</span>
                </Link>
              );
            })()}

            {/* Source document link + stamp */}
            <div className="ml-auto flex items-center gap-2">
              {sourceDoc?.url ? (
                <a
                  href={sourceDoc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-[0.6rem]
                    font-mono text-classified-red hover:underline underline-offset-2
                    transition-colors"
                  title={sourceDoc.title[locale === "en" ? "en" : "es"]}
                >
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  PDF
                </a>
              ) : null}
              <div className="scale-75 origin-right">
                <StampBadge type={getStampType(event.source)} size="sm" />
              </div>
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
