import * as React from "react";

const MetricsPanel: React.FC = () => {
  return (
    <section className="px-16 py-11 mt-12 max-w-full text-3xl text-white bg-red-400 rounded-[30px] w-[834px] max-md:px-5 max-md:mt-10">
      <article className="px-14 py-8 bg-white bg-opacity-10 rounded-[30px] max-md:px-5 max-md:max-w-full">
        Best Working Hours
      </article>
      <article className="px-14 py-8 mt-11 bg-white bg-opacity-10 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Visual of working report
      </article>
      <article className="px-14 py-8 mt-11 bg-white bg-opacity-10 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Task Performance Analysis
      </article>
    </section>
  );
};

export default MetricsPanel;
