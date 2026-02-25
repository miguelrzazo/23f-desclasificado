"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { locations, type Location } from "@/content/data/locations";
import { timelineEvents } from "@/content/data/timeline";
import LocationPin from "./LocationPin";

// Map coordinates (lat, lng) to SVG viewBox positions (0 0 800 600)
// Spain roughly spans: lat 36-44, lng -10 to 5
function latLngToSvg(
  lat: number,
  lng: number
): { x: number; y: number } {
  const minLat = 35.5;
  const maxLat = 44;
  const minLng = -10;
  const maxLng = 5;

  const x = ((lng - minLng) / (maxLng - minLng)) * 700 + 50;
  const y = ((maxLat - lat) / (maxLat - minLat)) * 500 + 50;

  return { x, y };
}

interface DossierMapProps {
  selectedLocation: Location | null;
  onSelectLocation: (location: Location | null) => void;
}

// Filter to Spanish locations only (not international)
const spanishLocations = locations.filter((loc) => {
  const [lat, lng] = loc.coordinates;
  return lat >= 35 && lat <= 44 && lng >= -10 && lng <= 5;
});

// Build thread connections: locations that share events
function buildConnections(): Array<{
  from: string;
  to: string;
  sharedEvents: string[];
}> {
  const connections: Array<{
    from: string;
    to: string;
    sharedEvents: string[];
  }> = [];

  for (let i = 0; i < spanishLocations.length; i++) {
    for (let j = i + 1; j < spanishLocations.length; j++) {
      const shared = spanishLocations[i].events.filter((e) =>
        spanishLocations[j].events.includes(e)
      );
      if (shared.length > 0) {
        connections.push({
          from: spanishLocations[i].id,
          to: spanishLocations[j].id,
          sharedEvents: shared,
        });
      }
    }
  }

  return connections;
}

