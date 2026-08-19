// "use client";

// import { useRef } from "react";
// import Link from "next/link";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Kanit } from "next/font/google";

// const kanit = Kanit({
//   subsets: ["latin"],
//   weight: ["700"], // Bold
// });

// const container = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.12, delayChildren: 0.1 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 28 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 120, damping: 14 },
//   },
// };

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   // Each background shape drifts at a different speed for a layered parallax feel
//   const ySlow = useTransform(scrollYProgress, [0, 1], [0, 80]);
//   const yMid = useTransform(scrollYProgress, [0, 1], [0, 160]);
//   const yFast = useTransform(scrollYProgress, [0, 1], [0, 240]);

//   return (
//     <section ref={sectionRef} className="relative pt-40 pb-28 px-6 md:px-10 overflow-hidden">
//       {/* Layered color shapes — parallax on scroll, gentle float on their own */}
//       <motion.div
//         style={{ y: yFast }}
//         animate={{ y: [0, -16, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-10 -left-16 w-64 h-64 rounded-full bg-forest/15"
//         aria-hidden
//       />
//       <motion.div
//         style={{ y: yMid }}
//         animate={{ y: [0, 14, 0] }}
//         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//         className="absolute top-24 -right-20 w-72 h-72 rounded-full bg-cherry/10"
//         aria-hidden
//       />
//       <motion.div
//         style={{ y: ySlow }}
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-sky/15"
//         aria-hidden
//       />
//       <motion.div
//         style={{ y: yMid }}
//         animate={{ y: [0, 12, 0] }}
//         transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
//         className="absolute top-10 right-1/4 w-40 h-40 rounded-full bg-gold/20"
//         aria-hidden
//       />
//       <motion.div
//         style={{ y: yFast }}
//         animate={{ y: [0, -8, 0] }}
//         transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
//         className="absolute bottom-10 -left-8 w-32 h-32 rounded-full bg-tangerine/10"
//         aria-hidden
//       />

//       {/* Floating illustrated elements */}
//       <motion.div
//         animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-24 left-6 md:left-16 text-5xl select-none"
//         aria-hidden
//       >
//         🎲
//       </motion.div>
//       <motion.div
//         animate={{ y: [0, 10, 0], rotate: [-6, 6, -6] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-52 right-8 md:right-24 text-4xl select-none"
//         aria-hidden
//       >
//         ♟️
//       </motion.div>
//       <motion.div
//         animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
//         transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
//         className="absolute bottom-16 left-1/4 text-4xl select-none"
//         aria-hidden
//       >
//         🃏
//       </motion.div>
//       <motion.div
//         animate={{ y: [0, 14, 0], rotate: [4, -4, 4] }}
//         transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
//         className="absolute bottom-24 right-1/3 text-3xl select-none"
//         aria-hidden
//       >
//         🧩
//       </motion.div>

//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="max-w-5xl mx-auto text-center relative z-10"
//       >
//         <motion.span
//           variants={item}
//           className="inline-flex items-center gap-2 bg-gold/25 text-ink px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
//         >
//           <motion.span
//             animate={{ scale: [1, 1.3, 1] }}
//             transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//             className="w-2 h-2 rounded-full bg-cherry inline-block"
//           />
//           29 Aug - 27 Sept 2026 ·  Meepleton Cafe, Bhopal
//         </motion.span>

//         <motion.h1
//           variants={item}
//           className={`${kanit.className} text-5xl sm:text-6xl md:text-[80px] font-bold leading-[1.05] mb-6`}
//           >
//           Bhopal&apos;s First
//           <br />
//           <span className="text-cherry">League Of</span> Board Games
//         </motion.h1>

//         <motion.p variants={item} className="text-lg text-ink/70 max-w-2xl mx-auto mb-10">
//           Strategy games, social deduction, euro games and party games — thirty days
//           of competitive tabletop fun for every kind of player.
//         </motion.p>

//         <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <Link href="/registration">
//             <motion.span
//               whileHover={{ scale: 1.06 }}
//               whileTap={{ scale: 0.96 }}
//               className="group inline-flex items-center gap-2 bg-cherry text-cream px-8 py-4 rounded-full font-semibold shadow-soft"
//             >
//               Register Now
//               <motion.span
//                 className="inline-flex"
//                 initial={{ x: 0 }}
//                 whileHover={{ x: 4 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <ArrowRight size={18} />
//               </motion.span>
//             </motion.span>
//           </Link>
//           <Link href="/league-format">
//             <motion.span
//               whileHover={{ scale: 1.06 }}
//               whileTap={{ scale: 0.96 }}
//               className="inline-block bg-transparent border-2 border-ink px-8 py-4 rounded-full font-semibold"
//             >
//               Explore the League
//             </motion.span>
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }






