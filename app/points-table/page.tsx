import PointsTable from "@/components/PointsTable";

export default function PointsTablePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <div className="text-center mb-14">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Points Table</h1>
        <p className="text-ink/60 max-w-xl mx-auto">
          Rankings update automatically whenever the points in{" "}
          <code className="bg-ink/5 px-1.5 py-0.5 rounded text-sm">data/standings.json</code> or{" "}
          <code className="bg-ink/5 px-1.5 py-0.5 rounded text-sm">data/championships.json</code>{" "}
          are edited — no manual re-sorting needed.
        </p>
      </div>
      <PointsTable />
    </div>
  );
}
