"use client";

import { characters } from "@/content/data/characters";
import { Link } from "@/i18n/routing";

interface CharacterBadgeProps {
  characterId: string;
  locale: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  conspirador:
    "bg-red-900/20 text-red-400 border-red-700/40 hover:bg-red-900/30",
  leal: "bg-emerald-900/20 text-emerald-400 border-emerald-700/40 hover:bg-emerald-900/30",
  politico:
    "bg-blue-900/20 text-blue-400 border-blue-700/40 hover:bg-blue-900/30",
  internacional:
    "bg-purple-900/20 text-purple-400 border-purple-700/40 hover:bg-purple-900/30",
};

export default function CharacterBadge({
  characterId,
  locale,
}: CharacterBadgeProps) {
  const character = characters.find((c) => c.id === characterId);

  if (!character) {
    return null;
  }

  const colorClass =
    CATEGORY_COLORS[character.category] ?? CATEGORY_COLORS.conspirador;

  return (
    <Link
      href={`/personajes/${character.id}`}
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-mono no-underline transition-colors ${colorClass}`}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{
          backgroundColor:
            character.category === "conspirador"
              ? "#ef4444"
              : character.category === "leal"
                ? "#10b981"
                : character.category === "politico"
                  ? "#3b82f6"
                  : "#a855f7",
        }}
        aria-hidden="true"
      />
      {character.name.split(" ").slice(-1)[0]}
    </Link>
  );
}
