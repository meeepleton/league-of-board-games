// "use client";

// import { useMemo, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import scheduleData from "@/data/schedule.json";
// import ComingSoon from "@/components/ComingSoon";
// import { SCHEDULE_LIVE } from "@/lib/eventConfig";
// import { CalendarClock, Dice5, CheckCircle2, CalendarDays, Filter, Star, Clock3 } from "lucide-react";
// import PageHeader from "@/components/PageHeader";

// const TABLE_COLORS = ["bg-forest", "bg-cherry", "bg-tangerine", "bg-sky"];
// const TABLE_TEXT_COLORS = ["text-forest", "text-cherry", "text-tangerine", "text-sky"];

// type Match = {
//   startTime: string;
//   endTime: string;
//   game: string;
//   players: string[];
//   status?: "Completed" | "Scheduled" | string;
// };

// type TableSlot = {
//   table: number;
//   matches: Match[];
// };

// type DaySchedule = {
//   date: string;
//   weekday: string;
//   period: string;
//   tables: TableSlot[];
// };

// const schedule = scheduleData as DaySchedule[];

// // ---------- Date helpers ----------
// function parseDate(dateStr: string): Date | null {
//   const d = new Date(dateStr);
//   return isNaN(d.getTime()) ? null : d;
// }

// function isSameDay(dateStr: string, ref: Date) {
//   const d = parseDate(dateStr);
//   if (!d) return false;
//   return (
//     d.getFullYear() === ref.getFullYear() &&
//     d.getMonth() === ref.getMonth() &&
//     d.getDate() === ref.getDate()
//   );
// }

// function isPastDay(dateStr: string, ref: Date) {
//   const d = parseDate(dateStr);
//   if (!d) return false;
//   const dOnly = new Date(d.getFullYear(), d.getMonth(), d.getDate());
//   const refOnly = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate());
//   return dOnly.getTime() < refOnly.getTime();
// }

// // Computed purely from date comparison — never reads status from the JSON.
// type DayStatus = "completed" | "today" | "upcoming";

// function getDayStatus(dateStr: string, ref: Date): DayStatus {
//   if (isSameDay(dateStr, ref)) return "today";
//   if (isPastDay(dateStr, ref)) return "completed";
//   return "upcoming";
// }

// // ---------- Day-level badge config ----------
// const DAY_STATUS_CONFIG: Record<DayStatus, { label: string; badgeClass: string; icon: typeof CheckCircle2; dotClass: string }> = {
//   completed: {
//     label: "Completed",
//     badgeClass: "bg-ink/10 text-ink/50",
//     icon: CheckCircle2,
//     dotClass: "bg-ink/30",
//   },
//   today: {
//     label: "Happening Today",
//     badgeClass: "bg-sky-light/40 text-sky-dark",
//     icon: Star,
//     dotClass: "bg-sky",
//   },
//   upcoming: {
//     label: "Upcoming",
//     badgeClass: "bg-gold-light/40 text-ink/60",
//     icon: Clock3,
//     dotClass: "bg-cherry",
//   },
// };

// // ---------- Per-match badge config (derived from day status, not JSON) ----------
// function getMatchStatusConfig(dayStatus: DayStatus) {
//   switch (dayStatus) {
//     case "completed":
//       return {
//         label: "Completed",
//         badgeClass: "bg-forest-light/30 text-forest-dark",
//         showCheck: true,
//       };
//     case "today":
//       return {
//         label: "Happening Today",
//         badgeClass: "bg-sky-light/40 text-sky-dark",
//         showCheck: false,
//       };
//     case "upcoming":
//     default:
//       return {
//         label: "Upcoming",
//         badgeClass: "bg-gold-light/40 text-ink/60",
//         showCheck: false,
//       };
//   }
// }

// // ---------- Reusable day card ----------
// function DayCard({
//   day,
//   dayStatus,
//   index,
//   registerRef,
//   pinned = false,
// }: {
//   day: DaySchedule;
//   dayStatus: DayStatus;
//   index: number;
//   registerRef: (el: HTMLDivElement | null) => void;
//   pinned?: boolean;
// }) {
//   const config = DAY_STATUS_CONFIG[dayStatus];
//   const StatusIcon = config.icon;
//   const isPast = dayStatus === "completed";
//   const matchStatus = getMatchStatusConfig(dayStatus);