// "use client";

// import { useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Kanit } from "next/font/google";
// import RegistrationCounter from "@/components/RegistrationCounter";

// const kanit = Kanit({
//   subsets: ["latin"],
//   weight: ["700"], // Bold
// });

// const container = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.12, delayChildren: 0.1 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 28 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 120, damping: 14 },
//   },
// };

// // A mix of light, medium and heavy games from public/games/, showcasing
// // there's something for every skill level — used in the scrolling strip
// // above the CTA buttons.
// const SHOWCASE_GAMES = [
//   { id: "uno", name: "UNO" },
//   { id: "cascadia", name: "Cascadia" },
//   { id: "catan", name: "Catan" },
//   { id: "splendor", name: "Splendor" },
//   { id: "everdell", name: "Everdell" },
//   { id: "wingspan", name: "Wingspan" },
//   { id: "exploding-minions", name: "Exploding Minions" },
//   { id: "blood-on-the-clocktower", name: "Blood on the Clocktower" },
//   { id: "heat", name: "Heat: Pedal to the Metal" },

  
// ];
// const marqueeGames = [...SHOWCASE_GAMES, ...SHOWCASE_GAMES, ...SHOWCASE_GAMES];

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   // Each background shape drifts at a different speed for a layered parallax feel
//   const ySlow = useTransform(scrollYProgress, [0, 1], [0, 80]);
//   const yMid = useTransform(scrollYProgress, [0, 1], [0, 160]);
//   const yFast = useTransform(scrollYProgress, [0, 1], [0, 240]);


//   return (
//     <section ref={sectionRef} className="relative pt-40 pb-28 px-6 md:px-10 overflow-hidden">
      
//       {/* Layered color shapes — parallax on scroll, gentle float on their own */}
//       <RegistrationCounter />
//       <motion.div
//         style={{ y: yFast }}
//         animate={{ y: [0, -16, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-10 -left-16 w-64 h-64 rounded-full bg-forest/15"
//         aria-hidden
//       />
//       <motion.div
//         style={{ y: yMid }}
//         animate={{ y: [0, 14, 0] }}
//         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//         className="absolute top-24 -right-20 w-72 h-72 rounded-full bg-cherry/10"
//         aria-hidden
//       />
//       <motion.div
//         style={{ y: ySlow }}
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-sky/15"
//         aria-hidden
//       />
//       <motion.div
//         style={{ y: yMid }}
//         animate={{ y: [0, 12, 0] }}
//         transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
//         className="absolute top-10 right-1/4 w-40 h-40 rounded-full bg-gold/20"
//         aria-hidden
//       />
//       <motion.div
//         style={{ y: yFast }}
//         animate={{ y: [0, -8, 0] }}
//         transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
//         className="absolute bottom-10 -left-8 w-32 h-32 rounded-full bg-tangerine/10"
//         aria-hidden
//       />

//       {/* Floating illustrated elements */}
//       <motion.div
//         animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-24 left-6 md:left-16 text-5xl select-none"
//         aria-hidden
//       >
//         🎲
//       </motion.div>
//       <motion.div
//         animate={{ y: [0, 10, 0], rotate: [-6, 6, -6] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-52 right-8 md:right-24 text-4xl select-none"
//         aria-hidden
//       >
//         ♟️
//       </motion.div>
//       <motion.div
//         animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
//         transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
//         className="absolute bottom-16 left-1/4 text-4xl select-none"
//         aria-hidden
//       >
//         🃏
//       </motion.div>
//       <motion.div
//         animate={{ y: [0, 14, 0], rotate: [4, -4, 4] }}
//         transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
//         className="absolute bottom-24 right-1/3 text-3xl select-none"
//         aria-hidden
//       >
//         🧩
//       </motion.div>

//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="max-w-5xl mx-auto text-center relative z-10"
//       >
//         <motion.span
//           variants={item}
//           className="inline-flex items-center gap-2 bg-gold/25 text-ink px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
//         >
//           <motion.span
//             animate={{ scale: [1, 1.3, 1] }}
//             transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//             className="w-2 h-2 rounded-full bg-cherry inline-block"
//           />
//           29 Aug - 27 Sept 2026 ·  Meepleton Cafe, Bhopal
//         </motion.span>

