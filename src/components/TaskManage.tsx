import React from "react";
import { useParams } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

const TaskManage = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const { tasks } = useTaskContext();

  const task = tasks.find((t) => t.id === Number(taskId));

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Task Details</h1>
      <p>
        <strong>Name:</strong> {task.name}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
    </div>
  );
};

export default TaskManage;