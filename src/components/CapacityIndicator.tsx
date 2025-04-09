import * as React from "react";

interface CapacityIndicatorProps {
  value: string;
  label?: string;
  className?: string;
}

export const CapacityIndicator: React.FC<CapacityIndicatorProps> = ({
  value,
  label = "CAPACITY INDICATOR",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 text-white bg-red-500 rounded-full shadow-md ${className}`}
    >
      <span className="text-lg">{label}</span>
      <span className="text-lg font-semibold">{value}</span>
    </div>
  );
};
