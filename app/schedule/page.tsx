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




"use client";

import { motion } from "framer-motion";
import scheduleData from "@/data/schedule.json";

const periodColor: Record<string, string> = {
  Morning: "bg-gold-light/40 text-ink",
  Afternoon: "bg-sky-light/40 text-sky-dark",
  Evening: "bg-cherry-light/40 text-cherry-dark",
};

const DAY_COLORS = ["bg-forest", "bg-cherry", "bg-tangerine"];

export default function SchedulePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Schedule</h1>
        <p className="text-ink/60">Three days, packed with matches, workshops, and celebrations.</p>
      </motion.div>

      <div className="space-y-16">
        {scheduleData.map((day, dayIndex) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: dayIndex * 0.05 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className={`w-2.5 h-2.5 rounded-full ${DAY_COLORS[dayIndex % DAY_COLORS.length]}`} />
              <h2 className="font-heading text-2xl font-semibold">{day.day}</h2>
            </div>
            <div className="relative pl-8 border-l-2 border-ink/10 space-y-8">
              {day.blocks.map((b, i) => (
                <motion.div
                  key={b.time + b.activity}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative"
                >
                  <span
                    className={`absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full border-4 border-cream ${DAY_COLORS[dayIndex % DAY_COLORS.length]}`}
                  />
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-xl2 p-5 shadow-softer flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
                  >
                    <span className="text-sm font-semibold text-ink/50 w-20 shrink-0">{b.time}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${periodColor[b.period]}`}>
                      {b.period}
                    </span>
                    <span className="font-medium">{b.activity}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
