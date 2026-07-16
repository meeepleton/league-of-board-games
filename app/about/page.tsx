import team from "@/data/team.json";

function TeamGroup({ title, members }: { title: string; members: { name: string; role: string }[] }) {
  return (
    <div className="mb-12">
      <h3 className="font-heading text-2xl font-semibold mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((m) => (
          <div key={m.name} className="tilt-card bg-white rounded-xl2 p-6 shadow-softer flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sky/15 flex items-center justify-center font-heading text-sky font-semibold">
              {m.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{m.name}</p>
              <p className="text-sm text-ink/60">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">About Us</h1>
        <p className="text-ink/60 max-w-2xl mx-auto">
          Meeple Masters started as a living-room game night and grew into the country&apos;s
          largest tabletop gaming festival.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-forest/5 rounded-xl3 p-8">
          <h3 className="font-heading text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-sm text-ink/70">
            To build the country&apos;s most welcoming competitive tabletop community, where
            strategy, story and sportsmanship matter equally.
          </p>
        </div>
        <div className="bg-sky/5 rounded-xl3 p-8">
          <h3 className="font-heading text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-sm text-ink/70">
            A yearly festival that puts board games on the same stage as any national sport —
            celebrated, competitive, and fun for everyone.
          </p>
        </div>
      </div>

      <TeamGroup title="Organisers" members={team.organisers} />
      <TeamGroup title="Volunteers" members={team.volunteers} />
      <TeamGroup title="Community Partners" members={team.partners} />

      <div>
        <h3 className="font-heading text-2xl font-semibold mb-6">Gallery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl2 bg-gold/10 flex items-center justify-center text-3xl">
              {["🎲","🃏","♟️","🧩","🏆","🎉","🀄","🎯"][i]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
