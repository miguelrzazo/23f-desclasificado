"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Character } from "@/content/data/characters";
import { characters as allCharacters } from "@/content/data/characters";
import { Link } from "@/i18n/routing";
import CensoredPhoto from "@/components/ui/CensoredPhoto";

interface CharacterCardProps {
  character: Character;
  locale: string;
}

const CATEGORY_BADGE: Record<
  Character["category"],
  { label: { es: string; en: string }; color: string }
> = {
  conspirador: {
    label: { es: "Conspirador", en: "Conspirator" },
    color: "bg-red-700 text-red-100",
  },
  leal: {
    label: { es: "Leal", en: "Loyalist" },
    color: "bg-emerald-700 text-emerald-100",
  },
  politico: {
    label: { es: "Politico", en: "Politician" },
    color: "bg-blue-700 text-blue-100",
  },
  internacional: {
    label: { es: "Internacional", en: "International" },
    color: "bg-purple-700 text-purple-100",
  },
};

export default function CharacterCard({
  character,
  locale,
}: CharacterCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const badge = CATEGORY_BADGE[character.category];
  const lang = locale === "en" ? "en" : "es";

  return (
    <div
      className="group perspective-[800px] h-[320px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 paper-texture rounded-sm shadow-md p-4 flex flex-col items-center justify-center gap-3"
          style={{ backfaceVisibility: "hidden" }}
        >
          <CensoredPhoto
            name={character.name}
            category={character.category}
            size="sm"
          />
          <div className="text-center">
            <h3 className="font-serif text-sm font-bold text-[var(--text-primary)] leading-tight">
              {character.name}
            </h3>
            <p className="font-mono text-[0.6rem] text-[var(--text-secondary)] mt-1 line-clamp-2">
              {character.role[lang]}
            </p>
          </div>
          <Link
            href={`/personajes/${character.id}`}
            className="absolute inset-0 z-10"
            aria-label={character.name}
          >
            <span className="sr-only">{character.name}</span>
          </Link>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 paper-texture rounded-sm shadow-md p-4 flex flex-col overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="font-serif text-sm font-bold text-[var(--text-primary)] mb-3 border-b border-[var(--border)] pb-2">
            {lang === "es" ? "Conexiones" : "Connections"}
          </h4>
          {character.connections.length === 0 ? (
            <p className="text-xs text-[var(--text-secondary)] italic font-mono">
              {lang === "es"
                ? "Sin conexiones directas registradas"
                : "No direct connections recorded"}
            </p>
          ) : (
            <ul className="space-y-2 flex-1">
              {character.connections.map((conn) => {
                const target = allCharacters.find(
                  (c) => c.id === conn.targetId
                );
                return (
                  <li key={conn.targetId} className="flex items-start gap-2">
                    <span
                      className="text-red-500 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                    <div className="min-w-0">
                      <Link
                        href={`/personajes/${conn.targetId}`}
                        className="text-xs font-mono font-bold text-[var(--text-primary)] hover:text-red-400 transition-colors no-underline"
                      >
                        {target?.name ?? conn.targetId}
                      </Link>
                      <p className="text-[0.6rem] text-[var(--text-secondary)] leading-tight mt-0.5">
                        {conn.relation[lang]}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <Link
            href={`/personajes/${character.id}`}
            className="mt-2 text-xs font-mono text-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors no-underline"
          >
            {lang === "es" ? "Ver perfil completo" : "View full profile"} &rarr;
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
