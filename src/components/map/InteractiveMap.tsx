"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import type { Location } from "@/content/data/locations";

const LeafletMapInner = dynamic(() => import("./LeafletMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] md:h-[600px] rounded-sm border border-paper-300 dark:border-dark-600 bg-paper-100 dark:bg-dark-800 flex items-center justify-center">
      <span className="font-mono text-sm text-ink-500 dark:text-paper-300 animate-pulse">
        Cargando mapa...
      </span>
    </div>
  ),
});

interface InteractiveMapProps {
  selectedLocation: Location | null;
  onSelectLocation: (location: Location | null) => void;
}

export default function InteractiveMap({
  selectedLocation,
  onSelectLocation,
}: InteractiveMapProps) {
  return (
    <LeafletMapInner
      selectedLocation={selectedLocation}
      onSelectLocation={onSelectLocation}
    />
  );
}
