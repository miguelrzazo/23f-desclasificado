"use client";

import { motion } from "framer-motion";

interface ChapterContentProps {
  children: React.ReactNode;
}

/**
 * Wrapper for chapter prose content.
 * Applies consistent typography, spacing, and prose styles.
 * Fades up on initial render for a polished page-transition feel.
 */
export default function ChapterContent({ children }: ChapterContentProps) {
  return (
    <motion.article
      className="chapter-content mx-auto max-w-3xl px-4 py-12 md:py-16"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
    >
      <div className="prose-chapter">{children}</div>
    </motion.article>
  );
}
