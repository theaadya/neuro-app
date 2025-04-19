import React from "react";
import CapacityIndicator from "./CapacityIndicator";

const TaskHeader = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
      <h1 className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
        TASK MANAGEMENT
      </h1>
      <CapacityIndicator capacity={90} />
    </header>
  );
};

export default TaskHeader;
