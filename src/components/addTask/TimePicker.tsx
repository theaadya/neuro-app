"use client";

import React, { useState } from "react";
import { Button } from "./Button";

interface TimePickerProps {
  onSave?: (time: string) => void;
  onCancel?: () => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ onSave, onCancel }) => {
  const [time, setTime] = useState<string>("");
  const [message, setMessage] = useState<string>("Set time");

  const handleSave = () => {
    if (time) {
      setMessage("Time set :)");
      onSave?.(time);
    } else {
      alert("Please select a time.");
    }
  };

  const handleCancel = () => {
    setTime("");
    setMessage("Set time");
    onCancel?.();
  };

  return (
    <section className="py-8 mt-11 font-medium text-center whitespace-nowrap bg-white rounded-xl max-md:mt-10">
      <div className="flex flex-col items-center px-9 w-full text-xl text-black max-md:px-5">
        <label htmlFor="time-picker" className="mb-4 font-semibold">
          Select Time:
        </label>
        <input
          id="time-picker"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="flex gap-3.5 mt-8 text-base justify-center">
        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </div>

      {message && <p className="mt-4 text-black-600">{message}</p>}
    </section>
  );
};