//         {/* Beginner-friendly badge */}
//         <motion.div variants={item} className="mb-6">
//           <span className="inline-flex items-center gap-2 bg-forest-light/30 text-forest-dark px-4 py-1.5 rounded-full text-sm font-semibold">
//             🌱 Beginners Welcome — No Experience Needed
//           </span>
//         </motion.div>

//         {/* Happy people image — new */}
//         <motion.div variants={item} className="relative w-full max-w-lg mx-auto mb-8 rounded-xl3 overflow-hidden shadow-soft">
//           <Image
//             src="/happy-people.png"
//             alt="Happy players at League of Board Games"
//             width={1200}
//             height={700}
//             className="w-full h-auto"
//             priority
//           />
//         </motion.div>

//         <motion.h1
//           variants={item}
//           className={`${kanit.className} text-5xl sm:text-6xl md:text-[80px] font-bold leading-[1.05] mb-6`}
//           >
//           Bhopal&apos;s First
//           <br />
//           <span className="text-cherry">League Of</span> Board Games
//         </motion.h1>

//         <motion.p variants={item} className="text-lg text-ink/70 max-w-2xl mx-auto mb-4">
//           Strategy games, social deduction, euro games and party games — thirty days
//           of competitive tabletop fun for every kind of player.
//         </motion.p>

//         <motion.p variants={item} className="text-sm text-ink/50 max-w-xl mx-auto mb-10">
//           New to board game ? Perfect. Think you've mastered them ? We'll see....        
//           <br />
//           Come play, learn, strategise, compete, and find your people.
//         </motion.p>

//         {/* Game showcase marquee, right above the CTA buttons */}
//         <motion.div variants={item} className="mb-10 -mx-6 md:-mx-10 overflow-hidden">
//           <div className="flex whitespace-nowrap">
//             <div className="marquee-track flex items-center gap-4 pr-4">
//               {marqueeGames.map((g, i) => (
//                 <div
//                   key={g.id + i}
//                   className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl2 overflow-hidden shadow-softer shrink-0 border-2 border-white"
//                   title={g.name}
//                 >
//                   <Image src={`/games/${g.id}.jpg`} alt={g.name} fill className="object-cover" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
//           <Link href="/registration">
//             <motion.span
//               whileHover={{ scale: 1.06 }}
//               whileTap={{ scale: 0.96 }}
//               className="group inline-flex items-center gap-2 bg-cherry text-cream px-8 py-4 rounded-full font-semibold shadow-soft"
//             >
//               Register Now
//               <motion.span
//                 className="inline-flex"
//                 initial={{ x: 0 }}
//                 whileHover={{ x: 4 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <ArrowRight size={18} />
//               </motion.span>
//             </motion.span>
//           </Link>
//           <Link href="/league-format">
//             <motion.span
//               whileHover={{ scale: 1.06 }}
//               whileTap={{ scale: 0.96 }}
//               className="inline-block bg-transparent border-2 border-ink px-8 py-4 rounded-full font-semibold"
//             >
//               Explore the League
//             </motion.span>
//           </Link>
//         </motion.div>

//       </motion.div>

//       {/* Balance visual — light strategy & family fun weighed equally against heavy
//           strategy. Full-bleed: breaks out of the max-w-5xl text column and the
//           section's own left/right padding so it spans edge to edge. */}
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-60px" }}
//         transition={{ duration: 0.6 }}
//         className="relative mt-6 md:mt-10 -mx-6 md:-mx-10"
//       >
//         <Image
//           src="/beginner-friendly.jpeg"
//           alt="Beginner and family friendly games balanced equally with heavy strategy games — the League has something for every skill level"
//           width={1406}
//           height={751}
//           className="w-full h-auto"
//           priority
//         />
//       </motion.div>
//     </section>
//   );
// }










// updated code with image on left for desktop and stuff 
"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Kanit } from "next/font/google";
import RegistrationCounter from "@/components/RegistrationCounter";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700"], // Bold
});

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

