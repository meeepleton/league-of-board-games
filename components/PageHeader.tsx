"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Reusable banner-style page header — used at the top of every inner page
// (About, League & Championship, Registration, Schedule, Points Table,
// Rules, Contact, etc.) instead of the old plain centered text heading.
//
// Renders full-bleed (edge to edge, no rounded corners), regardless of
// whatever padding/max-width container it's placed inside — the
// left-1/2 / -mx-[50vw] trick below breaks it out of any parent wrapper.
//
// Usage:
//   <PageHeader
//     title="League & Championship Format"
//     subtitle="What League of Board Games is, how the league runs, and how
//       the championship rounds decide the winners."
//   />

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden mb-14 md:mb-16"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/page-header-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden
        />
      </div>

      {/* Dark gradient overlay so white text stays readable */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15"
        aria-hidden
      />

      {/* Content — slim, single-line-friendly padding, centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-11 md:py-14 text-center">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold mb-2">
            {eyebrow}
          </span>
        )}
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1.5 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 text-sm max-w-xl mx-auto">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
