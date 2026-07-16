"use client";

import { motion } from "framer-motion";
import games from "@/data/games.json";

const colorMap: Record<string, string> = {
  forest: "bg-forest/10 text-forest",
  cherry: "bg-cherry/10 text-cherry",
  sky: "bg-sky/10 text-sky",
  gold: "bg-gold/15 text-ink",
  tangerine: "bg-tangerine/10 text-tangerine",
};

export default function GamesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl font-semibold mb-3">Games Included</h2>
        <p className="text-ink/60 max-w-xl mx-auto">
          Eight game categories, dozens of tables — pick your favourite or discover a new one.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((g, i) => (
          <motion.div
            key={g.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="tilt-card bg-white rounded-xl2 p-6 shadow-softer"
          >
            <div className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center text-2xl ${colorMap[g.color]}`}>
              🎲
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
              {g.category}
            </span>
            <h3 className="font-heading text-xl font-semibold mt-1 mb-2">{g.name}</h3>
            <p className="text-sm text-ink/60">{g.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
