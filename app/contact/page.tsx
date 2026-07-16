import Connect from "@/components/Connect";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-8">
      <div className="text-center mb-6">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Contact</h1>
        <p className="text-ink/60">Questions about the league? Reach out any way that suits you.</p>
      </div>
      <Connect />
    </div>
  );
}
