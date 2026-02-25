import Link from "next/link";

/** Metadata for each chapter — slug, titles, and number */
export const CHAPTERS = [
  {
    slug: "antecedentes",
    number: 1,
    title: { es: "Los Antecedentes", en: "The Background" },
    period: { es: "1977\u20131981", en: "1977\u20131981" },
  },
  {
    slug: "la-noche",
    number: 2,
    title: { es: "La Noche", en: "The Night" },
    period: { es: "23\u201324 febrero 1981", en: "23\u201324 February 1981" },
  },
  {
    slug: "cesid",
    number: 3,
    title: { es: "El CESID", en: "The CESID" },
    period: { es: "1980\u20131983", en: "1980\u20131983" },
  },
  {
    slug: "juicio",
    number: 4,
    title: { es: "El Juicio", en: "The Trial" },
    period: { es: "1982", en: "1982" },
  },
  {
    slug: "sombras",
    number: 5,
    title: { es: "Las Sombras", en: "The Shadows" },
    period: { es: "1981\u20131995", en: "1981\u20131995" },
  },
  {
    slug: "internacional",
    number: 6,
    title: { es: "El Mundo Mira", en: "The World Watches" },
    period: { es: "feb\u2013mar 1981", en: "Feb\u2013Mar 1981" },
  },
  {
    slug: "prisioneros",
    number: 7,
    title: { es: "Los Prisioneros", en: "The Prisoners" },
    period: { es: "1981\u20131990", en: "1981\u20131990" },
  },
] as const;

export type ChapterSlug = (typeof CHAPTERS)[number]["slug"];

interface ChapterNavProps {
  currentSlug: string;
  locale: string;
}

export default function ChapterNav({ currentSlug, locale }: ChapterNavProps) {
  const lang = locale === "en" ? "en" : "es";
  const currentIndex = CHAPTERS.findIndex((ch) => ch.slug === currentSlug);
  const prev = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const next =
    currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  return (
    <nav
      className="chapter-nav flex items-stretch justify-between gap-4 mx-auto max-w-4xl px-4 py-12"
      aria-label="Chapter navigation"
    >
      {/* Previous */}
      {prev ? (
        <Link
          href={`/${locale}/capitulo/${prev.slug}`}
          className="group flex-1 flex items-center gap-3 p-4 rounded-sm border border-[var(--border)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] transition-colors"
        >
          <span
            className="text-2xl text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors"
            aria-hidden="true"
          >
            &larr;
          </span>
          <div className="text-left">
            <span className="block font-mono text-[10px] tracking-widest uppercase text-[var(--text-secondary)]">
              {lang === "es" ? "Anterior" : "Previous"}
            </span>
            <span className="block font-serif text-sm md:text-base text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {prev.title[lang]}
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {/* Next */}
      {next ? (
        <Link
          href={`/${locale}/capitulo/${next.slug}`}
          className="group flex-1 flex items-center justify-end gap-3 p-4 rounded-sm border border-[var(--border)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] transition-colors text-right"
        >
          <div>
            <span className="block font-mono text-[10px] tracking-widest uppercase text-[var(--text-secondary)]">
              {lang === "es" ? "Siguiente" : "Next"}
            </span>
            <span className="block font-serif text-sm md:text-base text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {next.title[lang]}
            </span>
          </div>
          <span
            className="text-2xl text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
