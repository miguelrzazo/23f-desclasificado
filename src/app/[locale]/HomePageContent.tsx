"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@/i18n/routing";
import StampBadge from "@/components/ui/StampBadge";
import CensoredPhoto from "@/components/ui/CensoredPhoto";
import RedTape from "@/components/ui/RedTape";
import DocumentScatter from "@/components/ui/DocumentScatter";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const CHAPTERS = [
  { num: "I", key: "chapter1", slug: "antecedentes" },
  { num: "II", key: "chapter2", slug: "la-noche" },
  { num: "III", key: "chapter3", slug: "cesid" },
  { num: "IV", key: "chapter4", slug: "juicio" },
  { num: "V", key: "chapter5", slug: "sombras" },
  { num: "VI", key: "chapter6", slug: "internacional" },
  { num: "VII", key: "chapter7", slug: "prisioneros" },
] as const;

const MILESTONES = [
  { id: "m1", date: "Oct 1977", titleEs: "Incidente de Málaga", titleEn: "Málaga Incident" },
  { id: "m2", date: "Nov 1978", titleEs: "Operación Galaxia", titleEn: "Operation Galaxia" },
  { id: "m3", date: "23 Feb 1981 18:20", titleEs: "Asalto al Congreso", titleEn: "Assault on Congress" },
  { id: "m4", date: "24 Feb 1981 01:14", titleEs: "Mensaje del Rey", titleEn: "The King's Message" },
  { id: "m5", date: "24 Feb 1981 12:00", titleEs: "Rendición de Tejero", titleEn: "Tejero Surrenders" },
  { id: "m6", date: "Feb 1982", titleEs: "Inicio del juicio", titleEn: "Trial Begins" },
  { id: "m7", date: "Jun 1982", titleEs: "Sentencias", titleEn: "Sentences" },
  { id: "m8", date: "Feb 2026", titleEs: "Desclasificación", titleEn: "Declassification" },
] as const;

