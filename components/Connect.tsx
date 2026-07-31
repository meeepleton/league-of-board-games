"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";

const CARDS = [
  { icon: Instagram, label: "Instagram", value: "@leagueofboardgames", color: "bg-cherry/10 text-cherry" },
  // { icon: MessageCircle, label: "Discord", value: "Join the server", color: "bg-sky/10 text-sky" },
  { icon: Phone, label: "WhatsApp", value: "+91 8989208432", color: "bg-forest/10 text-forest" },
  { icon: Mail, label: "Email", value: "leagueofboardgames@gmail.com", color: "bg-gold/15 text-ink" },
];

export default function Connect() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading text-4xl font-semibold text-center mb-12"
      >
        Connect With Us
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CARDS.map((c, i) => (
          <motion.a
            key={c.label}
            href="#"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`rounded-xl2 p-6 shadow-softer ${c.color} flex flex-col gap-3`}
          >
            <motion.span whileHover={{ rotate: 12 }} transition={{ type: "spring", stiffness: 300 }} className="inline-flex">
              <c.icon size={26} />
            </motion.span>
            <span className="font-semibold text-sm">{c.label}</span>
            <span className="text-xs opacity-70">{c.value}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
