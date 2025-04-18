import React from "react";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  return (
    <section className="flex flex-col pt-3 pr-4 pb-11 pl-12 mx-auto w-full text-2xl bg-red-400 rounded-[30px] max-md:pl-5 max-md:mt-9 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between text-white max-md:max-w-full">
        <h2 className="self-start mt-5">View Tasks</h2>
        <button className="px-16 pt-3 pb-6 bg-stone-400 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
          ADD TASK
        </button>
      </div>

      <div className="flex flex-wrap gap-8 self-start mt-10">
        <div className="flex shrink-0 w-3 bg-white h-[487px] rounded-[30px] max-md:hidden" />
        <div className="grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <TaskItem taskNumber={1} isDone={true} />
          <div className="mt-6">
            <TaskItem taskNumber={2} isDone={true} />
          </div>
          <div className="mt-6">
            <TaskItem taskNumber={3} isDone={false} />
          </div>
          <div className="mt-6">
            <TaskItem taskNumber={4} isDone={false} />
          </div>
        </div>
      </div>
    </section>
  );
};
