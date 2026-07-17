// "use client";

// import { motion } from "framer-motion";
// import { CalendarDays, Ticket, CheckCircle2, ListOrdered } from "lucide-react";

// const PASSES = [
//   { name: "Solo Pass", price: "₹1,499", desc: "Full access to league stage + one championship of your choice." },
//   { name: "Team Pass (4)", price: "₹4,999", desc: "Register a full team of 4 for the league stage and all championships." },
//   { name: "Spectator Pass", price: "₹299", desc: "Watch all matches, attend workshops, join social evenings." },
// ];

// const STEPS = [
//   "Choose your pass type",
//   "Fill in player / team details",
//   "Select your championship categories",
//   "Complete payment",
//   "Receive confirmation & table assignment",
// ];

// const SESSIONS = [
//   { date: "12 Sep", time: "4:00 PM", instructor: "Ritika Shah", desc: "Euro Games 101 — mechanics, tips, and strategy basics." },
//   { date: "13 Sep", time: "4:30 PM", instructor: "Arjun Desai", desc: "Intro to Game Design — build your own prototype." },
// ];

// export default function RegistrationPage() {
//   return (
//     <div className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-20">
//       <div className="text-center mb-16">
//         <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Registration</h1>
//         <p className="text-ink/60">Registrations open 1 Aug 2026 and close 5 Sep 2026.</p>
//       </div>

//       <section className="grid sm:grid-cols-2 gap-4 mb-16">
//         <div className="bg-white rounded-xl2 p-6 shadow-softer flex gap-4 items-start">
//           <CalendarDays className="text-forest shrink-0" />
//           <div>
//             <h3 className="font-semibold mb-1">Registration Window</h3>
//             <p className="text-sm text-ink/60">1 Aug – 5 Sep 2026</p>
//           </div>
//         </div>
//         <div className="bg-white rounded-xl2 p-6 shadow-softer flex gap-4 items-start">
//           <Ticket className="text-cherry shrink-0" />
//           <div>
//             <h3 className="font-semibold mb-1">Event Dates</h3>
//             <p className="text-sm text-ink/60">12 – 14 Sep 2026</p>
//           </div>
//         </div>
//       </section>

//       <section className="mb-16">
//         <h2 className="font-heading text-3xl font-semibold mb-8 text-center">Pass Types</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {PASSES.map((p, i) => (
//             <motion.div
//               key={p.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="tilt-card bg-white rounded-xl2 p-6 shadow-softer"
//             >
//               <h3 className="font-heading text-xl font-semibold mb-1">{p.name}</h3>
//               <p className="text-2xl font-semibold text-cherry mb-3">{p.price}</p>
//               <p className="text-sm text-ink/60">{p.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <section className="mb-16 bg-forest/5 rounded-xl3 p-8">
//         <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
//           <CheckCircle2 className="text-forest" /> What&apos;s Included
//         </h2>
//         <ul className="grid sm:grid-cols-2 gap-3 text-sm text-ink/70">
//           <li>✓ All game equipment and tables</li>
//           <li>✓ League & championship entry</li>
//           <li>✓ Learning session access</li>
//           <li>✓ Event kit & scorecards</li>
//           <li>✓ Social evening entry</li>
//           <li>✓ Certificate of participation</li>
//         </ul>
//       </section>

//       <section className="mb-16">
//         <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
//           <ListOrdered className="text-sky" /> Registration Steps
//         </h2>
//         <ol className="space-y-3">
//           {STEPS.map((s, i) => (
//             <li key={s} className="flex gap-4 items-center bg-white rounded-xl2 p-4 shadow-softer">
//               <span className="w-8 h-8 rounded-full bg-sky/15 text-sky flex items-center justify-center font-semibold text-sm shrink-0">
//                 {i + 1}
//               </span>
//               <span className="text-sm">{s}</span>
//             </li>
//           ))}
//         </ol>
//       </section>

//       {/* <section className="mb-16">
//         <h2 className="font-heading text-2xl font-semibold mb-6">Learning Sessions</h2>
//         <div className="grid sm:grid-cols-2 gap-4">
//           {SESSIONS.map((s) => (
//             <div key={s.instructor} className="bg-white rounded-xl2 p-5 shadow-softer">
//               <div className="flex justify-between text-sm text-ink/50 mb-2">
//                 <span>{s.date}</span>
//                 <span>{s.time}</span>
//               </div>
//               <p className="font-semibold mb-1">{s.instructor}</p>
//               <p className="text-sm text-ink/60">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section> */}

