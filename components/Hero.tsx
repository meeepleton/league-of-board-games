"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Kanit } from "next/font/google";

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

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Each background shape drifts at a different speed for a layered parallax feel
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 240]);

  return (
    <section ref={sectionRef} className="relative pt-40 pb-28 px-6 md:px-10 overflow-hidden">
      {/* Layered color shapes — parallax on scroll, gentle float on their own */}
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

      {/* Floating illustrated elements */}
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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 bg-gold/25 text-ink px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-cherry inline-block"
          />
          29 Aug - 27 Sept 2026 ·  Meepleton Cafe, Bhopal
        </motion.span>

        <motion.h1
          variants={item}
          className={`${kanit.className} text-5xl sm:text-6xl md:text-[80px] font-bold leading-[1.05] mb-6`}
          >
          Bhopal&apos;s First
          <br />
          <span className="text-cherry">League Of</span> Board Games
        </motion.h1>

        <motion.p variants={item} className="text-lg text-ink/70 max-w-2xl mx-auto mb-10">
          Strategy games, social deduction, euro games and party games — thirty days
          of competitive tabletop fun for every kind of player.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </motion.div>
    </section>
  );
}
