"use client";
import * as React from "react";

export const Navigation: React.FC = () => {
  return (
    <nav className="flex relative flex-wrap gap-9 self-start text-2xl text-black whitespace-nowrap">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f46b84d12b5026b8ba8e909089ec180985bca8?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
        className="object-contain shrink-0 max-w-full aspect-[1.75] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[159px]"
        alt="Logo"
      />
      <div className="flex flex-wrap flex-auto gap-10 px-20 py-2 my-auto bg-rose-300 bg-opacity-50 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 text-center">
          <button className="my-auto">About</button>
          <button className="px-14 py-5 bg-white bg-opacity-50 rounded-[40px] max-md:px-5">
            Task
          </button>
        </div>
        <div className="flex gap-10 items-center my-auto max-md:max-w-full">
          <button className="self-stretch my-auto text-center">Manage</button>
          <button className="self-stretch my-auto text-center">Insight</button>
          <button className="self-stretch">Login</button>
        </div>
      </div>
    </nav>
  );
};
