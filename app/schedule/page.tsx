import scheduleData from "@/data/schedule.json";

const periodColor: Record<string, string> = {
  Morning: "bg-gold/15 text-ink",
  Afternoon: "bg-sky/10 text-sky",
  Evening: "bg-cherry/10 text-cherry",
};

export default function SchedulePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Schedule</h1>
        <p className="text-ink/60">Three days, packed with matches, workshops, and celebrations.</p>
      </div>

      <div className="space-y-16">
        {scheduleData.map((day) => (
          <div key={day.day}>
            <h2 className="font-heading text-2xl font-semibold mb-8">{day.day}</h2>
            <div className="relative pl-8 border-l-2 border-ink/10 space-y-8">
              {day.blocks.map((b) => (
                <div key={b.time + b.activity} className="relative">
                  <span className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-forest border-4 border-cream" />
                  <div className="bg-white rounded-xl2 p-5 shadow-softer flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <span className="text-sm font-semibold text-ink/50 w-20 shrink-0">{b.time}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${periodColor[b.period]}`}>
                      {b.period}
                    </span>
                    <span className="font-medium">{b.activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
