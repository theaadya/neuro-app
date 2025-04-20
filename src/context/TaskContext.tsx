import React, { createContext, useContext, useState } from "react";

interface Task {
  id: number;
  name: string;
  status: "Ongoing" | "Done";
}

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Task - 1", status: "Ongoing" },
    { id: 2, name: "Task - 2", status: "Done" },
    { id: 3, name: "Task - 3", status: "Ongoing" },
    { id: 4, name: "Task - 4", status: "Done" },
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};