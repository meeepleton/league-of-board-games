// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";
// import { Trophy } from "lucide-react";

// // ---------------------------------------------------------------------------
// // HARDCODED FOR NOW — replace this with the real, live registration count
// // once the backend is wired up (e.g. fetched from an API or database).
// // Everything else in this file can stay exactly as-is.
// // ---------------------------------------------------------------------------
// const REGISTRATION_COUNT = 10;

// export default function RegistrationCounter() {
//   const ref = useRef<HTMLDivElement>(null);
//   // Removed `once: true` so this fires every time the card scrolls into
//   // view, not just the first time on page load.
//   const isInView = useInView(ref, { margin: "-80px" });
//   const [displayValue, setDisplayValue] = useState(0);

//   useEffect(() => {
//     if (!isInView) {
//       // Reset back to 0 when it scrolls out of view, so the roll-up
//       // animation plays again from the start next time it comes back in.
//       setDisplayValue(0);
//       return;
//     }

//     const duration = 1800; // total roll time in ms
//     const startTime = performance.now();

//     function tick(now: number) {
//       const elapsed = now - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       // ease-out so it rolls fast at first, then settles smoothly
//       const eased = 1 - Math.pow(1 - progress, 3);
//       const current = Math.round(eased * REGISTRATION_COUNT);
//       setDisplayValue(current);

//       if (progress < 1) {
//         requestAnimationFrame(tick);
//       } else {
//         setDisplayValue(REGISTRATION_COUNT);
//       }
//     }

//     requestAnimationFrame(tick);
//   }, [isInView]);

//   const formatted = displayValue.toLocaleString("en-IN");

//   return (
//     <section ref={ref} className="max-w-3xl mx-auto px-6 md:px-10 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 24, scale: 0.96 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         viewport={{ once: true, margin: "-60px" }}
//         transition={{ type: "spring", stiffness: 120, damping: 16 }}
//         // Fixed aspect ratio keeps the background image fully visible and
//         // consistently framed across phone / tablet / laptop widths, instead
//         // of the card shrinking to fit its (short) text content.
//         className="relative overflow-hidden rounded-xl3 shadow-soft aspect-[16/10] sm:aspect-[2/1] md:aspect-[21/9]"
//       >
//         {/* Warm wooden/treasure-chest style background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#8a5a2e] via-[#6b4423] to-[#3f2814]" aria-hidden />

//         {/* Background image */}
//         <div className="absolute inset-0 opacity-45">
//           <Image
//             src="/registration-counter-bg.jpg"
//             alt=""
//             fill
//             className="object-cover"
//             aria-hidden
//           />
//         </div>

//         {/* Dark wash over the image so text stays readable */}
//         <div className="absolute inset-0 bg-black/35" aria-hidden />

//         {/* Subtle wood-grain texture using repeating gradient lines */}
//         <div
//           className="absolute inset-0 opacity-15 mix-blend-overlay"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(100deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 8px)",
//           }}
//           aria-hidden
//         />

//         {/* Soft gold glow behind the number */}
//         <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
//           <div className="w-72 h-32 bg-gold/25 blur-3xl rounded-full" />
//         </div>

//         <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-8 py-6 pt-14 md:pt-20">
//           <motion.div
//             animate={{ y: [0, -5, 0] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             className="w-11 h-11 rounded-full bg-gold/25 border border-gold/40 flex items-center justify-center mb-3"
//           >
//             <Trophy size={20} className="text-gold" />
//           </motion.div>

//           <span className="text-cream/80 text-xs font-semibold uppercase tracking-widest mb-2">
//             League Registrations to Date
//           </span>

//           {/* "Updating live" now sits above the number */}
//           <motion.span className="mb-1 inline-flex items-center gap-1.5 text-cream/70 text-xs font-medium">
//             <motion.span
//               animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
//               transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
//               className="w-1.5 h-1.5 rounded-full bg-forest-light inline-block"
//             />
//             Updating live
//           </motion.span>

