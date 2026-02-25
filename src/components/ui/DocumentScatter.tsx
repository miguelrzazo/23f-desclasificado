"use client";

import Image from "next/image";

interface DocumentItem {
  src: string;
  alt: string;
  caption?: string;
  tilt?: "left" | "right" | "slight" | "neg";
  width?: number;
  height?: number;
}

interface DocumentScatterProps {
  documents: DocumentItem[];
  className?: string;
}

const TILT_CLASSES: Record<string, string> = {
  left: "doc-scatter__item--tilt-left",
  right: "doc-scatter__item--tilt-right",
  slight: "doc-scatter__item--tilt-slight",
  neg: "doc-scatter__item--tilt-neg",
};

export default function DocumentScatter({
  documents,
  className = "",
}: DocumentScatterProps) {
  return (
    <div className={`doc-scatter flex flex-wrap gap-4 items-end justify-center ${className}`}>
      {documents.map((doc, i) => {
        const tiltClass = TILT_CLASSES[doc.tilt ?? "slight"] ?? TILT_CLASSES.slight;
        const w = doc.width ?? 220;
        const h = doc.height ?? 300;
        return (
          <div
            key={i}
            className={`doc-scatter__item ${tiltClass}`}
            style={{ width: w, height: h }}
          >
            <Image
              src={doc.src}
              alt={doc.alt}
              title="Fuente: Ministerio de Asuntos Exteriores — desclasificado"
              width={w}
              height={h}
              className="w-full h-full object-cover"
              sizes={`${w}px`}
            />
            {doc.caption && (
              <div className="doc-scatter__caption">{doc.caption}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
