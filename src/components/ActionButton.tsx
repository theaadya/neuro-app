"use client";
import * as React from "react";

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "black";
  className?: string;
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseStyles =
    "px-16 py-4 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-2xl";
  const variantStyles = {
    primary: "bg-rose-200 text-black",
    secondary: "bg-stone-400 text-white",
    black: "bg-black text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
