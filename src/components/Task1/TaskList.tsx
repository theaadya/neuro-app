"use client";
import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task - 1", status: "Ongoing" },
    { id: 2, name: "Task - 2", status: "Done" },
    { id: 3, name: "Task - 3", status: "Ongoing" },
    { id: 4, name: "Task - 4", status: "Done" },
  ]);

  const handleAddTask = () => {
    // In a real application, this would open a form or modal
    const newTask = {
      id: tasks.length + 1,
      name: `Task - ${tasks.length + 1}`,
      status: "Ongoing",
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <section className="flex flex-col pt-3 pr-4 pb-11 pl-12 mx-auto w-full text-2xl bg-red-400 rounded-[30px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between text-white max-md:max-w-full">
        <h2 className="self-start mt-5">View Tasks</h2>
        <button
          onClick={handleAddTask}
          className="px-16 pt-3 pb-6 bg-stone-400 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
        >
          ADD TASK
        </button>
      </div>
      <div className="flex flex-wrap gap-8 self-start mt-10">
        <div className="flex shrink-0 w-3 bg-white h-[487px] rounded-[30px] max-md:hidden" />
        <div className="grow shrink-0 basis-0 w-fit max-md:max-w-full">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              name={task.name}
              // status={task.status}
              status={task.status as "Ongoing" | "Done"}

              className={task.id > 1 ? "mt-6" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskList;