export default function DossierMap({
  selectedLocation,
  onSelectLocation,
}: DossierMapProps) {
  const locale = useLocale();
  const t = useTranslations("map");
  const connections = useMemo(() => buildConnections(), []);

  // Map location positions
  const locationPositions = useMemo(() => {
    const positions: Record<string, { x: number; y: number }> = {};
    spanishLocations.forEach((loc) => {
      const [lat, lng] = loc.coordinates;
      const pos = latLngToSvg(lat, lng);
      positions[loc.id] = pos;
    });
    return positions;
  }, []);

  return (
    <div className="w-full relative">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        style={
          {
            "--label-bg": "var(--color-paper-100, #F5F0E8)",
          } as React.CSSProperties
        }
        role="img"
        aria-label={t("illustratedAria")}
      >
        {/* Spain outline — simplified hand-drawn style */}
        <path
          d={`
            M 195 85
            C 200 83, 220 82, 240 80
            C 260 78, 285 75, 310 72
            C 335 69, 355 68, 380 72
            C 405 76, 430 82, 445 86
            C 460 90, 475 88, 490 85
            C 510 82, 530 84, 545 90
            C 560 96, 572 100, 580 108
            C 590 118, 598 130, 603 145
            C 608 160, 612 178, 618 195
            C 624 212, 628 228, 630 245
            C 632 262, 630 278, 625 295
            C 620 310, 615 318, 610 325
            C 600 340, 585 355, 568 365
            C 555 372, 540 375, 525 380
            C 510 385, 495 388, 480 392
            C 460 398, 440 405, 418 412
            C 395 420, 370 430, 350 438
            C 330 446, 310 452, 290 455
            C 270 458, 248 460, 228 458
            C 215 456, 200 452, 185 445
            C 172 438, 160 428, 148 415
            C 138 405, 132 395, 128 382
            C 122 365, 118 348, 115 330
            C 112 312, 108 292, 105 272
            C 102 250, 98 228, 95 208
            C 92 185, 90 165, 92 148
            C 94 130, 100 118, 110 108
            C 120 100, 135 95, 150 92
            C 165 89, 180 87, 195 85
            Z
          `}
          fill="#F5F0E8"
          stroke="#1A1A1A"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:fill-dark-800 dark:stroke-paper-300"
          style={{
            filter: "url(#sketch)",
          }}
        />

        {/* Portugal outline hint */}
        <path
          d={`
            M 95 208
            C 88 218, 72 225, 62 240
            C 52 258, 48 278, 50 298
            C 52 318, 55 338, 62 355
            C 68 370, 78 385, 92 398
            C 108 408, 120 415, 128 382
          `}
          fill="none"
          stroke="#1A1A1A"
          strokeWidth={1.5}
          strokeDasharray="6 4"
          strokeLinecap="round"
          className="dark:stroke-paper-400"
          opacity={0.4}
        />

        {/* Balearic Islands */}
        <ellipse
          cx={660}
          cy={310}
          rx={22}
          ry={10}
          fill="#F5F0E8"
          stroke="#1A1A1A"
          strokeWidth={2}
          className="dark:fill-dark-800 dark:stroke-paper-300"
          transform="rotate(-10, 660, 310)"
        />
        <ellipse
          cx={695}
          cy={305}
          rx={14}
          ry={7}
          fill="#F5F0E8"
          stroke="#1A1A1A"
          strokeWidth={2}
          className="dark:fill-dark-800 dark:stroke-paper-300"
          transform="rotate(-5, 695, 305)"
        />

        {/* Canary Islands hint (bottom-left) */}
        <g transform="translate(80, 530)">
          <rect
            x={0}
            y={0}
            width={100}
            height={50}
            fill="none"
            stroke="#1A1A1A"
            strokeWidth={1}
            strokeDasharray="4 3"
            rx={3}
            className="dark:stroke-paper-400"
            opacity={0.5}
          />
          <ellipse
            cx={25}
            cy={25}
            rx={12}
            ry={8}
            fill="#F5F0E8"
            stroke="#1A1A1A"
            strokeWidth={1.5}
            className="dark:fill-dark-800 dark:stroke-paper-300"
          />
          <ellipse
            cx={55}
            cy={22}
            rx={15}
            ry={9}
            fill="#F5F0E8"
            stroke="#1A1A1A"
            strokeWidth={1.5}
            className="dark:fill-dark-800 dark:stroke-paper-300"
          />
          <ellipse
            cx={80}
            cy={28}
            rx={10}
            ry={6}
            fill="#F5F0E8"
            stroke="#1A1A1A"
            strokeWidth={1.5}
            className="dark:fill-dark-800 dark:stroke-paper-300"
          />
          <text
            x={50}
            y={48}
            textAnchor="middle"
            fontSize="7"
            fontFamily="'JetBrains Mono', monospace"
            className="fill-ink-500 dark:fill-paper-300"
          >
            Canarias
          </text>
        </g>

        {/* SVG filter for sketchy effect */}
        <defs>
          <filter id="sketch">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.03"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* Thread connections */}
        {connections.map((conn, i) => {
          const from = locationPositions[conn.from];
          const to = locationPositions[conn.to];
          if (!from || !to) return null;

          // Only show connections involving the selected location
          const isActive =
            selectedLocation &&
            (conn.from === selectedLocation.id ||
              conn.to === selectedLocation.id);

          return (
            <motion.line
              key={`thread-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#C41E1E"
              strokeWidth={isActive ? 2 : 1}
              strokeDasharray={isActive ? "none" : "4 4"}
              opacity={isActive ? 0.7 : 0.15}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.6 }}
            />
          );
        })}

        {/* Location pins */}
        {spanishLocations.map((loc, i) => {
          const pos = locationPositions[loc.id];
          if (!pos) return null;

          return (
            <LocationPin
              key={loc.id}
              location={loc}
              x={pos.x}
              y={pos.y}
              onClick={() =>
                onSelectLocation(
                  selectedLocation?.id === loc.id ? null : loc
                )
              }
              locale={locale}
              delay={0.2 + i * 0.08}
              isSelected={selectedLocation?.id === loc.id}
            />
          );
        })}
      </svg>
    </div>
  );
}
