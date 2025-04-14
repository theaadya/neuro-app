"use client";

import * as React from "react";

interface NavigationButtonsProps {
  onNext?: () => void;
  onSkip?: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNext,
  onSkip,
}) => {
  return (
    <nav className="flex gap-5 justify-between self-center mt-10 max-w-full whitespace-nowrap w-[453px]">
      <button
        onClick={onNext}
        className="px-16 py-7 bg-rose-300 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 text-3xl text-white hover:bg-rose-400 transition-colors"
      >
        Next
      </button>
      <button
        onClick={onSkip}
        className="px-16 py-7 bg-rose-300 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 text-3xl text-white hover:bg-rose-400 transition-colors"
      >
        Skip
      </button>
    </nav>
  );
};
