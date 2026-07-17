// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { Users, Clock, Cake, Gauge } from "lucide-react";
// import games from "@/data/games.json";

// const colorMap: Record<string, string> = {
//   forest: "bg-forest/10 text-forest",
//   cherry: "bg-cherry/10 text-cherry",
//   sky: "bg-sky/10 text-sky",
//   gold: "bg-gold/15 text-ink",
//   tangerine: "bg-tangerine/10 text-tangerine",
// };

// export function generateStaticParams() {
//   return games.map((g) => ({ id: g.id }));
// }

// export default function GameDetailPage({ params }: { params: { id: string } }) {
//   const game = games.find((g) => g.id === params.id);

//   if (!game) {
//     notFound();
//   }

//   const facts = [
//     { icon: Users, label: "Players", value: game.players },
//     { icon: Clock, label: "Duration", value: game.duration },
//     { icon: Cake, label: "Age", value: game.ageRange },
//     { icon: Gauge, label: "Difficulty", value: game.difficulty },
//   ];

//   return (
//     <div className="max-w-3xl mx-auto px-6 md:px-10 pt-32 pb-20">
//       <Link href="/league-format" className="text-sm text-ink/50 hover:text-cherry mb-8 inline-block">
//         ← Back to Games
//       </Link>

//       <div className="bg-white rounded-xl3 shadow-soft p-8 md:p-12">
//         <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
//           {game.category}
//         </span>
//         <h1 className="font-heading text-4xl md:text-5xl font-semibold mt-2 mb-4">
//           {game.name}
//         </h1>
//         <p className="text-ink/70 mb-8">{game.description}</p>

//         {/* Quick facts */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
//           {facts.map((f) => (
//             <div key={f.label} className={`rounded-xl2 p-4 text-center ${colorMap[game.color]}`}>
//               <f.icon className="mx-auto mb-2" size={20} />
//               <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{f.label}</p>
//               <p className="text-sm font-semibold mt-0.5">{f.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Tags */}
//         {game.tags?.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-10">
//             {game.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="text-xs font-medium bg-ink/5 text-ink/60 px-3 py-1.5 rounded-full"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* How to play */}
//         {game.howToPlay?.length > 0 && (
//           <div className="mb-10">
//             <h2 className="font-heading text-2xl font-semibold mb-4">How to Play</h2>
//             <ol className="space-y-3">
//               {game.howToPlay.map((step, i) => (
//                 <li key={i} className="flex gap-4 items-start bg-cream rounded-xl2 p-4">
//                   <span className="w-7 h-7 shrink-0 rounded-full bg-ink text-cream flex items-center justify-center font-semibold text-xs">
//                     {i + 1}
//                   </span>
//                   <span className="text-sm text-ink/70">{step}</span>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         )}

//         {/* Placeholder for photos — add real images later */}
//         <div className="border-2 border-dashed border-ink/15 rounded-xl2 p-8 text-center text-ink/40">
//           <p className="font-semibold mb-2">Photos coming soon</p>
//           <p className="text-sm">
//             Table photos and setup shots for {game.name} will go here.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



import Link from "next/link";
import { notFound } from "next/navigation";
import { Users, Clock, Cake, Gauge } from "lucide-react";
import games from "@/data/games.json";

const colorMap: Record<string, string> = {
  forest: "bg-forest-light/25 text-forest-dark",
  cherry: "bg-cherry-light/25 text-cherry-dark",
  sky: "bg-sky-light/35 text-sky-dark",
  gold: "bg-gold-light/40 text-ink",
  tangerine: "bg-tangerine-light/25 text-tangerine-dark",
};

const barMap: Record<string, string> = {
  forest: "bg-forest",
  cherry: "bg-cherry",
  sky: "bg-sky",
  gold: "bg-gold",
  tangerine: "bg-tangerine",
};

const difficultyTint: Record<string, string> = {
  Easy: "bg-forest-light/25 text-forest-dark",
  Medium: "bg-gold-light/40 text-ink",
  Hard: "bg-cherry-light/25 text-cherry-dark",
};

export function generateStaticParams() {
  return games.map((g) => ({ id: g.id }));
}

export default function GameDetailPage({ params }: { params: { id: string } }) {
  const game = games.find((g) => g.id === params.id);

  if (!game) {
    notFound();
  }

  const facts = [
    { icon: Users, label: "Players", value: game.players },
    { icon: Clock, label: "Duration", value: game.duration },
    { icon: Cake, label: "Age", value: game.ageRange },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <Link href="/league-format" className="text-sm text-ink/50 hover:text-cherry mb-8 inline-block">
        ← Back to Games
      </Link>

      <div className="relative overflow-hidden bg-white rounded-xl3 shadow-soft p-8 md:p-12">
        <span className={`absolute top-0 left-0 right-0 h-2 ${barMap[game.color]}`} aria-hidden />

        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
            {game.category}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${difficultyTint[game.difficulty]}`}>
            <Gauge size={11} />
            {game.difficulty}
          </span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl font-semibold mt-2 mb-4">
          {game.name}
        </h1>
        <p className="text-ink/70 mb-8">{game.description}</p>

        {/* Quick facts */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {facts.map((f) => (
            <div key={f.label} className={`rounded-xl2 p-4 text-center ${colorMap[game.color]}`}>
              <f.icon className="mx-auto mb-2" size={20} />
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{f.label}</p>
              <p className="text-sm font-semibold mt-0.5">{f.value}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        {game.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-ink/5 text-ink/60 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* How to play */}
        {game.howToPlay?.length > 0 && (
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-semibold mb-4">How to Play</h2>
            <ol className="space-y-3">
              {game.howToPlay.map((step, i) => (
                <li key={i} className="flex gap-4 items-start bg-cream rounded-xl2 p-4">
                  <span className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center font-semibold text-xs text-white ${barMap[game.color]}`}>
                    {i + 1}
                  </span>
                  <span className="text-sm text-ink/70">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Placeholder for photos — add real images later */}
        <div className="border-2 border-dashed border-ink/15 rounded-xl2 p-8 text-center text-ink/40">
          <p className="font-semibold mb-2">Photos coming soon</p>
          <p className="text-sm">
            Table photos and setup shots for {game.name} will go here.
          </p>
        </div>
      </div>
    </div>
  );
}
