"use client";
import * as React from "react";

interface BackgroundWithLogoProps {
  backgroundUrl: string;
  logoUrl: string;
}

export const BackgroundWithLogo: React.FC<BackgroundWithLogoProps> = ({
  backgroundUrl,
  logoUrl,
}) => {
  return (
    <>
      <img
        src={backgroundUrl}
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      <img
        src={logoUrl}
        alt="Logo"
        className="object-contain max-w-full aspect-[1.74] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[204px]"
      />
    </>
  );
};
