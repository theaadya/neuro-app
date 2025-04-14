"use client";

import * as React from "react";

interface PreferenceOptionProps {
  text: string;
  onClick?: () => void;
}

export const PreferenceOption: React.FC<PreferenceOptionProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="px-16 py-7 mt-8 max-w-full bg-rose-300 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[736px] max-md:px-5 text-3xl text-white hover:bg-rose-400 transition-colors"
    >
      {text}
    </button>
  );
};
