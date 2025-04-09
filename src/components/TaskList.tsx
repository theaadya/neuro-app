import * as React from "react";

export const TaskList: React.FC = () => {
  return (
    <article className="pt-4 pr-4 pb-6 pl-8 mx-auto w-full text-lg text-white bg-red-400 rounded-[16px] max-md:px-3 max-md:mt-5 max-md:max-w-full">
      <div className="flex gap-3 justify-between w-full max-md:max-w-full">
      </div>
      <div className="flex shrink-0 mt-6 max-w-full bg-white bg-opacity-10 p-4 rounded-[16px] w-[460px] max-md:mt-5">
        <ul className="list-none space-y-3">
          <li>✅ <strong>Review Sprint Goals & Progress</strong></li>
          <li>✅ <strong>Update Task Status on the Tracker</strong></li>
          <li>✅ <strong>Prepare Discussion Points</strong></li>
          <li>✅ <strong>Review Code & Merge Requests</strong></li>
          <li>✅ <strong>Test & Validate Recent Changes</strong></li>
          <li>✅ <strong>Coordinate with Other Teams (if needed)</strong></li>
          <li>✅ <strong>Set Clear Goals for Next Steps</strong></li>
        </ul>
      </div>
    </article>
  );
};
