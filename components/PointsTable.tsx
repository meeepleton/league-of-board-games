// "use client";

// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import standingsData from "@/data/standings.json";
// import championshipsData from "@/data/championships.json";

// type Player = { name: string; team: string; wins: number; losses: number; points: number };
// type ChampPlayer = { name: string; points: number };
// type Championship = { id: string; name: string; game: string; standings: ChampPlayer[] };

// function useRanked<T extends { points: number }>(rows: T[]) {
//   // Always recompute rank live from the "points" field.
//   // Editing points in the JSON data files is all that's needed —
//   // this component re-sorts and re-ranks automatically, no manual rank edits required.
//   return useMemo(
//     () =>
//       [...rows]
//         .sort((a, b) => b.points - a.points)
//         .map((row, i) => ({ ...row, rank: i + 1 })),
//     [rows]
//   );
// }

// function LeagueTable() {
//   const ranked = useRanked<Player>(standingsData.league as Player[]);
//   const [expanded, setExpanded] = useState(false);
//   const visible = expanded ? ranked : ranked.slice(0, 10);

//   return (
//     <div className="bg-white rounded-xl3 shadow-soft overflow-hidden">
//       <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
//         <div>
//           <h3 className="font-heading text-2xl font-semibold">League Table</h3>
//           <p className="text-xs text-ink/50 mt-1">
//             Last updated: {standingsData.lastUpdated}
//           </p>
//         </div>
//         <span className="text-xs bg-forest/10 text-forest px-3 py-1 rounded-full font-semibold">
//           Live from data file
//         </span>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="text-left text-ink/40 uppercase text-xs">
//               <th className="px-6 py-3">Rank</th>
//               <th className="px-6 py-3">Player</th>
//               <th className="px-6 py-3 hidden sm:table-cell">Team</th>
//               <th className="px-6 py-3">W</th>
//               <th className="px-6 py-3">L</th>
//               <th className="px-6 py-3">Points</th>
//             </tr>
//           </thead>
//           <tbody>
//             {visible.map((p, i) => (
//               <motion.tr
//                 key={p.name}
//                 initial={{ opacity: 0, y: 8 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.02 }}
//                 className={`border-t border-ink/5 ${p.rank <= 3 ? "bg-gold/5" : ""}`}
//               >
//                 <td className="px-6 py-3 font-semibold">
//                   {p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank}
//                 </td>
//                 <td className="px-6 py-3 font-medium">{p.name}</td>
//                 <td className="px-6 py-3 hidden sm:table-cell text-ink/60">{p.team}</td>
//                 <td className="px-6 py-3">{p.wins}</td>
//                 <td className="px-6 py-3">{p.losses}</td>
//                 <td className="px-6 py-3 font-semibold">{p.points}</td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {ranked.length > 10 && (
//         <div className="p-5 text-center">
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="btn-scale bg-ink text-cream px-6 py-2.5 rounded-full text-sm font-semibold"
//           >
//             {expanded ? "Show Top 10" : "View Complete Rankings"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// function ChampionshipCard({ champ }: { champ: Championship }) {
//   const ranked = useRanked<ChampPlayer>(champ.standings);
//   const [expanded, setExpanded] = useState(false);
//   const visible = expanded ? ranked : ranked.slice(0, 5);

//   return (
//     <div className="bg-white rounded-xl2 shadow-softer overflow-hidden">
//       <div className="px-6 py-4 border-b border-ink/10">
//         <h4 className="font-heading text-lg font-semibold">{champ.name}</h4>
//         <span className="text-xs text-ink/50">{champ.game}</span>
//       </div>
//       <table className="w-full text-sm">
//         <tbody>
//           {visible.map((p, i) => (
//             <tr key={p.name} className="border-t border-ink/5">
//               <td className="px-6 py-2.5 w-10 font-semibold">{p.rank}</td>
//               <td className="px-6 py-2.5">{p.name}</td>
//               <td className="px-6 py-2.5 text-right font-semibold">{p.points}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {ranked.length > 5 && (
//         <div className="p-4 text-center">
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-sm font-semibold text-sky hover:underline"
//           >
//             {expanded ? "Show less" : "Expand"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function PointsTable() {
//   const champs = championshipsData as Championship[];
//   return (
//     <div className="space-y-12">
//       <LeagueTable />
//       <div>
//         <h3 className="font-heading text-2xl font-semibold mb-6">Championships</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           {champs.map((c) => (
//             <ChampionshipCard key={c.id} champ={c} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import standingsData from "@/data/standings.json";
// import championshipsData from "@/data/championships.json";

// type Player = { name: string; wins: number; losses: number; points: number };
// type ChampPlayer = { name: string; points: number };
// type Championship = { id: string; name: string; game: string; standings: ChampPlayer[] };

// function useRanked<T extends { points: number }>(rows: T[]) {
//   // Always recompute rank live from the "points" field.
//   // Editing points in the JSON data files is all that's needed —
//   // this component re-sorts and re-ranks automatically, no manual rank edits required.
//   return useMemo(
//     () =>
//       [...rows]
//         .sort((a, b) => b.points - a.points)
//         .map((row, i) => ({ ...row, rank: i + 1 })),
//     [rows]
//   );
// }

// function LeagueTable() {
//   const ranked = useRanked<Player>(standingsData.league as Player[]);
//   const [expanded, setExpanded] = useState(false);
//   const visible = expanded ? ranked : ranked.slice(0, 10);