//   return (
//     <motion.div
//       ref={registerRef}
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.5, delay: pinned ? 0 : index * 0.05 }}
//       className={[
//         isPast && !pinned ? "opacity-60" : "",
//         pinned ? "bg-sky-light/10 border-2 border-sky/30 rounded-2xl p-5" : "",
//       ].join(" ")}
//     >
//       {/* Day header */}
//       <div className="flex flex-wrap items-center gap-3 mb-6">
//         {pinned && <Star size={18} className="text-sky fill-sky shrink-0" />}
//         <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${config.dotClass}`} />
//         <h2 className="font-heading text-2xl font-semibold">{day.weekday}</h2>
//         <span className="text-ink/50 text-sm font-medium">{day.date}</span>
//         <span className="ml-1 text-xs font-semibold px-3 py-1 rounded-full bg-cherry-light/40 text-cherry-dark w-fit">
//           {day.period}
//         </span>
//         <span
//           className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full w-fit ${config.badgeClass}`}
//         >
//           <StatusIcon size={12} />
//           {config.label}
//         </span>
//       </div>

//       {/* Table columns — one per table, running concurrently */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//         {day.tables.map((t, tableIndex) => {
//           const dot = TABLE_COLORS[tableIndex % TABLE_COLORS.length];
//           const textColor = TABLE_TEXT_COLORS[tableIndex % TABLE_TEXT_COLORS.length];
//           return (
//             <motion.div
//               key={t.table}
//               initial={{ opacity: 0, x: -12 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: tableIndex * 0.08 }}
//               className="bg-white rounded-xl2 shadow-softer p-4 flex flex-col gap-3"
//             >
//               <div className="flex items-center gap-2 pb-2 border-b border-ink/10">
//                 <span className={`w-2 h-2 rounded-full ${dot}`} />
//                 <span className={`text-xs font-bold uppercase tracking-wide ${textColor}`}>
//                   Table {t.table}
//                 </span>
//               </div>

//               <div className="flex flex-col gap-3">
//                 {t.matches.map((m, i) => (
//                   <div
//                     key={m.startTime + m.game + i}
//                     className="rounded-xl bg-cream/60 border border-ink/5 p-3"
//                   >
//                     <div className="flex items-center justify-between mb-1.5 gap-2">
//                       <span className="text-xs font-semibold text-ink/50">
//                         {m.startTime} – {m.endTime}
//                       </span>
//                       <span
//                         className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${matchStatus.badgeClass}`}
//                       >
//                         {matchStatus.showCheck && <CheckCircle2 size={11} />}
//                         {matchStatus.label}
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between gap-2 mb-1.5">
//                       <div className="font-heading font-semibold text-sm">{m.game}</div>
//                       <Dice5 size={13} className="text-ink/30 shrink-0" />
//                     </div>
//                     <div className="flex flex-wrap gap-1">
//                       {m.players.map((p) => (
//                         <span
//                           key={p}
//                           className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white text-ink/70 border border-ink/10"
//                         >
//                           {p}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

// export default function SchedulePage() {
//   const today = useMemo(() => new Date(), []);
//   const [selectedGame, setSelectedGame] = useState<string>("All");
//   const [jumpDate, setJumpDate] = useState<string>("");
//   const dayRefs = useRef<Record<string, HTMLDivElement | null>>({});

//   // Keep original chronological order (2 -> 26 etc.) — don't reshuffle
//   const chronological = schedule;

//   const todayDay = useMemo(
//     () => chronological.find((d) => isSameDay(d.date, today)),
//     [chronological, today]
//   );

//   // Unique game list for the filter dropdown
//   const allGames = useMemo(() => {
//     const set = new Set<string>();
//     schedule.forEach((day) =>
//       day.tables.forEach((t) => t.matches.forEach((m) => set.add(m.game)))
//     );
//     return Array.from(set).sort();
//   }, []);

//   // When a game is selected, only show days that include that game — but keep the FULL day intact
//   const visibleDays = useMemo(() => {
//     if (selectedGame === "All") return chronological;
//     return chronological.filter((day) =>
//       day.tables.some((t) => t.matches.some((m) => m.game === selectedGame))
//     );
//   }, [chronological, selectedGame]);

//   const scrollToDate = (date: string) => {
//     setJumpDate(date);
//     const el = dayRefs.current[date];
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
//       <PageHeader title="Schedule" subtitle="Thirty days, packed with matches, workshops, and celebrations." />

