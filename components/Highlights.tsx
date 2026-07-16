"use client";

import { motion } from "framer-motion";

const HIGHLIGHTS = [
  { emoji: "💰", title: "Prize Pool", desc: "₹5,00,000+ in cash prizes and merchandise across every category.", color: "bg-gold/15" },
  { emoji: "🎓", title: "Learning Sessions", desc: "Live workshops from published designers and top-ranked players.", color: "bg-sky/10" },
  { emoji: "🤝", title: "Community", desc: "Meet hundreds of players who share your love for the table.", color: "bg-forest/10" },
  { emoji: "🎉", title: "Fun Events", desc: "Social evenings, casual play zones, and surprise mini-tournaments.", color: "bg-cherry/10" },
  { emoji: "🛠️", title: "Workshops", desc: "Hands-on sessions on game design, prototyping and strategy." , color: "bg-tangerine/10"},
  { emoji: "🌙", title: "Social Evenings", desc: "Unwind after matches with themed evening game nights.", color: "bg-gold/15" },
];

export default function Highlights() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <h2 className="font-heading text-4xl font-semibold text-center mb-14">Event Highlights</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HIGHLIGHTS.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className={`tilt-card rounded-xl3 p-8 ${h.color}`}
          >
            <div className="text-4xl mb-4">{h.emoji}</div>
            <h3 className="font-heading text-xl font-semibold mb-2">{h.title}</h3>
            <p className="text-sm text-ink/70">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
