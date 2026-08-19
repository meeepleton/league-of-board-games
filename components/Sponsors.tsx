// "use client";

// import sponsors from "@/data/sponsors.json";

// export default function Sponsors() {
//   const all = [...sponsors.title, ...sponsors.partners, ...sponsors.title, ...sponsors.partners];
//   return (
//     <section className="py-20 overflow-hidden">
//       <h2 className="font-heading text-4xl font-semibold text-center mb-12">Sponsors &amp; Partners</h2>
//       <div className="flex whitespace-nowrap">
//         <div className="marquee-track flex gap-16 pr-16">
//           {all.map((s, i) => (
//             <span key={i} className="text-xl font-heading font-semibold text-ink/30 shrink-0">
//               {s.name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import sponsors from "@/data/sponsors.json";

type TopItem = { name: string; logo: string; category: string };
type SponsorItem = { name: string; logo: string };
type SponsorsData = { top: TopItem[]; marquee: SponsorItem[] };

const data = sponsors as SponsorsData;

// Some logos sit on a lot of internal whitespace and look small even inside
// a bigger tile — give those specific names less inner padding so the mark
// itself reads bigger. Add more names here anytime a logo looks too small.
const TIGHT_PADDING_LOGOS = new Set(["Everich"]);

function logoPadding(name: string) {
  return TIGHT_PADDING_LOGOS.has(name) ? "p-1.5" : "p-3";
}

// De-duplicate the marquee list by name, in case a partner appears more
// than once across categories (e.g. Meepleton under multiple roles)
const dedupedMarquee: SponsorItem[] = Array.from(
  new Map(data.marquee.map((item) => [item.name, item])).values()
);

// Repeat 3x so the scroll loops seamlessly with no visible gap
const marqueeRow = [...dedupedMarquee, ...dedupedMarquee, ...dedupedMarquee];

export default function Sponsors() {
  return (
    <section className="py-20 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading text-4xl font-semibold text-center mb-14"
      >
        Sponsors &amp; Partners
      </motion.h2>

      {/* Top 4 — static grid: 2x2 on mobile, all 4 in one row on desktop */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-16">
        {data.top.map((item, i) => (
          <motion.div
            key={item.name + i}
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: i * 0.08 }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-xl2 bg-white shadow-softer overflow-hidden">
              <Image
                src={item.logo}
                alt={item.name}
                fill
                className={`object-contain ${logoPadding(item.name)}`}
              />
            </div>
            <div className="text-center">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/40 block mb-0.5">
                {item.category}
              </span>
              <span className="text-xs text-ink/60 font-medium">{item.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Everything else — floating marquee */}
      <div className="flex whitespace-nowrap">
        <div className="marquee-track flex items-center gap-10 pr-10">
          {marqueeRow.map((s, i) => (
            <div
              key={s.name + i}
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl2 bg-white shadow-softer overflow-hidden shrink-0"
            >
              <Image
                src={s.logo}
                alt={s.name}
                fill
                className={`object-contain ${logoPadding(s.name)}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



