"use client";

import * as React from "react";
import { BackgroundLayout } from "./BackgroundLayout";
import { SettingsCard } from "./SettingsCard";
import { NavigationButtons } from "./NavigationButtons";

const CommunitySettingsPage: React.FC = () => {
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
    <BackgroundLayout>
      <div className="flex relative flex-col self-center mt-24 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
        <SettingsCard onOptionSelect={handleOptionSelect} />
        <NavigationButtons onNext={handleNext} onSkip={handleSkip} />
      </div>
    </BackgroundLayout>
  );
};

export default CommunitySettingsPage;
