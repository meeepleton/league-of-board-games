"use client";

import { motion } from "framer-motion";
import { CalendarDays, Ticket, CheckCircle2, ListOrdered } from "lucide-react";

const PASSES = [
  { name: "Solo Pass", price: "₹1,499", desc: "Full access to league stage + one championship of your choice." },
  { name: "Team Pass (4)", price: "₹4,999", desc: "Register a full team of 4 for the league stage and all championships." },
  { name: "Spectator Pass", price: "₹299", desc: "Watch all matches, attend workshops, join social evenings." },
];

const STEPS = [
  "Choose your pass type",
  "Fill in player / team details",
  "Select your championship categories",
  "Complete payment",
  "Receive confirmation & table assignment",
];

const SESSIONS = [
  { date: "12 Sep", time: "4:00 PM", instructor: "Ritika Shah", desc: "Euro Games 101 — mechanics, tips, and strategy basics." },
  { date: "13 Sep", time: "4:30 PM", instructor: "Arjun Desai", desc: "Intro to Game Design — build your own prototype." },
];

export default function RegistrationPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Registration</h1>
        <p className="text-ink/60">Registrations open 1 Aug 2026 and close 5 Sep 2026.</p>
      </div>

      <section className="grid sm:grid-cols-2 gap-4 mb-16">
        <div className="bg-white rounded-xl2 p-6 shadow-softer flex gap-4 items-start">
          <CalendarDays className="text-forest shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Registration Window</h3>
            <p className="text-sm text-ink/60">1 Aug – 5 Sep 2026</p>
          </div>
        </div>
        <div className="bg-white rounded-xl2 p-6 shadow-softer flex gap-4 items-start">
          <Ticket className="text-cherry shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Event Dates</h3>
            <p className="text-sm text-ink/60">12 – 14 Sep 2026</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-3xl font-semibold mb-8 text-center">Pass Types</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PASSES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="tilt-card bg-white rounded-xl2 p-6 shadow-softer"
            >
              <h3 className="font-heading text-xl font-semibold mb-1">{p.name}</h3>
              <p className="text-2xl font-semibold text-cherry mb-3">{p.price}</p>
              <p className="text-sm text-ink/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-forest/5 rounded-xl3 p-8">
        <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
          <CheckCircle2 className="text-forest" /> What&apos;s Included
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-ink/70">
          <li>✓ All game equipment and tables</li>
          <li>✓ League & championship entry</li>
          <li>✓ Learning session access</li>
          <li>✓ Event kit & scorecards</li>
          <li>✓ Social evening entry</li>
          <li>✓ Certificate of participation</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
          <ListOrdered className="text-sky" /> Registration Steps
        </h2>
        <ol className="space-y-3">
          {STEPS.map((s, i) => (
            <li key={s} className="flex gap-4 items-center bg-white rounded-xl2 p-4 shadow-softer">
              <span className="w-8 h-8 rounded-full bg-sky/15 text-sky flex items-center justify-center font-semibold text-sm shrink-0">
                {i + 1}
              </span>
              <span className="text-sm">{s}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-2xl font-semibold mb-6">Learning Sessions</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {SESSIONS.map((s) => (
            <div key={s.instructor} className="bg-white rounded-xl2 p-5 shadow-softer">
              <div className="flex justify-between text-sm text-ink/50 mb-2">
                <span>{s.date}</span>
                <span>{s.time}</span>
              </div>
              <p className="font-semibold mb-1">{s.instructor}</p>
              <p className="text-sm text-ink/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <a
          href="https://forms.gle/your-registration-form"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-scale inline-block bg-cherry text-cream px-10 py-4 rounded-full font-semibold shadow-soft"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
