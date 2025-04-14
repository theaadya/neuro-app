"use client";

import * as React from "react";

interface OptionButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const OptionButton: React.FC<OptionButtonProps> = ({
  label,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-16 py-7 w-[736px] max-w-full text-3xl text-white bg-rose-300 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-rose-400 transition-colors duration-200 max-md:px-5 ${className}`}
    >
      {label}
    </button>
  );
};
