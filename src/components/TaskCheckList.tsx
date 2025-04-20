"use client";
import * as React from "react";
import { NavigationBar } from "./NavigationBar";
import { TaskList } from "./TaskList";
import { CapacityIndicator } from "./CapacityIndicator";
import { ChatWithNURO } from "./ChatWithNURO";
import { useLocation } from "react-router-dom";

export const TaskCheckList: React.FC = () => {
  const location = useLocation();
  const taskDescription = location.state?.taskDescription || "No description provided";
  return (
    <main className="overflow-hidden bg-black">
      <div className="flex relative flex-col items-end pt-2 pr-11 pb-16 pl-1 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ef367213e7e1df3b9a040f83c0c611b8eb3619?placeholderIfAbsent=true&apiKey=2cda7839db8f4018bae6be70e9c6edce"
          alt="Background"
          className="object-cover object-top absolute inset-0 w-full h-full -mt-10"
        />
        <div className="relative w-full">
          <NavigationBar />
        </div>
        <div className="relative w-full max-w-[1274px] max-md:mr-0.5 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between w-full mt-3 max-md:max-w-full">
          <h1 className="text-2xl text-black pt-6 pl-6 max-md:max-w-full max-md:text-3xl">
            TASK - 1 Check List
          </h1>
          <CapacityIndicator value="90%" />
        </header>
          <div className="mt-4 mr-6 ml-4 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-4 max-md:flex-col">
              <div className="w-[46%] max-md:w-full">
                <TaskList taskDescription={taskDescription} />
              </div>
              <div className="ml-3 w-[54%] max-md:w-full">
                <ChatWithNURO />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskCheckList;
