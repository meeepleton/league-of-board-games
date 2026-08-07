"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Dices, CalendarDays, Trophy } from "lucide-react";

const STATS = [
  { icon: Users, value: 200, suffix: "+", label: "Players Expected", tint: "bg-forest/10 text-forest" },
  { icon: Dices, value: 17, suffix: "", label: "Games Featured", tint: "bg-cherry/10 text-cherry" },
  { icon: CalendarDays, value: 30, suffix: "", label: "Days of Play", tint: "bg-gold/20 text-ink" },
  { icon: Trophy, value: 1, suffix: "L+", label: "Prize Pool (₹)", tint: "bg-tangerine/10 text-tangerine" },
];

function Counter({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const [started, setStarted] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 -mt-4 mb-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        onViewportEnter={() => setStarted(true)}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-xl3 shadow-soft p-6 md:p-8"
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 14, delay: i * 0.08 }}
            className="text-center"
          >
            <div className={`w-12 h-12 mx-auto mb-3 rounded-2xl flex items-center justify-center ${s.tint}`}>
              <s.icon size={22} />
            </div>
            <p className="font-heading text-3xl font-semibold">
              <Counter target={s.value} suffix={s.suffix} started={started} />
            </p>
            <p className="text-xs text-ink/50 font-medium mt-1">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
