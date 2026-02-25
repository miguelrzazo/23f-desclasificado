"use client";

import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import type { TimelineEvent } from "@/content/data/timeline";

interface MinuteByMinuteProps {
  events: TimelineEvent[];
  locale: string;
}

/** Tracks/lanes for the minute-by-minute view */
const TRACKS = [
  { id: "congreso", label: { es: "Congreso", en: "Congress" }, color: "#C41E1E" },
  { id: "zarzuela", label: { es: "Zarzuela", en: "Zarzuela" }, color: "#2563EB" },
  { id: "valencia", label: { es: "Valencia", en: "Valencia" }, color: "#D97706" },
  { id: "tve", label: { es: "TVE", en: "TVE" }, color: "#7C3AED" },
  { id: "cesid", label: { es: "CESID", en: "CESID" }, color: "#059669" },
  { id: "otros", label: { es: "Otros", en: "Other" }, color: "#6B7280" },
] as const;

/** Map location IDs to track IDs */
function getTrackId(locationId: string): string {
  if (locationId === "congreso") return "congreso";
  if (locationId === "zarzuela") return "zarzuela";
  if (locationId === "valencia") return "valencia";
  if (locationId === "tve-prado-del-rey") return "tve";
  if (locationId === "cesid-hq") return "cesid";
  return "otros";
}

/** Parse time string to minutes since 17:00 */
function timeToMinutes(time: string | undefined): number {
  if (!time) return 0;
  const [h, m] = time.split(":").map(Number);
  let minutes = h * 60 + m;
  // Events after midnight: add 24h worth of minutes
  if (h < 12) minutes += 24 * 60;
  return minutes - 17 * 60; // offset from 17:00
}

/** Format minutes offset back to time display */
function minutesToDisplay(offset: number): string {
  const totalMinutes = offset + 17 * 60;
  const h = Math.floor(totalMinutes / 60) % 24;
  const m = totalMinutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}

function MinuteCard({
  event,
  locale,
  trackColor,
}: {
  event: TimelineEvent;
  locale: string;
  trackColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const title = locale === "es" ? event.title.es : event.title.en;
  const desc = locale === "es" ? event.description.es : event.description.en;

  return (
    <motion.div
      ref={ref}
      className="min-w-[220px] max-w-[280px] p-3 rounded-sm
        paper-texture dossier-section flex-shrink-0"
      style={{ borderLeft: `3px solid ${trackColor}` }}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="font-mono text-xs font-bold mb-1" style={{ color: trackColor }}>
        {event.time}
      </div>
      <h4 className="font-serif text-sm font-bold text-[var(--text-primary)] leading-snug mb-1">
        {title}
      </h4>
      <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
        {desc}
      </p>
      {event.quote && (
        <p className="font-body text-xs italic text-classified-red mt-1 line-clamp-2">
          &ldquo;{event.quote.text}&rdquo;
        </p>
      )}
    </motion.div>
  );
}

export default function MinuteByMinute({
  events,
  locale,
}: MinuteByMinuteProps) {
  const t = useTranslations("timeline");

  // Sort events by time
  const sortedEvents = useMemo(
    () =>
      [...events]
        .filter((e) => e.time)
        .sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time)),
    [events]
  );

  // Compute time span
  const minOffset = useMemo(
    () => Math.min(...sortedEvents.map((e) => timeToMinutes(e.time))),
    [sortedEvents]
  );
  const maxOffset = useMemo(
    () => Math.max(...sortedEvents.map((e) => timeToMinutes(e.time))),
    [sortedEvents]
  );

  // Generate ruler ticks every 30 minutes
  const ticks = useMemo(() => {
    const result: number[] = [];
    const start = Math.floor(minOffset / 30) * 30;
    for (let i = start; i <= maxOffset + 30; i += 30) {
      result.push(i);
    }
    return result;
  }, [minOffset, maxOffset]);

  // Pixels per minute
  const PX_PER_MIN = 8;
  const totalWidth = (maxOffset - minOffset + 60) * PX_PER_MIN;

  // Group events by track
  const eventsByTrack = useMemo(() => {
    const grouped: Record<string, TimelineEvent[]> = {};
    for (const track of TRACKS) {
      grouped[track.id] = [];
    }
    for (const event of sortedEvents) {
      const trackId = getTrackId(event.location);
      if (!grouped[trackId]) grouped[trackId] = [];
      grouped[trackId].push(event);
    }
    return grouped;
  }, [sortedEvents]);

  // Filter out empty tracks
  const activeTracks = TRACKS.filter(
    (track) => (eventsByTrack[track.id]?.length ?? 0) > 0
  );

  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4">
        {activeTracks.map((track) => (
          <div key={track.id} className="flex items-center gap-1.5">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: track.color }}
            />
            <span className="font-mono text-xs text-[var(--text-secondary)]">
              {track.label[locale as "es" | "en"]}
            </span>
          </div>
        ))}
      </div>

      {/* Scrollable horizontal timeline */}
      <div
        className="overflow-x-auto pb-4 -mx-4 px-4"
        role="region"
        aria-label={t("minuteByMinute")}
      >
        <div
          className="relative"
          style={{ minWidth: `${Math.max(totalWidth, 800)}px` }}
        >
          {/* Time ruler */}
          <div className="relative h-8 mb-2 border-b border-ink-900/10 dark:border-paper-50/10">
            {ticks.map((tick) => {
              const left = (tick - minOffset) * PX_PER_MIN;
              return (
                <div
                  key={tick}
                  className="absolute top-0"
                  style={{ left: `${left}px` }}
                >
                  <div className="w-px h-4 bg-ink-900/20 dark:bg-paper-50/20" />
                  <span className="absolute top-4 left-0 -translate-x-1/2 font-mono text-[10px] text-[var(--text-secondary)] whitespace-nowrap">
                    {minutesToDisplay(tick)}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Track lanes */}
          {activeTracks.map((track) => (
            <div key={track.id} className="relative mb-6">
              {/* Track label */}
              <div className="sticky left-0 z-10 inline-block mb-2">
                <span
                  className="font-mono text-xs font-bold px-2 py-0.5 rounded-sm text-white"
                  style={{ backgroundColor: track.color }}
                >
                  {track.label[locale as "es" | "en"]}
                </span>
              </div>

              {/* Track line */}
              <div
                className="absolute top-8 left-0 right-0 h-px opacity-20"
                style={{ backgroundColor: track.color }}
              />

              {/* Events on this track */}
              <div className="relative flex gap-3 pt-2">
                {eventsByTrack[track.id]?.map((event) => {
                  const left =
                    (timeToMinutes(event.time) - minOffset) * PX_PER_MIN;
                  return (
                    <div
                      key={event.id}
                      className="absolute"
                      style={{ left: `${left}px` }}
                    >
                      {/* Dot on track line */}
                      <div
                        className="absolute -top-2 left-0 w-2.5 h-2.5 rounded-full z-10"
                        style={{
                          backgroundColor: track.color,
                          boxShadow: `0 0 0 2px rgba(255,255,255,0.8)`,
                        }}
                      />
                      <div className="mt-2">
                        <MinuteCard
                          event={event}
                          locale={locale}
                          trackColor={track.color}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Spacer for card heights */}
              <div className="h-32" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
