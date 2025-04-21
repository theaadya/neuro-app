import * as React from "react";

interface TaskListProps {
  taskDescription: string;
}

export const TaskList: React.FC<TaskListProps> = ({ taskDescription }) => {
  const [checklistItems, setChecklistItems] = React.useState<string[]>([]);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    const fetchChecklist = async () => {
      const fullMessage = `Break down the following task into not more than 7 actionable steps. Respond with only the main bullet points in a checklist format. Avoid paragraphs. Task: ${taskDescription}`;

      try {
        const res = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: fullMessage }),
        });

        const data = await res.json();
        const rawText = data.response || "";

        const items = rawText
          .split(/\n+/)
          .map((line: string) => line.replace(/^[-*✅\s]+/, "").trim())
          .filter((line: string) => line.length > 0);

        setChecklistItems(items);
      } catch (err) {
        console.error("Error fetching checklist:", err);
      }
    };

    fetchChecklist();
  }, [taskDescription]);

  const visibleItems = expanded ? checklistItems : checklistItems.slice(0, 5);

  return (
    <article className="pt-4 pr-4 pb-6 pl-8 mx-auto w-full text-lg text-white bg-red-400 rounded-[16px] max-md:px-3 max-md:mt-5 max-md:max-w-full">
      <div className="flex shrink-0 mt-6 max-w-full bg-white bg-opacity-10 p-4 rounded-[16px] w-[460px] max-md:mt-5">
        <ul className="list-disc space-y-3 pl-5">
          {visibleItems.map((item, index) => (
            <li key={index}>
              ✅ <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </div>

      {checklistItems.length > 5 && (
        <button
          className="mt-4 text-sm text-white underline"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </article>
  );
};