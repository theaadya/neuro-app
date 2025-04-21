// CreateMindMap.tsx
"use client";
import * as React from "react";
import { NavigationBar } from "../NavigationBar";
import { TaskHeader } from "./TaskHeader";
import { MindMapContent } from "./MindMapContent";
import { useLocation } from "react-router-dom";

interface Category {
  title: string;
  subtasks: string[];
}

function CreateMindMap() {
  const location = useLocation();
  const taskDescription = location.state?.taskDescription || "No description provided";
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    const fetchMindmap = async () => {
      // Prompt asks for hierarchical JSON with 3-4 main branches and 2-3 sub-branches each
      const prompt = `Break down the following task into 3-4 main categories, each with up to 3 actionable subtasks. Respond ONLY with valid JSON in this format: { \"categories\": [ { \"title\": string, \"subtasks\": [string] } ] }. Task: ${taskDescription}`;

      try {
        const res = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: prompt }),
        });
        const data = await res.json();
        // Parse JSON safely
        const payload = JSON.parse(data.response);
        setCategories(payload.categories || []);
        console.log(payload)
      } catch (err) {
        console.error("Error fetching hierarchical mindmap:", err);
      }
    };

    fetchMindmap();
  }, [taskDescription]);

  return (
    <div className="overflow-hidden bg-black">
      <div className="flex flex-col pt-8 pr-12 pb-16 pl-1 w-full bg-white max-md:pr-5 max-md:max-w-full">
        <NavigationBar />
        <div className="self-end mt-32 w-full max-w-[1269px] max-md:mt-10 max-md:max-w-full">
          <TaskHeader />
          <MindMapContent
            categories={categories}
            centralLabel={taskDescription}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateMindMap;
