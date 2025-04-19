"use client";
import * as React from "react";
import { NavigationBar } from "../NavigationBar";
import { TaskList } from "./TaskList";
import { ChatWidget } from "./ChatWidget";
import { PriorityHeader } from "./PriorityHeader";

const SetPriorityLevel: React.FC = () => {
  return (
    <main className="overflow-hidden bg-black">
      <div className="flex flex-col pt-8 pr-20 pb-16 pl-1 w-full bg-white rounded-xl border border-black border-solid max-md:pr-5 max-md:max-w-full">
        <NavigationBar />
        <div className="self-end mt-36 w-full max-w-[1236px] max-md:mt-10 max-md:max-w-full">
          <PriorityHeader />
          <div className="mt-8 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <section className="w-[74%] max-md:ml-0 max-md:w-full">
                <TaskList />
              </section>
              <aside className="ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                <ChatWidget />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SetPriorityLevel;
