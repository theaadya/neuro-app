"use client";
import * as React from "react";
import { NavigationBar } from "./NavigationBar";
import { TaskHeader } from "./TaskHeader";
import { MindMapContent } from "./MindMapContent";

function CreateMindMap() {
  return (
    <div className="overflow-hidden bg-black">
      <div className="flex flex-col pt-8 pr-12 pb-16 pl-1 w-full bg-white rounded-xl border border-black border-solid max-md:pr-5 max-md:max-w-full">
        <NavigationBar />
        <div className="self-end mt-32 w-full max-w-[1269px] max-md:mt-10 max-md:max-w-full">
          <TaskHeader />
          <MindMapContent />
        </div>
      </div>
    </div>
  );
}

export default CreateMindMap;
