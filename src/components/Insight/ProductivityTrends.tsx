import * as React from "react";

const ProductivityTrends: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
      <h1 className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
        Your Productivity Trends
      </h1>
      <div className="self-start text-2xl text-white">70%</div>
    </section>
  );
};

export default ProductivityTrends;
