import Accordion from "@/components/Accordion";
import PageHeader from "@/components/PageHeader";

export default function RulesPage() {
  return (
    <div className="px-6 md:px-10 pt-32 pb-20">
      <PageHeader title="Rules" subtitle="Everything you need to know before you play." />
      <Accordion />
    </div>
  );
}
