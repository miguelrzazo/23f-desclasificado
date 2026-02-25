"use client";

import { useState, useMemo, useCallback } from "react";
import type { Character } from "@/content/data/characters";
import type { Connection } from "@/content/data/connections";
import { Link } from "@/i18n/routing";

interface ConnectionMapProps {
  characters: Character[];
  connections: Connection[];
  highlightId?: string;
  locale: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  conspirador: "#ef4444",
  leal: "#10b981",
  politico: "#3b82f6",
  internacional: "#a855f7",
};

const CONNECTION_TYPE_COLORS: Record<string, string> = {
  conspiracion: "#ef4444",
  "cadena-mando": "#f59e0b",
  oposicion: "#10b981",
  lealtad: "#3b82f6",
  juicio: "#8b5cf6",
};

/**
 * Simple deterministic layout: arrange characters in a circle
 * with conspiradores towards the center-left, leales center-right,
 * politicos bottom, internacionales top.
 */
function computeLayout(
  chars: Character[],
  width: number,
  height: number
): Map<string, { x: number; y: number }> {
  const positions = new Map<string, { x: number; y: number }>();
  const cx = width / 2;
  const cy = height / 2;
  const rx = width * 0.38;
  const ry = height * 0.38;

  // Group by category for sector placement
  const groups: Record<string, Character[]> = {
    conspirador: [],
    leal: [],
    politico: [],
    internacional: [],
  };
  chars.forEach((c) => {
    groups[c.category]?.push(c);
  });

  // Sector angle ranges (in radians)
  const sectors: Record<string, [number, number]> = {
    conspirador: [-Math.PI * 0.75, -Math.PI * 0.15],
    leal: [-Math.PI * 0.1, Math.PI * 0.4],
    politico: [Math.PI * 0.45, Math.PI * 0.85],
    internacional: [Math.PI * 0.9, Math.PI * 1.3],
  };

  for (const [cat, [startAngle, endAngle]] of Object.entries(sectors)) {
    const group = groups[cat] || [];
    group.forEach((char, i) => {
      const angle =
        group.length === 1
          ? (startAngle + endAngle) / 2
          : startAngle + (i / (group.length - 1)) * (endAngle - startAngle);
      positions.set(char.id, {
        x: cx + rx * Math.cos(angle),
        y: cy + ry * Math.sin(angle),
      });
    });
  }

  return positions;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((w) => w.length > 2 || w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// De-duplicate connections so we only draw one line per pair
function deduplicateConnections(conns: Connection[]): Connection[] {
  const seen = new Set<string>();
  return conns.filter((c) => {
    const key = [c.source, c.target].sort().join("--") + "--" + c.type;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export default function ConnectionMap({
  characters: chars,
  connections: conns,
  highlightId,
  locale,
}: ConnectionMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(
    highlightId ?? null
  );
  const lang = locale === "en" ? "en" : "es";

  const WIDTH = 800;
  const HEIGHT = 500;

  const positions = useMemo(
    () => computeLayout(chars, WIDTH, HEIGHT),
    [chars]
  );

  const uniqueConns = useMemo(() => deduplicateConnections(conns), [conns]);

  const highlightedConnections = useMemo(() => {
    if (!hoveredId) return new Set<string>();
    const set = new Set<string>();
    uniqueConns.forEach((c) => {
      if (c.source === hoveredId || c.target === hoveredId) {
        set.add(c.source);
        set.add(c.target);
      }
    });
    return set;
  }, [hoveredId, uniqueConns]);

  const handleNodeClick = useCallback(
    (charId: string) => {
      // Navigation handled by link wrapping
    },
    []
  );

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full h-auto min-w-[600px]"
        style={{ maxHeight: "500px" }}
        role="img"
        aria-label={
          lang === "es"
            ? "Mapa de conexiones entre personajes"
            : "Character connections map"
        }
      >
        {/* Edges */}
        {uniqueConns.map((conn, i) => {
          const from = positions.get(conn.source);
          const to = positions.get(conn.target);
          if (!from || !to) return null;

          const isHighlighted =
            !hoveredId ||
            conn.source === hoveredId ||
            conn.target === hoveredId;

          return (
            <g key={`edge-${i}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={
                  CONNECTION_TYPE_COLORS[conn.type] ?? "#666"
                }
                strokeWidth={Math.max(1, conn.strength / 4)}
                strokeOpacity={isHighlighted ? 0.6 : 0.1}
                strokeDasharray={
                  conn.type === "juicio" ? "4 2" : undefined
                }
                className="transition-opacity duration-200"
              />
            </g>
          );
        })}

        {/* Nodes */}
        {chars.map((char) => {
          const pos = positions.get(char.id);
          if (!pos) return null;

          const isKing = char.id === "rey-juan-carlos";
          const isHighlighted =
            !hoveredId ||
            hoveredId === char.id ||
            highlightedConnections.has(char.id);
          const isHovered = hoveredId === char.id;
          const baseR = isKing ? 26 : 18;
          const r = isHovered ? baseR + 4 : baseR;

          return (
            <g
              key={char.id}
              className="cursor-pointer transition-opacity duration-200"
              style={{ opacity: isHighlighted ? 1 : 0.3 }}
              onMouseEnter={() => setHoveredId(char.id)}
              onMouseLeave={() =>
                setHoveredId(highlightId ?? null)
              }
            >
              <Link href={`/personajes/${char.id}`}>
                {/* Golden ring for the King */}
                {isKing && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={r + 4}
                    fill="none"
                    stroke="#d4a017"
                    strokeWidth={3}
                    strokeDasharray="none"
                    className="transition-all duration-200"
                    opacity={isHighlighted ? 0.9 : 0.4}
                  />
                )}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={r}
                  fill={CATEGORY_COLORS[char.category]}
                  fillOpacity={isHovered ? 0.9 : isKing ? 0.85 : 0.7}
                  stroke={isHovered ? "#fff" : isKing ? "#d4a017" : "transparent"}
                  strokeWidth={isKing ? 2.5 : 2}
                  className="transition-all duration-200"
                />
                {/* Crown icon for the King */}
                {isKing && (
                  <text
                    x={pos.x}
                    y={pos.y - r - 6}
                    textAnchor="middle"
                    className="pointer-events-none select-none"
                    style={{ fontSize: "14px" }}
                  >
                    {"👑"}
                  </text>
                )}
                <text
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className={`font-mono fill-white pointer-events-none select-none ${isKing ? "text-[10px]" : "text-[8px]"}`}
                  style={{ fontWeight: 700 }}
                >
                  {isKing ? "JCI" : getInitials(char.name)}
                </text>
                {/* Name label below node */}
                <text
                  x={pos.x}
                  y={pos.y + r + 12}
                  textAnchor="middle"
                  className={`font-mono pointer-events-none select-none ${isKing ? "text-[9px]" : "text-[7px]"}`}
                  style={{
                    fill: isKing ? "#d4a017" : "var(--text-secondary)",
                    opacity: isHighlighted ? 1 : 0.4,
                    fontWeight: isKing ? 700 : 400,
                  }}
                >
                  {isKing ? "Juan Carlos I" : char.name.split(" ").slice(-1)[0]}
                </text>
              </Link>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {Object.entries(CONNECTION_TYPE_COLORS).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1.5">
            <span
              className="w-4 h-0.5 inline-block"
              style={{
                backgroundColor: color,
                borderTop:
                  type === "juicio" ? `2px dashed ${color}` : undefined,
              }}
            />
            <span className="text-[0.6rem] font-mono text-[var(--text-secondary)] uppercase tracking-wider">
              {type === "conspiracion"
                ? lang === "es"
                  ? "Conspiración"
                  : "Conspiracy"
                : type === "cadena-mando"
                  ? lang === "es"
                    ? "Cadena de mando"
                    : "Chain of command"
                  : type === "oposicion"
                    ? lang === "es"
                      ? "Oposición"
                      : "Opposition"
                    : type === "lealtad"
                      ? lang === "es"
                        ? "Lealtad"
                        : "Loyalty"
                      : lang === "es"
                        ? "Juicio"
                        : "Trial"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
