"use client";

import Image from "next/image";

interface CensoredPhotoProps {
  name: string;
  category: "conspirador" | "leal" | "politico" | "internacional";
  size?: "sm" | "md" | "lg";
  image?: string;
  className?: string;
}

const CATEGORY_LABELS: Record<CensoredPhotoProps["category"], string> = {
  conspirador: "Conspirador",
  leal: "Leal",
  politico: "Político",
  internacional: "Internacional",
};

const SIZE_PX: Record<string, number> = {
  sm: 80,
  md: 120,
  lg: 180,
};

export default function CensoredPhoto({
  name,
  category,
  size = "md",
  image,
  className = "",
}: CensoredPhotoProps) {
  const sizeClass =
    size === "sm"
      ? "censored-photo--sm"
      : size === "lg"
        ? "censored-photo--lg"
        : "censored-photo--md";

  const px = SIZE_PX[size] ?? 120;

  return (
    <figure className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <div
        className={`censored-photo ${sizeClass} rounded overflow-hidden`}
        aria-label={`Foto censurada de ${name}`}
      >
        {image ? (
          /* Real photo with grayscale + sepia treatment */
          <Image
            src={image}
            alt={name}
            width={px}
            height={Math.round(px * 1.3)}
            className="absolute inset-0 w-full h-full object-cover grayscale sepia-[0.3] contrast-[1.1]"
            sizes={`${px}px`}
          />
        ) : (
          /* CSS silhouette fallback (works without image assets) */
          <div className="censored-photo__silhouette" aria-hidden="true" />
        )}

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
