import * as React from "react";
import { TaskItem } from "./TaskItem";

export const TaskList: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-8 px-16 py-12 w-full text-2xl bg-red-400 rounded-[30px] max-md:px-5 max-md:mt-10">
      <div className="flex shrink-0 self-start w-3 bg-white h-[487px] rounded-[30px] max-md:hidden" />
      <div className="grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <TaskItem taskNumber={1} status="Done" />
        <div className="mt-6">
          <TaskItem taskNumber={2} status="Done" />
        </div>
        <div className="mt-6">
          <TaskItem taskNumber={3} status="Done" />
        </div>
        <div className="mt-6">
          <TaskItem taskNumber={4} status="Done" />
        </div>
      </div>
    </section>
  );
};
