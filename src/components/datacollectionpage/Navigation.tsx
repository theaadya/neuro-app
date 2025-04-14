import * as React from "react";
import { Button } from "./Button";

interface NavigationProps {
  onNext?: () => void;
  onSkip?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNext, onSkip }) => {
  return (
    <nav className="flex gap-5 justify-between self-center mt-10 max-w-full text-3xl whitespace-nowrap w-[453px]">
      <Button onClick={onNext}>Next</Button>
      <Button onClick={onSkip}>Skip</Button>
    </nav>
  );
};
