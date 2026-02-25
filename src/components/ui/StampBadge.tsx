"use client";

import { motion } from "framer-motion";

interface StampBadgeProps {
  type: "desclasificado" | "secreto" | "reservado" | "confidencial";
  size?: "sm" | "md" | "lg";
  rotation?: number;
  animated?: boolean;
}

const STAMP_LABELS: Record<StampBadgeProps["type"], string> = {
  desclasificado: "Desclasificado",
  secreto: "Secreto",
  reservado: "Reservado",
  confidencial: "Confidencial",
};

function getDefaultRotation(type: string): number {
  // Deterministic-ish rotation based on type string for consistency
  const hash = type.charCodeAt(0) + type.charCodeAt(type.length - 1);
  return ((hash % 11) - 5); // range: -5 to +5 degrees
}

export default function StampBadge({
  type,
  size = "md",
  rotation,
  animated = false,
}: StampBadgeProps) {
  const deg = rotation ?? getDefaultRotation(type);

  const sizeClass =
    size === "sm"
      ? "stamp-badge--sm"
      : size === "lg"
        ? "stamp-badge--lg"
        : "stamp-badge--md";

  if (animated) {
    return (
      <motion.div
        className={`stamp-badge ${sizeClass} font-mono`}
        style={{ rotate: deg }}
        initial={{ scale: 1.5, opacity: 0, rotate: deg - 5 }}
        animate={{ scale: 1, opacity: 0.85, rotate: deg }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          duration: 0.3,
        }}
        aria-label={`Clasificación: ${STAMP_LABELS[type]}`}
      >
        {STAMP_LABELS[type]}
      </motion.div>
    );
  }

  return (
    <div
      className={`stamp-badge ${sizeClass} font-mono`}
      style={{ transform: `rotate(${deg}deg)` }}
      aria-label={`Clasificación: ${STAMP_LABELS[type]}`}
    >
      {STAMP_LABELS[type]}
    </div>
  );
}
