"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import StampBadge from "@/components/ui/StampBadge";
import Timeline from "@/components/timeline/Timeline";
import MinuteByMinute from "@/components/timeline/MinuteByMinute";
import { timelineEvents } from "@/content/data/timeline";
import { characters } from "@/content/data/characters";

interface CronologiaPageContentProps {
  locale: string;
}

export default function CronologiaPageContent({
  locale,
}: CronologiaPageContentProps) {
  const t = useTranslations("timeline");
  const [view, setView] = useState<"full" | "noche">("full");

  const nocheEvents = timelineEvents.filter((e) => e.category === "noche");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Page header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
            {t("title")}
          </h1>
          <p className="font-body text-lg text-[var(--text-secondary)] mt-2">
            {t("subtitle")}
          </p>
        </div>
        <div className="flex-shrink-0 mt-2">
          <StampBadge type="desclasificado" size="md" animated />
        </div>
      </div>

      {/* View toggle */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setView("full")}
          className={`px-4 py-2 text-sm font-mono font-bold uppercase tracking-wider
            rounded-sm border transition-colors ${
              view === "full"
                ? "bg-classified-red text-white border-classified-darkred"
                : "bg-transparent text-[var(--text-secondary)] border-ink-900/20 dark:border-paper-50/20 hover:border-classified-red hover:text-classified-red"
            }`}
        >
          {t("viewFull")}
        </button>
        <button
          onClick={() => setView("noche")}
          className={`px-4 py-2 text-sm font-mono font-bold uppercase tracking-wider
            rounded-sm border transition-colors ${
              view === "noche"
                ? "bg-classified-red text-white border-classified-darkred"
                : "bg-transparent text-[var(--text-secondary)] border-ink-900/20 dark:border-paper-50/20 hover:border-classified-red hover:text-classified-red"
            }`}
        >
          {t("viewNoche")}
        </button>
      </div>

      {/* Content */}
      {view === "full" ? (
        <Timeline
          events={timelineEvents}
          characters={characters}
          locale={locale}
        />
      ) : (
        <div>
          <div className="mb-6 p-4 paper-texture dossier-section rounded-sm border-l-4 border-classified-red">
            <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-1">
              {t("nocheTitle")}
            </h2>
            <p className="font-body text-sm text-[var(--text-secondary)]">
              {t("nocheDescription")}
            </p>
          </div>
          <MinuteByMinute events={nocheEvents} locale={locale} />
        </div>
      )}
    </div>
  );
}
