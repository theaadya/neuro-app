"use client";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { TaskCard } from "./TaskCard";
import { TaskBreakdown } from "./TaskBreakdown";
import { CapacityIndicator } from "./CapacityIndicator";

export const TaskManagement: React.FC = () => {
  const location = useLocation();
  const taskNameFromState = location.state?.taskName ?? "";
  console.log(taskNameFromState)

  const [taskDescription, setTaskDescription] = useState<string>(
    taskNameFromState || "Prepare for Tomorrow's Sprint Meeting (Backend Team)"
  );  

  const handleDescriptionChange = (description: string) => {
    setTaskDescription(description);
    console.log("Updated Task Description:", description);
  };

  // If you want to update description when navigating to this page again
  useEffect(() => {
    if (taskNameFromState) {
      setTaskDescription(taskNameFromState);
    }
  }, [taskNameFromState]);

  return (
    <main className="overflow-hidden bg-black h-screen">
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
            <h1 className="text-4xl text-black pt-6 pl-6 max-md:max-w-full max-md:text-3xl">
              TASK MANAGEMENT
            </h1>
            <CapacityIndicator value="90%" />
          </header>
          <div className="mt-4 mr-6 ml-4 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-4 max-md:flex-col">
              <div className="w-[46%] max-md:w-full">
              <TaskCard
                taskDescription={taskDescription}
                onDescriptionChange={handleDescriptionChange}
              />
              </div>
              <div className="ml-3 w-[54%] max-md:w-full">
                <TaskBreakdown taskDescription={taskDescription} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskManagement;