//           {/* Number sits directly on the background — nudged down a bit for balance */}
//           <span
//             className="mt-3 md:mt-5 font-heading text-6xl md:text-7xl font-bold text-gold tabular-nums tracking-wider"
//             style={{ textShadow: "0 0 18px rgba(212,175,55,0.7), 0 0 4px rgba(212,175,55,0.9), 0 2px 6px rgba(0,0,0,0.5)" }}
//           >
//             {formatted}
//           </span>
//         </div>
//       </motion.div>
//     </section>
//   );
// }







"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ---------------------------------------------------------------------------
// HARDCODED FOR NOW — replace this with the real, live registration count
// once the backend is wired up (e.g. fetched from an API or database).
// Everything else in this file can stay exactly as-is.
// ---------------------------------------------------------------------------
const REGISTRATION_COUNT = 56;
const DIGIT_COUNT = 3; // always renders as 3 digits, e.g. 010, 100, 999

const TILE_H = 26; // px — smaller + more rectangular tile
const TILE_W = TILE_H * 0.62;

function DigitTile({ digit, delay, play }: { digit: number; delay: number; play: boolean }) {
  const loops = 3;
  const sequence = Array.from({ length: loops * 10 + digit + 1 }, (_, i) => i % 10);
  const finalIndex = sequence.length - 1;

  return (
    <div
      className="relative overflow-hidden rounded-[4px] bg-[#1e3a8a] border border-[#14265c] shadow-[inset_0_1px_2px_rgba(0,0,0,0.35)]"
      style={{ height: TILE_H, width: TILE_W }}
    >
      <motion.div
        key={play ? "play" : "idle"}
        initial={{ y: 0 }}
        animate={{ y: play ? -finalIndex * TILE_H : 0 }}
        // Slowed further, from 2.6s to 3.4s per tile
        transition={play ? { duration: 3.4, delay, ease: [0.16, 0.8, 0.3, 1] } : { duration: 0 }}
      >
        {sequence.map((d, i) => (
          <div
            key={i}
            style={{ height: TILE_H }}
            className="flex items-center justify-center text-white font-bold text-sm tabular-nums leading-none"
          >
            {d}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function RegistrationCounter() {
  const ref = useRef<HTMLDivElement>(null);
  // No "once", so it fires every time the element re-enters the viewport
  const isInView = useInView(ref, { margin: "-40px", amount: 0.6 });
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Reset to idle first, then flip to play on the next tick — this is
      // what lets the roll replay from scratch every time it scrolls
      // back into view, instead of only animating the very first time.
      setPlay(false);
      const t = setTimeout(() => setPlay(true), 60);
      return () => clearTimeout(t);
    } else {
      setPlay(false);
    }
  }, [isInView]);

  const digits = REGISTRATION_COUNT.toString()
    .padStart(DIGIT_COUNT, "0")
    .split("")
    .map(Number);

  return (
    <div ref={ref} className="flex items-center justify-center flex-wrap gap-x-3 gap-y-2">
      {/* Plain text label, no box */}
      <span className="text-sm sm:text-base font-semibold tracking-wide text-ink whitespace-nowrap">
        League Registrations to Date
      </span>

      {/* COUNTER pill */}
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16 }}
        className="relative inline-flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 rounded-full shadow-soft"
        style={{
          background: "linear-gradient(155deg, #e8d9c0 0%, #d9c4a0 50%, #c9ad80 100%)",
          border: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        {/* Wood grain texture */}
        <div
          className="absolute inset-0 rounded-full opacity-20 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(95deg, rgba(120,80,40,0.15) 0px, rgba(120,80,40,0.15) 1px, transparent 1px, transparent 6px)",
          }}
          aria-hidden
        />

        {/* Live indicator — solid green dot */}
        <span className="relative z-10 shrink-0 w-2.5 h-2.5 rounded-full bg-green-500" aria-hidden />

        {/* Digit tiles */}
        <div className="relative z-10 flex items-center gap-1">
          {digits.map((d, i) => (
            <DigitTile key={i} digit={d} delay={i * 0.15} play={play} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}