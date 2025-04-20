"use client";
import * as React from "react";
import { Logo } from "./Logo";
import { PersonalizationCard } from "./PersonalizationCard";
import { ActionButtons } from "./ActionButtons";
import { useNavigate } from "react-router-dom";

export default function PersonalizationPage() {
  const navigate = useNavigate();
  const handleYesClick = () => {
    // Handle Yes button click
    console.log("Yes clicked");
  };

  const handleSkipClick = () => {
    // Handle Skip button click
    console.log("Skip clicked");
  };

  return (
    <main className="overflow-hidden text-3xl text-center bg-black">
      <div className="flex relative flex-col pr-20 pb-36 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:pb-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20dad44d858f995d6984e2cfbb03a5fc2213689e?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Background pattern"
          className="object-cover absolute inset-0 size-full"
        />
        <Logo />
        <PersonalizationCard>
          <ActionButtons
            onYesClick={() => navigate("/CognitivePreferencesquestion")}
            onSkipClick={() => navigate("/home")}
          />
        </PersonalizationCard>
      </div>
    </main>
  );
}
