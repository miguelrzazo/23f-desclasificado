import type { ComponentType } from "react";

export interface ChapterProps {
  locale: string;
}

type ChapterModule = { default: ComponentType<ChapterProps> };

/**
 * Dynamically loads a chapter content component by slug and locale.
 * Each chapter is a TSX component in src/content/chapters/{locale}/{slug}.tsx
 */
export async function getChapterComponent(
  slug: string,
  locale: string
): Promise<ComponentType<ChapterProps> | null> {
  const lang = locale === "en" ? "en" : "es";

  try {
    // Dynamic import — each chapter is its own module for code-splitting
    const mod: ChapterModule = await import(`./${lang}/${slug}.tsx`);
    return mod.default;
  } catch {
    return null;
  }
}
