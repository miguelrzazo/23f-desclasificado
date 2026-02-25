"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { documents, type Document } from "@/content/data/documents";
import DocumentCard from "@/components/ui/DocumentCard";
import StampBadge from "@/components/ui/StampBadge";
import RedTape from "@/components/ui/RedTape";

// ---------------------------------------------------------------------------
// Types & constants
// ---------------------------------------------------------------------------

type Ministry = Document["ministry"];
type Classification = Document["classification"];

interface MinistryMeta {
  key: Ministry;
  labelEs: string;
  labelEn: string;
}

const MINISTRIES: MinistryMeta[] = [
  { key: "boe", labelEs: "BOE", labelEn: "BOE" },
  { key: "defensa-cni", labelEs: "Defensa/CNI", labelEn: "Defense/CNI" },
  { key: "defensa-causas", labelEs: "Defensa/Causas", labelEn: "Defense/Cases" },
  { key: "exteriores", labelEs: "Exteriores", labelEn: "Foreign Affairs" },
  { key: "interior-archivo", labelEs: "Interior/Archivo", labelEn: "Interior/Archive" },
  { key: "interior-gc", labelEs: "Interior/GC", labelEn: "Interior/GC" },
  { key: "interior-policia", labelEs: "Interior/Policía", labelEn: "Interior/Police" },
];

const CLASSIFICATIONS: Classification[] = [
  "secreto",
  "reservado",
  "confidencial",
  "sin-clasificar",
];

