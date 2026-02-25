"use client";

import { Fragment } from "react";

interface QuoteBlockProps {
  text: string;
  source: string;
  context?: string;
  highlighted?: string[];
}

/**
 * Renders quote text with highlighted phrases wrapped in <mark> elements.
 * Splits text around each highlighted phrase to insert styling.
 */
function renderHighlightedText(text: string, highlighted: string[]): React.ReactNode[] {
  if (highlighted.length === 0) {
    return [text];
  }

  // Escape regex special chars and build a single alternation pattern
  const escaped = highlighted.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isHighlighted = highlighted.some(
      (h) => h.toLowerCase() === part.toLowerCase()
    );
    if (isHighlighted) {
      return (
        <span key={i} className="quote-block__highlight">
          {part}
        </span>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function QuoteBlock({
  text,
  source,
  context,
  highlighted = [],
}: QuoteBlockProps) {
  return (
    <blockquote className="quote-block my-6 py-4 pr-4">
      {/* Decorative quote marks */}
      <span className="quote-block__marks" aria-hidden="true">
        &ldquo;
      </span>

      {/* Quote text — always in Spanish (original document) */}
      <p className="font-body text-lg italic leading-relaxed text-[var(--text-primary)] mt-4">
        &ldquo;{renderHighlightedText(text, highlighted)}&rdquo;
      </p>

      {/* Document reference in monospace */}
      <footer className="mt-3 flex flex-col gap-1">
        <cite className="font-mono text-xs not-italic text-[var(--text-secondary)] tracking-wide">
          {source}
        </cite>

        {/* Optional translated context note */}
        {context && (
          <span className="text-xs text-[var(--text-secondary)] italic">
            {context}
          </span>
        )}
      </footer>
    </blockquote>
  );
}
