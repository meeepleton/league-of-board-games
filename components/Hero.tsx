"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 md:px-10 overflow-hidden">
      {/* Floating illustrated elements */}
      <div className="absolute top-24 left-6 md:left-16 text-5xl animate-floaty select-none" aria-hidden>
        🎲
      </div>
      <div className="absolute top-52 right-8 md:right-24 text-4xl animate-dice select-none" aria-hidden>
        ♟️
      </div>
      <div className="absolute bottom-16 left-1/4 text-4xl animate-floaty select-none" aria-hidden style={{ animationDelay: "1.2s" }}>
        🃏
      </div>
      <div className="absolute bottom-24 right-1/3 text-3xl animate-floaty select-none" aria-hidden style={{ animationDelay: "0.6s" }}>
        🧩
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-gold/20 text-ink px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
        >
          12–14 Sep 2026 · Indore Convention Centre
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] mb-6"
        >
          The Nation&apos;s Biggest
          <br />
          <span className="text-cherry">Board Game</span> Festival
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-ink/70 max-w-2xl mx-auto mb-10"
        >
          Strategy games, social deduction, euro games and party games — three days
          of competitive tabletop fun for every kind of player.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/registration"
            className="btn-scale bg-cherry text-cream px-8 py-4 rounded-full font-semibold shadow-soft"
          >
            Register Now
          </Link>
          <Link
            href="#league-info"
            className="btn-scale bg-transparent border-2 border-ink px-8 py-4 rounded-full font-semibold"
          >
            Explore the League
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
