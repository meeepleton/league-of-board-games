// import LeagueInfo from "@/components/LeagueInfo";
// import EventTimeline from "@/components/EventTimeline";
// import GamesGrid from "@/components/GamesGrid";
// import Marquee from "@/components/Marquee";

// export default function LeagueFormatPage() {
//   return (
//     <div className="pt-32 pb-8">
//       <div className="text-center px-6 mb-4">
//         <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">
//           League &amp; Championship Format
//         </h1>
//         <p className="text-ink/60 max-w-2xl mx-auto">
//           What League of Board Games is, how the league runs, and how the championship
//           rounds decide the winners.
//         </p>
//       </div>

//       {/* Basic gist of the league */}
//       <LeagueInfo />

//       {/* Moving tagline banner */}
//       <Marquee />

//       {/* Highlight events */}
//       <EventTimeline />

//       {/* Games included */}
//       <GamesGrid />

//       {/* League format */}
//       {/* League format */}
// <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
//   <div className="bg-forest/5 rounded-xl3 p-8 md:p-10 mb-8">
//     <h2 className="font-heading text-3xl font-semibold mb-4">League Structure</h2>
//     <p className="text-ink/70 mb-4">
//       The League consists of 17 individual tournaments. Each tournament runs as
//       follows:
//     </p>
//     <ul className="text-sm text-ink/70 space-y-2 list-disc list-inside mb-6">
//       <li>Each participant plays 4 matches within their tournament</li>
//       <li>Victory Points (LP) are awarded based on finishing position in every match</li>
//       <li>Total LP across all 4 matches determines the tournament winner</li>
//     </ul>

//     <p className="text-ink/70 mb-4">
//       League Pass holders compete across multiple tournaments for the overall
//       League title:
//     </p>
//     <ul className="text-sm text-ink/70 space-y-2 list-disc list-inside">
//       <li>League Pass holders can participate in any 6 tournaments of their choice</li>
//       <li>LP earned across all six tournaments contributes to overall League standings</li>
//       <li>The highest cumulative LP scorer is crowned the League Champion 2026</li>
//     </ul>
//   </div>

//   {/* Passes & Prize Pool */}
//   <div className="bg-cherry/5 rounded-xl3 p-8 md:p-10">
//     <h2 className="font-heading text-3xl font-semibold mb-4">Passes &amp; Prize Pool</h2>
//     <div className="grid sm:grid-cols-3 gap-6 mb-6">
//       <div>
//         <h3 className="font-heading text-lg font-semibold mb-1">Explorer Pass — ₹399</h3>
//         <p className="text-sm text-ink/70">Participation in 1 tournament of choice. Regular Welcome Kit.</p>
//       </div>
//       <div>
//         <h3 className="font-heading text-lg font-semibold mb-1">League Pass — ₹1,499</h3>
//         <p className="text-sm text-ink/70">
//           Participation in any 6 tournaments. Premium Welcome Kit. Eligible for the League Championship.
//         </p>
//       </div>
//       <div>
//         <h3 className="font-heading text-lg font-semibold mb-1">
//           Blood on the Clocktower Pass — ₹899
//         </h3>
//         <p className="text-sm text-ink/70">Dedicated entry for the Blood on the Clocktower event.</p>
//       </div>
//     </div>
//     <p className="text-ink/70 text-sm">
//       ₹1,00,000+ worth of cash prizes, trophies, sponsor goodies, vouchers and
//       merchandise are up for grabs — full details to be announced.
//     </p>
//   </div>
// </section>
//     </div>
//   );
// }




// proper code witHOUT LEAGUES POINTS TABLE 
// import { Suspense } from "react";
// import LeagueInfo from "@/components/LeagueInfo";
// import EventTimeline from "@/components/EventTimeline";
// import GamesGrid from "@/components/GamesGrid";
// import Marquee from "@/components/Marquee";

// function LeagueFormatContent() {
//   return (
//     <div className="pt-32 pb-8">
//       <div className="text-center px-6 mb-4">
//         <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">
//           League &amp; Championship Format
//         </h1>
//         <p className="text-ink/60 max-w-2xl mx-auto">
//           What League of Board Games is, how the league runs, and how the championship
//           rounds decide the winners.
//         </p>
//       </div>

//       {/* Basic gist of the league */}
//       <LeagueInfo />

//       {/* Moving tagline banner */}
//       <Marquee />

//       {/* Highlight events */}
//       <EventTimeline />

//       {/* Games included */}
//       <GamesGrid />

