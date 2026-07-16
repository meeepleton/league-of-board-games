"use client";

import sponsors from "@/data/sponsors.json";

export default function Sponsors() {
  const all = [...sponsors.title, ...sponsors.partners, ...sponsors.title, ...sponsors.partners];
  return (
    <section className="py-20 overflow-hidden">
      <h2 className="font-heading text-4xl font-semibold text-center mb-12">Sponsors &amp; Partners</h2>
      <div className="flex whitespace-nowrap">
        <div className="marquee-track flex gap-16 pr-16">
          {all.map((s, i) => (
            <span key={i} className="text-xl font-heading font-semibold text-ink/30 shrink-0">
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
