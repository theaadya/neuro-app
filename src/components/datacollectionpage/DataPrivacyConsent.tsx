"use client";

import * as React from "react";
import { ConsentForm } from "./ConsentForm";
import { Navigation } from "./Navigation";


export const DataPrivacyConsent: React.FC = () => {
  const handleConsent = (consent: boolean) => {
    console.log("Consent:", consent);
    // Handle consent logic here
  };

  const handleNext = () => {
    console.log("Next clicked");
    // Handle navigation logic here
  };

  const handleSkip = () => {
    console.log("Skip clicked");
    // Handle skip logic here
  };

  return (
    <main className="overflow-hidden text-center text-white bg-black">
      <div className="flex relative flex-col pr-20 pb-10 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/13562f2750763ab5c7defe427c4948ddb653c8d0?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa8d870f3ad5be67902c2e7e03e44cd28cdae25?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Logo"
          className="object-contain max-w-full aspect-[1.74] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[204px]"
        />
        <div className="flex relative flex-col self-center mt-24 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
          <ConsentForm onConsent={handleConsent} />
          <Navigation onNext={handleNext} onSkip={handleSkip} />
        </div>
      </div>
    </main>
  );
};

export default DataPrivacyConsent;
