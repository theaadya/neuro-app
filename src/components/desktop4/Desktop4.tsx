"use client";
import * as React from "react";
import { Navigation } from "./Navigation";
import { TaskList } from "./TaskList";
import { CapacityIndicator } from "./CapacityIndicator";
import { SidePanel } from "./SidePanel";

function Desktop4() {
  return (
    <main className="overflow-hidden bg-black">
      <div className="flex flex-col py-8 pr-9 pl-1 w-full bg-white rounded-xl border border-black border-solid max-md:pr-5 max-md:max-w-full">
        <Navigation />

        <section className="self-end mt-32 w-full max-w-[1283px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-md:mr-2.5 max-md:max-w-full">
            <h1 className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
              TASK MANAGEMENT
            </h1>
            <CapacityIndicator percentage={60} />
          </div>

          <div className="mt-9 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[70%] max-md:ml-0 max-md:w-full">
                <TaskList />
              </div>
              <div className="ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                <SidePanel />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Desktop4;
