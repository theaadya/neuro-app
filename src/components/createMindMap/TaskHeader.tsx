"use client";
import * as React from "react";

export const TaskHeader: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full max-md:mr-0.5 max-md:max-w-full">
      <h1 className="my-auto text-5xl text-black max-md:max-w-full max-md:text-4xl">
        TASK - 1 Mind Map
      </h1>
      <div className="flex gap-4 px-7 py-5 text-white bg-red-500 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
        <p className="my-auto text-xl basis-auto">CAPACITY INDICATOR</p>
        <div className="flex text-2xl whitespace-nowrap">
          <p className="z-10 grow max-md:mr-0">60%</p>
          <p></p>
        </div>
      </div>
    </header>
  );
};