//       {!SCHEDULE_LIVE ? (
//         <ComingSoon
//           icon={CalendarClock}
//           title="Your battle schedule is being finalized..."
//           subtitle="The full schedule drops 1 week before the League begins. Follow us so you don't miss it!"
//           ctaLabel="Follow us on Instagram"
//           ctaHref="https://instagram.com/leagueofboardgames"
//         />
//       ) : (
//         <>
//           {/* Filter bar */}
//           <div className="sticky top-20 z-10 mb-8 bg-cream/95 backdrop-blur rounded-xl2 shadow-softer border border-ink/10 p-4 flex flex-col sm:flex-row gap-3 sm:items-center">
//             <div className="flex items-center gap-2 flex-1">
//               <CalendarDays size={16} className="text-ink/40 shrink-0" />
//               <select
//                 value={jumpDate}
//                 onChange={(e) => scrollToDate(e.target.value)}
//                 className="w-full text-sm font-medium bg-white border border-ink/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cherry/40"
//               >
//                 <option value="" disabled>
//                   Jump to a date…
//                 </option>
//                 {chronological.map((day) => (
//                   <option key={day.date} value={day.date}>
//                     {day.weekday}, {day.date}
//                     {isSameDay(day.date, today) ? " (Today)" : ""}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex items-center gap-2 flex-1">
//               <Filter size={16} className="text-ink/40 shrink-0" />
//               <select
//                 value={selectedGame}
//                 onChange={(e) => setSelectedGame(e.target.value)}
//                 className="w-full text-sm font-medium bg-white border border-ink/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cherry/40"
//               >
//                 <option value="All">All games</option>
//                 {allGames.map((g) => (
//                   <option key={g} value={g}>
//                     {g}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Pinned "Today" section — only when today is within the schedule range and not filtered out */}
//           {todayDay && (selectedGame === "All" || visibleDays.some((d) => d.date === todayDay.date)) && (
//             <div className="mb-14">
//               <div className="flex items-center gap-2 mb-4">
//                 <Star size={16} className="text-sky fill-sky" />
//                 <span className="text-xs font-bold uppercase tracking-wide text-sky-dark">
//                   Today's matches
//                 </span>
//               </div>
//               <DayCard
//                 day={todayDay}
//                 dayStatus="today"
//                 index={0}
//                 pinned
//                 registerRef={() => {}} // separate node from the one in the main list below
//               />
//             </div>
//           )}

//           {/* Full chronological list (2 -> 26, in correct order), including past + today + upcoming */}
//           <div className="space-y-14">
//             {visibleDays.length === 0 ? (
//               <p className="text-center text-ink/50 text-sm py-10">
//                 No matches found for that game.
//               </p>
//             ) : (
//               visibleDays.map((day, dayIndex) => (
//                 <DayCard
//                   key={day.date}
//                   day={day}
//                   dayStatus={getDayStatus(day.date, today)}
//                   index={dayIndex}
//                   registerRef={(el) => {
//                     dayRefs.current[day.date] = el;
//                   }}
//                 />
//               ))
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }










// "use client";

// import { useMemo, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import scheduleData from "@/data/schedule.json";
// import ComingSoon from "@/components/ComingSoon";
// import { SCHEDULE_LIVE } from "@/lib/eventConfig";
// import { CalendarClock, Dice5, CheckCircle2, CalendarDays, Filter, Star, Clock3, Users } from "lucide-react";
// import PageHeader from "@/components/PageHeader";

// const TABLE_COLORS = ["bg-forest", "bg-cherry", "bg-tangerine", "bg-sky"];
// const TABLE_TEXT_COLORS = ["text-forest", "text-cherry", "text-tangerine", "text-sky"];
// const TABLE_PLAYER_BOX_BG = ["bg-forest-light/30", "bg-cherry-light/30", "bg-tangerine-light/30", "bg-sky-light/30"];
// const TABLE_PLAYER_BOX_BORDER = ["border-forest/20", "border-cherry/20", "border-tangerine/20", "border-sky/20"];
// const TABLE_PLAYER_CHIP_BORDER = ["border-forest/40", "border-cherry/40", "border-tangerine/40", "border-sky/40"];

// type Match = {
//   startTime: string;
//   endTime: string;
//   game: string;
//   players: string[];
//   status?: "Completed" | "Scheduled" | string;
// };

// type TableSlot = {
//   table: number;
//   matches: Match[];
// };

// type DaySchedule = {
//   date: string;
//   weekday: string;
//   period: string;
//   tables: TableSlot[];
// };

// const schedule = scheduleData as DaySchedule[];

// // ---------- Date helpers ----------
// function parseDate(dateStr: string): Date | null {
//   const d = new Date(dateStr);
//   return isNaN(d.getTime()) ? null : d;
// }

