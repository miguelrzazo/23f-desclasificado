"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";

interface CharacterOption {
  id: string;
  name: string;
  category: "conspirador" | "leal" | "politico" | "internacional";
}

interface TimelineFilterProps {
  categories: string[];
  characters: CharacterOption[];
  activeCategories: string[];
  activeCharacters: string[];
  onCategoryChange: (categories: string[]) => void;
  onCharacterChange: (characters: string[]) => void;
  locale: string;
}

const CATEGORY_LABELS: Record<string, { es: string; en: string }> = {
  todos: { es: "Todos", en: "All" },
  antecedentes: { es: "Antecedentes", en: "Background" },
  noche: { es: "La Noche", en: "The Night" },
  juicio: { es: "Juicio", en: "Trial" },
  secuelas: { es: "Secuelas", en: "Aftermath" },
  internacional: { es: "Internacional", en: "International" },
  desclasificacion: { es: "Desclasificación", en: "Declassification" },
};

const CHARACTER_CATEGORY_LABELS: Record<
  string,
  { es: string; en: string; color: string }
> = {
  conspirador: { es: "Conspiradores", en: "Conspirators", color: "#C41E1E" },
  leal: { es: "Leales", en: "Loyalists", color: "#1E7A3C" },
  politico: { es: "Políticos", en: "Politicians", color: "#2563EB" },
  internacional: {
    es: "Internacional",
    en: "International",
    color: "#9333EA",
  },
};

const CHARACTER_CATEGORY_ORDER = [
  "conspirador",
  "leal",
  "politico",
  "internacional",
] as const;

