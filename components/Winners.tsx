"use client";

import { motion } from "framer-motion";
import winners from "@/data/winners.json";

export default function Winners() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="text-center mb-14">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="font-heading text-4xl font-semibold mb-2">Winners &amp; Prizes</h2>
        <p className="text-ink/60">Last season&apos;s champions — this could be you next.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tilt-card bg-gold/15 rounded-xl3 p-8 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">Champion</span>
          <h3 className="font-heading text-3xl font-semibold mt-2">{winners.champion.name}</h3>
          <p className="text-sm text-ink/60 mt-1">{winners.champion.team}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="tilt-card bg-sky/10 rounded-xl3 p-8 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">Runner Up</span>
          <h3 className="font-heading text-3xl font-semibold mt-2">{winners.runnerUp.name}</h3>
          <p className="text-sm text-ink/60 mt-1">{winners.runnerUp.team}</p>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[...winners.categoryAwards, ...winners.specialAwards].map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl2 p-5 shadow-softer flex items-center justify-between"
          >
            <span className="text-sm text-ink/60">{a.title}</span>
            <span className="font-semibold">{a.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
