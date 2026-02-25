"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type MapView = "illustrated" | "interactive";

interface MapToggleProps {
  view: MapView;
  onToggle: (view: MapView) => void;
}

export default function MapToggle({ view, onToggle }: MapToggleProps) {
  const t = useTranslations("map");

  return (
    <div
      className="inline-flex rounded-sm border border-paper-300 dark:border-dark-600 overflow-hidden font-mono text-xs"
      role="tablist"
      aria-label={t("toggleView")}
    >
      <button
        role="tab"
        aria-selected={view === "illustrated"}
        onClick={() => onToggle("illustrated")}
        className={`relative px-4 py-2 transition-colors duration-200 ${
          view === "illustrated"
            ? "text-white"
            : "text-ink-700 dark:text-paper-300 hover:bg-paper-200 dark:hover:bg-dark-700"
        }`}
      >
        {view === "illustrated" && (
          <motion.div
            layoutId="map-toggle-bg"
            className="absolute inset-0 bg-classified-red"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">{t("illustrated")}</span>
      </button>
      <button
        role="tab"
        aria-selected={view === "interactive"}
        onClick={() => onToggle("interactive")}
        className={`relative px-4 py-2 transition-colors duration-200 ${
          view === "interactive"
            ? "text-white"
            : "text-ink-700 dark:text-paper-300 hover:bg-paper-200 dark:hover:bg-dark-700"
        }`}
      >
        {view === "interactive" && (
          <motion.div
            layoutId="map-toggle-bg"
            className="absolute inset-0 bg-classified-red"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">{t("interactive")}</span>
      </button>
    </div>
  );
}