//       {/* League format */}
//       <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
//         <div className="bg-forest/5 rounded-xl3 p-8 md:p-10 mb-8">
//           <h2 className="font-heading text-3xl font-semibold mb-4">League Structure</h2>
//           <p className="text-ink/70 mb-4">
//             The League consists of 17 individual tournaments. Each tournament runs as
//             follows:
//           </p>
//           <ul className="text-sm text-ink/70 space-y-2 list-disc list-inside mb-6">
//             <li>Each participant plays 4 matches within their tournament</li>
//             <li>League Points (LP) are awarded based on finishing position in every match</li>
//             <li>Total LP across all 4 matches determines the tournament winner</li>
//           </ul>

//           <p className="text-ink/70 mb-4">
//             League Pass holders compete across multiple tournaments for the overall
//             League title:
//           </p>
//           <ul className="text-sm text-ink/70 space-y-2 list-disc list-inside">
//             <li>League Pass holders can participate in any 6 tournaments (Including 1 Heavy game) of their choice</li>
//             <li>LP earned across all six tournaments contributes to overall League standings</li>
//             <li>The highest cumulative LP scorer is crowned the Champion of League of Board Games 2026</li>
//           </ul>
//         </div>

//         {/* Passes & Prize Pool */}
//         <div className="bg-cherry/5 rounded-xl3 p-8 md:p-10">
//           <h2 className="font-heading text-3xl font-semibold mb-4">Passes &amp; Prize Pool</h2>
//           <div className="grid sm:grid-cols-3 gap-6 mb-6">
//             <div>
//               <h3 className="font-heading text-lg font-semibold mb-1">Explorer Pass — ₹399</h3>
//               <p className="text-sm text-ink/70">Participation in 1 tournament of choice. Regular Welcome Kit.</p>
//             </div>
//             <div>
//               <h3 className="font-heading text-lg font-semibold mb-1">League Pass — ₹1,499</h3>
//               <p className="text-sm text-ink/70">
//                 Participation in any 6 tournaments. Premium Welcome Kit. Eligible for the League Championship.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-heading text-lg font-semibold mb-1">
//                 Blood on the Clocktower Pass — ₹899
//               </h3>
//               <p className="text-sm text-ink/70">Dedicated entry for the Blood on the Clocktower event.</p>
//             </div>
//           </div>
//           <p className="text-ink/70 text-sm">
//             ₹1,00,000+ worth of cash prizes, trophies, sponsor goodies, vouchers and
//             merchandise are up for grabs — full details to be announced.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default function LeagueFormatPage() {
//   return (
//     <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
//       <LeagueFormatContent />
//     </Suspense>
//   );
// }




import { Suspense } from "react";
import LeagueInfo from "@/components/LeagueInfo";
import EventTimeline from "@/components/EventTimeline";
import GamesGrid from "@/components/GamesGrid";
import Marquee from "@/components/Marquee";

