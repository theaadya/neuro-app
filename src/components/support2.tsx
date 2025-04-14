"use client";
import * as React from "react";

interface OptionButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export const OptionButton: React.FC<OptionButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "px-16 py-7 text-3xl whitespace-nowrap rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5";
  const variantStyles =
    variant === "primary" ? "bg-[#FFA6A6]" : "relative min-h-[93px] w-full";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {variant === "secondary" && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/178e307e5d67791cb863f5fbc0e629159d6c1e8b?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt=""
          className="object-cover absolute inset-0 size-full pointer-events-none"
          aria-hidden="true"
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
};
