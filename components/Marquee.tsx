"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "17 Tournaments",
  "One League",
  "One Champion",
  "Every Match Matters",
  "Every VP Counts",
];

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-ink via-forest-dark to-ink py-2.5">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center shrink-0">
            {ITEMS.map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="font-heading text-xs md:text-sm font-medium tracking-wide uppercase text-cream/90 px-4">
                  {item}
                </span>
                <span className="w-1 h-1 rounded-full bg-gold/70" aria-hidden />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}