//       <div className="text-center">
//         <a
//           href="https://forms.gle/your-registration-form"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn-scale inline-block bg-cherry text-cream px-10 py-4 rounded-full font-semibold shadow-soft"
//         >
//           Register Now
//         </a>
//       </div>
//     </div>
//   );
// }




"use client";

import { motion } from "framer-motion";
import { CalendarDays, Ticket, Info, User, Users, Eye } from "lucide-react";

const PASSES = [
  {
    name: "Solo Pass",
    price: "₹1,499",
    desc: "Full access to league stage + one championship of your choice.",
    icon: User,
    bar: "bg-forest",
    tint: "bg-forest-light/25 text-forest-dark",
  },
  {
    name: "Team Pass (4)",
    price: "₹4,999",
    desc: "Register a full team of 4 for the league stage and all championships.",
    icon: Users,
    bar: "bg-cherry",
    tint: "bg-cherry-light/25 text-cherry-dark",
    badge: "Most Popular",
  },
  {
    name: "Spectator Pass",
    price: "₹299",
    desc: "Watch all matches, attend workshops, join social evenings.",
    icon: Eye,
    bar: "bg-tangerine",
    tint: "bg-tangerine-light/25 text-tangerine-dark",
  },
];

export default function RegistrationPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Registration</h1>
        <p className="text-ink/60">Registrations open 1 Aug 2026 and close 5 Sep 2026.</p>
      </motion.div>

      {/* Registration information */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-sky-light/25 rounded-xl3 p-8 mb-16 flex gap-4 items-start"
      >
        <div className="w-10 h-10 shrink-0 rounded-xl bg-sky-dark/15 flex items-center justify-center">
          <Info className="text-sky-dark" size={20} />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-semibold mb-2">Registration Information</h2>
          <p className="text-sm text-ink/70">
            Sign up solo or as a team of up to 4 players, ages 14+. Choose a pass type
            below, fill in your details, and complete payment to confirm your spot.
            All game equipment, tables, and event materials are provided on-site.
          </p>
        </div>
      </motion.section>

      {/* Dates */}
      <section className="grid sm:grid-cols-2 gap-4 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 150, damping: 16 }}
          whileHover={{ y: -4 }}
          className="bg-white rounded-xl2 p-6 shadow-softer flex gap-4 items-start"
        >
          <div className="w-10 h-10 shrink-0 rounded-xl bg-forest-light/25 flex items-center justify-center">
            <CalendarDays className="text-forest-dark" size={18} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Registration Window</h3>
            <p className="text-sm text-ink/60">1 Aug – 5 Sep 2026</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 150, damping: 16, delay: 0.08 }}
          whileHover={{ y: -4 }}
          className="bg-white rounded-xl2 p-6 shadow-softer flex gap-4 items-start"
        >
          <div className="w-10 h-10 shrink-0 rounded-xl bg-cherry-light/25 flex items-center justify-center">
            <Ticket className="text-cherry-dark" size={18} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Event Dates</h3>
            <p className="text-sm text-ink/60">12 – 14 Sep 2026</p>
          </div>
        </motion.div>
      </section>

      {/* Passes */}
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-semibold mb-8 text-center"
        >
          Pass Types
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PASSES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 140, damping: 16, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden bg-white rounded-xl2 p-6 shadow-softer"
            >
              <span className={`absolute top-0 left-0 right-0 h-1.5 ${p.bar}`} aria-hidden />
              {p.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wide bg-gold-light text-ink px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              <div className={`w-11 h-11 rounded-2xl mb-4 flex items-center justify-center ${p.tint}`}>
                <p.icon size={20} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-1">{p.name}</h3>
              <p className="text-2xl font-semibold text-ink mb-3">{p.price}</p>
              <p className="text-sm text-ink/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.a
          href="https://forms.gle/your-registration-form"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block bg-cherry text-cream px-10 py-4 rounded-full font-semibold shadow-soft"
        >
          Register Now
        </motion.a>
      </motion.div>
    </div>
  );
}

