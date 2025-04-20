"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoIcon } from "./LogoIcon";
import { OptionButton } from "./OptionButton";
import { NavigationButton } from "./NavigationButton";

export const PersonalizationForm: React.FC = () => {
  const navigate = useNavigate();

  const handleOptionClick = (option: string) => {
    console.log("Selected option:", option);
  };

  const handleNavigation = (action: "next" | "skip") => {
    console.log("Navigation action:", action);
    if (action === "next") {
      navigate("/CommunitySettingsPage"); 
    } else {
      navigate("/CommunitySettingsPage"); 
    }
  };

  return (
    <main className="flex justify-center items-center p-5 w-full min-h-screen">
      <section className="flex relative flex-col items-center p-10 w-full bg-red-400 max-w-[1006px] rounded-[30px] max-md:p-8 max-sm:p-5 max-sm:rounded-3xl">
        <LogoIcon />

        <header className="mb-8 text-2xl text-black">Personalize</header>

        <h1 className="mb-5 text-4xl leading-tight text-center text-white max-w-[800px] max-md:text-3xl max-sm:text-2xl">
          Would you like AI support for focus, social interactions, or emotional
          well-being?
        </h1>

        <div className="mb-10 text-center">
          <strong className="mr-1.5 text-base text-black">Why?</strong>
          <span className="text-base text-neutral-700">
            Customizes Task Scheduling and Break Recommendations.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10 w-full max-w-[736px] max-sm:gap-4">
          <OptionButton
            label="Focus & task reminders"
            onClick={() => handleOptionClick("focus")}
          />
          <OptionButton
            label="Social interactions & communication cues"
            onClick={() => handleOptionClick("social")}
          />
          <OptionButton
            label="Emotional well-being & stress support"
            onClick={() => handleOptionClick("emotional")}
          />
          <OptionButton
            label="No, I prefer manual control"
            onClick={() => handleOptionClick("manual")}
          />
        </div>

        <nav className="flex gap-5 max-sm:flex-col max-sm:w-full">
          <NavigationButton 
            onClick={() => handleNavigation("next")}>
            Next
          </NavigationButton>

          <NavigationButton onClick={() => handleNavigation("skip")}>
            Skip
          </NavigationButton>
        </nav>
      </section>
    </main>
  );
};
