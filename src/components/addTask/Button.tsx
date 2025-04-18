"use client";

import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  onClick,
}) => {
  const baseStyles =
    "px-12 py-5 rounded-xl shadow-[0px_2px_2px_rgba(0,0,0,0.04)]";

  const variants = {
    primary: "bg-red-400 text-white",
    secondary: "bg-white bg-opacity-50 text-black",
    outline: "border border-solid border-neutral-600 text-stone-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
