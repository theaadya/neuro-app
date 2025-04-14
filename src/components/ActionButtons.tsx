"use client";
import * as React from "react";

interface ActionButtonsProps {
  onYesClick: () => void;
  onSkipClick: () => void;
}

export function ActionButtons({ onYesClick, onSkipClick }: ActionButtonsProps) {
  return (
    <div className="flex gap-7 items-start self-end mt-16 text-white whitespace-nowrap max-md:mt-10">
      <button
        onClick={onYesClick}
        className="px-11 py-7 bg-rose-300 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 hover:bg-rose-400 transition-colors"
      >
        Yes
      </button>
      <button
        onClick={onSkipClick}
        className="px-10 py-7 bg-rose-300 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 hover:bg-rose-400 transition-colors"
      >
        Skip
      </button>
    </div>
  );
}
