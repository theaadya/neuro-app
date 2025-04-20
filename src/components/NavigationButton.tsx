import React from "react";

interface NavigationButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-16 py-5 text-3xl text-white bg-rose-300 rounded-3xl transition-transform cursor-pointer border-[none] hover:bg-rose-400 transition-colors duration-200 max-md:px-5" ${className}`}
    >
      {children}
    </button>
  );
};
