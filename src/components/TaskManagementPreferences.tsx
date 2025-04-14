"use client";

import * as React from "react";
import { PreferenceOption } from "./PreferenceOption";
import { NavigationButtons } from "./NavigationButtons";
import { QuestionHeader } from "./QuestionHeader";

const TaskManagementPreferences: React.FC = () => {
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
    <main className="overflow-hidden text-3xl text-center text-white bg-black">
      <div className="flex relative flex-col pr-20 pb-10 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d8aa93eb4df7fb246e41040f757edcffcfc6845?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa8d870f3ad5be67902c2e7e03e44cd28cdae25?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Logo"
          className="object-contain max-w-full aspect-[1.74] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[204px]"
        />
        <section className="flex relative flex-col self-center mt-24 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center px-20 pt-8 pb-16 bg-red-400 rounded-[30px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[736px]">
              <QuestionHeader />
              <div className="flex flex-col gap-0">
                <PreferenceOption
                  text="Step-by-step instructions"
                  onClick={() => handleOptionSelect("step-by-step")}
                />
                <PreferenceOption
                  text="Summaries first, then details"
                  onClick={() => handleOptionSelect("summaries-first")}
                />
                <PreferenceOption
                  text="Flexible—Let AI adapt based on my energy"
                  onClick={() => handleOptionSelect("flexible")}
                />
              </div>
            </div>
          </div>
          <NavigationButtons onNext={handleNext} onSkip={handleSkip} />
        </section>
      </div>
    </main>
  );
};

export default TaskManagementPreferences;
