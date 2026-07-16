import Link from "next/link";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-heading text-2xl mb-3">Meeple Masters</h3>
          <p className="text-cream/70 text-sm leading-relaxed">
            India&apos;s national-level board gaming league and championship — three days of
            strategy, deduction, and dice.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link href="/registration" className="hover:text-gold">Registration</Link></li>
            <li><Link href="/points-table" className="hover:text-gold">Points Table</Link></li>
            <li><Link href="/schedule" className="hover:text-gold">Schedule</Link></li>
            <li><Link href="/rules" className="hover:text-gold">Rules</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-cream/70 mb-3">Get league updates in your inbox.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="min-w-0 flex-1 rounded-full px-4 py-2 text-ink text-sm outline-none"
            />
            <button className="bg-gold text-ink rounded-full px-4 py-2 text-sm font-semibold btn-scale">
              Join
            </button>
          </form>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex gap-3">
            {[Instagram, MessageCircle, Mail, Phone].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 text-center text-xs text-cream/50 py-6">
        © 2026 Meeple Masters National League. All rights reserved.
      </div>
    </footer>
  );
}
