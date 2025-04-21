"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { QuestionHeader } from "./QuestionHeader";
import { TriggerOption } from "./TriggerOption";
import { NavigationButtons } from "./NavigationButtons";

export const CognitivePreferencesForm = () => {
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleTrigger = (trigger: string) => {
    setSelectedTriggers((prev) =>
      prev.includes(trigger)
        ? prev.filter((t) => t !== trigger)
        : [...prev, trigger]
    );
  };

  const handleNavigation = (action: "next" | "skip") => {
    if (action === "next") {
      console.log("Navigating to TaskManagementPreferences...");
      navigate("/TaskManagementPreferences"); // Navigate to TaskManagementPreferences
    } else if (action === "skip") {
      console.log("Navigating to PersonalizationForm...");
      navigate("/PersonalizationForm"); // Navigate to PersonalizationForm
    }
  };

  return (
    <main className="overflow-hidden text-3xl text-center text-white bg-black">
      <div className="flex relative flex-col pr-20 pb-10 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d8aa93eb4df7fb246e41040f757edcffcfc6845?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <section className="flex relative flex-col self-center mt-24 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center px-20 pt-8 pb-16 bg-red-400 rounded-[30px] max-md:px-5 max-md:max-w-full">
            <QuestionHeader />
            <div className="flex flex-col gap-4">
              <TriggerOption
                label="Trigger 1" // Use 'label' instead of 'text'
                isSelected={selectedTriggers.includes("Trigger 1")}
                onClick={() => toggleTrigger("Trigger 1")}
                variant="solid"
              />
              <TriggerOption
                label="Trigger 2" // Use 'label' instead of 'text'
                isSelected={selectedTriggers.includes("Trigger 2")}
                onClick={() => toggleTrigger("Trigger 2")}
                variant="solid"
              />
            </div>
          </div>
          <NavigationButtons
            onNext={() => handleNavigation("next")}
            onSkip={() => handleNavigation("skip")}
          />
        </section>
      </div>
    </main>
  );
};

export default CognitivePreferencesForm;
