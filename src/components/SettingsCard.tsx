"use client";

import * as React from "react";
import { OptionButton } from "./OptionButton";

interface SettingsCardProps {
  onOptionSelect?: (option: string) => void;
}

export const SettingsCard: React.FC<SettingsCardProps> = ({
  onOptionSelect,
}) => {
  return (
    <section className="flex flex-col items-center px-8 pt-8 pb-16 bg-red-400 rounded-[30px] max-md:px-5 max-md:max-w-full">
      <header>
        <h2 className="text-2xl text-black">
          Social Support & Community Settings
        </h2>
        <h1 className="self-stretch mt-6 text-4xl text-white">
          How would you like to appear in community spaces?
        </h1>
        <p className="mt-3 text-base">
          <span className="text-black">Why?</span>{" "}
          <span className="text-[#3d3c3c]">
            Respect user privacy in Anonymous Sharing and community
            interactions.
          </span>
        </p>
      </header>

      <div className="flex flex-col gap-10 mt-12 w-full items-center">
        <OptionButton
          label="Use real name"
          onClick={() => onOptionSelect?.("real_name")}
        />
        <OptionButton
          label="Use alias"
          onClick={() => onOptionSelect?.("alias")}
        />
        <OptionButton
          label="Anonymous"
          onClick={() => onOptionSelect?.("anonymous")}
        />
      </div>
    </section>
  );
};