//   return (
//     <div className="bg-white rounded-xl3 shadow-soft overflow-hidden">
//       <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
//         <div>
//           <h3 className="font-heading text-2xl font-semibold">League Table</h3>
//           <p className="text-xs text-ink/50 mt-1">
//             Last updated: {standingsData.lastUpdated}
//           </p>
//         </div>
//         <span className="text-xs bg-forest/10 text-forest px-3 py-1 rounded-full font-semibold">
//           Live from data file
//         </span>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="text-left text-ink/40 uppercase text-xs">
//               <th className="px-6 py-3">Rank</th>
//               <th className="px-6 py-3">Player</th>
//               <th className="px-6 py-3">W</th>
//               <th className="px-6 py-3">L</th>
//               <th className="px-6 py-3">Points</th>
//             </tr>
//           </thead>
//           <tbody>
//             {visible.map((p, i) => (
//               <motion.tr
//                 key={p.name}
//                 initial={{ opacity: 0, y: 8 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.02 }}
//                 className={`border-t border-ink/5 ${p.rank <= 3 ? "bg-gold/5" : ""}`}
//               >
//                 <td className="px-6 py-3 font-semibold">
//                   {p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank}
//                 </td>
//                 <td className="px-6 py-3 font-medium">{p.name}</td>
//                 <td className="px-6 py-3">{p.wins}</td>
//                 <td className="px-6 py-3">{p.losses}</td>
//                 <td className="px-6 py-3 font-semibold">{p.points}</td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {ranked.length > 10 && (
//         <div className="p-5 text-center">
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="btn-scale bg-ink text-cream px-6 py-2.5 rounded-full text-sm font-semibold"
//           >
//             {expanded ? "Show Top 10" : "View Complete Rankings"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// function ChampionshipCard({ champ }: { champ: Championship }) {
//   const ranked = useRanked<ChampPlayer>(champ.standings);
//   const [expanded, setExpanded] = useState(false);
//   const visible = expanded ? ranked : ranked.slice(0, 5);

//   return (
//     <div className="bg-white rounded-xl2 shadow-softer overflow-hidden">
//       <div className="px-6 py-4 border-b border-ink/10">
//         <h4 className="font-heading text-lg font-semibold">{champ.name}</h4>
//         <span className="text-xs text-ink/50">{champ.game}</span>
//       </div>
//       <table className="w-full text-sm">
//         <tbody>
//           {visible.map((p, i) => (
//             <tr key={p.name} className="border-t border-ink/5">
//               <td className="px-6 py-2.5 w-10 font-semibold">{p.rank}</td>
//               <td className="px-6 py-2.5">{p.name}</td>
//               <td className="px-6 py-2.5 text-right font-semibold">{p.points}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {ranked.length > 5 && (
//         <div className="p-4 text-center">
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-sm font-semibold text-sky hover:underline"
//           >
//             {expanded ? "Show less" : "Expand"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function PointsTable() {
//   const champs = championshipsData as Championship[];
//   return (
//     <div className="space-y-12">
//       <LeagueTable />
//       <div>
//         <h3 className="font-heading text-2xl font-semibold mb-6">Championships</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           {champs.map((c) => (
//             <ChampionshipCard key={c.id} champ={c} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import standingsData from "@/data/standings.json";
// import championshipsData from "@/data/championships.json";

// type Player = { name: string; wins: number; losses: number; points: number };
// type ChampPlayer = { name: string; points: number };
// type Championship = { id: string; name: string; game: string; standings: ChampPlayer[] };

// const CHAMP_COLORS = [
//   { bar: "bg-forest", tint: "bg-forest-light/20 text-forest-dark" },
//   { bar: "bg-cherry", tint: "bg-cherry-light/20 text-cherry-dark" },
//   { bar: "bg-sky", tint: "bg-sky-light/30 text-sky-dark" },
//   { bar: "bg-tangerine", tint: "bg-tangerine-light/25 text-tangerine-dark" },
// ];

// function useRanked<T extends { points: number }>(rows: T[]) {
//   // Always recompute rank live from the "points" field.
//   // Editing points in the JSON data files is all that's needed —
//   // this component re-sorts and re-ranks automatically, no manual rank edits required.
//   return useMemo(
//     () =>
//       [...rows]
//         .sort((a, b) => b.points - a.points)
//         .map((row, i) => ({ ...row, rank: i + 1 })),
//     [rows]
//   );
// }

// function LeagueTable() {
//   const ranked = useRanked<Player>(standingsData.league as Player[]);
//   const [expanded, setExpanded] = useState(false);
//   const visible = expanded ? ranked : ranked.slice(0, 10);

