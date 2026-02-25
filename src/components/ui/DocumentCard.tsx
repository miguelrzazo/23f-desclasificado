"use client";

import Link from "next/link";
import StampBadge from "./StampBadge";

interface DocumentCardProps {
  title: string;
  ministry: string;
  classification: "secreto" | "reservado" | "confidencial" | "sin-clasificar";
  date?: string;
  summary?: string;
  href?: string;
}

function CardContent({
  title,
  ministry,
  classification,
  date,
  summary,
}: Omit<DocumentCardProps, "href">) {
  return (
    <>
      {/* Manila folder top edge — via .document-card::before in dossier.css */}

      {/* Stamp in top-right corner */}
      {classification !== "sin-clasificar" && (
        <div className="absolute top-3 right-3 pointer-events-none">
          <StampBadge
            type={classification}
            size="sm"
            rotation={-8}
          />
        </div>
      )}

      {/* Ministry badge */}
      <span className="inline-block font-mono text-[0.6rem] uppercase tracking-widest text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded mb-2">
        {ministry}
      </span>

      {/* Title */}
      <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] leading-snug mb-1 pr-20">
        {title}
      </h3>

      {/* Date */}
      {date && (
        <time className="font-mono text-[0.65rem] text-[var(--text-secondary)] tracking-wide">
          {date}
        </time>
      )}

      {/* Summary */}
      {summary && (
        <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 font-body">
          {summary}
        </p>
      )}
    </>
  );
}

export default function DocumentCard(props: DocumentCardProps) {
  const { href, ...rest } = props;
  const cardClasses =
    "document-card paper-texture rounded-sm p-5 block";

  if (href) {
    return (
      <Link href={href} className={`${cardClasses} no-underline`}>
        <CardContent {...rest} />
      </Link>
    );
  }

  return (
    <article className={cardClasses}>
      <CardContent {...rest} />
    </article>
  );
}
