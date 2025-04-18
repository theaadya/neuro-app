import * as React from "react";

export const PriorityHeader: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between mr-6 w-full max-w-[1214px] max-md:mr-2.5 max-md:max-w-full">
      <h1 className="text-4xl text-black">Drag to change priority</h1>
      <p className="my-auto text-2xl text-white">90%</p>
    </header>
  );
};
