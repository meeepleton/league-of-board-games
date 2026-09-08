// "use client";

// import { motion } from "framer-motion";
// import scheduleData from "@/data/schedule.json";

// const periodColor: Record<string, string> = {
//   Morning: "bg-gold/15 text-ink",
//   Afternoon: "bg-sky/10 text-sky",
//   Evening: "bg-cherry/10 text-cherry",
// };

// export default function SchedulePage() {
//   return (
//     <div className="max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-20">
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-16"
//       >
//         <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Schedule</h1>
//         <p className="text-ink/60">Three days, packed with matches, workshops, and celebrations.</p>
//       </motion.div>

//       <div className="space-y-16">
//         {scheduleData.map((day, dayIndex) => (
//           <motion.div
//             key={day.day}
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.5, delay: dayIndex * 0.05 }}
//           >
//             <h2 className="font-heading text-2xl font-semibold mb-8">{day.day}</h2>
//             <div className="relative pl-8 border-l-2 border-ink/10 space-y-8">
//               {day.blocks.map((b, i) => (
//                 <motion.div
//                   key={b.time + b.activity}
//                   initial={{ opacity: 0, x: -16 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: i * 0.06 }}
//                   className="relative"
//                 >
//                   <span className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-forest border-4 border-cream" />
//                   <div className="tilt-card bg-white rounded-xl2 p-5 shadow-softer flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
//                     <span className="text-sm font-semibold text-ink/50 w-20 shrink-0">{b.time}</span>
//                     <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${periodColor[b.period]}`}>
//                       {b.period}
//                     </span>
//                     <span className="font-medium">{b.activity}</span>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



// NORMAL WORKING ONE BEFORE PUTTING THE CODE OF COMING SOON 
// "use client";

// import { motion } from "framer-motion";
// import scheduleData from "@/data/schedule.json";

// const periodColor: Record<string, string> = {
//   Morning: "bg-gold-light/40 text-ink",
//   Afternoon: "bg-sky-light/40 text-sky-dark",
//   Evening: "bg-cherry-light/40 text-cherry-dark",
// };

// const DAY_COLORS = ["bg-forest", "bg-cherry", "bg-tangerine"];

// export default function SchedulePage() {
//   return (
//     <div className="max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-20">
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-16"
//       >
//         <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Schedule</h1>
//         <p className="text-ink/60">Three days, packed with matches, workshops, and celebrations.</p>
//       </motion.div>

//       <div className="space-y-16">
//         {scheduleData.map((day, dayIndex) => (
//           <motion.div
//             key={day.day}
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.5, delay: dayIndex * 0.05 }}
//           >
//             <div className="flex items-center gap-3 mb-8">
//               <span className={`w-2.5 h-2.5 rounded-full ${DAY_COLORS[dayIndex % DAY_COLORS.length]}`} />
//               <h2 className="font-heading text-2xl font-semibold">{day.day}</h2>
//             </div>
//             <div className="relative pl-8 border-l-2 border-ink/10 space-y-8">
//               {day.blocks.map((b, i) => (
//                 <motion.div
//                   key={b.time + b.activity}
//                   initial={{ opacity: 0, x: -16 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: i * 0.06 }}
//                   className="relative"
//                 >
//                   <span
//                     className={`absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full border-4 border-cream ${DAY_COLORS[dayIndex % DAY_COLORS.length]}`}
//                   />
//                   <motion.div
//                     whileHover={{ y: -3 }}
//                     className="bg-white rounded-xl2 p-5 shadow-softer flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
//                   >
//                     <span className="text-sm font-semibold text-ink/50 w-20 shrink-0">{b.time}</span>
//                     <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${periodColor[b.period]}`}>
//                       {b.period}
//                     </span>
//                     <span className="font-medium">{b.activity}</span>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }





// "use client";

// import { motion } from "framer-motion";
// import scheduleData from "@/data/schedule.json";
// import ComingSoon from "@/components/ComingSoon";
// import { SCHEDULE_LIVE } from "@/lib/eventConfig";
// import { CalendarClock } from "lucide-react";
// import PageHeader from "@/components/PageHeader";

// const periodColor: Record<string, string> = {
//   Morning: "bg-gold-light/40 text-ink",
//   Afternoon: "bg-sky-light/40 text-sky-dark",
//   Evening: "bg-cherry-light/40 text-cherry-dark",
// };

// const DAY_COLORS = ["bg-forest", "bg-cherry", "bg-tangerine"];

// export default function SchedulePage() {
//   return (
//     <div className="max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-20">
//       <PageHeader title="Schedule" subtitle="Thirty days, packed with matches, workshops, and celebrations." />

