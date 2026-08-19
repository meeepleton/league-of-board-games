// "use client";

// import { motion } from "framer-motion";
// import { Users, Trophy, Calendar } from "lucide-react";

// export default function LeagueInfo() {
//   const points = [
//     { icon: Users, title: "Who can join", text: "Solo players and teams of up to 4 — beginners to seasoned strategists, ages 14+." },
//     { icon: Calendar, title: "Event format", text: "A league stage followed by knockouts, semi finals and a grand final across 3 days." },
//     { icon: Trophy, title: "Why join", text: "Compete for the title, learn from top players, and meet a community that loves the table as much as you do." },
//   ];

//   return (
//     <section id="league-info" className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-14 items-center">
//       <motion.div
//         initial={{ opacity: 0, x: -30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="bg-forest/10 rounded-xl3 aspect-square flex items-center justify-center text-8xl"
//       >
//         🏆
//       </motion.div>

//       <div>
//         <h2 className="font-heading text-4xl font-semibold mb-4">What is League of Board Games?</h2>
//         <p className="text-ink/70 mb-8">
//           A national-level board gaming league bringing together strategy games, social
//           deduction, euro games and party games under one roof — part competition,
//           part festival.
//         </p>
//         <div className="space-y-6">
//           {points.map((p, i) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="flex gap-4"
//             >
//               <div className="w-12 h-12 shrink-0 rounded-2xl bg-sky/15 flex items-center justify-center">
//                 <p.icon className="text-sky" size={22} />
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-1">{p.title}</h3>
//                 <p className="text-sm text-ink/60">{p.text}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { motion } from "framer-motion";
// import { Users, Trophy, Calendar } from "lucide-react";

// const TINTS = [
//   "bg-forest-light/25 text-forest-dark",
//   "bg-cherry-light/25 text-cherry-dark",
//   "bg-gold-light/40 text-ink",
// ];

// export default function LeagueInfo() {
//   const points = [
//     { icon: Users, title: "Who can join", text: "Solo players and teams of up to 4 — beginners to seasoned strategists, ages 14+." },
//     { icon: Calendar, title: "Event format", text: "A league stage followed by knockouts, semi finals and a grand final across 3 days." },
//     { icon: Trophy, title: "Why join", text: "Compete for the title, learn from top players, and meet a community that loves the table as much as you do." },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-14 items-center">
//       <motion.div
//         initial={{ opacity: 0, x: -30, rotate: -3 }}
//         whileInView={{ opacity: 1, x: 0, rotate: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", stiffness: 90, damping: 14 }}
//         whileHover={{ rotate: -2, scale: 1.02 }}
//         className="relative overflow-hidden bg-forest-light/20 rounded-xl3 aspect-square flex items-center justify-center text-8xl"
//       >
//         <motion.span
//           animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         >
//           🏆
//         </motion.span>
//         <span className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-forest/20" aria-hidden />
//         <span className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-gold-light/40" aria-hidden />
//       </motion.div>

//       <div>
//         <motion.h2
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="font-heading text-4xl font-semibold mb-4"
//         >
//           What is League of Board Games?
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.05 }}
//           className="text-ink/70 mb-8"
//         >
//           A national-level board gaming league bringing together strategy games, social
//           deduction, euro games and party games under one roof — part competition,
//           part festival.
//         </motion.p>
//         <div className="space-y-6">
//           {points.map((p, i) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ type: "spring", stiffness: 150, damping: 16, delay: i * 0.1 }}
//               whileHover={{ x: 4 }}
//               className="flex gap-4"
//             >
//               <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${TINTS[i % TINTS.length]}`}>
//                 <p.icon size={22} />
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-1">{p.title}</h3>
//                 <p className="text-sm text-ink/60">{p.text}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Users, Trophy, Calendar } from "lucide-react";

// const TINTS = [
//   "bg-forest-light/25 text-forest-dark",
//   "bg-cherry-light/25 text-cherry-dark",
//   "bg-gold-light/40 text-ink",
// ];

