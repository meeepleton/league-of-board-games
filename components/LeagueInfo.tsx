"use client";

import { motion } from "framer-motion";
import { Users, Trophy, Calendar } from "lucide-react";

export default function LeagueInfo() {
  const points = [
    { icon: Users, title: "Who can join", text: "Solo players and teams of up to 4 — beginners to seasoned strategists, ages 14+." },
    { icon: Calendar, title: "Event format", text: "A league stage followed by knockouts, semi finals and a grand final across 3 days." },
    { icon: Trophy, title: "Why join", text: "Compete for the title, learn from top players, and meet a community that loves the table as much as you do." },
  ];

  return (
    <section id="league-info" className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-forest/10 rounded-xl3 aspect-square flex items-center justify-center text-8xl"
      >
        🏆
      </motion.div>

      <div>
        <h2 className="font-heading text-4xl font-semibold mb-4">What is Meeple Masters?</h2>
        <p className="text-ink/70 mb-8">
          A national-level board gaming league bringing together strategy games, social
          deduction, euro games and party games under one roof — part competition,
          part festival.
        </p>
        <div className="space-y-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-sky/15 flex items-center justify-center">
                <p.icon className="text-sky" size={22} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-ink/60">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
