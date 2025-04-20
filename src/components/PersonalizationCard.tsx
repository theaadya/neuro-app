import * as React from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { NavigationButtons } from "./NavigationButtons"; // Import NavigationButtons

interface PersonalizationCardProps {
  children?: ReactNode;
}

export function PersonalizationCard({ children }: PersonalizationCardProps) {

  const navigate = useNavigate(); // Initialize useNavigate

  const handleNext = () => {
    console.log("Next button clicked");
    navigate("/CognitivePreferencesQuestion"); // Navigate to CognitivePreferencesQuestion

  };

  const handleSkip = () => {
    console.log("Skip button clicked");

    navigate("/home"); // Navigate to the home screen

  };

  return (
    <section className="flex relative flex-col self-center px-20 pt-9 pb-5 mt-32 mb-0 w-full bg-red-400 max-w-[1006px] rounded-[30px] max-md:px-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <h1 className="py-4 pr-16 pl-24 text-5xl text-black bg-rose-300 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
        Personalize Your App
      </h1>
      <p className="self-center mt-11 ml-2.5 text-stone-50 max-md:mt-10 max-md:max-w-full">
        We'd love to get to know you better! Answer a few quick questions so we
        can tailor your experience, adapt to your needs, and support you in the
        best way possible. Your responses will help us personalize task
        management, sensory adaptation, social support, and productivity
        insights—making the app truly work for you.
      </p>
      {children}
      <NavigationButtons onNext={handleNext} onSkip={handleSkip} /> {/* Add NavigationButtons */}
    </section>
  );
}
