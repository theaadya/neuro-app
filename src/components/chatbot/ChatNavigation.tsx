import * as React from "react";

interface NavItemProps {
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, active }) => {
  return (
    <button
      className={`text-2xl ${
        active
          ? "px-14 py-5 bg-white bg-opacity-50 rounded-[40px] max-md:px-5"
          : "my-auto text-center"
      }`}
    >
      {label}
    </button>
  );
};

export const ChatNavigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-10 px-20 py-2 my-auto bg-rose-300 bg-opacity-50 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 text-center">
        <NavItem label="About" />
        <NavItem label="Task" active />
      </div>
      <div className="flex gap-10 items-center my-auto max-md:max-w-full">
        <NavItem label="Manage" />
        <NavItem label="Insight" />
        <NavItem label="Login" />
      </div>
    </nav>
  );
};