const FEATURED_CHARACTERS: Array<{
  id: string;
  name: string;
  category: "conspirador" | "leal" | "politico" | "internacional";
  roleEs: string;
  roleEn: string;
  image?: string;
}> = [
  {
    id: "tejero",
    name: "Antonio Tejero",
    category: "conspirador",
    roleEs: "Ejecutor del asalto",
    roleEn: "Assault executor",
    image: "/images/characters/tejero.jpg",
  },
  {
    id: "milans",
    name: "Milans del Bosch",
    category: "conspirador",
    roleEs: "Tanques en Valencia",
    roleEn: "Tanks in Valencia",
    image: "/images/characters/milans.jpg",
  },
  {
    id: "armada",
    name: "Alfonso Armada",
    category: "conspirador",
    roleEs: "El cerebro político",
    roleEn: "The political brain",
    image: "/images/characters/armada.jpg",
  },
  {
    id: "rey-juan-carlos",
    name: "Juan Carlos I",
    category: "leal",
    roleEs: "Defensor de la Constitución",
    roleEn: "Defender of the Constitution",
    image: "/images/characters/rey-juan-carlos.jpg",
  },
  {
    id: "fernandez-campo",
    name: "Sabino Fernández Campo",
    category: "leal",
    roleEs: "Coordinador de la respuesta",
    roleEn: "Response coordinator",
    image: "/images/characters/fernandez-campo.jpg",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function useLocale(): "es" | "en" {
  const t = useTranslations("language");
  return t("current") === "EN" ? "en" : "es";
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function HeroSection() {
  const t = useTranslations("home");
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale sepia-[0.3] opacity-40 dark:opacity-25 pointer-events-none"
        aria-hidden="true"
      >
        <source src="/video/hero-23f.mp4" type="video/mp4" />
      </video>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 dark:from-black/85 dark:via-black/60 dark:to-black/85" />
      <div className="absolute inset-0 mix-blend-multiply bg-[var(--bg-primary)] opacity-30 dark:opacity-50" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        {/* Title */}
        <motion.h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-paper-50 tracking-tight leading-none select-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t("hero")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-lg md:text-2xl text-paper-200 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t("subtitle")}
        </motion.p>

        {/* Stamp */}
        <motion.div
          initial={{ scale: 2, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 0.85, rotate: -3 }}
          transition={{ delay: 1.0, type: "spring", stiffness: 260, damping: 18 }}
          className="mt-4"
        >
          <StampBadge type="desclasificado" size="lg" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-paper-300">
          {t("scrollHint")}
        </span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-paper-300"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function ChapterCard({
  num,
  chapterKey,
  slug,
  index,
}: {
  num: string;
  chapterKey: string;
  slug: string;
  index: number;
}) {
  const t = useTranslations("home");

  const title = t(`${chapterKey}.title` as any);
  const period = t(`${chapterKey}.period` as any);
  const subtitle = t(`${chapterKey}.subtitle` as any);
  const docs = t(`${chapterKey}.docs` as any);
  const docsLabel = t("docsLabel");

  const stampTypes = [
    "desclasificado",
    "secreto",
    "reservado",
    "confidencial",
    "desclasificado",
    "secreto",
    "reservado",
  ] as const;

  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/capitulo/${slug}`}
        className="group block paper-texture rounded-sm border border-[var(--border)] p-5 md:p-6 relative overflow-hidden
          transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10"
      >
        {/* Folder edge */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, var(--accent-muted) 0%, var(--border) 50%, var(--accent-muted) 100%)",
          }}
        />

        <div className="flex items-start justify-between gap-3 mb-3">
          {/* Roman numeral */}
          <span className="font-serif text-3xl md:text-4xl font-bold text-classified-red dark:text-classified-brightred leading-none">
            {num}
          </span>
          <StampBadge type={stampTypes[index]} size="sm" rotation={-3 + index} />
        </div>

        <h3 className="font-serif text-lg md:text-xl font-bold text-[var(--text-primary)] mb-1 leading-tight group-hover:text-classified-red dark:group-hover:text-classified-brightred transition-colors">
          {title}
        </h3>

        <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-2">
          {period}
        </p>

        <p className="font-body text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex items-center gap-1.5 font-mono text-xs text-classified-red dark:text-classified-brightred">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-3.5 h-3.5"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span>
            {docs} {docsLabel}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function ChaptersSection() {
  const t = useTranslations("home");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <RedTape text={t("chaptersTitle")} />

      <motion.p
        className="font-body text-center text-[var(--text-secondary)] mt-6 mb-10 max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {t("chaptersSubtitle")}
      </motion.p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {CHAPTERS.map((ch, i) => (
          <ChapterCard
            key={ch.slug}
            num={ch.num}
            chapterKey={ch.key}
            slug={ch.slug}
            index={i}
          />
        ))}
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function TimelineSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 overflow-hidden">
      <div className="px-4 max-w-7xl mx-auto">
        <RedTape text={t("timelineTitle")} />
        <motion.p
          className="font-body text-center text-[var(--text-secondary)] mt-6 mb-10 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {t("timelineSubtitle")}
        </motion.p>
      </div>

      {/* Horizontal scroll container */}
      <motion.div
        className="flex gap-0 overflow-x-auto pb-6 px-4 md:px-8 scrollbar-thin"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {MILESTONES.map((ms, i) => (
          <div
            key={ms.id}
            className="flex-shrink-0 flex flex-col items-center relative"
            style={{ minWidth: "160px" }}
          >
            {/* Date */}
            <span className="font-mono text-[0.65rem] text-classified-red dark:text-classified-brightred uppercase tracking-wider font-bold mb-2 text-center px-2">
              {ms.date}
            </span>

            {/* Dot + line */}
            <div className="relative flex items-center w-full">
              {/* Line */}
              {i < MILESTONES.length - 1 && (
                <div className="absolute top-1/2 left-1/2 right-0 h-[2px] bg-classified-red/30 dark:bg-classified-brightred/30 -translate-y-1/2" />
              )}
              {i > 0 && (
                <div className="absolute top-1/2 left-0 right-1/2 h-[2px] bg-classified-red/30 dark:bg-classified-brightred/30 -translate-y-1/2" />
              )}
              {/* Dot */}
              <div className="relative mx-auto w-3 h-3 rounded-full bg-classified-red dark:bg-classified-brightred border-2 border-[var(--bg-primary)] z-10 shadow-sm" />
            </div>

            {/* Title */}
            <p className="font-body text-xs text-center text-[var(--text-primary)] mt-2 px-2 leading-snug max-w-[140px]">
              {locale === "es" ? ms.titleEs : ms.titleEn}
            </p>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="flex justify-center mt-8 px-4">
        <Link
          href="/cronologia"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-classified-red dark:text-classified-brightred hover:underline underline-offset-4 transition-colors"
        >
          {t("timelineCta")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function CharactersSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <RedTape text={t("charactersTitle")} />
      <motion.p
        className="font-body text-center text-[var(--text-secondary)] mt-6 mb-10 max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {t("charactersSubtitle")}
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-10"
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {FEATURED_CHARACTERS.map((ch) => (
          <motion.div key={ch.id} variants={fadeUp}>
            <Link
              href={`/personajes/${ch.id}`}
              className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1"
            >
              <CensoredPhoto name={ch.name} category={ch.category} image={ch.image} size="md" />
              <span className="font-body text-xs text-[var(--text-secondary)] text-center max-w-[120px] leading-snug group-hover:text-classified-red dark:group-hover:text-classified-brightred transition-colors">
                {locale === "es" ? ch.roleEs : ch.roleEn}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <Link
          href="/personajes"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-classified-red dark:text-classified-brightred hover:underline underline-offset-4 transition-colors"
        >
          {t("charactersCta")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function KingQuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 overflow-hidden">
      <motion.div
        className="max-w-3xl mx-auto relative"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Paper background with crease effect */}
        <div className="paper-texture paper-crease paper-crease--double rounded-sm border border-[var(--border)] p-8 md:p-12 relative overflow-hidden coffee-stain">
          {/* Faint RESERVADO stamp watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <span
              className="font-mono font-black text-[7rem] md:text-[10rem] uppercase tracking-widest text-classified-red/[0.04] dark:text-classified-brightred/[0.04] select-none rotate-[-20deg] whitespace-nowrap"
            >
              RESERVADO
            </span>
          </div>

          {/* King's photo — small, left-floated */}
          <div className="flex items-start gap-6 md:gap-8 relative z-10">
            <div className="flex-shrink-0 hidden sm:block">
              <CensoredPhoto
                name="Juan Carlos I"
                category="leal"
                image="/images/characters/rey-juan-carlos.jpg"
                size="sm"
              />
            </div>

            <div className="flex-1 min-w-0">
              {/* Source label */}
              <p className="font-mono text-[0.6rem] uppercase tracking-widest text-[var(--text-secondary)] mb-3">
                Doc_20_R.txt — 23 Feb 1981, 19:00h — Palacio de La Zarzuela
              </p>

              {/* The quote */}
              <blockquote className="quote-block py-4 pr-2">
                <span className="quote-block__marks" aria-hidden="true">&ldquo;</span>
                <p className="font-body text-lg md:text-xl italic leading-relaxed text-[var(--text-primary)] mt-4">
                  Juro que ni abdicaré la Corona, ni abandonaré España. Quien se subleve, está{" "}
                  <span className="paper-highlight">dispuesto a provocar y será responsable</span>{" "}
                  de ello, una{" "}
                  <span className="paper-highlight">nueva guerra civil</span>
                </p>
              </blockquote>

              {/* Attribution */}
              <footer className="mt-4 flex flex-col gap-1">
                <cite className="font-mono text-xs not-italic font-bold text-[var(--text-primary)] tracking-wide">
                  — Juan Carlos I
                </cite>
                <span className="text-xs text-[var(--text-secondary)] italic">
                  A Milans del Bosch por teléfono, con los tanques en las calles de Valencia
                </span>
              </footer>

              {/* Link to timeline event */}
              <div className="mt-5">
                <Link
                  href="/cronologia/rey-milans-telefono"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-classified-red dark:text-classified-brightred hover:underline underline-offset-4 transition-colors"
                >
                  Ver en la cronología
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------

const SCATTER_DOCS = [
  {
    src: "/images/documents/doc-exteriores-01.jpg",
    alt: "Despacho diplomático USICA — Comentarios de Haig sobre España, 10 Mar 1981",
    caption: "USICA 10601 — Haig Comments on Spain — 10 MAR 81",
    tilt: "left" as const,
    width: 200,
    height: 270,
  },
  {
    src: "/images/documents/doc-exteriores-02.jpg",
    alt: "Despacho diplomático AGMAE R39017 — Reacciones internacionales al 23-F",
    caption: "AGMAE R39017 — Exp. 4 — Feb 1981",
    tilt: "right" as const,
    width: 210,
    height: 280,
  },
  {
    src: "/images/documents/doc-exteriores-03.jpg",
    alt: "Cable diplomático — Solidaridad internacional con la democracia española",
    caption: "AGMAE R39017 — Exp. 4",
    tilt: "slight" as const,
    width: 195,
    height: 260,
  },
  {
    src: "/images/documents/doc-haig-01.jpg",
    alt: "Nota diplomática — Controversia Haig sobre el golpe de Estado",
    caption: "AGMAE R40201 — Exp. 215",
    tilt: "neg" as const,
    width: 205,
    height: 272,
  },
  {
    src: "/images/documents/doc-exteriores-04.jpg",
    alt: "Documento desclasificado — Ministerio de Asuntos Exteriores, 1981",
    caption: "AGMAE R39017 — Exp. 4",
    tilt: "left" as const,
    width: 198,
    height: 265,
  },
];

function DocumentsScatterSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--text-secondary)] mb-2">
            Ministerio de Asuntos Exteriores — Desclasificados Feb 2026
          </p>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            Los documentos, tal como llegaron
          </h2>
          <p className="font-body text-sm text-[var(--text-secondary)] mt-2 max-w-md mx-auto">
            Cables diplomáticos originales. Máquina de escribir, sellos de enrutamiento, marcas de clasificación.
          </p>
        </motion.div>

        {/* Scattered documents */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <DocumentScatter documents={SCATTER_DOCS} />
        </motion.div>

        {/* Source attribution */}
        <motion.p
          className="text-center font-mono text-[0.55rem] uppercase tracking-widest text-[var(--text-secondary)] mt-6 opacity-60"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.6 } : {}}
          transition={{ delay: 0.5 }}
        >
          Fuente: Ministerio de Asuntos Exteriores — Archivo General, Series AGMAE R39017 y R40201 — dominio público
        </motion.p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function MapCTASection() {
  const t = useTranslations("home");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-4">
      <motion.div
        className="max-w-3xl mx-auto paper-texture-aged rounded-sm border border-[var(--border)] p-8 md:p-12 text-center relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative stamp */}
        <div className="absolute top-4 right-4 opacity-60">
          <StampBadge type="confidencial" size="sm" rotation={8} />
        </div>

        {/* Simple map illustration */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            fill="none"
            className="w-16 h-16 text-classified-red dark:text-classified-brightred opacity-70"
          >
            <circle cx="40" cy="30" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M40 40 L40 60" stroke="currentColor" strokeWidth="2" />
            <circle cx="40" cy="30" r="3" fill="currentColor" />
            <ellipse cx="40" cy="65" rx="12" ry="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          </svg>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
          {t("mapTitle")}
        </h2>
        <p className="font-body text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
          {t("mapSubtitle")}
        </p>
        <Link
          href="/mapa"
          className="inline-flex items-center gap-2 px-6 py-3 bg-classified-red hover:bg-classified-darkred text-white font-mono text-sm uppercase tracking-wider rounded-sm transition-colors shadow-md"
        >
          {t("mapCta")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Main Export
// ---------------------------------------------------------------------------

export function HomePageContent() {
  return (
    <>
      <HeroSection />
      <ChaptersSection />
      <KingQuoteSection />
      <TimelineSection />
      <CharactersSection />
      <DocumentsScatterSection />
      <MapCTASection />
    </>
  );
}
