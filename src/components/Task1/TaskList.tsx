"use client";
import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { useNavigate } from "react-router-dom";

type TaskListProps = {
  taskName?: string;
  tasks: { id: number; name: string; status: string }[];
  setTasks: React.Dispatch<React.SetStateAction<{ id: number; name: string; status: string }[]>>;
};

const TaskList: React.FC<TaskListProps> = ({ taskName, tasks, setTasks }) => {
  const navigate = useNavigate();

  const handleTaskClick = () => {
    navigate(`/taskmanage/`);
  };

  const handleNewTaskClick = () => {
    if (taskName) {
      navigate(`/taskmanage/`, {
        state: { taskName },
      });
    } else {
      navigate(`/taskmanage/`);
    }
  };

  return (
    <section className="flex flex-col pt-3 pr-4 pb-11 pl-12 mx-auto w-full text-2xl bg-red-400 rounded-[30px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between text-white max-md:max-w-full">
        <button
          onClick={() => navigate("/addtask")}
          className="px-16 pt-3 pb-6 bg-stone-400 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
        >
          ADD TASK
        </button>
      </div>
      <div className="flex flex-wrap gap-8 self-start mt-10">
        <div className="flex shrink-0 w-3 bg-white h-[487px] rounded-[30px] max-md:hidden" />
        <div className="grow shrink-0 basis-0 w-fit max-md:max-w-full">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={handleTaskClick}
              className="cursor-pointer"
            >
              <TaskItem
                name={task.name}
                status={task.status as "Ongoing" | "Done"}
                className={task.id > 1 ? "mt-6" : ""}
              />
            </div>
          ))}

          {taskName && (
            <div
              onClick={handleNewTaskClick}
              className="cursor-pointer mt-6"
            >
              <TaskItem
                name="Task - 4"
                status="Ongoing"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskList;
