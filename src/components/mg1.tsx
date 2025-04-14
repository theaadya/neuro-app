"use client";

import * as React from "react";
import { PreferenceCard } from "./mg2";
import { NavigationButtons } from "./mg4";

export const TaskManagementPreference: React.FC = () => {
  const handleOptionSelect = (option: string) => {
    console.log("Selected option:", option);
  };

  const handleNext = () => {
    console.log("Next clicked");
  };

  const handleSkip = () => {
    console.log("Skip clicked");
  };

  return (
    <div className="overflow-hidden text-3xl text-center text-white bg-black">
      <main className="flex relative flex-col pr-20 pb-10 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc559fad3ea5b6ed36587ab58f81b7379f4b9628?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa8d870f3ad5be67902c2e7e03e44cd28cdae25?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Logo"
          className="object-contain max-w-full aspect-[1.74] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[204px]"
        />

        <div className="flex relative flex-col self-center mt-24 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
          <PreferenceCard onOptionSelect={handleOptionSelect} />
          <NavigationButtons onNext={handleNext} onSkip={handleSkip} />
        </div>
      </main>
    </div>
  );
};

export default TaskManagementPreference;
