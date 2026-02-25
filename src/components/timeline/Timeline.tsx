"use client";

import { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import TimelineEventCard from "./TimelineEvent";
import TimelineFilter from "./TimelineFilter";
import type { TimelineEvent } from "@/content/data/timeline";
import type { Character } from "@/content/data/characters";

interface TimelineProps {
  events: TimelineEvent[];
  characters: Character[];
  locale: string;
}

/** Category labels for era separators */
const ERA_LABELS: Record<string, { es: string; en: string }> = {
  antecedentes: { es: "ANTECEDENTES 1977-1981", en: "BACKGROUND 1977-1981" },
  noche: {
    es: "LA NOCHE — 23-24 FEBRERO 1981",
    en: "THE NIGHT — FEBRUARY 23-24, 1981",
  },
  juicio: { es: "EL JUICIO 1982", en: "THE TRIAL 1982" },
  secuelas: { es: "SECUELAS 1981-1985", en: "AFTERMATH 1981-1985" },
  internacional: {
    es: "REACCIÓN INTERNACIONAL",
    en: "INTERNATIONAL REACTION",
  },
  desclasificacion: {
    es: "DESCLASIFICACIÓN 2026",
    en: "DECLASSIFICATION 2026",
  },
};

const CATEGORIES = [
  "antecedentes",
  "noche",
  "juicio",
  "secuelas",
  "internacional",
  "desclasificacion",
];

export default function Timeline({ events, characters, locale }: TimelineProps) {
  const t = useTranslations("timeline");
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [activeCharacters, setActiveCharacters] = useState<string[]>([]);

  const characterOptions = useMemo(() => {
    const charIds = new Set(events.flatMap((e) => e.characters));
    return characters
      .filter((c) => charIds.has(c.id))
      .map((c) => ({ id: c.id, name: c.name, category: c.category }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [events, characters]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const categoryMatch =
        activeCategories.length === 0 ||
        activeCategories.includes(event.category);
      const characterMatch =
        activeCharacters.length === 0 ||
        event.characters.some((c) => activeCharacters.includes(c));
      return categoryMatch && characterMatch;
    });
  }, [events, activeCategories, activeCharacters]);

  const handleCategoryChange = useCallback((cats: string[]) => {
    setActiveCategories(cats);
  }, []);

  const handleCharacterChange = useCallback((chars: string[]) => {
    setActiveCharacters(chars);
  }, []);

  // Group events by category for era separators
  let lastCategory = "";

  return (
    <div>
      <TimelineFilter
        categories={CATEGORIES}
        characters={characterOptions}
        activeCategories={activeCategories}
        activeCharacters={activeCharacters}
        onCategoryChange={handleCategoryChange}
        onCharacterChange={handleCharacterChange}
        locale={locale}
      />

      {/* Counter */}
      <p className="font-mono text-xs text-[var(--text-secondary)] mb-6">
        {t("showingEvents", { count: filteredEvents.length, total: events.length })}
      </p>

      {/* Timeline container */}
      <div className="relative">
        {/* Central vertical line */}
        <div
          className="absolute left-[27px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0
            w-[3px] bg-gradient-to-b from-classified-red via-classified-red to-classified-red/20"
          aria-hidden="true"
        />

        {/* Events */}
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event, index) => {
            const showSeparator = event.category !== lastCategory;
            lastCategory = event.category;
            const side: "left" | "right" = index % 2 === 0 ? "right" : "left";

            return (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {/* Era separator */}
                {showSeparator && (
                  <div className="relative flex items-center justify-center my-8">
                    <div className="absolute left-[27px] md:left-1/2 md:-translate-x-[1px] w-[3px] h-full bg-classified-red" aria-hidden="true" />
                    <div
                      className="relative z-10 px-4 py-2 bg-classified-red text-white
                        font-mono text-xs font-bold uppercase tracking-[0.2em]
                        border border-classified-darkred rounded-sm
                        shadow-md"
                    >
                      {ERA_LABELS[event.category]?.[locale as "es" | "en"] ??
                        event.category.toUpperCase()}
                    </div>
                  </div>
                )}

                <TimelineEventCard
                  event={event}
                  side={side}
                  locale={locale}
                  characters={characters}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* End marker */}
        {filteredEvents.length > 0 && (
          <div className="relative flex justify-start md:justify-center py-4">
            <div
              className="ml-[15px] md:ml-0 w-8 h-8 rounded-full bg-classified-red/20
                border-2 border-classified-red flex items-center justify-center"
            >
              <div className="w-3 h-3 rounded-full bg-classified-red" />
            </div>
          </div>
        )}

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="font-mono text-sm text-[var(--text-secondary)]">
              {t("noEvents")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
