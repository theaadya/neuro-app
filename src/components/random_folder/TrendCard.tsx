import { TrendCardProps } from "./types";

export const TrendCard: React.FC<TrendCardProps> = ({ title }) => {
  return (
    <section className="p-8 mb-5 text-3xl text-white bg-white bg-opacity-10 rounded-[30px] max-sm:text-2xl">
      {title}
    </section>
  );
};
