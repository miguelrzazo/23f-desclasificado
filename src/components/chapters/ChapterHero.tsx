"use client";

import { motion } from "framer-motion";
import StampBadge from "@/components/ui/StampBadge";

interface ChapterHeroProps {
  number: number; // 1-7
  title: string;
  period: string;
  stamp?: "desclasificado" | "secreto" | "reservado";
}

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII"];

export default function ChapterHero({
  number,
  title,
  period,
  stamp = "desclasificado",
}: ChapterHeroProps) {
  const roman = ROMAN_NUMERALS[number - 1] ?? String(number);

  return (
    <section className="chapter-hero relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Paper texture background with dark overlay */}
      <div className="absolute inset-0 paper-texture" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--bg-primary)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Roman numeral — large, faded behind title */}
        <motion.div
          className="pointer-events-none select-none font-serif text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold leading-none text-white/[0.07] absolute inset-x-0 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          aria-hidden="true"
        >
          {roman}
        </motion.div>

        {/* Chapter label */}
        <motion.p
          className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--accent)] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {`Cap\u00edtulo ${roman}`}
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {/* Period */}
        <motion.p
          className="font-mono text-sm md:text-base text-white/60 mt-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {period}
        </motion.p>

        {/* Stamp badge */}
        <motion.div
          className="mt-8 inline-block"
          initial={{ opacity: 0, scale: 1.5, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
        >
          <StampBadge type={stamp} size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
