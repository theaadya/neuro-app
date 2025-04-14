"use client";

import * as React from "react";

interface TextInputProps {
  type?: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-12 py-7 w-full bg-rose-300 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-3xl text-center placeholder-stone-50 focus:outline-none focus:ring-2 focus:ring-red-500 max-md:px-5 ${className}`}
    />
  );
};