//   return (
//     <div className="relative overflow-hidden bg-white rounded-xl3 shadow-soft">
//       <span className="absolute top-0 left-0 right-0 h-1.5 bg-gold" aria-hidden />
//       <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10 pt-6">
//         <div>
//           <h3 className="font-heading text-2xl font-semibold">League Table</h3>
//           <p className="text-xs text-ink/50 mt-1">
//             Last updated: {standingsData.lastUpdated}
//           </p>
//         </div>
//         <span className="text-xs bg-forest-light/25 text-forest-dark px-3 py-1 rounded-full font-semibold">
//           Live from data file
//         </span>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="text-left text-ink/40 uppercase text-xs">
//               <th className="px-6 py-3">Rank</th>
//               <th className="px-6 py-3">Player</th>
//               <th className="px-6 py-3">W</th>
//               <th className="px-6 py-3">L</th>
//               <th className="px-6 py-3">Points</th>
//             </tr>
//           </thead>
//           <tbody>
//             {visible.map((p, i) => (
//               <motion.tr
//                 key={p.name}
//                 initial={{ opacity: 0, y: 8 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.02 }}
//                 className={`border-t border-ink/5 ${p.rank <= 3 ? "bg-gold-light/15" : ""}`}
//               >
//                 <td className="px-6 py-3 font-semibold">
//                   {p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank}
//                 </td>
//                 <td className="px-6 py-3 font-medium">{p.name}</td>
//                 <td className="px-6 py-3">{p.wins}</td>
//                 <td className="px-6 py-3">{p.losses}</td>
//                 <td className="px-6 py-3 font-semibold">{p.points}</td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {ranked.length > 10 && (
//         <div className="p-5 text-center">
//           <motion.button
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.96 }}
//             onClick={() => setExpanded(!expanded)}
//             className="bg-ink text-cream px-6 py-2.5 rounded-full text-sm font-semibold"
//           >
//             {expanded ? "Show Top 10" : "View Complete Rankings"}
//           </motion.button>
//         </div>
//       )}
//     </div>
//   );
// }

// function ChampionshipCard({ champ, colorIndex }: { champ: Championship; colorIndex: number }) {
//   const ranked = useRanked<ChampPlayer>(champ.standings);
//   const [expanded, setExpanded] = useState(false);
//   const visible = expanded ? ranked : ranked.slice(0, 5);
//   const c = CHAMP_COLORS[colorIndex % CHAMP_COLORS.length];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{ type: "spring", stiffness: 140, damping: 16, delay: colorIndex * 0.08 }}
//       className="relative overflow-hidden bg-white rounded-xl2 shadow-softer"
//     >
//       <span className={`absolute top-0 left-0 right-0 h-1.5 ${c.bar}`} aria-hidden />
//       <div className="px-6 py-4 border-b border-ink/10 pt-5">
//         <h4 className="font-heading text-lg font-semibold">{champ.name}</h4>
//         <span className={`inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${c.tint}`}>
//           {champ.game}
//         </span>
//       </div>
//       <table className="w-full text-sm">
//         <tbody>
//           {visible.map((p, i) => (
//             <tr key={p.name} className="border-t border-ink/5">
//               <td className="px-6 py-2.5 w-10 font-semibold">{p.rank}</td>
//               <td className="px-6 py-2.5">{p.name}</td>
//               <td className="px-6 py-2.5 text-right font-semibold">{p.points}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {ranked.length > 5 && (
//         <div className="p-4 text-center">
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-sm font-semibold text-sky-dark hover:underline"
//           >
//             {expanded ? "Show less" : "Expand"}
//           </button>
//         </div>
//       )}
//     </motion.div>
//   );
// }

// export default function PointsTable() {
//   const champs = championshipsData as Championship[];
//   return (
//     <div className="space-y-12">
//       <LeagueTable />
//       <div>
//         <h3 className="font-heading text-2xl font-semibold mb-6">Championships</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           {champs.map((c, i) => (
//             <ChampionshipCard key={c.id} champ={c} colorIndex={i} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// //  fallback code that works PERFECTLY, CAN USE AS AN BACKUP.
// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   fetchLeagueStandings,
//   fetchChampionships,
//   fetchLastUpdated,
//   type LeaguePlayer,
//   type Championship,
// } from "@/lib/sheets";
// // Bundled fallback data — used ONLY if the live Google Sheet fetch fails,
// // so the table never breaks or goes blank for visitors.
// import standingsFallback from "@/data/standings.json";
// import championshipsFallback from "@/data/championships.json";

// type Player = LeaguePlayer;
// type ChampPlayer = { name: string; points: number };

// const CHAMP_COLORS = [
//   { bar: "bg-forest", tint: "bg-forest-light/20 text-forest-dark" },
//   { bar: "bg-cherry", tint: "bg-cherry-light/20 text-cherry-dark" },
//   { bar: "bg-sky", tint: "bg-sky-light/30 text-sky-dark" },
//   { bar: "bg-tangerine", tint: "bg-tangerine-light/25 text-tangerine-dark" },
// ];

// function useRanked<T extends { points: number }>(rows: T[]) {
//   // Always recompute rank live from the "points" field.
//   // Editing points in the Google Sheet is all that's needed —
//   // this component re-sorts and re-ranks automatically, no manual rank edits required.
//   return useMemo(
//     () =>
//       [...rows]
//         .sort((a, b) => b.points - a.points)
//         .map((row, i) => ({ ...row, rank: i + 1 })),
//     [rows]
//   );
// }

// function LeagueTable({
//   league,
//   lastUpdated,
//   source,
// }: {
//   league: Player[];
//   lastUpdated: string | null;
//   source: "sheet" | "fallback";
// }) {
//   const ranked = useRanked<Player>(league);
//   const [expanded, setExpanded] = useState(false);
//   const visible = expanded ? ranked : ranked.slice(0, 10);

