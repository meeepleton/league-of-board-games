"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

export default function ComingSoon({
  icon: Icon,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const isExternal = ctaHref?.startsWith("http");

  return (
    <div className="flex flex-col items-center text-center py-16 px-6">
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -6, 6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 rounded-full bg-gold-light/40 flex items-center justify-center mb-6 shadow-softer"
      >
        <Icon size={40} className="text-ink" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-heading text-2xl md:text-3xl font-semibold mb-3"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="text-ink/60 max-w-md mb-6"
      >
        {subtitle}
      </motion.p>

      {/* CTA moved up, right below the subtitle, so it's visible without scrolling */}
      {ctaLabel && ctaHref && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mb-10"
        >
          <Link
            href={ctaHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="btn-scale inline-block bg-ink text-cream px-7 py-3.5 rounded-full font-semibold text-sm shadow-soft"
          >
            {ctaLabel}
          </Link>
        </motion.div>
      )}

      {/* Fake shimmering rows to hint at the content that's coming */}
      <div className="w-full max-w-md space-y-3">
        {[0, 1, 2].map((row) => (
          <motion.div
            key={row}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32 + row * 0.08 }}
            className="h-10 rounded-xl2 bg-ink/5 overflow-hidden relative"
          >
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: row * 0.2 }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}