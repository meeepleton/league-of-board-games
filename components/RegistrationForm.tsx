"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ticket,
  ChevronDown,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import Script from "next/script";
import { passService, ClientPass } from "@/api/client/services/pass.service"; // adjust to your actual service path

const COUNTRY_CODES = ["+91", "+1", "+44", "+61", "+971", "+65"];

declare global {
  interface Window {
    Razorpay: any;
  }
}

/**
 * Countdown that mirrors the functional page's logic: the deadline
 * (discountEndsAtMs) is always compared against the current time as seen
 * in Asia/Kolkata, regardless of the visitor's own timezone.
 */
function useCountdown(endsAtMs: number | undefined | null, active: boolean) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!active || !endsAtMs) {
      setTimeLeft("");
      return;
    }

    function tick() {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      });
      const kolkataNow = new Date(formatter.format(now)).getTime();
      const diff = (endsAtMs as number) - kolkataNow;

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
  }, [endsAtMs, active]);

  return timeLeft;
}

export default function RegistrationForm() {
  // Pass list (for the dropdown)
  const [passes, setPasses] = useState<ClientPass[]>([]);
  const [isLoadingPasses, setIsLoadingPasses] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [selectedPassId, setSelectedPassId] = useState<string>("");

  // Selected pass is revalidated via getById whenever selectedPassId changes,
  // rather than reused from the (possibly stale) list data.
  const [selectedPass, setSelectedPass] = useState<ClientPass | null>(null);
  const [isRevalidatingPass, setIsRevalidatingPass] = useState(false);
  const [revalidateError, setRevalidateError] = useState<string | null>(null);

  const countdown = useCountdown(
    selectedPass?.pricing.discountEndsAtMs,
    !!selectedPass?.pricing.hasActiveDiscount,
  );

  const [selectedGames, setSelectedGames] = useState<number[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Load the pass list once on mount.
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const data = await passService.getAll();
        if (!cancelled) {
          setPasses(data);
          if (data.length > 0) setSelectedPassId(String(data[0].id));
        }
      } catch (err) {
        if (!cancelled) {
          setLoadError(
            err instanceof Error ? err.message : "Failed to load passes",
          );
        }
      } finally {
        if (!cancelled) setIsLoadingPasses(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Revalidate the selected pass's data (price, discount, slot counts) every
  // time the selection changes, instead of trusting the initial list fetch.
  useEffect(() => {
    if (!selectedPassId) {
      setSelectedPass(null);
      setRevalidateError(null);
      return;
    }

    let cancelled = false;
    setIsRevalidatingPass(true);
    setRevalidateError(null);

    (async () => {
      try {
        const fresh = await passService.getById(selectedPassId);
        if (!cancelled) setSelectedPass(fresh);
      } catch (err) {
        if (!cancelled) {
          setRevalidateError(
            err instanceof Error ? err.message : "Failed to load pass details",
          );
        }
      } finally {
        if (!cancelled) setIsRevalidatingPass(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [selectedPassId]);

  // Reset game selection whenever the pass changes, since each pass has a
  // different required count (and a different games list).
  useEffect(() => {
    setSelectedGames([]);
  }, [selectedPassId]);

  function toggleGame(id: number, availableSlots: number) {
    if (availableSlots <= 0 || !selectedPass) return;
    setSelectedGames((prev) => {
      if (prev.includes(id)) return prev.filter((g) => g !== id);
      if (prev.length >= selectedPass.requiredSelectionCount) return prev; // at max, ignore further clicks
      return [...prev, id];
    });
  }

  const gamesValid =
    !!selectedPass &&
    selectedGames.length === selectedPass.requiredSelectionCount;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;

    const newErrors: string[] = [];

    if (!selectedPass) newErrors.push("Please select a game pass.");
    if (!fullName.trim()) newErrors.push("Full name is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.push("Enter a valid email address.");
    if (!/^\d{7,15}$/.test(mobile))
      newErrors.push("Enter a valid mobile number.");
    if (!address.trim() || address.trim().length < 5)
      newErrors.push("Enter a valid address.");
    if (!city.trim()) newErrors.push("Enter your city.");
    if (!pincode.trim() || pincode.trim().length < 3)
      newErrors.push("Enter a valid pincode / postal code.");
    if (selectedPass && !gamesValid) {
      newErrors.push(
        `Select exactly ${selectedPass.requiredSelectionCount} game${selectedPass.requiredSelectionCount > 1 ? "s" : ""}.`,
      );
    }

    setErrors(newErrors);
    if (newErrors.length > 0 || !selectedPass) return;

    if (!window.Razorpay) {
      setErrors([
        "Payment gateway is still loading. Please try again in a moment.",
      ]);
      return;
    }

    setIsSubmitting(true);

    // Only clears isSubmitting on failure below — a confirmed payment is the
    // only thing that should set `submitted`.
    let purchaseInitiated = false;

    try {
      const result = await passService.purchaseAPass({
        pass_id: selectedPass.id,
        selected_game_ids: selectedGames,
        buyer: {
          name: fullName.trim(),
          email: email.trim(),
          mobile: mobile.trim(),
          dial_code: countryCode,
          city: city.trim(),
          pincode: pincode.trim(),
          address: address.trim(),
        },
      });

      purchaseInitiated = true;

      const rzp = new window.Razorpay({
        key: result.keyId,
        order_id: result.razorpayOrderId,
        amount: result.amount,
        currency: result.currency,
        name: "Meeple Masters 2026",
        description: selectedPass.name,
        prefill: {
          name: fullName.trim(),
          email: email.trim(),
        },
        handler: () => {
          // TODO: verify payment server-side (signature check against
          // result.transactionId) before trusting this as truly paid —
          // Razorpay's client callback alone isn't proof of payment.
          setIsSubmitting(false);
          setSubmitted(true);
        },
        modal: {
          ondismiss: () => {
            setIsSubmitting(false);
            setErrors(["Payment was cancelled."]);
          },
        },
      });

      rzp.on("payment.failed", () => {
        setIsSubmitting(false);
        setErrors(["Payment failed. Please try again."]);
      });

      rzp.open();
    } catch (err) {
      // Only reachable if purchaseAPass itself failed (before the modal ever
      // opened) — if the modal already opened, its own callbacks own
      // isSubmitting from here on.
      if (!purchaseInitiated) {
        setErrors([
          err instanceof Error ? err.message : "Failed to purchase pass",
        ]);
        setIsSubmitting(false);
      }
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
        <h3 className="font-heading text-2xl font-semibold mb-2">
          Registration received!
        </h3>
        <p className="text-ink/60 text-sm max-w-sm mx-auto">
          Thanks, {fullName.split(" ")[0]}. We&apos;ve noted your{" "}
          {selectedPass?.name} selection — a confirmation will be sent to{" "}
          {email} shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

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
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-2">
          Secure Your Game Pass
        </h2>
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
        className="bg-white rounded-xl3 shadow-soft p-6 md:p-10 relative"
      >
        {isLoadingPasses ? (
          <div className="py-16 text-center">
            <Loader2 className="w-8 h-8 mx-auto animate-spin text-cherry" />
            <p className="mt-4 text-sm text-ink/50">Loading passes...</p>
          </div>
        ) : loadError ? (
          <div className="py-16 text-center">
            <p className="text-cherry-dark font-medium text-sm">{loadError}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 text-sm font-semibold text-cherry hover:text-cherry-dark"
            >
              Try again
            </button>
          </div>
        ) : (
          <>
            {isRevalidatingPass && (
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center rounded-xl3 z-10">
                <Loader2 className="w-5 h-5 animate-spin text-cherry" />
              </div>
            )}

            {/* Pass selector */}
            <label className="block text-sm font-semibold mb-2">
              Select Game Pass
            </label>
            <div className="relative mb-6">
              <select
                value={selectedPassId}
                onChange={(e) => setSelectedPassId(e.target.value)}
                className="w-full appearance-none rounded-xl2 border border-ink/15 focus:border-cherry focus:ring-2 focus:ring-cherry/20 outline-none px-4 py-3.5 text-sm font-medium bg-white"
              >
                {passes.map((p) => (
                  <option key={p.id} value={String(p.id)}>
                    {p.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/40"
                size={18}
              />
            </div>

            {revalidateError && (
              <div className="bg-cherry-light/15 text-cherry-dark text-sm rounded-xl2 p-4 mb-8">
                {revalidateError}
              </div>
            )}

            {/* Selected pass details */}
            {selectedPass && (
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
                    <h3 className="font-heading text-xl font-semibold mb-1">
                      {selectedPass.name}
                    </h3>
                    <p className="text-sm text-ink/60 max-w-sm">
                      {selectedPass.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                    {selectedPass.pricing.hasActiveDiscount &&
                      selectedPass.pricing.discountName && (
                        <span className="inline-block bg-gold-light/40 text-ink text-xs font-semibold px-3 py-1 rounded-full">
                          {selectedPass.pricing.discountName}
                        </span>
                      )}
                    <span className="flex items-baseline gap-2">
                      <span className="font-heading text-2xl font-semibold text-cherry">
                        ₹
                        {selectedPass.pricing.hasActiveDiscount
                          ? selectedPass.pricing.discountedPrice
                          : selectedPass.pricing.basePrice}
                      </span>
                      {selectedPass.pricing.hasActiveDiscount && (
                        <span className="text-sm text-ink/40 line-through">
                          ₹{selectedPass.pricing.basePrice}
                        </span>
                      )}
                    </span>
                    {selectedPass.pricing.hasActiveDiscount && countdown && (
                      <span className="text-xs font-semibold bg-cherry-light/25 text-cherry-dark px-3 py-1 rounded-full">
                        {countdown}
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

            {/* Game selection */}
            {selectedPass && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-lg font-semibold">
                    Select Your Games
                  </h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      gamesValid
                        ? "bg-forest-light/25 text-forest-dark"
                        : "bg-ink/5 text-ink/50"
                    }`}
                  >
                    {selectedGames.length} /{" "}
                    {selectedPass.requiredSelectionCount} Selected
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {selectedPass.games.map((g) => {
                    const isFull = g.availableSlots <= 0;
                    const isSelected = selectedGames.includes(g.id);
                    const atMax =
                      selectedGames.length >=
                        selectedPass.requiredSelectionCount && !isSelected;
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
                          onChange={() => toggleGame(g.id, g.availableSlots)}
                          className="mt-1 w-4 h-4 accent-cherry shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-semibold text-sm">{g.name}</p>
                              <p className="text-xs text-ink/50">{g.genre}</p>
                            </div>
                            <span
                              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                                isFull
                                  ? "bg-cherry-light/25 text-cherry-dark"
                                  : "bg-forest-light/25 text-forest-dark"
                              }`}
                            >
                              {isFull
                                ? "Full"
                                : `${g.availableSlots} slots left`}
                            </span>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <span className="text-[11px] border border-ink/15 text-ink/60 px-2 py-0.5 rounded-full">
                              {g.requiredPlayers} players
                            </span>
                            <span className="text-[11px] border border-ink/15 text-ink/60 px-2 py-0.5 rounded-full">
                              {g.estimatedRuntimeMinutes} min
                            </span>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>

                <hr className="border-ink/10 mb-8" />
              </>
            )}

            {/* Player details */}
            <h3 className="font-heading text-lg font-semibold mb-4">
              Player Details
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30"
                    size={16}
                  />
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
                <label className="block text-sm font-medium mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30"
                    size={16}
                  />
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

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1.5">
                Mobile Number
              </label>
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
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30"
                    size={16}
                  />
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, "").slice(0, 15))
                    }
                    placeholder="9876543210"
                    className="w-full rounded-xl2 border border-ink/15 focus:border-cherry focus:ring-2 focus:ring-cherry/20 outline-none pl-11 pr-4 py-3 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1.5">
                Address
              </label>
              <div className="relative">
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30"
                  size={16}
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Park Street, Apartment 4B"
                  className="w-full rounded-xl2 border border-ink/15 focus:border-cherry focus:ring-2 focus:ring-cherry/20 outline-none pl-11 pr-4 py-3 text-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium mb-1.5">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Bhopal"
                  className="w-full rounded-xl2 border border-ink/15 focus:border-cherry focus:ring-2 focus:ring-cherry/20 outline-none px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Pincode / Postal Code
                </label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) =>
                    setPincode(e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""))
                  }
                  placeholder="462001"
                  className="w-full rounded-xl2 border border-ink/15 focus:border-cherry focus:ring-2 focus:ring-cherry/20 outline-none px-4 py-3 text-sm"
                />
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
              disabled={!selectedPass || isSubmitting}
              whileHover={{ scale: !selectedPass || isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: !selectedPass || isSubmitting ? 1 : 0.98 }}
              className="w-full bg-cherry text-cream rounded-full py-4 font-semibold shadow-soft disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Confirm Registration"
              )}
            </motion.button>
          </>
        )}
      </motion.form>
    </div>
  );
}
