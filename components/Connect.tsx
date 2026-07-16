"use client";

import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";

const CARDS = [
  { icon: Instagram, label: "Instagram", value: "@meeplemasters", color: "bg-cherry/10 text-cherry" },
  { icon: MessageCircle, label: "Discord", value: "Join the server", color: "bg-sky/10 text-sky" },
  { icon: Phone, label: "WhatsApp", value: "+91 98765 43210", color: "bg-forest/10 text-forest" },
  { icon: Mail, label: "Email", value: "hello@meeplemasters.in", color: "bg-gold/15 text-ink" },
];

export default function Connect() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <h2 className="font-heading text-4xl font-semibold text-center mb-12">Connect With Us</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.map((c) => (
          <a
            key={c.label}
            href="#"
            className={`tilt-card rounded-xl2 p-6 ${c.color} flex flex-col gap-3`}
          >
            <c.icon size={26} />
            <span className="font-semibold text-sm">{c.label}</span>
            <span className="text-xs opacity-70">{c.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
