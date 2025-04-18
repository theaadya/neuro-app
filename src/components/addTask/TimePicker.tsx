"use client";

import React from "react";
import { Button } from "./Button";

interface TimePickerProps {
  onSave?: (time: string) => void;
  onCancel?: () => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ onSave, onCancel }) => {
  return (
    <section className="py-8 mt-11 font-medium text-center whitespace-nowrap bg-white rounded-xl max-md:mt-10">
      <div className="flex flex-col items-start px-9 w-full text-xl text-black max-md:px-5">
        <div className="flex gap-6 justify-center items-center px-1.5 py-4 max-w-full rounded-xl text-neutral-600 w-[174px]">
          <span className="self-stretch my-auto w-[37px]">06</span>
          <span className="self-stretch my-auto w-[39px]">27</span>
          <span className="self-stretch my-auto w-[38px]">54</span>
        </div>

        <span className="mt-3.5 ml-16 w-2 max-md:ml-2.5">:</span>
        <span className="z-10 self-center -mt-6 w-2 font-bold">:</span>

        <div className="flex z-10 gap-6 justify-center items-center px-2 py-4 mt-0 max-w-full font-semibold border-t border-b border-zinc-500 w-[174px]">
          <span className="self-stretch my-auto w-[38px]">06</span>
          <span className="self-stretch my-auto w-[37px]">28</span>
          <span className="self-stretch my-auto w-[37px]">55</span>
        </div>

        <div className="self-end px-1 py-4 -mt-12 font-semibold border-t border-b border-zinc-500 w-[52px]">
          PM
        </div>
      </div>

      <div className="flex z-10 flex-col -mt-2 mr-3.5 ml-3.5 max-md:mx-2.5">
        <div className="flex self-center max-w-full text-xl text-neutral-600 w-[226px]">
          <div className="flex gap-6 justify-center items-center px-1.5 py-4 rounded-xl">
            <span className="self-stretch my-auto w-[37px]">06</span>
            <span className="self-stretch my-auto w-[39px]">27</span>
            <span className="self-stretch my-auto w-[38px]">54</span>
          </div>
          <span className="py-4 pr-1 pl-0.5">AM</span>
        </div>

        <div className="flex gap-3.5 mt-8 text-base">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => onSave?.("06:28 PM")}>
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};
