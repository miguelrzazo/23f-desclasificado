"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import StampBadge from "@/components/ui/StampBadge";
import DossierSection from "@/components/ui/DossierSection";
import MapToggle from "@/components/map/MapToggle";
import DossierMap from "@/components/map/DossierMap";
import InteractiveMap from "@/components/map/InteractiveMap";
import type { Location } from "@/content/data/locations";
import { timelineEvents } from "@/content/data/timeline";

type MapView = "illustrated" | "interactive";

export default function MapPageContent() {
  const locale = useLocale();
  const t = useTranslations("map");
  const [view, setView] = useState<MapView>("illustrated");
  const [selectedLocation, setSelectedLocation] =
    useState<Location | null>(null);

  // Get related events for the selected location
  const relatedEvents = selectedLocation
    ? timelineEvents.filter((e) =>
        selectedLocation.events.includes(e.id)
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink-900 dark:text-paper-50">
            {t("title")}
          </h1>
          <StampBadge type="desclasificado" size="sm" animated />
        </div>
        <MapToggle view={view} onToggle={setView} />
      </div>

      {/* Map + Side Panel layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map area */}
        <div className="lg:col-span-2">
          <DossierSection tabLabel={t("tabLabel")}>
            <AnimatePresence mode="wait">
              {view === "illustrated" ? (
                <motion.div
                  key="illustrated"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <DossierMap
                    selectedLocation={selectedLocation}
                    onSelectLocation={setSelectedLocation}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="interactive"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <InteractiveMap
                    selectedLocation={selectedLocation}
                    onSelectLocation={setSelectedLocation}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </DossierSection>
        </div>

        {/* Side panel — location details */}
        <div className="lg:col-span-1">
          <AnimatePresence mode="wait">
            {selectedLocation ? (
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <DossierSection tabLabel={t("detailsTab")}>
                  <div className="space-y-4">
                    {/* Location name */}
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-ink-900 dark:text-paper-50">
                      {locale === "en"
                        ? selectedLocation.name.en
                        : selectedLocation.name.es}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-ink-700 dark:text-paper-300 leading-relaxed font-body">
                      {locale === "en"
                        ? selectedLocation.description.en
                        : selectedLocation.description.es}
                    </p>

                    {/* Relevance */}
                    <div className="border-l-2 border-classified-red pl-3">
                      <p className="text-sm text-ink-900 dark:text-paper-100 leading-relaxed font-body italic">
                        {locale === "en"
                          ? selectedLocation.relevance.en
                          : selectedLocation.relevance.es}
                      </p>
                    </div>

                    {/* Related events */}
                    {relatedEvents.length > 0 && (
                      <div>
                        <h3 className="font-mono text-xs font-bold text-classified-red uppercase tracking-wider mb-3">
                          {t("relatedEvents")} ({relatedEvents.length})
                        </h3>
                        <ul className="space-y-2">
                          {relatedEvents.slice(0, 8).map((event) => (
                            <li
                              key={event.id}
                              className="text-xs font-mono text-ink-700 dark:text-paper-300 
                                border-b border-paper-200 dark:border-dark-600 pb-2 last:border-0"
                            >
                              <span className="text-classified-red font-bold">
                                {event.time || event.datetime.split("T")[0]}
                              </span>
                              {" — "}
                              {locale === "en"
                                ? event.title.en
                                : event.title.es}
                            </li>
                          ))}
                          {relatedEvents.length > 8 && (
                            <li className="text-xs font-mono text-ink-500 italic">
                              +{relatedEvents.length - 8} {t("moreEvents")}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Coordinates */}
                    <p className="font-mono text-[10px] text-ink-500 dark:text-paper-400">
                      {selectedLocation.coordinates[0].toFixed(4)}N,{" "}
                      {selectedLocation.coordinates[1].toFixed(4)}W
                    </p>

                    {/* Close button */}
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="font-mono text-xs text-classified-red hover:text-classified-darkred 
                        transition-colors duration-200 underline underline-offset-2"
                    >
                      {t("closePanel")}
                    </button>
                  </div>
                </DossierSection>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <DossierSection tabLabel={t("detailsTab")}>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    {/* Pin icon */}
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      className="mb-4 opacity-30"
                    >
                      <circle
                        cx="24"
                        cy="16"
                        r="12"
                        fill="#C41E1E"
                        stroke="#8B1414"
                        strokeWidth="2"
                      />
                      <circle
                        cx="20"
                        cy="12"
                        r="3"
                        fill="rgba(255,255,255,0.4)"
                      />
                      <line
                        x1="24"
                        y1="28"
                        x2="24"
                        y2="46"
                        stroke="#8B1414"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <p className="font-mono text-sm text-ink-500 dark:text-paper-400">
                      {t("selectPrompt")}
                    </p>
                  </div>
                </DossierSection>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
