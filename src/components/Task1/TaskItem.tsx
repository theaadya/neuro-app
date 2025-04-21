import React from "react";

interface TaskItemProps {
  name: string;
  status: "Ongoing" | "Done" | "Remaining";
  className?: string;
}

const TaskItem: React.FC<TaskItemProps> = ({
  name,
  status,
  className = "",
}) => {
  return (
    <article
      className={`flex flex-wrap gap-5 justify-between py-6 pr-5 pl-16 max-w-full bg-white bg-opacity-10 rounded-[30px] w-[707px] max-md:pl-5 ${className}`}
    >
      <h3 className="self-start mt-3 text-white">{name}</h3>
      <span
        className={`px-3.5 py-3 text-black whitespace-nowrap rounded-[40px] ${
          status === "Done"
            ? "bg-white bg-opacity-50 px-7 max-md:px-5"
            : "bg-stone-300"
        }`}
      >
        {status}
      </span>
    </article>
  );
};

export default TaskItem;
