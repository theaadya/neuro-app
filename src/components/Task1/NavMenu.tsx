import React from "react";

const NavMenu = () => {
  return (
    <nav className="flex flex-wrap flex-auto gap-10 self-start px-20 py-2 mt-5 bg-rose-300 bg-opacity-50 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 text-center">
        <a href="#about" className="my-auto">
          About
        </a>
        <a
          href="#task"
          className="px-12 py-5 bg-white bg-opacity-50 rounded-[40px] max-md:px-5"
        >
          Task
        </a>
      </div>
      <div className="flex gap-10 items-center my-auto max-md:max-w-full">
        <a href="#manage" className="self-stretch my-auto text-center">
          Manage
        </a>
        <a href="#insight" className="self-stretch my-auto text-center">
          Insight
        </a>
        <a href="#login" className="self-stretch">
          Login
        </a>
      </div>
    </nav>
  );
};

export default NavMenu;