// function isSameDay(dateStr: string, ref: Date) {
//   const d = parseDate(dateStr);
//   if (!d) return false;
//   return (
//     d.getFullYear() === ref.getFullYear() &&
//     d.getMonth() === ref.getMonth() &&
//     d.getDate() === ref.getDate()
//   );
// }

// function isPastDay(dateStr: string, ref: Date) {
//   const d = parseDate(dateStr);
//   if (!d) return false;
//   const dOnly = new Date(d.getFullYear(), d.getMonth(), d.getDate());
//   const refOnly = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate());
//   return dOnly.getTime() < refOnly.getTime();
// }

// // Computed purely from date comparison — never reads status from the JSON.
// type DayStatus = "completed" | "today" | "upcoming";

// function getDayStatus(dateStr: string, ref: Date): DayStatus {
//   if (isSameDay(dateStr, ref)) return "today";
//   if (isPastDay(dateStr, ref)) return "completed";
//   return "upcoming";
// }

// // ---------- Day-level badge config ----------
// const DAY_STATUS_CONFIG: Record<DayStatus, { label: string; badgeClass: string; icon: typeof CheckCircle2; dotClass: string }> = {
//   completed: {
//     label: "Completed",
//     badgeClass: "bg-ink/10 text-ink/50",
//     icon: CheckCircle2,
//     dotClass: "bg-ink/30",
//   },
//   today: {
//     label: "Happening Today",
//     badgeClass: "bg-sky-light/40 text-sky-dark",
//     icon: Star,
//     dotClass: "bg-sky",
//   },
//   upcoming: {
//     label: "Upcoming",
//     badgeClass: "bg-gold-light/40 text-ink/60",
//     icon: Clock3,
//     dotClass: "bg-cherry",
//   },
// };

// // ---------- Per-match badge config (derived from day status, not JSON) ----------
// function getMatchStatusConfig(dayStatus: DayStatus) {
//   switch (dayStatus) {
//     case "completed":
//       return {
//         label: "Completed",
//         badgeClass: "bg-forest-light/30 text-forest-dark",
//         showCheck: true,
//       };
//     case "today":
//       return {
//         label: "Happening Today",
//         badgeClass: "bg-sky-light/40 text-sky-dark",
//         showCheck: false,
//       };
//     case "upcoming":
//     default:
//       return {
//         label: "Upcoming",
//         badgeClass: "bg-gold-light/40 text-ink/60",
//         showCheck: false,
//       };
//   }
// }

// // ---------- Reusable day card ----------
// function DayCard({
//   day,
//   dayStatus,
//   index,
//   registerRef,
//   pinned = false,
// }: {
//   day: DaySchedule;
//   dayStatus: DayStatus;
//   index: number;
//   registerRef: (el: HTMLDivElement | null) => void;
//   pinned?: boolean;
// }) {
//   const config = DAY_STATUS_CONFIG[dayStatus];
//   const StatusIcon = config.icon;
//   const isPast = dayStatus === "completed";
//   const matchStatus = getMatchStatusConfig(dayStatus);

//   return (
//     <motion.div
//       ref={registerRef}
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.5, delay: pinned ? 0 : index * 0.05 }}
//       className={[
//         isPast && !pinned ? "opacity-60" : "",
//         pinned ? "bg-sky-light/10 border-2 border-sky/30 rounded-2xl p-5" : "",
//       ].join(" ")}
//     >
//       {/* Day header */}
//       <div className="flex flex-wrap items-center gap-3 mb-6">
//         {pinned && <Star size={18} className="text-sky fill-sky shrink-0" />}
//         <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${config.dotClass}`} />
//         <h2 className="font-heading text-2xl font-semibold">{day.weekday}</h2>
//         <span className="text-ink/50 text-sm font-medium">{day.date}</span>
//         <span className="ml-1 text-xs font-semibold px-3 py-1 rounded-full bg-cherry-light/40 text-cherry-dark w-fit">
//           {day.period}
//         </span>
//         <span
//           className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full w-fit ${config.badgeClass}`}
//         >
//           <StatusIcon size={12} />
//           {config.label}
//         </span>
//       </div>

