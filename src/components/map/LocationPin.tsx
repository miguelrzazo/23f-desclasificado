"use client";

import { motion } from "framer-motion";
import type { Location } from "@/content/data/locations";

interface LocationPinProps {
  location: Location;
  x: number;
  y: number;
  onClick: (location: Location) => void;
  locale: string;
  delay?: number;
  isSelected?: boolean;
}

export default function LocationPin({
  location,
  x,
  y,
  onClick,
  locale,
  delay = 0,
  isSelected = false,
}: LocationPinProps) {
  const name = locale === "en" ? location.name.en : location.name.es;

  return (
    <motion.g
      className="cursor-pointer"
      onClick={() => onClick(location)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 200 }}
    >
      {/* Pulse ring on hover / selected */}
      <motion.circle
        cx={x}
        cy={y}
        r={isSelected ? 14 : 10}
        fill="none"
        stroke="#C41E1E"
        strokeWidth={1.5}
        opacity={isSelected ? 0.6 : 0}
        animate={
          isSelected
            ? {
                r: [14, 20, 14],
                opacity: [0.6, 0.1, 0.6],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Pin shadow */}
      <ellipse
        cx={x + 1}
        cy={y + 12}
        rx={4}
        ry={2}
        fill="rgba(0,0,0,0.2)"
      />

      {/* Pin body */}
      <g>
        {/* Pin head */}
        <circle
          cx={x}
          cy={y - 6}
          r={7}
          fill="#C41E1E"
          stroke="#8B1414"
          strokeWidth={1.5}
        />
        {/* Pin shine */}
        <circle
          cx={x - 2}
          cy={y - 8}
          r={2}
          fill="rgba(255,255,255,0.4)"
        />
        {/* Pin needle */}
        <line
          x1={x}
          y1={y + 1}
          x2={x}
          y2={y + 10}
          stroke="#8B1414"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>

      {/* Label */}
      <text
        x={x + 12}
        y={y}
        className="text-[10px] fill-ink-900 dark:fill-paper-100"
        fontFamily="'JetBrains Mono', 'IBM Plex Mono', monospace"
        fontSize="9"
        fontWeight="600"
        style={{
          paintOrder: "stroke",
          stroke: "var(--label-bg, #F5F0E8)",
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      >
        {name}
      </text>

      {/* Hover area (invisible, larger hit target) */}
      <rect
        x={x - 15}
        y={y - 18}
        width={Math.max(name.length * 6 + 30, 40)}
        height={36}
        fill="transparent"
        className="group"
      >
        <title>{name}</title>
      </rect>
    </motion.g>
  );
}
