import React from "react";

interface TriggerOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  variant: "solid" | "image";
  backgroundImage?: string;
}

export const TriggerOption: React.FC<TriggerOptionProps> = ({
  label,
  isSelected,
  onClick,
  variant,
  backgroundImage,
}) => {
  const baseClasses =
    "mt-7 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full";
  const solidClasses = "px-16 py-3.5 bg-rose-300";

  if (variant === "image") {
    return (
      <button
        onClick={onClick}
        className={`flex relative flex-col px-16 py-3.5 w-full min-h-[50px] ${baseClasses} max-md:px-5`}
        aria-pressed={isSelected}
      >
        <img
          src={backgroundImage}
          alt=""
          className="object-cover absolute inset-0 size-full"
          aria-hidden="true"
        />
        <span className="relative z-10">{label}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${solidClasses} max-md:px-5`}
      aria-pressed={isSelected}
    >
      {label}
    </button>
  );
};
