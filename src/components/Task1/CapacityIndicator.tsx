import React from "react";

interface CapacityIndicatorProps {
  capacity: number;
}

const CapacityIndicator: React.FC<CapacityIndicatorProps> = ({ capacity }) => {
  return (
    <div className="flex gap-4 px-6 py-5 text-white bg-red-500 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
      <span className="my-auto text-xl basis-auto">CAPACITY INDICATOR</span>
      <span className="text-2xl">{capacity}%</span>
    </div>
  );
};

export default CapacityIndicator;
