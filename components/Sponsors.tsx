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
import sponsors from "@/data/sponsors.json";

const PILL_TINTS = [
  "bg-forest-light/25 text-forest-dark",
  "bg-cherry-light/25 text-cherry-dark",
  "bg-gold-light/40 text-ink",
  "bg-sky-light/35 text-sky-dark",
  "bg-tangerine-light/25 text-tangerine-dark",
];

export default function Sponsors() {
  const titleRow = [...sponsors.title, ...sponsors.title, ...sponsors.title];
  const partnerRow = [...sponsors.partners, ...sponsors.partners, ...sponsors.partners];

  return (
    <section className="py-20 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading text-4xl font-semibold text-center mb-12"
      >
        Sponsors &amp; Partners
      </motion.h2>

      {/* Title sponsors — large text, scrolls left */}
      <div className="flex whitespace-nowrap mb-6">
        <div className="marquee-track flex gap-16 pr-16">
          {titleRow.map((s, i) => (
            <span key={i} className="text-xl font-heading font-semibold text-ink/30 shrink-0">
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* Community partners — colored pills, scrolls right */}
      <div className="flex whitespace-nowrap">
        <div className="marquee-track-reverse flex gap-4 pr-4">
          {partnerRow.map((s, i) => (
            <span
              key={i}
              className={`text-sm font-semibold px-4 py-2 rounded-full shrink-0 ${PILL_TINTS[i % PILL_TINTS.length]}`}
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
