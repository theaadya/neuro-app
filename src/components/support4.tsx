"use client";
import * as React from "react";
import { OptionButton } from "./support2";

interface SettingsCardProps {
  onOptionSelect?: (value: boolean) => void;
}

export const SettingsCard: React.FC<SettingsCardProps> = ({
  onOptionSelect,
}) => {
  return (
    <section className="flex flex-col items-center px-20 pt-8 pb-32 bg-[#FF7171] rounded-[30px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[776px] max-md:mb-2.5">
        <h2 className="self-center text-2xl text-[#000000] max-md:max-w-full">
          Social Support & Community Settings
        </h2>
        <h1 className="mt-5 text-4xl text-white max-md:max-w-full">
          Would you like to receive community-based social support?
        </h1>
        <p className="self-center mt-2 ml-4 text-base max-md:max-w-full">
          <span className="text-[#000000]">Why?</span>
          <span className="text-[#3d3c3c]">
            {" "}
            Determines if Anonymous Sharing Zone & Community Tips are enabled.
          </span>
        </p>
        <OptionButton
          label="Yes"
          onClick={() => onOptionSelect?.(true)}
          className="mt-14 mr-5 ml-6"
        />
        <OptionButton
          label="No"
          variant="secondary"
          onClick={() => onOptionSelect?.(false)}
          className="mt-14 mr-5 ml-6"
        />
      </div>
    </section>
  );
};
