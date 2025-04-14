"use client";

import React, { useState } from "react";
import { QuestionHeader } from "./QuestionHeader";
import { TriggerOption } from "./TriggerOption";
import { NavigationButtons } from "./NavigationButtons";

export const CognitivePreferencesForm = () => {
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);

  const toggleTrigger = (trigger: string) => {
    setSelectedTriggers((prev) =>
      prev.includes(trigger)
        ? prev.filter((t) => t !== trigger)
        : [...prev, trigger],
    );
  };

  const handleNavigation = (action: "next" | "skip") => {
    // Navigation logic to be implemented
    console.log(`Navigation action: ${action}`);
  };

  return (
    <main className="overflow-hidden text-3xl text-center text-white bg-black">
      <section className="flex relative flex-col pr-20 pb-10 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0d967926cef015a398c66c66743c87c77ee6455?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Background pattern"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa8d870f3ad5be67902c2e7e03e44cd28cdae25?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Logo"
          className="object-contain max-w-full aspect-[1.74] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[204px]"
        />

        <div className="flex relative flex-col self-center mt-24 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
          <section className="flex flex-col items-center px-20 pt-8 pb-14 bg-red-400 rounded-[30px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[736px]">
              <QuestionHeader />

              <TriggerOption
                label="Bright lights"
                isSelected={selectedTriggers.includes("bright_lights")}
                onClick={() => toggleTrigger("bright_lights")}
                variant="solid"
              />

              <TriggerOption
                label="Loud sounds"
                isSelected={selectedTriggers.includes("loud_sounds")}
                onClick={() => toggleTrigger("loud_sounds")}
                variant="image"
                backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/35fc08f81bdcf0fe49f850df39b4ad176152510e?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
              />

              <TriggerOption
                label="Prefer not to say"
                isSelected={selectedTriggers.includes("prefer_not_to_say")}
                onClick={() => toggleTrigger("prefer_not_to_say")}
                variant="solid"
              />

              <TriggerOption
                label="Certain colors"
                isSelected={selectedTriggers.includes("certain_colors")}
                onClick={() => toggleTrigger("certain_colors")}
                variant="solid"
              />

              <TriggerOption
                label="Other"
                isSelected={selectedTriggers.includes("other")}
                onClick={() => toggleTrigger("other")}
                variant="solid"
              />
            </div>
          </section>

          <NavigationButtons
            onNext={() => handleNavigation("next")}
            onSkip={() => handleNavigation("skip")}
          />
        </div>
      </section>
    </main>
  );
};

export default CognitivePreferencesForm;
