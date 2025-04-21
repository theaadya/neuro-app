import React, { useState } from "react";
import { fetchTaskBreakdown } from "../utils/api";

interface TaskListProps {
  taskDescription?: string; // Add taskDescription as an optional prop
}

export const TaskList: React.FC<TaskListProps> = ({ taskDescription: initialTaskDescription = "" }) => {
  const [taskDescription, setTaskDescription] = useState(initialTaskDescription);
  const [tasks, setTasks] = useState<string[]>([]);

  const handleGenerateTasks = async () => {
    if (!taskDescription.trim()) {
      alert("Please enter a task description.");
      return;
    }

    try {
      const breakdown = await fetchTaskBreakdown(taskDescription);
      const steps = breakdown.split("\n").filter((step: string) => step.trim() !== ""); // Explicitly type 'step' as string
      setTasks(steps);
    } catch (error) {
      alert("Failed to generate task breakdown. Please try again.");
    }
  };

  return (
    <article className="pt-4 pr-4 pb-6 pl-8 mx-auto w-full text-lg text-black bg-red-400 rounded-[16px] max-md:px-3 max-md:mt-5 max-md:max-w-full">
      <div className="flex flex-col gap-4">
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Enter task description..."
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleGenerateTasks}
          className="px-4 py-2 bg-blue-500 text-black rounded"
        >
          Generate Task Breakdown
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Task Breakdown</h2>
        <ul className="list-disc pl-5 space-y-2">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};