//       {!SCHEDULE_LIVE ? (
//        <ComingSoon
//         icon={CalendarClock}
//         title="Your battle schedule is being finalized..."
//         subtitle="The full schedule drops 1 week before the League begins. Follow us so you don't miss it!"
//         ctaLabel="Follow us on Instagram"
//         ctaHref="https://instagram.com/leagueofboardgames"
//       />
//       ) : (
//         <div className="space-y-16">
//           {scheduleData.map((day, dayIndex) => (
//             <motion.div
//               key={day.day}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.5, delay: dayIndex * 0.05 }}
//             >
//               <div className="flex items-center gap-3 mb-8">
//                 <span className={`w-2.5 h-2.5 rounded-full ${DAY_COLORS[dayIndex % DAY_COLORS.length]}`} />
//                 <h2 className="font-heading text-2xl font-semibold">{day.day}</h2>
//               </div>
//               <div className="relative pl-8 border-l-2 border-ink/10 space-y-8">
//                 {day.blocks.map((b, i) => (
//                   <motion.div
//                     key={b.time + b.activity}
//                     initial={{ opacity: 0, x: -16 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: i * 0.06 }}
//                     className="relative"
//                   >
//                     <span
//                       className={`absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full border-4 border-cream ${DAY_COLORS[dayIndex % DAY_COLORS.length]}`}
//                     />
//                     <motion.div
//                       whileHover={{ y: -3 }}
//                       className="bg-white rounded-xl2 p-5 shadow-softer flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
//                     >
//                       <span className="text-sm font-semibold text-ink/50 w-20 shrink-0">{b.time}</span>
//                       <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${periodColor[b.period]}`}>
//                         {b.period}
//                       </span>
//                       <span className="font-medium">{b.activity}</span>
//                     </motion.div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }






"use client";

import { motion } from "framer-motion";
import scheduleData from "@/data/schedule.json";
import ComingSoon from "@/components/ComingSoon";
import { SCHEDULE_LIVE } from "@/lib/eventConfig";
import { CalendarClock, Dice5 } from "lucide-react";
import PageHeader from "@/components/PageHeader";

// Palette pulled from the reference strip — dark green, red, gold, teal, near-black
const PALETTE = {
  green: "#0F4C3A",
  red: "#D62828",
  gold: "#F4C10F",
  teal: "#7EC8D6",
  ink: "#1B120D",
};

const TABLE_ACCENTS = [PALETTE.green, PALETTE.red, PALETTE.gold, PALETTE.teal];

type Match = {
  startTime: string;
  endTime: string;
  game: string;
  players: string[];
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

export default function SchedulePage() {
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
        <div className="space-y-14">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: dayIndex * 0.05 }}
            >
              {/* Day header */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: PALETTE.ink }}
                />
                <h2 className="font-heading text-2xl font-semibold">{day.weekday}</h2>
                <span className="text-ink/50 text-sm font-medium">{day.date}</span>
                <span
                  className="ml-1 text-xs font-semibold px-3 py-1 rounded-full w-fit"
                  style={{ backgroundColor: `${PALETTE.red}1A`, color: PALETTE.red }}
                >
                  {day.period}
                </span>
              </div>

              {/* Table columns — one per table, running concurrently */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {day.tables.map((t, tableIndex) => {
                  const accent = TABLE_ACCENTS[tableIndex % TABLE_ACCENTS.length];
                  return (
                    <motion.div
                      key={t.table}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: tableIndex * 0.08 }}
                      className="bg-white rounded-xl2 shadow-softer p-4 flex flex-col gap-3 overflow-hidden relative"
                    >
                      {/* Top accent stripe, like the reference palette bar */}
                      <span
                        className="absolute top-0 left-0 right-0 h-1.5"
                        style={{ backgroundColor: accent }}
                        aria-hidden
                      />

                      <div className="flex items-center gap-2 pb-2 border-b border-ink/10 pt-1">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: accent }}
                        />
                        <span
                          className="text-xs font-bold uppercase tracking-wide"
                          style={{ color: accent }}
                        >
                          Table {t.table}
                        </span>
                      </div>

                      <div className="flex flex-col gap-3">
                        {t.matches.map((m, i) => (
                          <div
                            key={m.startTime + m.game + i}
                            className="rounded-xl p-3 border"
                            style={{
                              backgroundColor: `${accent}0D`,
                              borderColor: `${accent}26`,
                            }}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-xs font-semibold text-ink/50">
                                {m.startTime} – {m.endTime}
                              </span>
                              <Dice5 size={13} style={{ color: `${accent}99` }} />
                            </div>
                            <div className="font-heading font-semibold text-sm mb-1.5" style={{ color: PALETTE.ink }}>
                              {m.game}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {m.players.map((p) => (
                                <span
                                  key={p}
                                  className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white border"
                                  style={{ color: PALETTE.ink, borderColor: `${accent}33` }}
                                >
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}