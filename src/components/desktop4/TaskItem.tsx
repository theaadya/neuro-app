import React from "react";

interface TaskItemProps {
  taskNumber: number;
  isDone: boolean;
}

export const TaskItem: React.FC<TaskItemProps> = ({ taskNumber, isDone }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between py-6 pr-5 pl-16 max-w-full bg-white bg-opacity-10 rounded-[30px] w-[707px] max-md:pl-5">
      <span className={`my-auto ${isDone ? "text-white" : ""}`}>
        Task - {taskNumber}
      </span>
      <button
        className={`px-7 py-3 whitespace-nowrap rounded-[40px] max-md:px-5
          ${
            isDone
              ? "bg-red-500 text-white"
              : "bg-white bg-opacity-50 text-black"
          }`}
      >
        Done
      </button>
    </div>
  );
};
