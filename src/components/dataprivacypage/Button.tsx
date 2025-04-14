import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-16 py-7 text-3xl whitespace-nowrap rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
        ${variant === "primary" ? "bg-rose-300" : "bg-transparent relative"}
        ${className}
      `}
    >
      {variant === "secondary" && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff1f0c03bb96cb1c030abe9f0983dd5c2a00c69?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
      )}
      {children}
    </button>
  );
};