const SHOWCASE_GAMES = [
  { id: "uno", name: "UNO" },
  { id: "cascadia", name: "Cascadia" },
  { id: "catan", name: "Catan" },
  { id: "splendor", name: "Splendor" },
  { id: "everdell", name: "Everdell" },
  { id: "wingspan", name: "Wingspan" },
  { id: "exploding-minions", name: "Exploding Minions" },
  { id: "blood-on-the-clocktower", name: "Blood on the Clocktower" },
  { id: "heat", name: "Heat: Pedal to the Metal" },
];
const marqueeGames = [...SHOWCASE_GAMES, ...SHOWCASE_GAMES, ...SHOWCASE_GAMES];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 240]);

  return (
    <section ref={sectionRef} className="relative pt-40 pb-28 px-6 md:px-10 overflow-hidden">
      
      {/* Background Parallax Floating Elements */}
      <motion.div
        style={{ y: yFast }}
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-16 w-64 h-64 rounded-full bg-forest/15"
        aria-hidden
      />
      <motion.div
        style={{ y: yMid }}
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-24 -right-20 w-72 h-72 rounded-full bg-cherry/10"
        aria-hidden
      />
      <motion.div
        style={{ y: ySlow }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-sky/15"
        aria-hidden
      />
      <motion.div
        style={{ y: yMid }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        className="absolute top-10 right-1/4 w-40 h-40 rounded-full bg-gold/20"
        aria-hidden
      />
      <motion.div
        style={{ y: yFast }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-10 -left-8 w-32 h-32 rounded-full bg-tangerine/10"
        aria-hidden
      />

      {/* Floating Emojis */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-6 md:left-16 text-5xl select-none"
        aria-hidden
      >
        🎲
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-52 right-8 md:right-24 text-4xl select-none"
        aria-hidden
      >
        ♟️
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-16 left-1/4 text-4xl select-none"
        aria-hidden
      >
        🃏
      </motion.div>
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute bottom-24 right-1/3 text-3xl select-none"
        aria-hidden
      >
        🧩
      </motion.div>

      {/* Main Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto text-center md:text-left relative z-10 md:grid md:grid-cols-2 md:gap-12 md:items-start"
      >
        {/* LEFT COLUMN: Counter (Centered above photo) & Image */}
        <div className="flex flex-col items-center justify-start">
          <motion.div variants={item} className="mb-6 md:mb-8 w-full flex justify-center">
            <RegistrationCounter />
          </motion.div>
          
          <motion.div variants={item} className="relative w-full max-w-lg mx-auto mb-8 md:mb-0 rounded-xl3 overflow-hidden shadow-soft">
            <Image
              src="/happy-people.png"
              alt="Happy players at League of Board Games"
              width={1200}
              height={700}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Badges, Title, Description & Action Buttons */}
        <div className="flex flex-col items-center md:items-start justify-start pt-1 md:pt-0">
          
          {/* Badge Pills */}
          <div className="flex flex-col items-center md:items-start">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 bg-gold/25 text-ink px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-cherry inline-block"
              />
              29 Aug - 27 Sept 2026 ·  Meepleton Cafe, Bhopal
            </motion.span>

            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-forest-light/30 text-forest-dark px-4 py-1.5 rounded-full text-sm font-semibold">
                🌱 Beginners Welcome — No Experience Needed
              </span>
            </motion.div>
          </div>

          <motion.h1
            variants={item}
            className={`${kanit.className} text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6`}
          >
            Bhopal&apos;s First
            <br />
            <span className="text-cherry">League Of</span> Board Games
          </motion.h1>

          <motion.p variants={item} className="text-lg text-ink/70 max-w-2xl mb-4">
            Strategy games, social deduction, euro games and party games — thirty days
            of competitive tabletop fun for every kind of player.
          </motion.p>

          <motion.p variants={item} className="text-sm text-ink/50 max-w-xl mb-8">
            New to board game ? Perfect. Think you've mastered them ? We'll see....        
            <br />
            Come play, learn, strategise, compete, and find your people.
          </motion.p>

          {/* Marquee Strip */}
          <motion.div variants={item} className="mb-10 w-full overflow-hidden">
            <div className="flex whitespace-nowrap">
              <div className="marquee-track flex items-center gap-4 pr-4">
                {marqueeGames.map((g, i) => (
                  <div
                    key={g.id + i}
                    className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl2 overflow-hidden shadow-softer shrink-0 border-2 border-white"
                    title={g.name}
                  >
                    <Image src={`/games/${g.id}.jpg`} alt={g.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6 md:mb-0">
            <Link href="/registration">
              <motion.span
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-2 bg-cherry text-cream px-8 py-4 rounded-full font-semibold shadow-soft"
              >
                Register Now
                <motion.span
                  className="inline-flex"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.span>
            </Link>
            <Link href="/league-format">
              <motion.span
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block bg-transparent border-2 border-ink px-8 py-4 rounded-full font-semibold"
              >
                Explore the League
              </motion.span>
            </Link>
          </motion.div>
        </div>

      </motion.div>

      {/* Full-bleed Footer Visual */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative mt-12 md:mt-16 -mx-6 md:-mx-10"
      >
        <Image
          src="/beginner-friendly.jpeg"
          alt="Beginner and family friendly games balanced equally with heavy strategy games"
          width={1406}
          height={751}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </section>
  );
}