//   return (
//     <div className="relative overflow-hidden bg-white rounded-xl3 shadow-soft">
//       <span className="absolute top-0 left-0 right-0 h-1.5 bg-gold" aria-hidden />
//       <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10 pt-6">
//         <div>
//           <h3 className="font-heading text-2xl font-semibold">League Table</h3>
//           <p className="text-xs text-ink/50 mt-1">
//             Last updated: {lastUpdated ?? "—"}
//           </p>
//         </div>
//         <span
//           className={`text-xs px-3 py-1 rounded-full font-semibold ${
//             source === "sheet"
//               ? "bg-forest-light/25 text-forest-dark"
//               : "bg-gold-light/40 text-ink"
//           }`}
//         >
//           {source === "sheet" ? "Live from Google Sheets" : "Showing last saved data"}
//         </span>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="text-left text-ink/40 uppercase text-xs">
//               <th className="px-6 py-3">Rank</th>
//               <th className="px-6 py-3">Player</th>
//               <th className="px-6 py-3">W</th>
//               <th className="px-6 py-3">L</th>
//               <th className="px-6 py-3">Points</th>
//             </tr>
//           </thead>
//           <tbody>
//             {visible.map((p, i) => (
//               <motion.tr
//                 key={p.name}
//                 initial={{ opacity: 0, y: 8 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.02 }}
//                 className={`border-t border-ink/5 ${p.rank <= 3 ? "bg-gold-light/15" : ""}`}
//               >
//                 <td className="px-6 py-3 font-semibold">
//                   {p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank}
//                 </td>
//                 <td className="px-6 py-3 font-medium">{p.name}</td>
//                 <td className="px-6 py-3">{p.wins}</td>
//                 <td className="px-6 py-3">{p.losses}</td>
//                 <td className="px-6 py-3 font-semibold">{p.points}</td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {ranked.length > 10 && (
//         <div className="p-5 text-center">
//           <motion.button
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.96 }}
//             onClick={() => setExpanded(!expanded)}
//             className="bg-ink text-cream px-6 py-2.5 rounded-full text-sm font-semibold"
//           >
//             {expanded ? "Show Top 10" : "View Complete Rankings"}
//           </motion.button>
//         </div>
//       )}
//     </div>
//   );
// }

// function ChampionshipCard({ champ, colorIndex }: { champ: Championship; colorIndex: number }) {
//   const ranked = useRanked<ChampPlayer>(champ.standings);
//   const [expanded, setExpanded] = useState(false);
//   const visible = expanded ? ranked : ranked.slice(0, 5);
//   const c = CHAMP_COLORS[colorIndex % CHAMP_COLORS.length];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{ type: "spring", stiffness: 140, damping: 16, delay: colorIndex * 0.08 }}
//       className="relative overflow-hidden bg-white rounded-xl2 shadow-softer"
//     >
//       <span className={`absolute top-0 left-0 right-0 h-1.5 ${c.bar}`} aria-hidden />
//       <div className="px-6 py-4 border-b border-ink/10 pt-5">
//         <h4 className="font-heading text-lg font-semibold">{champ.name}</h4>
//         <span className={`inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${c.tint}`}>
//           {champ.game}
//         </span>
//       </div>
//       <table className="w-full text-sm">
//         <tbody>
//           {visible.map((p, i) => (
//             <tr key={p.name} className="border-t border-ink/5">
//               <td className="px-6 py-2.5 w-10 font-semibold">{p.rank}</td>
//               <td className="px-6 py-2.5">{p.name}</td>
//               <td className="px-6 py-2.5 text-right font-semibold">{p.points}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {ranked.length > 5 && (
//         <div className="p-4 text-center">
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-sm font-semibold text-sky-dark hover:underline"
//           >
//             {expanded ? "Show less" : "Expand"}
//           </button>
//         </div>
//       )}
//     </motion.div>
//   );
// }

// export default function PointsTable() {
//   const [league, setLeague] = useState<Player[]>(standingsFallback.league as Player[]);
//   const [champs, setChamps] = useState<Championship[]>(championshipsFallback as Championship[]);
//   const [lastUpdated, setLastUpdated] = useState<string | null>(standingsFallback.lastUpdated);
//   const [source, setSource] = useState<"sheet" | "fallback">("fallback");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       try {
//         const [leagueData, champData, updated] = await Promise.all([
//           fetchLeagueStandings(),
//           fetchChampionships(),
//           fetchLastUpdated(),
//         ]);

//         if (cancelled) return;

//         // Only switch over to the live data if we actually got rows back —
//         // an empty sheet response shouldn't wipe out a working table.
//         if (leagueData.length > 0) {
//           setLeague(leagueData);
//           setSource("sheet");
//         }
//         if (champData.length > 0) {
//           setChamps(champData);
//         }
//         if (updated) {
//           setLastUpdated(updated);
//         }
//       } catch (err) {
//         // Fetch failed — silently keep showing the bundled fallback data
//         // that's already in state, with the "Showing last saved data" badge.
//         console.error("Google Sheets fetch failed, using fallback data:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   return (
//     <div className="space-y-12">
//       <LeagueTable league={league} lastUpdated={lastUpdated} source={source} />
//       <div>
//         <h3 className="font-heading text-2xl font-semibold mb-6">Championships</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           {champs.map((c, i) => (
//             <ChampionshipCard key={c.id} champ={c} colorIndex={i} />
//           ))}
//         </div>
//       </div>
//       {loading && (
//         <p className="text-center text-xs text-ink/40">Checking for the latest standings…</p>
//       )}
//     </div>
//   );
// }



// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   fetchLeagueStandings,
//   fetchChampionships,
//   fetchLastUpdated,
//   type LeaguePlayer,
//   type Championship,
// } from "@/lib/sheets";