// export default function LeagueInfo() {
//   const points = [
//     {
//       icon: Users,
//       title: "Who can join",
//       text: "Open to ages 12+ — students, young professionals, freelancers, families, hobby gamers and strategy enthusiasts. Beginners are just as welcome as seasoned players.",
//     },
//     {
//       icon: Calendar,
//       title: "Event format",
//       text: "17 individual tournaments running from 29 August to 27 September (tentative), hosted across 2–3 venues in Bhopal for a true city-wide festival feel.",
//     },
//     {
//       icon: Trophy,
//       title: "Why join",
//       text: "Compete across tournaments to earn Victory Points, chase the League Champion 2026 title, and win a share of a ₹1,00,000+ prize pool in cash, trophies and merch.",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-14 items-center">
//       <motion.div
//   initial={{ opacity: 0, x: -30 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   viewport={{ once: true }}
//   transition={{ type: "spring", stiffness: 90, damping: 14 }}
//   whileHover={{ scale: 1.02 }}
//   className="relative overflow-hidden bg-forest-light/20 rounded-xl3 aspect-square flex items-center justify-center"
// >
//   <motion.div
//     animate={{ y: [0, -6, 0] }}
//     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//     className="absolute inset-0"
//   >
//     <Image src="/logo.png" alt="League of Board Games logo" fill className="object-cover" />
//   </motion.div>
//   <span className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-forest/20 pointer-events-none" aria-hidden />
//   <span className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-gold-light/40 pointer-events-none" aria-hidden />
// </motion.div>

//       <div>
//         <motion.h2
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="font-heading text-4xl font-semibold mb-4"
//         >
//           What is the League of Board Games?
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.05 }}
//           className="text-ink/70 mb-8"
//         >
//           Meepleton&apos;s month-long competitive board gaming championship — 17
//           tournaments, one League, one Champion. Players compete across strategy games,
//           social deduction, euro games and party games, earning Victory Points to battle
//           for the League Champion 2026 title.
//         </motion.p>
//         <div className="space-y-6">
//           {points.map((p, i) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ type: "spring", stiffness: 150, damping: 16, delay: i * 0.1 }}
//               whileHover={{ x: 4 }}
//               className="flex gap-4"
//             >
//               <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${TINTS[i % TINTS.length]}`}>
//                 <p.icon size={22} />
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-1">{p.title}</h3>
//                 <p className="text-sm text-ink/60">{p.text}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Trophy, Calendar } from "lucide-react";

const TINTS = [
  "bg-forest-light/25 text-forest-dark",
  "bg-cherry-light/25 text-cherry-dark",
  "bg-gold-light/40 text-ink",
];

export default function LeagueInfo() {
  const points = [
    {
      icon: Users,
      title: "Who can join",
      text: "Open to ages 14+ — students, young professionals, freelancers, families, hobby gamers and strategy enthusiasts. Beginners are just as welcome as seasoned players.",
    },
    {
      icon: Calendar,
      title: "Event format",
      text: "17 individual tournaments running from 29 August to 27 September , hosted across 2–3 venues in Bhopal for a true city-wide festival feel.",
    },
    {
      icon: Trophy,
      title: "Why join",
      text: "Compete across tournaments to earn Victory Points, chase the League Champion 2026 title, and win a share of a ₹1,00,000+ prize pool in cash, trophies and merch.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 90, damping: 14 }}
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden bg-forest-light/20 rounded-xl3 aspect-square flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image src="/logo.png" alt="League of Board Games logo" fill className="object-cover" />
        </motion.div>
        <span className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-forest/20 pointer-events-none" aria-hidden />
        <span className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-gold-light/40 pointer-events-none" aria-hidden />
      </motion.div>

      <div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl font-semibold mb-4"
        >
          What is the League of Board Games?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-ink/70 mb-8"
        >
          Meepleton&apos;s month-long competitive board gaming championship — 17
          tournaments, one League, one Champion. Players compete across strategy games,
          social deduction, euro games and party games, earning Victory Points to battle
          for the League Champion 2026 title.
        </motion.p>
        <div className="space-y-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 16, delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex gap-4"
            >
              <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${TINTS[i % TINTS.length]}`}>
                <p.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-ink/60">
                  {p.title === "Who can join" ? (
                    <>
                      Open to ages 12+ — students, young professionals, freelancers,
                      families, hobby gamers and strategy enthusiasts.{" "}
                      <span className="font-semibold text-ink">
                        Beginners are just as welcome
                      </span>{" "}
                      as seasoned players.
                    </>
                  ) : (
                    p.text
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}