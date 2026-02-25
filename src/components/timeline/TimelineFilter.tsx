"use client";

import { useTranslations } from "next-intl";

interface TimelineFilterProps {
  categories: string[];
  characters: Array<{ id: string; name: string }>;
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

  const isAllActive = activeCategories.length === 0;

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

  function handleCharacterSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (!value) return;
    if (!activeCharacters.includes(value)) {
      onCharacterChange([...activeCharacters, value]);
    }
    e.target.value = "";
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

      {/* Character filter */}
      <div className="flex items-center gap-3 flex-wrap">
        <select
          onChange={handleCharacterSelect}
          defaultValue=""
          className="px-3 py-1.5 text-xs font-mono
            bg-paper-100 dark:bg-dark-800
            text-[var(--text-primary)]
            border border-ink-900/20 dark:border-paper-50/20
            rounded-sm cursor-pointer
            focus:outline-none focus:border-classified-red"
          aria-label={t("filterByCharacter")}
        >
          <option value="">{t("filterByCharacter")}</option>
          {characters.map((char) => (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          ))}
        </select>

        {/* Active character chips */}
        {activeCharacters.map((charId) => {
          const char = characters.find((c) => c.id === charId);
          return (
            <button
              key={charId}
              onClick={() => removeCharacterFilter(charId)}
              className="inline-flex items-center gap-1 px-2 py-1 text-xs
                font-mono bg-classified-red/10 text-classified-red
                border border-classified-red/30 rounded-sm
                hover:bg-classified-red hover:text-white transition-colors"
              aria-label={`${t("removeFilter")}: ${char?.name}`}
            >
              {char?.name.split(" ")[0] ?? charId}
              <span aria-hidden="true" className="text-[10px] ml-1">
                &times;
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