// type Player = LeaguePlayer;
// type ChampPlayer = { name: string; points: number };

// const CHAMP_COLORS = [
//   {
//     bar: "bg-forest",
//     tint: "bg-forest-light/20 text-forest-dark",
//   },
//   {
//     bar: "bg-cherry",
//     tint: "bg-cherry-light/20 text-cherry-dark",
//   },
//   {
//     bar: "bg-sky",
//     tint: "bg-sky-light/30 text-sky-dark",
//   },
//   {
//     bar: "bg-tangerine",
//     tint: "bg-tangerine-light/25 text-tangerine-dark",
//   },
// ];

// /**
//  * Sorts players by points and automatically assigns their rank.
//  *
//  * Rank is calculated from the current Google Sheets data,
//  * so you do not need to maintain a separate Rank column
//  * in Google Sheets.
//  */
// function useRanked<T extends { points: number }>(rows: T[]) {
//   return useMemo(
//     () =>
//       [...rows]
//         .sort((a, b) => b.points - a.points)
//         .map((row, i) => ({
//           ...row,
//           rank: i + 1,
//         })),
//     [rows]
//   );
// }

// /**
//  * League Table
//  */
// function LeagueTable({
//   league,
//   lastUpdated,
// }: {
//   league: Player[];
//   lastUpdated: string | null;
// }) {
//   const ranked = useRanked<Player>(league);

//   const [expanded, setExpanded] = useState(false);

//   const visible = expanded
//     ? ranked
//     : ranked.slice(0, 10);

//   return (
//     <div className="relative overflow-hidden bg-white rounded-xl3 shadow-soft">
//       {/* Top decorative line */}
//       <span
//         className="absolute top-0 left-0 right-0 h-1.5 bg-gold"
//         aria-hidden
//       />

//       {/* Header */}
//       <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10 pt-6">
//         <div>
//           <h3 className="font-heading text-2xl font-semibold">
//             League Table
//           </h3>

//           <p className="text-xs text-ink/50 mt-1">
//             Last updated: {lastUpdated ?? "—"}
//           </p>
//         </div>

//         {/* Google Sheets status */}
//         <span className="text-xs px-3 py-1 rounded-full font-semibold bg-forest-light/25 text-forest-dark">
//           Live from Google Sheets
//         </span>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="text-left text-ink/40 uppercase text-xs">
//               <th className="px-6 py-3">
//                 Rank
//               </th>

//               <th className="px-6 py-3">
//                 Player
//               </th>

//               <th className="px-6 py-3">
//                 W
//               </th>

//               <th className="px-6 py-3">
//                 L
//               </th>

