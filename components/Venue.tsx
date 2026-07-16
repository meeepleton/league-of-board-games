"use client";

export default function Venue() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div className="rounded-xl3 overflow-hidden shadow-soft aspect-[4/3] bg-forest/10 flex items-center justify-center text-ink/40 text-sm font-medium">
        [ Map placeholder — embed Google Maps here ]
      </div>
      <div>
        <h2 className="font-heading text-4xl font-semibold mb-4">Venue</h2>
        <p className="text-ink/70 mb-6">
          Indore Convention Centre, RNT Marg, Indore, Madhya Pradesh — a spacious,
          air-conditioned venue with dedicated tournament halls and casual play lounges.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded-xl2 p-4 shadow-softer">
            <span className="font-semibold block mb-1">🚗 Parking</span>
            <span className="text-ink/60">On-site parking for 300+ vehicles</span>
          </div>
          <div className="bg-white rounded-xl2 p-4 shadow-softer">
            <span className="font-semibold block mb-1">🏨 Nearby Hotels</span>
            <span className="text-ink/60">5+ hotels within 2 km, all price ranges</span>
          </div>
        </div>
      </div>
    </section>
  );
}
