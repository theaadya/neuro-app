import * as React from "react";

interface TaskItemProps {
  taskNumber: number;
  status: string;
}

export const TaskItem: React.FC<TaskItemProps> = ({ taskNumber, status }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between py-6 pr-5 pl-16 max-w-full bg-white bg-opacity-10 rounded-[30px] w-[707px] max-md:pl-5">
      <h3 className="self-start mt-2.5 text-white">Task - {taskNumber}</h3>
      <div className="px-7 py-3 text-black whitespace-nowrap bg-stone-300 rounded-[40px] max-md:px-5">
        {status}
      </div>
    </div>
  );
};
