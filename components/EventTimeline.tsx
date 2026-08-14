// "use client";

// import { motion } from "framer-motion";

// const STAGES = [
//   { title: "Registration", color: "bg-sky", desc: "Sign up solo or as a team, choose your pass." },
//   { title: "League Stage", color: "bg-forest", desc: "Round-robin matches across all game categories." },
//   { title: "Knockouts", color: "bg-gold", desc: "Top 8 players enter single-elimination rounds." },
//   { title: "Semi Finals", color: "bg-tangerine", desc: "Four players remain, tension peaks." },
//   { title: "Grand Finals", color: "bg-cherry", desc: "One table, one champion, three days of glory." },
// ];

// export default function EventTimeline() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
//       <h2 className="font-heading text-4xl font-semibold text-center mb-14">Event Structure</h2>
//       <div className="grid md:grid-cols-5 gap-6">
//         {STAGES.map((s, i) => (
//           <motion.div
//             key={s.title}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="tilt-card bg-white rounded-xl2 p-6 shadow-softer relative"
//           >
//             <div className={`w-9 h-9 rounded-full ${s.color} text-white flex items-center justify-center font-heading text-sm mb-4`}>
//               {i + 1}
//             </div>
//             <h3 className="font-semibold mb-2">{s.title}</h3>
//             <p className="text-sm text-ink/60">{s.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }





// "use client";

// import { motion } from "framer-motion";

// const STAGES = [
//   { title: "Registration", color: "bg-sky", desc: "Sign up solo or as a team, choose your pass." },
//   { title: "League Stage", color: "bg-forest", desc: "Round-robin matches across all game categories." },
//   { title: "Knockouts", color: "bg-gold", desc: "Top 8 players enter single-elimination rounds." },
//   { title: "Semi Finals", color: "bg-tangerine", desc: "Four players remain, tension peaks." },
//   { title: "Grand Finals", color: "bg-cherry", desc: "One table, one champion, three days of glory." },
// ];

// export default function EventTimeline() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
//       <motion.h2
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="font-heading text-4xl font-semibold text-center mb-14"
//       >
//         Highlight Events
//       </motion.h2>

//       <div className="relative">
//         {/* Connecting line behind the stage numbers, desktop only */}
//         <div className="hidden md:block absolute top-[38px] left-[10%] right-[10%] h-0.5 bg-ink/10" aria-hidden />

//         <div className="grid md:grid-cols-5 gap-6">
//           {STAGES.map((s, i) => (
//             <motion.div
//               key={s.title}
//               initial={{ opacity: 0, y: 24, scale: 0.92 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ type: "spring", stiffness: 140, damping: 16, delay: i * 0.1 }}
//               whileHover={{ y: -6 }}
//               className="relative bg-white rounded-xl2 p-6 shadow-softer"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.15, rotate: 8 }}
//                 className={`relative z-10 w-9 h-9 rounded-full ${s.color} text-white flex items-center justify-center font-heading text-sm mb-4 shadow-softer`}
//               >
//                 {i + 1}
//               </motion.div>
//               <h3 className="font-semibold mb-2">{s.title}</h3>
//               <p className="text-sm text-ink/60">{s.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



//  THIS IS code for KEY DETAILS -----------------------------
"use client";

import { motion } from "framer-motion";

const STAGES = [
  { title: "Registration Opens", color: "bg-sky", desc: "Registrations open in August — choose your pass and lock in your spot." },
  { title: "17 Tournaments", color: "bg-forest", desc: "The League runs 29 August – 27 September across 2–3 venues in Bhopal." },
  { title: "League Pass Holders", color: "bg-cherry", desc: "Every participant plays 18 matches in total, with 3 matches per game, including at least 1 Heavy game. \n \n League Points are awarded based on each player's finishing position in every match." },
  { title: "Explorer Pass Holders", color: "bg-gold", desc: "Every participant plays 4 matches per tournament. \n \n Points are awarded based on each player's finishing position in every match." },
  { title: "League Standings", color: "bg-tangerine", desc: "League Pass holders compete across any 6 tournaments — LP adds up across all six." },
  { title: "League Champion 2026", color: "bg-cherry", desc: "The highest cumulative LP scorer is crowned the Champion of League of Board Games 2026." },
];

export default function EventTimeline() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading text-4xl font-semibold text-center mb-14"
      >
        Key Details
      </motion.h2>

      <div className="relative">
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {STAGES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 16,
                delay: i * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-xl2 p-6 shadow-softer"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                className={`relative z-10 w-9 h-9 rounded-full ${s.color} text-white flex items-center justify-center font-heading text-sm mb-4 shadow-softer`}
              >
                {i + 1}
              </motion.div>

              <h3 className="font-semibold mb-2">
                {s.title}
              </h3>

              <p className="text-sm text-ink/60 whitespace-pre-line">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}