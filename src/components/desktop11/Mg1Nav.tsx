import * as React from "react";

export function Mg1Nav() {
  return (
    <nav className="flex relative flex-wrap gap-10 w-full text-2xl text-black whitespace-nowrap max-w-[1303px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/71da2e652f9257d4e3d2f154e02c9a65e74b3fa6?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
        className="object-contain shrink-0 max-w-full aspect-[1.75] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[159px]"
        alt="Logo"
      />
      <div className="flex flex-wrap flex-auto gap-10 self-start px-20 py-2 mt-5 bg-rose-300 bg-opacity-50 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 items-center text-center max-md:max-w-full">
          <button className="self-stretch my-auto">About</button>
          <button className="self-stretch my-auto">Task</button>
          <button className="self-stretch px-8 py-5 bg-white bg-opacity-50 rounded-[40px] max-md:px-5">
            Manage
          </button>
        </div>
        <div className="flex gap-10 my-auto">
          <button className="text-center">Insight</button>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}
