import * as React from "react";
import { ActionButton } from "./ActionButton";
import { useNavigate } from "react-router-dom";

interface TaskBreakdownProps {
  taskDescription: string;
}

export const TaskBreakdown: React.FC<TaskBreakdownProps> = ({ taskDescription }) => {
  const navigate = useNavigate();
  const handleCreateChecklist = () => {
    navigate("/checklist", { state: { taskDescription } });
  };
  return (
    <section className="flex flex-col mt-12 w-full text-xl max-md:mt-8 max-md:max-w-full">
      <div className="flex flex-col self-end max-w-full text-black w-[400px]">
        <h2 className="self-center">BREAKDOWN YOUR TASK</h2>
        <ActionButton 
          onClick={handleCreateChecklist}
          className="mt-5 max-md:max-w-full">
          Create Checklist
        </ActionButton>
        <ActionButton 
          onClick={() => navigate("/create-mind-map")}
          className="mt-5 max-md:max-w-full">
          Create Mind Map
        </ActionButton>
      </div>
      {/* Right-aligned buttons with same size */}
      <div className="flex justify-end gap-2 mt-16 text-white ml-auto max-md:mt-8 max-md:mr-2.5 max-md:max-w-full">
        <ActionButton
          variant="black"
          className="py-2 px-4 text-lg w-[190px]"
        >
          Switch Task
        </ActionButton>
        <ActionButton
          variant="black"
          className="py-2 px-4 text-lg w-[190px]"
        >
          Chat with NURO
        </ActionButton>
      </div>
    </section>
  );
};
