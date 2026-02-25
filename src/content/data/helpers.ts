import { documents, type Document } from "./documents";
import { timelineEvents, type TimelineEvent } from "./timeline";
import { locations, type Location } from "./locations";
import { characters, type Character } from "./characters";

/** Look up a Document by its filename (the source field used in timeline events) */
export function getDocumentBySource(source: string): Document | undefined {
  // First try exact match
  let doc = documents.find((d) => d.filename === source);
  if (doc) return doc;

  // Some sources use wildcard patterns like "Causa_9481_*.txt" or "Carpeta_21801_*.txt"
  // Match by prefix
  if (source.includes("*")) {
    const prefix = source.replace("_*.txt", "").replace("*.txt", "");
    doc = documents.find((d) => d.filename.startsWith(prefix));
    if (doc) return doc;
  }

  // Some sources are just codes like "D.1", "D.3" — these map to exteriores documents
  // whose filenames start with the code
  doc = documents.find(
    (d) =>
      d.filename === source ||
      d.filename.startsWith(source + ".") ||
      d.filename.startsWith(source + "_"),
  );
  return doc;
}

/** Get all timeline events for a character */
export function getEventsForCharacter(characterId: string): TimelineEvent[] {
  return timelineEvents.filter((e) => e.characters.includes(characterId));
}

/** Get all characters involved in an event */
export function getCharactersForEvent(event: TimelineEvent): Character[] {
  return event.characters
    .map((id) => characters.find((c) => c.id === id))
    .filter(Boolean) as Character[];
}

/** Get the location object for a location ID */
export function getLocationById(locationId: string): Location | undefined {
  return locations.find((l) => l.id === locationId);
}

/** Get adjacent events (previous/next) in the timeline */
export function getAdjacentEvents(eventId: string): {
  prev: TimelineEvent | null;
  next: TimelineEvent | null;
} {
  const idx = timelineEvents.findIndex((e) => e.id === eventId);
  return {
    prev: idx > 0 ? timelineEvents[idx - 1] : null,
    next: idx < timelineEvents.length - 1 ? timelineEvents[idx + 1] : null,
  };
}

/** Get all events at a given location */
export function getEventsForLocation(locationId: string): TimelineEvent[] {
  return timelineEvents.filter((e) => e.location === locationId);
}

/** Get all unique characters at a given location (derived from events) */
export function getCharactersForLocation(locationId: string): Character[] {
  const charIds = new Set<string>();
  timelineEvents
    .filter((e) => e.location === locationId)
    .forEach((e) => e.characters.forEach((c) => charIds.add(c)));
  return characters.filter((c) => charIds.has(c.id));
}
