import * as React from "react";

export function Mg1Updates() {
  return (
    <div className="flex relative flex-col max-md:mt-10 max-md:max-w-full">
      <h1 className="self-start ml-3 text-5xl text-black max-md:max-w-full max-md:text-4xl">
        POST MEETING UPDATES
      </h1>
      <div className="px-10 py-14 mt-3 text-4xl text-white bg-red-400 rounded-[30px] max-md:px-5 max-md:max-w-full">
        <button className="w-full px-9 py-8 bg-white bg-opacity-10 rounded-[30px] max-md:px-5 max-md:mr-1 max-md:max-w-full">
          Get Meeting Points
        </button>
        <button className="w-full px-8 py-8 mt-8 bg-white bg-opacity-10 rounded-[30px] max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
          Get Meeting Captions
        </button>
        <button className="w-full p-8 mt-8 bg-white bg-opacity-10 rounded-[30px] max-md:px-5 max-md:max-w-full">
          Get Meeting Report
        </button>
        <button className="w-full px-8 py-8 mt-7 bg-white bg-opacity-10 rounded-[30px] max-md:px-5 max-md:max-w-full">
          Visualise your Focus vs Distraction
        </button>
      </div>
    </div>
  );
}
