"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Dice5 } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/registration", label: "Registration" },
  { href: "/points-table", label: "Points Table" },
  { href: "/schedule", label: "Schedule" },
  { href: "/rules", label: "Rules" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-softer" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-semibold">
          <span className="w-9 h-9 rounded-xl2 bg-cherry text-cream flex items-center justify-center rotate-[-6deg]">
            <Dice5 size={20} />
          </span>
          EVENT-BG
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-cherry transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/registration"
          className="hidden lg:inline-block btn-scale bg-ink text-cream px-5 py-2.5 rounded-full font-semibold text-sm shadow-soft"
        >
          Register
        </Link>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-ink/10 px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-medium">
              {l.label}
            </Link>
          ))}
          <Link
            href="/registration"
            onClick={() => setOpen(false)}
            className="bg-ink text-cream text-center px-5 py-2.5 rounded-full font-semibold text-sm"
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
