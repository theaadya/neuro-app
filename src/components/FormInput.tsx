import * as React from "react";

interface FormInputProps {
  placeholder: string;
  type: "text" | "email" | "password";
  className?: string;
}

export function FormInput({
  placeholder,
  type,
  className = "",
}: FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-12 py-7 whitespace-nowrap bg-rose-300 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full ${className}`}
    />
  );
}
