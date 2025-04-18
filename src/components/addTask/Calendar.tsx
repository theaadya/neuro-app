"use client";

import React from "react";

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
}) => {
  return (
    <div className="overflow-hidden p-6 mt-8 w-full font-semibold text-center text-gray-600 bg-white rounded-lg shadow-lg max-md:px-5">
      <header className="flex overflow-hidden gap-10 justify-between items-start w-full text-sm leading-none">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/75d5dc08823124b204d08e4e36ca9019ca3ce719?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
          alt="Previous month"
          className="object-contain shrink-0 w-4 aspect-square"
        />
        <h2>September 2021</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/46b370f8d9860b0b763bc70b11330f8fff41c490?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
          alt="Next month"
          className="object-contain shrink-0 w-4 aspect-square"
        />
      </header>

      <div className="flex gap-2 items-start mt-6 w-full text-xs tracking-widest leading-tight uppercase text-neutral-300">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div key={day} className="gap-2.5 self-stretch min-h-5 w-[30px]">
            {day}
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-6 w-full text-base leading-none whitespace-nowrap">
        {[
          [1, 2, 3, 4, 5, 6, 7],
          [8, 9, 10, 11, 12, 13, 14],
          [15, 16, 17, 18, 19, 20, 21],
          [22, 23, 24, 25, 26, 27, 28],
          [29, 30, 31],
        ].map((week, weekIndex) => (
          <div key={weekIndex} className="flex gap-2 items-start mt-2">
            {week.map((day) => (
              <div
                key={day}
                className={`min-h-[30px] w-[30px] ${
                  day === 19 ? "text-white bg-orange-600 rounded-[29px]" : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
