import * as React from "react";
import { Button } from "./Button";

interface NavigationProps {
  onNext?: () => void;
  onSkip?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNext, onSkip }) => {
  return (
    <nav className="flex gap-5 justify-between self-center mt-10 max-w-full text-3xl whitespace-nowrap w-[453px]">
      <Button
        onClick={onNext}
        className="transition duration-150 ease-in-out hover:bg-rose-400 transition-colors duration-200 max-md:px-5"
      >
        Next
      </Button>
      <Button
        onClick={onSkip}
        className="transition duration-150 ease-in-out hover:bg-rose-400 transition-colors duration-200 max-md:px-5"
      >
        Skip
      </Button>
    </nav>
  );
};