//               <th className="px-6 py-3">
//                 Points
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {visible.map((p, i) => (
//               <motion.tr
//                 key={p.name}
//                 initial={{
//                   opacity: 0,
//                   y: 8,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   delay: i * 0.02,
//                 }}
//                 className={`border-t border-ink/5 ${
//                   p.rank <= 3
//                     ? "bg-gold-light/15"
//                     : ""
//                 }`}
//               >
//                 {/* Rank */}
//                 <td className="px-6 py-3 font-semibold">
//                   {p.rank <= 3
//                     ? ["🥇", "🥈", "🥉"][p.rank - 1]
//                     : p.rank}
//                 </td>

//                 {/* Player */}
//                 <td className="px-6 py-3 font-medium">
//                   {p.name}
//                 </td>

//                 {/* Wins */}
//                 <td className="px-6 py-3">
//                   {p.wins}
//                 </td>

//                 {/* Losses */}
//                 <td className="px-6 py-3">
//                   {p.losses}
//                 </td>

//                 {/* Points */}
//                 <td className="px-6 py-3 font-semibold">
//                   {p.points}
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Expand / Collapse */}
//       {ranked.length > 10 && (
//         <div className="p-5 text-center">
//           <motion.button
//             whileHover={{
//               scale: 1.04,
//             }}
//             whileTap={{
//               scale: 0.96,
//             }}
//             onClick={() =>
//               setExpanded(!expanded)
//             }
//             className="bg-ink text-cream px-6 py-2.5 rounded-full text-sm font-semibold"
//           >
//             {expanded
//               ? "Show Top 10"
//               : "View Complete Rankings"}
//           </motion.button>
//         </div>
//       )}
//     </div>
//   );
// }

// /**
//  * Championship Card
//  */
// function ChampionshipCard({
//   champ,
//   colorIndex,
// }: {
//   champ: Championship;
//   colorIndex: number;
// }) {
//   const ranked = useRanked<ChampPlayer>(
//     champ.standings
//   );

//   const [expanded, setExpanded] =
//     useState(false);

//   const visible = expanded
//     ? ranked
//     : ranked.slice(0, 5);

//   const c =
//     CHAMP_COLORS[
//       colorIndex % CHAMP_COLORS.length
//     ];

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 24,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         margin: "-40px",
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 140,
//         damping: 16,
//         delay: colorIndex * 0.08,
//       }}
//       className="relative overflow-hidden bg-white rounded-xl2 shadow-softer"
//     >
//       {/* Top decorative line */}
//       <span
//         className={`absolute top-0 left-0 right-0 h-1.5 ${c.bar}`}
//         aria-hidden
//       />

//       {/* Championship Header */}
//       <div className="px-6 py-4 border-b border-ink/10 pt-5">
//         <h4 className="font-heading text-lg font-semibold">
//           {champ.name}
//         </h4>

//         <span
//           className={`inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${c.tint}`}
//         >
//           {champ.game}
//         </span>
//       </div>

//       {/* Championship Table */}
//       <table className="w-full text-sm">
//         <tbody>
//           {visible.map((p) => (
//             <tr
//               key={p.name}
//               className="border-t border-ink/5"
//             >
//               <td className="px-6 py-2.5 w-10 font-semibold">
//                 {p.rank}
//               </td>

//               <td className="px-6 py-2.5">
//                 {p.name}
//               </td>

//               <td className="px-6 py-2.5 text-right font-semibold">
//                 {p.points}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Expand / Collapse */}
//       {ranked.length > 5 && (
//         <div className="p-4 text-center">
//           <button
//             onClick={() =>
//               setExpanded(!expanded)
//             }
//             className="text-sm font-semibold text-sky-dark hover:underline"
//           >
//             {expanded
//               ? "Show less"
//               : "Expand"}
//           </button>
//         </div>
//       )}
//     </motion.div>
//   );
// }

// /**
//  * Main Points Table Component
//  *
//  * IMPORTANT:
//  * Google Sheets is now the ONLY source of data.
//  *
//  * There is intentionally NO:
//  * - standings.json fallback
//  * - championships.json fallback
//  *
//  * This prevents old data from flashing on the screen
//  * before the Google Sheets request completes.
//  */
// export default function PointsTable() {
//   const [league, setLeague] =
//     useState<Player[]>([]);

//   const [champs, setChamps] =
//     useState<Championship[]>([]);

//   const [lastUpdated, setLastUpdated] =
//     useState<string | null>(null);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState<string | null>(null);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       setError(null);

//       try {
//         /**
//          * Fetch all required data directly
//          * from Google Sheets.
//          */
//         const [
//           leagueData,
//           champData,
//           updated,
//         ] = await Promise.all([
//           fetchLeagueStandings(),
//           fetchChampionships(),
//           fetchLastUpdated(),
//         ]);

//         // Stop if the component was unmounted
//         // while the request was running.
//         if (cancelled) {
//           return;
//         }

//         /**
//          * The League Table is required.
//          *
//          * If Google Sheets returns no league rows,
//          * treat it as an error instead of displaying
//          * empty or outdated data.
//          */
//         if (leagueData.length === 0) {
//           throw new Error(
//             "No league standings found in Google Sheets."
//           );
//         }

//         /**
//          * Update League Table
//          */
//         setLeague(leagueData);

//         /**
//          * Update Championships if data exists.
//          */
//         if (champData.length > 0) {
//           setChamps(champData);
//         }

//         /**
//          * Update Last Updated date
//          */
//         if (updated) {
//           setLastUpdated(updated);
//         }
//       } catch (err) {
//         if (cancelled) {
//           return;
//         }

//         console.error(
//           "Failed to load standings from Google Sheets:",
//           err
//         );

//         setError(
//           "Points Table Coming Soon."
//         );
//       } finally {
//         if (!cancelled) {
//           setLoading(false);
//         }
//       }
//     }

//     load();

//     /**
//      * Cleanup function.
//      *
//      * Prevents state updates if the component
//      * is unmounted before the Google Sheets
//      * request finishes.
//      */
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   /**
//    * LOADING STATE
//    *
//    * This is what visitors see while the
//    * Google Sheets data is being fetched.
//    *
//    * Because league/champs start as empty arrays,
//    * old JSON data cannot flash on screen.
//    */
//   if (loading) {
//     return (
//       <div className="space-y-12">
//         <div className="relative overflow-hidden bg-white rounded-xl3 shadow-soft">
//           <span
//             className="absolute top-0 left-0 right-0 h-1.5 bg-gold"
//             aria-hidden
//           />

//           <div className="px-6 py-6">
//             <h3 className="font-heading text-2xl font-semibold">
//               League Table
//             </h3>

//             <p className="text-sm text-ink/50 mt-2">
//               Loading latest standings…
//             </p>
//           </div>
//         </div>

//         <p className="text-center text-xs text-ink/40">
//           Fetching the latest data from Google Sheets…
//         </p>
//       </div>
//     );
//   }

//   /**
//    * ERROR STATE
//    *
//    * If Google Sheets fails, we show an error
//    * instead of displaying old/outdated data.
//    */
//   if (error) {
//     return (
//       <div className="space-y-12">
//         <div className="relative overflow-hidden bg-white rounded-xl3 shadow-soft">
//           <span
//             className="absolute top-0 left-0 right-0 h-1.5 bg-gold"
//             aria-hidden
//           />

//           <div className="px-6 py-8 text-center">
//             <h3 className="font-heading text-2xl font-semibold">
//               League Table
//             </h3>

//             <p className="text-sm text-ink/50 mt-3">
//               {error}
//             </p>

//             <button
//               onClick={() =>
//                 window.location.reload()
//               }
//               className="mt-5 bg-ink text-cream px-6 py-2.5 rounded-full text-sm font-semibold"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   /**
//    * SUCCESS STATE
//    *
//    * At this point, all displayed data
//    * comes from Google Sheets.
//    */
//   return (
//     <div className="space-y-12">
//       {/* League Table */}
//       <LeagueTable
//         league={league}
//         lastUpdated={lastUpdated}
//       />

//       {/* Championships */}
//       <div>
//         <h3 className="font-heading text-2xl font-semibold mb-6">
//           Championships
//         </h3>

//         <div className="grid md:grid-cols-3 gap-6">
//           {champs.map((c, i) => (
//             <ChampionshipCard
//               key={c.id}
//               champ={c}
//               colorIndex={i}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  fetchLeagueStandings,
  fetchChampionships,
  fetchLastUpdated,
  type LeaguePlayer,
  type Championship,
  type ChampPlayer,
} from "@/lib/sheets";

type Player = LeaguePlayer;

const CHAMP_COLORS = [
  { bar: "bg-forest", tint: "bg-forest-light/20 text-forest-dark" },
  { bar: "bg-cherry", tint: "bg-cherry-light/20 text-cherry-dark" },
  { bar: "bg-sky", tint: "bg-sky-light/30 text-sky-dark" },
  { bar: "bg-tangerine", tint: "bg-tangerine-light/25 text-tangerine-dark" },
];

// ---------------------------------------------------------------------------
// Per-game column configuration.
//
// Each championship's "Game" cell in the sheet is matched (case-insensitive,
// trimmed) against the keys below to decide which stat columns to display
// beyond the always-present Player name and Points.
//
// If a game isn't listed here, it falls back to the DEFAULT_COLUMNS set.
// ---------------------------------------------------------------------------
type ColumnKey = "matchesPlayed" | "wins" | "podiums" | "points" | "highscore";

// Full, beginner-friendly labels — no abbreviations (except on the League
// Table's "Matches Played" header, which shortens only on the narrowest
// mobile screens where there's genuinely no room).
const COLUMN_LABELS: Record<ColumnKey, string> = {
  matchesPlayed: "Matches Played",
  wins: "Wins",
  podiums: "Podiums",
  points: "Points",
  highscore: "Highscore",
};

const WITH_HIGHSCORE: ColumnKey[] = ["matchesPlayed", "wins", "points", "highscore"];
const WITH_PODIUMS: ColumnKey[] = ["matchesPlayed", "wins", "podiums", "points"];
const BASIC: ColumnKey[] = ["matchesPlayed", "wins", "points"];

const GAME_COLUMNS: Record<string, ColumnKey[]> = {
  "heat": WITH_PODIUMS,
  "castles of burgundy": WITH_HIGHSCORE,
  "brass: birmingham": WITH_HIGHSCORE,
  "brass birmingham": WITH_HIGHSCORE,
  "catan": WITH_HIGHSCORE,
  "next station: london": WITH_HIGHSCORE,
  "next station london": WITH_HIGHSCORE,
  "splendor": BASIC,
  "azul": WITH_HIGHSCORE,
  "7 wonders": WITH_HIGHSCORE,
  "wingspan": WITH_HIGHSCORE,
};

const DEFAULT_COLUMNS: ColumnKey[] = BASIC;

function getColumnsForGame(game: string): ColumnKey[] {
  return GAME_COLUMNS[game.trim().toLowerCase()] ?? DEFAULT_COLUMNS;
}

/**
 * Sorts players by points and automatically assigns their rank.
 */
function useRanked<T extends { points: number }>(rows: T[]) {
  return useMemo(
    () =>
      [...rows]
        .sort((a, b) => b.points - a.points)
        .map((row, i) => ({ ...row, rank: i + 1 })),
    [rows]
  );
}

/**
 * League Table
 *
 * Uses table-fixed + a colgroup with responsive column widths so all 5
 * columns (Rank, Players, Matches Played, Wins, Points) fit on a phone
 * screen without a horizontal scrollbar cutting off Points.
 */
function LeagueTable({ league, lastUpdated }: { league: Player[]; lastUpdated: string | null }) {
  const ranked = useRanked<Player>(league);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? ranked : ranked.slice(0, 10);

  return (
    <div className="relative overflow-hidden bg-white rounded-xl3 shadow-soft">
      <span className="absolute top-0 left-0 right-0 h-1.5 bg-gold" aria-hidden />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 sm:px-6 py-5 border-b border-ink/10 pt-6">
        <div>
          <h3 className="font-heading text-2xl font-semibold">League Table</h3>
          <p className="text-xs text-ink/50 mt-1">Last updated: {lastUpdated ?? "—"}</p>
        </div>
        <span className="text-xs px-3 py-1 rounded-full font-semibold bg-forest-light/25 text-forest-dark w-fit">
          Live from Google Sheets
        </span>
      </div>

      <table className="w-full text-xs sm:text-sm table-fixed">
        <colgroup>
          <col className="w-10 sm:w-16" />
          <col />
          <col className="w-14 sm:w-28" />
          <col className="w-12 sm:w-20" />
          <col className="w-14 sm:w-20" />
        </colgroup>
        <thead>
          <tr className="text-left text-ink/40 uppercase text-[9px] sm:text-xs">
            <th className="pl-4 sm:pl-6 pr-1 py-3">Rank</th>
            <th className="px-1 py-3">Players</th>
            <th className="px-1 py-3 text-right leading-tight">
              Matches<br />Played
            </th>
            <th className="px-1 py-3 text-right">Wins</th>
            <th className="pr-4 sm:pr-6 pl-1 py-3 text-right">Points</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((p, i) => (
            <motion.tr
              key={p.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className={`border-t border-ink/5 ${p.rank <= 3 ? "bg-gold-light/15" : ""}`}
            >
              <td className="pl-4 sm:pl-6 pr-1 py-3 font-semibold">
                {p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank}
              </td>
              <td className="px-1 py-3 font-medium truncate" title={p.name}>
                {p.name}
              </td>
              <td className="px-1 py-3 text-right">{p.matchesPlayed}</td>
              <td className="px-1 py-3 text-right">{p.wins}</td>
              <td className="pr-4 sm:pr-6 pl-1 py-3 text-right font-semibold">{p.points}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      {ranked.length > 10 && (
        <div className="p-5 text-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setExpanded(!expanded)}
            className="bg-ink text-cream px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            {expanded ? "Show Top 10" : "View Complete Rankings"}
          </motion.button>
        </div>
      )}
    </div>
  );
}

/**
 * Championship Card — column set adapts per game via getColumnsForGame().
 * Full column names (no abbreviations) — cards render 2-per-row so there's
 * enough width for everything to fit without a horizontal scrollbar.
 */
function ChampionshipCard({ champ, colorIndex }: { champ: Championship; colorIndex: number }) {
  const ranked = useRanked<ChampPlayer>(champ.standings);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? ranked : ranked.slice(0, 5);
  const c = CHAMP_COLORS[colorIndex % CHAMP_COLORS.length];
  const columns = getColumnsForGame(champ.game);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 140, damping: 16, delay: colorIndex * 0.08 }}
      className="relative overflow-hidden bg-white rounded-xl2 shadow-softer"
    >
      <span className={`absolute top-0 left-0 right-0 h-1.5 ${c.bar}`} aria-hidden />

      <div className="px-4 sm:px-6 py-4 border-b border-ink/10 pt-5">
        <h4 className="font-heading text-lg font-semibold">{champ.name}</h4>
        <span className={`inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${c.tint}`}>
          {champ.game}
        </span>
      </div>

      <table className="w-full text-xs sm:text-sm table-fixed">
        <colgroup>
          <col className="w-8 sm:w-10" />
          <col />
          {columns.map((key) => (
            <col key={key} />
          ))}
        </colgroup>
        <thead>
          <tr className="text-left text-ink/40 uppercase text-[9px] sm:text-[11px]">
            <th className="pl-4 sm:pl-6 pr-1 sm:pr-2 py-3">#</th>
            <th className="px-1 sm:px-2 py-3">Players</th>
            {columns.map((key) => (
              <th key={key} className="px-1 sm:px-2 py-3 text-right">
                {COLUMN_LABELS[key]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visible.map((p) => (
            <tr key={p.name} className="border-t border-ink/5">
              <td className="pl-4 sm:pl-6 pr-1 sm:pr-2 py-3 font-semibold">{p.rank}</td>
              <td className="px-1 sm:px-2 py-3 truncate" title={p.name}>
                {p.name}
              </td>
              {columns.map((key) => (
                <td
                  key={key}
                  className={`px-1 sm:px-2 py-3 text-right ${key === "points" ? "font-semibold" : ""}`}
                >
                  {p[key] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {ranked.length > 5 && (
        <div className="p-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-semibold text-sky-dark hover:underline"
          >
            {expanded ? "Show less" : "Expand"}
          </button>
        </div>
      )}
    </motion.div>
  );
}

/**
 * Main Points Table Component
 *
 * IMPORTANT:
 * Google Sheets is now the ONLY source of data.
 *
 * There is intentionally NO:
 * - standings.json fallback
 * - championships.json fallback
 *
 * This prevents old data from flashing on the screen
 * before the Google Sheets request completes.
 */
export default function PointsTable() {
  const [league, setLeague] = useState<Player[]>([]);
  const [champs, setChamps] = useState<Championship[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const [leagueData, champData, updated] = await Promise.all([
          fetchLeagueStandings(),
          fetchChampionships(),
          fetchLastUpdated(),
        ]);

        if (cancelled) return;

        if (leagueData.length === 0) {
          throw new Error("No league standings found in Google Sheets.");
        }

        setLeague(leagueData);
        if (champData.length > 0) setChamps(champData);
        if (updated) setLastUpdated(updated);
      } catch (err) {
        if (cancelled) return;
        console.error("Failed to load standings from Google Sheets:", err);
        setError("Points Table Coming Soon.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="space-y-12">
        <div className="relative overflow-hidden bg-white rounded-xl3 shadow-soft">
          <span className="absolute top-0 left-0 right-0 h-1.5 bg-gold" aria-hidden />
          <div className="px-6 py-6">
            <h3 className="font-heading text-2xl font-semibold">League Table</h3>
            <p className="text-sm text-ink/50 mt-2">Loading latest standings…</p>
          </div>
        </div>
        <p className="text-center text-xs text-ink/40">Fetching the latest data from Google Sheets…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-12">
        <div className="relative overflow-hidden bg-white rounded-xl3 shadow-soft">
          <span className="absolute top-0 left-0 right-0 h-1.5 bg-gold" aria-hidden />
          <div className="px-6 py-8 text-center">
            <h3 className="font-heading text-2xl font-semibold">League Table</h3>
            <p className="text-sm text-ink/50 mt-3">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-5 bg-ink text-cream px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <LeagueTable league={league} lastUpdated={lastUpdated} />

      <div>
        <h3 className="font-heading text-2xl font-semibold mb-6">Championships</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {champs.map((c, i) => (
            <ChampionshipCard key={c.id} champ={c} colorIndex={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
