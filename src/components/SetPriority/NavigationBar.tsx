"use client";
import * as React from "react";

export const NavigationBar: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-10 w-full text-2xl text-black whitespace-nowrap max-w-[1312px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f46b84d12b5026b8ba8e909089ec180985bca8?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
        alt="Logo"
        className="object-contain shrink-0 max-w-full aspect-[1.75] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[159px]"
      />
      <div className="flex flex-wrap flex-auto gap-10 self-start px-20 py-2 mt-5 bg-rose-300 bg-opacity-50 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <ul className="flex gap-10 text-center">
          <li className="my-auto">
            <a href="#about">About</a>
          </li>
          <li className="px-12 py-5 bg-white bg-opacity-50 rounded-[40px] max-md:px-5">
            <a href="#task">Task</a>
          </li>
        </ul>
        <ul className="flex gap-10 items-center my-auto max-md:max-w-full">
          <li className="self-stretch my-auto text-center">
            <a href="#manage">Manage</a>
          </li>
          <li className="self-stretch my-auto text-center">
            <a href="#insight">Insight</a>
          </li>
          <li className="self-stretch">
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
