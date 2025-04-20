"use client";
import * as React from "react";
import {NavigationBar} from "../NavigationBar";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import Sidebar from "./Sidebar";

function TaskManage1() {
  return (
    <section className="overflow-hidden bg-black">
      <main className="flex flex-col py-8 pr-10 pl-1 w-full bg-white rounded-xl border border-black border-solid max-md:pr-5 max-md:max-w-full">
        <NavigationBar />
        <div className="self-end mt-32 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
          <TaskHeader />
          <div
            className="mt-9 mr-11 max-md:mr-2.5 max-md:max-w-full"
            // space={55}
          >
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[74%] max-md:ml-0 max-md:w-full">
                <TaskList />
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