function LeagueFormatContent() {
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
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        {/* League Structure */}
        <div className="bg-forest/5 rounded-xl3 p-8 md:p-10 mb-8">
          <h2 className="font-heading text-3xl font-semibold mb-4">
            League Structure
          </h2>

          <p className="text-ink/70 mb-4">
            The League consists of 17 individual tournaments. Each tournament runs as
            follows:
          </p>

          <ul className="text-sm text-ink/70 space-y-2 list-disc list-inside mb-6">
            <li>Each participant plays 4 matches within their tournament</li>
            <li>
              League Points (LP) are awarded based on finishing position in every match
            </li>
            <li>Total LP across all 4 matches determines the tournament winner</li>
          </ul>

          <p className="text-ink/70 mb-4">
            League Pass holders compete across multiple tournaments for the overall
            League title:
          </p>

          <ul className="text-sm text-ink/70 space-y-2 list-disc list-inside">
            <li>
              League Pass holders can participate in any 6 tournaments (Including 1
              Heavy game) of their choice
            </li>
            <li>
              LP earned across all six tournaments contributes to overall League
              standings
            </li>
            <li>
              The highest cumulative LP scorer is crowned the Champion of League of
              Board Games 2026
            </li>
          </ul>
        </div>

        {/* =========================================
            LEAGUE POINTS
            ========================================= */}
        <div className="bg-[#D4AF37]/10 border border-[#C9A227]/40 rounded-xl3 p-6 md:p-10 mb-8 shadow-sm">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center">
            
            {/* Left - Explanation */}
            <div>
              <p className="text-[#9A7517] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                The League Points Funda
              </p>

              <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-4">
                No knockouts.
                <br />
                No qualifiers.
                <br />
                Just play, score &amp; climb.
              </h2>

              <div className="w-20 h-1 bg-[#C9A227] rounded-full mb-6" />

              <p className="text-ink/70 text-base md:text-lg leading-relaxed mb-4">
                Every match earns you League Points.
              </p>

              <p className="text-sm text-ink/60 leading-relaxed max-w-md">
                Your finishing position and the category of the tournament determine
                how many League Points you earn. Keep playing, keep scoring, and climb
                the leaderboard.
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm font-medium text-[#806216]">
                <span className="text-lg">🏆</span>
                <span>Most League Points wins the tournament.</span>
              </div>
            </div>

            {/* Right - Points Table */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[480px]">
                <table className="w-full border-collapse text-center">
                  <thead>
                    <tr className="border-b-2 border-[#B89A4A]/60">
                      <th className="text-left px-3 py-3 font-heading text-sm md:text-base font-semibold">
                        Category
                      </th>
                      <th className="px-3 py-3 font-heading text-sm md:text-base font-semibold">
                        1st
                      </th>
                      <th className="px-3 py-3 font-heading text-sm md:text-base font-semibold">
                        2nd
                      </th>
                      <th className="px-3 py-3 font-heading text-sm md:text-base font-semibold">
                        3rd
                      </th>
                      <th className="px-3 py-3 font-heading text-sm md:text-base font-semibold">
                        4th
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* Light */}
                    <tr className="border-b border-[#B89A4A]/30">
                      <td className="text-left px-3 py-3">
                        <span className="inline-flex items-center rounded-md bg-[#B8C77A] px-2.5 py-1 text-xs md:text-sm font-medium text-[#3E4721]">
                          Light
                        </span>
                      </td>
                      <td className="px-3 py-3">8</td>
                      <td className="px-3 py-3">6</td>
                      <td className="px-3 py-3">3</td>
                      <td className="px-3 py-3">0</td>
                    </tr>

                    {/* Medium */}
                    <tr className="border-b border-[#B89A4A]/30">
                      <td className="text-left px-3 py-3">
                        <span className="inline-flex items-center rounded-md bg-[#E5C35B] px-2.5 py-1 text-xs md:text-sm font-medium text-[#5A4610]">
                          Medium
                        </span>
                      </td>
                      <td className="px-3 py-3">10</td>
                      <td className="px-3 py-3">7</td>
                      <td className="px-3 py-3">4</td>
                      <td className="px-3 py-3">0</td>
                    </tr>

                    {/* Heavy */}
                    <tr className="border-b border-[#B89A4A]/30">
                      <td className="text-left px-3 py-3">
                        <span className="inline-flex items-center rounded-md bg-[#B32626] px-2.5 py-1 text-xs md:text-sm font-medium text-white">
                          Heavy
                        </span>
                      </td>
                      <td className="px-3 py-3">12</td>
                      <td className="px-3 py-3">9</td>
                      <td className="px-3 py-3">5</td>
                      <td className="px-3 py-3">0</td>
                    </tr>

                    {/* Heat */}
                    <tr className="border-b border-[#B89A4A]/30">
                      <td className="text-left px-3 py-3 font-medium">
                        *Heat
                      </td>
                      <td className="px-3 py-3">14</td>
                      <td className="px-3 py-3">10</td>
                      <td className="px-3 py-3">6</td>
                      <td className="px-3 py-3">3</td>
                    </tr>

                    {/* Wingspan */}
                    <tr>
                      <td className="text-left px-3 py-3 font-medium">
                        *Wingspan
                      </td>
                      <td className="px-3 py-3">10</td>
                      <td className="px-3 py-3">7</td>
                      <td className="px-3 py-3">4</td>
                      <td className="px-3 py-3">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-center text-xs md:text-sm text-ink/60 mt-5">
                At the end, the player with the most League Points wins the tournament.
                <span className="ml-1">🏆</span>
              </p>
            </div>
          </div>
        </div>

        {/* Passes & Prize Pool */}
        <div className="bg-cherry/5 rounded-xl3 p-8 md:p-10">
          <h2 className="font-heading text-3xl font-semibold mb-4">
            Passes &amp; Prize Pool
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">
                Explorer Pass — ₹399
              </h3>
              <p className="text-sm text-ink/70">
                Participation in 1 tournament of choice. Regular Welcome Kit.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">
                League Pass — ₹1,499
              </h3>
              <p className="text-sm text-ink/70">
                Participation in any 6 tournaments. Premium Welcome Kit. Eligible for
                the League Championship.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">
                Blood on the Clocktower Pass — ₹899
              </h3>
              <p className="text-sm text-ink/70">
                Dedicated entry for the Blood on the Clocktower event.
              </p>
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

export default function LeagueFormatPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
      <LeagueFormatContent />
    </Suspense>
  );
}