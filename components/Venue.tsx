// "use client";

// import { motion } from "framer-motion";
// import { Car, Hotel, Trophy, Sofa } from "lucide-react";

// const FACILITIES = [
//   { icon: Car, title: "Parking", desc: "On-site parking for 300+ vehicles", bar: "bg-forest", tint: "bg-forest/10 text-forest" },
//   { icon: Hotel, title: "Nearby Hotels", desc: "5+ hotels within 2 km, all price ranges", bar: "bg-sky", tint: "bg-sky/10 text-sky" },
//   { icon: Trophy, title: "Tournament Halls", desc: "Dedicated, air-conditioned competition floors", bar: "bg-cherry", tint: "bg-cherry/10 text-cherry" },
//   { icon: Sofa, title: "Casual Lounges", desc: "Relaxed spaces for open play between rounds", bar: "bg-gold", tint: "bg-gold/20 text-ink" },
// ];

// const MAP_QUERY = "Meepleton%2C%20Danish%20Kunj%2C%20Bhopal%2C%20Madhya%20Pradesh";

// export default function Venue() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
//       <motion.div
//         initial={{ opacity: 0, x: -28 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, margin: "-60px" }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="rounded-xl3 overflow-hidden shadow-soft aspect-[4/3]"
//       >
//         <iframe
//           title="Venue location map"
//           src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           className="w-full h-full"
//         />
//       </motion.div>

//       <div>
//         <motion.h2
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="font-heading text-4xl font-semibold mb-4"
//         >
//           Venue
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.08 }}
//           className="text-ink/70 mb-6"
//         >
//           Meepleton, Danish Kunj, Bhopal, Madhya Pradesh — a spacious,
//           air-conditioned venue with dedicated tournament halls and casual play lounges.
//         </motion.p>

//         <div className="grid grid-cols-2 gap-4">
//           {FACILITIES.map((f, i) => (
//             <motion.div
//               key={f.title}
//               initial={{ opacity: 0, y: 20, scale: 0.94 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ type: "spring", stiffness: 150, damping: 15, delay: i * 0.08 }}
//               whileHover={{ y: -5 }}
//               className="relative overflow-hidden bg-white rounded-xl2 p-4 shadow-softer"
//             >
//               <span className={`absolute top-0 left-0 right-0 h-1 ${f.bar}`} aria-hidden />
//               <div className={`w-9 h-9 rounded-xl mb-2 flex items-center justify-center ${f.tint}`}>
//                 <f.icon size={18} />
//               </div>
//               <span className="font-semibold block mb-1 text-sm">{f.title}</span>
//               <span className="text-ink/60 text-xs">{f.desc}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Car, Hotel, Trophy, Sofa, MapPin } from "lucide-react";

const FACILITIES = [
  { icon: Car, title: "Parking", desc: "On-site parking for vehicles", bar: "bg-forest", tint: "bg-forest/10 text-forest" },
  { icon: Hotel, title: "Nearby Hotels", desc: "5+ hotels within 2 km, all price ranges", bar: "bg-sky", tint: "bg-sky/10 text-sky" },
  { icon: Trophy, title: "Tournament Halls", desc: "Dedicated, air-conditioned competition floors", bar: "bg-cherry", tint: "bg-cherry/10 text-cherry" },
  { icon: Sofa, title: "Casual Lounges", desc: "Relaxed spaces for open play between rounds", bar: "bg-gold", tint: "bg-gold/20 text-ink" },
];

const VENUES = [
  {
    name: "Meepleton Board Game Cafe",
    logo: "/meepleton-logo.jpeg",
    address: "Danish Kunj, Bhopal, Madhya Pradesh",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=23.173437,77.425072",
  },
  {
    name: "Poppin' Deli",
    logo: "/poppin-deli-logo.jpeg",
    address: "Bhopal, Madhya Pradesh",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=23.219961,77.434639",
  },
];

export default function Venue() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading text-4xl font-semibold text-center mb-4"
      >
        Venue
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-ink/70 text-center max-w-2xl mx-auto mb-12"
      >
        Two spacious, air-conditioned venues hosting dedicated tournament halls and
        casual play lounges across the League.
      </motion.p>

      {/* Logos + addresses, side by side per venue */}
      <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-12">
        {VENUES.map((v, i) => (
          <motion.a
            key={v.name}
            href={v.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 140, damping: 16, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-soft mb-4">
              <Image src={v.logo} alt={`${v.name} logo`} fill className="object-cover" />
            </div>
            <h3 className="font-semibold mb-1 group-hover:text-cherry transition-colors">
              {v.name}
            </h3>
            <span className="flex items-center gap-1.5 text-sm text-ink/60">
              <MapPin size={14} className="shrink-0" />
              {v.address}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Facilities */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {FACILITIES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden bg-white rounded-xl2 p-4 shadow-softer"
          >
            <span className={`absolute top-0 left-0 right-0 h-1 ${f.bar}`} aria-hidden />
            <div className={`w-9 h-9 rounded-xl mb-2 flex items-center justify-center ${f.tint}`}>
              <f.icon size={18} />
            </div>
            <span className="font-semibold block mb-1 text-sm">{f.title}</span>
            <span className="text-ink/60 text-xs">{f.desc}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}