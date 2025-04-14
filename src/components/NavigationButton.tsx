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
      className={`px-16 py-5 text-3xl text-white bg-rose-300 rounded-3xl transition-transform cursor-pointer border-[none] hover:scale-[1.02] active:scale-[0.98] delay-[0.2s] duration-[0.2s,box-shadow] max-md:px-10 max-md:py-4 max-md:text-2xl max-sm:p-4 max-sm:w-full max-sm:text-xl ${className}`}
    >
      {children}
    </button>
  );
};
