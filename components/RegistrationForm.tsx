"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, ChevronDown, User, Mail, Phone, CheckCircle2 } from "lucide-react";
import passesData from "@/data/passes.json";
import gamesData from "@/data/registrationGames.json";

type Pass = {
  id: string;
  name: string;
  description: string;
  price: number;
  earlyBirdPrice: number;
  gamesRequired: number;
  earlyBirdDeadline: string;
};

const COUNTRY_CODES = ["+91", "+1", "+44", "+61", "+971"];

function useCountdown(deadline: string) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const target = new Date(deadline).getTime();

    function tick() {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTimeLeft("Early bird pricing has ended");
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
    }

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  return timeLeft;
}

export default function RegistrationForm() {
  const passes = passesData as Pass[];
  const [selectedPassId, setSelectedPassId] = useState(passes[0].id);
  const selectedPass = passes.find((p) => p.id === selectedPassId)!;
  const countdown = useCountdown(selectedPass.earlyBirdDeadline);

  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Reset game selection whenever the pass changes, since each pass has a different required count
  useEffect(() => {
    setSelectedGames([]);
  }, [selectedPassId]);

  function toggleGame(id: string, slotsLeft: number) {
    if (slotsLeft <= 0) return;
    setSelectedGames((prev) => {
      if (prev.includes(id)) return prev.filter((g) => g !== id);
      if (prev.length >= selectedPass.gamesRequired) return prev; // at max, ignore further clicks
      return [...prev, id];
    });
  }

  const gamesValid = selectedGames.length === selectedPass.gamesRequired;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!fullName.trim()) newErrors.push("Full name is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.push("Enter a valid email address.");
    if (!/^\d{10}$/.test(mobile)) newErrors.push("Enter a valid 10-digit mobile number.");
    if (!gamesValid) newErrors.push(`Select exactly ${selectedPass.gamesRequired} game${selectedPass.gamesRequired > 1 ? "s" : ""}.`);

    setErrors(newErrors);
    if (newErrors.length === 0) {
      // No backend is connected yet — see the setup notes for how to wire this
      // submit handler to a real destination (Formspree, Google Form, etc.).
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl3 shadow-soft p-10 text-center"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-forest-light/25 text-forest-dark flex items-center justify-center">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="font-heading text-2xl font-semibold mb-2">Registration received!</h3>
        <p className="text-ink/60 text-sm max-w-sm mx-auto">
          Thanks, {fullName.split(" ")[0]}. We&apos;ve noted your {selectedPass.name} selection —
          a confirmation will be sent to {email} shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-cherry text-cream flex items-center justify-center rotate-[-4deg]">
          <Ticket size={26} />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-2">Secure Your Game Pass</h2>
        <p className="text-ink/60 max-w-md mx-auto">
          Select your pass and reserve your spot at the festival.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl3 shadow-soft p-6 md:p-10"
      >
        {/* Pass selector */}
        <label className="block text-sm font-semibold mb-2">Select Game Pass</label>
        <div className="relative mb-6">
          <select
            value={selectedPassId}
            onChange={(e) => setSelectedPassId(e.target.value)}
            className="w-full appearance-none rounded-xl2 border border-ink/15 focus:border-cherry focus:ring-2 focus:ring-cherry/20 outline-none px-4 py-3.5 text-sm font-medium bg-white"
          >
            {passes.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/40" size={18} />
        </div>

        {/* Selected pass details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPass.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="bg-cream rounded-xl2 p-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div>
              <h3 className="font-heading text-xl font-semibold mb-1">{selectedPass.name}</h3>
              <p className="text-sm text-ink/60 max-w-sm">{selectedPass.description}</p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
              <span className="inline-block bg-gold-light/40 text-ink text-xs font-semibold px-3 py-1 rounded-full">
                Meeple Masters 2026
              </span>
              <span className="flex items-baseline gap-2">
                <span className="font-heading text-2xl font-semibold text-cherry">
                  ₹{selectedPass.earlyBirdPrice}
                </span>
                <span className="text-sm text-ink/40 line-through">₹{selectedPass.price}</span>
              </span>
              <span className="text-xs font-semibold bg-cherry-light/25 text-cherry-dark px-3 py-1 rounded-full">
                {countdown}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Game selection */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-lg font-semibold">Select Your Games</h3>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              gamesValid ? "bg-forest-light/25 text-forest-dark" : "bg-ink/5 text-ink/50"
            }`}
          >
            {selectedGames.length} / {selectedPass.gamesRequired} Selected
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {(gamesData as typeof gamesData).map((g) => {
            const isFull = g.slotsLeft <= 0;
            const isSelected = selectedGames.includes(g.id);
            const atMax = selectedGames.length >= selectedPass.gamesRequired && !isSelected;
            const disabled = isFull || atMax;

            return (
              <label
                key={g.id}
                className={`relative rounded-xl2 border p-4 flex gap-3 transition-colors ${
                  isSelected
                    ? "border-cherry bg-cherry-light/10"
                    : disabled
                    ? "border-ink/10 bg-ink/[0.02] opacity-60 cursor-not-allowed"
                    : "border-ink/10 hover:border-cherry/40 cursor-pointer"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  disabled={disabled}
                  onChange={() => toggleGame(g.id, g.slotsLeft)}
                  className="mt-1 w-4 h-4 accent-cherry shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-sm">{g.name}</p>
                      <p className="text-xs text-ink/50">{g.category}</p>
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                        isFull ? "bg-cherry-light/25 text-cherry-dark" : "bg-forest-light/25 text-forest-dark"
                      }`}
                    >
                      {isFull ? "Full" : `${g.slotsLeft} slots left`}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[11px] border border-ink/15 text-ink/60 px-2 py-0.5 rounded-full">
                      {g.players}
                    </span>
                    <span className="text-[11px] border border-ink/15 text-ink/60 px-2 py-0.5 rounded-full">
                      {g.duration}
                    </span>
                  </div>
                </div>
              </label>
            );
          })}
        </div>

        <hr className="border-ink/10 mb-8" />

        {/* Player details */}
        <h3 className="font-heading text-lg font-semibold mb-4">Player Details</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" size={16} />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Alex Doe"
                className="w-full rounded-xl2 border border-ink/15 focus:border-cherry focus:ring-2 focus:ring-cherry/20 outline-none pl-11 pr-4 py-3 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" size={16} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.com"
                className="w-full rounded-xl2 border border-ink/15 focus:border-cherry focus:ring-2 focus:ring-cherry/20 outline-none pl-11 pr-4 py-3 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-1.5">Mobile Number</label>
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="rounded-xl2 border border-ink/15 focus:border-cherry outline-none px-3 py-3 text-sm bg-white"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <div className="relative flex-1">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" size={16} />
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="9876543210"
                className="w-full rounded-xl2 border border-ink/15 focus:border-cherry focus:ring-2 focus:ring-cherry/20 outline-none pl-11 pr-4 py-3 text-sm"
              />
            </div>
          </div>
        </div>

        {errors.length > 0 && (
          <div className="mb-6 bg-cherry-light/15 text-cherry-dark text-sm rounded-xl2 p-4 space-y-1">
            {errors.map((err) => (
              <p key={err}>• {err}</p>
            ))}
          </div>
        )}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-cherry text-cream rounded-full py-4 font-semibold shadow-soft"
        >
          Confirm Registration
        </motion.button>
      </motion.form>
    </div>
  );
}
