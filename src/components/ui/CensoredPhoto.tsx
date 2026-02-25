"use client";

interface CensoredPhotoProps {
  name: string;
  category: "conspirador" | "leal" | "politico" | "internacional";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CATEGORY_LABELS: Record<CensoredPhotoProps["category"], string> = {
  conspirador: "Conspirador",
  leal: "Leal",
  politico: "Pol\u00edtico",
  internacional: "Internacional",
};

export default function CensoredPhoto({
  name,
  category,
  size = "md",
  className = "",
}: CensoredPhotoProps) {
  const sizeClass =
    size === "sm"
      ? "censored-photo--sm"
      : size === "lg"
        ? "censored-photo--lg"
        : "censored-photo--md";

  return (
    <figure className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <div
        className={`censored-photo ${sizeClass} rounded`}
        aria-label={`Foto censurada de ${name}`}
      >
        {/* CSS silhouette fallback (works without SVG assets) */}
        <div className="censored-photo__silhouette" aria-hidden="true" />

        {/* Censor bar across eyes */}
        <div className="censored-photo__bar" aria-hidden="true" />

        {/* Category badge */}
        <div
          className={`censored-photo__category censored-photo__category--${category}`}
        >
          {CATEGORY_LABELS[category]}
        </div>
      </div>

      {/* Name label */}
      <figcaption className="font-mono text-xs text-center text-[var(--text-primary)] tracking-wide max-w-[180px] truncate">
        {name}
      </figcaption>
    </figure>
  );
}