export default function TimelineFilter({
  categories,
  characters,
  activeCategories,
  activeCharacters,
  onCategoryChange,
  onCharacterChange,
  locale,
}: TimelineFilterProps) {
  const t = useTranslations("timeline");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isAllActive = activeCategories.length === 0;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearch("");
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Group characters by category, filtered by search
  const groupedCharacters = useMemo(() => {
    const query = search.toLowerCase().trim();
    const filtered = query
      ? characters.filter((c) => c.name.toLowerCase().includes(query))
      : characters;

    const groups: Record<string, CharacterOption[]> = {};
    for (const cat of CHARACTER_CATEGORY_ORDER) {
      const inGroup = filtered.filter((c) => c.category === cat);
      if (inGroup.length > 0) {
        groups[cat] = inGroup;
      }
    }
    return groups;
  }, [characters, search]);

  const totalFiltered = Object.values(groupedCharacters).reduce(
    (sum, arr) => sum + arr.length,
    0
  );

  function handleCategoryClick(category: string) {
    if (category === "todos") {
      onCategoryChange([]);
      return;
    }
    if (activeCategories.includes(category)) {
      onCategoryChange(activeCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...activeCategories, category]);
    }
  }

  function handleCharacterSelect(charId: string) {
    if (!activeCharacters.includes(charId)) {
      onCharacterChange([...activeCharacters, charId]);
    }
    setIsOpen(false);
    setSearch("");
  }

  function removeCharacterFilter(charId: string) {
    onCharacterChange(activeCharacters.filter((c) => c !== charId));
  }

  return (
    <div className="mb-8 space-y-4">
      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryClick("todos")}
          className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider
            rounded-sm border transition-colors ${
              isAllActive
                ? "bg-classified-red text-white border-classified-darkred"
                : "bg-transparent text-[var(--text-secondary)] border-ink-900/20 dark:border-paper-50/20 hover:border-classified-red hover:text-classified-red"
            }`}
        >
          {t("filterAll")}
        </button>
        {categories.map((cat) => {
          const isActive = activeCategories.includes(cat);
          const label =
            CATEGORY_LABELS[cat]?.[locale as "es" | "en"] ?? cat;
          return (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider
                rounded-sm border transition-colors ${
                  isActive
                    ? "bg-classified-red text-white border-classified-darkred"
                    : "bg-transparent text-[var(--text-secondary)] border-ink-900/20 dark:border-paper-50/20 hover:border-classified-red hover:text-classified-red"
                }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Character filter — custom dropdown */}
      <div className="flex items-start gap-3 flex-wrap">
        <div className="relative" ref={dropdownRef}>
          {/* Trigger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono
              bg-paper-100 dark:bg-dark-800
              text-[var(--text-primary)]
              border border-ink-900/20 dark:border-paper-50/20
              rounded-sm cursor-pointer
              hover:border-classified-red
              focus:outline-none focus:border-classified-red
              transition-colors"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-label={t("filterByCharacter")}
          >
            {/* Person icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-60"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M20 21a8 8 0 1 0-16 0" />
            </svg>
            <span>{t("filterByCharacter")}</span>
            {/* Chevron */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Dropdown panel */}
          {isOpen && (
            <div
              className="absolute left-0 top-full mt-1 z-50
                w-72 max-h-80
                bg-paper-50 dark:bg-dark-800
                border border-ink-900/20 dark:border-paper-50/20
                rounded-sm shadow-lg
                overflow-hidden
                flex flex-col"
              role="listbox"
              aria-label={t("filterByCharacter")}
            >
              {/* Search input */}
              <div className="p-2 border-b border-ink-900/10 dark:border-paper-50/10">
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={
                    locale === "es" ? "Buscar personaje..." : "Search character..."
                  }
                  className="w-full px-2 py-1.5 text-xs font-mono
                    bg-paper-100 dark:bg-dark-700
                    text-[var(--text-primary)]
                    border border-ink-900/10 dark:border-paper-50/10
                    rounded-sm
                    placeholder:text-ink-400 dark:placeholder:text-paper-500
                    focus:outline-none focus:border-classified-red"
                />
              </div>

              {/* Grouped character list */}
              <div className="overflow-y-auto flex-1">
                {totalFiltered === 0 ? (
                  <div className="px-3 py-4 text-center">
                    <p className="text-xs font-mono text-ink-400 dark:text-paper-500">
                      {locale === "es"
                        ? "Sin resultados"
                        : "No results"}
                    </p>
                  </div>
                ) : (
                  CHARACTER_CATEGORY_ORDER.map((cat) => {
                    const group = groupedCharacters[cat];
                    if (!group) return null;
                    const catInfo = CHARACTER_CATEGORY_LABELS[cat];
                    return (
                      <div key={cat}>
                        {/* Group header */}
                        <div className="sticky top-0 px-3 py-1.5 bg-paper-200/80 dark:bg-dark-700/80 backdrop-blur-sm border-b border-ink-900/5 dark:border-paper-50/5">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: catInfo.color }}
                              aria-hidden="true"
                            />
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink-500 dark:text-paper-400">
                              {catInfo[locale as "es" | "en"]}
                            </span>
                            <span className="font-mono text-[10px] text-ink-400 dark:text-paper-500">
                              ({group.length})
                            </span>
                          </div>
                        </div>

                        {/* Characters in group */}
                        {group.map((char) => {
                          const isSelected = activeCharacters.includes(char.id);
                          return (
                            <button
                              key={char.id}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => handleCharacterSelect(char.id)}
                              disabled={isSelected}
                              className={`w-full text-left px-3 py-2 text-xs font-mono
                                flex items-center gap-2
                                transition-colors
                                ${
                                  isSelected
                                    ? "bg-classified-red/10 text-classified-red cursor-default"
                                    : "text-[var(--text-primary)] hover:bg-classified-red/5 hover:text-classified-red cursor-pointer"
                                }`}
                            >
                              {/* Category dot */}
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: catInfo.color }}
                                aria-hidden="true"
                              />
                              <span className="truncate">{char.name}</span>
                              {isSelected && (
                                <span className="ml-auto text-[10px] text-classified-red">
                                  &#10003;
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Active character chips */}
        {activeCharacters.map((charId) => {
          const char = characters.find((c) => c.id === charId);
          const catColor = char
            ? CHARACTER_CATEGORY_LABELS[char.category]?.color
            : undefined;
          return (
            <button
              key={charId}
              onClick={() => removeCharacterFilter(charId)}
              className="inline-flex items-center gap-1.5 px-2 py-1 text-xs
                font-mono bg-classified-red/10 text-classified-red
                border border-classified-red/30 rounded-sm
                hover:bg-classified-red hover:text-white transition-colors"
              aria-label={`${t("removeFilter")}: ${char?.name}`}
            >
              {catColor && (
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: catColor }}
                  aria-hidden="true"
                />
              )}
              {char?.name ?? charId}
              <span aria-hidden="true" className="text-[10px] ml-0.5">
                &times;
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
