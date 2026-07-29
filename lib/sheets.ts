import Papa from "papaparse";
import { SHEETS_CONFIG } from "./sheetsConfig";

export type LeaguePlayer = { name: string; wins: number; losses: number; points: number };
export type ChampPlayer = { name: string; points: number };
export type Championship = { id: string; name: string; game: string; standings: ChampPlayer[] };

function csvUrl(gid: string) {
  return `https://docs.google.com/spreadsheets/d/${SHEETS_CONFIG.SHEET_ID}/gviz/tq?tqx=out:csv&gid=${gid}`;
}

async function fetchRows(gid: string): Promise<Record<string, string>[]> {
  const res = await fetch(csvUrl(gid), { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch sheet tab (gid ${gid}): ${res.status}`);
  }
  const text = await res.text();

  // A published-but-empty or misconfigured tab often comes back as an HTML
  // error page instead of CSV — catch that early with a clear error rather
  // than letting Papa silently parse garbage.
  if (text.trim().startsWith("<")) {
    throw new Error("Sheet did not return CSV data — check sharing settings and the GID.");
  }

  const parsed = Papa.parse<Record<string, string>>(text, {
    header: true,
    skipEmptyLines: true,
  });
  return parsed.data;
}

// Matches a header name loosely — trims whitespace and ignores case,
// so small differences in how you typed a column header don't break parsing.
function get(row: Record<string, string>, key: string): string {
  const foundKey = Object.keys(row).find((k) => k.trim().toLowerCase() === key.toLowerCase());
  return foundKey ? (row[foundKey] ?? "").trim() : "";
}

export async function fetchLeagueStandings(): Promise<LeaguePlayer[]> {
  const rows = await fetchRows(SHEETS_CONFIG.GIDS.league);
  return rows
    .filter((r) => get(r, "Player"))
    .map((r) => ({
      name: get(r, "Player"),
      wins: Number(get(r, "W")) || 0,
      losses: Number(get(r, "L")) || 0,
      points: Number(get(r, "Points")) || 0,
    }));
}

export async function fetchChampionships(): Promise<Championship[]> {
  const rows = await fetchRows(SHEETS_CONFIG.GIDS.championships);
  const map = new Map<string, Championship>();

  for (const r of rows) {
    const name = get(r, "Championship");
    const player = get(r, "Player");
    if (!name || !player) continue;

    if (!map.has(name)) {
      map.set(name, {
        id: name.toLowerCase().replace(/\s+/g, "-"),
        name,
        game: get(r, "Game"),
        standings: [],
      });
    }
    map.get(name)!.standings.push({
      name: player,
      points: Number(get(r, "Points")) || 0,
    });
  }

  return Array.from(map.values());
}

export async function fetchLastUpdated(): Promise<string | null> {
  try {
    const rows = await fetchRows(SHEETS_CONFIG.GIDS.meta);
    const value = rows[0] ? get(rows[0], "LastUpdated") : "";
    return value || null;
  } catch {
    // The Meta tab is optional — if it's missing or misconfigured,
    // just fall back to no date rather than breaking the whole table.
    return null;
  }
}
