import { TrendCard } from "./TrendCard";

export const ProductivityTrends: React.FC = () => {
  const trends = [
    "Best Working Hours",
    "Visual of working report",
    "Task Performance Analysis",
  ];

  return (
    <main className="px-20 py-10">
      <h1 className="mb-10 text-5xl text-black max-md:px-5 max-md:py-0 max-md:text-4xl max-sm:text-3xl">
        Your Productivity Trends
      </h1>
      <section className="flex flex-col gap-10 p-10 bg-red-400 rounded-[30px] max-md:mx-5 max-md:my-0 max-sm:p-5">
        {trends.map((trend) => (
          <TrendCard key={trend} title={trend} />
        ))}
      </section>
    </main>
  );
};