// Map chapter slugs to locale routes
const CHAPTER_ROUTES: Record<string, string> = {
  desclasificacion: "/capitulos/desclasificacion",
  antecedentes: "/capitulos/antecedentes",
  noche: "/capitulos/noche",
  cesid: "/capitulos/cesid",
  juicio: "/capitulos/juicio",
  sombras: "/capitulos/sombras",
  internacional: "/capitulos/internacional",
  prisioneros: "/capitulos/prisioneros",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface DocumentosPageContentProps {
  locale: string;
}

export default function DocumentosPageContent({
  locale,
}: DocumentosPageContentProps) {
  const t = useTranslations("documents");
  const lang = locale as "es" | "en";

  // ---- Filter state ----
  const [selectedMinistries, setSelectedMinistries] = useState<Ministry[]>([]);
  const [selectedClassifications, setSelectedClassifications] = useState<Classification[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // ---- Derived data ----
  const totalDocuments = documents.length;

  const filtered = useMemo(() => {
    return documents.filter((doc) => {
      // Ministry filter
      if (
        selectedMinistries.length > 0 &&
        !selectedMinistries.includes(doc.ministry)
      )
        return false;

      // Classification filter
      if (
        selectedClassifications.length > 0 &&
        !selectedClassifications.includes(doc.classification)
      )
        return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch = doc.title[lang].toLowerCase().includes(q);
        const summaryMatch = doc.summary[lang].toLowerCase().includes(q);
        if (!titleMatch && !summaryMatch) return false;
      }

      return true;
    });
  }, [selectedMinistries, selectedClassifications, searchQuery, lang]);

  // ---- Statistics ----
  const ministryStats = useMemo(() => {
    const counts: Record<Ministry, number> = {} as Record<Ministry, number>;
    for (const m of MINISTRIES) counts[m.key] = 0;
    for (const doc of documents) counts[doc.ministry]++;
    return counts;
  }, []);

  const classificationStats = useMemo(() => {
    const counts: Record<Classification, number> = {} as Record<Classification, number>;
    for (const c of CLASSIFICATIONS) counts[c] = 0;
    for (const doc of documents) counts[doc.classification]++;
    return counts;
  }, []);

  // ---- Helpers ----
  function toggleMinistry(m: Ministry) {
    setSelectedMinistries((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  }

  function toggleClassification(c: Classification) {
    setSelectedClassifications((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  }

  function clearAllFilters() {
    setSelectedMinistries([]);
    setSelectedClassifications([]);
    setSearchQuery("");
  }

  function getDocHref(doc: Document): string | undefined {
    if (doc.chapters.length === 0) return undefined;
    const slug = doc.chapters[0];
    const route = CHAPTER_ROUTES[slug];
    return route ? `/${locale}${route}` : undefined;
  }

  function getMinistryLabel(key: Ministry): string {
    const meta = MINISTRIES.find((m) => m.key === key);
    if (!meta) return key;
    return lang === "es" ? meta.labelEs : meta.labelEn;
  }

  const hasActiveFilters =
    selectedMinistries.length > 0 ||
    selectedClassifications.length > 0 ||
    searchQuery.trim().length > 0;

  // ---- Max for bar chart scaling ----
  const maxMinistryCount = Math.max(...Object.values(ministryStats), 1);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* ================================================================
          Page header
          ================================================================ */}
      <header className="mb-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              {t("title")}
            </h1>
            <p className="font-body text-lg text-[var(--text-secondary)] mt-2 max-w-3xl">
              {t("subtitle")}
            </p>
          </div>
          <div className="hidden md:block flex-shrink-0 mt-2">
            <StampBadge type="desclasificado" size="lg" animated />
          </div>
        </div>
      </header>

      {/* ================================================================
          Statistics section
          ================================================================ */}
      <section
        className="paper-texture dossier-section rounded-sm p-5 md:p-6 mb-8"
        aria-label={t("statsLabel")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Total + classification breakdown */}
          <div>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-mono text-3xl font-bold text-classified-red">
                {totalDocuments}
              </span>
              <span className="font-body text-sm text-[var(--text-secondary)] uppercase tracking-wide">
                {t("totalDocuments")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CLASSIFICATIONS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-1 rounded"
                >
                  {t(`classification.${c}`)}
                  <strong className="text-[var(--text-primary)]">
                    {classificationStats[c]}
                  </strong>
                </span>
              ))}
            </div>
          </div>

          {/* Ministry breakdown — mini bar chart */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">
              {t("byMinistry")}
            </h3>
            <div className="space-y-1.5">
              {MINISTRIES.map((m) => (
                <div key={m.key} className="flex items-center gap-2">
                  <span className="font-mono text-[0.6rem] w-28 text-right text-[var(--text-secondary)] truncate">
                    {lang === "es" ? m.labelEs : m.labelEn}
                  </span>
                  <div className="flex-1 h-3 bg-[var(--bg-secondary)] rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-classified-red/70 rounded-sm transition-all"
                      style={{
                        width: `${(ministryStats[m.key] / maxMinistryCount) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="font-mono text-xs text-[var(--text-primary)] w-6 text-right">
                    {ministryStats[m.key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RedTape />

      {/* ================================================================
          Filter bar
          ================================================================ */}
      <section className="mb-8 space-y-4" aria-label={t("filtersLabel")}>
        {/* Ministry filters */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">
            {t("filterMinistry")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {MINISTRIES.map((m) => {
              const active = selectedMinistries.includes(m.key);
              return (
                <button
                  key={m.key}
                  onClick={() => toggleMinistry(m.key)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider
                    rounded-sm border transition-colors ${
                      active
                        ? "bg-classified-red text-white border-classified-darkred"
                        : "bg-transparent text-[var(--text-secondary)] border-ink-900/20 dark:border-paper-50/20 hover:border-classified-red hover:text-classified-red"
                    }`}
                >
                  {lang === "es" ? m.labelEs : m.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Classification filters */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">
            {t("filterClassification")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {CLASSIFICATIONS.map((c) => {
              const active = selectedClassifications.includes(c);
              return (
                <button
                  key={c}
                  onClick={() => toggleClassification(c)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider
                    rounded-sm border transition-colors ${
                      active
                        ? "bg-classified-red text-white border-classified-darkred"
                        : "bg-transparent text-[var(--text-secondary)] border-ink-900/20 dark:border-paper-50/20 hover:border-classified-red hover:text-classified-red"
                    }`}
                >
                  {t(`classification.${c}`)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search box */}
        <div>
          <label
            htmlFor="doc-search"
            className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2 block"
          >
            {t("searchLabel")}
          </label>
          <input
            id="doc-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full max-w-md px-3 py-2 font-body text-sm
              bg-[var(--bg-secondary)] text-[var(--text-primary)]
              border border-ink-900/20 dark:border-paper-50/20
              rounded-sm placeholder:text-[var(--text-secondary)]/50
              focus:outline-none focus:border-classified-red transition-colors"
          />
        </div>

        {/* Active filter chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {selectedMinistries.map((m) => (
              <button
                key={`chip-m-${m}`}
                onClick={() => toggleMinistry(m)}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-mono
                  bg-classified-red/10 text-classified-red border border-classified-red/30
                  rounded-sm hover:bg-classified-red/20 transition-colors"
              >
                {getMinistryLabel(m)}
                <span aria-hidden="true">&times;</span>
              </button>
            ))}
            {selectedClassifications.map((c) => (
              <button
                key={`chip-c-${c}`}
                onClick={() => toggleClassification(c)}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-mono
                  bg-classified-red/10 text-classified-red border border-classified-red/30
                  rounded-sm hover:bg-classified-red/20 transition-colors"
              >
                {t(`classification.${c}`)}
                <span aria-hidden="true">&times;</span>
              </button>
            ))}
            {searchQuery.trim() && (
              <button
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-mono
                  bg-classified-red/10 text-classified-red border border-classified-red/30
                  rounded-sm hover:bg-classified-red/20 transition-colors"
              >
                &ldquo;{searchQuery}&rdquo;
                <span aria-hidden="true">&times;</span>
              </button>
            )}
            <button
              onClick={clearAllFilters}
              className="text-xs font-mono text-[var(--text-secondary)] underline hover:text-classified-red transition-colors"
            >
              {t("clearFilters")}
            </button>
          </div>
        )}
      </section>

      {/* ================================================================
          Results count
          ================================================================ */}
      <p className="font-mono text-sm text-[var(--text-secondary)] mb-6">
        {t("showingCount", {
          count: filtered.length,
          total: totalDocuments,
        })}
      </p>

      {/* ================================================================
          Document grid
          ================================================================ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((doc) => (
            <motion.div
              key={doc.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <DocumentCard
                title={doc.title[lang]}
                ministry={getMinistryLabel(doc.ministry)}
                classification={doc.classification}
                date={doc.date}
                summary={doc.summary[lang]}
                href={getDocHref(doc)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="font-body text-lg text-[var(--text-secondary)]">
            {t("noResults")}
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-4 font-mono text-sm text-classified-red underline hover:text-classified-darkred transition-colors"
          >
            {t("clearFilters")}
          </button>
        </div>
      )}
    </div>
  );
}
