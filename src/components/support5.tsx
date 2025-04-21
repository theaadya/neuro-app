"use client";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundWithLogo } from "./support1";
import { SettingsCard } from "./support4";
import { NavigationButtons } from "./support3";

export const SocialSupportSettings: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState<boolean | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/DataPrivacy");
    if (selectedOption !== null) {
      console.log("Selected option:", selectedOption);
      
    }
  };

  const handleSkip = () => {
    navigate("/DataPrivacy"); 
    console.log("Skipped selection");
    
  };

  return (
    <main className="overflow-hidden text-center text-white bg-black">
      <div className="flex relative flex-col pr-20 pb-10 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <BackgroundWithLogo
          backgroundUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/183f57106ada46d2a4d64d8fa3913cdcb1fadc0c?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa8d870f3ad5be67902c2e7e03e44cd28cdae25?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
        />
        <div className="flex relative flex-col self-center mt-24 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
          <SettingsCard onOptionSelect={setSelectedOption} />
          <NavigationButtons onNext={handleNext} onSkip={handleSkip} />
        </div>
      </div>
    </main>
  );
};

export default SocialSupportSettings;
