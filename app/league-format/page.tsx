import LeagueInfo from "@/components/LeagueInfo";
import EventTimeline from "@/components/EventTimeline";
import GamesGrid from "@/components/GamesGrid";
import Marquee from "@/components/Marquee";

export default function LeagueFormatPage() {
  return (
    <div className="pt-32 pb-8">
      <div className="text-center px-6 mb-4">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">
          League &amp; Championship Format
        </h1>
        <p className="text-ink/60 max-w-2xl mx-auto">
          What League of Board Games is, how the league runs, and how the championship
          rounds decide the winners.
        </p>
      </div>

      {/* Basic gist of the league */}
      <LeagueInfo />

      {/* Moving tagline banner */}
      <Marquee />

      {/* Highlight events */}
      <EventTimeline />

      {/* Games included */}
      <GamesGrid />

      {/* League format */}
      {/* League format */}
<section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
  <div className="bg-forest/5 rounded-xl3 p-8 md:p-10 mb-8">
    <h2 className="font-heading text-3xl font-semibold mb-4">League Structure</h2>
    <p className="text-ink/70 mb-4">
      The League consists of 17 individual tournaments. Each tournament runs as
      follows:
    </p>
    <ul className="text-sm text-ink/70 space-y-2 list-disc list-inside mb-6">
      <li>Each participant plays 4 matches within their tournament</li>
      <li>Victory Points (VP) are awarded based on finishing position in every match</li>
      <li>Total VP across all 4 matches determines the tournament winner</li>
    </ul>

    <p className="text-ink/70 mb-4">
      League Pass holders compete across multiple tournaments for the overall
      League title:
    </p>
    <ul className="text-sm text-ink/70 space-y-2 list-disc list-inside">
      <li>League Pass holders can participate in any 6 tournaments of their choice</li>
      <li>VP earned across all six tournaments contributes to overall League standings</li>
      <li>The highest cumulative VP scorer is crowned the League Champion 2026</li>
    </ul>
  </div>

  {/* Passes & Prize Pool */}
  <div className="bg-cherry/5 rounded-xl3 p-8 md:p-10">
    <h2 className="font-heading text-3xl font-semibold mb-4">Passes &amp; Prize Pool</h2>
    <div className="grid sm:grid-cols-3 gap-6 mb-6">
      <div>
        <h3 className="font-heading text-lg font-semibold mb-1">Explorer Pass — ₹399</h3>
        <p className="text-sm text-ink/70">Participation in 1 tournament of choice. Regular Welcome Kit.</p>
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold mb-1">League Pass — ₹1,499</h3>
        <p className="text-sm text-ink/70">
          Participation in any 6 tournaments. Premium Welcome Kit. Eligible for the League Championship.
        </p>
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold mb-1">
          Blood on the Clocktower Pass — ₹899
        </h3>
        <p className="text-sm text-ink/70">Dedicated entry for the Blood on the Clocktower event.</p>
      </div>
    </div>
    <p className="text-ink/70 text-sm">
      ₹1,00,000+ worth of cash prizes, trophies, sponsor goodies, vouchers and
      merchandise are up for grabs — full details to be announced.
    </p>
  </div>
</section>
    </div>
  );
}