//       {/* Table columns — one per table, running concurrently */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//         {day.tables.map((t, tableIndex) => {
//           const dot = TABLE_COLORS[tableIndex % TABLE_COLORS.length];
//           const textColor = TABLE_TEXT_COLORS[tableIndex % TABLE_TEXT_COLORS.length];
//           const playerBoxBg = TABLE_PLAYER_BOX_BG[tableIndex % TABLE_PLAYER_BOX_BG.length];
//           const playerBoxBorder = TABLE_PLAYER_BOX_BORDER[tableIndex % TABLE_PLAYER_BOX_BORDER.length];
//           const playerChipBorder = TABLE_PLAYER_CHIP_BORDER[tableIndex % TABLE_PLAYER_CHIP_BORDER.length];
//           return (
//             <motion.div
//               key={t.table}
//               initial={{ opacity: 0, x: -12 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: tableIndex * 0.08 }}
//               className="bg-white rounded-xl2 shadow-softer p-4 flex flex-col gap-3"
//             >
//               <div className="flex items-center gap-2 pb-2 border-b border-ink/10">
//                 <span className={`w-2 h-2 rounded-full ${dot}`} />
//                 <span className={`text-xs font-bold uppercase tracking-wide ${textColor}`}>
//                   Table {t.table}
//                 </span>
//               </div>

//               <div className="flex flex-col gap-3">
//                 {t.matches.map((m, i) => (
//                   <div
//                     key={m.startTime + m.game + i}
//                     className="rounded-xl bg-cream/60 border border-ink/5 p-3"
//                   >
//                     <div className="flex items-center justify-between mb-1.5 gap-2">
//                       <span className="text-xs font-semibold text-ink/50">
//                         {m.startTime} – {m.endTime}
//                       </span>
//                       <span
//                         className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${matchStatus.badgeClass}`}
//                       >
//                         {matchStatus.showCheck && <CheckCircle2 size={11} />}
//                         {matchStatus.label}
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between gap-2 mb-2">
//                       <div className="font-heading font-semibold text-sm">{m.game}</div>
//                       <Dice5 size={13} className="text-ink/30 shrink-0" />
//                     </div>

//                     {/* Players box */}
//                     <div className={`rounded-lg border ${playerBoxBorder} ${playerBoxBg} p-2.5`}>
//                       <div className={`flex items-center gap-1 mb-1.5 text-[9px] font-bold uppercase tracking-wider ${textColor}`}>
//                         <Users size={10} />
//                         Players
//                       </div>
//                       <div className="flex flex-wrap gap-1.5">
//                         {m.players.map((p) => (
//                           <span
//                             key={p}
//                             className={`text-[11px] font-semibold px-2.5 py-1 rounded-md bg-cream text-ink/80 border ${playerChipBorder} shadow-sm`}
//                           >
//                             {p}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

// export default function SchedulePage() {
//   const today = useMemo(() => new Date(), []);
//   const [selectedGame, setSelectedGame] = useState<string>("All");
//   const [jumpDate, setJumpDate] = useState<string>("");
//   const dayRefs = useRef<Record<string, HTMLDivElement | null>>({});

//   // Keep original chronological order (2 -> 26 etc.) — don't reshuffle
//   const chronological = schedule;

//   const todayDay = useMemo(
//     () => chronological.find((d) => isSameDay(d.date, today)),
//     [chronological, today]
//   );

//   // Unique game list for the filter dropdown
//   const allGames = useMemo(() => {
//     const set = new Set<string>();
//     schedule.forEach((day) =>
//       day.tables.forEach((t) => t.matches.forEach((m) => set.add(m.game)))
//     );
//     return Array.from(set).sort();
//   }, []);

//   // When a game is selected, only show days that include that game — but keep the FULL day intact
//   const visibleDays = useMemo(() => {
//     if (selectedGame === "All") return chronological;
//     return chronological.filter((day) =>
//       day.tables.some((t) => t.matches.some((m) => m.game === selectedGame))
//     );
//   }, [chronological, selectedGame]);

//   const scrollToDate = (date: string) => {
//     setJumpDate(date);
//     const el = dayRefs.current[date];
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
//       <PageHeader title="Schedule" subtitle="Thirty days, packed with matches, workshops, and celebrations." />

