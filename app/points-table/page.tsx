import PointsTable from "@/components/PointsTable";

export default function PointsTablePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <div className="text-center mb-14">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">Points Table</h1>
        <p className="text-ink/60 max-w-xl mx-auto">
          Rankings update at the end of the day{" "}
        </p>
      </div>
      <PointsTable />
    </div>
  );
}
