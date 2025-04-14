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
      className="px-16 py-7 mt-10 first:mt-12 w-full text-3xl text-white bg-rose-300 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full hover:bg-rose-400 transition-colors"
    >
      {text}
    </button>
  );
};
