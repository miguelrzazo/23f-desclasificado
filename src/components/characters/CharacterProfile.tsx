"use client";

import type { Character } from "@/content/data/characters";
import { characters as allCharacters } from "@/content/data/characters";
import {
  connections as allConnections,
  type Connection,
} from "@/content/data/connections";
import { timelineEvents } from "@/content/data/timeline";
import { documents, type Document as DocType } from "@/content/data/documents";
import CensoredPhoto from "@/components/ui/CensoredPhoto";
import QuoteBlock from "@/components/ui/QuoteBlock";
import DossierSection from "@/components/ui/DossierSection";
import DocumentCard from "@/components/ui/DocumentCard";
import ConnectionMap from "./ConnectionMap";
import { Link } from "@/i18n/routing";

interface CharacterProfileProps {
  character: Character;
  locale: string;
}

const CATEGORY_LABELS: Record<
  Character["category"],
  { es: string; en: string }
> = {
  conspirador: { es: "Conspirador", en: "Conspirator" },
  leal: { es: "Leal", en: "Loyalist" },
  politico: { es: "Politico", en: "Politician" },
  internacional: { es: "Internacional", en: "International" },
};

const CATEGORY_BADGE_COLORS: Record<Character["category"], string> = {
  conspirador: "bg-red-700 text-red-100",
  leal: "bg-emerald-700 text-emerald-100",
  politico: "bg-blue-700 text-blue-100",
  internacional: "bg-purple-700 text-purple-100",
};

