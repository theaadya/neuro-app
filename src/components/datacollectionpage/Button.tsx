"use client";

import * as React from "react";

type ButtonVariant = "primary" | "outline" | "image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-16 py-7 text-3xl rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 relative";

  const getVariantStyles = (variant: ButtonVariant) => {
    switch (variant) {
      case "image":
        return "text-white";
      case "primary":
        return "bg-rose-300 text-white";
      case "outline":
        return "bg-transparent text-white border border-white";
      default:
        return "bg-rose-300 text-white";
    }
  };

  return (
    <button
      className={`${baseStyles} ${getVariantStyles(variant)} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {variant === "image" && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2df5fd88c1e962a22955066e1cee88dcb0a4babd?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt=""
          className="object-cover absolute inset-0 size-full rounded-[100px]"
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
