// import team from "@/data/team.json";

// function TeamGroup({ title, members }: { title: string; members: { name: string; role: string }[] }) {
//   return (
//     <div className="mb-12">
//       <h3 className="font-heading text-2xl font-semibold mb-6">{title}</h3>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {members.map((m) => (
//           <div key={m.name} className="tilt-card bg-white rounded-xl2 p-6 shadow-softer flex items-center gap-4">
//             <div className="w-12 h-12 rounded-full bg-sky/15 flex items-center justify-center font-heading text-sky font-semibold">
//               {m.name.charAt(0)}
//             </div>
//             <div>
//               <p className="font-semibold">{m.name}</p>
//               <p className="text-sm text-ink/60">{m.role}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function AboutPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
//       <div className="text-center mb-16">
//         <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">About Us</h1>
//         <p className="text-ink/60 max-w-2xl mx-auto">
//           Meeple Masters started as a living-room game night and grew into the country&apos;s
//           largest tabletop gaming festival.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8 mb-20">
//         <div className="bg-forest/5 rounded-xl3 p-8">
//           <h3 className="font-heading text-xl font-semibold mb-3">Our Mission</h3>
//           <p className="text-sm text-ink/70">
//             To build the country&apos;s most welcoming competitive tabletop community, where
//             strategy, story and sportsmanship matter equally.
//           </p>
//         </div>
//         <div className="bg-sky/5 rounded-xl3 p-8">
//           <h3 className="font-heading text-xl font-semibold mb-3">Our Vision</h3>
//           <p className="text-sm text-ink/70">
//             A yearly festival that puts board games on the same stage as any national sport —
//             celebrated, competitive, and fun for everyone.
//           </p>
//         </div>
//       </div>

//       <TeamGroup title="Organisers" members={team.organisers} />
//       <TeamGroup title="Volunteers" members={team.volunteers} />
//       <TeamGroup title="Community Partners" members={team.partners} />

//       <div>
//         <h3 className="font-heading text-2xl font-semibold mb-6">Gallery</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//           {Array.from({ length: 8 }).map((_, i) => (
//             <div key={i} className="aspect-square rounded-xl2 bg-gold/10 flex items-center justify-center text-3xl">
//               {["🎲","🃏","♟️","🧩","🏆","🎉","🀄","🎯"][i]}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import team from "@/data/team.json";

// function TeamGroup({ title, members }: { title: string; members: { name: string; role: string }[] }) {
//   return (
//     <div className="mb-12">
//       <h3 className="font-heading text-2xl font-semibold mb-6">{title}</h3>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {members.map((m, i) => (
//           <motion.div
//             key={m.name}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
//             className="tilt-card bg-white rounded-xl2 p-6 shadow-softer flex items-center gap-4"
//           >
//             <div className="w-12 h-12 rounded-full bg-sky/15 flex items-center justify-center font-heading text-sky font-semibold">
//               {m.name.charAt(0)}
//             </div>
//             <div>
//               <p className="font-semibold">{m.name}</p>
//               <p className="text-sm text-ink/60">{m.role}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function AboutPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-16"
//       >
//         <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">About Us</h1>
//         <p className="text-ink/60 max-w-2xl mx-auto">
//           Meeple Masters started as a living-room game night and grew into the country&apos;s
//           largest tabletop gaming festival.
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-2 gap-8 mb-20">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="bg-forest/5 rounded-xl3 p-8"
//         >
//           <h3 className="font-heading text-xl font-semibold mb-3">Our Mission</h3>
//           <p className="text-sm text-ink/70">
//             To build the country&apos;s most welcoming competitive tabletop community, where
//             strategy, story and sportsmanship matter equally.
//           </p>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="bg-sky/5 rounded-xl3 p-8"
//         >
//           <h3 className="font-heading text-xl font-semibold mb-3">Our Vision</h3>
//           <p className="text-sm text-ink/70">
//             A yearly festival that puts board games on the same stage as any national sport —
//             celebrated, competitive, and fun for everyone.
//           </p>
//         </motion.div>
//       </div>

//       <TeamGroup title="Organisers" members={team.organisers} />
//       <TeamGroup title="Volunteers" members={team.volunteers} />
//       <TeamGroup title="Community Partners" members={team.partners} />

//       <div>
//         <h3 className="font-heading text-2xl font-semibold mb-6">Gallery</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//           {Array.from({ length: 8 }).map((_, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.35, delay: i * 0.05 }}
//               className="tilt-card aspect-square rounded-xl2 bg-gold/10 flex items-center justify-center text-3xl"
//             >
//               {["🎲","🃏","♟️","🧩","🏆","🎉","🀄","🎯"][i]}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { motion } from "framer-motion";
import team from "@/data/team.json";

function TeamGroup({
  title,
  members,
  avatarTint,
}: {
  title: string;
  members: { name: string; role: string }[];
  avatarTint: string;
}) {
  return (
    <div className="mb-12">
      <h3 className="font-heading text-2xl font-semibold mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 16, delay: (i % 6) * 0.06 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl2 p-6 shadow-softer flex items-center gap-4"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-semibold ${avatarTint}`}>
              {m.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{m.name}</p>
              <p className="text-sm text-ink/60">{m.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">About Us</h1>
        <p className="text-ink/60 max-w-2xl mx-auto">
          Meeple Masters started as a living-room game night and grew into the country&apos;s
          largest tabletop gaming festival.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-forest-light/15 rounded-xl3 p-8"
        >
          <span className="absolute top-0 left-0 bottom-0 w-1.5 bg-forest" aria-hidden />
          <h3 className="font-heading text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-sm text-ink/70">
            To build the country&apos;s most welcoming competitive tabletop community, where
            strategy, story and sportsmanship matter equally.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden bg-sky-light/20 rounded-xl3 p-8"
        >
          <span className="absolute top-0 left-0 bottom-0 w-1.5 bg-sky" aria-hidden />
          <h3 className="font-heading text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-sm text-ink/70">
            A yearly festival that puts board games on the same stage as any national sport —
            celebrated, competitive, and fun for everyone.
          </p>
        </motion.div>
      </div>

      <TeamGroup title="Organisers" members={team.organisers} avatarTint="bg-forest-light/30 text-forest-dark" />
      <TeamGroup title="Volunteers" members={team.volunteers} avatarTint="bg-cherry-light/30 text-cherry-dark" />
      <TeamGroup title="Community Partners" members={team.partners} avatarTint="bg-sky-light/40 text-sky-dark" />

      <div>
        <h3 className="font-heading text-2xl font-semibold mb-6">Gallery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["🎲", "🃏", "♟️", "🧩", "🏆", "🎉", "🀄", "🎯"].map((emoji, i) => {
            const tints = ["bg-gold-light/40", "bg-forest-light/25", "bg-cherry-light/25", "bg-sky-light/35", "bg-tangerine-light/25"];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`aspect-square rounded-xl2 flex items-center justify-center text-3xl ${tints[i % tints.length]}`}
              >
                {emoji}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