export default function CharacterProfile({
  character,
  locale,
}: CharacterProfileProps) {
  const lang = locale === "en" ? "en" : "es";

  // Filter timeline events for this character
  const personalTimeline = timelineEvents.filter((e) =>
    e.characters.includes(character.id)
  );

  // Get referenced documents
  const referencedDocs: DocType[] = character.documents
    .map((filename) =>
      documents.find(
        (d) =>
          d.filename === filename ||
          filename.includes("*") &&
            d.filename.startsWith(filename.replace("_*.txt", ""))
      )
    )
    .filter(Boolean) as DocType[];

  // Connections for the mini-graph
  const connectedIds = new Set<string>();
  connectedIds.add(character.id);
  character.connections.forEach((c) => connectedIds.add(c.targetId));

  const miniGraphChars = allCharacters.filter((c) => connectedIds.has(c.id));
  const miniGraphConns = allConnections.filter(
    (c) =>
      (c.source === character.id && connectedIds.has(c.target)) ||
      (c.target === character.id && connectedIds.has(c.source))
  );

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back navigation */}
      <Link
        href="/personajes"
        className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors no-underline mb-6"
      >
        &larr; {lang === "es" ? "Volver a personajes" : "Back to characters"}
      </Link>

      {/* Hero section */}
      <header className="paper-texture rounded-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
        <CensoredPhoto
          name={character.name}
          category={character.category}
          image={character.image}
          size="lg"
        />
        <div className="flex-1">
          <div className="flex items-start gap-3 flex-wrap">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight">
              {character.name}
            </h1>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${CATEGORY_BADGE_COLORS[character.category]}`}
            >
              {CATEGORY_LABELS[character.category][lang]}
            </span>
          </div>
          <p className="font-mono text-sm text-[var(--text-secondary)] mt-2">
            {character.rank}
          </p>
          <p className="font-body text-base text-[var(--text-primary)] mt-4 leading-relaxed">
            {character.role[lang]}
          </p>
        </div>
      </header>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Sidebar: Ficha tecnica */}
        <aside className="md:col-span-1">
          <DossierSection
            title={lang === "es" ? "Ficha Tecnica" : "Technical File"}
            stamp="reservado"
            tabLabel={lang === "es" ? "EXPEDIENTE" : "FILE"}
          >
            <dl className="space-y-3">
              <div>
                <dt className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--text-secondary)]">
                  {lang === "es" ? "Rango" : "Rank"}
                </dt>
                <dd className="font-body text-sm text-[var(--text-primary)]">
                  {character.rank}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--text-secondary)]">
                  {lang === "es" ? "Rol" : "Role"}
                </dt>
                <dd className="font-body text-sm text-[var(--text-primary)]">
                  {character.role[lang]}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--text-secondary)]">
                  {lang === "es" ? "Categoria" : "Category"}
                </dt>
                <dd className="font-body text-sm text-[var(--text-primary)]">
                  {CATEGORY_LABELS[character.category][lang]}
                </dd>
              </div>
              {character.trial && (
                <>
                  <div>
                    <dt className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--text-secondary)]">
                      {lang === "es" ? "Sentencia" : "Sentence"}
                    </dt>
                    <dd className="font-body text-sm text-red-400 font-bold">
                      {character.trial.sentence}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--text-secondary)]">
                      {lang === "es" ? "Defensa" : "Defense"}
                    </dt>
                    <dd className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                      {character.trial.defense[lang]}
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </DossierSection>
        </aside>

        {/* Main content */}
        <div className="md:col-span-2 space-y-8">
          {/* Biography */}
          <DossierSection
            title={lang === "es" ? "Biografia" : "Biography"}
            tabLabel={lang === "es" ? "INFORME" : "REPORT"}
          >
            <p className="font-body text-base text-[var(--text-primary)] leading-relaxed whitespace-pre-line">
              {character.bio[lang]}
            </p>
          </DossierSection>

          {/* Quotes */}
          {character.quotes.length > 0 && (
            <DossierSection
              title={lang === "es" ? "Citas" : "Quotes"}
              stamp="confidencial"
            >
              <div className="space-y-4">
                {character.quotes.map((quote, i) => (
                  <QuoteBlock
                    key={i}
                    text={quote.text}
                    source={quote.source}
                    context={quote.context[lang]}
                  />
                ))}
              </div>
            </DossierSection>
          )}

          {/* Personal Timeline — linked to event detail pages */}
          {personalTimeline.length > 0 && (
            <DossierSection
              title={lang === "es" ? "Cronologia Personal" : "Personal Timeline"}
              tabLabel={lang === "es" ? "CRONOLOGIA" : "TIMELINE"}
            >
              <div className="space-y-4">
                {personalTimeline.map((event) => (
                  <Link
                    key={event.id}
                    href={`/cronologia/${event.id}`}
                    className="group flex gap-4 items-start border-l-2 border-[var(--border)] pl-4 no-underline hover:border-classified-red transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <time className="font-mono text-xs text-[var(--text-secondary)]">
                        {event.datetime}
                        {event.time ? ` ${event.time}` : ""}
                      </time>
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[var(--text-primary)] group-hover:text-classified-red transition-colors">
                        {event.title[lang]}
                      </h4>
                      <p className="font-body text-xs text-[var(--text-secondary)] mt-1">
                        {event.description[lang]}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </DossierSection>
          )}

          {/* Connection Mini-Graph */}
          {miniGraphChars.length > 1 && (
            <DossierSection
              title={lang === "es" ? "Red de Conexiones" : "Connection Network"}
            >
              <ConnectionMap
                characters={miniGraphChars}
                connections={miniGraphConns}
                highlightId={character.id}
                locale={locale}
              />
            </DossierSection>
          )}

          {/* Source Documents */}
          {referencedDocs.length > 0 && (
            <DossierSection
              title={
                lang === "es" ? "Documentos Fuente" : "Source Documents"
              }
              stamp="secreto"
              tabLabel={lang === "es" ? "ARCHIVO" : "ARCHIVE"}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {referencedDocs.map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    title={doc.title[lang]}
                    ministry={doc.ministry}
                    classification={doc.classification}
                    date={doc.date}
                    summary={doc.summary[lang]}
                    documentUrl={doc.url}
                    viewOriginalLabel={
                      lang === "es"
                        ? "Ver documento original (PDF)"
                        : "View original document (PDF)"
                    }
                  />
                ))}
              </div>
            </DossierSection>
          )}
        </div>
      </div>
    </article>
  );
}
