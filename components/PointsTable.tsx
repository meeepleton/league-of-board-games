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



"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import standingsData from "@/data/standings.json";
import championshipsData from "@/data/championships.json";

type Player = { name: string; wins: number; losses: number; points: number };
type ChampPlayer = { name: string; points: number };
type Championship = { id: string; name: string; game: string; standings: ChampPlayer[] };

const CHAMP_COLORS = [
  { bar: "bg-forest", tint: "bg-forest-light/20 text-forest-dark" },
  { bar: "bg-cherry", tint: "bg-cherry-light/20 text-cherry-dark" },
  { bar: "bg-sky", tint: "bg-sky-light/30 text-sky-dark" },
  { bar: "bg-tangerine", tint: "bg-tangerine-light/25 text-tangerine-dark" },
];

function useRanked<T extends { points: number }>(rows: T[]) {
  // Always recompute rank live from the "points" field.
  // Editing points in the JSON data files is all that's needed —
  // this component re-sorts and re-ranks automatically, no manual rank edits required.
  return useMemo(
    () =>
      [...rows]
        .sort((a, b) => b.points - a.points)
        .map((row, i) => ({ ...row, rank: i + 1 })),
    [rows]
  );
}

function LeagueTable() {
  const ranked = useRanked<Player>(standingsData.league as Player[]);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? ranked : ranked.slice(0, 10);

  return (
    <div className="relative overflow-hidden bg-white rounded-xl3 shadow-soft">
      <span className="absolute top-0 left-0 right-0 h-1.5 bg-gold" aria-hidden />
      <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10 pt-6">
        <div>
          <h3 className="font-heading text-2xl font-semibold">League Table</h3>
          <p className="text-xs text-ink/50 mt-1">
            Last updated: {standingsData.lastUpdated}
          </p>
        </div>
        <span className="text-xs bg-forest-light/25 text-forest-dark px-3 py-1 rounded-full font-semibold">
          Live from data file
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-ink/40 uppercase text-xs">
              <th className="px-6 py-3">Rank</th>
              <th className="px-6 py-3">Player</th>
              <th className="px-6 py-3">W</th>
              <th className="px-6 py-3">L</th>
              <th className="px-6 py-3">Points</th>
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
                <td className="px-6 py-3 font-semibold">
                  {p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank}
                </td>
                <td className="px-6 py-3 font-medium">{p.name}</td>
                <td className="px-6 py-3">{p.wins}</td>
                <td className="px-6 py-3">{p.losses}</td>
                <td className="px-6 py-3 font-semibold">{p.points}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

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

function ChampionshipCard({ champ, colorIndex }: { champ: Championship; colorIndex: number }) {
  const ranked = useRanked<ChampPlayer>(champ.standings);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? ranked : ranked.slice(0, 5);
  const c = CHAMP_COLORS[colorIndex % CHAMP_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 140, damping: 16, delay: colorIndex * 0.08 }}
      className="relative overflow-hidden bg-white rounded-xl2 shadow-softer"
    >
      <span className={`absolute top-0 left-0 right-0 h-1.5 ${c.bar}`} aria-hidden />
      <div className="px-6 py-4 border-b border-ink/10 pt-5">
        <h4 className="font-heading text-lg font-semibold">{champ.name}</h4>
        <span className={`inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${c.tint}`}>
          {champ.game}
        </span>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {visible.map((p, i) => (
            <tr key={p.name} className="border-t border-ink/5">
              <td className="px-6 py-2.5 w-10 font-semibold">{p.rank}</td>
              <td className="px-6 py-2.5">{p.name}</td>
              <td className="px-6 py-2.5 text-right font-semibold">{p.points}</td>
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

export default function PointsTable() {
  const champs = championshipsData as Championship[];
  return (
    <div className="space-y-12">
      <LeagueTable />
      <div>
        <h3 className="font-heading text-2xl font-semibold mb-6">Championships</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {champs.map((c, i) => (
            <ChampionshipCard key={c.id} champ={c} colorIndex={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
