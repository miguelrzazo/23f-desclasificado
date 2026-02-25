"use client";

import { useTranslations } from "next-intl";
import { characters } from "@/content/data/characters";
import { connections } from "@/content/data/connections";
import StampBadge from "@/components/ui/StampBadge";
import CharacterGrid from "@/components/characters/CharacterGrid";
import ConnectionMap from "@/components/characters/ConnectionMap";

interface PersonajesPageContentProps {
  locale: string;
}

export default function PersonajesPageContent({
  locale,
}: PersonajesPageContentProps) {
  const t = useTranslations("characters");

  return (
    <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
      {/* Page header */}
      <header className="mb-12 relative">
        <div className="flex items-start gap-4">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              {t("title")}
            </h1>
            <p className="font-body text-lg text-[var(--text-secondary)] mt-3 max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
          <div className="hidden md:block flex-shrink-0 mt-2">
            <StampBadge type="desclasificado" size="lg" animated />
          </div>
        </div>
      </header>

      {/* Character grid with filters */}
      <section aria-labelledby="characters-grid-heading">
        <h2 id="characters-grid-heading" className="sr-only">
          {t("gridTitle")}
        </h2>
        <CharacterGrid />
      </section>

      {/* Connection map */}
      <section className="mt-16" aria-labelledby="connections-heading">
        <h2
          id="connections-heading"
          className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2"
        >
          {t("connectionsTitle")}
        </h2>
        <p className="font-body text-sm text-[var(--text-secondary)] mb-6 max-w-2xl">
          {t("connectionsSubtitle")}
        </p>
        <div className="paper-texture rounded-sm p-4 md:p-6">
          <ConnectionMap
            characters={characters}
            connections={connections}
            locale={locale}
          />
        </div>
      </section>
    </div>
  );
}
