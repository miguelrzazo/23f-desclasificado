"use client";

import StampBadge from "./StampBadge";

interface DossierSectionProps {
  title?: string;
  stamp?: "desclasificado" | "secreto" | "reservado" | "confidencial";
  tabLabel?: string;
  children: React.ReactNode;
  className?: string;
}

export default function DossierSection({
  title,
  stamp,
  tabLabel,
  children,
  className = "",
}: DossierSectionProps) {
  return (
    <section
      className={`dossier-section paper-texture relative rounded-sm p-6 md:p-8 mt-8 ${className}`}
    >
      {/* Folder tab */}
      {tabLabel && (
        <div className="dossier-tab font-mono" aria-hidden="true">
          {tabLabel}
        </div>
      )}

      {/* Header row: title + optional stamp */}
      {(title || stamp) && (
        <div className="flex items-start justify-between gap-4 mb-6">
          {title && (
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] leading-tight">
              {title}
            </h2>
          )}
          {stamp && (
            <div className="flex-shrink-0">
              <StampBadge type={stamp} size="md" animated />
            </div>
          )}
        </div>
      )}

      {/* Content area */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
