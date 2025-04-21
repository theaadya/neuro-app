"use client";

import React, { useState } from "react";

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(
    selectedDate || new Date()
  );
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [message, setMessage] = useState<string>("");

  const daysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(year, month);

    const weeks: number[][] = [];
    let week: number[] = [];

    // Fill empty days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      week.push(0); // Empty day
    }

    // Fill days of the month
    for (let day = 1; day <= totalDays; day++) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

    // Fill remaining empty days in the last week
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(0); // Empty day
      }
      weeks.push(week);
    }

    return weeks;
  };

  const handleDateClick = (day: number) => {
    if (day === 0) return; // Ignore empty days
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDay(newDate);
    onDateSelect?.(newDate);
  };

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDoneClick = () => {
    if (selectedDay) {
      setMessage(`Date and time are set: ${selectedDay.toDateString()}`);
    } else {
      setMessage("Please select a date first.");
    }
  };

  const weeks = generateCalendar();

  return (
    <div className="overflow-hidden p-6 mt-8 w-full font-semibold text-center text-gray-600 bg-white rounded-lg shadow-lg max-md:px-5">
      <header className="flex overflow-hidden gap-10 justify-between items-center w-full text-sm leading-none">
        <button onClick={handlePreviousMonth}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75d5dc08823124b204d08e4e36ca9019ca3ce719?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
            alt="Previous month"
            className="object-contain shrink-0 w-4 aspect-square"
          />
        </button>
        <h2>
          {currentDate.toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46b370f8d9860b0b763bc70b11330f8fff41c490?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
            alt="Next month"
            className="object-contain shrink-0 w-4 aspect-square"
          />
        </button>
      </header>

      <div className="flex gap-2 items-start mt-6 w-full text-xs tracking-widest leading-tight uppercase text-neutral-300">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div key={day} className="gap-2.5 self-stretch min-h-5 w-[30px]">
            {day}
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-6 w-full text-base leading-none whitespace-nowrap">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex gap-2 items-start mt-2">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                onClick={() => handleDateClick(day)}
                className={`min-h-[30px] w-[30px] flex items-center justify-center cursor-pointer ${
                  selectedDay &&
                  day === selectedDay.getDate() &&
                  currentDate.getMonth() === selectedDay.getMonth() &&
                  currentDate.getFullYear() === selectedDay.getFullYear()
                    ? "text-white bg-orange-600 rounded-[29px]"
                    : day === 0
                    ? "text-gray-300"
                    : "hover:bg-gray-200"
                }`}
              >
                {day !== 0 ? day : ""}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={handleDoneClick}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Done
      </button>

      {message && <p className="mt-4 text-white-600">{message}</p>}
    </div>
  );
};