//       {!SCHEDULE_LIVE ? (
//         <ComingSoon
//           icon={CalendarClock}
//           title="Your battle schedule is being finalized..."
//           subtitle="The full schedule drops 1 week before the League begins. Follow us so you don't miss it!"
//           ctaLabel="Follow us on Instagram"
//           ctaHref="https://instagram.com/leagueofboardgames"
//         />
//       ) : (
//         <>
//           {/* Filter bar */}
//           <div className="sticky top-20 z-10 mb-8 bg-cream/95 backdrop-blur rounded-xl2 shadow-softer border border-ink/10 p-4 flex flex-col sm:flex-row gap-3 sm:items-center">
//             <div className="flex items-center gap-2 flex-1">
//               <CalendarDays size={16} className="text-ink/40 shrink-0" />
//               <select
//                 value={jumpDate}
//                 onChange={(e) => scrollToDate(e.target.value)}
//                 className="w-full text-sm font-medium bg-white border border-ink/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cherry/40"
//               >
//                 <option value="" disabled>
//                   Jump to a date…
//                 </option>
//                 {chronological.map((day) => (
//                   <option key={day.date} value={day.date}>
//                     {day.weekday}, {day.date}
//                     {isSameDay(day.date, today) ? " (Today)" : ""}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex items-center gap-2 flex-1">
//               <Filter size={16} className="text-ink/40 shrink-0" />
//               <select
//                 value={selectedGame}
//                 onChange={(e) => setSelectedGame(e.target.value)}
//                 className="w-full text-sm font-medium bg-white border border-ink/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cherry/40"
//               >
//                 <option value="All">All games</option>
//                 {allGames.map((g) => (
//                   <option key={g} value={g}>
//                     {g}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Pinned "Today" section — only when today is within the schedule range and not filtered out */}
//           {todayDay && (selectedGame === "All" || visibleDays.some((d) => d.date === todayDay.date)) && (
//             <div className="mb-14">
//               <div className="flex items-center gap-2 mb-4">
//                 <Star size={16} className="text-sky fill-sky" />
//                 <span className="text-xs font-bold uppercase tracking-wide text-sky-dark">
//                   Today's matches
//                 </span>
//               </div>
//               <DayCard
//                 day={todayDay}
//                 dayStatus="today"
//                 index={0}
//                 pinned
//                 registerRef={() => {}} // separate node from the one in the main list below
//               />
//             </div>
//           )}

//           {/* Full chronological list (2 -> 26, in correct order), including past + today + upcoming */}
//           <div className="space-y-14">
//             {visibleDays.length === 0 ? (
//               <p className="text-center text-ink/50 text-sm py-10">
//                 No matches found for that game.
//               </p>
//             ) : (
//               visibleDays.map((day, dayIndex) => (
//                 <DayCard
//                   key={day.date}
//                   day={day}
//                   dayStatus={getDayStatus(day.date, today)}
//                   index={dayIndex}
//                   registerRef={(el) => {
//                     dayRefs.current[day.date] = el;
//                   }}
//                 />
//               ))
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }







"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import scheduleData from "@/data/schedule.json";
import ComingSoon from "@/components/ComingSoon";
import { SCHEDULE_LIVE } from "@/lib/eventConfig";
import { CalendarClock, Dice5, CheckCircle2, CalendarDays, Filter, Star, Clock3, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";


// Rotates per table column (Table 1, 2, 3, 4…)
const TABLE_COLORS = ["bg-[#0284C7]", "bg-[#10B981]", "bg-[#D97706]"];
const TABLE_TEXT_COLORS = ["text-[#0284C7]", "text-[#10B981]", "text-[#D97706]"];
const TABLE_PLAYER_BOX_BG = ["bg-[#0284C7]/10", "bg-[#10B981]/10", "bg-[#D97706]/10"];
const TABLE_PLAYER_BOX_BORDER = ["border-[#0284C7]/20", "border-[#10B981]/20", "border-[#D97706]/20"];
const TABLE_PLAYER_CHIP_BORDER = ["border-[#0284C7]/30", "border-[#10B981]/30", "border-[#D97706]/30"];

type Match = {
  startTime: string;
  endTime: string;
  game: string;
  players: string[];
  status?: "Completed" | "Scheduled" | string;
};

type TableSlot = {
  table: number;
  matches: Match[];
};

type DaySchedule = {
  date: string;
  weekday: string;
  period: string;
  tables: TableSlot[];
};

const schedule = scheduleData as DaySchedule[];

// ---------- Date helpers ----------
function parseDate(dateStr: string): Date | null {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? null : d;
}

function isSameDay(dateStr: string, ref: Date) {
  const d = parseDate(dateStr);
  if (!d) return false;
  return (
    d.getFullYear() === ref.getFullYear() &&
    d.getMonth() === ref.getMonth() &&
    d.getDate() === ref.getDate()
  );
}

function isPastDay(dateStr: string, ref: Date) {
  const d = parseDate(dateStr);
  if (!d) return false;
  const dOnly = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const refOnly = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate());
  return dOnly.getTime() < refOnly.getTime();
}

// Computed purely from date comparison — never reads status from the JSON.
type DayStatus = "completed" | "today" | "upcoming";

function getDayStatus(dateStr: string, ref: Date): DayStatus {
  if (isSameDay(dateStr, ref)) return "today";
  if (isPastDay(dateStr, ref)) return "completed";
  return "upcoming";
}

