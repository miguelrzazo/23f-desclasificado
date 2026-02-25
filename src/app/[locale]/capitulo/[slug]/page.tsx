import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ChapterHero from "@/components/chapters/ChapterHero";
import ChapterContent from "@/components/chapters/ChapterContent";
import ChapterNav, { CHAPTERS } from "@/components/chapters/ChapterNav";

// --- static content imports (ES) ---
import AntecedentesES from "@/content/chapters/es/antecedentes";
import LaNocheES from "@/content/chapters/es/la-noche";
import CesidES from "@/content/chapters/es/cesid";
import JuicioES from "@/content/chapters/es/juicio";
import SombrasES from "@/content/chapters/es/sombras";
import InternacionalES from "@/content/chapters/es/internacional";
import PrisionerosES from "@/content/chapters/es/prisioneros";
// --- static content imports (EN) ---
import AntecedentesEN from "@/content/chapters/en/antecedentes";
import LaNocheEN from "@/content/chapters/en/la-noche";
import CesidEN from "@/content/chapters/en/cesid";
import JuicioEN from "@/content/chapters/en/juicio";
import SombrasEN from "@/content/chapters/en/sombras";
import InternacionalEN from "@/content/chapters/en/internacional";
import PrisionerosEN from "@/content/chapters/en/prisioneros";

const CHAPTER_COMPONENTS: Record<string, Record<string, React.ComponentType>> = {
  es: {
    antecedentes: AntecedentesES,
    "la-noche": LaNocheES,
    cesid: CesidES,
    juicio: JuicioES,
    sombras: SombrasES,
    internacional: InternacionalES,
    prisioneros: PrisionerosES,
  },
  en: {
    antecedentes: AntecedentesEN,
    "la-noche": LaNocheEN,
    cesid: CesidEN,
    juicio: JuicioEN,
    sombras: SombrasEN,
    internacional: InternacionalEN,
    prisioneros: PrisionerosEN,
  },
};

const SLUGS = CHAPTERS.map((ch) => ch.slug);

/** Chapter-specific descriptions for SEO */
const CHAPTER_DESCRIPTIONS: Record<string, { es: string; en: string }> = {
  antecedentes: {
    es: "La crisis política, militar y social que precedió al intento de golpe del 23-F.",
    en: "The political, military, and social crisis that preceded the 23-F coup attempt.",
  },
  "la-noche": {
    es: "Hora a hora: el asalto al Congreso y las 18 horas que estremecieron España.",
    en: "Hour by hour: the assault on Congress and the 18 hours that shook Spain.",
  },
  cesid: {
    es: "El papel del servicio de inteligencia militar en la trama del golpe.",
    en: "The role of military intelligence in the coup plot.",
  },
  juicio: {
    es: "El juicio a los golpistas en el Consejo Supremo de Justicia Militar.",
    en: "The trial of the conspirators before the Supreme Council of Military Justice.",
  },
  sombras: {
    es: "Las preguntas sin respuesta y los hilos sueltos del 23-F.",
    en: "The unanswered questions and loose threads of 23-F.",
  },
  internacional: {
    es: "La reacción internacional al intento de golpe de estado en España.",
    en: "The international reaction to the coup attempt in Spain.",
  },
  prisioneros: {
    es: "Los diputados secuestrados durante 18 horas en el Congreso.",
    en: "The deputies held hostage for 18 hours inside Congress.",
  },
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const chapter = CHAPTERS.find((ch) => ch.slug === slug);
  if (!chapter) return {};
  const lang = locale === "en" ? "en" : "es";
  const title = chapter.title[lang];
  const description =
    CHAPTER_DESCRIPTIONS[slug]?.[lang] ??
    `${title} — ${chapter.period[lang]}`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} — 23-F Desclasificado`,
      description,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug }))
  );
}

export default async function ChapterPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const chapter = CHAPTERS.find((ch) => ch.slug === slug);
  if (!chapter) notFound();

  const lang = locale === "en" ? "en" : "es";
  const Content = CHAPTER_COMPONENTS[lang]?.[slug];
  if (!Content) notFound();

  return (
    <>
      <ChapterHero
        number={chapter.number}
        title={chapter.title[lang]}
        period={chapter.period[lang]}
        stamp="desclasificado"
      />
      <ChapterContent>
        <Content />
      </ChapterContent>
      <ChapterNav currentSlug={slug} locale={locale} />
    </>
  );
}
