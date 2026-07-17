// // "use client";

// // import { motion } from "framer-motion";
// // import games from "@/data/games.json";

// // const colorMap: Record<string, string> = {
// //   forest: "bg-forest/10 text-forest",
// //   cherry: "bg-cherry/10 text-cherry",
// //   sky: "bg-sky/10 text-sky",
// //   gold: "bg-gold/15 text-ink",
// //   tangerine: "bg-tangerine/10 text-tangerine",
// // };

// // export default function GamesGrid() {
// //   return (
// //     <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
// //       <div className="text-center mb-12">
// //         <h2 className="font-heading text-4xl font-semibold mb-3">Games Included</h2>
// //         <p className="text-ink/60 max-w-xl mx-auto">
// //           Eight game categories, dozens of tables — pick your favourite or discover a new one.
// //         </p>
// //       </div>

// //       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {games.map((g, i) => (
// //           <motion.div
// //             key={g.id}
// //             initial={{ opacity: 0, y: 24 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
// //             className="tilt-card bg-white rounded-xl2 p-6 shadow-softer"
// //           >
// //             <div className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center text-2xl ${colorMap[g.color]}`}>
// //               🎲
// //             </div>
// //             <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
// //               {g.category}
// //             </span>
// //             <h3 className="font-heading text-xl font-semibold mt-1 mb-2">{g.name}</h3>
// //             <p className="text-sm text-ink/60">{g.description}</p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import games from "@/data/games.json";

// const colorMap: Record<string, string> = {
//   forest: "bg-forest/10 text-forest",
//   cherry: "bg-cherry/10 text-cherry",
//   sky: "bg-sky/10 text-sky",
//   gold: "bg-gold/15 text-ink",
//   tangerine: "bg-tangerine/10 text-tangerine",
// };

// export default function GamesGrid() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
//       <div className="text-center mb-12">
//         <h2 className="font-heading text-4xl font-semibold mb-3">Games Included</h2>
//         <p className="text-ink/60 max-w-xl mx-auto">
//           Eight game categories, dozens of tables — pick your favourite or discover a new one.
//         </p>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {games.map((g, i) => (
//           <motion.div
//             key={g.id}
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
//           >
//             <Link
//               href={`/games/${g.id}`}
//               className="tilt-card block bg-white rounded-xl2 p-6 shadow-softer h-full"
//             >
//               <div className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center text-2xl ${colorMap[g.color]}`}>
//                 🎲
//               </div>
//               <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
//                 {g.category}
//               </span>
//               <h3 className="font-heading text-xl font-semibold mt-1 mb-2">{g.name}</h3>
//               <p className="text-sm text-ink/60">{g.description}</p>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import games from "@/data/games.json";

const colorMap: Record<string, string> = {
  forest: "bg-forest-light/25 text-forest-dark",
  cherry: "bg-cherry-light/25 text-cherry-dark",
  sky: "bg-sky-light/35 text-sky-dark",
  gold: "bg-gold-light/40 text-ink",
  tangerine: "bg-tangerine-light/25 text-tangerine-dark",
};

const barMap: Record<string, string> = {
  forest: "bg-forest",
  cherry: "bg-cherry",
  sky: "bg-sky",
  gold: "bg-gold",
  tangerine: "bg-tangerine",
};

export default function GamesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-4xl font-semibold mb-3">Games Included</h2>
        <p className="text-ink/60 max-w-xl mx-auto">
          Eight game categories, dozens of tables — pick your favourite or discover a new one.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((g, i) => (
          <motion.div
            key={g.id}
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 140, damping: 16, delay: (i % 4) * 0.07 }}
          >
            <Link href={`/games/${g.id}`} className="block h-full">
              <motion.div
                whileHover={{ y: -8 }}
                className="relative overflow-hidden bg-white rounded-xl2 p-6 shadow-softer h-full"
              >
                <span className={`absolute top-0 left-0 right-0 h-1.5 ${barMap[g.color]}`} aria-hidden />
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center text-2xl ${colorMap[g.color]}`}
                >
                  🎲
                </motion.div>
                <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                  {g.category}
                </span>
                <h3 className="font-heading text-xl font-semibold mt-1 mb-2">{g.name}</h3>
                <p className="text-sm text-ink/60">{g.description}</p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