// ---------- Day-level badge config ----------
const DAY_STATUS_CONFIG: Record<DayStatus, { label: string; badgeClass: string; icon: typeof CheckCircle2; dotClass: string }> = {
  completed: {
    label: "Completed",
    badgeClass: "bg-[#10B981]/15 text-[#10B981]",
    icon: CheckCircle2,
    dotClass: "bg-[#10B981]",
  },
  today: {
    label: "Happening Today",
    badgeClass: "bg-[#0284C7]/15 text-[#0284C7]",
    icon: Star,
    dotClass: "bg-[#0284C7]",
  },
  upcoming: {
    label: "Upcoming",
    badgeClass: "bg-[#D97706]/15 text-[#D97706]",
    icon: Clock3,
    dotClass: "bg-[#D97706]",
  },
};

// ---------- Per-match badge config (derived from day status, not JSON) ----------
function getMatchStatusConfig(dayStatus: DayStatus) {
  switch (dayStatus) {
    case "completed":
      return {
        label: "Completed",
        badgeClass: "bg-[#10B981]/15 text-[#10B981]",
        showCheck: true,
      };
    case "today":
      return {
        label: "Happening Today",
        badgeClass: "bg-[#0284C7]/15 text-[#0284C7]",
        showCheck: false,
      };
    case "upcoming":
    default:
      return {
        label: "Upcoming",
        badgeClass: "bg-[#D97706]/15 text-[#D97706]",
        showCheck: false,
      };
  }
}

