import Accordion from "@/components/Accordion";

export default function RulesPage() {
  return (
    <div className="px-6 md:px-10 pt-32 pb-20">
      <div className="text-center mb-14">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Rules</h1>
        <p className="text-ink/60">Everything you need to know before you play.</p>
      </div>
      <Accordion />
    </div>
  );
}
