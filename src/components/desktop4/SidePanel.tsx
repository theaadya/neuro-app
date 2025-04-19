import React from "react";
import { useNavigate } from "react-router-dom";

export const SidePanel = () => {
  const navigate = useNavigate();

  return (
    <aside className="flex flex-col mt-24 text-2xl text-black max-md:mt-10">
      <button
        onClick={() => navigate("/setpriority")} 
        className="self-center px-9 py-6 max-w-full bg-rose-300 bg-opacity-50 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[285px] max-md:px-5">
        Set Priority Level
      </button>

      <button className="self-center px-16 py-6 mt-7 max-w-full bg-rose-300 bg-opacity-50 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[285px] max-md:px-5">
        Set Deadline
      </button>

      <div className="px-8 py-2.5 mt-24 text-white bg-red-800 max-md:px-5 max-md:mt-10">
        <p>
          SUGGESTED TASK <br />
          Task 3: according to your energy level !!{" "}
        </p>
      </div>

      <button className="px-16 pt-4 pb-1.5 mt-6 ml-5 max-w-full text-white bg-black rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[309px] max-md:px-5 max-md:ml-2.5">
        chat with <br />
        NURO
      </button>
    </aside>
  );
};
