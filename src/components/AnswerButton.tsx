"use client";

import * as React from "react";

interface AnswerButtonProps {
  variant?: "default" | "selected";
  children: React.ReactNode;
  backgroundImage?: string;
  onClick?: () => void;
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
  variant = "default",
  children,
  backgroundImage,
  onClick,
}) => {
  const baseStyles =
    "px-16 py-7 mt-10 max-w-full whitespace-nowrap rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[736px] max-md:px-5 max-md:mt-10";

  if (backgroundImage) {
    return (
      <button
        onClick={onClick}
        className={`flex relative flex-col ${baseStyles} min-h-[93px]`}
      >
        <img
          src={backgroundImage}
          alt=""
          className="object-cover absolute inset-0 size-full"
          aria-hidden="true"
        />
        <span className="relative z-10 text-center w-full">{children}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variant === "selected" ? "bg-rose-300" : "bg-rose-300"}`}
    >
      {children}
    </button>
  );
};
