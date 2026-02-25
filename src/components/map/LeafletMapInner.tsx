"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLocale, useTranslations } from "next-intl";
import { locations, type Location } from "@/content/data/locations";
import { timelineEvents } from "@/content/data/timeline";

// Custom red pushpin icon using SVG via divIcon
function createPinIcon(isSelected: boolean = false) {
  const size = isSelected ? 36 : 28;
  return L.divIcon({
    className: "custom-pin-icon",
    html: `
      <svg width="${size}" height="${size}" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="10" r="8" fill="#C41E1E" stroke="#8B1414" stroke-width="2"/>
        <circle cx="11" cy="8" r="2.5" fill="rgba(255,255,255,0.35)"/>
        <line x1="14" y1="18" x2="14" y2="27" stroke="#8B1414" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
}

// Component to handle map events when selected location changes
function MapController({
  selectedLocation,
}: {
  selectedLocation: Location | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.flyTo(selectedLocation.coordinates, 10, { duration: 1 });
    }
  }, [selectedLocation, map]);

  return null;
}

interface LeafletMapInnerProps {
  selectedLocation: Location | null;
  onSelectLocation: (location: Location | null) => void;
}

export default function LeafletMapInner({
  selectedLocation,
  onSelectLocation,
}: LeafletMapInnerProps) {
  const locale = useLocale();
  const t = useTranslations("map");

  // Filter to Spanish locations
  const spanishLocations = locations.filter((loc) => {
    const [lat] = loc.coordinates;
    return lat >= 35 && lat <= 44;
  });

  return (
    <>
      <style jsx global>{`
        .leaflet-tile-pane {
          filter: sepia(0.3) contrast(1.1) brightness(0.95);
        }
        .custom-pin-icon {
          background: none !important;
          border: none !important;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 4px;
          font-family: "JetBrains Mono", "IBM Plex Mono", monospace;
          font-size: 12px;
          border: 1px solid #d4c5a9;
          box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2);
        }
        .leaflet-popup-content {
          margin: 12px 16px;
        }
      `}</style>
      <MapContainer
        center={[40.0, -3.7]}
        zoom={6}
        className="w-full h-[500px] md:h-[600px] rounded-sm border border-paper-300 dark:border-dark-600"
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController selectedLocation={selectedLocation} />

        {spanishLocations.map((loc) => {
          const isSelected = selectedLocation?.id === loc.id;
          const name = locale === "en" ? loc.name.en : loc.name.es;
          const desc =
            locale === "en"
              ? loc.description.en
              : loc.description.es;
          const relevance =
            locale === "en"
              ? loc.relevance.en
              : loc.relevance.es;
          const eventCount = loc.events.length;

          return (
            <Marker
              key={loc.id}
              position={loc.coordinates}
              icon={createPinIcon(isSelected)}
              eventHandlers={{
                click: () => {
                  onSelectLocation(
                    selectedLocation?.id === loc.id ? null : loc
                  );
                },
              }}
            >
              <Popup>
                <div className="max-w-[250px]">
                  <h3 className="font-bold text-sm text-classified-red mb-1">
                    {name}
                  </h3>
                  <p className="text-xs text-ink-700 mb-2 leading-relaxed">
                    {desc}
                  </p>
                  {eventCount > 0 && (
                    <p className="text-[10px] text-ink-500 font-mono">
                      {eventCount} {t("events")}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}
