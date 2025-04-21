"use client";

import * as React from "react";
import { QuestionCard } from "./QuestionCard";
import { NavigationButtons } from "./NavigationButtons";
import { useNavigate } from "react-router-dom";

export const CognitivePreferencesQuestion: React.FC = () => {
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(
    null,
  );

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    console.log("Navigating to CognitivePreferencesForm...");
    navigate("/CognitivePreferencesForm");
  };

  const handleSkip = () => {
    console.log("Skipping to CognitivePreferencesForm...");
    navigate("/CognitivePreferencesForm");
  };

  return (
    <main className="overflow-hidden text-3xl text-center text-white bg-black">
      <div className="flex relative flex-col pr-20 pb-10 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2e87cf465c2f00b2eed26f377cfc358cd692446?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa8d870f3ad5be67902c2e7e03e44cd28cdae25?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Logo"
          className="object-contain max-w-full aspect-[1.74] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[204px]"
        />
        <div className="flex relative flex-col self-center mt-24 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
          <QuestionCard onAnswerSelect={handleAnswerSelect} />
          <NavigationButtons onNext={handleNext} onSkip={handleSkip} />
        </div>
      </div>
    </main>
  );
};

export default CognitivePreferencesQuestion;
