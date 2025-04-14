"use client";

import * as React from "react";
import { PreferenceOption } from "./mg3";

interface PreferenceCardProps {
  onOptionSelect?: (option: string) => void;
}

export const PreferenceCard: React.FC<PreferenceCardProps> = ({
  onOptionSelect,
}) => {
  return (
    <section className="flex flex-col items-center px-20 pt-8 pb-4 bg-red-400 rounded-[30px] max-md:px-5 max-md:max-w-full">
      <header>
        <h2 className="text-2xl text-black">Task Management Preferences</h2>
        <h1 className="self-stretch mt-4 text-4xl max-md:max-w-full text-white">
          How do you prefer to manage focus and breaks?
        </h1>
        <p className="mt-4 text-base text-black max-md:max-w-full">
          Why?
          <span className="text-[#3d3c3c]">
            {" "}
            Customizes Task Scheduling and Break Recommendations.
          </span>
        </p>
      </header>

      <main className="flex flex-col items-center w-full">
        <PreferenceOption
          text="Frequent short breaks"
          onClick={() => onOptionSelect?.("frequent")}
        />
        <PreferenceOption
          text="Fewer, longer breaks"
          onClick={() => onOptionSelect?.("fewer")}
        />
        <PreferenceOption
          text="Let AI analyze and suggest break times"
          onClick={() => onOptionSelect?.("ai")}
        />
        <PreferenceOption
          text="No reminders needed"
          onClick={() => onOptionSelect?.("none")}
        />
      </main>
    </section>
  );
};
