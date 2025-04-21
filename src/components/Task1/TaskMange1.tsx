"use client";
import React, { useState } from "react";
import {NavigationBar} from "../NavigationBar";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function TaskManage1() {
  const location = useLocation();
  const { taskName, markOngoingDone } = location.state || {};

  const [tasks, setTasks] = useState([
    { id: 1, name: "Task - 1", status: "Ongoing" },
    { id: 2, name: "Task - 2", status: "Remaining" },
    { id: 3, name: "Task - 3", status: "Remaining" },
  ]);

  useEffect(() => {
    if (markOngoingDone) {
      setTasks((prev) =>
        prev.map((task) =>
          task.status === "Ongoing" ? { ...task, status: "Done" } : task
        )
      );
    }
  }, [markOngoingDone]);

  return (
    <section className="overflow-hidden bg-black">
      <main className="flex flex-col py-8 pr-10 pl-1 w-full bg-white border border-black border-solid max-md:pr-5 max-md:max-w-full">
        <NavigationBar />
        <div className="self-end mt-32 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
          <TaskHeader />
          <div className="mt-9 mr-11 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[74%] max-md:ml-0 max-md:w-full">
                <TaskList
                  taskName={taskName}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              </div>
              <div className="ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default TaskManage1;
