"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundLayout } from "./BackgroundLayout";
import { SettingsCard } from "./SettingsCard";
import { NavigationButtons } from "./NavigationButtons";

const CommunitySettingsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleOptionSelect = (option: string) => {
    console.log("Selected option:", option);
  };

  const handleNext = () => {
    navigate("/SocialSupportSettings");
  };

  const handleSkip = () => {
    navigate("/SocialSupportSettings");
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
