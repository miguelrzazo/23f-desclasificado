import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { characters } from "@/content/data/characters";
import CharacterProfile from "@/components/characters/CharacterProfile";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const character = characters.find((c) => c.id === id);
  if (!character) return {};
  const isEn = locale === "en";
  const lang = isEn ? "en" : "es";
  return {
    title: character.name,
    description: character.role[lang],
    openGraph: {
      title: `${character.name} — 23-F Desclasificado`,
      description: character.role[lang],
    },
  };
}

export function generateStaticParams() {
  return characters.flatMap((char) =>
    routing.locales.map((locale) => ({
      locale,
      id: char.id,
    }))
  );
}

export default async function CharacterProfilePage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const character = characters.find((c) => c.id === id);

  if (!character) {
    notFound();
  }

  return (
    <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
      <CharacterProfile character={character} locale={locale} />
    </div>
  );
}
