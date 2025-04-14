"use client";

import * as React from "react";

interface LoginButtonProps {
  onClick: () => void;
  className?: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-16 py-4 text-3xl text-white bg-red-400 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-red-500 transition-colors duration-200 max-md:px-5 ${className}`}
    >
      Login
    </button>
  );
};
