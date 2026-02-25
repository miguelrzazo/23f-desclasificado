"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { characters } from "@/content/data/characters";
import type { Character } from "@/content/data/characters";
import CharacterCard from "./CharacterCard";
import { useLocale } from "next-intl";

type CategoryFilter =
  | "todos"
  | "conspirador"
  | "leal"
  | "politico"
  | "internacional";

const FILTERS: Array<{
  key: CategoryFilter;
  label: { es: string; en: string };
}> = [
  { key: "todos", label: { es: "Todos", en: "All" } },
  { key: "conspirador", label: { es: "Conspiradores", en: "Conspirators" } },
  { key: "leal", label: { es: "Leales", en: "Loyalists" } },
  { key: "politico", label: { es: "Politicos", en: "Politicians" } },
  {
    key: "internacional",
    label: { es: "Internacional", en: "International" },
  },
];

const FILTER_ACTIVE_COLORS: Record<CategoryFilter, string> = {
  todos:
    "bg-[var(--text-primary)] text-[var(--bg-primary)]",
  conspirador: "bg-red-700 text-red-100",
  leal: "bg-emerald-700 text-emerald-100",
  politico: "bg-blue-700 text-blue-100",
  internacional: "bg-purple-700 text-purple-100",
};

export default function CharacterGrid() {
  const locale = useLocale();
  const lang = locale === "en" ? "en" : "es";
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("todos");

  const filtered: Character[] =
    activeFilter === "todos"
      ? characters
      : characters.filter((c) => c.category === activeFilter);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.key;
          return (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider border transition-all ${
                isActive
                  ? `${FILTER_ACTIVE_COLORS[filter.key]} border-transparent`
                  : "border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)]"
              }`}
            >
              {filter.label[lang]}
              {isActive && (
                <span className="ml-1.5 opacity-70">({filtered.length})</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((character) => (
            <motion.div
              key={character.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <CharacterCard character={character} locale={locale} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