// ---------- Reusable day card ----------
function DayCard({
  day,
  dayStatus,
  index,
  registerRef,
  pinned = false,
}: {
  day: DaySchedule;
  dayStatus: DayStatus;
  index: number;
  registerRef: (el: HTMLDivElement | null) => void;
  pinned?: boolean;
}) {
  const config = DAY_STATUS_CONFIG[dayStatus];
  const StatusIcon = config.icon;
  const isPast = dayStatus === "completed";
  const matchStatus = getMatchStatusConfig(dayStatus);

  return (
    <motion.div
      ref={registerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: pinned ? 0 : index * 0.05 }}
      className={[
        isPast && !pinned ? "opacity-60" : "",
        pinned ? "bg-[#0284C7]/5 border-2 border-[#0284C7]/30 rounded-2xl p-5" : "",
      ].join(" ")}
    >
      {/* Day header */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {pinned && <Star size={18} className="text-[#0284C7] fill-[#0284C7] shrink-0" />}
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${config.dotClass}`} />
        <h2 className="font-heading text-2xl font-semibold text-[#0F172A]">{day.weekday}</h2>
        <span className="text-[#0F172A]/50 text-sm font-medium">{day.date}</span>
        <span className="ml-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#D97706]/15 text-[#D97706] w-fit">
          {day.period}
        </span>
        <span
          className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full w-fit ${config.badgeClass}`}
        >
          <StatusIcon size={12} />
          {config.label}
        </span>
      </div>

      {/* Table columns — one per table, running concurrently */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {day.tables.map((t, tableIndex) => {
          const dot = TABLE_COLORS[tableIndex % TABLE_COLORS.length];
          const textColor = TABLE_TEXT_COLORS[tableIndex % TABLE_TEXT_COLORS.length];
          const playerBoxBg = TABLE_PLAYER_BOX_BG[tableIndex % TABLE_PLAYER_BOX_BG.length];
          const playerBoxBorder = TABLE_PLAYER_BOX_BORDER[tableIndex % TABLE_PLAYER_BOX_BORDER.length];
          const playerChipBorder = TABLE_PLAYER_CHIP_BORDER[tableIndex % TABLE_PLAYER_CHIP_BORDER.length];
          return (
            <motion.div
              key={t.table}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: tableIndex * 0.08 }}
              className="bg-[#F8FAFC] rounded-xl2 shadow-softer p-4 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-[#0F172A]/10">
                <span className={`w-2 h-2 rounded-full ${dot}`} />
                <span className={`text-xs font-bold uppercase tracking-wide ${textColor}`}>
                  Table {t.table}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {t.matches.map((m, i) => (
                  <div
                    key={m.startTime + m.game + i}
                    className="rounded-xl bg-[#F8FAFC] border border-[#0F172A]/5 p-3"
                  >
                    <div className="flex items-center justify-between mb-1.5 gap-2">
                      <span className="text-xs font-semibold text-[#0F172A]/50">
                        {m.startTime} – {m.endTime}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${matchStatus.badgeClass}`}
                      >
                        {matchStatus.showCheck && <CheckCircle2 size={11} />}
                        {matchStatus.label}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="font-heading font-semibold text-sm text-[#0F172A]">{m.game}</div>
                      <Dice5 size={13} className="text-[#0F172A]/30 shrink-0" />
                    </div>

                    {/* Players box */}
                    <div className={`rounded-lg border ${playerBoxBorder} ${playerBoxBg} p-2.5`}>
                      <div className={`flex items-center gap-1 mb-1.5 text-[9px] font-bold uppercase tracking-wider ${textColor}`}>
                        <Users size={10} />
                        Players
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.players.map((p) => (
                          <span
                            key={p}
                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#0F172A]/80 border ${playerChipBorder} shadow-sm`}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function SchedulePage() {
  const today = useMemo(() => new Date(), []);
  const [selectedGame, setSelectedGame] = useState<string>("All");
  const [jumpDate, setJumpDate] = useState<string>("");
  const dayRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Keep original chronological order (2 -> 26 etc.) — don't reshuffle
  const chronological = schedule;

  const todayDay = useMemo(
    () => chronological.find((d) => isSameDay(d.date, today)),
    [chronological, today]
  );

  // Unique game list for the filter dropdown
  const allGames = useMemo(() => {
    const set = new Set<string>();
    schedule.forEach((day) =>
      day.tables.forEach((t) => t.matches.forEach((m) => set.add(m.game)))
    );
    return Array.from(set).sort();
  }, []);

  // When a game is selected, only show days that include that game — but keep the FULL day intact
  const visibleDays = useMemo(() => {
    if (selectedGame === "All") return chronological;
    return chronological.filter((day) =>
      day.tables.some((t) => t.matches.some((m) => m.game === selectedGame))
    );
  }, [chronological, selectedGame]);

  const scrollToDate = (date: string) => {
    setJumpDate(date);
    const el = dayRefs.current[date];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <PageHeader title="Schedule" subtitle="Thirty days, packed with matches, workshops, and celebrations." />

      {!SCHEDULE_LIVE ? (
        <ComingSoon
          icon={CalendarClock}
          title="Your battle schedule is being finalized..."
          subtitle="The full schedule drops 1 week before the League begins. Follow us so you don't miss it!"
          ctaLabel="Follow us on Instagram"
          ctaHref="https://instagram.com/leagueofboardgames"
        />
      ) : (
        <>
          {/* Filter bar — left as-is (not a "card"), untouched per your request */}
          <div className="sticky top-20 z-10 mb-8 bg-cream/95 backdrop-blur rounded-xl2 shadow-softer border border-ink/10 p-4 flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="flex items-center gap-2 flex-1">
              <CalendarDays size={16} className="text-ink/40 shrink-0" />
              <select
                value={jumpDate}
                onChange={(e) => scrollToDate(e.target.value)}
                className="w-full text-sm font-medium bg-white border border-ink/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cherry/40"
              >
                <option value="" disabled>
                  Jump to a date…
                </option>
                {chronological.map((day) => (
                  <option key={day.date} value={day.date}>
                    {day.weekday}, {day.date}
                    {isSameDay(day.date, today) ? " (Today)" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 flex-1">
              <Filter size={16} className="text-ink/40 shrink-0" />
              <select
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
                className="w-full text-sm font-medium bg-white border border-ink/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cherry/40"
              >
                <option value="All">All games</option>
                {allGames.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Pinned "Today" section */}
          {todayDay && (selectedGame === "All" || visibleDays.some((d) => d.date === todayDay.date)) && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-4">
                <Star size={16} className="text-[#0284C7] fill-[#0284C7]" />
                <span className="text-xs font-bold uppercase tracking-wide text-[#0284C7]">
                  Today's matches
                </span>
              </div>
              <DayCard
                day={todayDay}
                dayStatus="today"
                index={0}
                pinned
                registerRef={() => {}}
              />
            </div>
          )}

          {/* Full chronological list (2 -> 26, in correct order), including past + today + upcoming */}
          <div className="space-y-14">
            {visibleDays.length === 0 ? (
              <p className="text-center text-[#0F172A]/50 text-sm py-10">
                No matches found for that game.
              </p>
            ) : (
              visibleDays.map((day, dayIndex) => (
                <DayCard
                  key={day.date}
                  day={day}
                  dayStatus={getDayStatus(day.date, today)}
                  index={dayIndex}
                  registerRef={(el) => {
                    dayRefs.current[day.date] = el;
                  }}
                />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}




