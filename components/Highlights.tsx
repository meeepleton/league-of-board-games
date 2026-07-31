"use client";

import { motion } from "framer-motion";

const HIGHLIGHTS = [
  { emoji: "💰", title: "Prize Pool", desc: "₹1,00,000+ in cash prizes and merchandise across every category.", color: "bg-gold/15", bar: "bg-gold" },
  { emoji: "🎓", title: "Learning Sessions", desc: "Involved gameplay with seasoned players and board game veterans.", color: "bg-sky/10", bar: "bg-sky" },
  { emoji: "🤝", title: "Community", desc: "Meet hundreds of players who share your love for the table.", color: "bg-forest/10", bar: "bg-forest" },
  { emoji: "🎉", title: "Fun Events", desc: "Social evenings, casual play zones, and surprise mini-tournaments.", color: "bg-cherry/10", bar: "bg-cherry" },
  { emoji: "🛠️", title: "Workshops", desc: "Hands-on sessions on game design, prototyping and strategy.", color: "bg-tangerine/10", bar: "bg-tangerine" },
  { emoji: "🌙", title: "Social Evenings", desc: "Unwind after matches with themed evening game nights.", color: "bg-gold/15", bar: "bg-gold" },
];

export default function Highlights() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading text-4xl font-semibold text-center mb-14"
      >
        Event Highlights
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HIGHLIGHTS.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 32, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 140, damping: 16, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className={`relative overflow-hidden rounded-xl3 p-8 ${h.color} shadow-softer`}
          >
            <span className={`absolute top-0 left-0 right-0 h-1.5 ${h.bar}`} aria-hidden />
            <motion.div
              className="text-4xl mb-4 inline-block"
              whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.15 }}
              transition={{ duration: 0.5 }}
            >
              {h.emoji}
            </motion.div>
            <h3 className="font-heading text-xl font-semibold mb-2">{h.title}</h3>
            <p className="text-sm text-ink/70">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

