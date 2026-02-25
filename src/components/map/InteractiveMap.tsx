"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import type { Location } from "@/content/data/locations";

const LeafletMapInner = dynamic(() => import("./LeafletMapInner"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

/** Skeleton placeholder shown while the Leaflet bundle loads */
function MapSkeleton() {
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-sm border border-paper-300 dark:border-dark-600 bg-paper-100 dark:bg-dark-800 relative overflow-hidden">
      {/* Faux map grid lines */}
      <div className="absolute inset-0 opacity-[0.06]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-ink-900 dark:bg-paper-100"
            style={{ top: `${(i + 1) * 11}%` }}
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-ink-900 dark:bg-paper-100"
            style={{ left: `${(i + 1) * 14}%` }}
          />
        ))}
      </div>

      {/* Skeleton pin placeholders */}
      <div className="absolute top-[35%] left-[45%] w-3 h-3 rounded-full bg-classified-red/30 animate-pulse" />
      <div className="absolute top-[50%] left-[60%] w-3 h-3 rounded-full bg-classified-red/20 animate-pulse [animation-delay:200ms]" />
      <div className="absolute top-[40%] left-[30%] w-3 h-3 rounded-full bg-classified-red/20 animate-pulse [animation-delay:400ms]" />

      {/* Loading text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-8 h-8 border-2 border-classified-red/30 border-t-classified-red rounded-full animate-spin" />
        <span className="font-mono text-xs text-ink-500 dark:text-paper-300 tracking-wider uppercase">
          Cargando mapa...
        </span>
      </div>
    </div>
  );
}

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
